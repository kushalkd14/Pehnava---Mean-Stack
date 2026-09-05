import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CollectionCardComponent } from '../../components/collection-card/collection-card.component';
import { CatalogService } from '../../services/catalog.service';
import { COLLECTIONS_DATA } from '../../data/fashionData';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { WhatsAppService } from '../../services/whatsapp.service';
import { Collection } from '../../models/catalog.models';

@Component({
    selector: 'app-collections-page',
    standalone: true,
    imports: [CommonModule, IconComponent, CollectionCardComponent],
    template: `
    <main class="pt-24 pb-16 sm:pt-28 bg-[#FAF8F3]">
      <!-- Collections Hero Banner -->
      <section class="py-12 sm:py-16 bg-[#F3EEE4] border-b border-[#D5D8D3]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">
            Women's Fashion Catalog
          </span>
          <h1 class="text-3xl sm:text-5xl font-bold text-[#155E5B] mt-2 mb-4 font-sans">
            Our Primary Women's Collections
          </h1>
          <p class="text-sm sm:text-base text-[#71847B] leading-relaxed">
            Browse through our primary women's edits — Short Kurtis, Casual & Heavy Suits, Co-Ord Sets, Bottom Wear, T-Shirts, & Festive drops.
          </p>
        </div>
      </section>

      <!-- Category Filter Pills -->
      <section class="py-8 bg-white border-b border-[#D5D8D3] sticky top-16 z-30 shadow-xs">
        <div class="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
          <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            @for (cat of filterCategories; track cat) {
              <button
                (click)="selectedCategory.set(cat)"
                [ngClass]="selectedCategory() === cat ? 'bg-[#155E5B] text-white' : 'bg-[#FAF8F3] text-[#71847B] border border-[#D5D8D3] hover:border-[#155E5B] hover:text-[#155E5B]'"
                class="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap"
              >
                {{ cat }}
              </button>
            }
          </div>
        </div>
      </section>

      <!-- Collections Grid -->
      <section class="py-16 sm:py-20">
        <div class="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (item of filteredCollections(); track item.id) {
              <app-collection-card [item]="item"></app-collection-card>
            }
          </div>
        </div>
      </section>

      <!-- WhatsApp Direct Enquiry Banner -->
      <section class="py-16 bg-[#F0F7F3] border-t border-[#AFCFC0]/60">
        <div class="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 class="text-2xl font-bold text-[#155E5B]">Looking for custom size adjustments or boutique trials?</h3>
          <p class="text-xs sm:text-sm text-[#71847B]">
            Our Mayo Link Road boutique studio in Ajmer features private trial rooms and personal styling support.
          </p>
          <div>
            <button
              (click)="whatsAppService.openWhatsApp('Custom Collection Request')"
              class="w-full sm:w-auto btn-pehnava-primary px-5 sm:px-8 py-3.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center whitespace-normal active:scale-98"
            >
              <app-icon name="whatsapp" [size]="16" customClass="text-[#25D366] shrink-0"></app-icon>
              <span>Enquire on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  `
})
export class CollectionsComponent implements OnInit {
    private readonly catalog = inject(CatalogService);
    private readonly seo = inject(SeoService);
    private readonly schema = inject(SchemaService);
    readonly whatsAppService = inject(WhatsAppService);

    readonly filterCategories = [
        'All',
        'Short Kurtis',
        'Casual Suits',
        'Heavy Fancy Suits',
        'Co-Ord Sets',
        'Bottom Wear',
        'T-Shirts',
        'Festive Collection',
        'New Arrivals',
    ];

    selectedCategory = signal<string>('All');
    collections = signal<Collection[]>([]);

    filteredCollections = computed(() => {
        const cat = this.selectedCategory();
        const list = this.collections();
        if (cat === 'All') return list;
        return list.filter(
            (item) => item.name.toLowerCase().includes(cat.toLowerCase()) || item.tag.toLowerCase().includes(cat.toLowerCase()) || item.subtitle.toLowerCase().includes(cat.toLowerCase())
        );
    });

    ngOnInit(): void {
        this.seo.setMeta({
            title: "Women's Ethnic Wear Collections in Ajmer | Pehnava",
            description: "Explore Pehnava’s primary women’s collections in Ajmer: Short Kurtis, Decent Printed Casual Suits, Heavy Fancy Suits, Co-Ord Sets, Bottom Wear & Tees.",
            url: '/collections',
        });

        this.schema.injectBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Collections', url: '/collections' },
        ]);

        this.catalog.collections().subscribe((res) => {
            const requiredCollections: Collection[] = COLLECTIONS_DATA;
            this.collections.set(res && res.length >= 6 ? res : requiredCollections);
        });
    }
}
