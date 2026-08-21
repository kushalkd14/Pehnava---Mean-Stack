import { Component, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { BUSINESS_CONFIG, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../config/business';
import { Store } from '../../models/catalog.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <header
      id="main-header"
      class="fixed top-0 left-0 right-0 z-40 h-16 sm:h-18 flex items-center transition-all duration-300"
      [ngClass]="
        isScrolled
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#AFCFC0]/60 shadow-[0_4px_20px_-4px_rgba(21,94,91,0.06)]'
          : 'bg-[#FAF8F3]/80 sm:bg-transparent border-b border-[#D5D8D3]/40 sm:border-transparent'
      "
    >
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-3 sm:gap-6">
          <!-- Mobile Left: Menu Toggle Button -->
          <div class="flex items-center gap-2 lg:hidden shrink-0">
            <button
              id="mobile-menu-toggle"
              (click)="toggleMobileMenu()"
              aria-label="Toggle Navigation Menu"
              class="w-11 h-11 rounded-xl text-[#155E5B] hover:bg-[#DDEFE6] transition-colors duration-200 cursor-pointer flex items-center justify-center"
            >
              @if (mobileMenuOpen) {
                <app-icon name="x" [size]="22"></app-icon>
              } @else {
                <app-icon name="menu" [size]="22"></app-icon>
              }
            </button>
          </div>

          <!-- Brand Left: Pure Typography Wordmark -->
          <a
            href="#home"
            id="brand-logo"
            class="flex items-baseline gap-1.5 focus:outline-hidden shrink-0 group select-none py-1"
            aria-label="Pahnave Wale Bhaiya Home"
          >
            <span class="font-serif font-medium text-[#155E5B] text-xl sm:text-2xl md:text-[25px] tracking-tight leading-none group-hover:text-[#0E4543] transition-colors duration-200">
              Pahnave Wale
            </span>
            <span class="font-serif italic font-normal text-[#B8875A] text-xl sm:text-2xl md:text-[25px] tracking-tight leading-none group-hover:text-[#96673D] transition-colors duration-200">
              Bhaiya
            </span>
          </a>

          <!-- Desktop Navigation Links -->
          <nav id="desktop-nav" class="hidden lg:flex items-center space-x-5 xl:space-x-7">
            @for (link of navLinks; track link.name) {
              <a
                [href]="link.href"
                class="text-xs tracking-[0.15em] uppercase font-semibold text-[#71847B] hover:text-[#155E5B] transition-colors duration-200 py-1.5 relative group"
              >
                {{ link.name }}
                <!-- Gold hover underline indicator -->
                <span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89452] transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            }
          </nav>

          <!-- Right Action: WhatsApp CTA & Store Pill -->
          <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#visit-us"
              class="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#DDEFE6]/70 border border-[#AFCFC0] text-[#155E5B] text-xs font-medium hover:bg-[#DDEFE6] transition-colors"
            >
              <app-icon name="map-pin" [size]="13" customClass="text-[#B8875A]"></app-icon>
              <span>Ajmer Boutique</span>
            </a>

            <a
              id="nav-whatsapp-cta"
              [href]="getGeneralWhatsAppUrl()"
              target="_blank"
              rel="noopener noreferrer"
              (click)="onWhatsAppClick($event)"
              aria-label="Chat with Pahnave Wale Bhaiya on WhatsApp"
              class="inline-flex min-h-11 items-center justify-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#155E5B] hover:bg-[#0E4543] text-[#FAF8F3] text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer active:scale-98 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <app-icon name="message-circle" [size]="15" customClass="text-[#25D366] shrink-0"></app-icon>
              <span class="hidden md:inline">Enquire on</span>
              <span class="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Mobile Drawer Menu -->
      @if (mobileMenuOpen) {
        <div
          id="mobile-nav-drawer"
          class="lg:hidden fixed top-16 inset-x-0 bottom-0 bg-[#FAF8F3] border-b border-[#AFCFC0] shadow-xl p-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] transition-all duration-300 overflow-y-auto overscroll-contain"
        >
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-[#D5D8D3]">
            <div class="flex items-center gap-2">
              <app-icon name="sparkles" [size]="14" customClass="text-[#B89452]"></app-icon>
              <span class="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#155E5B]">
                {{ store?.name || 'Pahnave Wale Bhaiya' }}, Ajmer
              </span>
            </div>
            <span class="text-xs text-[#71847B]">Open {{ store?.storeTimings || '11 AM – 9 PM' }}</span>
          </div>

          <nav class="flex flex-col space-y-2 mb-6">
            @for (link of navLinks; track link.name) {
              <a
                [href]="link.href"
                (click)="closeMobileMenu()"
                class="text-base font-serif text-[#26332F] hover:text-[#155E5B] hover:bg-[#DDEFE6]/60 px-3 py-2 rounded-lg transition-colors duration-150 flex items-center justify-between"
              >
                <span>{{ link.name }}</span>
                <span class="text-xs text-[#B89452] font-sans">→</span>
              </a>
            }
          </nav>

          <div class="pt-2 space-y-3">
            <a
              id="mobile-drawer-whatsapp-btn"
              [href]="getGeneralWhatsAppUrl()"
              target="_blank"
              rel="noopener noreferrer"
              (click)="onWhatsAppClick($event)"
              aria-label="Chat with Pahnave Wale Bhaiya on WhatsApp"
              class="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#155E5B] hover:bg-[#0E4543] text-[#FAF8F3] text-sm font-semibold transition-colors duration-150 active:scale-98 shadow-sm cursor-pointer"
            >
              <app-icon name="message-circle" [size]="17" customClass="text-[#25D366]"></app-icon>
              <span>Connect on WhatsApp</span>
            </a>

            <div class="flex items-center justify-between text-xs text-[#71847B] pt-2 px-1">
              <a
                [href]="store?.instagramUrl || businessConfig.instagramUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 hover:text-[#155E5B] transition-colors"
              >
                <app-icon name="instagram" [size]="14" customClass="text-[#C98F91]"></app-icon>
                <span>{{ store?.instagramHandle || businessConfig.instagramHandle }}</span>
              </a>
              <a
                [href]="store?.googleMapsUrl || businessConfig.googleMapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 hover:text-[#155E5B] transition-colors"
              >
                <app-icon name="map-pin" [size]="14" customClass="text-[#B8875A]"></app-icon>
                <span>Mayo Link Road, Ajmer</span>
              </a>
            </div>
          </div>
        </div>
      }
    </header>
  `
})
export class NavbarComponent implements OnDestroy {
  @Input() store: Store | null = null;
  @Output() openWhatsApp = new EventEmitter<void>();

  readonly businessConfig = BUSINESS_CONFIG;
  isScrolled = false;
  mobileMenuOpen = false;

  readonly navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Edit', href: '#the-edit' },
    { name: 'Collections', href: '#collections' },
    { name: 'Featured Looks', href: '#featured-looks' },
    { name: 'Why Us', href: '#why-pehnava' },
    { name: 'Reviews', href: '#customer-reviews' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'About', href: '#about' },
    { name: 'Visit Store', href: '#visit-us' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.scrollY > 20;
    }
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  onWhatsAppClick(event: MouseEvent): void {
    event.preventDefault();
    this.closeMobileMenu();
    this.openWhatsApp.emit();
  }

  getGeneralWhatsAppUrl(): string {
    return getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
