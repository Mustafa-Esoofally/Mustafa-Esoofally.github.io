"""Generate the 1200x630 social share image (public/og.png)."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
NAVY, CARD, AMBER, TEXT, MUTED = (11, 16, 30), (20, 27, 45), (245, 165, 36), (232, 237, 245), (150, 160, 180)
img = Image.new("RGB", (W, H), NAVY)

glow = Image.new("RGB", (W, H), NAVY)
ImageDraw.Draw(glow).ellipse((-200, -350, 700, 350), fill=(60, 45, 20))
img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(160)), 0.9)
d = ImageDraw.Draw(img)

def font(size, bold=False):
    for path in ["/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
                 "/Library/Fonts/Arial.ttf"]:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            pass
    return ImageFont.load_default()

d.rounded_rectangle((60, 60, W - 60, H - 60), radius=36, fill=CARD)

photo = Image.open("public/me.jpg").convert("RGB").resize((220, 220))
mask = Image.new("L", (220, 220), 0)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, 220, 220), radius=36, fill=255)
img.paste(photo, (W - 60 - 60 - 220, 110), mask)

d.rounded_rectangle((110, 110, 470, 150), radius=20, outline=(70, 80, 100), width=2)
d.ellipse((128, 124, 140, 136), fill=(34, 197, 94))
d.text((152, 118), "Open to Applied AI / FDE roles", font=font(20), fill=MUTED)

d.text((110, 185), "Mustafa Esoofally", font=font(68, True), fill=TEXT)
d.text((110, 270), "Applied AI Engineer · New York", font=font(32), fill=AMBER)
lines = ["I build the harness around agents - interfaces,", "approvals, integrations, context and memory."]
for i, line in enumerate(lines):
    d.text((110, 345 + i * 42), line, font=font(28), fill=TEXT)

d.text((110, 500), "Scout · Dash · Pal · Agno · Enterprise agents", font=font(22, True), fill=MUTED)
d.rectangle((110, 470, 190, 474), fill=AMBER)
img.save("public/og.png", optimize=True)
print("og ok")
