import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-modern-grace-section',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  template: `
    <section class="py-16 sm:py-24 bg-[#F3EEE4] relative overflow-hidden">
      <!-- Ambient Watermark -->
      <div class="absolute inset-0 bg-[radial-gradient(#AFCFC0_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <!-- Left Spotlight Image -->
          <div class="lg:col-span-6 relative">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] border-2 border-[#AFCFC0] shadow-xl bg-white relative group">
              <img
                src="assets/collections/modern-grace.webp"
                alt="Modern Grace Women's Collection"
                loading="lazy"
                class="w-full h-full object-cover img-luxury-hover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0E4543]/60 via-transparent to-transparent pointer-events-none"></div>
              <div class="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#FAF8F3]/95 backdrop-blur-md border border-[#AFCFC0] flex items-center justify-between text-[#155E5B]">
                <div>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-[#B8875A] block">Spotlight Edit</span>
                  <span class="text-sm font-serif font-bold">Minimalist Modern Grace</span>
                </div>
                <span class="text-xs font-bold text-[#155E5B] bg-[#DDEFE6] px-3 py-1 rounded-full">New Season</span>
              </div>
            </div>
          </div>

          <!-- Right Spotlight Content -->
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] border border-[#AFCFC0] text-[#155E5B] text-xs font-bold uppercase tracking-[0.2em] shadow-xs">
              <app-icon name="sparkles" [size]="13" customClass="text-[#B89452]"></app-icon>
              <span>Contemporary Elegance</span>
            </div>

            <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif text-[#155E5B] leading-tight">
              The Modern Grace Collection
            </h2>

            <p class="text-sm sm:text-base text-[#71847B] font-sans leading-relaxed">
              Designed for the modern woman who appreciates subtle sophistication. Featuring sleek draped silhouettes, soft pastel hues, breathable fabrics, and refined minimalist embroidery perfect for high-tea gatherings and festive dinners.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="bg-[#FAF8F3] p-4 rounded-2xl border border-[#D5D8D3]">
                <span class="text-lg font-serif font-bold text-[#155E5B] block">Pastel & Jewel Tones</span>
                <span class="text-xs text-[#71847B]">Earthy terracotta, sage & dusty rose</span>
              </div>
              <div class="bg-[#FAF8F3] p-4 rounded-2xl border border-[#D5D8D3]">
                <span class="text-lg font-serif font-bold text-[#B8875A] block">Versatile Styling</span>
                <span class="text-xs text-[#71847B]">Workwear to festive evening transition</span>
              </div>
            </div>

            <div class="pt-4 flex flex-wrap gap-4">
              <button
                (click)="whatsAppService.openWhatsApp('Modern Grace Collection')"
                class="btn-pehnava-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2.5 cursor-pointer shadow-md active:scale-98"
              >
                <app-icon name="message-circle" [size]="17" customClass="text-[#25D366]"></app-icon>
                <span>Enquire Modern Grace</span>
              </button>

              <a
                routerLink="/collections/modern-grace"
                class="btn-pehnava-secondary px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View Full Edit</span>
                <app-icon name="arrow-right" [size]="14"></app-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ModernGraceSectionComponent {
  readonly whatsAppService = inject(WhatsAppService);
}
