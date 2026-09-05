import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-festive-banner',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="py-12 sm:py-20 bg-[#DDEFE6] relative overflow-hidden">
      <!-- Background Subtle Gold & Arch Watermarks -->
      <div class="absolute inset-0 bg-[radial-gradient(#AFCFC0_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none"></div>
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#B8875A]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-[#155E5B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div class="rounded-3xl bg-[#FAF8F3] border border-[#AFCFC0] p-5 sm:p-10 md:p-12 shadow-xl relative overflow-hidden">
          <!-- Gold Arch Border Overlay -->
          <div class="absolute inset-0 border-2 border-[#B89452]/20 rounded-3xl pointer-events-none m-2"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <!-- Left Info -->
            <div class="lg:col-span-7 space-y-4 sm:space-y-5">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDEFE6] border border-[#AFCFC0] text-[#155E5B] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]">
                <app-icon name="sparkles" [size]="13" customClass="text-[#B89452] shrink-0"></app-icon>
                <span class="truncate">{{ title }}</span>
              </div>

              <h2 class="text-2xl sm:text-4xl md:text-5xl font-serif text-[#155E5B] leading-tight">
                {{ headline }}
              </h2>

              <p class="text-xs sm:text-base text-[#71847B] font-sans leading-relaxed max-w-xl">
                {{ description }}
              </p>

              <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  (click)="onEnquire()"
                  class="w-full sm:w-auto btn-pehnava-primary px-5 sm:px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-md active:scale-98 text-center"
                >
                  <app-icon name="whatsapp" [size]="17" customClass="text-[#25D366] shrink-0"></app-icon>
                  <span>Enquire Festive Drop</span>
                </button>

                <a
                  href="#featured-looks"
                  class="w-full sm:w-auto btn-pehnava-secondary px-5 sm:px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <span>View Festive Looks</span>
                  <app-icon name="arrow-right" [size]="14" customClass="shrink-0"></app-icon>
                </a>
              </div>
            </div>

            <!-- Right Showcase Image -->
            <div class="lg:col-span-5 relative">
              <div class="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-[#AFCFC0] shadow-lg bg-[#F0F7F3]">
                <img
                  [src]="bannerImage"
                  alt="Festive Collection Drop"
                  loading="lazy"
                  class="w-full h-full object-cover img-luxury-hover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0E4543]/50 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-xl bg-[#FAF8F3]/95 backdrop-blur-sm border border-[#AFCFC0] flex items-center justify-between text-xs font-serif font-semibold text-[#155E5B]">
                  <span>Festive & Party Special</span>
                  <span class="text-[#B8875A] font-sans font-bold text-[10px] uppercase">Ajmer Boutique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FestiveBannerComponent {
  @Input() title = 'Festive & Seasonal Drop 2026';
  @Input() headline = 'Celebrate Traditions in Elegant Ethnic Outfits';
  @Input() description = 'Handcrafted Leheriya, Gota Patti, Shararas, and Anarkalis designed for upcoming festive celebrations and special occasions.';
  @Input() bannerImage = 'assets/collections/festive-collection.webp';

  readonly whatsAppService = inject(WhatsAppService);

  onEnquire(): void {
    this.whatsAppService.openWhatsApp('Festive & Seasonal Drop 2026');
  }
}
