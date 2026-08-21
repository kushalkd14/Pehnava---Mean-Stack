import { Component, EventEmitter, HostListener, Input, OnDestroy, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { BUSINESS_CONFIG } from '../../config/business';
import { Store } from '../../models/catalog.models';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent],
  template: `
    <header
      id="main-header"
      class="fixed top-0 left-0 right-0 z-40 h-16 sm:h-18 flex items-center transition-all duration-300"
      [ngClass]="
        isScrolled
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#AFCFC0]/60 shadow-[0_4px_20px_-4px_rgba(21,94,91,0.08)]'
          : 'bg-[#FAF8F3]/90 sm:bg-[#FAF8F3]/80 border-b border-[#D5D8D3]/40'
      "
    >
      <div class="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-2 sm:gap-6">
          <!-- Left: Mobile Menu Toggle & Brand Logo -->
          <div class="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              id="mobile-menu-toggle"
              (click)="toggleMobileMenu()"
              aria-label="Toggle Navigation Menu"
              class="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-[#155E5B] hover:bg-[#DDEFE6] active:bg-[#CBE4D8] transition-colors duration-200 cursor-pointer flex items-center justify-center"
            >
              <app-icon name="menu" [size]="22"></app-icon>
            </button>

            <!-- Brand Logo & Clean Name -->
            <a
              routerLink="/"
              (click)="closeMobileMenu()"
              id="brand-logo"
              class="flex items-center gap-2 focus:outline-hidden shrink-0 group select-none py-1"
              aria-label="Pehnava Home"
            >
              <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#155E5B] p-0.5 shadow-xs flex items-center justify-center shrink-0">
                <img src="pehnava-logo.png" alt="Pehnava" class="w-full h-full object-contain rounded-full" />
              </div>
              <div class="flex flex-col">
                <div class="inline-flex items-baseline gap-1">
                  <span class="font-bold text-[#155E5B] text-base sm:text-xl md:text-2xl tracking-tight leading-none group-hover:text-[#0E4543] transition-colors">
                    PEHNAVA
                  </span>
                </div>
                <span class="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] font-semibold text-[#B8875A] leading-none mt-0.5">
                  Fashion Boutique
                </span>
              </div>
            </a>
          </div>

          <!-- Desktop Navigation Links -->
          <nav id="desktop-nav" class="hidden lg:flex items-center space-x-6 xl:space-x-8">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                routerLinkActive="text-[#155E5B] font-bold"
                [routerLinkActiveOptions]="{ exact: link.exact }"
                class="text-xs tracking-[0.15em] uppercase font-medium text-[#71847B] hover:text-[#155E5B] transition-colors duration-200 py-1.5 relative group"
              >
                {{ link.name }}
                <span
                  routerLinkActive="w-full"
                  [routerLinkActiveOptions]="{ exact: link.exact }"
                  class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B89452] transition-all duration-300 ease-out group-hover:w-full"
                ></span>
              </a>
            }
          </nav>

          <!-- Right Action: WhatsApp CTA & Store Pill -->
          <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              routerLink="/contact"
              class="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#DDEFE6]/70 border border-[#AFCFC0] text-[#155E5B] text-xs font-medium hover:bg-[#DDEFE6] transition-colors"
            >
              <app-icon name="map-pin" [size]="13" customClass="text-[#B8875A]"></app-icon>
              <span>Ajmer Store</span>
            </a>

            <!-- Compact & Clean WhatsApp Button on Mobile -->
            <button
              id="nav-whatsapp-cta"
              (click)="onWhatsAppEnquire()"
              aria-label="Enquire on WhatsApp"
              class="inline-flex min-h-9 sm:min-h-10 items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#155E5B] hover:bg-[#0E4543] active:bg-[#092B2A] text-[#FAF8F3] text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer active:scale-98 shadow-sm hover:shadow-md"
            >
              <app-icon name="whatsapp" [size]="16" customClass="text-[#25D366] shrink-0"></app-icon>
              <span class="hidden xs:inline">WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- FULL-SCREEN MOBILE OVERLAY NAV DRAWER (Placed outside header height bounds) -->
    @if (mobileMenuOpen) {
      <div
        id="mobile-nav-fullscreen-overlay"
        class="lg:hidden fixed inset-0 z-50 min-h-screen w-screen bg-[#FAF8F3] flex flex-col justify-between p-5 sm:p-8 overflow-y-auto overscroll-contain animate-fadeIn"
      >
        <!-- Top Header Bar inside Full Screen Overlay -->
        <div class="flex items-center justify-between gap-3 pb-4 border-b border-[#D5D8D3]">
          <div class="flex items-center gap-3">
            <button
              (click)="closeMobileMenu()"
              aria-label="Close Navigation Menu"
              class="w-10 h-10 rounded-full bg-[#DDEFE6] text-[#155E5B] hover:bg-[#CBE4D8] transition-colors flex items-center justify-center cursor-pointer shadow-xs"
            >
              <app-icon name="x" [size]="22"></app-icon>
            </button>

            <!-- Brand Title in Drawer -->
            <a routerLink="/" (click)="closeMobileMenu()" class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-[#155E5B] p-0.5 flex items-center justify-center">
                <img src="pehnava-logo.png" alt="Pehnava" class="w-full h-full object-contain rounded-full" />
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-[#155E5B] text-lg leading-none">PEHNAVA</span>
                <span class="text-[8px] uppercase tracking-widest text-[#B8875A]">Fashion Boutique</span>
              </div>
            </a>
          </div>

          <button
            (click)="onWhatsAppEnquire(); closeMobileMenu()"
            class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#155E5B] text-white text-xs font-semibold shadow-sm cursor-pointer"
          >
            <app-icon name="whatsapp" [size]="15" customClass="text-[#25D366]"></app-icon>
            <span>WhatsApp</span>
          </button>
        </div>

        <!-- Center Navigation Links (Full height centered) -->
        <div class="my-auto py-6 space-y-3">
          <div class="flex items-center gap-2 mb-4 px-2">
            <app-icon name="sparkles" [size]="14" customClass="text-[#B89452]"></app-icon>
            <span class="text-[11px] uppercase tracking-[0.25em] font-bold text-[#71847B]">
              Boutique Navigation
            </span>
          </div>

          <nav class="flex flex-col space-y-2">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                (click)="closeMobileMenu()"
                routerLinkActive="bg-[#155E5B] text-white font-bold shadow-md"
                [routerLinkActiveOptions]="{ exact: link.exact }"
                class="text-lg sm:text-xl text-[#26332F] hover:text-[#155E5B] hover:bg-[#DDEFE6]/70 px-5 py-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between"
              >
                <span>{{ link.name }}</span>
                <app-icon name="arrow-up-right" [size]="18" customClass="text-[#B8875A] opacity-80"></app-icon>
              </a>
            }
          </nav>
        </div>

        <!-- Bottom Footer Contact Card in Overlay -->
        <div class="pt-4 border-t border-[#D5D8D3]/80 space-y-4">
          <button
            (click)="onWhatsAppEnquire(); closeMobileMenu()"
            class="w-full py-4 rounded-2xl bg-[#155E5B] hover:bg-[#0E4543] text-white text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-lg active:scale-98 transition-all"
          >
            <app-icon name="whatsapp" [size]="19" customClass="text-[#25D366]"></app-icon>
            <span>Connect on WhatsApp</span>
          </button>

          <div class="flex items-center justify-between text-xs text-[#71847B] px-2">
            <a
              [href]="businessConfig.instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1.5 hover:text-[#155E5B] transition-colors"
            >
              <app-icon name="instagram" [size]="15" customClass="text-[#C98F91]"></app-icon>
              <span>{{ businessConfig.instagramHandle }}</span>
            </a>
            <a
              routerLink="/contact"
              (click)="closeMobileMenu()"
              class="flex items-center gap-1.5 hover:text-[#155E5B] transition-colors font-medium"
            >
              <app-icon name="map-pin" [size]="15" customClass="text-[#B8875A]"></app-icon>
              <span>Mayo Link Road, Ajmer</span>
            </a>
          </div>
        </div>
      </div>
    }
  `
})
export class NavbarComponent implements OnDestroy {
  @Input() store: Store | null = null;
  @Output() openWhatsAppModal = new EventEmitter<void>();

  private readonly whatsAppService = inject(WhatsAppService);
  readonly businessConfig = BUSINESS_CONFIG;

  isScrolled = false;
  mobileMenuOpen = false;

  readonly navLinks = [
    { name: 'Home', path: '/', exact: true },
    { name: 'About Us', path: '/about', exact: false },
    { name: 'Collections', path: '/collections', exact: false },
    { name: 'Gallery', path: '/gallery', exact: false },
    { name: 'Visit & Contact', path: '/contact', exact: false },
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

  onWhatsAppEnquire(): void {
    this.openWhatsAppModal.emit();
    this.whatsAppService.openWhatsApp();
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
