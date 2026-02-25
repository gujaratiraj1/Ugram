# UGRAM™ — Product Data Structuring Report
## Wall Tiles & Railing Pillars Integration
**Date:** 2026-02-25  
**Status:** ✅ Complete — All data structured, mapped, and integrated

---

## 1. Folder Structure Analysis

### Source Directories
| Folder | Images | Data File | Code Prefix |
|--------|--------|-----------|-------------|
| `UGRAM - 3D TILES` | 38 PNGs | `UGRAM - 3D TILES.csv` | `12xxx` |
| `UGRAM - WALL TILES` | 73 PNGs | `UGRAM - WALL TILES.csv` | `13xxx` |
| `UGRAM RAILING PILLAR` | 9 PNGs | `UGRAM RAILING PILLAR.xlsx` → converted to `.csv` | `14xxx` |

---

## 2. Data Format (Replicating 3D Tiles Standard)

Every product follows the **identical** JavaScript object structure used by the existing 3D Tiles:

```javascript
{
    id: '{prefix}-{name}',       // e.g., 'wt-verona', 'rp-roman-1'
    name: '{Display Name}',
    category: '{category-slug}', // 'wall-tile' | 'railing-pillar'
    subcategory: '{sub-slug}',
    size: '{W × H mm}',
    weight: '{X.XX} Kg',
    perBox: {number},
    sqftPerBox: {number},        // where applicable
    pcsPerSqFt: {number},        // where applicable
    description: '{product desc}',
    application: ['{tag1}', '{tag2}'],
    image: '{path/to/primary.png}',
    colours: [
        { name: '{Colour}', code: '{SKU}', image: '{path}.png', weight: '{X.XX} Kg' }
    ]
}
```

---

## 3. Wall Tiles — Structured Dataset (15 Products, 73 SKUs)

| # | Product ID | Name | SKU Range | Size (mm) | Colours | Per Box |
|---|-----------|------|-----------|-----------|---------|---------|
| 1 | wt-verona | Verona | 13001–13005 | 198 × 99 | 5 (W/R/G/O/Br) | 20 |
| 2 | wt-natura | Natura | 13011–13013 | 266 × 99 | 3 (W/R/G) | 20 |
| 3 | wt-florina | Florina | 13021–13025 | 127 × 128 | 5 (W/R/G/O/Br) | 20 |
| 4 | wt-olymia | Olymia | 13031–13034 | 266 × 99 | 4 (W/R/G/O) | 20 |
| 5 | wt-rivoli | Rivoli | 13041–13045 | 300 × 147 | 5 (W/R/G/O/Br) | 16 |
| 6 | wt-sofia | Sofia | 13051–13055 | 221 × 73 | 5 (W/R/G/O/Br) | 40 |
| 7 | wt-spark | Spark | 13061–13065 | 225 × 75 | 5 (W/R/G/O/Ol) | 30 |
| 8 | wt-onix | Onix | 13071–13075 | 221 × 37 | 5 (W/R/G/O/Br) | 20 |
| 9 | wt-diamond | Diamond | 13081–13085 | 200 × 100 | 5 (W/R/G/O/Br) | 30 |
| 10 | wt-coral | Coral | 13091–13095 | 221 × 73 | 5 (W/R/G/Br/O) | 40 |
| 11 | wt-strip | Strip | 13101–13105 | 300 × 75 | 5 (W/R/G/O/Br) | 30 |
| 12 | wt-hexa | Hexa | 13111–13115 | Hexagonal | 5 (W/R/G/O/Br) | 14 |
| 13 | wt-stone | Stone Wall | 13121–13125 | 250 × 125 | 5 (W/R/G/O/Br) | 16 |
| 14 | wt-rustic | Rustic | 13131–13135 | 215 × 75 | 5 (W/R/G/O/Br) | 40 |
| 15 | wt-brick | Brick | 13151–13156 | 480 × 170 | 6 (W/R/G/O/Y/Br) | 6 |

---

## 4. Railing Pillars — Structured Dataset (7 Products, 9 SKUs)

