import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { WhatsAppService } from '../../services/whatsapp.service';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Boutique' | 'Store' | 'Cotton Suits' | 'Festive Suits';
  image: string;
  description: string;
}

@Component({
  selector: 'app-gallery-grid',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="py-12 sm:py-16 bg-[#FAF8F3]">
      <div class="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <!-- Image Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (item of items; track item.id) {
            <div class="group bg-white rounded-3xl overflow-hidden border border-[#D5D8D3] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
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
              </div>

              <div class="p-5 flex items-start justify-between gap-3 grow">
                <div class="flex-1 min-w-0">
                  <h3 class="text-sm font-bold text-[#155E5B] font-sans leading-snug line-clamp-2">{{ item.title }}</h3>
                  <p class="text-xs text-[#71847B] mt-1 line-clamp-2 leading-relaxed">{{ item.description }}</p>
                </div>
                <button
                  (click)="whatsAppService.openWhatsApp(item.title)"
                  aria-label="Enquire about {{ item.title }} on WhatsApp"
                  class="p-2.5 rounded-full bg-[#DDEFE6] text-[#155E5B] hover:bg-[#155E5B] hover:text-white transition-colors cursor-pointer shrink-0 mt-0.5"
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
          class="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-[#092B2A]/80 backdrop-blur-sm animate-fade-in"
          (click)="activeModalItem.set(null)"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
            class="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#D5D8D3] flex flex-col max-h-[85vh]"
            (click)="$event.stopPropagation()"
          >
            <!-- Image Area -->
            <div class="relative bg-[#092B2A] flex items-center justify-center overflow-hidden min-h-[220px] max-h-[340px]">
              <img
                [src]="item.image"
                [alt]="item.title"
                class="w-full h-full max-h-[340px] object-contain mx-auto block"
              />
              <button
                (click)="activeModalItem.set(null)"
                aria-label="Close dialog"
                class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer z-10 shadow-md"
              >
                <app-icon name="x" [size]="16"></app-icon>
              </button>
            </div>

            <!-- Modal Content & CTA -->
            <div class="p-4 sm:p-5 bg-[#FAF8F3] flex flex-col justify-between gap-3 shrink-0">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#B8875A] block mb-0.5">{{ item.category }}</span>
                <h3 id="gallery-modal-title" class="text-sm sm:text-base font-bold text-[#155E5B] leading-snug">{{ item.title }}</h3>
                <p class="text-xs text-[#71847B] mt-1 leading-relaxed line-clamp-2">{{ item.description }}</p>
              </div>
              <button
                (click)="whatsAppService.openWhatsApp(item.title); activeModalItem.set(null)"
                class="w-full btn-pehnava-primary py-2.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-sm active:scale-98"
              >
                <app-icon name="message-circle" [size]="15" customClass="text-[#25D366]"></app-icon>
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
  activeModalItem = signal<GalleryItem | null>(null);

  readonly items: GalleryItem[] = [
    {
      id: 'g-real-store-1',
      title: 'Pehnava RJ01 Arched Shelving & Customer Counter',
      category: 'Store',
      image: 'assets/store/real-store-01.webp',
      description: 'Real inside view of our Mayo Link Road store with arched shelves filled with daily cotton suits & printed Kurtis.',
    },
    {
      id: 'g-real-staff-1',
      title: 'Pehnava RJ01 Dedicated Styling Team',
      category: 'Boutique',
      image: 'assets/store/real-staff-01.webp',
      description: 'Our friendly boutique staff showing floral Kurtis, Bandhani suit sets, and dailywear ethnic outfits.',
    },
    {
      id: 'g-real-store-2',
      title: 'Curated Cotton Suits & Bandhani Racks',
      category: 'Store',
      image: 'assets/store/real-store-02.webp',
      description: 'Stacked cotton suit sets, Bandhani dupattas, and daily wear ethnic Kurtis at Pehnava RJ01 counter.',
    },
    {
      id: 'g-daily-suit-1',
      title: 'Pastel Printed Cotton Kurti Suit Set',
      category: 'Cotton Suits',
      image: 'assets/gallery/daily-suit-01.webp',
      description: 'Breathable Mulmul cotton printed suit set tailored for everyday comfort and workwear.',
    },
    {
      id: 'g-festive-suit-1',
      title: 'Rajasthani Bandhani Gota Patti Suit Set',
      category: 'Festive Suits',
      image: 'assets/gallery/bandhani-suit-01.webp',
      description: 'Vibrant pink Bandhani ethnic suit set accented with traditional Gota Patti borders.',
    },
    {
      id: 'g-real-store-3',
      title: 'Mayo Link Road Boutique Corridor & Trial Arch',
      category: 'Boutique',
      image: 'assets/store/real-store-03.webp',
      description: 'Ambiance of our Ajmer boutique featuring track lights, ornate ceiling paneling, and trial rooms.',
    },
  ];

  readonly whatsAppService = inject(WhatsAppService);
}
