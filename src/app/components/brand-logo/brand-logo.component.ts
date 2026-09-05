import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-brand-logo',
    standalone: true,
    imports: [CommonModule],
    template: `
    @if (variant === 'footer' || variant === 'light') {
      <div class="inline-flex items-center gap-2.5 select-none" [ngClass]="customClass">
        <div class="w-8 h-8 rounded-full bg-[#FAF8F3] p-0.5 shadow-sm flex items-center justify-center shrink-0">
          <img src="pehnava-logo.webp" alt="Pehnava Logo" class="w-full h-full object-contain rounded-full" />
        </div>
        <div class="inline-flex items-baseline gap-1">
          <span class="font-bold text-[#FAF8F3] text-2xl sm:text-3xl tracking-tight">
            PEHNAVA
          </span>
        
        </div>
      </div>
    } @else if (variant === 'large') {
      <div class="inline-flex items-center gap-3 select-none" [ngClass]="customClass">
        <div class="w-12 h-12 rounded-full bg-[#155E5B] p-0.5 shadow-md flex items-center justify-center shrink-0">
          <img src="pehnava-logo.webp" alt="Pehnava Logo" class="w-full h-full object-contain rounded-full" />
        </div>
        <div class="inline-flex items-baseline gap-1.5">
          <span class="font-bold text-[#155E5B] text-3xl sm:text-4xl tracking-tight">
            PEHNAVA
          </span>
        </div>
      </div>
    } @else {
      <!-- Default / Nav variant -->
      <div class="inline-flex items-center gap-2.5 select-none" [ngClass]="customClass">
        <div class="w-9 h-9 rounded-full bg-[#155E5B] p-0.5 shadow-sm flex items-center justify-center shrink-0">
          <img src="pehnava-logo.webp" alt="Pehnava Logo" class="w-full h-full object-contain rounded-full" />
        </div>
        <div class="inline-flex items-baseline gap-1">
          <span class="font-bold text-[#155E5B] text-xl sm:text-2xl md:text-[25px] tracking-tight leading-none group-hover:text-[#0E4543] transition-colors duration-200">
            PEHNAVA
          </span>
        </div>
      </div>
    }
  `
})
export class BrandLogoComponent {
    @Input() customClass = '';
    @Input() variant: 'nav' | 'seal' | 'footer' | 'large' | 'light' = 'nav';
}
