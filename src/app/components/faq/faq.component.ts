import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="faq-section" class="py-16 sm:py-20 bg-[#FAF8F3] relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-xl mx-auto mb-12">
          <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">
            Questions & Information
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold text-[#155E5B] mt-2 mb-3 font-sans">
            Frequently Asked Questions
          </h2>
          <p class="text-xs sm:text-sm text-[#71847B]">
            Everything you need to know about visiting Pehnava RJ01, custom bridal appointments, and WhatsApp ordering.
          </p>
        </div>

        <div class="space-y-4">
          @for (item of faqs; track item.id; let idx = $index) {
            <div class="bg-white rounded-2xl border border-[#D5D8D3] overflow-hidden transition-all duration-200">
              <button
                (click)="toggle(item.id)"
                [attr.aria-expanded]="openId() === item.id"
                [attr.aria-controls]="'faq-answer-' + item.id"
                [id]="'faq-question-' + item.id"
                class="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F0F7F3] transition-colors"
              >
                <span class="text-sm sm:text-base font-semibold text-[#155E5B] font-sans">
                  {{ item.question }}
                </span>
                <span class="w-8 h-8 rounded-full bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center shrink-0 transition-transform duration-300"
                      [ngClass]="{ 'rotate-180 bg-[#155E5B] text-white': openId() === item.id }">
                  <app-icon name="chevron-down" [size]="16"></app-icon>
                </span>
              </button>

              @if (openId() === item.id) {
                <div
                  [id]="'faq-answer-' + item.id"
                  [attr.aria-labelledby]="'faq-question-' + item.id"
                  class="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#71847B] leading-relaxed border-t border-[#F0F7F3] pt-4 animate-fade-in"
                >
                  <p>{{ item.answer }}</p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class FaqComponent {
  openId = signal<string>('faq-1');

  readonly faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'Where is Pehnava RJ01 boutique located?',
      answer: 'Our boutique studio is located opposite Holy Family Hospital, Mayo Link Road, near 9 No. Petrol Pump, Nagra, Ajmer, Rajasthan 305007.'
    },
    {
      id: 'faq-2',
      question: 'What clothing collections do you offer?',
      answer: 'We offer exclusive Bridal Lehengas, Designer Sarees, Reception Gowns, Sangeet Outfits, Designer Anarkalis, Shararas, and Festive Ethnic Wear.'
    },
    {
      id: 'faq-3',
      question: 'How can I enquire or check outfit availability via WhatsApp?',
      answer: 'Simply click any "Enquire on WhatsApp" button on our website. It will automatically populate the collection name and send a direct message to our WhatsApp team (+91 80057 85709).'
    },
    {
      id: 'faq-4',
      question: 'Do you offer custom fitting and alterations?',
      answer: 'Yes! Our physical store in Ajmer offers personalized fitting, blouse custom alterations, and bridal consultation to ensure your outfit fits perfectly.'
    },
    {
      id: 'faq-5',
      question: 'What are your store operating hours?',
      answer: 'We are open all 7 days a week from 11:00 AM to 9:00 PM.'
    }
  ];

  toggle(id: string): void {
    this.openId.set(this.openId() === id ? '' : id);
  }
}
