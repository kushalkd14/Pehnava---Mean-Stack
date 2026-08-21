import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Review } from '../../models/catalog.models';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../config/business';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section
      id="customer-reviews"
      aria-label="Customer Reviews"
      class="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#F0F7F3] via-[#FAF8F3] to-[#F3EEE4] border-t border-b border-[#D5D8D3]/70"
    >
      <!-- Background Architectural Accent Shapes -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-35">
        <div class="absolute -top-24 left-10 w-96 h-96 rounded-full bg-[#DDEFE6] blur-3xl"></div>
        <div class="absolute -bottom-24 right-10 w-96 h-96 rounded-full bg-[#F3EEE4] blur-3xl"></div>
      </div>

      <!-- Editorial Header -->
      <div class="max-w-4xl mx-auto px-6 text-center mb-12 md:mb-16 relative z-10" data-reveal>
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDEFE6] border border-[#AFCFC0] text-[#0E4543] text-xs font-medium tracking-wider uppercase mb-3.5">
          <app-icon name="heart" [size]="12" fill="#155E5B" customClass="text-[#155E5B]"></app-icon>
          <span>Customer Love</span>
        </div>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#0E4543] tracking-tight mb-3.5">
          What Our Customers Say
        </h2>

        <div class="w-16 h-0.5 bg-[#B89452] mx-auto rounded-full mb-3.5 opacity-80"></div>

        <p class="text-sm md:text-base text-[#71847B] max-w-lg mx-auto font-sans leading-relaxed">
          A few words from the people who love Pahnave Wale Bhaiya.
        </p>
      </div>

      <!-- Marquee Track Container with Ambient Gradient Side Masks -->
      <div class="relative w-full overflow-hidden">
        <!-- Left & Right Smooth Edge Fade Masks -->
        <div class="hidden sm:block absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-[#F0F7F3] via-[#F0F7F3]/80 to-transparent z-20 pointer-events-none"></div>
        <div class="hidden sm:block absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-[#F3EEE4] via-[#F3EEE4]/80 to-transparent z-20 pointer-events-none"></div>

        <!-- Row 1: Leftward Continuous Marquee (←) -->
        <div class="mb-4 sm:mb-6 overflow-hidden flex w-full">
          <div class="animate-marquee-left flex shrink-0">
            <div class="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-6 sm:pr-6">
              @for (review of row1Reviews; track 'r1-a-' + review.id) {
                <div [class]="'w-[300px] sm:w-[360px] p-6 rounded-2xl shrink-0 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md cursor-default ' + getCardVariantClass(review.cardVariant)">
                  <div>
                    <div class="flex items-center justify-between mb-3.5">
                      <div class="flex items-center gap-1" aria-label="5 out of 5 stars">
                        @for (star of [1,2,3,4,5]; track star) {
                          <app-icon name="star" [size]="14" fill="#B89452" customClass="text-[#B89452] drop-shadow-xs"></app-icon>
                        }
                      </div>
                      <span class="text-[11px] font-mono tracking-wider text-[#71847B] uppercase font-medium">
                        RJ01 Story
                      </span>
                    </div>
                    <p class="text-[#26332F] text-[15px] leading-relaxed font-sans font-normal mb-5 italic">
                      “{{ review.text }}”
                    </p>
                  </div>
                  <div class="pt-3 border-t border-[#D5D8D3]/70 flex items-center justify-between">
                    <div>
                      <h4 class="text-[13.5px] font-semibold text-[#0E4543] tracking-tight">
                        {{ review.name }}
                      </h4>
                      <div class="flex items-center gap-1 text-xs text-[#71847B] font-semibold mt-0.5">
                        <app-icon name="map-pin" [size]="11" customClass="text-[#B8875A]"></app-icon>
                        <span>{{ review.location }}</span>
                      </div>
                    </div>
                    <div class="w-6 h-6 rounded-full bg-[#FAF8F3]/80 border border-[#D5D8D3] flex items-center justify-center text-[#B89452]">
                      <app-icon name="sparkles" [size]="11" customClass="text-[#B89452]"></app-icon>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div class="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-6 sm:pr-6" aria-hidden="true">
              @for (review of row1Reviews; track 'r1-b-' + review.id) {
                <div [class]="'w-[300px] sm:w-[360px] p-6 rounded-2xl shrink-0 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md cursor-default ' + getCardVariantClass(review.cardVariant)">
                  <div>
                    <div class="flex items-center justify-between mb-3.5">
                      <div class="flex items-center gap-1" aria-label="5 out of 5 stars">
                        @for (star of [1,2,3,4,5]; track star) {
                          <app-icon name="star" [size]="14" fill="#B89452" customClass="text-[#B89452] drop-shadow-xs"></app-icon>
                        }
                      </div>
                      <span class="text-[11px] font-mono tracking-wider text-[#71847B] uppercase font-medium">
                        RJ01 Story
                      </span>
                    </div>
                    <p class="text-[#26332F] text-[15px] leading-relaxed font-sans font-normal mb-5 italic">
                      “{{ review.text }}”
                    </p>
                  </div>
                  <div class="pt-3 border-t border-[#D5D8D3]/70 flex items-center justify-between">
                    <div>
                      <h4 class="text-[13.5px] font-semibold text-[#0E4543] tracking-tight">
                        {{ review.name }}
                      </h4>
                      <div class="flex items-center gap-1 text-xs text-[#71847B] font-semibold mt-0.5">
                        <app-icon name="map-pin" [size]="11" customClass="text-[#B8875A]"></app-icon>
                        <span>{{ review.location }}</span>
                      </div>
                    </div>
                    <div class="w-6 h-6 rounded-full bg-[#FAF8F3]/80 border border-[#D5D8D3] flex items-center justify-center text-[#B89452]">
                      <app-icon name="sparkles" [size]="11" customClass="text-[#B89452]"></app-icon>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Row 2: Rightward Continuous Marquee (→) -->
        <div class="overflow-hidden flex w-full">
          <div class="animate-marquee-right flex shrink-0">
            <div class="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-6 sm:pr-6">
              @for (review of row2Reviews; track 'r2-a-' + review.id) {
                <div [class]="'w-[300px] sm:w-[360px] p-6 rounded-2xl shrink-0 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md cursor-default ' + getCardVariantClass(review.cardVariant)">
                  <div>
                    <div class="flex items-center justify-between mb-3.5">
                      <div class="flex items-center gap-1" aria-label="5 out of 5 stars">
                        @for (star of [1,2,3,4,5]; track star) {
                          <app-icon name="star" [size]="14" fill="#B89452" customClass="text-[#B89452] drop-shadow-xs"></app-icon>
                        }
                      </div>
                      <span class="text-[11px] font-mono tracking-wider text-[#71847B] uppercase font-medium">
                        RJ01 Story
                      </span>
                    </div>
                    <p class="text-[#26332F] text-[15px] leading-relaxed font-sans font-normal mb-5 italic">
                      “{{ review.text }}”
                    </p>
                  </div>
                  <div class="pt-3 border-t border-[#D5D8D3]/70 flex items-center justify-between">
                    <div>
                      <h4 class="text-[13.5px] font-semibold text-[#0E4543] tracking-tight">
                        {{ review.name }}
                      </h4>
                      <div class="flex items-center gap-1 text-xs text-[#71847B] font-semibold mt-0.5">
                        <app-icon name="map-pin" [size]="11" customClass="text-[#B8875A]"></app-icon>
                        <span>{{ review.location }}</span>
                      </div>
                    </div>
                    <div class="w-6 h-6 rounded-full bg-[#FAF8F3]/80 border border-[#D5D8D3] flex items-center justify-center text-[#B89452]">
                      <app-icon name="sparkles" [size]="11" customClass="text-[#B89452]"></app-icon>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div class="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-6 sm:pr-6" aria-hidden="true">
              @for (review of row2Reviews; track 'r2-b-' + review.id) {
                <div [class]="'w-[300px] sm:w-[360px] p-6 rounded-2xl shrink-0 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md cursor-default ' + getCardVariantClass(review.cardVariant)">
                  <div>
                    <div class="flex items-center justify-between mb-3.5">
                      <div class="flex items-center gap-1" aria-label="5 out of 5 stars">
                        @for (star of [1,2,3,4,5]; track star) {
                          <app-icon name="star" [size]="14" fill="#B89452" customClass="text-[#B89452] drop-shadow-xs"></app-icon>
                        }
                      </div>
                      <span class="text-[11px] font-mono tracking-wider text-[#71847B] uppercase font-medium">
                        RJ01 Story
                      </span>
                    </div>
                    <p class="text-[#26332F] text-[15px] leading-relaxed font-sans font-normal mb-5 italic">
                      “{{ review.text }}”
                    </p>
                  </div>
                  <div class="pt-3 border-t border-[#D5D8D3]/70 flex items-center justify-between">
                    <div>
                      <h4 class="text-[13.5px] font-semibold text-[#0E4543] tracking-tight">
                        {{ review.name }}
                      </h4>
                      <div class="flex items-center gap-1 text-xs text-[#71847B] font-semibold mt-0.5">
                        <app-icon name="map-pin" [size]="11" customClass="text-[#B8875A]"></app-icon>
                        <span>{{ review.location }}</span>
                      </div>
                    </div>
                    <div class="w-6 h-6 rounded-full bg-[#FAF8F3]/80 border border-[#D5D8D3] flex items-center justify-center text-[#B89452]">
                      <app-icon name="sparkles" [size]="11" customClass="text-[#B89452]"></app-icon>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      <!-- Subtle Bottom Trust Note & Share Experience CTA -->
      <div class="mt-10 text-center px-6 relative z-10 space-y-4" data-reveal data-reveal-delay="200">
        <div>
          <a
            [href]="getShareExperienceWhatsAppUrl()"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share your experience with Pahnave Wale Bhaiya on WhatsApp"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F3] hover:bg-[#155E5B] text-[#155E5B] hover:text-[#FAF8F3] border border-[#AFCFC0] text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md"
          >
            <app-icon name="message-circle" [size]="15" customClass="text-[#25D366]"></app-icon>
            <span>Share Your Experience on WhatsApp</span>
          </a>
        </div>

        <p class="text-xs text-[#71847B] flex items-center justify-center gap-1.5 font-sans">
          <span>Experiences shared across Ajmer, Jaipur, Kishangarh, Pushkar & beyond.</span>
        </p>
      </div>
    </section>
  `
})
export class CustomerReviewsComponent {
  @Input() reviews: Review[] = [];

  get row1Reviews(): Review[] {
    return this.reviews.slice(0, 7);
  }

  get row2Reviews(): Review[] {
    return this.reviews.slice(7);
  }

  getShareExperienceWhatsAppUrl(): string {
    return getWhatsAppUrl(WHATSAPP_MESSAGES.shareExperience);
  }

  getCardVariantClass(variant?: string): string {
    switch (variant) {
      case 'mint':
        return 'card-review-mint shadow-sm hover:border-[#155E5B]/40';
      case 'cream':
        return 'card-review-cream shadow-sm hover:border-[#B8875A]/40';
      case 'peach':
        return 'card-review-peach shadow-sm hover:border-[#C47B5A]/40';
      case 'rose':
        return 'card-review-rose shadow-sm hover:border-[#C98F91]/50';
      case 'sage':
        return 'card-review-sage shadow-sm hover:border-[#155E5B]/40';
      case 'ivory':
      default:
        return 'card-review-ivory shadow-sm hover:border-[#B89452]/50';
    }
  }
}
