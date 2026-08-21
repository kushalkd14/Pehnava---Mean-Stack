import { Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Look } from '../../models/catalog.models';

@Component({
  selector: 'app-look-modal',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    @if (look) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#092B2A]/70 backdrop-blur-sm animate-fade-in"
        (click)="onClose()"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="look-modal-title"
          class="relative w-full max-w-3xl bg-[#FAF8F3] rounded-[32px] overflow-hidden border-2 border-[#AFCFC0] shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
          (click)="$event.stopPropagation()"
        >
          <!-- Close Button -->
          <button
            (click)="onClose()"
            aria-label="Close look dialog"
            class="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-[#FAF8F3]/90 text-[#155E5B] hover:bg-[#155E5B] hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          >
            <app-icon name="x" [size]="18"></app-icon>
          </button>

          <!-- Left Side: Product Image -->
          <div class="md:w-1/2 relative bg-[#F0F7F3] min-h-[300px] md:min-h-full">
            <img
              [src]="look.image"
              [alt]="look.title"
              width="750"
              height="900"
              class="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div class="absolute top-4 left-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F3]/95 text-[#155E5B] text-xs font-bold uppercase tracking-wider shadow-xs border border-[#AFCFC0]">
                <app-icon name="sparkles" [size]="12" customClass="text-[#B89452]"></app-icon>
                {{ look.category }}
              </span>
            </div>
          </div>

          <!-- Right Side: Product Details & WhatsApp CTA -->
          <div class="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F3]">
            <div>
              <div class="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8875A] font-bold mb-2">
                <span>Boutique Look Details</span>
              </div>

              <h3 id="look-modal-title" class="text-2xl sm:text-3xl font-serif font-normal text-[#155E5B] mb-2">
                {{ look.title }}
              </h3>

              @if (look.fabricNote) {
                <span class="text-xs text-[#71847B] font-medium block mb-4">
                  Fabric: {{ look.fabricNote }}
                </span>
              }

              <p class="text-sm text-[#26332F]/80 leading-relaxed font-sans font-normal mb-6">
                {{ look.description }}
              </p>

              <!-- Look Details Checklist -->
              <div class="space-y-2 mb-6">
                <span class="text-[11px] uppercase tracking-wider font-bold text-[#155E5B] block mb-2">
                  Highlights & Features:
                </span>
                @for (detail of look.details; track detail) {
                  <div class="flex items-center gap-2 text-sm text-[#26332F]">
                    <app-icon name="check" [size]="14" customClass="text-[#B89452] shrink-0"></app-icon>
                    <span>{{ detail }}</span>
                  </div>
                }
              </div>

              <!-- Physical Store Assurance -->
              <div class="p-3.5 rounded-2xl bg-[#DDEFE6] border border-[#AFCFC0] text-sm text-[#155E5B] flex items-center gap-2 mb-6">
                <app-icon name="store" [size]="15" customClass="text-[#B8875A] shrink-0"></app-icon>
                <span>Available to try on in our Ajmer store</span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-2.5 pt-4 border-t border-[#D5D8D3]">
              <button
                (click)="onEnquireClick()"
                class="w-full btn-pehnava-primary inline-flex items-center justify-center gap-2.5 py-3.5 rounded-full text-xs font-semibold tracking-wide cursor-pointer shadow-sm active:scale-98"
              >
                <app-icon name="message-circle" [size]="16" customClass="text-[#25D366]"></app-icon>
                <span>Enquire About This Look on WhatsApp</span>
              </button>

              <button
                (click)="onClose()"
                class="w-full py-2 text-center text-xs text-[#71847B] hover:text-[#155E5B] transition-colors cursor-pointer"
              >
                Close and continue browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `
})
export class LookModalComponent implements OnChanges, OnDestroy {
  @Input() look: Look | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() enquire = new EventEmitter<Look>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['look'] && typeof document !== 'undefined') {
      document.body.style.overflow = this.look ? 'hidden' : '';
    }
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.look) {
      this.onClose();
    }
  }

  onClose(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
    this.close.emit();
  }

  onEnquireClick(): void {
    if (this.look) {
      this.enquire.emit(this.look);
    }
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
