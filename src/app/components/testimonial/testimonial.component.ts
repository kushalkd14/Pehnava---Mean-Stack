import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Review } from '../../models/catalog.models';
import { REVIEWS_DATA } from '../../data/reviews';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
    selector: 'app-testimonial',
    standalone: true,
    imports: [CommonModule, IconComponent],
    template: `
    <section class="testimonial-marquee py-16 sm:py-24 bg-[#F0F7F3] relative overflow-hidden">
      <!-- Section Header -->
      <div class="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 text-center max-w-3xl mb-12 sm:mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-[#AFCFC0] shadow-xs">
          <app-icon name="sparkles" [size]="13" customClass="text-[#B89452]"></app-icon>
          <span>Customer Stories</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif text-[#155E5B] tracking-tight mb-4">
          Loved By Our Clients
        </h2>

        <p class="text-xs sm:text-base text-[#71847B] font-sans leading-relaxed max-w-xl mx-auto">
          Real feedback from women who chose Pehnava for their festive occasions, party wear, and boutique shopping in Ajmer.
        </p>
      </div>

      <!-- Overflow-hidden Wrapper -->
      <div class="relative w-full overflow-hidden py-4 group">
        <!-- Edge Gradient Shadows -->
        <div class="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#F0F7F3] to-transparent z-10 pointer-events-none"></div>
        <div class="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#F0F7F3] to-transparent z-10 pointer-events-none"></div>

        <!-- Track (display:flex; gap:24px; width:max-content; animation: marquee 30s linear infinite) -->
        <div class="track flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
          @for (review of displayReviews; track $index) {
            <!-- Card Design: Width 380–420px, Rounded 28px, Warm Ivory BG, Pastel Emerald Border -->
            <div
              class="w-[340px] sm:w-[400px] shrink-0 bg-[#FAF8F3] p-6 sm:p-7 rounded-[28px] border-2 border-[#AFCFC0] hover:border-[#155E5B] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div>
                <!-- Top Rating & Collection Badge -->
                <div class="flex items-center justify-between gap-2 mb-3">
                  <div class="flex items-center gap-1">
                    @for (star of [1,2,3,4,5]; track star) {
                      <span class="text-[#B89452] text-sm sm:text-base">★</span>
                    }
                  </div>

                  @if (review.purchasedCollection) {
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDEFE6] text-[#155E5B] text-[10px] font-bold uppercase tracking-wider border border-[#AFCFC0]">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#155E5B]"></span>
                      <span>{{ review.purchasedCollection }}</span>
                    </span>
                  }
                </div>

                <!-- Review Text -->
                <p class="text-xs sm:text-sm text-[#26332F] leading-relaxed italic font-serif">
                  "{{ review.text }}"
                </p>
              </div>

              <!-- Customer Profile & Location Footer -->
              <div class="pt-4 border-t border-[#D5D8D3] flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <!-- Customer Avatar -->
                  <div class="w-11 h-11 rounded-full bg-[#155E5B] text-white flex items-center justify-center font-bold text-xs shadow-xs overflow-hidden shrink-0 border border-[#AFCFC0]">
                    @if (review.avatar) {
                      <img [src]="review.avatar" [alt]="review.name" loading="lazy" class="w-full h-full object-cover" />
                    } @else {
                      <span>{{ review.name.charAt(0) }}</span>
                    }
                  </div>

                  <div>
                    <h3 class="text-xs sm:text-sm font-semibold text-[#155E5B] leading-tight">{{ review.name }}</h3>
                    <p class="text-[11px] text-[#71847B] font-sans mt-0.5 flex items-center gap-1">
                      <app-icon name="map-pin" [size]="11" customClass="text-[#B8875A] shrink-0"></app-icon>
                      <span>{{ review.location }}</span>
                    </p>
                  </div>
                </div>

                <!-- WhatsApp Icon Button -->
                <button
                  (click)="whatsAppService.openWhatsApp('Customer Review Enquiry: ' + review.name + ' (' + (review.purchasedCollection || 'Boutique Collection') + ')')"
                  [attr.aria-label]="'Enquire on WhatsApp about review by ' + review.name"
                  class="text-[#155E5B] hover:text-[#0E4543] p-2 rounded-full hover:bg-[#DDEFE6] transition-colors cursor-pointer shrink-0"
                >
                  <app-icon name="whatsapp" [size]="18" customClass="text-[#25D366]"></app-icon>
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TestimonialComponent {
    @Input() reviews: Review[] = REVIEWS_DATA;

    readonly whatsAppService = inject(WhatsAppService);

    // Duplicate array so second half is an exact duplicate of first half for seamless loop
    get displayReviews(): Review[] {
        const list = this.reviews && this.reviews.length > 0 ? this.reviews : REVIEWS_DATA;
        return [...list, ...list];
    }
}
