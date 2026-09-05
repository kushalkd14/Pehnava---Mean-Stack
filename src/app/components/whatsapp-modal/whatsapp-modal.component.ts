import { Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Store } from '../../models/catalog.models';
import { BUSINESS_CONFIG, WHATSAPP_DISPLAY_NUMBER } from '../../config/business';
import { WHATSAPP_NUMBER } from '../../services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  template: `
    @if (isOpen) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-[#092B2A]/70 backdrop-blur-sm animate-fade-in"
        (click)="onClose()"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-modal-title"
          class="relative w-full max-w-md max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-[#FAF8F3] rounded-3xl sm:rounded-[28px] border-2 border-[#AFCFC0] shadow-2xl"
          (click)="$event.stopPropagation()"
        >
          <!-- Header -->
          <div class="bg-[#155E5B] p-4 sm:p-5 text-white flex items-center justify-between border-b border-[#0E4543]">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-full bg-[#0E4543] border border-[#B89452]/60 flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-xs overflow-hidden shrink-0">
                <img src="pehnava-logo.png" alt="Pehnava" class="w-full h-full object-contain" />
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <h3 id="whatsapp-modal-title" class="font-bold text-xs sm:text-sm text-[#FAF8F3]">Pehnava Boutique</h3>
                  <app-icon name="sparkles" [size]="12" customClass="text-[#D4B270]"></app-icon>
                </div>
                <p class="text-[11px] text-[#AFCFC0]">{{ whatsappDisplayNumber }} • Ajmer Store</p>
              </div>
            </div>

            <button
              (click)="onClose()"
              aria-label="Close dialog"
              class="w-8 h-8 rounded-full bg-[#0E4543] text-white hover:bg-[#092B2A] flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <app-icon name="x" [size]="15"></app-icon>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-4 sm:p-5">
            <p class="text-xs text-[#71847B] font-normal leading-relaxed mb-3">
              Connect directly with our boutique styling team at <strong class="text-[#155E5B] font-semibold">{{ whatsappDisplayNumber }}</strong>.
            </p>

            <!-- Preset Buttons -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              @for (preset of presetMessages; track preset.label) {
                <button
                  type="button"
                  (click)="message = preset.message"
                  class="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#DDEFE6] text-[#0E4543] border border-[#AFCFC0] hover:bg-[#AFCFC0] transition-colors cursor-pointer text-left"
                >
                  + {{ preset.label }}
                </button>
              }
            </div>

            <!-- Message Form -->
            <form (submit)="handleSubmit($event)" class="space-y-3">
              <div>
                <label for="whatsapp-modal-message" class="block text-[11px] font-bold uppercase tracking-wider text-[#155E5B] mb-1.5">
                  Your WhatsApp Message
                </label>
                <textarea
                  id="whatsapp-modal-message"
                  [(ngModel)]="message"
                  name="message"
                  rows="2.5"
                  class="w-full text-xs p-3 rounded-xl bg-white border border-[#D5D8D3] focus:outline-hidden focus:border-[#155E5B] text-[#26332F] leading-relaxed shadow-inner"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <!-- Store Info -->
              <div class="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#71847B] bg-[#F3EEE4] p-2.5 rounded-xl border border-[#D5D8D3]">
                <span class="flex items-center gap-1.5">
                  <app-icon name="store" [size]="12" customClass="text-[#B8875A] shrink-0"></app-icon>
                  <span>Mayo Link Road, Ajmer</span>
                </span>
                <span class="flex items-center gap-1.5">
                  <app-icon name="clock" [size]="12" customClass="text-[#155E5B] shrink-0"></app-icon>
                  <span>Open 7 Days • 11 AM – 9 PM</span>
                </span>
              </div>

              <div class="pt-1">
                <button
                  type="submit"
                  id="whatsapp-modal-submit"
                  class="w-full btn-pehnava-primary inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold tracking-wide cursor-pointer shadow-md active:scale-98 text-center"
                >
                  <app-icon name="whatsapp" [size]="16" customClass="text-[#25D366] shrink-0"></app-icon>
                  <span>Open WhatsApp ({{ whatsappDisplayNumber }})</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    }
  `
})
export class WhatsAppModalComponent implements OnChanges, OnDestroy {
  @Input() isOpen = false;
  @Input() initialMessage = "Hello Pehnava, I would like to enquire about your boutique collection.";
  @Input() store: Store | null = null;
  @Output() close = new EventEmitter<void>();

  message = '';
  readonly whatsappDisplayNumber = WHATSAPP_DISPLAY_NUMBER;

  readonly presetMessages = [
    { label: 'Heavy Festive Suits', message: "Hello Pehnava, I'm interested in the Heavy Festive Suits collection." },
    { label: 'Gota Patti Shararas', message: "Hello Pehnava, I'm interested in your Gota Patti Shararas collection." },
    { label: 'Co-Ord Sets', message: "Hello Pehnava, I'm interested in Co-Ord Sets & Utility fits." },
    { label: 'Store Visit', message: "Hello Pehnava, I would like to schedule a store visit to try outfits." },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialMessage'] || changes['isOpen']) {
      this.message = this.initialMessage || "Hello Pehnava, I would like to enquire about your boutique collection.";
    }
    if (changes['isOpen'] && typeof document !== 'undefined') {
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    }
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isOpen) {
      this.onClose();
    }
  }

  onClose(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
    this.close.emit();
  }

  handleSubmit(e: Event): void {
    e.preventDefault();
    const encoded = encodeURIComponent(this.message.trim() || this.initialMessage);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    this.onClose();
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
