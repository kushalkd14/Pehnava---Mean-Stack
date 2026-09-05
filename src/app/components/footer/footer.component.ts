import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Store } from '../../models/catalog.models';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  template: `
    <footer id="main-footer" class="bg-[#092B2A] text-[#FAF8F3] pt-20 pb-12 border-t border-[#B89452]/30 relative overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="absolute top-0 left-1/3 w-96 h-96 bg-[#155E5B]/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-80 h-80 bg-[#B89452]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-[#155E5B]">
          <!-- Brand Column -->
          <div class="lg:col-span-5 flex flex-col items-start">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-full bg-[#155E5B] p-0.5 shadow-md flex items-center justify-center shrink-0 border border-[#B89452]/40">
                <img src="pehnava-logo.png" alt="Pehnava RJ01" class="w-full h-full object-contain rounded-full" />
              </div>
              <div class="flex flex-col">
                <div class="inline-flex items-baseline gap-1">
                  <span class="font-bold text-[#FAF8F3] text-xl sm:text-2xl tracking-tight leading-none font-sans">
                    PEHNAVA
                  </span>
                </div>
                <span class="text-[10px] uppercase tracking-[0.2em] font-medium text-[#DDEFE6]/80 mt-0.5">
                  Fashion Boutique & Studio
                </span>
              </div>
            </div>

            <p class="text-sm text-[#DDEFE6]/90 font-sans font-normal leading-relaxed max-w-sm mb-6">
              A premier luxury boutique in Rajasthan. Specializing in handcrafted Bridal Lehengas, Designer Sarees, Reception Gowns & Festive Ethnic Outfits for every memorable occasion.
            </p>

            <!-- Social & WhatsApp Buttons -->
            <div class="flex items-center gap-3">
              <a
                [href]="businessConfig.instagramUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-[#0E4543] border border-[#B89452]/40 text-[#DDEFE6] hover:text-white hover:bg-[#155E5B] flex items-center justify-center transition-colors shadow-sm"
                aria-label="Follow on Instagram"
              >
                <app-icon name="instagram" [size]="17" customClass="text-[#C98F91]"></app-icon>
              </a>

              <button
                (click)="onWhatsAppEnquire()"
                aria-label="Chat with Pehnava on WhatsApp"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#155E5B] hover:bg-[#0E4543] text-white text-xs font-semibold tracking-wide border border-[#AFCFC0]/30 transition-colors shadow-sm cursor-pointer"
              >
                <app-icon name="whatsapp" [size]="16" customClass="text-[#25D366]"></app-icon>
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>

          <!-- Quick Navigation Links -->
          <div class="lg:col-span-3">
            <h4 class="text-xs uppercase tracking-[0.25em] font-bold text-[#D4B270] mb-5">
              Explore Pages
            </h4>
            <ul class="space-y-2.5">
              @for (link of pageLinks; track link.path) {
                <li>
                  <a
                    [routerLink]="link.path"
                    class="text-sm text-[#DDEFE6]/90 hover:text-[#D4B270] transition-colors duration-150 font-normal flex items-center gap-1.5"
                  >
                    <span class="text-[#B89452] text-xs">›</span>
                    <span>{{ link.name }}</span>
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Boutique Contact Details -->
          <div class="lg:col-span-4">
            <h4 class="text-xs uppercase tracking-[0.25em] font-bold text-[#D4B270] mb-5">
              Visit Our Boutique
            </h4>
            <div class="space-y-4 text-sm text-[#DDEFE6]/90 font-normal leading-relaxed">
              <div class="flex items-start gap-3">
                <app-icon name="map-pin" [size]="17" customClass="text-[#B8875A] shrink-0 mt-0.5"></app-icon>
                <p class="leading-relaxed">
                  {{ businessConfig.fullAddress }}
                </p>
              </div>

              <div class="flex items-center gap-3">
                <app-icon name="whatsapp" [size]="16" customClass="text-[#25D366] shrink-0"></app-icon>
                <button (click)="onWhatsAppEnquire()" class="hover:text-[#D4B270] transition-colors text-left cursor-pointer">
                  WhatsApp: {{ businessConfig.whatsappDisplayNumber }}
                </button>
              </div>

              <div class="flex items-center gap-3">
                <app-icon name="clock" [size]="16" customClass="text-[#AFCFC0] shrink-0"></app-icon>
                <p>
                  {{ businessConfig.workingDays }}: {{ businessConfig.storeTimings }}
                </p>
              </div>

              <div class="pt-2">
                <a
                  [href]="businessConfig.googleMapsUrl"
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

        <!-- Footer Bottom Bar with Mazrik Signature -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AFCFC0]/90 font-normal border-t border-[#155E5B]/60">
          <div class="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <div class="flex items-center gap-2">
              <app-icon name="sparkles" [size]="12" customClass="text-[#B89452]"></app-icon>
              <p>© {{ currentYear }} Pehnava Boutique. All rights reserved. Ajmer, Rajasthan.</p>
            </div>
            <span class="hidden sm:inline text-[#B89452]">•</span>
            <p>
              Designed & Developed by
              <a
                href="https://mazrik.in"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#D4B270] font-bold hover:underline"
              >
                Mazrik
              </a>
            </p>
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
  @Output() openWhatsAppModal = new EventEmitter<void>();

  private readonly whatsAppService = inject(WhatsAppService);
  readonly businessConfig = BUSINESS_CONFIG;
  readonly currentYear = new Date().getFullYear();

  readonly pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Pehnava', path: '/about' },
    { name: 'Boutique Collections', path: '/collections' },
    { name: 'Client & Store Gallery', path: '/gallery' },
    { name: 'Visit Store & Contact', path: '/contact' },
  ];

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  onWhatsAppEnquire(): void {
    this.openWhatsAppModal.emit();
    this.whatsAppService.openWhatsApp();
  }
}
