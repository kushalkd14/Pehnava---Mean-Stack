import os
import urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageFilter

base_dir = r"d:\Work\freelance\Pehnava---Mean-Stack\src\assets"

folders = [
    "hero",
    "collections",
    "gallery",
    "store",
    "customers"
]

for f in folders:
    os.makedirs(os.path.join(base_dir, f), exist_ok=True)

# High quality fashion imagery sources
image_sources = {
    "hero/hero-01.webp": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1920&auto=format&fit=crop",
    "hero/hero-02.webp": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    "collections/bridal-01.webp": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    "collections/bridal-02.webp": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
    "collections/lehenga-01.webp": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    "collections/lehenga-02.webp": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop",
    "collections/saree-01.webp": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    "collections/saree-02.webp": "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop",
    "collections/gown-01.webp": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop",
    "collections/gown-02.webp": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    "collections/party-01.webp": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    "collections/kurti-01.webp": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    "collections/suit-01.webp": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop",
    "collections/festive-01.webp": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    "collections/new-01.webp": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    "gallery/gallery-01.webp": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    "gallery/gallery-02.webp": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    "gallery/gallery-03.webp": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop",
    "gallery/gallery-04.webp": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    "gallery/gallery-05.webp": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop",
    "gallery/gallery-06.webp": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    "store/store-01.webp": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop",
    "store/store-02.webp": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    "customers/customer-01.webp": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    "customers/customer-02.webp": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
}

print("Starting WebP asset processing...")
req_headers = {'User-Agent': 'Mozilla/5.0'}

for rel_path, url in image_sources.items():
    full_path = os.path.join(base_dir, rel_path)
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req) as resp:
            img = Image.open(resp)
            img = img.convert('RGB')
            # Save optimized WebP
            img.save(full_path, 'WEBP', quality=85)
            print(f"Successfully saved {rel_path} ({img.size[0]}x{img.size[1]})")
    except Exception as e:
        print(f"Error downloading {url} for {rel_path}: {e}")
