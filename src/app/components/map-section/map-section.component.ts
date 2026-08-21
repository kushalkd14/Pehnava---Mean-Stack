import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { BUSINESS_CONFIG } from '../../config/business';

@Component({
  selector: 'app-map-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="visit-store" class="py-16 sm:py-20 bg-[#FAF8F3] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">
            Visit Store Location
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#155E5B] mt-2 mb-4 font-sans">
            Experience Pehnava RJ01 Boutique
          </h2>
          <p class="text-sm text-[#71847B] font-normal leading-relaxed">
            Step inside our physical boutique studio in Ajmer, Rajasthan to discover custom fitting, tactile fabrics, and personalized bridal styling consultations.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <!-- Store Details Info Card -->
          <div class="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#D5D8D3] shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div class="flex items-center gap-3 mb-6 pb-4 border-b border-[#F0F7F3]">
                <div class="w-12 h-12 rounded-2xl bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center shrink-0">
                  <app-icon name="store" [size]="24"></app-icon>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[#155E5B]">Pehnava RJ01 Studio</h3>
                  <p class="text-xs text-[#71847B]">Nagra, Ajmer, Rajasthan</p>
                </div>
              </div>

              <div class="space-y-4 text-sm text-[#26332F]">
                <!-- Address -->
                <div class="flex items-start gap-3">
                  <app-icon name="map-pin" [size]="18" customClass="text-[#B8875A] shrink-0 mt-0.5"></app-icon>
                  <div>
                    <span class="block text-xs font-semibold uppercase tracking-wider text-[#71847B] mb-0.5">Address</span>
                    <p class="text-xs sm:text-sm font-normal text-[#26332F] leading-relaxed">
                      {{ businessConfig.fullAddress }}
                    </p>
                  </div>
                </div>

                <!-- Business Hours -->
                <div class="flex items-start gap-3">
                  <app-icon name="clock" [size]="18" customClass="text-[#155E5B] shrink-0 mt-0.5"></app-icon>
                  <div>
                    <span class="block text-xs font-semibold uppercase tracking-wider text-[#71847B] mb-0.5">Working Hours</span>
                    <p class="text-xs sm:text-sm font-semibold text-[#155E5B]">
                      {{ businessConfig.workingDays }}: {{ businessConfig.storeTimings }}
                    </p>
                  </div>
                </div>

                <!-- Parking & Accessibility Info -->
                <div class="flex items-start gap-3">
                  <app-icon name="check-circle" [size]="18" customClass="text-[#25D366] shrink-0 mt-0.5"></app-icon>
                  <div>
                    <span class="block text-xs font-semibold uppercase tracking-wider text-[#71847B] mb-0.5">Amenities</span>
                    <p class="text-xs text-[#71847B]">
                      Dedicated Trial Rooms • Customer Parking Available • Personalized Bridal Fitting
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Google Maps Direct Button -->
            <div class="pt-4 border-t border-[#D5D8D3]">
              <a
                [href]="businessConfig.googleMapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full btn-pehnava-primary inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide cursor-pointer shadow-sm"
              >
                <app-icon name="navigation" [size]="16" customClass="text-[#D4B270]"></app-icon>
                <span>Get Directions in Google Maps</span>
              </a>
            </div>
          </div>

          <!-- Embedded Responsive Google Map -->
          <div class="lg:col-span-7 rounded-3xl overflow-hidden border border-[#D5D8D3] shadow-sm min-h-[350px] lg:min-h-[450px] relative bg-[#F0F7F3]">
            <iframe
              title="Pehnava RJ01 Boutique Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.854082690467!2d74.6399!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbooDInMjkuNiJOIDc0wrAzOCcyMy42IkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style="border:0; min-height: 380px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MapSectionComponent {
  readonly businessConfig = BUSINESS_CONFIG;
}
