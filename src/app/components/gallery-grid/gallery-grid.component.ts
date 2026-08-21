import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { WhatsAppService } from '../../services/whatsapp.service';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Saree' | 'Gown' | 'Lehenga' | 'Boutique' | 'Customers' | 'Store';
  image: string;
  description: string;
}

@Component({
  selector: 'app-gallery-grid',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="py-12 sm:py-16 bg-[#FAF8F3]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filter Tabs -->
        <div class="flex items-center justify-center gap-2 flex-wrap mb-10">
          @for (cat of categories; track cat) {
            <button
              (click)="selectedCategory.set(cat)"
              [ngClass]="selectedCategory() === cat ? 'bg-[#155E5B] text-white shadow-sm' : 'bg-white text-[#71847B] border border-[#D5D8D3] hover:border-[#155E5B] hover:text-[#155E5B]'"
              class="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
            >
              {{ cat }}
            </button>
          }
        </div>

        <!-- Image Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (item of filteredItems(); track item.id) {
            <div class="group bg-white rounded-3xl overflow-hidden border border-[#D5D8D3] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col">
              <div class="relative aspect-square overflow-hidden bg-[#F0F7F3] cursor-pointer" (click)="activeModalItem.set(item)">
                <img
                  [src]="item.image"
                  [alt]="item.title"
                  loading="lazy"
                  class="w-full h-full object-cover img-luxury-hover"
                />
                <div class="absolute inset-0 bg-[#092B2A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs text-[#155E5B] text-xs font-semibold">
                    View & Enquire →
                  </span>
                </div>
                <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#155E5B]/90 text-[#FAF8F3] text-[10px] font-semibold tracking-wider uppercase">
                  {{ item.category }}
                </span>
              </div>

              <div class="p-5 flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-bold text-[#155E5B] font-sans">{{ item.title }}</h3>
                  <p class="text-xs text-[#71847B] mt-0.5">{{ item.description }}</p>
                </div>
                <button
                  (click)="whatsAppService.openWhatsApp(item.title)"
                  aria-label="Enquire about {{ item.title }} on WhatsApp"
                  class="p-2.5 rounded-full bg-[#DDEFE6] text-[#155E5B] hover:bg-[#155E5B] hover:text-white transition-colors cursor-pointer"
                >
                  <app-icon name="message-circle" [size]="16" customClass="text-[#25D366]"></app-icon>
                </button>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Lightbox Modal -->
      @if (activeModalItem(); as item) {
        <div
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#092B2A]/80 backdrop-blur-sm animate-fade-in"
          (click)="activeModalItem.set(null)"
        >
          <div
            class="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#D5D8D3]"
            (click)="$event.stopPropagation()"
          >
            <div class="relative aspect-auto max-h-[60vh] bg-[#092B2A]">
              <img [src]="item.image" [alt]="item.title" class="w-full h-full object-contain mx-auto" />
              <button
                (click)="activeModalItem.set(null)"
                class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <app-icon name="x" [size]="18"></app-icon>
              </button>
            </div>
            <div class="p-6 bg-[#FAF8F3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#B8875A]">{{ item.category }}</span>
                <h3 class="text-lg font-bold text-[#155E5B]">{{ item.title }}</h3>
                <p class="text-xs text-[#71847B] mt-1">{{ item.description }}</p>
              </div>
              <button
                (click)="whatsAppService.openWhatsApp(item.title); activeModalItem.set(null)"
                class="btn-pehnava-primary px-6 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 cursor-pointer shrink-0"
              >
                <app-icon name="message-circle" [size]="16" customClass="text-[#25D366]"></app-icon>
                <span>Enquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      }
    </section>
  `
})
export class GalleryGridComponent {
  readonly categories: Array<'All' | 'Bridal' | 'Saree' | 'Gown' | 'Lehenga' | 'Boutique' | 'Customers' | 'Store'> = [
    'All',
    'Bridal',
    'Saree',
    'Gown',
    'Lehenga',
    'Boutique',
    'Customers',
    'Store',
  ];

  selectedCategory = signal<string>('All');
  activeModalItem = signal<GalleryItem | null>(null);

  readonly items: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Royal Zardosi Crimson Bridal Lehenga',
      category: 'Bridal',
      image: 'assets/collections/bridal-01.webp',
      description: 'Hand-embroidered heavy velvet bridal lehenga with gold thread embroidery.',
    },
    {
      id: 'g2',
      title: 'Handcrafted Kanjeevaram Silk Saree',
      category: 'Saree',
      image: 'assets/collections/saree-01.webp',
      description: 'Elegant pure silk saree with delicate floral zari borders.',
    },
    {
      id: 'g3',
      title: 'Emerald Velvet Reception Gown',
      category: 'Gown',
      image: 'assets/collections/gowns-01.webp',
      description: 'Sophisticated Indo-Western gown crafted for reception and evening galas.',
    },
    {
      id: 'g4',
      title: 'Sangeet Mirror & Sequin Lehenga',
      category: 'Lehenga',
      image: 'assets/collections/lehenga-01.webp',
      description: 'Sequined peacock blue lehenga with lightweight net dupatta.',
    },
    {
      id: 'g5',
      title: 'Pehnava RJ01 Physical Boutique Interior',
      category: 'Boutique',
      image: 'assets/store/store-01.webp',
      description: 'Inside view of our luxury boutique trial space in Ajmer.',
    },
    {
      id: 'g6',
      title: 'Happy Bride in Custom Outfit',
      category: 'Customers',
      image: 'assets/customers/customer-01.webp',
      description: 'Our gorgeous client looking stunning on her special wedding day.',
    },
    {
      id: 'g7',
      title: 'Mayo Link Road Store Display',
      category: 'Store',
      image: 'assets/store/store-02.webp',
      description: 'Curated boutique racks and trial showroom at Pehnava RJ01, Ajmer.',
    },
    {
      id: 'g8',
      title: 'Customer Showcase in Designer Saree',
      category: 'Customers',
      image: 'assets/customers/customer-02.webp',
      description: 'Delighted client celebrating in custom Pehnava designer attire.',
    },
  ];

  filteredItems = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') return this.items;
    return this.items.filter((item) => item.category === cat);
  });

  readonly whatsAppService = inject(WhatsAppService);
}
