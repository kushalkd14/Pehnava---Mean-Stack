import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
    selector: 'app-terms-page',
    standalone: true,
    imports: [CommonModule],
    template: `
    <main class="pt-24 pb-20 sm:pt-28 bg-[#FAF8F3]">
      <!-- Terms Banner -->
      <section class="py-12 sm:py-16 bg-[#F3EEE4] border-b border-[#D5D8D3]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A] block mb-2">
            Legal Policy
          </span>
          <h1 class="text-3xl sm:text-5xl font-bold text-[#155E5B] font-sans">
            Terms and Conditions
          </h1>
          <p class="text-xs sm:text-sm text-[#71847B] mt-3 font-mono">
            Last updated: September 05, 2026
          </p>
        </div>
      </section>

      <!-- Terms Content Section -->
      <section class="py-12 sm:py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
          <div class="bg-white p-6 sm:p-12 rounded-3xl border border-[#D5D8D3] shadow-xs text-[#26332F] space-y-8 font-sans leading-relaxed text-sm sm:text-base">
            
            <p class="text-[#71847B]">
              Please read these terms and conditions carefully before using Our Service.
            </p>

            <!-- Interpretation and Definitions -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-2 border-b border-[#F0F7F3] pb-2">
                Interpretation and Definitions
              </h2>
              
              <h3 class="text-lg font-semibold text-[#155E5B]">Interpretation</h3>
              <p class="text-[#71847B]">
                The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3 class="text-lg font-semibold text-[#155E5B] pt-2">Definitions</h3>
              <p class="text-[#71847B]">For the purposes of these Terms and Conditions:</p>
              
              <ul class="space-y-3 list-disc pl-5 text-[#71847B]">
                <li>
                  <strong class="text-[#155E5B]">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Country/State</strong> refers to: Rajasthan, India
                </li>
                <li>
                  <strong class="text-[#155E5B]">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to Pehnava.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Service</strong> refers to the Website.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Website</strong> refers to Pehnava, accessible from <a href="https://www.pehnavawalebhaiya.com/" target="_blank" rel="noopener noreferrer" class="text-[#B8875A] font-semibold underline hover:text-[#155E5B]">https://www.pehnavawalebhaiya.com/</a>
                </li>
                <li>
                  <strong class="text-[#155E5B]">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </li>
              </ul>
            </div>

            <!-- Acknowledgment -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Acknowledgment
              </h2>
              <p class="text-[#71847B]">
                These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p class="text-[#71847B]">
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>
              <p class="text-[#71847B]">
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>
              <p class="text-[#71847B]">
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
              </p>
              <p class="text-[#71847B]">
                Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.
              </p>
            </div>

            <!-- Links to Other Websites -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Links to Other Websites
              </h2>
              <p class="text-[#71847B]">
                Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
              </p>
              <p class="text-[#71847B]">
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
              </p>
              <p class="text-[#71847B]">
                We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
              </p>

              <h3 class="text-lg font-semibold text-[#155E5B] pt-2">Links from a Third-Party Social Media Service</h3>
              <p class="text-[#71847B]">
                The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.
              </p>
              <p class="text-[#71847B]">
                You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service, including any content, goods, or services made available through them. Your use of any Third-Party Social Media Service is governed by that Third-Party Social Media Service's terms and privacy policies.
              </p>
            </div>

            <!-- Termination -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Termination
              </h2>
              <p class="text-[#71847B]">
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </p>
              <p class="text-[#71847B]">
                Upon termination, Your right to use the Service will cease immediately.
              </p>
            </div>

            <!-- Limitation of Liability -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Limitation of Liability
              </h2>
              <p class="text-[#71847B]">
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
              </p>
              <p class="text-[#71847B]">
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>
              <p class="text-[#71847B]">
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
              </p>
            </div>

            <!-- "AS IS" and "AS AVAILABLE" Disclaimer -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                "AS IS" and "AS AVAILABLE" Disclaimer
              </h2>
              <p class="text-[#71847B]">
                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
              </p>
              <p class="text-[#71847B]">
                Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
              </p>
              <p class="text-[#71847B]">
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
              </p>
            </div>

            <!-- Governing Law -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Governing Law
              </h2>
              <p class="text-[#71847B]">
                The laws of the Country/State, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>
            </div>

            <!-- Disputes Resolution -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Disputes Resolution
              </h2>
              <p class="text-[#71847B]">
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </p>
            </div>

            <!-- For European Union (EU) Users -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                For European Union (EU) Users
              </h2>
              <p class="text-[#71847B]">
                If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
              </p>
            </div>

            <!-- United States Legal Compliance -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                United States Legal Compliance
              </h2>
              <p class="text-[#71847B]">
                You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
              </p>
            </div>

            <!-- Severability and Waiver -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Severability and Waiver
              </h2>
              
              <h3 class="text-lg font-semibold text-[#155E5B]">Severability</h3>
              <p class="text-[#71847B]">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>

              <h3 class="text-lg font-semibold text-[#155E5B] pt-2">Waiver</h3>
              <p class="text-[#71847B]">
                Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
              </p>
            </div>

            <!-- Translation Interpretation -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Translation Interpretation
              </h2>
              <p class="text-[#71847B]">
                These Terms and Conditions may have been translated if We have made them available to You on our Service.
                You agree that the original English text shall prevail in the case of a dispute.
              </p>
            </div>

            <!-- Changes to These Terms and Conditions -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Changes to These Terms and Conditions
              </h2>
              <p class="text-[#71847B]">
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </p>
              <p class="text-[#71847B]">
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.
              </p>
            </div>

            <!-- Contact Us -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Contact Us
              </h2>
              <p class="text-[#71847B]">
                If you have any questions about these Terms and Conditions, You can contact us:
              </p>
              <ul class="list-disc pl-5 text-[#71847B] space-y-1">
                <li>
                  By phone: <a href="tel:8005785709" class="text-[#155E5B] font-bold hover:underline">8005785709</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  `
})
export class TermsComponent implements OnInit {
    private readonly seo = inject(SeoService);
    private readonly schema = inject(SchemaService);
    readonly whatsAppService = inject(WhatsAppService);

    ngOnInit(): void {
        this.seo.setMeta({
            title: 'Terms & Conditions | Pehnava Ajmer',
            description: 'Read the official Terms and Conditions governing your access and use of the Pehnava boutique website and services in Ajmer, Rajasthan.',
            url: '/terms',
            robots: 'index, follow',
        });

        this.schema.injectBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Terms & Conditions', url: '/terms' },
        ]);
    }
}
