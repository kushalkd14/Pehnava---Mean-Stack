import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SeoService } from '../../services/seo.service';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
    selector: 'app-not-found-page',
    standalone: true,
    imports: [CommonModule, RouterLink, IconComponent],
    template: `
    <main class="pt-28 pb-20 min-h-[75vh] flex items-center justify-center bg-[#FAF8F3]">
      <div class="max-w-md w-full mx-auto px-4 text-center">
        <div class="w-16 h-16 rounded-full bg-[#DDEFE6] text-[#155E5B] flex items-center justify-center mx-auto mb-6 shadow-xs">
          <app-icon name="sparkles" [size]="28" customClass="text-[#B8875A]"></app-icon>
        </div>

        <span class="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8875A]">
          Error 404
        </span>
        <h1 class="text-3xl sm:text-4xl font-bold text-[#155E5B] mt-2 mb-4 font-sans">
          Page Not Found
        </h1>
        <p class="text-sm text-[#71847B] leading-relaxed mb-8">
          The page or outfit collection you are looking for might have been moved or is no longer available at Pehnava.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            routerLink="/"
            class="w-full sm:w-auto btn-pehnava-primary px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs"
          >
            <app-icon name="arrow-left" [size]="14"></app-icon>
            <span>Return to Homepage</span>
          </a>

          <a
            routerLink="/collections"
            class="w-full sm:w-auto btn-pehnava-secondary px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            <span>Explore Collections</span>
          </a>
        </div>
      </div>
    </main>
  `
})
export class NotFoundComponent implements OnInit {
    private readonly seo = inject(SeoService);
    readonly whatsAppService = inject(WhatsAppService);

    ngOnInit(): void {
        this.seo.setMeta({
            title: '404 - Page Not Found | Pehnava',
            description: 'The requested page could not be found on Pehnava boutique website.',
            robots: 'noindex, follow',
            url: '/404',
        });
    }
}
