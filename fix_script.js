const fs = require('fs');

const buf = fs.readFileSync('c:/Users/HI/Ugram/script.js');

// Good UTF-8 head (lines 1-183, single side blocks + comment header)
let firstNull = buf.indexOf(0);
let goodEnd = firstNull;
while (goodEnd > 0 && buf[goodEnd] !== 10) goodEnd--;
const head = buf.toString('utf8', 0, goodEnd + 1);

// Good UTF-8 tail (3D tiles onward + render functions + everything)
let lastNull = buf.lastIndexOf(0);
let resumeAt = lastNull + 1;
while (resumeAt < buf.length && (buf[resumeAt] === 0 || buf[resumeAt] === 13 || buf[resumeAt] === 10)) resumeAt++;
// The tail starts with a comma - we need to skip that since our DSF section will end properly
let tail = buf.toString('utf8', resumeAt);
// Remove leading comma if present
tail = tail.replace(/^\s*,\s*/, '');

// Reconstruct the Double Side Finish section
const dsf = `
        // =====================================================================
        // BREEZE BLOCKS -- DOUBLE SIDE FINISH (from image folder)
        // =====================================================================
        {
            id: 'ds-petal',
            name: 'Petal',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200 x 200 x 60 mm',
            weight: '2.8 Kg',
            perBox: 5,
            description: 'Soft, organic curves with premium double-side finish. Both faces are polished for freestanding partitions.',
            application: ['partition', 'indoor', 'feature-wall'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10101.png',
            colours: [
                { name: 'White', code: '10101', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10101.png', weight: '2.8 Kg' },
                { name: 'Red', code: '10102', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10102.png', weight: '2.8 Kg' },
                { name: 'Orange', code: '10103', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10103.png', weight: '2.7 Kg' },
                { name: 'Grey', code: '10104', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10104.png', weight: '2.6 Kg' }
            ]
        },
        {
            id: 'ds-seaform',
            name: 'Seaform',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200 x 200 x 60 mm',
            weight: '3.7 Kg',
            perBox: 5,
            description: 'Fluid organic waves with double-side finish. Finished on both faces for room dividers and open partitions.',
            application: ['partition', 'indoor', 'facade'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10111.png',
            colours: [
                { name: 'White', code: '10111', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10111.png', weight: '3.7 Kg' },
                { name: 'Red', code: '10112', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10112.png', weight: '3.6 Kg' },
                { name: 'Orange', code: '10113', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10113.png', weight: '3.7 Kg' },
                { name: 'Grey', code: '10114', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10114.png', weight: '3.5 Kg' }
            ]
        },
        {
            id: 'ds-mountain',
            name: 'Mountain',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200 x 200 x 60 mm',
            weight: '3.2 Kg',
            perBox: 5,
            description: 'Triangular peaks with double-side finish. Both faces identical for freestanding compound walls.',
            application: ['fence', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10121.png',
            colours: [
                { name: 'White', code: '10121', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10121.png', weight: '3.2 Kg' },
                { name: 'Red', code: '10122', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10122.png', weight: '3.4 Kg' },
                { name: 'Orange', code: '10123', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10123.png', weight: '3.1 Kg' },
                { name: 'Grey', code: '10124', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10124.png', weight: '3.2 Kg' }
            ]
        },
        {
            id: 'ds-stonee',
            name: 'Stonee',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200 x 200 x 60 mm',
            weight: '2.6 Kg',
            perBox: 5,
            description: 'Raw stone texture finished on both sides for boundary walls and outdoor partitions.',
            application: ['facade', 'outdoor', 'fence'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10131.png',
            colours: [
                { name: 'White', code: '10131', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10131.png', weight: '2.6 Kg' },
                { name: 'Red', code: '10132', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10132.png', weight: '3.0 Kg' },
                { name: 'Orange', code: '10133', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10133.png', weight: '3.0 Kg' },
                { name: 'Grey', code: '10134', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10134.png', weight: '2.9 Kg' }
            ]
        },
        {
            id: 'ds-lotus',
            name: 'Lotus',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200 x 200 x 60 mm',
            weight: '2.0 Kg',
            perBox: 5,
            description: 'Symmetrical lotus with premium double-side finish. Zen-inspired design visible from both sides.',
            application: ['partition', 'indoor', 'feature-wall'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10141.png',
            colours: [
                { name: 'White', code: '10141', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10141.png', weight: '2.0 Kg' },
                { name: 'Red', code: '10142', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10142.png', weight: '2.2 Kg' },
                { name: 'Orange', code: '10143', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10143.png', weight: '2.1 Kg' },
                { name: 'Grey', code: '10144', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10144.png', weight: '2.0 Kg' }
            ]
        },
        {
            id: 'ds-crosstine',
            name: 'Crosstine',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200 x 200 x 60 mm',
            weight: '2.1 Kg',
            perBox: 5,
            description: 'Intersecting lines with double-side finish for freestanding security barriers and compound walls.',
            application: ['fence', 'outdoor', 'facade'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10151.png',
            colours: [
                { name: 'White', code: '10151', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10151.png', weight: '2.1 Kg' },
                { name: 'Red', code: '10152', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10152.png', weight: '2.4 Kg' },
                { name: 'Orange', code: '10153', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10153.png', weight: '2.2 Kg' },
                { name: 'Grey', code: '10154', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10154.png', weight: '2.3 Kg' }
            ]
        },
        {
            id: 'ds-tulip',
            name: 'Tulip',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200 x 200 x 60 mm',
            weight: '4.0 Kg',
            perBox: 5,
            description: 'Elegant tulip design with identical finish on both sides. Premium choice for open-plan room dividers.',
            application: ['partition', 'indoor', 'feature-wall'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10161.png',
            colours: [
                { name: 'White', code: '10161', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10161.png', weight: '4.0 Kg' },
                { name: 'Red', code: '10162', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10162.png', weight: '4.2 Kg' },
                { name: 'Orange', code: '10163', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10163.png', weight: '4.0 Kg' },
                { name: 'Grey', code: '10164', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10164.png', weight: '4.0 Kg' }
            ]
        },
        {
            id: 'ds-curl',
            name: 'Curl',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200 x 200 x 60 mm',
            weight: '4.0 Kg',
            perBox: 5,
            description: 'Soft curves with double-side finish. Ideal for freestanding garden screens and indoor dividers.',
            application: ['facade', 'indoor', 'partition'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10171.png',
            colours: [
                { name: 'White', code: '10171', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10171.png', weight: '4.0 Kg' },
                { name: 'Red', code: '10172', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10172.png', weight: '3.9 Kg' },
                { name: 'Orange', code: '10173', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10173.png', weight: '4.1 Kg' },
                { name: 'Grey', code: '10174', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10174.png', weight: '4.0 Kg' }
            ]
        },
        {
            id: 'ds-flower',
            name: 'Flower',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200 x 200 x 60 mm',
            weight: '3.2 Kg',
            perBox: 5,
            description: 'Floral motif finished on both faces for freestanding boundary walls and decorative fences.',
            application: ['fence', 'partition', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10181.png',
            colours: [
                { name: 'White', code: '10181', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10181.png', weight: '3.2 Kg' },
                { name: 'Red', code: '10182', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10182.png', weight: '3.2 Kg' },
                { name: 'Orange', code: '10183', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10183.png', weight: '3.2 Kg' },
                { name: 'Grey', code: '10184', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10184.png', weight: '3.1 Kg' }
            ]
        },
`;

// Combine: head + DSF section + tail (which starts with 3D tiles)
const fixed = head + dsf + '\n        ' + tail;

// Verify syntax
try {
    new Function(fixed);
    console.log('SYNTAX: OK - writing fixed file');
    fs.writeFileSync('c:/Users/HI/Ugram/script.js', fixed, 'utf8');
    console.log('script.js fixed! Size:', fixed.length, 'bytes');
} catch (e) {
    console.log('SYNTAX ERROR in reconstructed file:', e.message);
    // Write to temp file for inspection
    fs.writeFileSync('c:/Users/HI/Ugram/script_reconstructed.js', fixed, 'utf8');
    console.log('Written to script_reconstructed.js for inspection');
}
