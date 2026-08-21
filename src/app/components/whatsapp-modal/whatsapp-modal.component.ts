import { Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Store } from '../../models/catalog.models';
import { BUSINESS_CONFIG, getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGES } from '../../config/business';

@Component({
  selector: 'app-whatsapp-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  template: `
    @if (isOpen) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#092B2A]/70 backdrop-blur-sm animate-fade-in"
        (click)="onClose()"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-modal-title"
          class="relative w-full max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto bg-[#FAF8F3] rounded-[32px] border-2 border-[#AFCFC0] shadow-2xl"
          (click)="$event.stopPropagation()"
        >
          <!-- Header -->
          <div class="bg-[#155E5B] p-5 sm:p-6 text-white flex items-center justify-between border-b border-[#0E4543]">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-[#0E4543] border border-[#B89452]/60 flex items-center justify-center text-white font-serif font-bold text-xs tracking-wider shadow-xs">
                PWB
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <h3 id="whatsapp-modal-title" class="font-semibold text-sm sm:text-base text-[#FAF8F3]">{{ store?.name || 'Pahnave Wale Bhaiya' }}</h3>
                  <app-icon name="sparkles" [size]="13" customClass="text-[#D4B270]"></app-icon>
                </div>
                <p class="text-xs text-[#AFCFC0]">{{ store?.whatsappDisplayNumber || whatsappDisplayNumber }} • Ajmer Store</p>
              </div>
            </div>

            <button
              (click)="onClose()"
              aria-label="Close dialog"
              class="w-11 h-11 rounded-full bg-[#0E4543] text-white hover:bg-[#092B2A] flex items-center justify-center transition-colors cursor-pointer"
            >
              <app-icon name="x" [size]="16"></app-icon>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6 sm:p-7">
            <p class="text-sm text-[#71847B] font-normal leading-relaxed mb-4">
              Connect directly with our in-store team at <strong class="text-[#155E5B] font-semibold">{{ store?.whatsappDisplayNumber || whatsappDisplayNumber }}</strong>. Choose a quick inquiry or compose your own:
            </p>

            <!-- Preset Buttons -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              @for (preset of presetMessages; track preset.label) {
                <button
                  type="button"
                  (click)="message = preset.message"
                  class="text-xs font-medium px-3 py-1.5 rounded-full bg-[#DDEFE6] text-[#0E4543] border border-[#AFCFC0] hover:bg-[#AFCFC0] transition-colors cursor-pointer text-left"
                >
                  + {{ preset.label }}
                </button>
              }
            </div>

            <!-- Message Form -->
            <form (submit)="handleSubmit($event)" class="space-y-4">
              <div>
                <label for="whatsapp-modal-message" class="block text-xs font-bold uppercase tracking-wider text-[#155E5B] mb-2">
                  Your WhatsApp Message
                </label>
                <textarea
                  id="whatsapp-modal-message"
                  [(ngModel)]="message"
                  name="message"
                  rows="4"
                  class="w-full text-sm p-3.5 rounded-2xl bg-white border border-[#D5D8D3] focus:outline-hidden focus:border-[#155E5B] text-[#26332F] leading-relaxed shadow-inner"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <!-- Store Information Pill -->
              <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-[#71847B] bg-[#F3EEE4] p-3 rounded-xl border border-[#D5D8D3]">
                <span class="flex items-center gap-1.5">
                  <app-icon name="store" [size]="13" customClass="text-[#B8875A]"></app-icon>
                  <span>Mayo Link Road, Ajmer</span>
                </span>
                <span class="flex items-center gap-1.5">
                  <app-icon name="clock" [size]="13" customClass="text-[#155E5B]"></app-icon>
                  <span>11 AM – 9 PM</span>
                </span>
              </div>

              <div class="pt-2">
                <button
                  type="submit"
                  id="whatsapp-modal-submit"
                  class="w-full btn-pehnava-primary inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide cursor-pointer shadow-md active:scale-98"
                >
                  <app-icon name="message-circle" [size]="17" customClass="text-[#25D366]"></app-icon>
                  <span>Open WhatsApp ({{ store?.whatsappDisplayNumber || whatsappDisplayNumber }})</span>
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
  @Input() initialMessage = WHATSAPP_MESSAGES.general;
  @Input() store: Store | null = null;
  @Output() close = new EventEmitter<void>();

  message = '';
  readonly whatsappDisplayNumber = WHATSAPP_DISPLAY_NUMBER;

  readonly presetMessages = [
    { label: 'General Collection Enquiry', message: WHATSAPP_MESSAGES.general },
    { label: 'Store Visit Details', message: WHATSAPP_MESSAGES.storeVisit },
    { label: 'Check Availability', message: WHATSAPP_MESSAGES.availability },
    { label: 'Share Experience', message: WHATSAPP_MESSAGES.shareExperience },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialMessage'] || changes['isOpen']) {
      this.message = this.initialMessage || WHATSAPP_MESSAGES.general;
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
    const url = getWhatsAppUrl(this.message.trim() || this.initialMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    this.onClose();
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
