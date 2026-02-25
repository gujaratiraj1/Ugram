import csv
import json

def csv_to_json(path, category, subcategory, base_img_dir):
    products = {}
    with open(path, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            code = row['CODE']
            name = row['NAME']
            if not name: continue
            if name not in products:
                products[name] = {
                    'id': f"{category[:2]}-{name.lower().replace(' ', '-')}",
                    'name': name,
                    'category': category,
                    'subcategory': subcategory,
                    'size': row['DIMENSIONS( MM)'],
                    'weight': row['WEIGHT / Pcs ( KG)'] + ' Kg',
                    'perBox': row.get('NO OF PIECES IN BOX', 'N/A'),
                    'description': f"Premium {name} {category.replace('-', ' ')} with elegant finish.",
                    'application': ['indoor', 'outdoor', 'facade'],
                    'image': f"{base_img_dir}/{code}.png",
                    'colours': []
                }
            products[name]['colours'].append({
                'name': row['COLOUR'],
                'code': code,
                'image': f"{base_img_dir}/{code}.png",
                'weight': row['WEIGHT / Pcs ( KG)'] + ' Kg'
            })
    return list(products.values())

wall_tiles = csv_to_json(r'c:\Users\HI\Ugram\images\UGRAM - WALL TILES\UGRAM - WALL TILES.csv', 'wall-tile', 'wall-tile', 'images/UGRAM - WALL TILES')
railing_pillars = csv_to_json(r'c:\Users\HI\Ugram\images\UGRAM RAILING PILLAR\UGRAM RAILING PILLAR.csv', 'railing-pillar', 'railing-pillar', 'images/UGRAM RAILING PILLAR')

all_data = {
    'wall_tiles': wall_tiles,
    'railing_pillars': railing_pillars
}

with open('output_data.json', 'w') as f:
    json.dump(all_data, f, indent=4)
