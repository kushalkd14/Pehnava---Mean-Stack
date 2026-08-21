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
    <main class="pt-24 pb-16 sm:pt-28 bg-[#FAF8F3]">
      <!-- Page Hero Banner -->
      <section class="py-12 sm:py-16 bg-[#F3EEE4] border-b border-[#D5D8D3]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">
            About Our Brand
          </span>
          <h1 class="text-3xl sm:text-5xl font-bold text-[#155E5B] mt-2 mb-4 font-sans">
            The Story of Pehnava
          </h1>
          <p class="text-sm sm:text-base text-[#71847B] leading-relaxed">
            Crafting timeless couture, celebrating Indian heritage embroidery, and bringing regal fashion experiences to women across Rajasthan.
          </p>
        </div>
      </section>

      <!-- Boutique Story & Brand Journey -->
      <section class="py-16 sm:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div class="lg:col-span-6 space-y-6">
              <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">
                Boutique Legacy
              </span>
              <h2 class="text-2xl sm:text-4xl font-bold text-[#155E5B] font-sans">
                A Journey Rooted in Passion & Craftsmanship
              </h2>
              <p class="text-sm text-[#71847B] leading-relaxed">
                Founded with a passion for royal Rajasthani silhouettes and modern elegance, Pehnava has become a beloved fashion studio in Ajmer.
              </p>
              <p class="text-sm text-[#71847B] leading-relaxed">
                We specialize in bespoke bridal lehengas, hand-embroidered sarees, reception gowns, and festive wear. Every ensemble in our collection is curated with meticulous attention to detail, fabric drape, and hand-worked embellishments.
              </p>
            </div>

            <div class="lg:col-span-6">
              <div class="aspect-[4/3] rounded-3xl overflow-hidden border border-[#D5D8D3] shadow-lg bg-white">
                <img
                  src="assets/store/store-01.webp"
                  alt="Pehnava Boutique Studio Ajmer"
                  loading="lazy"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <!-- Mission & Vision -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div class="bg-white p-8 rounded-3xl border border-[#AFCFC0] shadow-xs space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center">
                <app-icon name="sparkles" [size]="24" customClass="text-[#B8875A]"></app-icon>
              </div>
              <h3 class="text-xl font-bold text-[#155E5B]">Our Mission</h3>
              <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed">
                To empower every woman to look and feel regal on her most cherished days by providing luxury fashion design, custom tailoring, and warm in-store styling guidance.
              </p>
            </div>

            <div class="bg-white p-8 rounded-3xl border border-[#AFCFC0] shadow-xs space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center">
                <app-icon name="award" [size]="24" customClass="text-[#155E5B]"></app-icon>
              </div>
              <h3 class="text-xl font-bold text-[#155E5B]">Our Vision</h3>
              <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed">
                To stand as Rajasthan's premier informative fashion boutique, renowned for uncompromised handwork quality, seamless WhatsApp consultation, and personal client care.
              </p>
            </div>
          </div>

          <!-- Store Experience Highlights (Responsive Button & Clean Text) -->
          <div class="bg-[#F0F7F3] p-6 sm:p-12 rounded-3xl border border-[#AFCFC0]/60 mb-20 text-center max-w-4xl mx-auto space-y-6">
            <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">The Boutique Experience</span>
            <h3 class="text-2xl sm:text-3xl font-bold text-[#155E5B]">Private Trial Rooms & Stylist Fitting</h3>
            <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed max-w-2xl mx-auto">
              Visiting Pehnava is an experience in luxury. Our store on Mayo Link Road, Ajmer features comfortable private trial rooms, dedicated fitting mirrors, and master tailors available for instant custom adjustments.
            </p>
            <div class="pt-2">
              <button
                (click)="whatsAppService.openWhatsApp('Schedule Boutique Appointment')"
                class="w-full sm:w-auto btn-pehnava-primary px-5 sm:px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-md active:scale-98 text-center whitespace-normal leading-snug"
              >
                <app-icon name="whatsapp" [size]="17" customClass="text-[#25D366] shrink-0"></app-icon>
                <span>Book In-Store Styling Session</span>
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
      title: 'About Pehnava | Boutique Legacy & Story',
      description: 'Discover the story behind Pehnava, Rajasthan’s luxury fashion boutique. Learn about our mission, master craftsmanship, and store experience.',
      url: '/about',
    });

    this.schema.injectBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ]);
  }
}
