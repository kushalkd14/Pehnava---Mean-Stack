import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from './services/catalog.service';
import { Look, Store, Review, InstagramPost, WhyPehnavaItem } from './models/catalog.models';
import { WHATSAPP_MESSAGES } from './config/business';
import { buildSeoSchema } from './seo/seo-schema';

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

  readonly seoSchema = JSON.stringify(buildSeoSchema());

  store: Store | null = null;
  looks: Look[] = [];
  reviews: Review[] = [];
  instagramPosts: InstagramPost[] = [];
  whyPehnavaItems: WhyPehnavaItem[] = [];

  isWhatsAppModalOpen = false;
  whatsAppCustomMessage = '';
  activeLookModal: Look | null = null;
  selectedCategoryFilter = 'all';

  ngOnInit(): void {
    this.catalog.store().subscribe({ next: (store) => (this.store = store) });
    this.catalog.looks().subscribe({ next: (looks) => (this.looks = looks) });
    this.catalog.reviews().subscribe({ next: (reviews) => (this.reviews = reviews) });
    this.catalog.instagram().subscribe({ next: (posts) => (this.instagramPosts = posts) });
    this.catalog.whyPehnava().subscribe({ next: (items) => (this.whyPehnavaItems = items) });
  }

  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const reveal = () => document.querySelectorAll('[data-reveal]').forEach((element) => element.classList.add('revealed'));

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      reveal();
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
  }

  handleOpenWhatsApp(customMessage?: string, look?: Look): void {
    this.whatsAppCustomMessage =
      customMessage || (look ? look.enquiryMessage : WHATSAPP_MESSAGES.general);
    this.isWhatsAppModalOpen = true;
  }

  handleSelectCategoryFromEdits(categoryId: string): void {
    const categoryMap: Record<string, string> = {
      women: 'women',
      men: 'men',
      'ethnic-wear': 'ethnic',
      'occasion-wear': 'occasion',
      'new-arrivals': 'new-arrivals',
    };

    this.selectedCategoryFilter = categoryMap[categoryId] ?? 'all';
  }

  handleCloseWhatsAppModal(): void {
    this.isWhatsAppModalOpen = false;
  }

  handleCloseLookModal(): void {
    this.activeLookModal = null;
  }

  handleEnquireFromLookModal(look: Look): void {
    this.activeLookModal = null;
    this.handleOpenWhatsApp(look.enquiryMessage, look);
  }
}
