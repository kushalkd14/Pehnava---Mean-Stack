import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { InstagramPost, Store } from '../../models/catalog.models';
import { BUSINESS_CONFIG } from '../../config/business';

@Component({
  selector: 'app-instagram-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="instagram" class="py-20 lg:py-28 bg-white border-t border-[#D5D8D3] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-14" data-reveal>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-[#B89452]/40 shadow-xs">
            <app-icon name="instagram" [size]="13" customClass="text-[#C98F91]"></app-icon>
            <span>On The Grid</span>
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#155E5B] tracking-tight mb-4">
            Follow {{ store?.instagramHandle || businessConfig.instagramHandle }}
          </h2>

          <p class="text-sm sm:text-base text-[#71847B] font-sans font-normal max-w-xl mx-auto leading-relaxed mb-6">
            Real in-store arrivals, customer styling moments, festive BTS, and seasonal drops from our Ajmer boutique.
          </p>

          <a
            [href]="store?.instagramUrl || businessConfig.instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF8F3] hover:bg-[#155E5B] hover:text-white border border-[#AFCFC0] text-[#155E5B] text-xs font-semibold tracking-wide transition-all duration-200 shadow-2xs group"
          >
            <app-icon name="instagram" [size]="15" customClass="text-[#C98F91] group-hover:text-white transition-colors"></app-icon>
            <span>Follow on Instagram</span>
            <app-icon name="arrow-up-right" [size]="14" customClass="text-[#B89452] group-hover:text-white"></app-icon>
          </a>
        </div>

        <!-- 6 Grid Posts -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          @for (post of posts; track post.id; let idx = $index) {
            <a
              [href]="store?.instagramUrl || businessConfig.instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative aspect-square rounded-2xl overflow-hidden bg-[#FAF8F3] border border-[#D5D8D3] shadow-2xs hover:shadow-lg transition-all duration-300 block"
              data-reveal
              [attr.data-reveal-delay]="(idx % 6) * 75"
            >
              <img
                [src]="post.image"
                [alt]="post.caption"
                width="400"
                height="400"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                class="w-full h-full object-cover img-luxury-hover"
              />

              <!-- Hover Overlay with Deep Teal & Heart -->
              <div class="absolute inset-0 bg-[#0E4543]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-center text-white">
                <app-icon name="heart" [size]="20" fill="#D4B270" customClass="text-[#D4B270] mb-2"></app-icon>
                <p class="text-xs line-clamp-2 font-sans font-normal leading-snug">
                  {{ post.caption }}
                </p>
                <span class="text-[10px] uppercase tracking-widest text-[#DDEFE6] mt-2 font-semibold">
                  View Post →
                </span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `
})
export class InstagramSectionComponent {
  @Input() posts: InstagramPost[] = [];
  @Input() store: Store | null = null;

  readonly businessConfig = BUSINESS_CONFIG;
}
