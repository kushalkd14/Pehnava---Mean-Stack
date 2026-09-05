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
    robots?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
    private readonly titleService = inject(Title);
    private readonly metaService = inject(Meta);
    private readonly document = inject(DOCUMENT);

    private readonly defaultTitle = "Women's Ethnic Wear Boutique in Ajmer | Pehnava";
    private readonly defaultDesc = 'Pehnava is a premier women’s fashion boutique in Ajmer offering Short Kurtis, Decent Printed Designer Suits, Co-Ord Sets, Bottom Wear & Festive Wear. Visit our store on Mayo Link Road or enquire on WhatsApp.';
    private readonly defaultImage = 'https://pehnava---mean-stack.sswaggyiirush.workers.dev/pehnava-logo.png';
    private readonly siteUrl = 'https://pehnava---mean-stack.sswaggyiirush.workers.dev';

    setMeta(config: Partial<SeoConfig>): void {
        let title = config.title || this.defaultTitle;
        if (config.title && !config.title.includes('Pehnava')) {
            title = `${config.title} | Pehnava`;
        }

        const description = config.description || this.defaultDesc;
        const image = config.image || this.defaultImage;
        const rawUrl = config.url || '';
        const url = rawUrl.startsWith('http') ? rawUrl : `${this.siteUrl}${rawUrl.startsWith('/') ? '' : '/'}${rawUrl}`;
        const keywords = config.keywords || 'women ethnic wear Ajmer, boutique in Ajmer, Short Kurtis, Designer Suits, Co-Ord Sets, Cotton T-Shirts, Festive Wear Ajmer, Pehnava Ajmer';
        const robots = config.robots || 'index, follow';

        // Page Title
        this.titleService.setTitle(title);

        // Standard Meta
        this.metaService.updateTag({ name: 'description', content: description });
        this.metaService.updateTag({ name: 'keywords', content: keywords });
        this.metaService.updateTag({ name: 'robots', content: robots });

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

    setNoIndex(): void {
        this.metaService.updateTag({ name: 'robots', content: 'noindex, follow' });
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
