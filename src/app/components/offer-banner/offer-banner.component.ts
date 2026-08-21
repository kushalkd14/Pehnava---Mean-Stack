import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CURRENT_SEASONAL_OFFER, OfferConfig } from '../../config/offers.config';
import { WhatsAppService } from '../../services/whatsapp.service';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-offer-banner',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="py-10 sm:py-16 bg-[#DDEFE6] relative overflow-hidden">
      <!-- Ambient Sparkle Pattern -->
      <div class="absolute inset-0 bg-[radial-gradient(#AFCFC0_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div class="rounded-3xl bg-[#FAF8F3] border-2 border-[#B89452]/40 p-4 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
          <!-- Gold Corner Accents -->
          <div class="absolute top-3 left-3 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-[#B8875A] pointer-events-none"></div>
          <div class="absolute top-3 right-3 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-[#B8875A] pointer-events-none"></div>
          <div class="absolute bottom-3 left-3 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-[#B8875A] pointer-events-none"></div>
          <div class="absolute bottom-3 right-3 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-[#B8875A] pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <!-- Left Information Column -->
            <div class="lg:col-span-7 space-y-4 sm:space-y-5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#155E5B] text-[#FAF8F3] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  <app-icon name="sparkles" [size]="13" customClass="text-[#D4B270]"></app-icon>
                  <span>{{ offer.badge }}</span>
                </span>
                <span class="px-3 py-1 rounded-full bg-[#B89452]/15 text-[#B8875A] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-[#B89452]/40">
                  {{ offer.validTillText }}
                </span>
              </div>

              <h2 class="text-2xl sm:text-4xl md:text-5xl font-serif text-[#155E5B] leading-tight">
                {{ offer.title }}
              </h2>

              <div class="inline-block px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#FAF6ED] border border-[#B8875A]/40 text-[#B8875A] font-serif font-bold text-lg sm:text-2xl tracking-wide">
                {{ offer.discount }}
              </div>

              <p class="text-xs sm:text-base text-[#71847B] font-sans leading-relaxed">
                {{ offer.subtitle }}
              </p>

              <!-- Live Countdown Timer -->
              <div class="pt-1">
                <span class="text-[10px] font-bold uppercase tracking-widest text-[#71847B] block mb-2">Offer Ending In:</span>
                <div class="flex items-center justify-start gap-1.5 sm:gap-3 max-w-full overflow-x-auto no-scrollbar">
                  <div class="bg-[#155E5B] text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-center min-w-[46px] sm:min-w-[56px] shadow-xs">
                    <span class="text-base sm:text-lg font-bold block leading-none">{{ countdown().days }}</span>
                    <span class="text-[8px] sm:text-[9px] uppercase tracking-wider opacity-80">Days</span>
                  </div>
                  <span class="text-base sm:text-lg font-bold text-[#155E5B]">:</span>
                  <div class="bg-[#155E5B] text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-center min-w-[46px] sm:min-w-[56px] shadow-xs">
                    <span class="text-base sm:text-lg font-bold block leading-none">{{ countdown().hours }}</span>
                    <span class="text-[8px] sm:text-[9px] uppercase tracking-wider opacity-80">Hours</span>
                  </div>
                  <span class="text-base sm:text-lg font-bold text-[#155E5B]">:</span>
                  <div class="bg-[#155E5B] text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-center min-w-[46px] sm:min-w-[56px] shadow-xs">
                    <span class="text-base sm:text-lg font-bold block leading-none">{{ countdown().minutes }}</span>
                    <span class="text-[8px] sm:text-[9px] uppercase tracking-wider opacity-80">Mins</span>
                  </div>
                  <span class="text-base sm:text-lg font-bold text-[#155E5B]">:</span>
                  <div class="bg-[#155E5B] text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-center min-w-[46px] sm:min-w-[56px] shadow-xs">
                    <span class="text-base sm:text-lg font-bold block leading-none">{{ countdown().seconds }}</span>
                    <span class="text-[8px] sm:text-[9px] uppercase tracking-wider opacity-80">Secs</span>
                  </div>
                </div>
              </div>

              <!-- Action Button (100% Responsive on Mobile) -->
              <div class="pt-2">
                <button
                  (click)="onClaimOffer()"
                  class="w-full sm:w-auto btn-pehnava-primary px-4 sm:px-8 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-md active:scale-98 group text-center leading-snug"
                >
                  <app-icon name="whatsapp" [size]="18" customClass="text-[#25D366] shrink-0 group-hover:scale-110 transition-transform"></app-icon>
                  <span class="whitespace-normal">{{ offer.ctaText }}</span>
                  <app-icon name="arrow-right" [size]="14" customClass="text-[#D4B270] shrink-0 group-hover:translate-x-1 transition-transform"></app-icon>
                </button>
              </div>
            </div>

            <!-- Right Image Showcase -->
            <div class="lg:col-span-5 relative">
              <div class="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-[#AFCFC0] shadow-lg bg-[#F0F7F3]">
                <img
                  [src]="offer.image"
                  [alt]="offer.title"
                  loading="lazy"
                  class="w-full h-full object-cover img-luxury-hover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0E4543]/60 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-xl bg-[#FAF8F3]/95 backdrop-blur-sm border border-[#AFCFC0] text-xs font-serif font-semibold text-[#155E5B] flex items-center justify-between">
                  <span>{{ offer.badge }}</span>
                  <span class="text-[#B8875A] font-sans font-bold text-[10px]">Ajmer Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class OfferBannerComponent implements OnInit, OnDestroy {
  readonly offer: OfferConfig = CURRENT_SEASONAL_OFFER;
  readonly whatsAppService = inject(WhatsAppService);

  countdown = signal<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  private timerId: any = null;

  ngOnInit(): void {
    this.updateCountdown();
    this.timerId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  private updateCountdown(): void {
    const end = new Date(this.offer.endDate).getTime();
    const now = new Date().getTime();
    const diff = end - now;

    if (diff <= 0) {
      this.countdown.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    this.countdown.set({ days, hours, minutes, seconds });
  }

  onClaimOffer(): void {
    this.whatsAppService.openWhatsApp(this.offer.whatsappMessage);
  }
}
