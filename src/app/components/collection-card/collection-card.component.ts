import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Collection } from '../../models/catalog.models';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-collection-card',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  template: `
    <div class="group bg-white rounded-2xl overflow-hidden border border-[#D5D8D3] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <!-- Image Container with Router Link (Sleek Compact Aspect Ratio) -->
      <a
        [routerLink]="['/collections', item.slug]"
        class="relative aspect-[4/3] overflow-hidden bg-[#F0F7F3] block cursor-pointer"
      >
        <img
          [src]="item.image"
          [alt]="item.name"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover img-luxury-hover"
        />

        @if (item.tag) {
          <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#155E5B]/90 backdrop-blur-xs text-[#FAF8F3] text-[10px] font-semibold tracking-wider uppercase shadow-xs">
            {{ item.tag }}
          </span>
        }

        <div class="absolute inset-0 bg-[#0E4543]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 text-[#155E5B] text-xs font-semibold shadow-md">
            View {{ item.name }} →
          </span>
        </div>
      </a>

      <!-- Compact Content Section -->
      <div class="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-3">
        <div>
          <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8875A] block mb-0.5">
            {{ item.subtitle }}
          </span>
          <a
            [routerLink]="['/collections', item.slug]"
            class="text-base sm:text-lg font-bold text-[#155E5B] font-sans hover:text-[#B8875A] transition-colors leading-snug block"
          >
            {{ item.name }}
          </a>
          <p class="text-xs text-[#71847B] font-normal leading-relaxed mt-1 line-clamp-2">
            {{ item.description }}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="pt-2 border-t border-[#F0F7F3] grid grid-cols-2 gap-2">
          <a
            [routerLink]="['/collections', item.slug]"
            class="btn-pehnava-secondary inline-flex items-center justify-center gap-1 py-2 rounded-full text-xs font-semibold tracking-wide cursor-pointer text-center"
          >
            <span>Explore</span>
          </a>

          <button
            (click)="onEnquire()"
            aria-label="Enquire about {{ item.name }} on WhatsApp"
            class="btn-pehnava-primary inline-flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold tracking-wide cursor-pointer active:scale-98"
          >
            <app-icon name="whatsapp" [size]="14" customClass="text-[#25D366]"></app-icon>
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  `
})
export class CollectionCardComponent {
  @Input({ required: true }) item!: Collection;
  @Output() enquire = new EventEmitter<Collection>();

  private readonly whatsAppService = inject(WhatsAppService);

  onEnquire(): void {
    this.enquire.emit(this.item);
    this.whatsAppService.openWhatsApp(this.item.name);
  }
}
