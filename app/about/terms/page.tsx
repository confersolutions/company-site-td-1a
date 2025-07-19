import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Confer Solutions terms of service and user agreement.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Please review our Terms of Service. This page outlines your rights and responsibilities when using our platform.
            </p>
            <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">Last updated: January 17, 2025</div>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Terms of Service</h2>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">1. Introduction</h3>
                <p>Welcome to Confer Inc. (“Company”, “we”, “our”, “us”)! As you have just clicked our Terms of Service, please pause, grab a cup of coffee, and carefully read the following pages. It will take you approximately 20 minutes.</p>
                <p>These Terms of Service (“Terms”, “Terms of Service”) govern your use of our software, APIs, applications, mobile applications, mobile website otherwise linked or connected thereto (“Platform”). For the sake of convenience, the term Platform shall include the term “Services” wherever used throughout the Terms unless specified otherwise.</p>
                <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here <a href="http://wordpress-zw8ogwcg4wkooks8o804kggo.144.126.158.171.sslip.io/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
                <p>Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements and agree to be bound by them.</p>
                <p>This document includes a mandatory arbitration provision and regulates the resolution of any dispute which may arise between you and us as a result of using our Platform.  By clicking “Accept” when prompted or making an Account or, using or accessing the Platform, you understand that you will adhere to these Terms and all other operating rules, policies, and procedures that may be issued periodically on the Platform by us, each of which is incorporated by reference periodically by us. If you do not agree to any of these Terms, including the compulsory arbitration provision, you must stop using the Platform.</p>
                <p>Thank you for being responsible.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">2. Services</h3>
                <p>The Platform is a blockchain based mortgage loan customizer application which generates mortgage that is customized to every borrower’s custom financial need and property details. It also features functionality for including without limits, calculations of monthly payment based on a given rate and down payment, compare official loan estimates and recommend a lender with the most favourable offering while customizing the mortgage transaction, suggest other/ cheaper lender services, customize the mortgage terms, like maturity term, points, temp-buydowns, etc.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">3. Communications</h3>
                <p>By creating an Account on our Platform, you agree to subscribe to newsletters, marketing or promotional materials, and other information we may send. However, you may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or by email at <a href="mailto:info@confersolutions.ai" className="text-blue-600 dark:text-blue-400 underline">info@confersolutions.ai</a>.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">4. License</h3>
                <p>Subject to the Terms, Confer Inc. gives you a limited, revocable, non-sublicensable, non-exclusive, and non-transferable license to the Platform (and other items displayed on the Platform for download) only for purposes of using the Platform in accordance with these Terms. It is expressly prohibited without the prior express permission from Confer Inc. to use, reproduce, modify, distribute, or store any Content for purposes other than using the Platform consistent with these Terms.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">5. Purchases</h3>
                <p>If you wish to purchase any product or service made available through Platform (“Purchase”), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
                <p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct, and complete.</p>
                <p>We may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.</p>
                <p>We reserve the right to refuse or cancel your order at any time for reasons including but not limited to product or service availability, errors in the description or price of the product or service, error in your order, or other reasons. We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">6. Free Trial</h3>
                <p>Confer Inc. may, at its sole discretion, offer a Subscription with a free trial for a limited period of time (“Free Trial”).</p>
                <p>You may be required to enter your billing information in order to sign up for Free Trial.</p>
                <p>At any time and without notice, Confer Inc. reserves the right to (i) modify Terms of Service of Free Trial offer or (ii) cancel such Free Trial offer.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">7. Fee Changes</h3>
                <p>Confer Inc., in its sole discretion and at any time, may modify fees. Any fee change will become effective on the date as may be notified by us. You may terminate your contract with us in the event you do not agree with our change in accordance with this section.</p>
                <p>Confer Inc. will provide you with reasonable prior notice of any change in fees to give you an opportunity to terminate your contract with us before such change becomes effective.</p>
                <p>Your continued use of Platform after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">8. Refunds</h3>
                <p>Please refer to our cancellations and refunds Policy for information regarding cancellations and refund eligibility.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">9. Content</h3>
                <p>Our Platform allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for Content that you post on or through Platform, including its legality, reliability, and appropriateness.</p>
                <p>By posting Content on or through Platform, you represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Platform does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>
                <p>You retain any and all of your rights to any Content you submit, post, or display on or through Platform, and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third-party posts on or through Platform. However, by posting Content using Platform, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through Platform. You agree that this license includes the right for us to make your Content available to other users of Platform, who may also use your Content subject to these Terms.</p>
                <p>Confer Inc. has the right but not the obligation to monitor and edit all Content provided by users.</p>
                <p>In addition, Content found on or through this Platform is the property of Confer Inc. or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">10. Prohibited Uses</h3>
                <p>You may use Platform only for lawful purposes and in accordance with Terms. You agree not to use Platform:</p>
                <ul>
                  <li>10.1 In any way that violates any applicable national or international law or regulation.</li>
                  <li>10.2 For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                  <li>10.3 To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.</li>
                  <li>10.4 To impersonate or attempt to impersonate us, our employee, another user, or any other person or entity.</li>
                  <li>10.5 In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
                  <li>10.6 To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Platform, or which, as determined by us, may harm, or offend Company or users of Platform or expose them to liability.</li>
                  <li>10.7 Additionally, you agree not to:</li>
                  <li>10.8 Use Platform in any manner that could disable, overburden, damage, or impair Platform or interfere with any other party’s use of Platform, including their ability to engage in real-time activities through Platform.</li>
                  <li>10.9 Use any robot, spider, or other automatic devices, process, or means to access Platform for any purpose, including monitoring or copying any of the material on Platform.</li>
                  <li>10.10 Use any manual process to monitor or copy any of the material on Platform or for any other unauthorized purpose without our prior written consent.</li>
                  <li>10.11 Use any device, software, or routine that interferes with the proper working of Platform.</li>
                  <li>10.12 Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</li>
                  <li>10.13 Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Platform, the server on which Platform is stored, or any server, computer, or database connected to Platform.</li>
                  <li>10.14 Attack Platform via a denial-of-service attack or a distributed denial-of-service attack.</li>
                  <li>10.15 Take any action that may damage or falsify the Company rating.</li>
                  <li>10.16 Otherwise attempt to interfere with the proper working of Platform.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">11. Analytics</h3>
                <p>We may use third-party Service Providers to monitor and analyze the use of our Platform.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">12. Google Analytics</h3>
                <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Platform. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                <p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a></p>
                <p>We also encourage you to review Google’s policy for safeguarding your data: <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245</a>.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">13. Firebase</h3>
                <p>Firebase is an analytics service provided by Google Inc.</p>
                <p>You may opt-out of certain Firebase features through your mobile device settings, such as your device advertising settings, or by following the instructions provided by Google in their Privacy Policy: <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a></p>
                <p>For more information on what type of information Firebase collects, please visit the Google Privacy Terms web page: <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">14. Fathom Analytics</h3>
                <p>Fathom Analytics is an analytics service provided by Conva Ventures Inc. You can find their Privacy Policy here: <a href="https://usefathom.com/privacy/" target="_blank" rel="noopener noreferrer">https://usefathom.com/privacy/</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">15. Piwik / Matomo</h3>
                <p>Piwik or Matomo is a web analytics service. You can visit their Privacy Policy page here: <a href="https://matomo.org/privacy-policy" target="_blank" rel="noopener noreferrer">https://matomo.org/privacy-policy</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">16. Clicky</h3>
                <p>Clicky is a web analytics service. Read the Privacy Policy for Clicky here: <a href="https://clicky.com/terms" target="_blank" rel="noopener noreferrer">https://clicky.com/terms</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">17. Cloudflare Analytics</h3>
                <p>Cloudflare analytics is a web analytics service operated by Cloudflare Inc. Read the Privacy Policy here: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">https://www.cloudflare.com/privacypolicy/</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">18. Statcounter</h3>
                <p>Statcounter is a web traffic analysis tool. You can read the Privacy Policy for Statcounter here: <a href="https://statcounter.com/about/legal/" target="_blank" rel="noopener noreferrer">https://statcounter.com/about/legal/</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">19. Flurry Analytics</h3>
                <p>Flurry Analytics service is provided by Yahoo! Inc.</p>
                <p>You can opt-out from Flurry Analytics service to prevent Flurry Analytics from using and sharing your information by visiting the Flurry’s Opt-out page: <a href="https://dev.flurry.com/secure/optOut.do" target="_blank" rel="noopener noreferrer">https://dev.flurry.com/secure/optOut.do</a></p>
                <p>For more information on the privacy practices and policies of Yahoo!, please visit their Privacy Policy page:  <a href="https://legal.yahoo.com/us/en/yahoo/privacy/index.html" target="_blank" rel="noopener noreferrer">https://legal.yahoo.com/us/en/yahoo/privacy/index.html</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">20. Mixpanel</h3>
                <p>Mixpanel is provided by Mixpanel Inc.</p>
                <p>You can prevent Mixpanel from using your information for analytics purposes by opting-out. To opt-out of the Mixpanel service, please visit this page: <a href="https://mixpanel.com/optout/" target="_blank" rel="noopener noreferrer">https://mixpanel.com/optout/</a></p>
                <p>For more information on what type of information Mixpanel collects, please visit the Terms of Use page of Mixpanel: <a href="https://mixpanel.com/terms/" target="_blank" rel="noopener noreferrer">https://mixpanel.com/terms/</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">21. Unity Analytics</h3>
                <p>Unity Analytics is provided by Unity Technologies.</p>
                <p>For more information on what type of information Unity Analytics collects, please visit their Privacy Policy page: <a href="hhttps://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">hhttps://unity3d.com/legal/privacy-policy</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">22. Azure Devops</h3>
                <p>Azure DevOps is a Software as a service (SaaS) platform from Microsoft that provides an end-to-end DevOps toolchain for developing and deploying software.</p>
                <p>You can find Microsoft Privacy Statement here: <a href="https://privacy.microsoft.com/en-gb/privacystatement" target="_blank" rel="noopener noreferrer">https://privacy.microsoft.com/en-gb/privacystatement</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">23. No Use by Minors</h3>
                <p>Platform is intended only for access and use by individuals at least of the age of majority. By accessing or using any of the Company, you warrant and represent that you are at least of the age of majority and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least age of majority , you are prohibited from both the access and usage of Platform.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">24. Accounts</h3>
                <p>When you create an account with us, you guarantee that you are above age of majority and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Platform.</p>
                <p>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Platform or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
                <p>You may not use as a username the name of another person or entity, or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar, or obscene.</p>
                <p>We reserve the right to refuse service, terminate accounts, remove, or edit content, or cancel orders at our sole discretion.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">25. Intellectual Property</h3>
                <p>Platform and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Confer Inc. and its licensors. Platform is protected by copyright, trademark, and other laws of the United States. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Confer Inc.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">25. Copyright Policy</h3>
                <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Platform infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.</p>
                <p>If you are a copyright owner or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to <a href="mailto:info@confersolutions.ai" className="text-blue-600 dark:text-blue-400 underline">info@confersolutions.ai</a>, with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”.</p>
                <p>You may be held accountable for damages (including costs and attorneys’ fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Platform on your copyright.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">27. DMCA Notice and Procedure for Copyright Infringement Claims</h3>
                <p>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p>
                <ul>
                  <li>(a) an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright’s interest;</li>
                  <li>(b) a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;</li>
                  <li>(c) identification of the URL or other specific location on Platform where the material that you claim is infringing is located;</li>
                  <li>(d) your address, telephone number, and email address;</li>
                  <li>(e) a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
                  <li>(f) a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.</li>
                </ul>
                <p>You can contact our Copyright Agent via email at <a href="mailto:info@confersolutions.ai" className="text-blue-600 dark:text-blue-400 underline">info@confersolutions.ai</a></p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">28. Error Reporting and Feedback</h3>
                <p>You may provide us directly at <a href="mailto:info@confersolutions.ai" className="text-blue-600 dark:text-blue-400 underline">info@confersolutions.ai</a> with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Platform (“Feedback”). You acknowledge and agree that: (i) you shall not retain, acquire, or assert any intellectual property right or other rights, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited, and perpetual right to use (including copy, modify, create derivative works, publish, distribute, and commercialize) Feedback in any manner and for any purpose.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">29. Links To Other Web Sites</h3>
                <p>Our Platform may contain links to third-party websites or services that are not owned or controlled by Confer Inc.</p>
                <p>Confer Inc. has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
                <p>YOU ACKNOWLEDGE AND AGREE THAT CONFER INC. SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY, OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS, OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD-PARTY WEBSITES OR SERVICES.</p>
                <p>WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD-PARTY WEBSITES OR SERVICES THAT YOU VISIT.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">30. Disclaimer of Warranty</h3>
                <p>THESE SERVICES ARE PROVIDED BY THE COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. THE COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.</p>
                <p>NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.</p>
                <p>THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE.</p>
                <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">31. Limitation of Liability</h3>
                <p>EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS</p>
                <p>AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF THE COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF THE COMPANY, IT WILL BE LIMITED TO THE ANY FEES PAID BY YOU FOR USING OF PARTICULAR SERVICES DURING THE IMMEDIATELY PREVIOUS THREE (3) MONTH PERIOD , AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">32. Release</h3>
                <p>To the maximum extent permissible by applicable law, you hereby absolutely release Confer Inc. and its affiliates as well as all other users of the Platform from responsibilities including but not limited to, claims, causes of action, liability, expenses, demands, and/or damages (actual and consequential) of all kinds and nature, known and unknown and claims of negligence that may arise from the use of or inability to use, or in relation to your use of and/or reliance on the Platform, including any disputes which may arise between users and the acts or omissions of third parties.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">33. Termination</h3>
                <p>We may terminate or suspend your account and bar access to Platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.</p>
                <p>If you wish to terminate your account, you may simply discontinue using Platform.</p>
                <p>All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">34. Governing Law and Dispute Resolution</h3>
                <p>These Terms shall be governed and construed in accordance with the laws of the State of California without regard to its conflict of law provisions.</p>
                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Platform and supersede and replace any prior agreements we might have had between us regarding Platform.</p>
                <p>Any dispute concerning the subject matter of these Terms, or the breach, termination or validity thereof (a “Dispute”) will be settled exclusively in accordance with the procedures set forth herein.  The party seeking resolution of a Dispute will first give notice in writing of the Dispute to the other party, setting forth the nature of the Dispute and a concise statement of the issues to be resolved. If the Dispute has not been resolved through good faith efforts and negotiations of senior officers or representatives of the parties within fifteen (15) days of receipt by the relevant party of the notice of Dispute, such notice will be deemed to be a notice of arbitration and the parties agree to submit the Dispute to a single arbitrator mutually agreeable to both parties. The venue of such arbitration shall be California. In the event that the Parties cannot agree on a sole arbitrator, the arbitrator will be appointed by a judge of the appropriate court on application by either party to the Dispute. All decisions and awards rendered by the arbitrator will be final and binding upon the parties for all questions submitted to such arbitrator, and the costs associated with such submission shall be shared equally by the parties involved in the Dispute unless the arbitrator decides otherwise.  The parties waive all rights of appeal, therefore to any court or tribunal, and agree that the only recourse by any party to any court will be for the purpose of enforcing an arbitration award.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">35. Changes to Platform</h3>
                <p>We reserve the right to withdraw or amend our Platform, and any service or material we provide via Platform, in our sole discretion without notice. We will not be liable if for any reason all or any part of Platform is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Platform, or the entire Platform, to users, including registered users.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">36. Amendments to Terms</h3>
                <p>We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.</p>
                <p>Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently, so you are aware of any changes, as they are binding on you.</p>
                <p>By continuing to access or use our Platform after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Platform.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">37. Miscellaneous</h3>
                <ul>
                  <li><strong>37.1 Entire agreement and severability.</strong> These Terms are the entire agreement between you and us with regards to the Platform. These Terms supersede all prior, contemporaneous communications and proposals made (whether oral, written or electronic) between you and us with regards to the Platform.</li>
                  <li><strong>37.2 Force majeure.</strong> We will not be liable in any case for any failure or delay in the performance of our obligations for any reason hereunder if such failure results from: (a) any cause beyond our reasonable control, including but not limited to, mechanical, electronic or communications failure or degradation, denial-of-service attacks, (b) any failure by a third-party hosting provider or utility provider, (c) strikes, shortages, riots, fires, acts of God, war, terrorism, and governmental action.</li>
                  <li><strong>37.3 Notices.</strong> All notices under these Terms shall be in writing Unless otherwise specified in these Term of Service. Notices to us shall be sent by email to <a href="mailto:info@confersolutions.ai" className="text-blue-600 dark:text-blue-400 underline">info@confersolutions.ai</a>. You shall ensure written confirmation of receipt for notice to be effective. Notices to you shall be sent to your last known email address (or the email address of your successor, if any) and/or to any email address that would be reasonably likely to provide notice to you, and such notice shall be effective upon transmission.</li>
                  <li><strong>37.4 Interpretation.</strong> The headers are provided only to make this agreement easier to read and understand.</li>
                  <li><strong>37.5 Successors and Assigns:</strong> This Agreement shall be binding on and inure to the benefit of the parties hereto and their respective heirs, legal or personal representatives, successors, and assigns.</li>
                  <li><strong>37.6 Taxes:</strong> You and Confer Inc. shall bear their respective taxes applicable to them which may arise by virtue of this Agreement imposed by appropriate authorities. Neither Party shall collect taxes on the behalf of the other Party unless mandated by applicable laws.</li>
                  <li><strong>37.7 Relationship of the parties.</strong> You and Confer Inc. are independent contractors. These Terms shall not and do not create a partnership, franchise, joint venture, agency, fiduciary or employment relationship of any kind between the Parties. You shall not have any authority of any kind to bind us in any respect. Unless expressly stated otherwise in these Terms, there are no third-party beneficiaries to the Terms. We do not have any special relationship you nor any fiduciary duty.</li>
                  <li><strong>37.8 Waiver And Severability.</strong> No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision. If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">38. Acknowledgment</h3>
                <p>BY USING PLATFORM OR SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">39. Contact Us</h3>
                <p>Please send your feedback, comments, requests for technical support: By email: <a href="mailto:info@confersolutions.ai" className="text-blue-600 dark:text-blue-400 underline">info@confersolutions.ai</a>.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
