import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Store } from '../../models/catalog.models';
import { BUSINESS_CONFIG, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../config/business';

@Component({
    selector: 'app-visit-us',
    standalone: true,
    imports: [CommonModule, IconComponent],
    template: `
    <section id="visit-us" class="py-20 lg:py-28 gradient-mint-sage border-t border-[#AFCFC0] relative overflow-hidden">
      <!-- Decorative Accents -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#FAF8F3] rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div class="absolute bottom-0 left-10 w-80 h-80 bg-[#B8875A]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <!-- Left Column: Store Details & Timings -->
          <div class="lg:col-span-6 flex flex-col items-start" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-[#AFCFC0] shadow-xs">
              <app-icon name="store" [size]="14" customClass="text-[#B8875A]"></app-icon>
              <span>Physical Retail Store</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#155E5B] tracking-tight mb-5 leading-tight">
              Experience the Boutique in Ajmer
            </h2>

            <p class="text-base text-[#26332F]/85 leading-relaxed font-sans font-normal mb-8 max-w-xl">
              We warmly invite you to visit our store on Mayo Link Road. Step in to touch the fine fabrics, explore exclusive festive collections, and enjoy friendly personal styling guidance in our soothing mint-and-wood boutique.
            </p>

            <!-- Store Information Cards -->
            <div class="w-full space-y-4 mb-8">
              <!-- Address Card -->
              <div class="p-5 rounded-2xl bg-[#FAF8F3] border border-[#AFCFC0] flex items-start gap-4 shadow-xs">
                <div class="w-10 h-10 rounded-xl bg-[#DDEFE6] border border-[#AFCFC0] flex items-center justify-center text-[#155E5B] shrink-0">
                  <app-icon name="map-pin" [size]="18" customClass="text-[#B8875A]"></app-icon>
                </div>
                <div>
                  <h4 class="text-xs uppercase tracking-wider font-bold text-[#155E5B] mb-1">
                    Store Address
                  </h4>
                  <p class="text-sm text-[#26332F] font-serif font-medium leading-snug">
                    {{ store?.fullAddress || businessConfig.fullAddress }}
                  </p>
                  <p class="text-sm text-[#71847B] mt-1 font-sans font-normal">
                    Nagra, Ajmer, Rajasthan – 305001
                  </p>
                </div>
              </div>

              <!-- Timings Card -->
              <div class="p-5 rounded-2xl bg-[#FAF8F3] border border-[#AFCFC0] flex items-start gap-4 shadow-xs">
                <div class="w-10 h-10 rounded-xl bg-[#DDEFE6] border border-[#AFCFC0] flex items-center justify-center text-[#155E5B] shrink-0">
                  <app-icon name="clock" [size]="18" customClass="text-[#155E5B]"></app-icon>
                </div>
                <div>
                  <h4 class="text-xs uppercase tracking-wider font-bold text-[#155E5B] mb-1">
                    Store Hours & Days
                  </h4>
                  <p class="text-sm text-[#26332F] font-serif font-medium leading-snug">
                    {{ store?.workingDays || businessConfig.workingDays }}: {{ store?.storeTimings || businessConfig.storeTimings }}
                  </p>
                  <p class="text-sm text-[#71847B] mt-1 font-sans font-normal">
                    Open all week for festive & everyday styling
                  </p>
                </div>
              </div>
            </div>

            <!-- Direct Google Maps & WhatsApp Action Buttons -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                [href]="store?.googleMapsUrl || businessConfig.googleMapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-pehnava-primary inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide cursor-pointer shadow-md active:scale-98"
              >
                <app-icon name="navigation" [size]="16" customClass="text-[#D4B270]"></app-icon>
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                [href]="getStoreVisitWhatsAppUrl()"
                target="_blank"
                rel="noopener noreferrer"
                (click)="onWhatsAppClick($event)"
                aria-label="Enquire about store visit on WhatsApp"
                class="btn-pehnava-secondary inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide cursor-pointer active:scale-98"
              >
                <app-icon name="whatsapp" [size]="17" customClass="text-[#25D366] shrink-0"></app-icon>
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Physical Boutique Ambiance Showcase Card -->
          <div class="lg:col-span-6" data-reveal data-reveal-delay="200">
            <div class="rounded-[32px] overflow-hidden bg-[#FAF8F3] border-2 border-[#AFCFC0] shadow-xl p-6 sm:p-8">
              <div class="flex items-center justify-between pb-5 mb-6 border-b border-[#D5D8D3]">
                <div class="flex items-center gap-2.5">
                  <div class="w-3 h-3 rounded-full bg-[#155E5B]"></div>
                  <span class="text-xs uppercase tracking-widest font-bold text-[#155E5B]">
                    Store Ambiance & Highlights
                  </span>
                </div>
                <span class="text-xs text-[#B8875A] font-semibold">Mayo Link Road, Ajmer</span>
              </div>

              <!-- 4 Ambiance Points -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <app-icon name="check-circle-2" [size]="18" customClass="text-[#155E5B] shrink-0 mt-0.5"></app-icon>
                  <div>
                    <h4 class="text-sm font-serif font-semibold text-[#155E5B]">Soft Mint & Wood Architecture</h4>
                    <p class="text-sm text-[#71847B] font-normal leading-relaxed">Calm, spacious boutique environment with dedicated trial areas.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <app-icon name="check-circle-2" [size]="18" customClass="text-[#155E5B] shrink-0 mt-0.5"></app-icon>
                  <div>
                    <h4 class="text-sm font-serif font-semibold text-[#155E5B]">Curated Women's Fashion Racks</h4>
                    <p class="text-sm text-[#71847B] font-normal leading-relaxed">Distinct collections of daily Kurtis, Cotton suits, Co-Ord sets, Bottom wear, and festive ensembles.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <app-icon name="check-circle-2" [size]="18" customClass="text-[#155E5B] shrink-0 mt-0.5"></app-icon>
                  <div>
                    <h4 class="text-sm font-serif font-semibold text-[#155E5B]">Personal Styling Assistance</h4>
                    <p class="text-sm text-[#71847B] font-normal leading-relaxed">Friendly team ready to assist with sizing, mix-and-match, and custom holds.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <app-icon name="check-circle-2" [size]="18" customClass="text-[#155E5B] shrink-0 mt-0.5"></app-icon>
                  <div>
                    <h4 class="text-sm font-serif font-semibold text-[#155E5B]">Convenient Ajmer Location</h4>
                    <p class="text-sm text-[#71847B] font-normal leading-relaxed">Easily accessible on Mayo Link Road with convenient customer parking.</p>
                  </div>
                </div>
              </div>

              <!-- Mini Map Card / Google Maps Link -->
              <div class="p-4 rounded-2xl bg-[#DDEFE6] border border-[#AFCFC0] flex items-center justify-between">
                <div class="flex items-center gap-2 text-xs font-semibold text-[#155E5B]">
                  <app-icon name="map-pin" [size]="15" customClass="text-[#B8875A]"></app-icon>
                  <span>Mayo Link Road, Ajmer, Rajasthan</span>
                </div>
                <a
                  [href]="store?.googleMapsUrl || businessConfig.googleMapsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-bold text-[#155E5B] hover:text-[#0E4543] underline decoration-[#B89452] underline-offset-4"
                >
                  View on Map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class VisitUsComponent {
    @Input() store: Store | null = null;
    @Output() openWhatsApp = new EventEmitter<void>();

    readonly businessConfig = BUSINESS_CONFIG;

    onWhatsAppClick(event: MouseEvent): void {
        event.preventDefault();
        this.openWhatsApp.emit();
    }

    getStoreVisitWhatsAppUrl(): string {
        return getWhatsAppUrl(WHATSAPP_MESSAGES.storeVisit);
    }
}
