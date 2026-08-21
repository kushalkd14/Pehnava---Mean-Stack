import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { BUSINESS_CONFIG, getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGES } from '../../config/business';
import { Store } from '../../models/catalog.models';

@Component({
  selector: 'app-whatsapp-section',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  template: `
    <section id="whatsapp-concierge" class="py-20 lg:py-28 bg-[#DDEFE6] border-y border-[#AFCFC0] relative overflow-hidden">
      <!-- Background Soft Glows -->
      <div class="absolute top-0 right-10 w-96 h-96 bg-[#FAF8F3] rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div class="absolute bottom-0 left-10 w-80 h-80 bg-[#AFCFC0] rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <!-- Left Column: Heading & Information -->
          <div class="lg:col-span-6 flex flex-col items-start" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#155E5B] text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-[#AFCFC0] shadow-xs">
              <app-icon name="message-circle" [size]="14" customClass="text-[#25D366]"></app-icon>
              <span>Official WhatsApp: {{ store?.whatsappDisplayNumber || whatsappDisplayNumber }}</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#155E5B] tracking-tight mb-5 leading-tight">
              Connect with us directly on WhatsApp.
            </h2>

            <p class="text-base text-[#26332F]/80 leading-relaxed font-sans font-normal mb-6 max-w-xl">
              Have a question about a specific outfit, need styling suggestions, or want to check what is in stock at our Ajmer boutique? Chat directly with our in-store team at <strong class="font-semibold text-[#155E5B]">{{ store?.whatsappDisplayNumber || whatsappDisplayNumber }}</strong>.
            </p>

            <!-- Direct WhatsApp Callout Button -->
            <div class="mb-8">
              <a
                [href]="getGeneralWhatsAppUrl()"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Pahnave Wale Bhaiya on WhatsApp"
                class="btn-pehnava-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide cursor-pointer shadow-md active:scale-98"
              >
                <app-icon name="message-circle" [size]="18" customClass="text-[#25D366]"></app-icon>
                <span>Chat on WhatsApp ({{ store?.whatsappDisplayNumber || whatsappDisplayNumber }})</span>
              </a>
            </div>

            <!-- Quick Prompts -->
            <div class="w-full mb-8">
              <span class="text-xs uppercase tracking-wider font-bold text-[#155E5B] block mb-3">
                Quick Inquiries (Click to start):
              </span>
              <div class="flex flex-wrap gap-2">
                @for (prompt of quickPrompts; track prompt.label) {
                  <button
                    (click)="handlePromptClick(prompt.message)"
                    [attr.aria-label]="'Send enquiry: ' + prompt.label"
                    class="text-xs font-medium px-3.5 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#155E5B] hover:text-[#FAF8F3] text-[#26332F] border border-[#AFCFC0] transition-all duration-200 cursor-pointer text-left shadow-2xs"
                  >
                    + {{ prompt.label }}
                  </button>
                }
              </div>
            </div>

            <!-- In-Store Assurances -->
            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-[#AFCFC0] w-full max-w-md">
              <div class="flex items-center gap-2.5 text-xs text-[#26332F] font-medium">
                <app-icon name="clock" [size]="16" customClass="text-[#B8875A]"></app-icon>
                <span>Active {{ store?.storeTimings || '11 AM – 9 PM' }}</span>
              </div>
              <div class="flex items-center gap-2.5 text-xs text-[#26332F] font-medium">
                <app-icon name="shield-check" [size]="16" customClass="text-[#155E5B]"></app-icon>
                <span>Direct In-Store Assistance</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Chat Preview Card -->
          <div class="lg:col-span-6" data-reveal data-reveal-delay="200">
            <div class="max-w-md mx-auto bg-[#FAF8F3] rounded-[32px] overflow-hidden border-2 border-[#AFCFC0] shadow-xl">
              <!-- Chat Header with Deep Teal & Gold Tone -->
              <div class="bg-[#155E5B] p-4.5 px-6 text-white flex items-center justify-between border-b border-[#0E4543]">
                <div class="flex items-center gap-3">
                  <div class="relative">
                    <div class="w-10 h-10 rounded-full bg-[#0E4543] border border-[#B89452]/60 flex items-center justify-center font-serif text-white font-bold text-xs shadow-xs tracking-wider">
                      PWB
                    </div>
                    <span class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#155E5B]"></span>
                  </div>
                  <div>
                    <div class="flex items-center gap-1.5">
                      <h3 class="font-semibold text-sm text-[#FAF8F3]">{{ store?.name || 'Pahnave Wale Bhaiya' }}</h3>
                      <app-icon name="sparkles" [size]="12" customClass="text-[#D4B270]"></app-icon>
                    </div>
                    <p class="text-[11px] text-[#AFCFC0]">{{ store?.whatsappDisplayNumber || whatsappDisplayNumber }} • Online</p>
                  </div>
                </div>
                <span class="text-[11px] bg-[#0E4543] px-2.5 py-1 rounded-full text-[#FAF8F3] border border-[#AFCFC0]/30 font-medium">
                  {{ store?.storeTimings || '11:00 AM – 9:00 PM' }}
                </span>
              </div>

              <!-- Chat Body Simulation -->
              <div class="p-5 sm:p-6 space-y-4 bg-[#F3EEE4]/60 min-h-[260px] flex flex-col justify-end">
                <!-- Store Message 1 -->
                <div class="flex flex-col items-start max-w-[85%]">
                  <div class="bg-white p-3.5 rounded-2xl rounded-tl-xs shadow-xs border border-[#D5D8D3] text-sm text-[#26332F] leading-relaxed">
                    Namaste! Welcome to <strong class="font-semibold text-[#155E5B]">{{ store?.name || 'Pahnave Wale Bhaiya' }}</strong>. How may we assist your wardrobe styling or visit today?
                  </div>
                  <span class="text-[10px] text-[#71847B] mt-1 ml-1">11:02 AM</span>
                </div>

                <!-- Customer Message 1 -->
                <div class="flex flex-col items-end self-end max-w-[85%]">
                  <div class="bg-[#DDEFE6] p-3.5 rounded-2xl rounded-tr-xs shadow-xs border border-[#AFCFC0] text-sm text-[#0E4543] leading-relaxed">
                    Hi! I saw the festive and everyday edits on your website. Do you have sizes available to try on at your Mayo Link Road store?
                  </div>
                  <div class="flex items-center gap-1 mt-1 mr-1">
                    <span class="text-[10px] text-[#71847B]">11:03 AM</span>
                    <app-icon name="check-check" [size]="13" customClass="text-[#155E5B]"></app-icon>
                  </div>
                </div>

                <!-- Store Message 2 -->
                <div class="flex flex-col items-start max-w-[85%]">
                  <div class="bg-white p-3.5 rounded-2xl rounded-tl-xs shadow-xs border border-[#D5D8D3] text-sm text-[#26332F] leading-relaxed">
                    Yes, absolutely! We have fresh arrivals ready for trial in our boutique. Send us the look name and we'll reserve it for your visit.
                  </div>
                  <span class="text-[10px] text-[#71847B] mt-1 ml-1">11:04 AM</span>
                </div>
              </div>

              <!-- Chat Input Bar -->
              <form (submit)="handleSendCustomMessage($event)" class="p-3 bg-white border-t border-[#D5D8D3] flex items-center gap-2">
                <input
                  type="text"
                  [(ngModel)]="customMessage"
                  name="customMessage"
                  [placeholder]="'Type a message to ' + (store?.whatsappDisplayNumber || whatsappDisplayNumber) + '...'"
                  class="flex-1 text-xs px-4 py-3 rounded-full bg-[#FAF8F3] border border-[#D5D8D3] focus:outline-hidden focus:border-[#155E5B] text-[#26332F]"
                />
                <button
                  type="submit"
                  [attr.aria-label]="'Send WhatsApp message to ' + (store?.whatsappDisplayNumber || whatsappDisplayNumber)"
                  class="w-10 h-10 rounded-full bg-[#155E5B] hover:bg-[#0E4543] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs cursor-pointer"
                >
                  <app-icon name="send" [size]="15" customClass="ml-0.5 text-[#D4B270]"></app-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class WhatsAppSectionComponent {
  @Input() store: Store | null = null;
  @Output() openWhatsApp = new EventEmitter<void>();

  customMessage = '';
  readonly whatsappDisplayNumber = WHATSAPP_DISPLAY_NUMBER;

  readonly quickPrompts = [
    {
      label: 'Enquire About Collections',
      message: WHATSAPP_MESSAGES.general,
    },
    {
      label: 'Store Visit Details',
      message: WHATSAPP_MESSAGES.storeVisit,
    },
    {
      label: 'Check Product Availability',
      message: WHATSAPP_MESSAGES.availability,
    },
    {
      label: 'Share Store Experience',
      message: WHATSAPP_MESSAGES.shareExperience,
    },
  ];

  handleSendCustomMessage(e: Event): void {
    e.preventDefault();
    const messageToSend = this.customMessage.trim() || WHATSAPP_MESSAGES.general;
    window.open(getWhatsAppUrl(messageToSend), '_blank', 'noopener,noreferrer');
  }

  handlePromptClick(message: string): void {
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  }

  getGeneralWhatsAppUrl(): string {
    return getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  }
}
