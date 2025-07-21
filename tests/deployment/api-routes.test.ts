/**
 * @jest-environment node
 */

jest.mock('next/server', () => {
  class MockNextRequest {
    constructor(public url: string, public init: any) {}
    
    async json() {
      return JSON.parse(this.init.body)
    }
    
    get method() { return this.init.method }
    get headers() { return new Map() }
  }

  return {
    NextRequest: MockNextRequest,
    NextResponse: {
      json: (data: any, init?: any) => ({
        json: async () => data,
        status: init?.status || 200,
      }),
    },
  }
})

import { POST as sendEmailPOST } from '@/app/api/send-email/route'
import { POST as consultationPOST } from '@/app/api/consultation/route'
import { POST as newsletterPOST } from '@/app/api/newsletter/route'

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ id: 'test-email-id' }),
    },
  })),
}))

describe('API Routes - Runtime Initialization Pattern', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    delete process.env.RESEND_API_KEY
  })

  describe('Send Email Route - Runtime Resend Initialization', () => {
    it('should fail when RESEND_API_KEY is not configured', async () => {
      const { NextRequest } = require('next/server')
      const request = new NextRequest('http://localhost:3000/api/send-email', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message',
          type: 'contact',
        }),
      })

      const response = await sendEmailPOST(request as any)
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Failed to send email')
    })

    it('should initialize Resend client at runtime when API key is present', async () => {
      process.env.RESEND_API_KEY = 'test-api-key'
      
      const { NextRequest } = require('next/server')
      const request = new NextRequest('http://localhost:3000/api/send-email', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message',
          type: 'contact',
        }),
      })

      const response = await sendEmailPOST(request as any)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
    })

    it('should handle different email types with correct subjects', async () => {
      process.env.RESEND_API_KEY = 'test-api-key'
      
      const testCases = [
        { type: 'contact', expectedSubject: 'Website Inquiry' },
        { type: 'consultation', expectedSubject: 'AI Consultation Request' },
        { type: 'newsletter', expectedSubject: 'Newsletter Signup' },
        { type: 'unknown', expectedSubject: 'Website Contact' },
      ]

      for (const testCase of testCases) {
        const { NextRequest } = require('next/server')
      const request = new NextRequest('http://localhost:3000/api/send-email', {
          method: 'POST',
          body: JSON.stringify({
            name: 'Test User',
            email: 'test@example.com',
            message: 'Test message',
            type: testCase.type,
          }),
        })

        const response = await sendEmailPOST(request as any)
        const data = await response.json()

        expect(response.status).toBe(200)
        expect(data.success).toBe(true)
      }
    })

    it('should use custom subject when provided', async () => {
      process.env.RESEND_API_KEY = 'test-api-key'
      
      const { NextRequest } = require('next/server')
      const request = new NextRequest('http://localhost:3000/api/send-email', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message',
          subject: 'Custom Subject',
          type: 'contact',
        }),
      })

      const response = await sendEmailPOST(request as any)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
    })
  })

  describe('Consultation Route', () => {
    it('should process consultation requests successfully', async () => {
      const { NextRequest } = require('next/server')
      const request = new NextRequest('http://localhost:3000/api/consultation', {
        method: 'POST',
        body: JSON.stringify({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          message: 'I need help with AI implementation',
        }),
      })

      const response = await consultationPOST(request as any)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.message).toBe('Thank you for your interest! We will contact you soon.')
    })

    it('should handle consultation request errors', async () => {
      const { NextRequest } = require('next/server')
      const request = new NextRequest('http://localhost:3000/api/consultation', {
        method: 'POST',
        body: 'invalid json',
      })

      const response = await consultationPOST(request as any)
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data.success).toBe(false)
    })
  })

  describe('Newsletter Route', () => {
    it('should process newsletter subscriptions successfully', async () => {
      const { NextRequest } = require('next/server')
      const request = new NextRequest('http://localhost:3000/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({
          email: 'subscriber@example.com',
        }),
      })

      const response = await newsletterPOST(request as any)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.message).toBe('Newsletter subscription successful!')
    })

    it('should handle newsletter subscription errors', async () => {
      const { NextRequest } = require('next/server')
      const request = new NextRequest('http://localhost:3000/api/newsletter', {
        method: 'POST',
        body: 'invalid json',
      })

      const response = await newsletterPOST(request as any)
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data.error).toBe('Failed to process request')
    })
  })
})
