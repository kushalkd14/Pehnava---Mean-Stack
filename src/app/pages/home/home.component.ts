import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { OfferBannerComponent } from '../../components/offer-banner/offer-banner.component';
import { HighlightsStripComponent } from '../../components/highlights-strip/highlights-strip.component';
import { CollectionCardComponent } from '../../components/collection-card/collection-card.component';
import { ModernGraceSectionComponent } from '../../components/modern-grace-section/modern-grace-section.component';
import { CoordEditSectionComponent } from '../../components/coord-edit-section/coord-edit-section.component';
import { StoreExperienceComponent } from '../../components/store-experience/store-experience.component';
import { InstagramShowcaseComponent } from '../../components/instagram-showcase/instagram-showcase.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { MapSectionComponent } from '../../components/map-section/map-section.component';
import { BoutiqueDividerComponent } from '../../shared/components/boutique-divider/boutique-divider.component';
import { CatalogService } from '../../services/catalog.service';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { WhatsAppService } from '../../services/whatsapp.service';
import { Collection, Look } from '../../models/catalog.models';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IconComponent,
    HeroComponent,
    OfferBannerComponent,
    HighlightsStripComponent,
    CollectionCardComponent,
    ModernGraceSectionComponent,
    CoordEditSectionComponent,
    StoreExperienceComponent,
    InstagramShowcaseComponent,
    TestimonialComponent,
    MapSectionComponent,
    BoutiqueDividerComponent,
  ],
  template: `
    <main class="overflow-x-hidden bg-[#FAF8F3]">
      <!-- 1. Hero Editorial -->
      <app-hero></app-hero>

      <!-- 2. Festive Offer Banner (Configurable via offers.config.ts) -->
      <app-offer-banner></app-offer-banner>

      <!-- 3. Live Highlights Strip -->
      <app-highlights-strip></app-highlights-strip>

      <!-- 4. Shop by Collection (Main Categories Grid) -->
      <section id="collections" class="py-16 sm:py-24 bg-[#FAF8F3]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-14" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#DDEFE6] text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] border border-[#AFCFC0] mb-3">
              <app-icon name="sparkles" [size]="13" customClass="text-[#B89452]"></app-icon>
              <span>Women’s Ethnic Curation</span>
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif text-[#155E5B] tracking-tight mb-4">
              Shop By Collection
            </h2>
            <p class="text-sm sm:text-base text-[#71847B] font-sans max-w-2xl mx-auto leading-relaxed">
              Explore handcrafted Gota Patti Shararas, flared silk Anarkalis, pure Mulmul cotton suit sets, cargo pants, oversized tees, and modern co-ord edits.
            </p>
            <app-boutique-divider></app-boutique-divider>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            @for (item of collections; track item.id) {
              <app-collection-card [item]="item"></app-collection-card>
            }
          </div>

          <div class="text-center mt-12 sm:mt-14 px-3 sm:px-0">
            <a
              routerLink="/collections"
              class="w-full sm:w-auto btn-pehnava-secondary inline-flex items-center justify-center gap-2.5 px-4 sm:px-9 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm active:scale-98 text-center whitespace-normal leading-snug max-w-full"
            >
              <span class="max-w-full text-center">Explore All 11 Women’s Collections</span>
              <app-icon name="arrow-right" [size]="15" customClass="shrink-0"></app-icon>
            </a>
          </div>
        </div>
      </section>

      <!-- 5. New Arrivals (Latest Instagram Products) -->
      <section class="py-16 sm:py-24 bg-[#F3EEE4]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-14" data-reveal>
            <span class="text-xs uppercase tracking-[0.25em] font-bold text-[#B8875A] block mb-2">
              Fresh In Store
            </span>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif text-[#155E5B] tracking-tight mb-3">
              New Arrivals & Trending Looks
            </h2>
            <p class="text-sm sm:text-base text-[#71847B]">
              Latest boutique additions updated straight from our store racks & Instagram showcase.
            </p>
            <app-boutique-divider></app-boutique-divider>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (look of trendingLooks; track look.id) {
              <div class="bg-white rounded-2xl overflow-hidden border border-[#D5D8D3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
                <div class="aspect-[4/3] overflow-hidden bg-[#F0F7F3] relative">
                  <img [src]="look.image" [alt]="look.title" loading="lazy" class="w-full h-full object-cover img-luxury-hover" />
                  <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#155E5B] text-white text-[10px] uppercase font-semibold">
                    {{ look.category }}
                  </span>
                </div>
                <div class="p-4 sm:p-4.5 flex flex-col justify-between flex-grow space-y-3">
                  <div>
                    <h3 class="text-base font-serif font-bold text-[#155E5B]">{{ look.title }}</h3>
                    <p class="text-xs text-[#71847B] mt-1 line-clamp-2 leading-relaxed">{{ look.description }}</p>
                  </div>
                  <button
                    (click)="whatsAppService.openWhatsApp(look.title)"
                    class="w-full btn-pehnava-primary py-2.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <app-icon name="whatsapp" [size]="15" customClass="text-[#25D366] shrink-0"></app-icon>
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- 6. Modern Grace Edit Spotlight -->
      <app-modern-grace-section></app-modern-grace-section>

      <!-- 7. Co-Ord Collection Edit Spotlight -->
      <app-coord-edit-section></app-coord-edit-section>

      <!-- 8. Boutique Store Experience (Mayo Link Road Store Photography) -->
      <app-store-experience></app-store-experience>

      <!-- 9. Instagram Showcase (Section 1) -->
      <app-instagram-showcase></app-instagram-showcase>

      <!-- 10. Customer Love Marquee (Section 2 - Continuous Moving Reviews) -->
      <app-testimonial></app-testimonial>

      <!-- 11. Visit Store + Map (Conversion) -->
      <app-map-section></app-map-section>

      <!-- 12. WhatsApp Lead Generation Consultation -->
      <section class="py-16 bg-[#155E5B] text-[#FAF8F3] text-center relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span class="text-xs uppercase tracking-[0.25em] font-bold text-[#D4B270]">
            Personalized Styling Consultation
          </span>
          <h2 class="text-3xl sm:text-4xl font-serif">
            Ready to Find Your Dream Outfit?
          </h2>
          <p class="text-sm text-[#DDEFE6] max-w-xl mx-auto leading-relaxed font-sans">
            Connect with Pehnava RJ01 stylists directly on WhatsApp to inquire about designs, check fabric availability, or schedule your store appointment in Ajmer.
          </p>
          <div>
            <button
              (click)="whatsAppService.openWhatsApp('General Consultation')"
              class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider shadow-xl inline-flex items-center justify-center gap-2.5 cursor-pointer transition-transform active:scale-98 text-center whitespace-normal"
            >
              <app-icon name="whatsapp" [size]="18" customClass="text-white shrink-0"></app-icon>
              <span>Instant WhatsApp Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  `
})
export class HomeComponent implements OnInit {
  private readonly catalog = inject(CatalogService);
  private readonly seo = inject(SeoService);
  private readonly schema = inject(SchemaService);
  readonly whatsAppService = inject(WhatsAppService);

  collections: Collection[] = [];
  trendingLooks: Look[] = [];

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'Pehnava RJ01 | Royal Festive Women’s Fashion Boutique in Ajmer',
      description: 'Discover handcrafted Gota Patti Shararas, flared silk Anarkalis, pure Mulmul cotton suits & modern co-ord sets at Pehnava RJ01, Ajmer. Visit our studio or enquire on WhatsApp.',
      url: '/',
    });

    this.schema.injectSchemas();

    this.catalog.collections().subscribe((res) => (this.collections = res));
    this.catalog.looks().subscribe((res) => (this.trendingLooks = res.slice(0, 6)));
  }
}
