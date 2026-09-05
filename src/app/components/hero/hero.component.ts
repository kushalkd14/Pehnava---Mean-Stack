import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Store } from '../../models/catalog.models';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section
      id="home"
      class="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center pt-20 pb-12 lg:pt-24 lg:pb-16 bg-[#092B2A] overflow-hidden"
    >
      <!-- FULL-BLEED ULTRA-HD HERO BANNER BACKGROUND IMAGE -->
      <div class="absolute inset-0 z-0">
        <img
          src="assets/hero/hero-main.webp"
          srcSet="assets/hero/hero-main-600.webp 600w, assets/hero/hero-main-1200.webp 1200w, assets/hero/hero-main-1920.webp 1920w, assets/hero/hero-main.webp 3840w"
          sizes="100vw"
          alt="Pehnava Luxury Boutique Showcase"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          class="w-full h-full object-cover object-center img-luxury-hover"
        />

        <!-- ULTRA-LIGHT Subtle Vignette for Maximum Image Visibility & Rich Maroon/Gold Vibrancy -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#000000]/65 via-[#000000]/30 to-transparent pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-[#000000]/40 pointer-events-none"></div>
      </div>

      <!-- OVERLAY CONTENT (Minimal & Elegant Directly On Top of Banner Image) -->
      <div class="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto">
        <div class="max-w-3xl space-y-6" data-reveal>
          <!-- Physical Location Badge -->
          <div class="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#000000]/50 backdrop-blur-md border border-[#AFCFC0]/40 text-[#DDEFE6] text-xs font-semibold tracking-wide shadow-lg">
            <span class="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <app-icon name="map-pin" [size]="13" customClass="text-[#D4B270]"></app-icon>
            <span class="font-bold text-white">Mayo Link Road, Ajmer</span>
            <span class="w-1 h-1 rounded-full bg-[#D4B270]"></span>
            <span class="text-[#DDEFE6]">Physical Retail Studio</span>
          </div>

          <!-- Main Royal Headline Overlay -->
          <h1 class="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-serif text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Royal Festive <br class="hidden sm:inline" />
            <span class="italic font-normal text-[#D4B270] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">Women’s Couture.</span>
          </h1>

          <!-- Minimal Supporting Text -->
          <p class="text-base sm:text-xl text-[#F3EEE4] font-sans max-w-2xl font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Ajmer’s premier fashion boutique for handcrafted Gota Patti Shararas, graceful Anarkalis, pure Mulmul cotton suit sets, and chic co-ord edits.
          </p>

          <!-- Action Buttons Overlay -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <a
              href="#collections"
              class="w-full sm:w-auto btn-pehnava-gold inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer group active:scale-98 shadow-xl text-center"
            >
              <span>Explore Collections</span>
              <app-icon name="compass" [size]="16" customClass="text-white group-hover:rotate-45 transition-transform duration-300"></app-icon>
            </a>

            <!-- Direct Functional WhatsApp Button -->
            <button
              (click)="onWhatsAppClick()"
              type="button"
              aria-label="Connect on WhatsApp with Pehnava"
              class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 shadow-xl transition-all duration-200 text-center"
            >
              <app-icon name="whatsapp" [size]="18" customClass="text-white shrink-0"></app-icon>
              <span>Connect on WhatsApp</span>
            </button>
          </div>

          <!-- Bottom Architectural Highlights Bar Over Image -->
          <div class="pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
            <div class="border-l-2 border-[#D4B270] pl-3.5 backdrop-blur-xs py-0.5">
              <span class="text-[10px] uppercase tracking-widest text-[#DDEFE6] block font-bold drop-shadow-xs">Studio Address</span>
              <span class="text-xs sm:text-sm font-serif font-semibold text-white drop-shadow-sm">Mayo Link Road, Ajmer</span>
            </div>
            <div class="border-l-2 border-[#25D366] pl-3.5 backdrop-blur-xs py-0.5">
              <span class="text-[10px] uppercase tracking-widest text-[#DDEFE6] block font-bold drop-shadow-xs">Exclusively</span>
              <span class="text-xs sm:text-sm font-serif font-semibold text-white drop-shadow-sm">Women's Ethnic Couture</span>
            </div>
            <div class="border-l-2 border-[#D4B270] pl-3.5 backdrop-blur-xs py-0.5">
              <span class="text-[10px] uppercase tracking-widest text-[#DDEFE6] block font-bold drop-shadow-xs">Trial Lounge</span>
              <span class="text-xs sm:text-sm font-serif font-semibold text-white drop-shadow-sm">In-Store Trial Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  @Input() store: Store | null = null;
  @Output() openWhatsApp = new EventEmitter<void>();

  private readonly whatsAppService = inject(WhatsAppService);

  onWhatsAppClick(customMessage?: string): void {
    this.openWhatsApp.emit();
    this.whatsAppService.openWhatsApp(customMessage || 'Hello Pehnava, I want to enquire about boutique collections!');
  }
}
