# Pehnava Asset Management & Documentation

This directory contains all optimized local visual assets for **Pehnava** (Pahnave Wale Bhaiya), categorized from Instagram posts, boutique showcase photography, and store imagery.

---

## 1. Folder Structure

```
src/assets/
├── hero/          # Above-the-fold hero banners (main & collection specific)
├── collections/   # Product images organized by boutique collections
├── gallery/       # Visual showcase & masonry gallery grid images
├── store/         # Store ambiance & interior photographs
└── customers/     # Customer showcase & testimonial photos
```

---

## 2. Naming Conventions

All images must use lower-case slugified WebP format for optimal performance and SEO compliance.

### Examples:
- **Hero Banners**: `hero-main.webp`, `hero-bridal.webp`, `hero-sarees.webp`, `hero-lehenga.webp`
- **Collections**: `bridal-01.webp`, `bridal-02.webp`, `saree-01.webp`, `lehenga-01.webp`, `gowns-01.webp`, `partywear-01.webp`, `kurtis-01.webp`, `suits-01.webp`, `festive-01.webp`
- **Store Showcase**: `store-01.webp`, `store-02.webp`, `store-03.webp`
- **Customer Showcase**: `customer-01.webp`, `customer-02.webp`, `customer-03.webp`
- **Responsive Variants**: `[name]-[width].webp` (e.g. `bridal-01-600.webp`, `bridal-01-800.webp`, `bridal-01-1200.webp`, `bridal-01-1920.webp`)

---

## 3. Required Image Dimensions & Resolutions

| Image Type | Primary Resolution | Responsive Widths | Aspect Ratio | Loading Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Banners** | `1920 x 1080` (or `1920 x 800`) | 1920, 1200, 800, 600 | 16:9 or 21:9 | Eager (`loading="eager"`, priority) |
| **Collection Cards & Products** | `1200 x 1500` (or `800 x 1000`) | 1200, 800, 600 | 4:5 Portrait | Lazy (`loading="lazy"`) |
| **Instagram Visual Grid** | `800 x 800` | 800, 600 | 1:1 Square / 4:5 | Lazy (`loading="lazy"`) |
| **Store & Ambience** | `1920 x 1080` | 1920, 1200, 800 | 16:9 | Lazy (`loading="lazy"`) |
| **Customer Testimonials** | `800 x 1000` | 800, 600 | 4:5 Portrait | Lazy (`loading="lazy"`) |

---

## 4. How to Replace or Add New Instagram Images Without Changing Code

1. **Format & Conversion**:
   Convert any new Instagram photo into WebP format (`.webp`) using `cwebp`, Node Sharp, or Photoshop WebP plugin.

2. **File Naming & Overwriting**:
   - To replace an existing post/product, save the file with the same name inside the corresponding subfolder (e.g., place `bridal-01.webp` inside `src/assets/collections/`).
   - To add a new collection item or post without touching Angular logic, add the new WebP file (e.g., `bridal-03.webp`) and update the central catalog metadata file at `src/app/data/fashionData.ts`.

3. **Zero Hotlinking Rule**:
   Never hotlink Instagram CDN URLs (`instagram.fxxx.fbcdn.net`). All images must be stored locally in `src/assets/` to ensure offline support, lightning-fast WebP loading, and no broken links.
