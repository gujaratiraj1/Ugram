const fs = require('fs');
const path = require('path');

// Read script.js and extract product image references
const code = fs.readFileSync('c:/Users/HI/Ugram/script.js', 'utf8');

// Extract all image paths from the JS
const imageRefs = [];
const imageRegex = /image: '([^']+)'/g;
let m;
while ((m = imageRegex.exec(code)) !== null) {
    imageRefs.push(m[1]);
}

// Unique image paths
const uniqueImages = [...new Set(imageRefs)];

// Check which image files exist
const missing = [];
const found = [];
uniqueImages.forEach(img => {
    const fullPath = path.join('c:/Users/HI/Ugram', img);
    if (fs.existsSync(fullPath)) {
        found.push(img);
    } else {
        missing.push(img);
    }
});

// Count products by id prefix
const idRegex = /id: '([^']+)'/g;
const ids = [];
while ((m = idRegex.exec(code)) !== null) {
    ids.push(m[1]);
}

// Categorize
const breeze = ids.filter(id => id.startsWith('ss-') || id.startsWith('ds-'));
const tiles3d = ids.filter(id => id.startsWith('3d-'));
const wallTiles = ids.filter(id => id.startsWith('wt-'));
const railingPillars = ids.filter(id => id.startsWith('rp-'));

console.log('=== UGRAM PRODUCT DATA AUDIT ===');
console.log('');
console.log('PRODUCT COUNT BY CATEGORY:');
console.log('  Breeze Blocks (SS+DS):', breeze.length);
console.log('  3D Tiles:', tiles3d.length);
console.log('  Wall Tiles:', wallTiles.length);
console.log('  Railing Pillars:', railingPillars.length);
console.log('  TOTAL PRODUCTS:', breeze.length + tiles3d.length + wallTiles.length + railingPillars.length);
console.log('');
console.log('WALL TILE PRODUCTS:');
wallTiles.forEach(id => console.log('  -', id));
console.log('');
console.log('RAILING PILLAR PRODUCTS:');
railingPillars.forEach(id => console.log('  -', id));
console.log('');
console.log('IMAGE REFERENCES:');
console.log('  Total unique images referenced:', uniqueImages.length);
console.log('  Images found on disk:', found.length);
console.log('  Images MISSING on disk:', missing.length);
if (missing.length > 0) {
    console.log('');
    console.log('MISSING IMAGES:');
    missing.forEach(img => console.log('  !! ', img));
}

// Check for unreferenced Wall Tile images
const wallTileDir = 'c:/Users/HI/Ugram/images/UGRAM - WALL TILES';
const wallTileFiles = fs.readdirSync(wallTileDir).filter(f => f.endsWith('.png'));
const referencedWallCodes = uniqueImages
    .filter(p => p.includes('WALL TILES'))
    .map(p => path.basename(p, '.png'));
const unreferencedWallFiles = wallTileFiles.filter(f => !referencedWallCodes.includes(f.replace('.png', '')));

console.log('');
console.log('WALL TILES - UNREFERENCED IMAGES (exist on disk but not in JS):');
if (unreferencedWallFiles.length === 0) {
    console.log('  None - all images referenced!');
} else {
    unreferencedWallFiles.forEach(f => console.log('  ~', f));
}

// Check for unreferenced Railing Pillar images
const railingDir = 'c:/Users/HI/Ugram/images/UGRAM RAILING PILLAR';
const railingFiles = fs.readdirSync(railingDir).filter(f => f.endsWith('.png'));
const referencedRailingCodes = uniqueImages
    .filter(p => p.includes('RAILING PILLAR'))
    .map(p => path.basename(p, '.png'));
const unreferencedRailingFiles = railingFiles.filter(f => !referencedRailingCodes.includes(f.replace('.png', '')));

console.log('');
console.log('RAILING PILLARS - UNREFERENCED IMAGES (exist on disk but not in JS):');
if (unreferencedRailingFiles.length === 0) {
    console.log('  None - all images referenced!');
} else {
    unreferencedRailingFiles.forEach(f => console.log('  ~', f));
}

console.log('');
console.log('=== AUDIT COMPLETE ===');
