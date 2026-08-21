import { Injectable } from '@angular/core';

export const WHATSAPP_NUMBER = '918005785709';
export const WHATSAPP_DISPLAY = '+91 80057 85709';

@Injectable({ providedIn: 'root' })
export class WhatsAppService {
  readonly phoneNumber = WHATSAPP_NUMBER;
  readonly displayPhone = WHATSAPP_DISPLAY;

  getEnquiryUrl(collectionOrItemName?: string): string {
    const message = collectionOrItemName
      ? `Hello Pehnava, I'm interested in the ${collectionOrItemName}.`
      : `Hello Pehnava, I would like to enquire about your boutique collection and store visit.`;
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
  }

  openWhatsApp(collectionOrItemName?: string): void {
    const url = this.getEnquiryUrl(collectionOrItemName);
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
