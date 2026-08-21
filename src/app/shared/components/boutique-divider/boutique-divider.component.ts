import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boutique-divider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-center gap-4 py-8 select-none opacity-80" [ngClass]="customClass">
      <div class="h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-[#B8875A]"></div>
      <div class="flex items-center gap-1.5 text-[#B8875A]">
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
      </div>
      <div class="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-[#B8875A]"></div>
    </div>
  `
})
export class BoutiqueDividerComponent {
  @Input() customClass = '';
}
