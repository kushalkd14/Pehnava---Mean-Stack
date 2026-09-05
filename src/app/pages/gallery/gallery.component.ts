import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryGridComponent } from '../../components/gallery-grid/gallery-grid.component';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
    selector: 'app-gallery-page',
    standalone: true,
    imports: [CommonModule, GalleryGridComponent],
    template: `
    <main class="pt-24 pb-16 sm:pt-28 bg-[#FAF8F3]">
      <!-- Gallery Hero Banner -->
      <section class="py-12 sm:py-16 bg-[#F3EEE4] border-b border-[#D5D8D3]">
        <div class="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 text-center max-w-3xl">
          <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">
            Visual Showcase
          </span>
          <h1 class="text-3xl sm:text-5xl font-bold text-[#155E5B] mt-2 mb-4 font-sans">
            Boutique & Client Gallery
          </h1>
          <p class="text-sm sm:text-base text-[#71847B] leading-relaxed">
            Explore high-resolution looks of our real clients, custom fitting trial moments, boutique interior, and seasonal outfit edits.
          </p>
        </div>
      </section>

      <!-- Filterable Gallery Component -->
      <app-gallery-grid></app-gallery-grid>
    </main>
  `
})
export class GalleryComponent implements OnInit {
    private readonly seo = inject(SeoService);
    private readonly schema = inject(SchemaService);
    readonly whatsAppService = inject(WhatsAppService);

    ngOnInit(): void {
        this.seo.setMeta({
            title: "Women's Ethnic Wear & Boutique Gallery | Pehnava Ajmer",
            description: "Explore photos of real clients, store trial rooms, designer suits, short kurtis, and co-ord sets at Pehnava boutique in Ajmer.",
            url: '/gallery',
        });

        this.schema.injectBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Gallery', url: '/gallery' },
        ]);
    }
}
