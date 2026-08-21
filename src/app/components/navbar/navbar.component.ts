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
          <div class="flex items-center gap-2 lg:hidden shrink-0">
            <button
              id="mobile-menu-toggle"
              type="button"
              (click)="toggleMobileMenu()"
              aria-label="Toggle Navigation Menu"
              [attr.aria-expanded]="mobileMenuOpen"
              aria-controls="mobile-navigation-shell"
              class="w-11 h-11 rounded-xl text-[#155E5B] hover:bg-[#DDEFE6] transition-colors duration-200 cursor-pointer flex items-center justify-center"
            >
              @if (mobileMenuOpen) {
                <app-icon name="x" [size]="22"></app-icon>
              } @else {
                <app-icon name="menu" [size]="22"></app-icon>
              }
            </button>
          </div>

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

          <nav id="desktop-nav" class="hidden lg:flex items-center space-x-5 xl:space-x-7">
            @for (link of navLinks; track link.name) {
              <a
                [href]="link.href"
                class="text-xs tracking-[0.15em] uppercase font-semibold text-[#71847B] hover:text-[#155E5B] transition-colors duration-200 py-1.5 relative group"
              >
                {{ link.name }}
                <span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89452] transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            }
          </nav>

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
    </header>

    <!-- Mobile navigation lives outside the header layout so viewport geometry stays deterministic. -->
    @if (mobileMenuMounted) {
      <div
        id="mobile-navigation-shell"
        class="lg:hidden fixed inset-0 z-[100]"
        [class.pointer-events-none]="!mobileMenuOpen"
        [attr.aria-hidden]="!mobileMenuOpen"
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          class="absolute inset-0 w-full h-full border-0 p-0 bg-[#092B2A]/24 backdrop-blur-[2px] transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          [class.opacity-0]="!mobileMenuOpen"
          [class.opacity-100]="mobileMenuOpen"
          tabindex="-1"
          (click)="closeMobileMenu()"
        ></button>

        <aside
          id="mobile-nav-drawer"
          class="absolute inset-x-0 top-0 h-[100dvh] min-h-0 overflow-hidden bg-[#FAF8F3] shadow-[0_24px_60px_-24px_rgba(9,43,42,0.28)] border-b border-[#AFCFC0] transform-gpu transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          [class.-translate-y-3]="!mobileMenuOpen"
          [class.translate-y-0]="mobileMenuOpen"
          [class.opacity-0]="!mobileMenuOpen"
          [class.opacity-100]="mobileMenuOpen"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div class="flex h-full min-h-0 flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
            <div class="flex h-16 shrink-0 items-center justify-between border-b border-[#D5D8D3] px-4 sm:px-6">
              <div class="flex items-center gap-2 min-w-0">
                <app-icon name="sparkles" [size]="14" customClass="text-[#B89452] shrink-0"></app-icon>
                <span class="truncate text-[11px] uppercase tracking-[0.2em] font-semibold text-[#155E5B]">
                  {{ store?.name || 'Pahnave Wale Bhaiya' }}, Ajmer
                </span>
              </div>
              <button
                type="button"
                (click)="closeMobileMenu()"
                aria-label="Close Navigation Menu"
                class="ml-3 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#155E5B] transition-all duration-200 hover:bg-[#DDEFE6] active:scale-[0.98]"
              >
                <app-icon name="x" [size]="22"></app-icon>
              </button>
            </div>

            <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6">
              <div class="mb-4 flex items-center justify-between gap-4 text-xs text-[#71847B]">
                <span>Ajmer Boutique</span>
                <span>Open {{ store?.storeTimings || '11 AM – 9 PM' }}</span>
              </div>

              <nav class="flex flex-col gap-2" aria-label="Mobile navigation links">
                @for (link of navLinks; track link.name; let i = $index) {
                  <a
                    [href]="link.href"
                    (click)="closeMobileMenu()"
                    class="mobile-nav-link group flex min-h-12 items-center justify-between rounded-xl px-3 py-3 font-serif text-base text-[#26332F] transition-[opacity,transform,color,background-color] duration-250 hover:bg-[#DDEFE6]/60 hover:text-[#155E5B]"
                    [style.transition-delay.ms]="mobileMenuOpen ? 40 + i * 30 : 0"
                    [class.mobile-nav-link-hidden]="!mobileMenuOpen"
                  >
                    <span>{{ link.name }}</span>
                    <span class="font-sans text-xs text-[#B89452] transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                }
              </nav>

              <div class="mt-6 border-t border-[#D5D8D3] pt-5">
                <a
                  id="mobile-drawer-whatsapp-btn"
                  [href]="getGeneralWhatsAppUrl()"
                  target="_blank"
                  rel="noopener noreferrer"
                  (click)="onWhatsAppClick($event)"
                  aria-label="Chat with Pahnave Wale Bhaiya on WhatsApp"
                  class="w-full inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#155E5B] px-4 py-3 text-sm font-semibold text-[#FAF8F3] transition-all duration-200 hover:bg-[#0E4543] active:scale-[0.98] shadow-sm cursor-pointer"
                >
                  <app-icon name="message-circle" [size]="17" customClass="text-[#25D366]"></app-icon>
                  <span>Connect on WhatsApp</span>
                </a>

                <div class="mt-4 flex items-center justify-between gap-4 px-1 text-xs text-[#71847B]">
                  <a
                    [href]="store?.instagramUrl || businessConfig.instagramUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex min-h-11 items-center gap-1.5 transition-colors hover:text-[#155E5B]"
                  >
                    <app-icon name="instagram" [size]="14" customClass="text-[#C98F91]"></app-icon>
                    <span>{{ store?.instagramHandle || businessConfig.instagramHandle }}</span>
                  </a>
                  <a
                    [href]="store?.googleMapsUrl || businessConfig.googleMapsUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex min-h-11 items-center gap-1.5 text-right transition-colors hover:text-[#155E5B]"
                  >
                    <app-icon name="map-pin" [size]="14" customClass="text-[#B8875A]"></app-icon>
                    <span>Mayo Link Road, Ajmer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    }
  `
})
export class NavbarComponent implements OnDestroy {
  @Input() store: Store | null = null;
  @Output() openWhatsApp = new EventEmitter<void>();

  readonly businessConfig = BUSINESS_CONFIG;
  isScrolled = false;
  mobileMenuOpen = false;
  mobileMenuMounted = false;
  private mobileMenuCloseTimer: ReturnType<typeof setTimeout> | null = null;

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
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu(): void {
    if (this.mobileMenuCloseTimer) {
      clearTimeout(this.mobileMenuCloseTimer);
      this.mobileMenuCloseTimer = null;
    }

    this.mobileMenuMounted = true;
    requestAnimationFrame(() => {
      this.mobileMenuOpen = true;
      this.setPageScrollLocked(true);
    });
  }

  closeMobileMenu(): void {
    if (!this.mobileMenuMounted) {
      this.setPageScrollLocked(false);
      return;
    }

    this.mobileMenuOpen = false;
    this.setPageScrollLocked(false);

    if (this.mobileMenuCloseTimer) {
      clearTimeout(this.mobileMenuCloseTimer);
    }

    this.mobileMenuCloseTimer = setTimeout(() => {
      this.mobileMenuMounted = false;
      this.mobileMenuCloseTimer = null;
    }, 300);
  }

  private setPageScrollLocked(locked: boolean): void {
    if (typeof document === 'undefined') {
      return;
    }

    document.documentElement.classList.toggle('mobile-menu-open', locked);
    document.body.classList.toggle('mobile-menu-open', locked);
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
    if (this.mobileMenuCloseTimer) {
      clearTimeout(this.mobileMenuCloseTimer);
      this.mobileMenuCloseTimer = null;
    }
    this.setPageScrollLocked(false);
  }
}
