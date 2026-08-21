import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { BUSINESS_CONFIG, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../config/business';
import { Store } from '../../models/catalog.models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section
      id="home"
      class="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:py-28 gradient-hero overflow-hidden"
    >
      <!-- Decorative Mint & Warm Wood Glows -->
      <div class="absolute top-12 right-0 w-[480px] h-[480px] bg-[#AFCFC0] rounded-full blur-[110px] opacity-40 -z-10 pointer-events-none"></div>
      <div class="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#DDEFE6] rounded-full blur-[100px] opacity-60 -z-10 pointer-events-none"></div>
      <div class="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#B8875A]/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <!-- Subtle Architectural Grid Lines / Gold Accent Watermark -->
      <div class="absolute inset-0 bg-[radial-gradient(#AFCFC0_1px,transparent_1px)] [background-size:32px_32px] opacity-25 -z-10 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <!-- Left Column: Text & CTAs -->
          <div class="lg:col-span-6 xl:col-span-7 flex flex-col items-start z-10" data-reveal>
            <!-- Physical Store Location Badge with Gold Accent -->
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] border border-[#AFCFC0] text-[#71847B] text-xs font-semibold tracking-wide mb-6 shadow-xs">
              <span class="w-2 h-2 rounded-full bg-[#155E5B]"></span>
              <app-icon name="map-pin" [size]="13" customClass="text-[#B8875A]"></app-icon>
              <span>Mayo Link Road, Ajmer</span>
              <span class="w-1 h-1 rounded-full bg-[#B89452]"></span>
              <span class="text-[#155E5B] font-bold">Physical Retail Boutique</span>
            </div>

            <!-- Main Headline with Editorial Serif & Rich Wood/Gold Tonal Emphasis -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-normal text-[#155E5B] tracking-tight leading-[1.12] mb-6">
              Style That Feels <br class="hidden sm:inline" />
              <span class="italic font-normal text-[#B8875A] drop-shadow-xs">Like You.</span>
            </h1>

            <!-- Supporting Text -->
            <p class="text-base sm:text-lg md:text-xl text-[#71847B] leading-relaxed max-w-xl mb-9 font-sans font-normal">
              Step into the world of {{ store?.name || 'Pahnave Wale Bhaiya' }} — contemporary silhouettes, graceful festive drapes, and curated Indian elegance designed for everyday moments and celebrations.
            </p>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#collections"
                id="hero-explore-btn"
                class="btn-pehnava-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide cursor-pointer group active:scale-98 shadow-sm"
              >
                <span>Explore Collections</span>
                <app-icon name="compass" [size]="17" customClass="text-[#D4B270] group-hover:rotate-45 transition-transform duration-300"></app-icon>
              </a>

              <a
                id="hero-whatsapp-btn"
                [href]="getGeneralWhatsAppUrl()"
                target="_blank"
                rel="noopener noreferrer"
                (click)="onWhatsAppClick($event)"
                aria-label="Chat with Pahnave Wale Bhaiya on WhatsApp"
                class="btn-pehnava-secondary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide cursor-pointer active:scale-98"
              >
                <app-icon name="message-circle" [size]="18" customClass="text-[#25D366]"></app-icon>
                <span>Connect on WhatsApp</span>
              </a>
            </div>

            <!-- Architectural Boutique Highlights Bar -->
            <div class="pt-6 border-t border-[#AFCFC0]/60 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
              <div class="border-l-2 border-[#155E5B] pl-3">
                <span class="text-[11px] uppercase tracking-widest text-[#71847B] block font-semibold">Store Setting</span>
                <span class="text-xs sm:text-sm font-serif font-medium text-[#26332F]">Ajmer, Rajasthan</span>
              </div>
              <div class="border-l-2 border-[#B8875A] pl-3">
                <span class="text-[11px] uppercase tracking-widest text-[#71847B] block font-semibold">Curation</span>
                <span class="text-xs sm:text-sm font-serif font-medium text-[#26332F]">Her & His Edits</span>
              </div>
              <div class="border-l-2 border-[#B89452] pl-3">
                <span class="text-[11px] uppercase tracking-widest text-[#71847B] block font-semibold">Personal Care</span>
                <span class="text-xs sm:text-sm font-serif font-medium text-[#26332F]">Direct In-Store Chat</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Hero Fashion Imagery with Architectural Store Arches -->
          <div class="lg:col-span-6 xl:col-span-5 relative" data-reveal data-reveal-delay="200">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              <!-- Outer Architectural Warm Wood & Sage Accent Frame -->
              <div class="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#DDEFE6] border-2 border-[#AFCFC0] p-2 sm:p-2.5">
                <!-- Main Hero Image -->
                <div class="relative rounded-[26px] overflow-hidden aspect-[4/5] sm:aspect-[3/4] bg-[#F0F7F3]">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=75&w=900&auto=format&fit=crop"
                    srcSet="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=75&w=600&auto=format&fit=crop 600w, https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=75&w=1000&auto=format&fit=crop 1000w"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 450px"
                    alt="Pahnave Wale Bhaiya Contemporary & Ethnic Fashion in Ajmer"
                    width="600"
                    height="750"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    class="w-full h-full object-cover object-top img-luxury-hover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0E4543]/60 via-transparent to-transparent pointer-events-none"></div>

                  <!-- Top Floating Badge: Architectural Store Signature -->
                  <div class="absolute top-4 left-4 sm:top-5 sm:left-5">
                    <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F3]/95 backdrop-blur-sm text-[#155E5B] text-xs font-semibold tracking-wider uppercase border border-[#AFCFC0] shadow-sm">
                      <app-icon name="store" [size]="13" customClass="text-[#B8875A]"></app-icon>
                      Boutique Showcase
                    </span>
                  </div>
                  
                  <!-- Floating Card On Hero Image -->
                  <div class="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 p-4 rounded-2xl bg-[#FAF8F3]/95 backdrop-blur-md border border-[#AFCFC0] shadow-lg text-[#26332F] flex items-center justify-between">
                    <div>
                      <div class="flex items-center gap-1.5 mb-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#B89452]"></span>
                        <span class="text-[10px] uppercase tracking-widest text-[#B8875A] font-bold block">
                          New Season Edit
                        </span>
                      </div>
                      <p class="text-xs sm:text-sm font-serif font-semibold text-[#155E5B]">
                        Curated Modern Indian Wear
                      </p>
                    </div>
                    <a
                      href="#featured-looks"
                      class="p-2.5 rounded-full bg-[#155E5B] text-white hover:bg-[#0E4543] transition-colors duration-200 shadow-sm"
                      aria-label="View featured looks"
                    >
                      <app-icon name="sparkles" [size]="16" customClass="text-[#D4B270]"></app-icon>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Offset decorative background frame inspired by store display walls -->
              <div class="absolute -bottom-4 -right-4 w-full h-full rounded-[32px] border-2 border-[#B8875A]/40 -z-10 hidden sm:block pointer-events-none"></div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="hidden md:flex justify-center mt-12 lg:mt-14" data-reveal data-reveal-delay="300">
          <a
            href="#the-edit"
            class="group flex flex-col items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#71847B] hover:text-[#155E5B] transition-colors duration-200"
            aria-label="Scroll to discover more"
          >
            <span>Discover The Edit</span>
            <app-icon name="arrow-down" [size]="14" customClass="text-[#B8875A] group-hover:translate-y-1 transition-transform duration-200"></app-icon>
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  @Input() store: Store | null = null;
  @Output() openWhatsApp = new EventEmitter<void>();

  onWhatsAppClick(event: MouseEvent): void {
    event.preventDefault();
    this.openWhatsApp.emit();
  }

  getGeneralWhatsAppUrl(): string {
    return getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  }
}
