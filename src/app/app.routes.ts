import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Pehnava RJ01 | Luxury Women’s Fashion Boutique Ajmer',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Pehnava RJ01 | Boutique Story & Legacy',
  },
  {
    path: 'collections',
    loadComponent: () => import('./pages/collections/collections.component').then((m) => m.CollectionsComponent),
    title: 'Women’s Boutique Collections | Premium Kurtis, Suits & Co-Ords | Pehnava RJ01',
  },
  {
    path: 'collections/:slug',
    loadComponent: () =>
      import('./pages/collection-detail/collection-detail.component').then((m) => m.CollectionDetailPageComponent),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    title: 'Client & Boutique Gallery | Pehnava RJ01 Rajasthan',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Pehnava RJ01 | Store Location, Hours & WhatsApp Enquiry',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
