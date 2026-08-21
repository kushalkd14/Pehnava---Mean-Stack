import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { WhyPehnavaItem } from '../../models/catalog.models';

@Component({
  selector: 'app-why-pehnava',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="why-pehnava" class="py-20 lg:py-28 bg-[#F3EEE4] border-t border-[#D5D8D3] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16" data-reveal>
          <div class="inline-flex max-w-full items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#155E5B] text-[11px] font-bold uppercase tracking-[0.1em] leading-snug mb-4 border border-[#B89452]/40 shadow-xs">
            <app-icon name="sparkles" [size]="13" customClass="text-[#B89452]"></app-icon>
            <span>The Pehnava Experience</span>
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#155E5B] tracking-tight mb-4">
            Why Shop with Pehnava
          </h2>

          <p class="text-sm sm:text-base text-[#71847B] font-sans font-normal max-w-2xl mx-auto leading-relaxed">
            More than just clothing, we offer a warm in-person experience rooted in quality, thoughtful curation, and friendly personal attention.
          </p>
        </div>

        <!-- 4 Feature Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          @for (item of items; track item.id; let index = $index) {
            <div
              class="p-7 rounded-3xl bg-[#FAF8F3] border border-[#D5D8D3] shadow-xs hover:shadow-xl hover:border-[#155E5B] transition-all duration-300 flex flex-col justify-between group"
              data-reveal
              [attr.data-reveal-delay]="index * 100"
            >
              <div>
                <!-- Icon Container -->
                <div class="w-13 h-13 rounded-2xl bg-[#DDEFE6] flex items-center justify-center mb-6 border border-[#AFCFC0] group-hover:scale-105 group-hover:bg-[#AFCFC0]/60 transition-all duration-200 shadow-2xs">
                  @switch (index % 4) {
                    @case (0) {
                      <app-icon name="sparkles" [size]="22" customClass="text-[#B89452]"></app-icon>
                    }
                    @case (1) {
                      <app-icon name="layers" [size]="22" customClass="text-[#155E5B]"></app-icon>
                    }
                    @case (2) {
                      <app-icon name="store" [size]="22" customClass="text-[#B8875A]"></app-icon>
                    }
                    @case (3) {
                      <app-icon name="message-square" [size]="22" customClass="text-[#C47B5A]"></app-icon>
                    }
                  }
                </div>

                <h3 class="text-xl font-serif font-semibold text-[#155E5B] mb-3 leading-snug">
                  {{ item.title }}
                </h3>

                <p class="text-sm text-[#71847B] leading-relaxed font-sans font-normal">
                  {{ item.description }}
                </p>
              </div>

              <!-- Bottom Decorative Gold Line Indicator -->
              <div class="pt-6 mt-6 border-t border-[#D5D8D3]/70 flex items-center justify-between">
                <span class="text-[11px] font-bold uppercase tracking-widest text-[#B8875A]">
                  0{{ index + 1 }}
                </span>
                <span class="w-6 h-[1.5px] bg-[#B89452]/40 group-hover:w-12 group-hover:bg-[#155E5B] transition-all duration-300"></span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class WhyPehnavaComponent {
  @Input() items: WhyPehnavaItem[] = [];
}
