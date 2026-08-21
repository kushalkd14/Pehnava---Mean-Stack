import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../config/business';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <aside
      aria-label="WhatsApp quick chat"
      class="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 transition-all duration-300"
      [ngClass]="
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      "
    >
      <a
        id="floating-whatsapp-btn"
        [href]="getGeneralWhatsAppUrl()"
        target="_blank"
        rel="noopener noreferrer"
        (click)="handleClick($event)"
        aria-label="Chat with Pahnave Wale Bhaiya on WhatsApp"
        class="group flex items-center gap-2.5 bg-[#155E5B] hover:bg-[#0E4543] text-white px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-[#FAF8F3] relative cursor-pointer"
      >
        <div class="relative flex items-center justify-center">
          <app-icon name="message-circle" [size]="24" customClass="text-[#25D366] group-hover:scale-110 transition-transform shrink-0"></app-icon>
          <span class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#B89452] border border-[#FAF8F3]"></span>
        </div>
        <span class="hidden sm:inline font-sans text-xs font-semibold tracking-wide text-[#FAF8F3] whitespace-nowrap pr-1">
          Chat with us
        </span>
      </a>
    </aside>
  `
})
export class FloatingWhatsAppComponent {
  @Output() openWhatsApp = new EventEmitter<void>();

  visible = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible = window.scrollY > 120;
  }

  handleClick(event: MouseEvent): void {
    event.preventDefault();
    this.openWhatsApp.emit();
  }

  getGeneralWhatsAppUrl(): string {
    return getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  }
}
