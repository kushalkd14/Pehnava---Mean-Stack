import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { MapSectionComponent } from '../../components/map-section/map-section.component';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [CommonModule, IconComponent, MapSectionComponent],
    template: `
    <main class="pt-20 sm:pt-24 bg-[#FAF8F3]">
      <!-- 1. Hero Banner with Joyful Staff & Achievement Badges -->
      <section class="relative min-h-[580px] sm:min-h-[650px] flex flex-col justify-between pt-10 sm:pt-14 pb-8 sm:pb-10 overflow-hidden bg-[#092B2A]">
        <!-- Hero Background Staff Photography with Clear Visibility -->
        <div class="absolute inset-0 z-0">
          <img
            src="assets/store/real-staff-01.webp"
            srcset="assets/store/real-staff-01-600.webp 600w, assets/store/real-staff-01-800.webp 800w, assets/store/real-staff-01-1200.webp 1200w, assets/store/real-staff-01-1920.webp 1920w"
            sizes="100vw"
            alt="Pehnava RJ01 Dedicated Styling Team in Ajmer Boutique"
            class="w-full h-full object-contain sm:object-cover object-center sm:object-[center_35%] scale-100 filter brightness-95 contrast-[1.05]"
          />
          <!-- Lightweight Gradient Overlay for Crisp Text Contrast & Clear Image Visibility -->
          <div class="absolute inset-0 bg-gradient-to-b from-[#092B2A]/70 via-[#092B2A]/20 to-[#092B2A]/90"></div>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col justify-between h-full min-h-[500px] sm:min-h-[570px] w-full">
          <!-- Top Pill (Moved to top edge) -->
          <div class="pt-2">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#092B2A]/85 text-[#D4B270] text-xs font-bold uppercase tracking-[0.25em] border border-[#B89452]/60 shadow-md backdrop-blur-md">
              <app-icon name="sparkles" [size]="14" customClass="text-[#B89452]"></app-icon>
              <span>Brand Story & Passionate Team</span>
            </div>
          </div>

          <!-- Unique Luxury Quote Section (Shifted down below staff faces for 100% face visibility) -->
          <div class="max-w-3xl mx-auto px-4 mt-auto mb-3 sm:mb-5 pt-4">
            <!-- Unique Boutique Mantra Header Pill -->
            <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#092B2A]/70 backdrop-blur-md border border-[#B89452]/50 text-[#D4B270] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-2.5 shadow-sm">
              <span class="text-sm text-[#D4B270] font-serif leading-none">“</span>
              <span>Our Core Mantra</span>
              <span class="text-sm text-[#D4B270] font-serif leading-none">”</span>
            </div>

            <!-- Stylized Floating Quote with Gold Brand Accent -->
            <p class="text-sm sm:text-lg md:text-xl font-serif italic text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] leading-relaxed max-w-2xl mx-auto">
              "<strong class="text-[#D4B270] font-serif not-italic font-semibold drop-shadow-sm">Pehnava Wale Bhaiya</strong> is more than just a clothing brand — it is a journey of struggle, faith and never giving up."
            </p>

            <!-- Subtle Gold Gradient Accent Line -->
            <div class="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4B270] to-transparent mx-auto mt-2.5 opacity-80"></div>
          </div>

          <!-- Achievement Statistics Grid (Single Row on Mobile & Desktop) -->
          <div class="grid grid-cols-3 gap-1.5 sm:gap-6 max-w-4xl mx-auto w-full pt-3 sm:pt-4">
            <!-- Stat 1: Instagram Followers -->
            <div class="bg-[#092B2A]/60 backdrop-blur-md p-2 sm:p-5 rounded-xl sm:rounded-2xl border border-[#B89452]/40 shadow-lg hover:border-[#D4B270] transition-all duration-300 group flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1 sm:gap-4">
              <div class="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#155E5B]/80 text-[#D4B270] flex items-center justify-center shrink-0 border border-[#B89452]/40 group-hover:scale-105 transition-transform">
                <app-icon name="instagram" [size]="16" customClass="sm:w-[22px] sm:h-[22px]"></app-icon>
              </div>
              <div class="min-w-0">
                <div class="text-sm sm:text-3xl font-bold text-white font-sans tracking-tight drop-shadow-sm leading-tight">50K+</div>
                <div class="text-[9px] sm:text-xs uppercase tracking-wider text-[#DDEFE6] font-medium drop-shadow-xs leading-tight mt-0.5 truncate">
                  <span class="hidden sm:inline">Instagram </span>Followers
                </div>
              </div>
            </div>

            <!-- Stat 2: Happy Customers -->
            <div class="bg-[#092B2A]/60 backdrop-blur-md p-2 sm:p-5 rounded-xl sm:rounded-2xl border border-[#B89452]/40 shadow-lg hover:border-[#D4B270] transition-all duration-300 group flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1 sm:gap-4">
              <div class="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#155E5B]/80 text-[#D4B270] flex items-center justify-center shrink-0 border border-[#B89452]/40 group-hover:scale-105 transition-transform">
                <app-icon name="heart-handshake" [size]="16" customClass="sm:w-[22px] sm:h-[22px]"></app-icon>
              </div>
              <div class="min-w-0">
                <div class="text-sm sm:text-3xl font-bold text-white font-sans tracking-tight drop-shadow-sm leading-tight">100K+</div>
                <div class="text-[9px] sm:text-xs uppercase tracking-wider text-[#DDEFE6] font-medium drop-shadow-xs leading-tight mt-0.5 truncate">
                  <span class="hidden sm:inline">Happy </span>Customers
                </div>
              </div>
            </div>

            <!-- Stat 3: Clothing Categories -->
            <div class="bg-[#092B2A]/60 backdrop-blur-md p-2 sm:p-5 rounded-xl sm:rounded-2xl border border-[#B89452]/40 shadow-lg hover:border-[#D4B270] transition-all duration-300 group flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1 sm:gap-4">
              <div class="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#155E5B]/80 text-[#D4B270] flex items-center justify-center shrink-0 border border-[#B89452]/40 group-hover:scale-105 transition-transform">
                <app-icon name="shirt" [size]="16" customClass="sm:w-[22px] sm:h-[22px]"></app-icon>
              </div>
              <div class="min-w-0">
                <div class="text-sm sm:text-3xl font-bold text-white font-sans tracking-tight drop-shadow-sm leading-tight">20+</div>
                <div class="text-[9px] sm:text-xs uppercase tracking-wider text-[#DDEFE6] font-medium drop-shadow-xs leading-tight mt-0.5 truncate">
                  <span class="hidden sm:inline">Clothing </span>Categories
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 2. Main Story & Founder Journey -->
      <section class="py-16 sm:py-24">
        <div class="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            <!-- Left: Visual Frame -->
            <div class="lg:col-span-5 relative" data-reveal>
              <div class="relative mx-auto max-w-md lg:max-w-none">
                <div class="rounded-[32px] overflow-hidden bg-[#0E4543] border-2 border-[#B89452]/50 shadow-2xl p-2.5 sm:p-3">
                  <div class="rounded-[24px] overflow-hidden aspect-[4/5] bg-[#092B2A]">
                    <img
                      src="assets/gallery/founder.jpeg"
                      alt="Pehnava Founder & Visionary Ritik Soni"
                      width="750"
                      height="1000"
                      loading="eager"
                      class="w-full h-full object-cover object-center img-luxury-hover"
                    />
                  </div>
                </div>
                <div class="absolute -bottom-4 -left-4 w-full h-full rounded-[32px] border-2 border-[#B8875A]/40 -z-10 hidden sm:block pointer-events-none"></div>

                <!-- Floating Quote Badge -->
                <div class="absolute -bottom-6 right-4 sm:-right-4 bg-[#FAF8F3] text-[#26332F] p-4 sm:p-5 rounded-2xl border border-[#B89452]/40 shadow-xl max-w-[260px]">
                  <div class="flex items-center gap-1.5 text-[#B89452] mb-1">
                    <app-icon name="sparkles" [size]="14"></app-icon>
                    <span class="text-[10px] uppercase font-bold tracking-widest">Founder & Visionary</span>
                  </div>
                  <p class="font-bold text-sm text-[#155E5B]">Ritik Soni</p>
                  <p class="text-xs text-[#71847B] mt-0.5">Pehnava Wale Bhaiya, Ajmer</p>
                </div>
              </div>
            </div>

            <!-- Right: Founder Story Details -->
            <div class="lg:col-span-7 space-y-6" data-reveal data-reveal-delay="200">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F7F3] text-[#B8875A] text-xs font-semibold uppercase tracking-[0.2em] border border-[#AFCFC0]/60">
                <span>The Founder's Journey</span>
              </div>

              <h2 class="text-2xl sm:text-4xl font-bold text-[#155E5B] tracking-tight leading-tight font-sans">
                From Struggle to Faith: The Rise of Pehnava Wale Bhaiya
              </h2>

              <div class="space-y-4 text-sm sm:text-base text-[#71847B] leading-relaxed font-sans">
                <p>
                  After facing financial hardships and responsibilities at a young age, our founder, <strong class="text-[#155E5B] font-semibold">Ritik Soni</strong>, started working in Jaipur with a salary of just ₹10,000. For nearly two years, life was a constant struggle.
                </p>
                <p>
                  Then came COVID, and everything came to a halt.
                </p>
                <p>
                  With no clear direction, Ritik returned to Ajmer and decided to take responsibility for his family’s saree business. He started creating videos, understanding customer preferences and bringing quality fashion at affordable prices.
                </p>
                <p>
                  For years, Instagram videos received only a few hundred views — but he never stopped.
                </p>
                <p>
                  Slowly, the audience grew. Customers trusted the brand. The business grew.
                </p>
                <p class="text-base sm:text-lg font-bold text-[#155E5B] pt-2">
                  Today, what started as a small family business has become <span class="text-[#B8875A]">Pehnava Wale Bhaiya</span>, loved by thousands of customers.
                </p>
              </div>
            </div>
          </div>

          <!-- 3. Core Life Lesson Highlight Banner -->
          <div class="gradient-deep-brand text-[#FAF8F3] p-8 sm:p-14 rounded-3xl border border-[#B89452]/50 shadow-xl mb-24 relative overflow-hidden text-center" data-reveal>
            <div class="absolute top-0 right-0 w-64 h-64 bg-[#B89452]/10 rounded-full blur-2xl pointer-events-none"></div>
            <div class="max-w-3xl mx-auto space-y-6 relative z-10">
              <div class="w-12 h-12 rounded-full bg-[#0E4543] border border-[#B89452]/40 text-[#D4B270] flex items-center justify-center mx-auto shadow-sm">
                <app-icon name="sparkles" [size]="22"></app-icon>
              </div>

              <blockquote class="text-xl sm:text-3xl font-serif italic text-[#DDEFE6] leading-relaxed">
                "The journey taught us one thing — no matter how much life takes away from you, never lose faith in yourself. What is lost can always be built again."
              </blockquote>

              <div class="pt-2">
                <span class="inline-block px-5 py-2 rounded-full bg-[#0E4543] border border-[#B89452]/40 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#D4B270]">
                  And this is just the beginning.
                </span>
              </div>
            </div>
          </div>

          <!-- 4. How It All Started Section -->
          <div class="mb-24" data-reveal>
            <div class="text-center max-w-3xl mx-auto mb-14">
              <span class="text-xs uppercase tracking-[0.25em] font-bold text-[#B8875A] block mb-2">
                Our Beginnings
              </span>
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#155E5B] tracking-tight mb-4 font-sans">
                How It All Started
              </h2>
              <p class="text-base sm:text-lg text-[#71847B] leading-relaxed font-sans max-w-2xl mx-auto">
                It started with a small family saree business and a big dream.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <!-- Step 1 -->
              <div class="bg-white p-7 rounded-3xl border border-[#D5D8D3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group">
                <div class="space-y-4">
                  <div class="w-12 h-12 rounded-2xl bg-[#F0F7F3] text-[#155E5B] group-hover:bg-[#155E5B] group-hover:text-white transition-colors duration-300 flex items-center justify-center font-bold text-lg border border-[#AFCFC0]/60">
                    01
                  </div>
                  <h3 class="text-lg font-bold text-[#155E5B] font-sans">The Dream & Shift</h3>
                  <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed">
                    After returning to Ajmer during the pandemic, we began creating videos, understanding what customers truly wanted and offering quality fashion at affordable prices.
                  </p>
                </div>
                <div class="pt-2 border-t border-[#F3EEE4] flex items-center gap-1.5 text-xs text-[#B8875A] font-semibold">
                  <app-icon name="sparkles" [size]="13"></app-icon>
                  <span>Ajmer Roots</span>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="bg-white p-7 rounded-3xl border border-[#D5D8D3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group">
                <div class="space-y-4">
                  <div class="w-12 h-12 rounded-2xl bg-[#F0F7F3] text-[#155E5B] group-hover:bg-[#155E5B] group-hover:text-white transition-colors duration-300 flex items-center justify-center font-bold text-lg border border-[#AFCFC0]/60">
                    02
                  </div>
                  <h3 class="text-lg font-bold text-[#155E5B] font-sans">Consistency Over Time</h3>
                  <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed">
                    The beginning was slow. For years, our videos received only a few hundred views. But we stayed consistent.
                  </p>
                </div>
                <div class="pt-2 border-t border-[#F3EEE4] flex items-center gap-1.5 text-xs text-[#B8875A] font-semibold">
                  <app-icon name="clock" [size]="13"></app-icon>
                  <span>Never Give Up</span>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="bg-white p-7 rounded-3xl border border-[#D5D8D3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group">
                <div class="space-y-4">
                  <div class="w-12 h-12 rounded-2xl bg-[#F0F7F3] text-[#155E5B] group-hover:bg-[#155E5B] group-hover:text-white transition-colors duration-300 flex items-center justify-center font-bold text-lg border border-[#AFCFC0]/60">
                    03
                  </div>
                  <h3 class="text-lg font-bold text-[#155E5B] font-sans">Growing Community</h3>
                  <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed">
                    Slowly, people started connecting with us. Trust grew, the community grew and so did the business.
                  </p>
                </div>
                <div class="pt-2 border-t border-[#F3EEE4] flex items-center gap-1.5 text-xs text-[#B8875A] font-semibold">
                  <app-icon name="heart-handshake" [size]="13"></app-icon>
                  <span>Customer Trust</span>
                </div>
              </div>

              <!-- Step 4 -->
              <div class="bg-white p-7 rounded-3xl border border-[#D5D8D3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group">
                <div class="space-y-4">
                  <div class="w-12 h-12 rounded-2xl bg-[#F0F7F3] text-[#155E5B] group-hover:bg-[#155E5B] group-hover:text-white transition-colors duration-300 flex items-center justify-center font-bold text-lg border border-[#AFCFC0]/60">
                    04
                  </div>
                  <h3 class="text-lg font-bold text-[#155E5B] font-sans">Pehnava Wale Bhaiya</h3>
                  <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed">
                    Today, that small beginning has grown into <strong class="text-[#155E5B]">Pehnava Wale Bhaiya</strong> — and our journey has only just begun.
                  </p>
                </div>
                <div class="pt-2 border-t border-[#F3EEE4] flex items-center gap-1.5 text-xs text-[#B8875A] font-semibold">
                  <app-icon name="award" [size]="13"></app-icon>
                  <span>Just The Beginning</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 5. Our Mission Section -->
          <div class="bg-[#F0F7F3] p-8 sm:p-14 rounded-3xl border border-[#AFCFC0] mb-20 shadow-sm" data-reveal>
            <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] border border-[#AFCFC0]">
                <app-icon name="sparkles" [size]="13" customClass="text-[#B89452]"></app-icon>
                <span>Our Purpose</span>
              </div>
              <h2 class="text-3xl sm:text-4xl font-bold text-[#155E5B] font-sans">
                Our Mission
              </h2>
              <p class="text-xs uppercase tracking-[0.2em] font-semibold text-[#71847B]">
                Our mission is simple:
              </p>
              <div class="pt-2">
                <p class="text-base sm:text-2xl font-bold text-[#155E5B] bg-white py-4 px-6 sm:px-8 rounded-2xl border border-[#AFCFC0]/60 shadow-xs inline-block max-w-full leading-snug">
                  "To make stylish, high-quality ethnic fashion affordable and accessible to women across India."
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div class="bg-white p-6 rounded-2xl border border-[#AFCFC0]/60 space-y-3">
                <div class="w-10 h-10 rounded-xl bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center">
                  <app-icon name="tag" [size]="20" customClass="text-[#B8875A]"></app-icon>
                </div>
                <h3 class="text-base font-bold text-[#155E5B] font-sans">Honest Pricing</h3>
                <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed">
                  We believe great fashion should never come at an unreasonable price.
                </p>
              </div>

              <div class="bg-white p-6 rounded-2xl border border-[#AFCFC0]/60 space-y-3">
                <div class="w-10 h-10 rounded-xl bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center">
                  <app-icon name="award" [size]="20" customClass="text-[#155E5B]"></app-icon>
                </div>
                <h3 class="text-base font-bold text-[#155E5B] font-sans">Quality First</h3>
                <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed">
                  With quality and honest pricing at the heart of everything we do.
                </p>
              </div>

              <div class="bg-white p-6 rounded-2xl border border-[#AFCFC0]/60 space-y-3">
                <div class="w-10 h-10 rounded-xl bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center">
                  <app-icon name="shield-check" [size]="20" customClass="text-[#25D366]"></app-icon>
                </div>
                <h3 class="text-base font-bold text-[#155E5B] font-sans">Wear with Confidence</h3>
                <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed">
                  Customer trust drives us to create fashion that every woman can wear with confidence.
                </p>
              </div>
            </div>
          </div>

          <!-- 6. In-Store Appointment CTA -->
          <div class="bg-white p-8 sm:p-12 rounded-3xl border border-[#D5D8D3] shadow-md text-center max-w-4xl mx-auto space-y-6">
            <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">Visit Pehnava Ajmer</span>
            <h3 class="text-2xl sm:text-3xl font-bold text-[#155E5B] font-sans">Experience Our Collection In Person</h3>
            <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed max-w-2xl mx-auto">
              Visit our boutique store on Mayo Link Road, Ajmer to explore our full collection with personalized styling support.
            </p>
            <div class="pt-2">
              <button
                (click)="whatsAppService.openWhatsApp('Schedule Boutique Appointment')"
                class="w-full sm:w-auto btn-pehnava-primary px-6 sm:px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-md active:scale-98 text-center whitespace-normal leading-snug"
              >
                <app-icon name="whatsapp" [size]="18" customClass="text-[#25D366] shrink-0"></app-icon>
                <span>Connect with Pehnava Wale Bhaiya on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- Location Map -->
      <app-map-section></app-map-section>
    </main>
  `
})
export class AboutComponent implements OnInit {
    private readonly seo = inject(SeoService);
    private readonly schema = inject(SchemaService);
    readonly whatsAppService = inject(WhatsAppService);

    ngOnInit(): void {
        this.seo.setMeta({
            title: 'Our Story | Pehnava Wale Bhaiya - Founder Ritik Soni',
            description: 'Discover the inspiring story of Pehnava Wale Bhaiya & founder Ritik Soni. From a humble family business in Ajmer to empowering thousands of women with affordable, high-quality ethnic fashion.',
            url: '/about',
        });

        this.schema.injectBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '/about' },
        ]);
    }
}

