import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Store } from '../../models/catalog.models';
import { BUSINESS_CONFIG } from '../../config/business';

@Component({
    selector: 'app-about-section',
    standalone: true,
    imports: [CommonModule, IconComponent],
    template: `
    <section id="about" class="py-20 lg:py-28 gradient-deep-brand text-[#FAF8F3] relative overflow-hidden">
      <!-- Decorative Gold & Teal Glows -->
      <div class="absolute top-10 right-10 w-[500px] h-[500px] bg-[#B89452]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#AFCFC0]/15 rounded-full blur-[100px] pointer-events-none"></div>

      <!-- Subtle Pattern Grid -->
      <div class="absolute inset-0 bg-[radial-gradient(#AFCFC0_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left Column: Imagery -->
          <div class="lg:col-span-5 relative" data-reveal>
            <div class="relative mx-auto max-w-sm lg:max-w-none">
              <!-- Outer Frame -->
              <div class="rounded-[32px] overflow-hidden bg-[#0E4543] border-2 border-[#B89452]/50 shadow-2xl p-2.5 sm:p-3">
                <div class="rounded-[24px] overflow-hidden aspect-[3/4] bg-[#092B2A]">
                  <img
                    src="assets/store/store-01.webp"
                    alt="Pehnava Wale Bhaiya Boutique Store Ajmer"
                    width="750"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-full object-cover img-luxury-hover"
                  />
                </div>
              </div>

              <!-- Offset Accent Frame -->
              <div class="absolute -bottom-4 -left-4 w-full h-full rounded-[32px] border-2 border-[#B8875A]/40 -z-10 hidden sm:block pointer-events-none"></div>

              <!-- Floating Quote Stamp -->
              <div class="absolute -bottom-6 right-4 sm:-right-6 bg-[#FAF8F3] text-[#26332F] p-4 sm:p-5 rounded-2xl border border-[#B89452]/40 shadow-xl max-w-[240px]">
                <div class="flex items-center gap-1 text-[#B89452] mb-1.5">
                  <app-icon name="sparkles" [size]="13"></app-icon>
                  <span class="text-[10px] uppercase font-bold tracking-widest">Founder Story</span>
                </div>
                <p class="font-serif italic text-xs text-[#155E5B] leading-tight mb-2">
                  "Pehnava is a journey of struggle, faith and never giving up."
                </p>
                <span class="text-[10px] uppercase tracking-wider text-[#B8875A] font-bold block">
                  — Ritik Soni, Founder
                </span>
              </div>
            </div>
          </div>

          <!-- Right Column: Narrative -->
          <div class="lg:col-span-7 flex flex-col items-start" data-reveal data-reveal-delay="200">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E4543] text-[#D4B270] text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-[#B89452]/40 shadow-xs">
              <app-icon name="sparkles" [size]="13" customClass="text-[#B89452]"></app-icon>
              <span>Our Story & Mission</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#FAF8F3] tracking-tight mb-6">
              Pehnava <span class="text-[#D4B270] italic">Wale Bhaiya</span>
            </h2>

            <blockquote class="text-xl sm:text-2xl font-serif italic text-[#DDEFE6] border-l-2 border-[#B89452] pl-5 mb-8 leading-snug">
              "No matter how much life takes away from you, never lose faith in yourself."
            </blockquote>

            <div class="space-y-4 text-sm sm:text-base text-[#DDEFE6]/90 leading-relaxed font-sans font-normal mb-8">
              <p>
                Founded by <strong class="font-semibold text-white">Ritik Soni</strong> in Ajmer after years of perseverance and hard work, Pehnava has grown from a humble family saree business into a brand trusted by thousands of customers.
              </p>
              <p>
                Our mission is simple: to make stylish, high-quality ethnic fashion affordable and accessible to women across India, crafted with honest pricing and customer trust at heart.
              </p>
            </div>

            <!-- Store Location Pill -->
            <div class="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0E4543]/80 border border-[#B89452]/40 w-full max-w-lg shadow-sm">
              <div class="w-11 h-11 rounded-xl bg-[#155E5B] border border-[#B89452]/40 flex items-center justify-center text-[#D4B270] shrink-0 shadow-2xs mt-0.5">
                <app-icon name="map-pin" [size]="20"></app-icon>
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="text-xs uppercase tracking-wider font-bold text-[#D4B270]">
                  Flagship Store Location
                </h4>
                <p class="text-sm text-[#FAF8F3] leading-relaxed font-normal">
                  {{ store?.fullAddress || businessConfig.fullAddress }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutSectionComponent {
    @Input() store: Store | null = null;

    readonly businessConfig = BUSINESS_CONFIG;
}

