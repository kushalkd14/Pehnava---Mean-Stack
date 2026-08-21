# Pehnava RJ01 — MEAN Stack

> Informational fashion boutique website for **Pehnava RJ01 (Pahnave Wale Bhaiya), Ajmer**, migrated from React/Vite to the **MEAN stack**.

[![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Overview

Pehnava RJ01 is a premium, responsive **informational boutique website** designed to present the store's collections, brand story, reviews, Instagram presence, physical store information, and WhatsApp enquiry experience.

The project has been migrated from the original React/Vite implementation to a modular MEAN architecture while preserving the existing visual identity and user experience.

### Current Scope

This release is **informational only**.

It does **not** include:

- Shopping cart
- Checkout
- Online payments
- Customer authentication/accounts
- Order management
- Inventory management
- Wishlist
- Coupons
- Shipping/delivery workflows
- Admin dashboard

Any future e-commerce functionality will be treated as a separate development phase based on the client's requirements at that time.

---

## Technology Stack

### Frontend

- **Angular 20**
- **TypeScript**
- **Tailwind CSS v4**
- Standalone Angular components
- Responsive mobile-first UI
- Custom Pehnava design tokens

### Backend

- **Node.js**
- **Express.js**
- **TypeScript**
- REST API
- Centralized error handling

### Database

- **MongoDB**
- **Mongoose**

### Supporting Technologies

- Google Fonts — **Bodoni Moda** and **Manrope**
- IntersectionObserver-based scroll reveal
- CSS marquee animations
- WhatsApp deep links
- Google Maps directions

---

## Architecture

```text
┌──────────────────────────────┐
│         Angular 20           │
│                              │
│ Pages / Components / UI      │
│ CatalogService / Modals      │
└──────────────┬───────────────┘
               │ HTTP
               ▼
┌──────────────────────────────┐
│       Express.js API         │
│                              │
│ Routes → Controllers → Models│
└──────────────┬───────────────┘
               │ Mongoose
               ▼
┌──────────────────────────────┐
│           MongoDB            │
│                              │
│ Collections / Looks / Store  │
└──────────────────────────────┘
```

The frontend also includes **fallback catalog/store data**, allowing the informational experience to remain usable when the API is temporarily unavailable during local development.

---

## Angular Component Architecture

The interface is split into reusable standalone components rather than a single monolithic component.

| Component | Purpose |
|---|---|
| `BrandLogoComponent` | Reusable Pehnava wordmark variants |
| `NavbarComponent` | Sticky desktop navigation and mobile drawer |
| `HeroComponent` | Editorial hero section and primary CTAs |
| `IntroSectionComponent` | Brand philosophy and boutique highlights |
| `EditorialEditsComponent` | Her Edit / His Edit campaign panels |
| `FeaturedLooksComponent` | Lookbook grid and category filters |
| `WhatsAppSectionComponent` | WhatsApp enquiry experience and quick prompts |
| `WhyPehnavaComponent` | Boutique value propositions |
| `CustomerReviewsComponent` | Dual continuous review marquees |
| `InstagramSectionComponent` | Instagram showcase grid |
| `AboutSectionComponent` | Brand story and store identity |
| `VisitUsComponent` | Store address, hours and directions |
| `FooterComponent` | Footer navigation and contact information |
| `FloatingWhatsAppComponent` | Scroll-triggered WhatsApp CTA |
| `WhatsAppModalComponent` | Inquiry composer modal |
| `LookModalComponent` | Lookbook quick-view modal |

---

## Key Features

### Boutique Lookbook

- Responsive lookbook gallery
- Category filtering
- Quick-view experience
- Fabric/detail information
- WhatsApp enquiry action

Supported filters include:

- All Looks
- Women
- Men
- Ethnic Wear
- Occasion Wear
- New Arrivals

### WhatsApp Enquiries

The website uses WhatsApp as the primary enquiry channel for the current informational phase.

- Preset inquiry prompts
- Custom message composer
- Direct WhatsApp launch
- Store timing information
- Look-specific enquiry messages

Official WhatsApp number used by the site:

`+91 80057 85709`

### Store Information

The website includes:

- Physical store address
- Opening hours
- Google Maps directions
- Store visit CTA
- Ajmer-focused boutique messaging

### Responsive Experience

The UI has been audited across desktop, tablet, and mobile breakpoints, with particular attention to:

- Mobile navigation drawer
- Modal viewport constraints
- Body scroll locking
- Horizontal overflow
- Touch-friendly controls
- Hero responsiveness
- Lookbook filters
- Fixed/floating WhatsApp controls
- Marquee behavior

---

## Visual Design System

The Pehnava visual system uses:

### Typography

- **Bodoni Moda** — editorial fashion headings / wordmark
- **Manrope** — body copy and interface text

### Palette

The design tokens include a combination of:

- Mint
- Sage
- Deep teal
- Dark teal
- Warm wood
- Rich gold
- Warm ivory
- Soft cream
- Terracotta
- Dusty rose

### Motion

The interface includes:

- Scroll reveal animations
- Luxury image hover scaling
- Dual opposing customer-review marquees
- Modal transitions
- Mobile drawer transitions
- Smooth anchor scrolling

Animations are implemented with performance-conscious CSS transforms where appropriate and respect reduced-motion preferences where supported.

---

## Backend API

Base API during local development:

```text
http://localhost:5000/api
```

### Health

```http
GET /api/health
```

Returns the API health/status payload.

### Products / Looks

```http
GET /api/products
GET /api/products/:id
```

Returns the informational lookbook/catalog data.

### Collections

```http
GET /api/collections
```

Returns the available boutique collections.

### Store

```http
GET /api/store
```

Returns the official store profile, contact details, opening hours, and address.

---

## Project Structure

```text
Pehnava---Mean-Stack/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── models/
│   │   ├── services/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seed.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── angular.json
├── package.json
├── proxy.conf.json
├── tsconfig.json
├── tsconfig.app.json
├── .env.example
└── README.md
```

---

## Local Development

### Prerequisites

Install:

- Node.js 20+
- npm
- MongoDB (local instance or a MongoDB deployment)

### 1. Install frontend dependencies

```bash
npm install
```

### 2. Install backend dependencies

```bash
npm --prefix server install
```

### 3. Configure environment variables

Create the required environment files from the provided examples.

Frontend / root configuration:

```text
.env.example
```

Backend configuration:

```text
server/.env.example
```

Do not commit real credentials or secrets.

### 4. Start the Express API

From the project root:

```bash
npm run server
```

The API runs on the configured backend port (5000 in the current local setup).

### 5. Start Angular

In another terminal:

```bash
npm start
```

Open:

```text
http://localhost:4200
```

The Angular development configuration proxies `/api/*` requests to the Express server.

---

## Database Seeding

The backend includes a seed script for the current informational catalog/store data.

From the project root:

```bash
npm --prefix server run seed
```

The seed populates the informational data used by the current website, including:

- Store profile
- Collections
- Lookbook entries

No commerce-related collections are required for the current release.

---

## Verification & QA

The project has completed a final production-oriented audit.

### Automated Verification

| Check | Result |
|---|---|
| Angular production build | ✅ Passed |
| Frontend TypeScript/lint check | ✅ Passed |
| Express backend build | ✅ Passed |
| API health check | ✅ Passed |
| API endpoints | ✅ Passed |
| API fallback resilience | ✅ Passed |
| React/Vite runtime cleanup | ✅ Passed |

### Responsive QA

| Viewport | Result |
|---|---|
| Desktop 1280–1920px | ✅ Passed |
| Tablet 768–1024px | ✅ Passed |
| Mobile 360–430px | ✅ Passed |

Specific mobile checks included:

- Mobile navigation drawer
- Drawer scroll lock/unlock
- Lookbook filter scrolling
- Look quick-view modal
- WhatsApp composer modal
- Fixed/floating WhatsApp button
- Horizontal overflow detection
- Touch target sizing
- Smooth scrolling
- Responsive typography and layout

### Stability Fixes Completed

The final audit also addressed:

- Tailwind v4/PostCSS processing
- Google Font build inlining reliability
- Modal/drawer body scroll-lock cleanup
- Footer back-to-top accessibility labeling
- Unused icon-library dependencies
- Safe browser API access

---

## Performance & UX Notes

The current implementation prioritizes a smooth boutique browsing experience without adding unnecessary application complexity.

Key measures include:

- CSS-transform-based marquee animation
- IntersectionObserver-based reveal behavior
- Responsive image handling
- Controlled modal scrolling
- Cleanup of global scroll-lock state
- Mobile overflow prevention
- API fallback behavior

---

## Security & Configuration

The current application does not expose authentication or payment functionality because those features are outside the present scope.

Configuration expectations:

- Keep MongoDB connection strings in environment variables.
- Keep production secrets out of source control.
- Use the provided `.env.example` files as templates only.
- Do not place private credentials in Angular client-side code.

---

## Deployment

The application can be deployed as separate frontend and backend services or through a compatible full-stack hosting setup.

A production deployment should provide:

- Angular static hosting/build output
- Node.js/Express runtime
- MongoDB connectivity
- Correct environment variables
- Production CORS configuration
- HTTPS

The current repository is prepared for the informational website phase. Hosting-specific configuration should be added according to the deployment provider selected for the project.

---

## Current Release Status

**Status: ✅ Production-ready for the current informational scope**

The website has completed the MEAN migration and final responsive/stability audit.

> **No known blocking issues remain for the current informational website scope.**

Future e-commerce functionality is intentionally excluded from this release and should be planned as a separate phase once the client confirms the requirements.

---

## License

This project is developed for **Pehnava RJ01 / Pahnave Wale Bhaiya, Ajmer**.

Project-specific branding, business content, images, and assets remain subject to the rights and permissions applicable to the client and their respective owners.
