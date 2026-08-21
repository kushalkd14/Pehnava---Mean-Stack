import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (visible()) {
      <div
        class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF8F3] transition-opacity duration-500"
        [ngClass]="{ 'opacity-0 pointer-events-none': fadingOut() }"
        aria-hidden="true"
      >
        <div class="flex flex-col items-center justify-center p-6 text-center animate-fade-in max-w-sm">
          <!-- Logo / Image in Circular Frame -->
          <div class="relative w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-[#155E5B] to-[#0E4543] p-1 shadow-xl flex items-center justify-center">
            <div class="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src="pehnava-logo.png"
                alt="Pehnava RJ01 Logo"
                class="w-full h-full object-cover rounded-full"
                loading="eager"
              />
            </div>
          </div>

          <!-- Brand Typography -->
          <div class="space-y-1 select-none">
            <h1 class="text-2xl font-bold tracking-tight text-[#155E5B] font-sans">
              PEHNAVA <span class="text-[#B8875A]">RJ01</span>
            </h1>
            <p class="text-xs uppercase tracking-[0.25em] font-medium text-[#71847B]">
              Fashion Boutique & Studio
            </p>
          </div>

          <!-- Soft Loading Line -->
          <div class="w-36 h-[2px] bg-[#EBF3EF] mt-8 rounded-full overflow-hidden relative">
            <div class="absolute inset-y-0 left-0 bg-[#155E5B] w-full animate-pulse"></div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SplashScreenComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  visible = signal<boolean>(true);
  fadingOut = signal<boolean>(false);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Fade out after 1.3 seconds, hide completely at 1.7s
      setTimeout(() => {
        this.fadingOut.set(true);
        setTimeout(() => {
          this.visible.set(false);
        }, 400);
      }, 1300);
    } else {
      this.visible.set(false);
    }
  }
}
