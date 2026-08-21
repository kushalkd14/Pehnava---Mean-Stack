import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from './services/catalog.service';
import { Look, Store, Review, InstagramPost, WhyPehnavaItem } from './models/catalog.models';
import { WHATSAPP_MESSAGES } from './config/business';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { EditorialEditsComponent } from './components/editorial-edits/editorial-edits.component';
import { FeaturedLooksComponent } from './components/featured-looks/featured-looks.component';
import { WhatsAppSectionComponent } from './components/whatsapp-section/whatsapp-section.component';
import { WhyPehnavaComponent } from './components/why-pehnava/why-pehnava.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { InstagramSectionComponent } from './components/instagram-section/instagram-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { VisitUsComponent } from './components/visit-us/visit-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingWhatsAppComponent } from './components/floating-whatsapp/floating-whatsapp.component';
import { WhatsAppModalComponent } from './components/whatsapp-modal/whatsapp-modal.component';
import { LookModalComponent } from './components/look-modal/look-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    IntroSectionComponent,
    EditorialEditsComponent,
    FeaturedLooksComponent,
    WhatsAppSectionComponent,
    WhyPehnavaComponent,
    CustomerReviewsComponent,
    InstagramSectionComponent,
    AboutSectionComponent,
    VisitUsComponent,
    FooterComponent,
    FloatingWhatsAppComponent,
    WhatsAppModalComponent,
    LookModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  private readonly catalog = inject(CatalogService);

  store: Store | null = null;
  looks: Look[] = [];
  reviews: Review[] = [];
  instagramPosts: InstagramPost[] = [];
  whyPehnavaItems: WhyPehnavaItem[] = [];

  isWhatsAppModalOpen = false;
  whatsAppCustomMessage = '';
  selectedEnquiryLook: Look | null = null;
  activeLookModal: Look | null = null;
  selectedCategoryFilter = 'all';

  ngOnInit(): void {
    try {
      this.catalog.store().subscribe({
        next: (s) => (this.store = s),
        error: (err) => console.warn('Store fetch error, fallback active:', err),
      });
      this.catalog.looks().subscribe({
        next: (l) => (this.looks = l),
        error: (err) => console.warn('Looks fetch error, fallback active:', err),
      });
      this.catalog.reviews().subscribe({
        next: (r) => (this.reviews = r),
        error: (err) => console.warn('Reviews fetch error, fallback active:', err),
      });
      this.catalog.instagram().subscribe({
        next: (i) => (this.instagramPosts = i),
        error: (err) => console.warn('Instagram fetch error, fallback active:', err),
      });
      this.catalog.whyPehnava().subscribe({
        next: (w) => (this.whyPehnavaItems = w),
        error: (err) => console.warn('WhyPehnava fetch error, fallback active:', err),
      });
    } catch (err) {
      console.warn('Initialization error caught:', err);
    }
  }

  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    try {
      const prefersReducedMotion =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
        document.querySelectorAll('[data-reveal]').forEach((el) => {
          el.classList.add('revealed');
        });
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    } catch (e) {
      console.warn('Observer initialization error, revealing elements:', e);
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('revealed'));
    }
  }

  handleOpenWhatsApp(customMessage?: string, look?: Look): void {
    this.whatsAppCustomMessage =
      customMessage || (look ? look.enquiryMessage : WHATSAPP_MESSAGES.general);
    this.selectedEnquiryLook = look || null;
    this.isWhatsAppModalOpen = true;
  }

  handleSelectCategoryFromEdits(categoryId: string): void {
    let target = 'all';
    if (categoryId === 'women') target = 'women';
    else if (categoryId === 'men') target = 'men';
    else if (categoryId === 'ethnic-wear') target = 'ethnic';
    else if (categoryId === 'occasion-wear') target = 'occasion';
    else if (categoryId === 'new-arrivals') target = 'new-arrivals';

    this.selectedCategoryFilter = target;
  }

  handleCloseWhatsAppModal(): void {
    this.isWhatsAppModalOpen = false;
    this.selectedEnquiryLook = null;
  }

  handleCloseLookModal(): void {
    this.activeLookModal = null;
  }

  handleEnquireFromLookModal(look: Look): void {
    this.activeLookModal = null;
    this.handleOpenWhatsApp(look.enquiryMessage, look);
  }
}
