import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-coord-edit-section',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  template: `
    <section class="py-14 sm:py-24 bg-[#DDEFE6] relative overflow-hidden">
      <!-- Background Ambient Details -->
      <div class="absolute inset-0 bg-[radial-gradient(#AFCFC0_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none"></div>

      <div class="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <!-- Left Content -->
          <div class="lg:col-span-6 space-y-5 sm:space-y-6 order-2 lg:order-1">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#AFCFC0] text-[#155E5B] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] shadow-xs">
              <app-icon name="sparkles" [size]="13" customClass="text-[#B89452] shrink-0"></app-icon>
              <span>Gen-Z & Contemporary Favorite</span>
            </div>

            <h2 class="text-2xl sm:text-4xl md:text-5xl font-serif text-[#155E5B] leading-tight">
              The Co-Ord Set Edit
            </h2>

            <p class="text-xs sm:text-base text-[#71847B] font-sans leading-relaxed">
              Effortless elegance in matching 2-piece and 3-piece ethnic fusion sets. Featuring botanical prints, fluid wide-leg trousers, button-down tunic tops, and lightweight breathable fabrics designed for casual brunches, vacations, and festive gatherings.
            </p>

            <div class="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div class="bg-[#FAF8F3] p-3.5 sm:p-4 rounded-2xl border border-[#D5D8D3]">
                <span class="text-sm sm:text-lg font-serif font-bold text-[#155E5B] block">Ready-to-Wear</span>
                <span class="text-[11px] sm:text-xs text-[#71847B]">Pre-matched tunic & flared trousers</span>
              </div>
              <div class="bg-[#FAF8F3] p-3.5 sm:p-4 rounded-2xl border border-[#D5D8D3]">
                <span class="text-sm sm:text-lg font-serif font-bold text-[#B8875A] block">All-Day Comfort</span>
                <span class="text-[11px] sm:text-xs text-[#71847B]">Ultra-soft Modal silk & Rayon cotton</span>
              </div>
            </div>

            <div class="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                (click)="whatsAppService.openWhatsApp('Co-Ord Set Collection')"
                class="w-full sm:w-auto btn-pehnava-primary px-5 sm:px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-md active:scale-98 text-center"
              >
                <app-icon name="whatsapp" [size]="17" customClass="text-[#25D366] shrink-0"></app-icon>
                <span>Enquire Co-Ord Sets</span>
              </button>

              <a
                routerLink="/collections/coord-sets"
                class="w-full sm:w-auto btn-pehnava-secondary px-5 sm:px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Explore Co-Ords</span>
                <app-icon name="arrow-right" [size]="14" customClass="shrink-0"></app-icon>
              </a>
            </div>
          </div>

          <!-- Right Image Showcase -->
          <div class="lg:col-span-6 relative order-1 lg:order-2">
            <div class="rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/3] border-2 border-[#AFCFC0] shadow-xl bg-white relative group">
              <img
                src="assets/collections/coord-sets.webp"
                alt="Pehnava Co-Ord Sets Collection"
                loading="lazy"
                class="w-full h-full object-cover object-top img-luxury-hover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0E4543]/60 via-transparent to-transparent pointer-events-none"></div>
              <div class="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-2xl bg-[#FAF8F3]/95 backdrop-blur-md border border-[#AFCFC0] flex items-center justify-between text-[#155E5B]">
                <div>
                  <span class="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#B8875A] block">Signature Look</span>
                  <span class="text-xs sm:text-sm font-serif font-bold">Botanical Ivory Co-Ord Set</span>
                </div>
                <span class="text-[10px] sm:text-xs font-bold text-[#155E5B] bg-[#DDEFE6] px-2.5 py-1 rounded-full">Boutique Exclusive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CoordEditSectionComponent {
  readonly whatsAppService = inject(WhatsAppService);
}
