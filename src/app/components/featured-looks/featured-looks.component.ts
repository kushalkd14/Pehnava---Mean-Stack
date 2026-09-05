import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Look } from '../../models/catalog.models';

@Component({
    selector: 'app-featured-looks',
    standalone: true,
    imports: [CommonModule, IconComponent],
    template: `
    <section id="featured-looks" class="py-20 lg:py-28 bg-[#FAF8F3] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12" data-reveal>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDEFE6] text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-[#AFCFC0]">
            <app-icon name="sparkles" [size]="13" customClass="text-[#B89452]"></app-icon>
            <span>The Boutique Lookbook</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#155E5B] tracking-tight mb-4">
            Featured Women’s Outfits & Styles
          </h2>
          <p class="text-sm sm:text-base text-[#71847B] font-sans font-normal max-w-2xl mx-auto leading-relaxed">
            A visual curation of women's silhouettes, soft fabrics, and vibrant textures available at Pehnava in Ajmer.
            Tap any look to inspect details or connect directly on WhatsApp.
          </p>
        </div>

        <!-- Filter Pills -->
        <div class="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-14 no-scrollbar" data-reveal data-reveal-delay="100">
          @for (tab of filterTabs; track tab.id) {
            @let isActive = selectedCategoryFilter === tab.id;
            <button
              [id]="'filter-tab-' + tab.id"
              (click)="onSelectCategoryFilter(tab.id)"
              class="relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase whitespace-nowrap transition-all duration-200 cursor-pointer"
              [ngClass]="
                isActive
                  ? 'bg-[#155E5B] text-[#FAF8F3] shadow-md -translate-y-0.5'
                  : 'bg-[#FAF8F3] text-[#71847B] border border-[#D5D8D3] hover:border-[#155E5B] hover:text-[#155E5B]'
              "
            >
              <span>{{ tab.label }}</span>
              @if (isActive) {
                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B89452]"></span>
              }
            </button>
          }
        </div>

        <!-- Looks Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          @for (look of filteredLooks; track look.id; let idx = $index) {
            <div
              [id]="'featured-look-' + look.id"
              class="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#D5D8D3] shadow-xs hover:shadow-xl hover:border-[#AFCFC0] transition-all duration-300"
              data-reveal
              [attr.data-reveal-delay]="(idx % 4) * 100"
            >
              <!-- Image Container -->
              <div
                class="relative aspect-[4/3] w-full bg-[#F0F7F3] overflow-hidden cursor-pointer"
                (click)="openLookModal.emit(look)"
              >
                <img
                  [src]="look.image"
                  [alt]="look.title"
                  width="750"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  class="w-full h-full object-cover img-luxury-hover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <!-- Category Chip -->
                <div class="absolute top-3.5 left-3.5 flex flex-col gap-1.5">
                  <span
                    class="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs border backdrop-blur-sm"
                    [ngClass]="getAccentBadgeStyles(look.accentColor)"
                  >
                    {{ look.category }}
                  </span>
                  @if (look.badge) {
                    <span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FAF8F3]/90 text-[#B8875A] text-[10px] font-bold uppercase tracking-widest border border-[#B89452]/30 w-fit">
                      {{ look.badge }}
                    </span>
                  }
                </div>

                <!-- Hover Quick View Overlay Button -->
                <div class="absolute inset-0 bg-[#0E4543]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF8F3] text-[#155E5B] text-xs font-semibold shadow-lg hover:scale-105 transition-transform">
                    <app-icon name="eye" [size]="15" customClass="text-[#B89452]"></app-icon>
                    <span>Quick View Look</span>
                  </span>
                </div>
              </div>

              <!-- Look Info & Actions -->
              <div class="p-4 sm:p-4.5 flex flex-col justify-between flex-1 bg-white border-t border-[#D5D8D3]/60 space-y-3">
                <div class="mb-4">
                  @if (look.fabricNote) {
                    <span class="text-[11px] text-[#71847B] font-medium block mb-1">
                      {{ look.fabricNote }}
                    </span>
                  }
                  <h3
                    (click)="openLookModal.emit(look)"
                    class="text-xl font-serif font-normal text-[#26332F] hover:text-[#155E5B] transition-colors cursor-pointer mb-1.5"
                  >
                    {{ look.title }}
                  </h3>
                  <p class="text-sm text-[#71847B] line-clamp-2 leading-relaxed font-sans font-normal">
                    {{ look.description }}
                  </p>
                </div>

                <!-- WhatsApp Action Button -->
                <button
                  [id]="'enquire-look-' + look.id"
                  (click)="enquireWhatsApp.emit(look)"
                  class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FAF8F3] hover:bg-[#155E5B] hover:text-[#FAF8F3] border border-[#AFCFC0] text-[#155E5B] text-xs font-semibold transition-all duration-200 cursor-pointer group-hover:border-[#155E5B] shadow-2xs"
                >
                  <app-icon name="message-circle" [size]="15" customClass="text-[#25D366]"></app-icon>
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>
          }
        </div>

        <!-- Footnote -->
        <div class="mt-14 text-center text-xs text-[#71847B] flex items-center justify-center gap-2 max-w-2xl mx-auto" data-reveal>
          <app-icon name="store" [size]="14" customClass="text-[#B8875A] shrink-0"></app-icon>
          <p>
            Visit Pehnava on Mayo Link Road, Ajmer to experience fabrics, trial custom sizes, and explore matching coordinated accessories.
          </p>
        </div>
      </div>
    </section>
  `
})
export class FeaturedLooksComponent {
    @Input() looks: Look[] = [];
    @Input() selectedCategoryFilter = 'all';
    @Output() selectCategoryFilter = new EventEmitter<string>();
    @Output() openLookModal = new EventEmitter<Look>();
    @Output() enquireWhatsApp = new EventEmitter<Look>();

    readonly filterTabs = [
        { id: 'all', label: 'All Looks', accent: 'teal' },
        { id: 'premium-kurtis', label: 'Premium Kurtis', accent: 'mint' },
        { id: 'heavy-fancy-suits', label: 'Heavy Fancy Suits', accent: 'rose' },
        { id: 'coord-sets', label: 'Co-Ord Sets', accent: 'terracotta' },
        { id: 'bottom-wear', label: 'Bottom Wear', accent: 'wood' },
        { id: 'tshirts', label: 'T-Shirts', accent: 'gold' },
    ];

    get filteredLooks(): Look[] {
        return this.looks.filter((look) => {
            if (this.selectedCategoryFilter === 'all' || !this.selectedCategoryFilter) return true;
            return look.categorySlug === this.selectedCategoryFilter;
        });
    }

    onSelectCategoryFilter(tabId: string): void {
        this.selectCategoryFilter.emit(tabId);
    }

    getAccentBadgeStyles(accent?: string): string {
        switch (accent) {
            case 'rose':
                return 'bg-[#F8EFEF] text-[#9E4A52] border-[#C98F91]/40';
            case 'terracotta':
                return 'bg-[#FAF0EB] text-[#A65330] border-[#C47B5A]/40';
            case 'lavender':
                return 'bg-[#F3F1F7] text-[#645973] border-[#9B91A8]/40';
            case 'gold':
                return 'bg-[#FAF6ED] text-[#8C6D33] border-[#B89452]/40';
            case 'mint':
                return 'bg-[#DDEFE6] text-[#155E5B] border-[#AFCFC0]';
            case 'peach':
                return 'bg-[#FAF3EE] text-[#A66347] border-[#E5B49B]/40';
            case 'teal':
            default:
                return 'bg-[#DDEFE6] text-[#0E4543] border-[#AFCFC0]';
        }
    }
}
