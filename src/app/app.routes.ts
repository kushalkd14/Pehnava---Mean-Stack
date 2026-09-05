import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
        title: 'Pehnava | Luxury Women’s Fashion Boutique Ajmer',
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
        title: 'About Pehnava | Boutique Story & Legacy',
    },
    {
        path: 'collections',
        loadComponent: () => import('./pages/collections/collections.component').then((m) => m.CollectionsComponent),
        title: 'Women’s Boutique Collections | Premium Kurtis, Suits & Co-Ords | Pehnava',
    },
    {
        path: 'collections/:slug',
        loadComponent: () =>
            import('./pages/collection-detail/collection-detail.component').then((m) => m.CollectionDetailPageComponent),
    },
    {
        path: 'gallery',
        loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
        title: 'Client & Boutique Gallery | Pehnava Rajasthan',
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
        title: 'Contact Pehnava | Store Location, Hours & WhatsApp Enquiry',
    },
    {
        path: 'terms',
        loadComponent: () => import('./pages/terms/terms.component').then((m) => m.TermsComponent),
        title: 'Terms & Conditions | Pehnava Ajmer',
    },
    {
        path: 'privacy',
        loadComponent: () => import('./pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
        title: 'Privacy Policy | Pehnava Ajmer',
    },
    {
        path: '404',
        loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
        title: '404 - Page Not Found | Pehnava',
    },
    {
        path: '**',
        redirectTo: '404',
    },
];
