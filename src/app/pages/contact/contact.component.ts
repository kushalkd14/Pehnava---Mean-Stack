import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { MapSectionComponent } from '../../components/map-section/map-section.component';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { WhatsAppService } from '../../services/whatsapp.service';
import { BUSINESS_CONFIG } from '../../config/business';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, MapSectionComponent],
  template: `
    <main class="pt-24 pb-16 sm:pt-28 bg-[#FAF8F3]">
      <!-- Contact Hero Banner -->
      <section class="py-12 sm:py-16 bg-[#F3EEE4] border-b border-[#D5D8D3]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">
            Get In Touch
          </span>
          <h1 class="text-3xl sm:text-5xl font-bold text-[#155E5B] mt-2 mb-4 font-sans">
            Visit Store & WhatsApp Enquiry
          </h1>
          <p class="text-sm sm:text-base text-[#71847B] leading-relaxed">
            Have a question about an outfit or want to schedule a bridal trial session? Connect with Pehnava RJ01 boutique team instantly.
          </p>
        </div>
      </section>

      <!-- Contact Info Cards & Interactive Enquiry Form -->
      <section class="py-16 sm:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <!-- Left Info Cards -->
            <div class="lg:col-span-5 space-y-6">
              <div class="bg-white p-6 rounded-3xl border border-[#D5D8D3] shadow-xs flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center shrink-0">
                  <app-icon name="map-pin" [size]="22" customClass="text-[#B8875A]"></app-icon>
                </div>
                <div>
                  <h3 class="text-sm font-bold uppercase tracking-wider text-[#155E5B] mb-1">Store Address</h3>
                  <p class="text-xs sm:text-sm text-[#71847B] leading-relaxed">
                    {{ businessConfig.fullAddress }}
                  </p>
                </div>
              </div>

              <div class="bg-white p-6 rounded-3xl border border-[#D5D8D3] shadow-xs flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center shrink-0">
                  <app-icon name="message-circle" [size]="22" customClass="text-[#25D366]"></app-icon>
                </div>
                <div>
                  <h3 class="text-sm font-bold uppercase tracking-wider text-[#155E5B] mb-1">WhatsApp & Call</h3>
                  <p class="text-xs sm:text-sm font-semibold text-[#155E5B]">
                    {{ businessConfig.whatsappDisplayNumber }}
                  </p>
                  <p class="text-xs text-[#71847B] mt-0.5">Instant response for pricing & outfit availability</p>
                </div>
              </div>

              <div class="bg-white p-6 rounded-3xl border border-[#D5D8D3] shadow-xs flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center shrink-0">
                  <app-icon name="clock" [size]="22" customClass="text-[#155E5B]"></app-icon>
                </div>
                <div>
                  <h3 class="text-sm font-bold uppercase tracking-wider text-[#155E5B] mb-1">Working Hours</h3>
                  <p class="text-xs sm:text-sm text-[#71847B]">
                    {{ businessConfig.workingDays }}: <strong class="text-[#155E5B]">{{ businessConfig.storeTimings }}</strong>
                  </p>
                </div>
              </div>

              <!-- Instant WhatsApp Button -->
              <div class="pt-2">
                <button
                  (click)="whatsAppService.openWhatsApp('General Contact Enquiry')"
                  class="w-full btn-pehnava-primary py-4 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <app-icon name="message-circle" [size]="18" customClass="text-[#25D366]"></app-icon>
                  <span>Chat directly on WhatsApp</span>
                </button>
              </div>
            </div>

            <!-- Right Interactive Form -->
            <div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#D5D8D3] shadow-sm">
              <h2 class="text-2xl font-bold text-[#155E5B] mb-2">Send an Enquiry</h2>
              <p class="text-xs sm:text-sm text-[#71847B] mb-6">
                Fill out the form below to send a pre-filled enquiry message directly to our WhatsApp team.
              </p>

              <form (submit)="handleFormSubmit($event)" class="space-y-5">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#155E5B] mb-1">Your Name</label>
                  <input
                    type="text"
                    [(ngModel)]="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    class="w-full p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#D5D8D3] text-sm focus:outline-hidden focus:border-[#155E5B]"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#155E5B] mb-1">Category / Outfit Interested In</label>
                  <select
                    [(ngModel)]="category"
                    name="category"
                    class="w-full p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#D5D8D3] text-sm focus:outline-hidden focus:border-[#155E5B]"
                  >
                    <option value="Bridal Wear">Bridal Wear</option>
                    <option value="Designer Lehenga">Designer Lehenga</option>
                    <option value="Sarees">Designer Sarees</option>
                    <option value="Reception Gowns">Reception Gowns</option>
                    <option value="Anarkali Suits">Anarkali & Designer Suits</option>
                    <option value="Store Appointment">Store Appointment Visit</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#155E5B] mb-1">Your Message</label>
                  <textarea
                    [(ngModel)]="messageText"
                    name="messageText"
                    rows="4"
                    required
                    placeholder="Tell us what you are looking for..."
                    class="w-full p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#D5D8D3] text-sm focus:outline-hidden focus:border-[#155E5B]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full btn-pehnava-primary py-4 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <app-icon name="send" [size]="16" customClass="text-[#D4B270]"></app-icon>
                  <span>Submit & Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Embedded Google Map -->
      <app-map-section></app-map-section>
    </main>
  `
})
export class ContactComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly schema = inject(SchemaService);
  readonly whatsAppService = inject(WhatsAppService);
  readonly businessConfig = BUSINESS_CONFIG;

  name = '';
  category = 'Bridal Wear';
  messageText = '';

  ngOnInit(): void {
    this.seo.setMeta({
      title: 'Contact Pehnava RJ01 | Store Location & WhatsApp Enquiry',
      description: 'Find Pehnava RJ01 store address on Mayo Link Road Ajmer, view business hours, or send instant WhatsApp enquiries for bridal outfits.',
      url: '/contact',
    });

    this.schema.injectBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]);
  }

  handleFormSubmit(e: Event): void {
    e.preventDefault();
    const formatted = `Hello Pehnava, my name is ${this.name || 'Client'}. I am interested in ${this.category}. ${this.messageText}`;
    this.whatsAppService.openWhatsApp(formatted);
  }
}
