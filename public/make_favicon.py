from PIL import Image, ImageDraw

def add_corners(im, rad):
    circle = Image.new('L', (rad * 2, rad * 2), 0)
    draw = ImageDraw.Draw(circle)
    draw.ellipse((0, 0, rad * 2 - 1, rad * 2 - 1), fill=255)
    alpha = Image.new('L', im.size, 255)
    w, h = im.size
    alpha.paste(circle.crop((0, 0, rad, rad)), (0, 0))
    alpha.paste(circle.crop((0, rad, rad, rad * 2)), (0, h - rad))
    alpha.paste(circle.crop((rad, 0, rad * 2, rad)), (w - rad, 0))
    alpha.paste(circle.crop((rad, rad, rad * 2, rad * 2)), (w - rad, h - rad))
    im.putalpha(alpha)
    return im

try:
    # Open the image
    img = Image.open("magnetar-logo-real.jpg").convert("RGBA")
    
    # Make it a perfect square
    w, h = img.size
    min_dim = min(w, h)
    left = (w - min_dim) / 2
    top = (h - min_dim) / 2
    right = (w + min_dim) / 2
    bottom = (h + min_dim) / 2
    img = img.crop((left, top, right, bottom))
    
    # Apply squircle (22% radius is typical for Apple icons)
    rad = int(min_dim * 0.22)
    img = add_corners(img, rad)
    
    # Resize to standard icon sizes
    img_apple = img.resize((180, 180), Image.Resampling.LANCZOS)
    img_favicon = img.resize((32, 32), Image.Resampling.LANCZOS)
    img_ico = img.resize((256, 256), Image.Resampling.LANCZOS)
    
    # Save files
    img_apple.save("apple-touch-icon.png", format="PNG")
    img_favicon.save("favicon.png", format="PNG")
    img_ico.save("favicon.ico", format="ICO")
    print("Icons generated successfully!")
except Exception as e:
    print(f"Error: {e}")
