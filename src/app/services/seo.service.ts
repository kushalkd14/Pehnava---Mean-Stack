import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly defaultTitle = 'Pehnava RJ01 | Luxury Fashion Boutique & Bridal Studio in Rajasthan';
  private readonly defaultDesc = 'Pehnava RJ01 is a premium fashion boutique in Rajasthan offering exclusive Bridal Wear, Lehengas, Designer Sarees, Gowns & Festive Suits. Visit our store or enquire on WhatsApp.';
  private readonly defaultImage = 'https://pehnava---mean-stack.sswaggyiirush.workers.dev/pehnava-logo.png';
  private readonly siteUrl = 'https://pehnava---mean-stack.sswaggyiirush.workers.dev';

  setMeta(config: Partial<SeoConfig>): void {
    const title = config.title ? `${config.title} | Pehnava RJ01` : this.defaultTitle;
    const description = config.description || this.defaultDesc;
    const image = config.image || this.defaultImage;
    const url = config.url ? `${this.siteUrl}${config.url}` : this.siteUrl;
    const keywords = config.keywords || 'Boutique in Rajasthan, Bridal Boutique, Designer Lehenga, Saree Boutique, Wedding Fashion Boutique, Pehnava RJ01, Ajmer boutique';

    // Page Title
    this.titleService.setTitle(title);

    // Standard Meta
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:type', content: config.type || 'website' });

    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    // Canonical link tag
    this.setCanonicalUrl(url);
  }

  private setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
