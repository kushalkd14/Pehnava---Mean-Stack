import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';

interface HighlightItem {
    iconName: string;
    iconColor: string;
    bgColor: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-highlights-strip',
    standalone: true,
    imports: [CommonModule, IconComponent],
    template: `
    <section class="py-4 bg-[#FAF8F3] border-y border-[#AFCFC0]/60 relative z-20 overflow-hidden">
      <div class="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <div class="flex items-center justify-between gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-1">
          @for (item of highlights; track item.title) {
            <div
              class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#FAF6ED] border border-[#D5D8D3] hover:border-[#B8875A] transition-all duration-300 shrink-0 cursor-default group hover:-translate-y-0.5 shadow-2xs"
            >
              <div
                [class]="item.bgColor"
                class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-[#AFCFC0]/40 group-hover:scale-105 transition-transform duration-300 shadow-xs"
              >
                <app-icon [name]="item.iconName" [size]="17" [customClass]="item.iconColor"></app-icon>
              </div>
              <div>
                <span class="text-xs font-serif font-bold text-[#155E5B] block leading-tight">
                  {{ item.title }}
                </span>
                <span class="text-[10px] text-[#71847B] font-sans block leading-tight mt-0.5">
                  {{ item.description }}
                </span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class HighlightsStripComponent {
    highlights: HighlightItem[] = [
        {
            iconName: 'sparkles',
            iconColor: 'text-[#B8875A]',
            bgColor: 'bg-[#DDEFE6]',
            title: 'New Arrivals',
            description: 'Fresh Weekly Drops'
        },
        {
            iconName: 'tag',
            iconColor: 'text-[#B89452]',
            bgColor: 'bg-[#F3EEE4]',
            title: 'Festive Offers',
            description: 'Exclusive Boutique Pricing'
        },
        {
            iconName: 'shirt',
            iconColor: 'text-[#155E5B]',
            bgColor: 'bg-[#DDEFE6]',
            title: '200+ Different Premium Styles',
            description: 'Curated Ethnic Couture'
        },
        {
            iconName: 'refresh-cw',
            iconColor: 'text-[#B8875A]',
            bgColor: 'bg-[#F3EEE4]',
            title: 'New Stock Every Week',
            description: 'In-Store & WhatsApp Catalog'
        },
        {
            iconName: 'map-pin',
            iconColor: 'text-[#155E5B]',
            bgColor: 'bg-[#DDEFE6]',
            title: 'Ajmer Boutique Studio',
            description: 'Mayo Link Road Physical Store'
        },
    ];
}
