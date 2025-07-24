"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterModal } from "@/components/newsletter-modal"
import { useState } from "react"

type Props = {
  title: string
  description: string
}

export function BlogPreviewSection({ title, description }: Props) {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)

  return (
    
  )
}
