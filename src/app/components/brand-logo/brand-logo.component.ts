import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (variant === 'footer' || variant === 'light') {
      <div class="inline-flex items-baseline gap-1.5 select-none" [ngClass]="customClass">
        <span class="font-serif font-medium text-2xl sm:text-3xl text-[#FAF8F3] tracking-tight">
          Pahnave Wale
        </span>
        <span class="font-serif italic font-normal text-2xl sm:text-3xl text-[#D4B270] tracking-tight">
          Bhaiya
        </span>
      </div>
    } @else if (variant === 'large') {
      <div class="inline-flex items-baseline gap-2 select-none" [ngClass]="customClass">
        <span class="font-serif font-medium text-3xl sm:text-4xl text-[#155E5B] tracking-tight">
          Pahnave Wale
        </span>
        <span class="font-serif italic font-normal text-3xl sm:text-4xl text-[#B8875A] tracking-tight">
          Bhaiya
        </span>
      </div>
    } @else {
      <!-- Default / Nav variant -->
      <div class="inline-flex items-baseline gap-1.5 select-none" [ngClass]="customClass">
        <span class="font-serif font-medium text-xl sm:text-2xl md:text-[25px] text-[#155E5B] tracking-tight leading-none group-hover:text-[#0E4543] transition-colors duration-200">
          Pahnave Wale
        </span>
        <span class="font-serif italic font-normal text-xl sm:text-2xl md:text-[25px] text-[#B8875A] tracking-tight leading-none group-hover:text-[#96673D] transition-colors duration-200">
          Bhaiya
        </span>
      </div>
    }
  `
})
export class BrandLogoComponent {
  @Input() customClass = '';
  @Input() variant: 'nav' | 'seal' | 'footer' | 'large' | 'light' = 'nav';
}
