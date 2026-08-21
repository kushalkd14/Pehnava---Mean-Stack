import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { INSTAGRAM_CONFIG } from '../../config/instagram.config';

@Component({
  selector: 'app-instagram-feed',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="instagram-preview" class="py-16 sm:py-20 bg-[#F3EEE4] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-1 justify-center sm:justify-start">
              <app-icon name="instagram" [size]="18" customClass="text-[#C98F91]"></app-icon>
              <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">
                Instagram Preview
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-[#155E5B] text-center sm:text-left font-sans">
              Follow {{ config.handle }} on Instagram
            </h2>
            <p class="text-xs sm:text-sm text-[#71847B] mt-1 text-center sm:text-left">
              {{ config.bio }}
            </p>
          </div>

          <a
            [href]="config.profileUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#155E5B] hover:bg-[#0E4543] text-[#FAF8F3] text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow cursor-pointer shrink-0"
          >
            <app-icon name="instagram" [size]="16" customClass="text-[#C98F91]"></app-icon>
            <span>Follow {{ config.handle }}</span>
          </a>
        </div>

        <!-- Grid of Latest Posts -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          @for (post of config.posts; track post.id) {
            <a
              [href]="post.postUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xs border border-[#D5D8D3] block"
            >
              <img
                [src]="post.image"
                [alt]="post.caption"
                loading="lazy"
                class="w-full h-full object-cover img-luxury-hover"
              />
              <!-- Hover Overlay with Instagram Icon & Likes -->
              <div class="absolute inset-0 bg-[#092B2A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-3 text-center">
                <app-icon name="instagram" [size]="24" customClass="text-white mb-1"></app-icon>
                <span class="text-xs font-semibold line-clamp-2">{{ post.caption }}</span>
                @if (post.likesCount) {
                  <span class="text-[10px] text-[#AFCFC0] mt-1">❤️ {{ post.likesCount }} likes</span>
                }
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `
})
export class InstagramFeedComponent {
  readonly config = INSTAGRAM_CONFIG;
}
