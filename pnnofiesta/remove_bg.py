from PIL import Image
import os

def remove_white_background(input_path, output_path, threshold=200):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Check if pixel is bright (white background)
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                newData.append((0, 0, 0, 0)) # Make transparent
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Process files
files = ["wand-final.png", "wand-final-glow.png"]
base_dir = "c:/Desktop/pnnofiesta/public/"

for f in files:
    path = os.path.join(base_dir, f)
    if os.path.exists(path):
        remove_white_background(path, path)
    else:
        # Try root if not in public (vite sometimes puts them in root during dev)
        path = os.path.join("c:/Desktop/pnnofiesta", f)
        if os.path.exists(path):
             remove_black_background(path, path)
        else:
            print(f"Could not find {f}")
