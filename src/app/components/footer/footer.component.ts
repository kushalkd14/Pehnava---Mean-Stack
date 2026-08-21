import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Store } from '../../models/catalog.models';
import { BUSINESS_CONFIG, getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGES } from '../../config/business';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <footer id="main-footer" class="bg-[#092B2A] text-[#FAF8F3] pt-20 pb-12 border-t border-[#B89452]/30 relative overflow-hidden">
      <!-- Decorative Gold & Deep Teal Glow -->
      <div class="absolute top-0 left-1/3 w-96 h-96 bg-[#155E5B]/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-80 h-80 bg-[#B89452]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-[#155E5B]">
          <!-- Brand Column -->
          <div class="lg:col-span-5 flex flex-col items-start">
            <div class="flex items-baseline gap-1.5 mb-6">
              <span class="font-serif font-medium text-2xl sm:text-3xl text-[#FAF8F3] tracking-tight">
                Pahnave Wale
              </span>
              <span class="font-serif italic font-normal text-2xl sm:text-3xl text-[#D4B270] tracking-tight">
                Bhaiya
              </span>
            </div>

            <p class="text-sm text-[#DDEFE6]/90 font-sans font-normal leading-relaxed max-w-sm mb-6">
              A contemporary Indian fashion boutique in Ajmer. Celebrating personal style, graceful silhouettes, and thoughtful tailoring for life’s everyday and festive moments.
            </p>

            <!-- Social & WhatsApp Buttons -->
            <div class="flex items-center gap-3">
              <a
                [href]="store?.instagramUrl || businessConfig.instagramUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-[#0E4543] border border-[#B89452]/40 text-[#DDEFE6] hover:text-white hover:bg-[#155E5B] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Follow on Instagram"
              >
                <app-icon name="instagram" [size]="17" customClass="text-[#C98F91]"></app-icon>
              </a>

              <a
                [href]="getGeneralWhatsAppUrl()"
                target="_blank"
                rel="noopener noreferrer"
                (click)="onWhatsAppClick($event)"
                aria-label="Chat with Pahnave Wale Bhaiya on WhatsApp"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#155E5B] hover:bg-[#0E4543] text-white text-xs font-semibold tracking-wide border border-[#AFCFC0]/30 transition-colors shadow-2xs cursor-pointer"
              >
                <app-icon name="message-circle" [size]="15" customClass="text-[#25D366]"></app-icon>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <!-- Quick Navigation Links -->
          <div class="lg:col-span-3">
            <h4 class="text-xs uppercase tracking-[0.25em] font-bold text-[#D4B270] mb-5">
              Explore Collections
            </h4>
            <ul class="space-y-2.5">
              @for (link of navLinks; track link.name) {
                <li>
                  <a
                    [href]="link.href"
                    class="text-sm text-[#DDEFE6]/90 hover:text-[#D4B270] transition-colors duration-150 font-normal flex items-center gap-1.5"
                  >
                    <span>{{ link.name }}</span>
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Boutique Contact Details -->
          <div class="lg:col-span-4">
            <h4 class="text-xs uppercase tracking-[0.25em] font-bold text-[#D4B270] mb-5">
              Physical Boutique
            </h4>
            <div class="space-y-4 text-sm text-[#DDEFE6]/90 font-normal leading-relaxed">
              <div class="flex items-start gap-3">
                <app-icon name="map-pin" [size]="17" customClass="text-[#B8875A] shrink-0 mt-0.5"></app-icon>
                <p class="leading-relaxed">
                  {{ store?.fullAddress || businessConfig.fullAddress }}
                </p>
              </div>

              <div class="flex items-center gap-3">
                <app-icon name="phone" [size]="16" customClass="text-[#25D366] shrink-0"></app-icon>
                <a
                  [href]="getGeneralWhatsAppUrl()"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-[#D4B270] transition-colors"
                >
                  WhatsApp: {{ store?.whatsappDisplayNumber || whatsappDisplayNumber }}
                </a>
              </div>

              <div class="flex items-center gap-3">
                <app-icon name="clock" [size]="16" customClass="text-[#AFCFC0] shrink-0"></app-icon>
                <p>
                  {{ store?.workingDays || businessConfig.workingDays }}: {{ store?.storeTimings || businessConfig.storeTimings }}
                </p>
              </div>

              <div class="pt-2">
                <a
                  [href]="store?.googleMapsUrl || businessConfig.googleMapsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-xs text-[#D4B270] hover:underline font-medium"
                >
                  <app-icon name="map-pin" [size]="13"></app-icon>
                  <span>Open in Google Maps →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AFCFC0]/90 font-normal">
          <div class="flex items-center gap-2">
            <app-icon name="sparkles" [size]="12" customClass="text-[#B89452]"></app-icon>
            <p>© {{ currentYear }} {{ store?.name || 'Pahnave Wale Bhaiya' }}. All rights reserved. Ajmer, Rajasthan.</p>
          </div>

          <button
            (click)="scrollToTop()"
            aria-label="Back to top of page"
            class="inline-flex items-center gap-2 text-xs text-[#FAF8F3] hover:text-[#D4B270] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <app-icon name="arrow-up" [size]="14" customClass="text-[#B89452]"></app-icon>
          </button>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  @Input() store: Store | null = null;
  @Output() openWhatsApp = new EventEmitter<void>();

  readonly businessConfig = BUSINESS_CONFIG;
  readonly whatsappDisplayNumber = WHATSAPP_DISPLAY_NUMBER;
  readonly currentYear = new Date().getFullYear();

  readonly navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Edit', href: '#the-edit' },
    { name: 'Collections', href: '#collections' },
    { name: 'Featured Looks', href: '#featured-looks' },
    { name: 'Why Us', href: '#why-pehnava' },
    { name: 'Reviews', href: '#customer-reviews' },
    { name: 'About', href: '#about' },
    { name: 'Visit Store', href: '#visit-us' },
  ];

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  onWhatsAppClick(event: MouseEvent): void {
    event.preventDefault();
    this.openWhatsApp.emit();
  }

  getGeneralWhatsAppUrl(): string {
    return getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  }
}
