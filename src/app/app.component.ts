import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingWhatsAppComponent } from './components/floating-whatsapp/floating-whatsapp.component';
import { WhatsAppModalComponent } from './components/whatsapp-modal/whatsapp-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SplashScreenComponent,
    NavbarComponent,
    FooterComponent,
    FloatingWhatsAppComponent,
    WhatsAppModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isWhatsAppModalOpen = false;

  handleOpenWhatsApp(): void {
    this.isWhatsAppModalOpen = true;
  }

  handleCloseWhatsApp(): void {
    this.isWhatsAppModalOpen = false;
  }
}
