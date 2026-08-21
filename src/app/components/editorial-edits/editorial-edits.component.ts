import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-editorial-edits',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section
      id="collections"
      class="py-20 lg:py-28 gradient-mint-sage border-y border-[#AFCFC0] relative overflow-hidden"
    >
      <!-- Decorative Subtle Gold & Light Terrazzo Accents -->
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-[#FAF8F3]/60 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-10 left-0 w-80 h-80 bg-[#B8875A]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-14 lg:mb-16" data-reveal>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-xs border border-[#B89452]/40">
            <app-icon name="sparkles" [size]="13" customClass="text-[#B89452]"></app-icon>
            <span>The Pahnave Wale Bhaiya Collection</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#155E5B] tracking-tight mb-4">
            Made for every expression of style.
          </h2>

          <p class="text-sm sm:text-base text-[#26332F]/80 max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            Explore distinct edits for her and him, curated around contemporary style, Indian elegance and the moments that matter.
          </p>
        </div>

        <!-- Two Large Visual Editorial Campaign Panels with Architectural Boutique Arches -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <!-- WOMEN'S EDITORIAL PANEL -->
          <div
            id="panel-women-edit"
            class="group relative rounded-[32px] overflow-hidden bg-[#FAF8F3] border-2 border-[#AFCFC0] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            data-reveal
            data-reveal-delay="100"
          >
            <!-- Image Container with Smooth Luxury Scaling -->
            <div
              (click)="navigateToCategory('women')"
              class="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-[#DDEFE6] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=75&w=900&auto=format&fit=crop"
                alt="Pahnave Wale Bhaiya Women's Edit - Contemporary Indian & Festive Silhouettes"
                width="900"
                height="675"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                class="w-full h-full object-cover object-top img-luxury-hover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0E4543]/70 via-[#0E4543]/20 to-transparent"></div>

              <!-- Tag Badge with Dusty Rose & Gold Tone -->
              <div class="absolute top-4 left-4 sm:top-5 sm:left-5">
                <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F3]/95 text-[#155E5B] text-xs font-bold uppercase tracking-[0.2em] shadow-sm border border-[#AFCFC0]">
                  <span class="w-2 h-2 rounded-full bg-[#C98F91]"></span>
                  For Her
                </span>
              </div>

              <!-- Floating Action Arrow -->
              <div class="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-[#FAF8F3]/95 text-[#155E5B] flex items-center justify-center group-hover:bg-[#155E5B] group-hover:text-[#FAF8F3] transition-colors duration-200 shadow-sm">
                <app-icon name="arrow-up-right" [size]="19"></app-icon>
              </div>

              <!-- On-Image Editorial Caption -->
              <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <div class="flex items-center gap-2 mb-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#D4B270]"></span>
                  <span class="text-[11px] uppercase tracking-[0.25em] text-[#DDEFE6] font-semibold">
                    Contemporary & Ethnic
                  </span>
                </div>
                <p class="text-2xl sm:text-3xl font-serif font-medium text-white tracking-normal">
                  Her Edit
                </p>
              </div>
            </div>

            <!-- Panel Details & CTA -->
            <div class="p-6 sm:p-8 bg-[#FAF8F3] flex flex-col justify-between flex-1">
              <div class="mb-6">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs uppercase tracking-[0.25em] text-[#C98F91] font-bold">
                    FOR HER
                  </span>
                  <span class="w-1 h-1 rounded-full bg-[#B89452]"></span>
                  <span class="text-xs text-[#71847B] font-medium">Daily & Festive Occasion</span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-serif text-[#155E5B] mb-2 font-normal">
                  Her Edit
                </h3>
                <p class="text-sm text-[#71847B] leading-relaxed font-sans font-normal">
                  Contemporary silhouettes, graceful Indian drapes, coordinated sets and occasion-ready statement looks.
                </p>
              </div>

              <div class="pt-4 border-t border-[#D5D8D3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span class="text-xs font-medium text-[#71847B] tracking-wide">
                  Daily Casuals • Festive Drapes • Celebrations
                </span>

                <button
                  id="btn-explore-women-edit"
                  (click)="navigateToCategory('women')"
                  class="btn-pehnava-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide cursor-pointer shadow-xs active:scale-98"
                >
                  <span>Explore Women's Edit</span>
                  <app-icon name="arrow-up-right" [size]="15" customClass="text-[#D4B270]"></app-icon>
                </button>
              </div>
            </div>
          </div>

          <!-- MEN'S EDITORIAL PANEL -->
          <div
            id="panel-men-edit"
            class="group relative rounded-[32px] overflow-hidden bg-[#FAF8F3] border-2 border-[#AFCFC0] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            data-reveal
            data-reveal-delay="200"
          >
            <!-- Image Container with Smooth Scaling -->
            <div
              (click)="navigateToCategory('men')"
              class="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-[#D5D8D3] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=75&w=900&auto=format&fit=crop"
                alt="Pahnave Wale Bhaiya Men's Edit - Refined Kurtas, Nehru Jackets & Tailored Fits"
                width="900"
                height="675"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                class="w-full h-full object-cover object-top img-luxury-hover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0E4543]/70 via-[#0E4543]/20 to-transparent"></div>

              <!-- Tag Badge -->
              <div class="absolute top-4 left-4 sm:top-5 sm:left-5">
                <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F3]/95 text-[#155E5B] text-xs font-bold uppercase tracking-[0.2em] shadow-sm border border-[#AFCFC0]">
                  <span class="w-2 h-2 rounded-full bg-[#B8875A]"></span>
                  For Him
                </span>
              </div>

              <!-- Floating Action Arrow -->
              <div class="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-[#FAF8F3]/95 text-[#155E5B] flex items-center justify-center group-hover:bg-[#155E5B] group-hover:text-[#FAF8F3] transition-colors duration-200 shadow-sm">
                <app-icon name="arrow-up-right" [size]="19"></app-icon>
              </div>

              <!-- On-Image Editorial Caption -->
              <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <div class="flex items-center gap-2 mb-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#D4B270]"></span>
                  <span class="text-[11px] uppercase tracking-[0.25em] text-[#DDEFE6] font-semibold">
                    Modern Tailoring & Classics
                  </span>
                </div>
                <p class="text-2xl sm:text-3xl font-serif font-medium text-white tracking-normal">
                  His Edit
                </p>
              </div>
            </div>

            <!-- Panel Details & CTA -->
            <div class="p-6 sm:p-8 bg-[#FAF8F3] flex flex-col justify-between flex-1">
              <div class="mb-6">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs uppercase tracking-[0.25em] text-[#B8875A] font-bold">
                    FOR HIM
                  </span>
                  <span class="w-1 h-1 rounded-full bg-[#B89452]"></span>
                  <span class="text-xs text-[#71847B] font-medium">Smart & Festive Classics</span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-serif text-[#155E5B] mb-2 font-normal">
                  His Edit
                </h3>
                <p class="text-sm text-[#71847B] leading-relaxed font-sans font-normal">
                  Crisp kurtas, smart festive Nehru jackets, and refined modern tailored cuts for celebrations and smart daily dressing.
                </p>
              </div>

              <div class="pt-4 border-t border-[#D5D8D3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span class="text-xs font-medium text-[#71847B] tracking-wide">
                  Structured Kurtas • Festive Jackets • Modern Fits
                </span>

                <button
                  id="btn-explore-men-edit"
                  (click)="navigateToCategory('men')"
                  class="btn-pehnava-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide cursor-pointer shadow-xs active:scale-98"
                >
                  <span>Explore Men's Edit</span>
                  <app-icon name="arrow-up-right" [size]="15" customClass="text-[#D4B270]"></app-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class EditorialEditsComponent {
  @Output() selectCategory = new EventEmitter<string>();

  navigateToCategory(category: 'women' | 'men'): void {
    this.selectCategory.emit(category);
    const element = document.getElementById('featured-looks');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
