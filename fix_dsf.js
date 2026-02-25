const fs = require('fs');
const path = require('path');

// Read CSV
const csv = fs.readFileSync('c:/Users/HI/Ugram/images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH.csv', 'utf8');
const lines = csv.trim().split('\n');
const header = lines[0];
const rows = lines.slice(1).map(l => {
    const parts = l.split(',');
    return {
        code: parts[0].trim(),
        name: parts[1].trim(),
        dimensions: parts[2].trim(),
        colour: parts[3].trim(),
        weight: parts[4].trim(),
        perBox: parseInt(parts[5].trim()) || 5
    };
});

// Group by product name
const products = {};
rows.forEach(r => {
    if (!products[r.name]) {
        products[r.name] = {
            name: r.name,
            dimensions: r.dimensions,
            perBox: r.perBox,
            colours: []
        };
    }
    products[r.name].colours.push(r);
});

// Check which images exist
const imgDir = 'c:/Users/HI/Ugram/images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH';
const imgPath = code => `images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/${code}.png`;

// Generate JS product entries
const imgBase = 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH';
let jsEntries = [];

// Map colour names to proper case
const colourFix = {
    'RED': 'Red', 'WHITE': 'White', 'GREY': 'Grey', 'ORANGE': 'Orange',
    'RED ': 'Red', 'DARK GREY': 'Dark Grey'
};

// Simple slugify
function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// Descriptions for each product
const desc = {
    'TEMPLE': 'Temple-inspired geometric pattern with double-side finish for elegant architectural screens.',
    'PETAL': 'Soft petal curves with premium double-side finish. Both faces polished for freestanding partitions.',
    'AMBER': 'Amber-toned faceted design with double-side finish, ideal for boundary walls and facades.',
    'OPEL': 'Bold angular cuts creating striking shadow patterns on both finished faces.',
    'THE X -FACTOR': 'Dynamic X-shaped negative space design. A statement block for modern feature walls.',
    'ROMAN': 'Classical Roman arch inspired block with symmetric double-side finish for grand partitions.',
    '5 SIDE BEAUITY': 'Five-sided geometric beauty with identical finish on both faces for decorative screens.',
    'SLICE NEW': 'Clean diagonal slice pattern creating modern linear art on both exposed faces.',
    '3D CORNER SQUARE': '3D corner square pattern adding bold depth and dimension to both wall faces.',
    '3D TWO LINING': 'Dual parallel lines creating rhythmic texture visible from both sides.',
    'SLICE': 'Minimalist sliced design offering privacy with airflow. Clean double-side finish.',
    'POST OFFICE': 'Envelope-inspired aperture pattern for secure yet ventilated double-side barriers.',
    'LINING': 'Elongated linear block with clean horizontal lines, finished on both sides.',
    'CAPSULE': 'Rounded capsule-shaped openings for soft, modern ventilation screens.',
    'WAVES': 'Flowing wave contours creating organic rhythm on elongated double-side blocks.',
    'RECTANGLE': 'Clean rectangular apertures for minimalist, structured facade patterns.',
    'W': 'Bold W-shaped negative space design creating dramatic shadow interplay.',
    'BW': 'Large-format block-wave pattern for statement architectural installations.',
    'BARFI': 'Diamond grid pattern inspired by traditional motifs, finished on both faces.',
    '3D SINGLE LINING': 'Single linear groove creating subtle 3D depth on both polished faces.',
    'CLOSE MIRROR': 'Mirrored closed pattern providing maximum privacy with architectural style.',
    'OPEN MIRROR': 'Open mirrored apertures blending transparency with symmetrical design.',
    '4 - WINDOW': 'Four-window grid pattern allowing light and air while maintaining structure.',
    'Z': 'Dynamic Z-shaped cut creating bold geometric statements on both faces.',
    'MANGULU': 'Large-format angular design for grand architectural installations.',
    'SWASTIK': 'Traditional swastik motif reinterpreted in modern double-side concrete.',
    'CAMP': 'Tent-like angular openings creating dynamic light patterns through both faces.'
};

