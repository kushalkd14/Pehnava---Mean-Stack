import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { BoutiqueDividerComponent } from '../../shared/components/boutique-divider/boutique-divider.component';

@Component({
  selector: 'app-store-experience',
  standalone: true,
  imports: [CommonModule, IconComponent, BoutiqueDividerComponent],
  template: `
    <section class="py-20 lg:py-28 bg-[#F3EEE4] relative overflow-hidden">
      <!-- Background Decorative Touches -->
      <div class="absolute inset-0 bg-[radial-gradient(#AFCFC0_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-14" data-reveal>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] border border-[#AFCFC0] text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-xs">
            <app-icon name="store" [size]="14" customClass="text-[#B8875A]"></app-icon>
            <span>The Ajmer Boutique Experience</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif text-[#155E5B] tracking-tight mb-4">
            Step Inside Our Mayo Link Road Studio
          </h2>
          <p class="text-sm sm:text-base text-[#71847B] font-sans max-w-2xl mx-auto leading-relaxed">
            Experience luxury Indian fashion first-hand in our warm, elegant boutique setting. Touch rich fabrics, try tailored fits, and consult with our personal stylists.
          </p>
          <app-boutique-divider></app-boutique-divider>
        </div>

        <!-- Boutique Features Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <!-- Left: Store Ambience Images -->
          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] border-2 border-[#AFCFC0] shadow-lg bg-white relative group">
              <img
                src="assets/store/store-01.webp"
                alt="Pehnava RJ01 Boutique Interior"
                loading="lazy"
                class="w-full h-full object-cover img-luxury-hover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
              <span class="absolute bottom-4 left-4 text-xs font-serif font-semibold text-white">Curated Fashion Racks</span>
            </div>

            <div class="rounded-3xl overflow-hidden aspect-[4/3] border-2 border-[#AFCFC0] shadow-lg bg-white relative group">
              <img
                src="assets/store/store-02.webp"
                alt="Pehnava RJ01 Fitting Room & Lounge"
                loading="lazy"
                class="w-full h-full object-cover img-luxury-hover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
              <span class="absolute bottom-4 left-4 text-xs font-serif font-semibold text-white">Private Trial Lounge</span>
            </div>
          </div>

          <!-- Right: Boutique Experience Highlights -->
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-[#FAF8F3] p-6 rounded-2xl border border-[#D5D8D3] shadow-xs flex items-start gap-4">
              <div class="p-3 rounded-full bg-[#DDEFE6] text-[#155E5B] shrink-0">
                <app-icon name="sparkles" [size]="20" customClass="text-[#B8875A]"></app-icon>
              </div>
              <div>
                <h3 class="text-base font-serif font-semibold text-[#155E5B] mb-1">
                  Bespoke Trial Experience
                </h3>
                <p class="text-xs text-[#71847B] leading-relaxed">
                  Private, spacious trial rooms designed for comfortable outfit fittings with matching jewelry pairing.
                </p>
              </div>
            </div>

            <div class="bg-[#FAF8F3] p-6 rounded-2xl border border-[#D5D8D3] shadow-xs flex items-start gap-4">
              <div class="p-3 rounded-full bg-[#DDEFE6] text-[#155E5B] shrink-0">
                <app-icon name="scissors" [size]="20" customClass="text-[#B8875A]"></app-icon>
              </div>
              <div>
                <h3 class="text-base font-serif font-semibold text-[#155E5B] mb-1">
                  Custom Size Alterations
                </h3>
                <p class="text-xs text-[#71847B] leading-relaxed">
                  In-house master tailors available to ensure flawless silhouette fitting for every client.
                </p>
              </div>
            </div>

            <div class="bg-[#FAF8F3] p-6 rounded-2xl border border-[#D5D8D3] shadow-xs flex items-start gap-4">
              <div class="p-3 rounded-full bg-[#DDEFE6] text-[#155E5B] shrink-0">
                <app-icon name="user" [size]="20" customClass="text-[#B8875A]"></app-icon>
              </div>
              <div>
                <h3 class="text-base font-serif font-semibold text-[#155E5B] mb-1">
                  Personal Styling Guidance
                </h3>
                <p class="text-xs text-[#71847B] leading-relaxed">
                  One-on-one styling advice to help select perfect dupattas, sleeves, and color combinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class StoreExperienceComponent {}
