import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { BUSINESS_CONFIG } from '../../config/business';

export interface InstagramCardItem {
  id: string;
  image: string;
  tag: string;
  alt: string;
}

@Component({
  selector: 'app-instagram-showcase',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="instagram-showcase" class="py-16 sm:py-24 bg-[#FAF8F3] border-t border-[#D5D8D3] relative overflow-hidden">
      <!-- Background Soft Ambient Glow -->
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-[#DDEFE6]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Top Section Header & Follow CTA -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDEFE6] text-[#155E5B] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#AFCFC0] shadow-xs">
              <app-icon name="instagram" [size]="14" customClass="text-[#C98F91]"></app-icon>
              <span>Instagram Feed</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#155E5B] tracking-tight mb-3 leading-tight">
              Follow @pehnavarj01 on Instagram
            </h2>

            <p class="text-xs sm:text-sm text-[#71847B] font-sans leading-relaxed">
              Official Boutique in Ajmer • Bridal Lehengas • Designer Sarees • Co-Ord Sets • Premium Kurtis • Festive Collections
            </p>
          </div>

          <!-- Follow Button: Pastel Emerald CTA -->
          <div class="shrink-0">
            <a
              [href]="instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @pehnavarj01 on Instagram"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-[#DDEFE6] hover:bg-[#155E5B] text-[#155E5B] hover:text-white border border-[#AFCFC0] text-xs font-bold uppercase tracking-wider transition-colors duration-[280ms] cursor-pointer shadow-xs active:scale-98 text-center"
            >
              <app-icon name="instagram" [size]="18" customClass="text-[#C98F91] group-hover:text-white shrink-0"></app-icon>
              <span>Follow @pehnavarj01</span>
              <app-icon name="arrow-up-right" [size]="14" customClass="shrink-0"></app-icon>
            </a>
          </div>
        </div>

        <!-- 6 Featured Instagram Cards (Mobile Horizontal Scroll / Desktop Responsive Grid) -->
        <div class="flex overflow-x-auto no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-6 gap-4 sm:gap-6 pb-4 pt-1">
          @for (post of instagramPosts; track post.id) {
            <a
              [href]="instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="'View post: ' + post.tag + ' on Instagram'"
              class="group relative shrink-0 w-[240px] sm:w-[260px] lg:w-auto aspect-[3/4] rounded-[24px] overflow-hidden bg-[#FAF8F3] border-2 border-[#AFCFC0] hover:border-[#B89452] transition-colors duration-[280ms] shadow-sm hover:shadow-xl snap-start cursor-pointer block"
            >
              <!-- Image with GPU accelerated 1 -> 1.04 hover scaling -->
              <img
                [src]="post.image"
                [alt]="post.alt"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover object-top transition-transform duration-[280ms] ease-out group-hover:scale-[1.04] will-change-transform"
              />

              <!-- Gold Overlay (0 -> 15% opacity on hover) -->
              <div
                class="absolute inset-0 bg-[#B89452]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms] ease-out pointer-events-none will-change-[opacity]"
              ></div>

              <!-- Gradient Base Vignette -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#0E4543]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-[280ms]"></div>

              <!-- Instagram Icon (Fades in on hover) -->
              <div
                class="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FAF8F3]/90 text-[#155E5B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms] ease-out shadow-md will-change-[opacity]"
              >
                <app-icon name="instagram" [size]="18" customClass="text-[#C98F91]"></app-icon>
              </div>

              <!-- Card Bottom Badge -->
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F3]/95 backdrop-blur-xs text-[#155E5B] text-[10px] font-bold uppercase tracking-wider border border-[#AFCFC0] shadow-2xs">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#B89452]"></span>
                  <span>{{ post.tag }}</span>
                </span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `
})
export class InstagramShowcaseComponent {
  readonly instagramUrl = BUSINESS_CONFIG.instagramUrl;

  readonly instagramPosts: InstagramCardItem[] = [
    {
      id: 'ig-1',
      image: 'assets/instagram/insta-01.webp',
      tag: 'Bridal Lehengas',
      alt: 'Pehnava Official Bridal Lehengas & Royal Zardosi Outfits',
    },
    {
      id: 'ig-2',
      image: 'assets/instagram/insta-02.webp',
      tag: 'Designer Sarees',
      alt: 'Pehnava Designer Organza & Silk Sarees Collection',
    },
    {
      id: 'ig-3',
      image: 'assets/instagram/insta-03.webp',
      tag: 'Festive Drops',
      alt: 'Pehnava Heavy Gota Patti Shararas & Festive Suits',
    },
    {
      id: 'ig-4',
      image: 'assets/instagram/insta-04.webp',
      tag: 'Co-Ord Edits',
      alt: 'Pehnava Botanical Tunic & Wide-Leg Co-Ord Sets',
    },
    {
      id: 'ig-5',
      image: 'assets/instagram/insta-05.webp',
      tag: 'Premium Kurtis',
      alt: 'Pehnava Modal Silk & Chanderi Flared Kurtis',
    },
    {
      id: 'ig-6',
      image: 'assets/instagram/insta-06.webp',
      tag: 'Cotton Sets',
      alt: 'Pehnava Pure Mulmul Cotton Daily Suit Ensembles',
    },
  ];
}