| # | Product ID | Name | SKU Range | Size | Colours | Weight |
|---|-----------|------|-----------|------|---------|--------|
| 1 | rp-roman-1 | Roman Pillar I | 14001 | 24″ × 95mm | 1 (W) | 7.5 Kg |
| 2 | rp-roman-2 | Roman Pillar II | 14011 | 24″ × 95mm | 1 (W) | 7.7 Kg |
| 3 | rp-roman-3 | Roman Pillar III | 14021–14022 | 24″ × 95mm | 2 (W/R) | 7.8 Kg |
| 4 | rp-roman-4 | Roman Pillar IV | 14031 | 24″ × 95mm | 1 (W) | 5.3 Kg |
| 5 | rp-copping | Copping | 14041 | 24″ | 1 (W) | 7.2 Kg |
| 6 | rp-rectangle-lock | Rectangle Lock | 14051–14052 | 230×60×60mm | 2 (W/R) | 1.4 Kg |
| 7 | rp-round-lock | Round Lock | 14061 | 230×60×60mm | 1 (W) | 1.3 Kg |

---

## 5. SKU Naming Convention

All categories follow the same UGRAM SKU system:

| Prefix | Category | Example |
|--------|----------|---------|
| `10xxx` | Breeze Blocks — Single Side | 10001 = Petal White |
| `101xx` | Breeze Blocks — Double Side | 10101 = Petal DSF White |
| `12xxx` | 3D Tiles | 12001 = Emboss White |
| `13xxx` | Wall Tiles | 13001 = Verona White |
| `14xxx` | Railing Pillars | 14001 = Roman Pillar I White |

Within each product group, the **last digit** indicates the colour variant:
- `1` = White (primary)
- `2` = Red
- `3` = Grey
- `4` = Orange
- `5` = Brown / Yellow / Olive (varies)
- `6` = Black / Brown / additional

---

## 6. Audit Results

### ✅ Image Verification
- **193 unique images** referenced in `script.js`
- **193 / 193 images** found on disk (100% match)
- **0 missing images**
- **0 unreferenced Wall Tile images** (all 73 mapped)
- **0 unreferenced Railing Pillar images** (all 9 mapped)

### ✅ Data Integrity
- No duplicate SKU codes
- All product IDs unique across categories
- Colour swatches correctly map (White, Red, Grey, Orange, Brown, Black, Yellow, Olive)
- Per-box quantities, weight, and dimensions correctly transferred from source Excel/CSV

---

## 7. Corrections Applied

### Wall Tiles CSV
| Issue | Resolution |
|-------|-----------|
| Missing `13032` (Olymia Red) entry | Added: `13032,OLYMIA,267 X 99,RED,0.77,3.51,20,5.7` |
| Missing `13095` (Coral Orange) entry | Added: `13095,CORAL,221 X 73,ORANGE,0.4,5.71,40,7` |
| Missing `13105` (Strip Brown) entry | Added: `13105,STRIP,300 X 75,BROWN,0.51,4,30,7.5` |
| `13035` (Olymia Brown) — no image file | Omitted from web integration (CSV-only) |
| `13141-13145` (Emilia Stone) — no image files | Omitted from web integration (CSV-only) |

### Railing Pillar XLSX
| Issue | Resolution |
|-------|-----------|
| Data was in `.xlsx` format while 3D Tiles used `.csv` | Converted to standardized `.csv` format |
| Different column headers (DESCRIPTION, no PCS counts) | Mapped to consistent structure in JS |

---

## 8. Files Created/Modified

| File | Action |
|------|--------|
| `images/UGRAM RAILING PILLAR/UGRAM RAILING PILLAR.csv` | **Created** — Normalized CSV from XLSX |
| `images/UGRAM - WALL TILES/UGRAM - WALL TILES.csv` | **Updated** — Added 3 missing entries |
| `script.js` | **Updated** — Added 15 Wall Tile + 7 Railing Pillar products |
| `index.html` | **Updated** — Added filter options + footer links |
| `output_data.json` | **Created** — JSON export of structured data |
| `convert_data.py` | **Created** — Conversion utility |
| `audit.js` | **Created** — Data integrity audit tool |

---

## 9. Suggestions for Improvement

1. **Missing Images for CSV entries:** `13035` (Olymia Brown), `13141–13145` (Emilia Stone) have CSV data but no images. Consider adding product photos.
2. **Railing Pillar Colours:** Most railing pillars only come in White. Consider expanding to Red/Grey/Orange like other categories.
3. **Box Quantities for Pillars:** Currently set to 1. Confirm if bulk packaging exists (e.g., 4/crate).
4. **Emilia Stone (131xx):** 5 SKUs in CSV with no images — either source photos or remove from CSV.
5. **Olymia Series:** Consider adding the missing Brown (13035) product image for completeness.
