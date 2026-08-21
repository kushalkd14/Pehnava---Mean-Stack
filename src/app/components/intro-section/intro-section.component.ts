import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="the-edit" class="py-20 lg:py-28 bg-[#F3EEE4] border-t border-[#D5D8D3] relative overflow-hidden">
      <!-- Decorative Mint & Warm Wood Accents -->
      <div class="absolute top-0 right-1/4 w-72 h-72 bg-[#DDEFE6] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div class="absolute bottom-0 left-1/3 w-80 h-80 bg-[#AFCFC0] rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-reveal>
        <!-- Small Editorial Label with Gold & Deep Teal Styling -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] mb-5 border border-[#B89452]/40 shadow-xs">
          <app-icon name="sparkles" [size]="13" customClass="text-[#B89452]"></app-icon>
          <span>The Pahnave Wale Bhaiya Edit</span>
        </div>

        <!-- Main Headline -->
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#155E5B] tracking-tight leading-tight mb-8">
          Fashion for the moments that matter.
        </h2>

        <!-- Supporting Copy -->
        <p class="text-base sm:text-lg md:text-xl text-[#71847B] leading-relaxed max-w-3xl mx-auto font-normal font-sans mb-14">
          Discover thoughtfully selected styles for everyday looks, family celebrations, and milestone occasions.
          Crafted with care, tailored for comfort, and brought to you directly from our boutique on Mayo Link Road, Ajmer.
        </p>

        <!-- Three Boutique Architectural Highlight Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6 border-t border-[#D5D8D3] max-w-4xl mx-auto text-left">
          <!-- Card 1: Thoughtful Curation -->
          <div
            class="p-7 rounded-3xl bg-[#FAF8F3] border border-[#AFCFC0] shadow-xs hover:shadow-md hover:border-[#155E5B] transition-all duration-300 group"
            data-reveal
            data-reveal-delay="100"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#DDEFE6] flex items-center justify-center text-[#155E5B] mb-5 border border-[#AFCFC0] group-hover:scale-105 transition-transform duration-200 shadow-2xs">
              <app-icon name="sparkles" [size]="20" customClass="text-[#B89452]"></app-icon>
            </div>
            <h3 class="text-lg font-serif font-semibold text-[#155E5B] mb-2">
              Thoughtful Curation
            </h3>
            <p class="text-sm text-[#71847B] leading-relaxed font-sans font-normal">
              Carefully selected silhouettes that balance Indian heritage with contemporary ease and flattering drape.
            </p>
          </div>

          <!-- Card 2: In-Store Experience -->
          <div
            class="p-7 rounded-3xl bg-[#FAF8F3] border border-[#AFCFC0] shadow-xs hover:shadow-md hover:border-[#155E5B] transition-all duration-300 group"
            data-reveal
            data-reveal-delay="200"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#DDEFE6] flex items-center justify-center text-[#155E5B] mb-5 border border-[#AFCFC0] group-hover:scale-105 transition-transform duration-200 shadow-2xs">
              <app-icon name="eye" [size]="20" customClass="text-[#155E5B]"></app-icon>
            </div>
            <h3 class="text-lg font-serif font-semibold text-[#155E5B] mb-2">
              In-Store Experience
            </h3>
            <p class="text-sm text-[#71847B] leading-relaxed font-sans font-normal">
              Touch the fabrics, try on your favorite looks, and experience our mint-and-wood boutique atmosphere in Ajmer.
            </p>
          </div>

          <!-- Card 3: Personalized Guidance -->
          <div
            class="p-7 rounded-3xl bg-[#FAF8F3] border border-[#AFCFC0] shadow-xs hover:shadow-md hover:border-[#155E5B] transition-all duration-300 group"
            data-reveal
            data-reveal-delay="300"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#DDEFE6] flex items-center justify-center text-[#155E5B] mb-5 border border-[#AFCFC0] group-hover:scale-105 transition-transform duration-200 shadow-2xs">
              <app-icon name="heart-handshake" [size]="20" customClass="text-[#C47B5A]"></app-icon>
            </div>
            <h3 class="text-lg font-serif font-semibold text-[#155E5B] mb-2">
              Personalized Care
            </h3>
            <p class="text-sm text-[#71847B] leading-relaxed font-sans font-normal">
              Direct communication on WhatsApp for sizing, styling suggestions, matching sets, and store hold requests.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class IntroSectionComponent {}
