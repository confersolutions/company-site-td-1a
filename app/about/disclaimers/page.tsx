import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimers | Confer Solutions AI",
  description: "Confer Solutions disclaimers and limitation of liability statement. Review important legal disclaimers and liability limitations for our AI-powered services.",
  keywords: [
    "disclaimers",
    "liability disclaimer",
    "limitation of liability",
    "legal disclaimers",
    "liability statement",
    "service disclaimers",
    "legal notices",
    "liability limitations",
    "risk disclaimer",
    "legal terms",
    "disclaimer notice",
    "liability terms",
    "service limitations",
    "AI service disclaimers",
    "platform disclaimers"
  ],
  authors: [{ name: "Confer Solutions" }],
  creator: "Confer Solutions",
  publisher: "Confer Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://confersolutions.ai"),
  alternates: {
    canonical: "/about/disclaimers",
  },
  openGraph: {
    title: "Disclaimers | Confer Solutions AI",
    description:
      "Confer Solutions disclaimers and limitation of liability statement. Review important legal disclaimers and liability limitations for our AI-powered services.",
    url: "https://confersolutions.ai/about/disclaimers",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1606890658317-687463a67487?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Disclaimers - Legal Notices and Liability Limitations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimers | Confer Solutions AI",
    description:
      "Confer Solutions disclaimers and limitation of liability statement. Review important legal disclaimers and liability limitations for our AI-powered services.",
    images: [
      "https://images.unsplash.com/photo-1606890658317-687463a67487?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    ],
    creator: "@confer_inc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function DisclaimersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Disclaimers</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Please review our Disclaimers and Limitation of Liability Statement. This page outlines important information about your use of Confer Solutions.
            </p>
            <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">Last updated: January 17, 2025</div>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  This Disclaimers and Limitation of Liability Statement (“Agreement”) sets out the terms, thresholds, and instances of our liabilities with respect to the services we provide to you, the users (“user” “you” “your”), through Confer Inc.’s software, APIs, applications, mobile applications, and mobile website, or any other platforms otherwise linked or connected thereto (hereinafter collectively referred to as the “Platform”). This Agreement is an integral part of our Terms of Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Using The Platform Services</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">This section covers the terms under which the Platform service is made available to you and the extent of our liability in their respect. You agree that:</p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <li>We are not obliged to ensure that the Platform is available to all users at all times. While we make all attempts to deny access only to those individuals who violate this Platform’s regulations, we may be occasionally forced to use access denial methods that cause a disruption in access for other users. We shall not be liable in this regard under any circumstances.</li>
                  <li>We are not responsible for a loss of access to this Platform’s services due to failure of networks connected to the Internet, or any other temporary hardware or software failure.</li>
                  <li>We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, any Platform service (or any part thereof) with or without notice.</li>
                  <li>There will always be a possibility that this Platform could include inaccuracies or errors. Additionally, a possibility exists that unauthorised additions, deletions and alterations could be made by third parties to the Platform. Although we attempt to ensure the integrity and the accuracy of this Platform, we make no guarantees whatsoever as to its correctness or accuracy. In the event that such an inaccuracy arises, please inform us by emailing us at <a href="mailto:info@confersolutions.ai" className="text-blue-600 dark:text-blue-400 underline">info@confersolutions.ai</a> so that it can be corrected.</li>
                  <li>This Platform may contain links to other websites operated by third parties (“linked sites”). You acknowledge that, when you click on a link to visit a linked site, a frame may appear that contains this Platform’s logo, advertisements and/or other content selected by this Platform. You acknowledge that this Platform and its sponsors neither endorse nor are affiliated with the linked sites and are not responsible for any content that appears on the linked sites. This Platform has neither reviewed nor approved these sites and is not responsible for the contents or omissions of any linked site or any links contained in the linked sites. In the event a visitor who may infringe or repeatedly infringes the copyrights or other intellectual property rights of Confer Inc. or others, we may in our discretion, terminate or deny access to and use of the Platform.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Your Representations and Warranties</h2>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <li>You hereby represent and warrant that you will not:</li>
                  <li>violate any law, contract, intellectual property, or other third-party right or commit a tort, and that you are solely responsible for your conduct while accessing or using the Platform.</li>
                  <li>provide false or misleading information to us or our affiliates.</li>
                  <li>use the Platform in a manner which may disrupt or inhibit others from accessing or enjoying the Platform fully or partially.</li>
                  <li>develop, utilise, or disseminate any software in any manner that could damage, harm, or impair the Platform.</li>
                  <li>access or attempt to access any feature or area of the Platform that you are not authorised to access.</li>
                  <li>use any robot, spider, crawler, scraper, script, browser extension, offline reader or other automated means or interface not authorised by us to access the Platform, extract data, or otherwise interfere with or modify the rendering Platform pages or functionality.</li>
                  <li>use data collected from our Platform for any direct marketing activity (including without limitation, email marketing, SMS marketing, telemarketing, and direct marketing).</li>
                  <li>use the Platform for any illegal or unauthorised purpose, or engage in, encourage, or promote any activity that violates this Agreement, and other documents we make available through the Platform which are applicable to you.</li>
                  <li>use the Platform or its network to carry out any illegal activities, or deliberately engaging in activities designed to adversely affect the performance of the Platform or its network.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Warranty Disclaimer</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">THE PLATFORM IS PROVIDED “AS IS”, “AS AVAILABLE” BASIS. THE USE OF PLATFORM IS AT THE USER’S SOLE RISK. THE PLATFORM IS PROVIDED WITHOUT WARRANTY, REPRESENTATION, OR GUARANTEE OF ANY KIND WHATSOEVER, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTIES OF TITLE OR ACCURACY AND ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED, WITH THE SOLE EXCEPTION OF WARRANTIES (IF ANY) WHICH CANNOT BE EXPRESSLY EXCLUDED UNDER APPLICABLE LAW. CONFER INC., OUR DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, PARTNERS, AND CONTENT PROVIDERS DO NOT WARRANT THAT: (I) THE PLATFORM IS OR WILL BE SECURE OR AVAILABLE AT ANY PARTICULAR TIME, INSTANCE OR LOCATION; (II) ANY DEFECTS MATERIAL OR NOT, OR ERRORS WILL BE CORRECTED; (III) ANY/ALL CONTENT OR SOFTWARE AVAILABLE AT OR THROUGH THE PLATFORM IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; (IV) ANY/ALL INFORMATION IS COMPLETE, ACCURATE, UP-TO-DATE, OR RELIABLE; (V) ANY PARTICULAR SERVICE, CONTENT, OR PRODUCT REFERRED TO IN THE PLATFORM IS SAFE, APPROPRIATE, OR EFFECTIVE FOR YOUR AND/OR YOUR EMPLOYEES; (VI) THAT RESULTS OF USING THE SERVICES PROVIDED BY US WILL MEET YOUR REQUIREMENTS(VII) THE USE OF THE PLATFORM PROVIDED BY US SHALL COMPLY WITH ANY LAWS, RULES, REGULATIONS, REQUIREMENTS, POLICIES, QUALIFICATIONS, OR BEST PRACTICES, INCLUDING BUT NOT LIMITED TO PRIVACY LAWS, PROFESSIONAL LICENSURE, OR REIMBURSEMENT; (VIII) THE USE OF THE PLATFORM SHALL NOT RESULT IN LEGAL DUTIES OR LIABILITY. WE DO NOT GUARANTEE IN ANY INSTANCE THAT ANY PARTICULAR CONTENT OR MATERIAL SHALL BE MADE AVAILABLE THROUGH THE PLATFORM.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Limitation Of Liability</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">THE USE OF THE PLATFORM IS ENTIRELY AT YOUR OWN RISK. IN NO CASE SHALL WE, NOR OUR OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, PARTNERS, SUPPLIERS, CONTENT PROVIDERS, OR ANY USERS BE LIABLE TO YOU UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE, OR ANY OTHER LEGAL OR EQUITABLE THEORY WITH REGARDS TO THE PLATFORM FOR: (I) ANY LOST PROFITS, LOSS IN REVENUE, LOSS OF GOODWILL, ANY DATA LOSS, LOSS OF USE, COST OF PROCURING SUBSTITUTE GOODS OR SERVICES, OTHER INTANGIBLE LOSSES, OR INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, COMPENSATORY, EXEMPLARY, RELIANCE, PUNITIVE, LIQUIDATED, OR ANY SIMILAR CONSEQUENTIAL DAMAGES OF ANY TYPE WHATSOEVER (HOWEVER ARISING), (II) ANY, VIRUSES, BUGS, TROJAN HORSES, OR THE LIKE (REGARDLESS OF THE SOURCE OF ORIGIN), (III) ANY PERSONAL INJURY OR HARM, INCLUDING DEATH, WHICH IS CAUSED BY YOUR USE OR MISUSE OF THE PLATFORM, (IV) ANY CLAIMS, DEMANDS, OR DAMAGES ARISING OUT OF OR RELATING TO ANY DISPUTE BETWEEN YOU AND ANY OTHER USER OF THE PLATFORM, OR (V) ANY DIRECT DAMAGES IN EXCESS OF (IN THE AGGREGATE) OF OR GREATER THAN ANY FEES PAID BY YOU FOR USING OF PARTICULAR SERVICES DURING THE IMMEDIATELY PREVIOUS THREE (3) MONTH PERIOD. REMEDIES IF ANY UNDER THE TERMS OF SERVICE ARE EXCLUSIVE AND ARE LIMITED TO THOSE EXPRESSLY PROVIDED FOR IN THE TERMS OF SERVICE. NOTHING IN THE OF SERVICE SHALL BE DEEMED TO EXCLUDE OR LIMIT YOUR LIABILITY IN RESPECT OF ANY INDEMNITY GIVEN BY YOU UNDER THE TERMS OF SERVICE.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Contact</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">You may contact us through our Platform, or the address given below: <a href="mailto:info@confersolutions.ai" className="text-blue-600 dark:text-blue-400 underline">info@confersolutions.ai</a>.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
