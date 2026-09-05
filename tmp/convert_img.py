import os
from PIL import Image

src_path = r"C:\Users\ASUS\.gemini\antigravity\brain\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\printed_kurti_park_1788578181469.png"
base_dir = r"d:\Work\freelance\Pehnava---Mean-Stack\src\assets\collections"

if os.path.exists(src_path):
    img = Image.open(src_path)
    # Save main webp
    main_out = os.path.join(base_dir, "new-arrivals.webp")
    img.save(main_out, "WEBP", quality=90)
    print(f"Saved {main_out}")

    # Save responsive sizes
    sizes = [1920, 1200, 800, 600]
    for w in sizes:
        if w < img.width:
            h = int(img.height * w / img.width)
            resized = img.resize((w, h), Image.Resampling.LANCZOS)
            out_p = os.path.join(base_dir, f"new-arrivals-{w}.webp")
            resized.save(out_p, "WEBP", quality=85)
            print(f"Saved {out_p}")
        else:
            out_p = os.path.join(base_dir, f"new-arrivals-{w}.webp")
            img.save(out_p, "WEBP", quality=85)
            print(f"Saved {out_p}")
    print("SUCCESS_CONVERT_NEW_ARRIVALS")
else:
    print("Source image not found!")
