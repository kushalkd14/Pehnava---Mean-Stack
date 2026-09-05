import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { COLLECTIONS_DATA, FEATURED_LOOKS_DATA } from '../../data/fashionData';
import { Collection, Look } from '../../models/catalog.models';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
    selector: 'app-collection-detail-page',
    standalone: true,
    imports: [CommonModule, RouterLink, IconComponent],
    template: `
    <main class="pt-24 pb-16 sm:pt-28 bg-[#FAF8F3]">
      @if (collection(); as item) {
        <!-- Collection Header Banner -->
        <section class="py-12 sm:py-20 bg-[#F3EEE4] border-b border-[#D5D8D3]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div class="lg:col-span-7 space-y-6">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] border border-[#B89452]/40 shadow-xs">
                  <app-icon name="sparkles" [size]="13" customClass="text-[#B89452]"></app-icon>
                  <span>{{ item.tag }}</span>
                </div>
                <h1 class="text-3xl sm:text-5xl font-bold text-[#155E5B] font-sans leading-tight">
                  {{ item.name }}
                </h1>
                <p class="text-base sm:text-lg text-[#B8875A] font-serif italic">
                  {{ item.subtitle }}
                </p>
                <p class="text-sm sm:text-base text-[#71847B] leading-relaxed">
                  {{ item.description }}
                </p>

                <!-- Features Bullets -->
                @if (item.features && item.features.length) {
                  <div class="grid grid-cols-2 gap-3 pt-2">
                    @for (feat of item.features; track feat) {
                      <div class="flex items-center gap-2 text-xs font-medium text-[#155E5B]">
                        <app-icon name="check" [size]="14" customClass="text-[#B8875A]"></app-icon>
                        <span>{{ feat }}</span>
                      </div>
                    }
                  </div>
                }

                <div class="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    (click)="whatsAppService.openWhatsApp(item.name)"
                    class="btn-pehnava-primary px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2.5 cursor-pointer shadow-md"
                  >
                    <app-icon name="message-circle" [size]="18" customClass="text-[#25D366]"></app-icon>
                    <span>Enquire on WhatsApp</span>
                  </button>

                  <a
                    routerLink="/collections"
                    class="btn-pehnava-secondary px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
                  >
                    <app-icon name="arrow-left" [size]="14"></app-icon>
                    <span>All Collections</span>
                  </a>
                </div>
              </div>

              <!-- Hero Collection Image -->
              <div class="lg:col-span-5">
                <div class="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-[#AFCFC0] shadow-xl bg-white">
                  <img
                    [src]="item.image"
                    [alt]="item.name"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-full object-cover img-luxury-hover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0E4543]/40 via-transparent to-transparent"></div>
                  <span class="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#155E5B]/90 backdrop-blur-xs text-[#FAF8F3] text-xs font-bold tracking-wider uppercase">
                    Ajmer Boutique Exclusive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Matching Outfits Section -->
        <section class="py-16 sm:py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-12">
              <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">
                Curated Styles
              </span>
              <h2 class="text-2xl sm:text-4xl font-bold text-[#155E5B] mt-2 mb-3 font-sans">
                Outfits in {{ item.name }}
              </h2>
              <p class="text-sm text-[#71847B]">
                Discover ready-for-trial pieces available at our boutique on Mayo Link Road, Ajmer.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (look of relatedLooks(); track look.id) {
                <div class="bg-white rounded-2xl overflow-hidden border border-[#D5D8D3] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div class="aspect-[4/3] overflow-hidden bg-[#F0F7F3] relative">
                    <img [src]="look.image" [alt]="look.title" loading="lazy" class="w-full h-full object-cover img-luxury-hover" />
                    <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#155E5B] text-white text-[10px] uppercase font-semibold">
                      {{ look.category }}
                    </span>
                  </div>
                  <div class="p-4 sm:p-4.5 flex flex-col justify-between flex-grow space-y-3">
                    <div>
                      <h3 class="text-base font-bold text-[#155E5B]">{{ look.title }}</h3>
                      <p class="text-xs text-[#71847B] mt-1 line-clamp-2">{{ look.description }}</p>
                    </div>
                    <button
                      (click)="whatsAppService.openWhatsApp(look.title)"
                      class="w-full btn-pehnava-primary py-3 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <app-icon name="message-circle" [size]="15" customClass="text-[#25D366]"></app-icon>
                      <span>Enquire on WhatsApp</span>
                    </button>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>
      } @else {
        <!-- Fallback if not found -->
        <section class="py-24 text-center max-w-lg mx-auto">
          <h2 class="text-2xl font-bold text-[#155E5B] mb-4">Collection Not Found</h2>
          <p class="text-sm text-[#71847B] mb-6">Explore all 11 primary women's fashion collections from Pehnava.</p>
          <a routerLink="/collections" class="btn-pehnava-primary px-6 py-3 rounded-full text-xs uppercase">
            View All Collections
          </a>
        </section>
      }
    </main>
  `
})
export class CollectionDetailPageComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly seo = inject(SeoService);
    private readonly schema = inject(SchemaService);
    readonly whatsAppService = inject(WhatsAppService);

    collection = signal<Collection | null>(null);
    relatedLooks = signal<Look[]>([]);

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const slug = params['slug'];
            const found = COLLECTIONS_DATA.find((c) => c.slug === slug);

            if (found) {
                this.collection.set(found);

                const looks = FEATURED_LOOKS_DATA.filter((l) => l.categorySlug === slug || l.category.toLowerCase().includes(found.name.toLowerCase().split(' ')[0]));
                this.relatedLooks.set(looks.length ? looks : FEATURED_LOOKS_DATA.slice(0, 3));

                this.seo.setMeta({
                    title: `${found.name} Collection in Ajmer | Pehnava`,
                    description: `${found.description} Discover ${found.name} at Pehnava boutique on Mayo Link Road, Ajmer or enquire on WhatsApp.`,
                    url: `/collections/${found.slug}`,
                    image: found.image,
                    robots: 'index, follow',
                });

                this.schema.injectCollectionSchema(found);
                this.schema.injectBreadcrumbSchema([
                    { name: 'Home', url: '/' },
                    { name: 'Collections', url: '/collections' },
                    { name: found.name, url: `/collections/${found.slug}` },
                ]);
            } else {
                this.collection.set(null);
                this.seo.setMeta({
                    title: 'Collection Not Found | Pehnava',
                    description: 'The requested outfit collection could not be found.',
                    robots: 'noindex, follow',
                });
            }
        });
    }
}
