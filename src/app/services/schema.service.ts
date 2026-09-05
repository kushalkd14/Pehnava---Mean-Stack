import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SchemaService {
    private readonly document = inject(DOCUMENT);

    injectSchemas(): void {
        this.injectLocalBusinessSchema();
        this.injectOrganizationSchema();
        this.injectFAQSchema();
    }

    injectLocalBusinessSchema(): void {
        const schema = {
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'ClothingStore'],
            '@id': 'https://pehnava---mean-stack.sswaggyiirush.workers.dev/#store',
            name: 'Pehnava RJ01',
            description: 'Luxury fashion boutique in Ajmer, Rajasthan offering exclusive Bridal Wear, Lehengas, Designer Sarees, Gowns & Festive Outfits.',
            url: 'https://pehnava---mean-stack.sswaggyiirush.workers.dev',
            telephone: '+918005785709',
            priceRange: '₹₹ - ₹₹₹₹',
            image: 'https://pehnava---mean-stack.sswaggyiirush.workers.dev/pehnava-logo.png',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Front of Holy Family Hospital, Mayo Link Road, near 9 No. Petrol Pump, Nagra',
                addressLocality: 'Ajmer',
                addressRegion: 'Rajasthan',
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
                    opens: '11:00',
                    closes: '21:00',
                },
            ],
            sameAs: [
                'https://www.instagram.com/pehnavarj01/',
                'https://maps.app.goo.gl/1boS74EE8uDHqX3PA',
            ],
        };
        this.setScript('schema-local-business', schema);
    }

    injectOrganizationSchema(): void {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Pehnava RJ01',
            url: 'https://pehnava---mean-stack.sswaggyiirush.workers.dev',
            logo: 'https://pehnava---mean-stack.sswaggyiirush.workers.dev/pehnava-logo.png',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+918005785709',
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi'],
            },
        };
        this.setScript('schema-organization', schema);
    }

    injectFAQSchema(faqs?: Array<{ question: string; answer: string }>): void {
        const defaultFaqs = [
            {
                question: 'Where is Pehnava RJ01 located?',
                answer: 'Pehnava RJ01 is located opposite Holy Family Hospital, Mayo Link Road, near 9 No. Petrol Pump, Nagra, Ajmer, Rajasthan 305001.',
            },
            {
                question: 'What clothing collections are available at Pehnava RJ01?',
                answer: 'We specialize in Bridal Lehengas, Designer Sarees, Reception Gowns, Party Wear, Anarkali Suits, Sharara Sets, and Festive Ethnic Wear.',
            },
            {
                question: 'Can I enquire or order via WhatsApp?',
                answer: 'Yes! You can click any "Enquire on WhatsApp" button on our website or text us directly at +91 80057 85709.',
            },
            {
                question: 'What are the store operating hours?',
                answer: 'We are open all 7 days a week from 11:00 AM to 9:00 PM.',
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

    injectBreadcrumbSchema(items: Array<{ name: string; url: string }>): void {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((item, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                name: item.name,
                item: `https://pehnava---mean-stack.sswaggyiirush.workers.dev${item.url}`,
            })),
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
