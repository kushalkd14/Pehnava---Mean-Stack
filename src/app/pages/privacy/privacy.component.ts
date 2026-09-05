import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
    selector: 'app-privacy-page',
    standalone: true,
    imports: [CommonModule],
    template: `
    <main class="pt-24 pb-20 sm:pt-28 bg-[#FAF8F3]">
      <!-- Privacy Policy Banner -->
      <section class="py-12 sm:py-16 bg-[#F3EEE4] border-b border-[#D5D8D3]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A] block mb-2">
            Data Protection & Transparency
          </span>
          <h1 class="text-3xl sm:text-5xl font-bold text-[#155E5B] font-sans">
            Privacy Policy
          </h1>
          <p class="text-xs sm:text-sm text-[#71847B] mt-3 font-mono">
            Last updated: September 05, 2026
          </p>
        </div>
      </section>

      <!-- Privacy Content Section -->
      <section class="py-12 sm:py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
          <div class="bg-white p-6 sm:p-12 rounded-3xl border border-[#D5D8D3] shadow-xs text-[#26332F] space-y-8 font-sans leading-relaxed text-sm sm:text-base">
            
            <p class="text-[#71847B]">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p class="text-[#71847B]">
              We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent (where consent is required).
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
              <p class="text-[#71847B]">For the purposes of this Privacy Policy:</p>
              
              <ul class="space-y-3 list-disc pl-5 text-[#71847B]">
                <li>
                  <strong class="text-[#155E5B]">Account</strong> means a unique account created for You to access Our Service or parts of Our Service.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to Pehnava.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Country/State</strong> refers to: Rajasthan, India.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Device</strong> means any device that can access the Service, such as a computer, a cell phone or a digital tablet.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Personal Data</strong> (or "Personal Information") is any information that relates to an identified or identifiable individual. We use "Personal Data" and "Personal Information" interchangeably unless a law uses a specific term.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Service</strong> refers to the Website.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                </li>
                <li>
                  <strong class="text-[#155E5B]">User</strong> means any individual who accesses or uses the Service.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Website</strong> refers to Pehnava, accessible from <a href="https://www.pehnavawalebhaiya.com" target="_blank" rel="noopener noreferrer" class="text-[#B8875A] font-semibold underline hover:text-[#155E5B]">https://www.pehnavawalebhaiya.com</a>.
                </li>
                <li>
                  <strong class="text-[#155E5B]">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </li>
              </ul>
            </div>

            <!-- Collecting and Using Your Personal Information -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Collecting and Using Your Personal Information
              </h2>
              
              <h3 class="text-lg font-semibold text-[#155E5B]">Types of Data Collected</h3>
              
              <h4 class="text-base font-semibold text-[#155E5B]">Personal Data</h4>
              <p class="text-[#71847B]">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You.
              </p>

              <h4 class="text-base font-semibold text-[#155E5B] pt-2">Usage Data</h4>
              <p class="text-[#71847B]">Usage Data is collected automatically when using the Service.</p>
              <p class="text-[#71847B]">
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
              <p class="text-[#71847B]">
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
              </p>
              <p class="text-[#71847B]">
                We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
              </p>

              <h4 class="text-base font-semibold text-[#155E5B] pt-2">Tracking Technologies and Cookies</h4>
              <p class="text-[#71847B]">
                We use tracking technologies (such as cookies) to track the activity and to improve Our Service. The technologies We use may include:
              </p>
              <ul class="list-disc pl-5 text-[#71847B] space-y-2">
                <li>
                  <strong class="text-[#155E5B]">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of Our Service.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Web Beacons.</strong> Certain sections of Our Service may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages and for other related website statistics.
                </li>
              </ul>
              <p class="text-[#71847B]">
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
              </p>
              <p class="text-[#71847B]">
                Where required by law, We use non-essential cookies only with Your consent. You can withdraw or change Your consent at any time using Our cookie preferences tool (if available) or through Your browser/device settings.
              </p>
              
              <p class="text-[#71847B]">We use both Session and Persistent Cookies for the purposes set out below:</p>
              <ul class="space-y-3 list-disc pl-5 text-[#71847B]">
                <li>
                  <strong class="text-[#155E5B]">Necessary / Essential Cookies</strong> (Session Cookies, Administered by Us): Essential to provide You with services available through the Website and to enable You to use its features.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Cookies Policy / Notice Acceptance Cookies</strong> (Persistent Cookies, Administered by Us): Identify whether users have accepted the use of cookies on the Website and record consent choices.
                </li>
                <li>
                  <strong class="text-[#155E5B]">Functionality Cookies</strong> (Persistent Cookies, Administered by Us): Allow Us to remember choices You make when You use the Website to provide a more personalized experience.
                </li>
              </ul>
            </div>

            <!-- Use of Your Personal Data -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Use of Your Personal Data
              </h2>
              <p class="text-[#71847B]">The Company may use Personal Data for the following purposes:</p>
              <ul class="space-y-2 list-disc pl-5 text-[#71847B]">
                <li><strong class="text-[#155E5B]">To provide and maintain Our Service</strong>, including monitoring usage.</li>
                <li><strong class="text-[#155E5B]">To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
                <li><strong class="text-[#155E5B]">For the performance of a contract:</strong> product purchases or contracts through the Service.</li>
                <li><strong class="text-[#155E5B]">To contact You:</strong> via email, calls, SMS, or WhatsApp regarding updates and informative communications.</li>
                <li><strong class="text-[#155E5B]">To provide You</strong> with news, special offers, and general information about goods/services similar to what you inquired about.</li>
                <li><strong class="text-[#155E5B]">To manage Your requests:</strong> attending and managing requests to Us.</li>
                <li><strong class="text-[#155E5B]">For business transfers:</strong> evaluation or conducting of mergers or asset sales.</li>
                <li><strong class="text-[#155E5B]">For other purposes:</strong> data analysis, identifying usage trends, and evaluating campaign effectiveness.</li>
              </ul>

              <p class="text-[#71847B]">We may share Your Personal Data in the following situations:</p>
              <ul class="space-y-2 list-disc pl-5 text-[#71847B]">
                <li><strong class="text-[#155E5B]">With Service Providers:</strong> to monitor and analyze service usage.</li>
                <li><strong class="text-[#155E5B]">For business transfers:</strong> during merger or acquisition negotiations.</li>
                <li><strong class="text-[#155E5B]">With Affiliates:</strong> subject to compliance with this Privacy Policy.</li>
                <li><strong class="text-[#155E5B]">With other users:</strong> in public interaction areas.</li>
                <li><strong class="text-[#155E5B]">With Your consent:</strong> for any other specified purpose.</li>
              </ul>
            </div>

            <!-- Retention of Your Personal Data -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Retention of Your Personal Data
              </h2>
              <p class="text-[#71847B]">
                The Company will retain Your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy, complying with legal obligations, resolving disputes, and enforcing agreements.
              </p>
              <ul class="space-y-2 list-disc pl-5 text-[#71847B]">
                <li><strong class="text-[#155E5B]">Account Information:</strong> retained for the duration of account relationship plus up to 24 months post-closure.</li>
                <li><strong class="text-[#155E5B]">Usage Data & Analytics:</strong> retained up to 24 months from collection date.</li>
                <li><strong class="text-[#155E5B]">Server Logs:</strong> retained up to 24 months for security monitoring and troubleshooting.</li>
              </ul>
            </div>

            <!-- Transfer of Your Personal Data -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Transfer of Your Personal Data
              </h2>
              <p class="text-[#71847B]">
                Your information, including Personal Data, is processed at the Company's operating offices. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy.
              </p>
            </div>

            <!-- Delete Your Personal Data -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Delete Your Personal Data
              </h2>
              <p class="text-[#71847B]">
                You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may also contact Us to request access to, correct, or delete any Personal Data that You have provided to Us.
              </p>
            </div>

            <!-- Security & Children's Privacy -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Security & Children's Privacy
              </h2>
              <p class="text-[#71847B]">
                The security of Your Personal Data is important to Us. While We strive to use commercially reasonable means to protect Your Personal Data, no electronic storage method is 100% secure.
              </p>
              <p class="text-[#71847B]">
                Our Service is not directed to anyone under the age of 16. If We become aware of data collected from anyone under 16 without parental consent, We will take steps to remove that information.
              </p>
            </div>

            <!-- Changes & Contact -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-[#155E5B] font-sans pt-4 border-b border-[#F0F7F3] pb-2">
                Changes & Contact Us
              </h2>
              <p class="text-[#71847B]">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </p>
              <p class="text-[#71847B]">
                If You have any questions about this Privacy Policy, You can contact Us:
              </p>
              <ul class="list-disc pl-5 text-[#71847B]">
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
export class PrivacyComponent implements OnInit {
    private readonly seo = inject(SeoService);
    private readonly schema = inject(SchemaService);
    readonly whatsAppService = inject(WhatsAppService);

    ngOnInit(): void {
        this.seo.setMeta({
            title: 'Privacy Policy | Pehnava Ajmer',
            description: 'Read the official Privacy Policy of Pehnava boutique in Ajmer, Rajasthan, detailing how we handle, protect, and process user data.',
            url: '/privacy',
            robots: 'index, follow',
        });

        this.schema.injectBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/privacy' },
        ]);
    }
}
