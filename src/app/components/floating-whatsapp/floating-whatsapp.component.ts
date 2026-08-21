import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      <!-- Tooltip / Callout bubble -->
      <div class="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#155E5B] text-[#FAF8F3] text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-1 group-hover:translate-y-0">
        <span class="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
        <span>Chat on WhatsApp with Pehnava</span>
      </div>

      <!-- Floating Action Button -->
      <button
        (click)="handleClick()"
        aria-label="Enquire on WhatsApp with Pehnava RJ01"
        class="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden border-2 border-white"
      >
        <!-- Pulse ring animation -->
        <span class="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        <app-icon name="whatsapp" [size]="30" customClass="text-white relative z-10 drop-shadow-md"></app-icon>
      </button>
    </div>
  `
})
export class FloatingWhatsAppComponent {
  @Output() openWhatsAppModal = new EventEmitter<void>();
  private readonly whatsAppService = inject(WhatsAppService);

  handleClick(): void {
    this.openWhatsAppModal.emit();
    this.whatsAppService.openWhatsApp();
  }
}
