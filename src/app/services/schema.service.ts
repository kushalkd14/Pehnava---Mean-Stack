import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BUSINESS_CONFIG } from '../config/business';
import { Collection } from '../models/catalog.models';

@Injectable({ providedIn: 'root' })
export class SchemaService {
    private readonly document = inject(DOCUMENT);
    private readonly siteUrl = 'https://pehnava---mean-stack.sswaggyiirush.workers.dev';

    injectSchemas(): void {
        this.injectLocalBusinessSchema();
        this.injectOrganizationSchema();
        this.injectFAQSchema();
    }

    injectLocalBusinessSchema(): void {
        const schema = {
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'ClothingStore'],
            '@id': `${this.siteUrl}/#store`,
            name: BUSINESS_CONFIG.name,
            description: 'Premier women’s fashion boutique in Ajmer, Rajasthan offering Short Kurtis, Decent Printed Designer Suits, Co-Ord Sets, Bottom Wear & Festive Outfits.',
            url: this.siteUrl,
            telephone: `+${BUSINESS_CONFIG.whatsappNumber}`,
            priceRange: '₹₹ - ₹₹₹₹',
            image: `${this.siteUrl}/pehnava-logo.png`,
            address: {
                '@type': 'PostalAddress',
                streetAddress: BUSINESS_CONFIG.fullAddress,
                addressLocality: BUSINESS_CONFIG.city,
                addressRegion: BUSINESS_CONFIG.state,
                postalCode: '305001',
                addressCountry: 'IN',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 26.4499,
                longitude: 74.6399,
            },
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    opens: '10:00',
                    closes: '21:00',
                },
            ],
            sameAs: [
                BUSINESS_CONFIG.instagramUrl,
                BUSINESS_CONFIG.googleMapsUrl,
            ],
        };
        this.setScript('schema-local-business', schema);
    }

    injectOrganizationSchema(): void {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: BUSINESS_CONFIG.name,
            url: this.siteUrl,
            logo: `${this.siteUrl}/pehnava-logo.png`,
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: `+${BUSINESS_CONFIG.whatsappNumber}`,
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi'],
            },
        };
        this.setScript('schema-organization', schema);
    }

    injectFAQSchema(faqs?: Array<{ question: string; answer: string }>): void {
        const defaultFaqs = [
            {
                question: 'Where is Pehnava boutique located in Ajmer?',
                answer: 'Pehnava is located opposite Holy Family Hospital, Mayo Link Road, near 9 No. Petrol Pump, Nagra, Ajmer, Rajasthan 305001.',
            },
            {
                question: 'What women’s clothing collections are available at Pehnava?',
                answer: 'We specialize in Short Kurtis, Decent Printed Designer Suits, Co-Ord Sets, Premium Cotton T-Shirts, Bottom Wear, Sharara Sets, and Festive Ethnic Wear.',
            },
            {
                question: 'Can I enquire or order outfits via WhatsApp?',
                answer: 'Yes! You can click any "Enquire on WhatsApp" button on our website or text us directly at +91 80057 85709 for size availability and ordering.',
            },
            {
                question: 'What are the boutique operating hours in Ajmer?',
                answer: 'We are open all 7 days a week from 10:00 AM to 9:00 PM for walk-ins and trials.',
            },
        ];

        const list = faqs || defaultFaqs;
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: list.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                },
            })),
        };
        this.setScript('schema-faq', schema);
    }

    injectCollectionSchema(collection: Collection): void {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${collection.name} | Pehnava Ajmer`,
            description: collection.description,
            url: `${this.siteUrl}/collections/${collection.slug}`,
            image: collection.image.startsWith('http') ? collection.image : `${this.siteUrl}/${collection.image}`,
            publisher: {
                '@type': 'Organization',
                name: BUSINESS_CONFIG.name,
                logo: `${this.siteUrl}/pehnava-logo.png`,
            },
        };
        this.setScript('schema-collection-detail', schema);
    }

    injectBreadcrumbSchema(items: Array<{ name: string; url: string }>): void {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((item, idx) => {
                const fullUrl = item.url.startsWith('http') ? item.url : `${this.siteUrl}${item.url.startsWith('/') ? '' : '/'}${item.url}`;
                return {
                    '@type': 'ListItem',
                    position: idx + 1,
                    name: item.name,
                    item: fullUrl,
                };
            }),
        };
        this.setScript('schema-breadcrumb', schema);
    }

    private setScript(id: string, data: object): void {
        let script = this.document.getElementById(id) as HTMLScriptElement;
        if (!script) {
            script = this.document.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            this.document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(data);
    }
}