// Application tags
const apps = {
    'LINING': ['facade', 'partition'],
    'CAPSULE': ['facade', 'partition'],
    'WAVES': ['facade', 'partition'],
    'RECTANGLE': ['facade', 'partition'],
    'BW': ['facade', 'outdoor', 'feature-wall'],
    'BARFI': ['facade', 'outdoor', 'feature-wall'],
    'MANGULU': ['facade', 'outdoor', 'feature-wall'],
    'SWASTIK': ['partition', 'indoor', 'feature-wall'],
};
const defaultApps = ['partition', 'facade', 'outdoor'];

Object.values(products).forEach(p => {
    const id = 'ds-' + slugify(p.name);
    const firstCode = p.colours[0].code;
    const firstWeight = p.colours[0].weight;
    const size = p.dimensions.replace(/\*/g, ' x ').replace(/MM/gi, 'mm');
    const application = apps[p.name] || defaultApps;

    const colourEntries = p.colours.map(c => {
        const colName = colourFix[c.colour] || c.colour;
        const imgFile = `${imgBase}/${c.code}.png`;
        // Check if image exists
        const exists = fs.existsSync(path.join(imgDir, c.code + '.png'));
        if (!exists) {
            console.log('WARNING: Missing image for', c.code, c.name, c.colour);
        }
        return `                { name: '${colName}', code: '${c.code}', image: '${imgFile}', weight: '${c.weight} Kg' }`;
    });

    const entry = `        {
            id: '${id}',
            name: '${p.name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ').replace(/  +/g, ' ').trim()}',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '${size}',
            weight: '${firstWeight} Kg',
            perBox: ${p.perBox},
            description: '${(desc[p.name] || 'Premium double-side finish breeze block for architectural applications.').replace(/'/g, "\\'")}',
            application: [${application.map(a => `'${a}'`).join(', ')}],
            image: '${imgBase}/${firstCode}.png',
            colours: [
${colourEntries.join(',\n')}
            ]
        }`;
    jsEntries.push(entry);
});

// Build the replacement section
const replacement = `
        // =====================================================================
        // BREEZE BLOCKS -- DOUBLE SIDE FINISH (from CSV data)
        // =====================================================================
${jsEntries.join(',\n')},
`;

// Read the current script.js
const script = fs.readFileSync('c:/Users/HI/Ugram/script.js', 'utf8');

// Find the section to replace (lines 181-350 approximately)
const startMarker = '        // =====================================================================\r\n        // BREEZE BLOCKS \u2014 DOUBLE SIDE FINISH';
const endMarker = '        // =====================================================================\r\n        // 3D TILES (from CSV data)';

let startIdx = script.indexOf('// BREEZE BLOCKS');
// Find the double side one specifically
const dsfIdx = script.indexOf('DOUBLE SIDE FINISH', startIdx);
// Go back to find the comment block start
let blockStart = script.lastIndexOf('// ===', dsfIdx);
blockStart = script.lastIndexOf('\n', blockStart) + 1;

// Find where 3D tiles section starts
const tilesIdx = script.indexOf('// 3D TILES');
let blockEnd = script.lastIndexOf('// ===', tilesIdx);
blockEnd = script.lastIndexOf('\n', blockEnd) + 1;

console.log('Replacing from offset', blockStart, 'to', blockEnd);
console.log('Products generated:', Object.keys(products).length);

const newScript = script.substring(0, blockStart) + replacement + '\n' + script.substring(blockEnd);

// Verify syntax
try {
    new Function(newScript);
    console.log('SYNTAX: OK');
    fs.writeFileSync('c:/Users/HI/Ugram/script.js', newScript, 'utf8');
    console.log('script.js updated successfully!');
} catch (e) {
    console.log('SYNTAX ERROR:', e.message);
    fs.writeFileSync('c:/Users/HI/Ugram/script_dsf_fix.js', newScript, 'utf8');
    console.log('Written to script_dsf_fix.js for inspection');
}
