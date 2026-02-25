/**
 * UGRAM™ - Main Logic Script
 * Handles product data, rendering, filtering, animations & interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Current Year Update
    document.getElementById('year').textContent = new Date().getFullYear();

    // -------------------------------------------------------------------------
    // 1. PRODUCT DATA (Database)
    // -------------------------------------------------------------------------
    const products = [
        // =====================================================================
        // BREEZE BLOCKS — SINGLE SIDE FINISH (from XLSX data)
        // =====================================================================
        {
            id: 'ss-petal',
            name: 'Petal',
            category: 'breeze-block',
            subcategory: 'single-side',
            size: '200 × 200 × 60 mm',
            weight: '2.8 Kg',
            perBox: 5,
            description: 'Soft, organic curves that filter harsh sunlight while maintaining natural cross-ventilation. Ideal for creating subtle, elegant screens.',
            application: ['facade', 'partition', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10001.jpg',
            colours: [
                { name: 'White', code: '10001', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10001.jpg', weight: '2.8 Kg' },
                { name: 'Red', code: '10002', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10002.jpg', weight: '2.8 Kg' },
                { name: 'Orange', code: '10003', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10003.jpg', weight: '2.7 Kg' },
                { name: 'Grey', code: '10004', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10004.jpg', weight: '2.6 Kg' }
            ]
        },
        {
            id: 'ss-seaform',
            name: 'Seaform',
            category: 'breeze-block',
            subcategory: 'single-side',
            size: '200 × 200 × 60 mm',
            weight: '3.7 Kg',
            perBox: 5,
            description: 'Fluid organic waves creating dynamic shadow play. Perfect for interior partitions and feature facades.',
            application: ['facade', 'partition', 'indoor'],
            image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10011.jpg',
            colours: [
                { name: 'White', code: '10011', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10011.jpg', weight: '3.7 Kg' },
                { name: 'Red', code: '10012', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10012.jpg', weight: '3.6 Kg' },
                { name: 'Orange', code: '10013', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10013.jpg', weight: '3.7 Kg' },
                { name: 'Grey', code: '10014', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10014.jpg', weight: '3.5 Kg' }
            ]
        },
        {
            id: 'ss-mountain',
            name: 'Mountain',
            category: 'breeze-block',
            subcategory: 'single-side',
            size: '200 × 200 × 60 mm',
            weight: '3.2 Kg',
            perBox: 5,
            description: 'Triangular peaks offering privacy and style. Bold geometric silhouette ideal for compound walls and boundary fences.',
            application: ['fence', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10021.jpg',
            colours: [
                { name: 'White', code: '10021', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10021.jpg', weight: '3.2 Kg' },
                { name: 'Red', code: '10022', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10022.jpg', weight: '3.4 Kg' },
                { name: 'Orange', code: '10023', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10023.jpg', weight: '3.1 Kg' },
                { name: 'Grey', code: '10024', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10024.jpg', weight: '3.2 Kg' }
            ]
        },
        {
            id: 'ss-stonee',
            name: 'Stonee',
            category: 'breeze-block',
            subcategory: 'single-side',
            size: '200 × 200 × 60 mm',
            weight: '2.6 Kg',
            perBox: 5,
            description: 'Robust texture mimicking natural stone finishes. Creates a raw, earthy aesthetic for exterior applications.',
            application: ['facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10031.png',
            colours: [
                { name: 'White', code: '10031', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10031.png', weight: '2.6 Kg' },
                { name: 'Red', code: '10032', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10032.png', weight: '3.0 Kg' },
                { name: 'Orange', code: '10033', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10033.png', weight: '3.0 Kg' },
                { name: 'Grey', code: '10034', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10034.jpg', weight: '2.9 Kg' }
            ]
        },
        {
            id: 'ss-lotus',
            name: 'Lotus',
            category: 'breeze-block',
            subcategory: 'single-side',
            size: '200 × 200 × 60 mm',
            weight: '2.0 Kg',
            perBox: 5,
            description: 'Symmetrical lotus pattern for zen-like spaces. Lightweight yet structurally sound for partitions and indoor screens.',
            application: ['facade', 'partition', 'indoor'],
            image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10041.png',
            colours: [
                { name: 'White', code: '10041', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10041.png', weight: '2.0 Kg' },
                { name: 'Red', code: '10042', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10042.png', weight: '2.2 Kg' },
                { name: 'Orange', code: '10043', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10043.png', weight: '2.1 Kg' },
                { name: 'Grey', code: '10044', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10044.png', weight: '2.0 Kg' }
            ]
        },
        {
            id: 'ss-crosstine',
            name: 'Crosstine',
            category: 'breeze-block',
            subcategory: 'single-side',
            size: '200 × 200 × 60 mm',
            weight: '2.1 Kg',
            perBox: 5,
            description: 'Strong intersecting lines for secure yet airy barriers. Clean geometry for modern compound walls and fences.',
            application: ['fence', 'outdoor', 'facade'],
            image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10051.png',
            colours: [
                { name: 'White', code: '10051', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10051.png', weight: '2.1 Kg' },
                { name: 'Red', code: '10052', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10052.jpg', weight: '2.4 Kg' },
                { name: 'Orange', code: '10053', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10053.png', weight: '2.2 Kg' },
                { name: 'Grey', code: '10054', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10054.png', weight: '2.3 Kg' },
                { name: 'Dark Grey', code: '10055', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10055.png', weight: '2.0 Kg' }
            ]
        },
        {
            id: 'ss-tulip',
            name: 'Tulip',
            category: 'breeze-block',
            subcategory: 'single-side',
            size: '200 × 200 × 60 mm',
            weight: '4.0 Kg',
            perBox: 5,
            description: 'Elegant tulip-inspired negative space design. A premium block for feature walls and indoor partitions.',
            application: ['partition', 'indoor', 'feature-wall'],
            image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10061.jpg',
            colours: [
                { name: 'White', code: '10061', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10061.jpg', weight: '4.0 Kg' },
                { name: 'Red', code: '10062', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10062.jpg', weight: '4.2 Kg' },
                { name: 'Orange', code: '10063', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10063.jpg', weight: '4.0 Kg' },
                { name: 'Grey', code: '10064', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10064.jpg', weight: '4.0 Kg' }
            ]
        },
        {
            id: 'ss-curl',
            name: 'Curl',
            category: 'breeze-block',
            subcategory: 'single-side',
            size: '200 × 200 × 60 mm',
            weight: '4.0 Kg',
            perBox: 5,
            description: 'Soft curves that soften minimalist concrete structures. Designed for accent walls and garden partitions.',
            application: ['facade', 'indoor', 'partition'],
            image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10071.jpg',
            colours: [
                { name: 'White', code: '10071', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10071.jpg', weight: '4.0 Kg' },
                { name: 'Red', code: '10072', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10072.jpg', weight: '3.9 Kg' },
                { name: 'Orange', code: '10073', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10073.jpg', weight: '4.1 Kg' },
                { name: 'Grey', code: '10074', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10074.jpg', weight: '4.0 Kg' }
            ]
        },
        {
            id: 'ss-flower',
            name: 'Flower',
            category: 'breeze-block',
            subcategory: 'single-side',
            size: '200 × 200 × 60 mm',
            weight: '3.2 Kg',
            perBox: 5,
            description: 'Traditional floral motif re-engineered for contemporary use, providing a balanced blend of privacy and transparency.',
            application: ['fence', 'partition', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10081.jpg',
            colours: [
                { name: 'White', code: '10081', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10081.jpg', weight: '3.2 Kg' },
                { name: 'Red', code: '10082', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10082.jpg', weight: '3.2 Kg' },
                { name: 'Orange', code: '10083', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10083.jpg', weight: '3.2 Kg' },
                { name: 'Grey', code: '10084', image: 'images/UGRAM BREEZE BLOCKS SINGLE SIDE FINISH/10084.jpg', weight: '3.1 Kg' }
            ]
        },


        // =====================================================================
        // BREEZE BLOCKS -- DOUBLE SIDE FINISH (from CSV data)
        // =====================================================================
        {
            id: 'ds-temple',
            name: 'Temple',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3.3 Kg',
            perBox: 5,
            description: 'Temple-inspired geometric pattern with double-side finish for elegant architectural screens.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10101.png',
            colours: [
                { name: 'Red', code: '10101', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10101.png', weight: '3.3 Kg' },
                { name: 'White', code: '10102', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10102.png', weight: '3.4 Kg' },
                { name: 'Grey', code: '10103', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10103.png', weight: '3.2 Kg' },
                { name: 'Orange', code: '10104', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10104.png', weight: '3.2 Kg' }
            ]
        },
        {
            id: 'ds-petal',
            name: 'Petal',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '2.7 Kg',
            perBox: 5,
            description: 'Soft petal curves with premium double-side finish. Both faces polished for freestanding partitions.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10111.png',
            colours: [
                { name: 'Red', code: '10111', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10111.png', weight: '2.7 Kg' },
                { name: 'White', code: '10112', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10112.png', weight: '2.7 Kg' },
                { name: 'Grey', code: '10113', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10113.png', weight: '2.6 Kg' },
                { name: 'Orange', code: '10114', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10114.png', weight: '2.6 Kg' }
            ]
        },
        {
            id: 'ds-amber',
            name: 'Amber',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3.1 Kg',
            perBox: 5,
            description: 'Amber-toned faceted design with double-side finish, ideal for boundary walls and facades.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10121.png',
            colours: [
                { name: 'Red', code: '10121', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10121.png', weight: '3.1 Kg' },
                { name: 'White', code: '10122', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10122.png', weight: '3.1 Kg' },
                { name: 'Grey', code: '10123', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10123.png', weight: '3 Kg' },
                { name: 'Orange', code: '10124', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10124.png', weight: '3.1 Kg' }
            ]
        },
        {
            id: 'ds-opel',
            name: 'Opel',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '2.9 Kg',
            perBox: 5,
            description: 'Bold angular cuts creating striking shadow patterns on both finished faces.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10131.png',
            colours: [
                { name: 'Red', code: '10131', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10131.png', weight: '2.9 Kg' },
                { name: 'White', code: '10132', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10132.png', weight: '2.9 Kg' },
                { name: 'Grey', code: '10133', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10133.png', weight: '2.8 Kg' },
                { name: 'Orange', code: '10134', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10134.png', weight: '2.8 Kg' }
            ]
        },
        {
            id: 'ds-the-x-factor',
            name: 'The X -factor',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '2.6 Kg',
            perBox: 5,
            description: 'Dynamic X-shaped negative space design. A statement block for modern feature walls.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10141.png',
            colours: [
                { name: 'Red', code: '10141', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10141.png', weight: '2.6 Kg' },
                { name: 'White', code: '10142', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10142.png', weight: '2.6 Kg' },
                { name: 'Grey', code: '10143', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10143.png', weight: '2.5 Kg' },
                { name: 'Orange', code: '10144', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10144.png', weight: '2.5 Kg' }
            ]
        },
        {
            id: 'ds-roman',
            name: 'Roman',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3.3 Kg',
            perBox: 5,
            description: 'Classical Roman arch inspired block with symmetric double-side finish for grand partitions.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10151.png',
            colours: [
                { name: 'Red', code: '10151', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10151.png', weight: '3.3 Kg' },
                { name: 'White', code: '10152', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10152.png', weight: '3.3 Kg' },
                { name: 'Grey', code: '10153', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10153.png', weight: '3 Kg' },
                { name: 'Orange', code: '10154', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10154.png', weight: '3.1 Kg' }
            ]
        },
        {
            id: 'ds-5-side-beauity',
            name: '5 Side Beauity',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3 Kg',
            perBox: 5,
            description: 'Five-sided geometric beauty with identical finish on both faces for decorative screens.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10161.png',
            colours: [
                { name: 'Red', code: '10161', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10161.png', weight: '3 Kg' },
                { name: 'White', code: '10162', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10162.png', weight: '3.1 Kg' },
                { name: 'Grey', code: '10163', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10163.png', weight: '2.9 Kg' },
                { name: 'Orange', code: '10164', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10164.png', weight: '2.9 Kg' }
            ]
        },
        {
            id: 'ds-slice-new',
            name: 'Slice New',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3.5 Kg',
            perBox: 5,
            description: 'Clean diagonal slice pattern creating modern linear art on both exposed faces.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10171.png',
            colours: [
                { name: 'Red', code: '10171', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10171.png', weight: '3.5 Kg' },
                { name: 'White', code: '10172', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10172.png', weight: '3.4 Kg' },
                { name: 'Grey', code: '10173', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10173.png', weight: '3.3 Kg' },
                { name: 'Orange', code: '10174', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10174.png', weight: '3.3 Kg' }
            ]
        },
        {
            id: 'ds-3d-corner-square',
            name: '3d Corner Square',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3.5 Kg',
            perBox: 5,
            description: '3D corner square pattern adding bold depth and dimension to both wall faces.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10181.png',
            colours: [
                { name: 'Red', code: '10181', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10181.png', weight: '3.5 Kg' },
                { name: 'White', code: '10182', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10182.png', weight: '3.5 Kg' },
                { name: 'Grey', code: '10183', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10183.png', weight: '3.3 Kg' },
                { name: 'Orange', code: '10184', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10184.png', weight: '3.3 Kg' }
            ]
        },
        {
            id: 'ds-3d-two-lining',
            name: '3d Two Lining',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3 Kg',
            perBox: 5,
            description: 'Dual parallel lines creating rhythmic texture visible from both sides.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10191.png',
            colours: [
                { name: 'Red', code: '10191', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10191.png', weight: '3 Kg' },
                { name: 'White', code: '10192', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10192.png', weight: '3 Kg' },
                { name: 'Grey', code: '10193', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10193.png', weight: '3 Kg' },
                { name: 'Orange', code: '10194', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10194.png', weight: '3 Kg' }
            ]
        },
        {
            id: 'ds-slice',
            name: 'Slice',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '2.8 Kg',
            perBox: 5,
            description: 'Minimalist sliced design offering privacy with airflow. Clean double-side finish.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10201.png',
            colours: [
                { name: 'Red', code: '10201', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10201.png', weight: '2.8 Kg' },
                { name: 'White', code: '10202', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10202.png', weight: '2.8 Kg' },
                { name: 'Grey', code: '10203', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10203.png', weight: '2.6 Kg' },
                { name: 'Orange', code: '10204', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10204.png', weight: '2.7 Kg' }
            ]
        },
        {
            id: 'ds-post-office',
            name: 'Post Office',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3.6 Kg',
            perBox: 5,
            description: 'Envelope-inspired aperture pattern for secure yet ventilated double-side barriers.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10211.png',
            colours: [
                { name: 'Red', code: '10211', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10211.png', weight: '3.6 Kg' },
                { name: 'White', code: '10212', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10212.png', weight: '3.6 Kg' },
                { name: 'Grey', code: '10213', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10213.png', weight: '3.4 Kg' },
                { name: 'Orange', code: '10214', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10214.png', weight: '3.4 Kg' }
            ]
        },
        {
            id: 'ds-lining',
            name: 'Lining',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '300mm x 100mm x 60mm',
            weight: '1.8 Kg',
            perBox: 5,
            description: 'Elongated linear block with clean horizontal lines, finished on both sides.',
            application: ['facade', 'partition'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10221.png',
            colours: [
                { name: 'Red', code: '10221', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10221.png', weight: '1.8 Kg' },
                { name: 'White', code: '10222', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10222.png', weight: '1.8 Kg' },
                { name: 'Grey', code: '10223', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10223.png', weight: '1.8 Kg' },
                { name: 'Orange', code: '10224', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10224.png', weight: '1.7 Kg' }
            ]
        },
        {
            id: 'ds-capsule',
            name: 'Capsule',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '300mm x 100mm x 60mm',
            weight: '2.3 Kg',
            perBox: 5,
            description: 'Rounded capsule-shaped openings for soft, modern ventilation screens.',
            application: ['facade', 'partition'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10231.png',
            colours: [
                { name: 'Red', code: '10231', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10231.png', weight: '2.3 Kg' },
                { name: 'White', code: '10232', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10232.png', weight: '2.2 Kg' },
                { name: 'Grey', code: '10233', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10233.png', weight: '2.2 Kg' },
                { name: 'Orange', code: '10234', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10234.png', weight: '2.2 Kg' }
            ]
        },
        {
            id: 'ds-waves',
            name: 'Waves',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '300mm x 100mm x 60mm',
            weight: '2.7 Kg',
            perBox: 5,
            description: 'Flowing wave contours creating organic rhythm on elongated double-side blocks.',
            application: ['facade', 'partition'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10241.png',
            colours: [
                { name: 'Red', code: '10241', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10241.png', weight: '2.7 Kg' },
                { name: 'White', code: '10242', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10242.png', weight: '2.8 Kg' },
                { name: 'Grey', code: '10243', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10243.png', weight: '2.6 Kg' },
                { name: 'Orange', code: '10244', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10244.png', weight: '2.7 Kg' }
            ]
        },
        {
            id: 'ds-rectangle',
            name: 'Rectangle',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '300mm x 100mm x 60mm',
            weight: '2.5 Kg',
            perBox: 5,
            description: 'Clean rectangular apertures for minimalist, structured facade patterns.',
            application: ['facade', 'partition'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10251.png',
            colours: [
                { name: 'Red', code: '10251', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10251.png', weight: '2.5 Kg' },
                { name: 'White', code: '10252', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10252.png', weight: '2.4 Kg' },
                { name: 'Grey', code: '10253', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10253.png', weight: '2.3 Kg' },
                { name: 'Orange', code: '10254', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10254.png', weight: '2.4 Kg' }
            ]
        },
        {
            id: 'ds-w',
            name: 'W',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '2.6 Kg',
            perBox: 5,
            description: 'Bold W-shaped negative space design creating dramatic shadow interplay.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10261.png',
            colours: [
                { name: 'Red', code: '10261', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10261.png', weight: '2.6 Kg' },
                { name: 'White', code: '10262', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10262.png', weight: '2.6 Kg' },
                { name: 'Grey', code: '10263', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10263.png', weight: '2.5 Kg' },
                { name: 'Orange', code: '10264', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10264.png', weight: '2.5 Kg' }
            ]
        },
        {
            id: 'ds-bw',
            name: 'Bw',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '250mm x 200mm x 60mm',
            weight: '4.2 Kg',
            perBox: 5,
            description: 'Large-format block-wave pattern for statement architectural installations.',
            application: ['facade', 'outdoor', 'feature-wall'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10271.png',
            colours: [
                { name: 'Red', code: '10271', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10271.png', weight: '4.2 Kg' },
                { name: 'White', code: '10272', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10272.png', weight: '4.4 Kg' },
                { name: 'Grey', code: '10273', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10273.png', weight: '4.1 Kg' },
                { name: 'Orange', code: '10274', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10274.png', weight: '4.1 Kg' },
                { name: 'Dark Grey', code: '10275', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10275.png', weight: '4.3 Kg' }
            ]
        },
        {
            id: 'ds-barfi',
            name: 'Barfi',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '250mm x 200mm x 75mm',
            weight: '4.2 Kg',
            perBox: 5,
            description: 'Diamond grid pattern inspired by traditional motifs, finished on both faces.',
            application: ['facade', 'outdoor', 'feature-wall'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10281.png',
            colours: [
                { name: 'Red', code: '10281', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10281.png', weight: '4.2 Kg' },
                { name: 'White', code: '10282', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10282.png', weight: '4.3 Kg' },
                { name: 'Grey', code: '10283', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10283.png', weight: '4.1 Kg' },
                { name: 'Orange', code: '10284', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10284.png', weight: '4 Kg' }
            ]
        },
        {
            id: 'ds-3d-single-lining',
            name: '3d Single Lining',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '2.9 Kg',
            perBox: 5,
            description: 'Single linear groove creating subtle 3D depth on both polished faces.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10291.png',
            colours: [
                { name: 'Red', code: '10291', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10291.png', weight: '2.9 Kg' },
                { name: 'White', code: '10292', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10292.png', weight: '3.1 Kg' },
                { name: 'Grey', code: '10293', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10293.png', weight: '3 Kg' },
                { name: 'Orange', code: '10294', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10294.png', weight: '3 Kg' }
            ]
        },
        {
            id: 'ds-close-mirror',
            name: 'Close Mirror',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3.1 Kg',
            perBox: 5,
            description: 'Mirrored closed pattern providing maximum privacy with architectural style.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10301.png',
            colours: [
                { name: 'Red', code: '10301', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10301.png', weight: '3.1 Kg' },
                { name: 'White', code: '10302', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10302.png', weight: '3.3 Kg' },
                { name: 'Grey', code: '10303', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10303.png', weight: '3..1 Kg' },
                { name: 'Orange', code: '10304', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10304.png', weight: '3.1 Kg' }
            ]
        },
        {
            id: 'ds-open-mirror',
            name: 'Open Mirror',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3 Kg',
            perBox: 5,
            description: 'Open mirrored apertures blending transparency with symmetrical design.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10311.png',
            colours: [
                { name: 'Red', code: '10311', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10311.png', weight: '3 Kg' },
                { name: 'White', code: '10312', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10312.png', weight: '3 Kg' },
                { name: 'Grey', code: '10313', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10313.png', weight: '2.8 Kg' },
                { name: 'Orange', code: '10314', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10314.png', weight: '2.8 Kg' }
            ]
        },
        {
            id: 'ds-4-window',
            name: '4 - Window',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3.8 Kg',
            perBox: 5,
            description: 'Four-window grid pattern allowing light and air while maintaining structure.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10321.png',
            colours: [
                { name: 'Red', code: '10321', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10321.png', weight: '3.8 Kg' },
                { name: 'White', code: '10322', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10322.png', weight: '4 Kg' },
                { name: 'Grey', code: '10323', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10323.png', weight: '3.6 Kg' },
                { name: 'Orange', code: '10324', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10324.png', weight: '3.8 Kg' }
            ]
        },
        {
            id: 'ds-z',
            name: 'Z',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '3.2 Kg',
            perBox: 5,
            description: 'Dynamic Z-shaped cut creating bold geometric statements on both faces.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10331.png',
            colours: [
                { name: 'Red', code: '10331', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10331.png', weight: '3.2 Kg' },
                { name: 'White', code: '10332', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10332.png', weight: '3 Kg' },
                { name: 'Grey', code: '10333', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10333.png', weight: '3 Kg' },
                { name: 'Orange', code: '10334', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10334.png', weight: '3.1 Kg' }
            ]
        },
        {
            id: 'ds-mangulu',
            name: 'Mangulu',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '250mm x 200mm x 75mm',
            weight: '4.3 Kg',
            perBox: 5,
            description: 'Large-format angular design for grand architectural installations.',
            application: ['facade', 'outdoor', 'feature-wall'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10341.png',
            colours: [
                { name: 'Red', code: '10341', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10341.png', weight: '4.3 Kg' },
                { name: 'White', code: '10342', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10342.png', weight: '4.3 Kg' },
                { name: 'Grey', code: '10343', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10343.png', weight: '4.2 Kg' },
                { name: 'Orange', code: '10344', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10344.png', weight: '4.1 Kg' }
            ]
        },
        {
            id: 'ds-swastik',
            name: 'Swastik',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '2.5 Kg',
            perBox: 5,
            description: 'Traditional swastik motif reinterpreted in modern double-side concrete.',
            application: ['partition', 'indoor', 'feature-wall'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10351.png',
            colours: [
                { name: 'Red', code: '10351', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10351.png', weight: '2.5 Kg' },
                { name: 'White', code: '10352', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10352.png', weight: '2.5 Kg' },
                { name: 'Grey', code: '10353', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10353.png', weight: '2.5 Kg' },
                { name: 'Orange', code: '10354', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10354.png', weight: '2.5 Kg' }
            ]
        },
        {
            id: 'ds-camp',
            name: 'Camp',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200mm x 200mm x 60mm',
            weight: '2.4 Kg',
            perBox: 5,
            description: 'Tent-like angular openings creating dynamic light patterns through both faces.',
            application: ['partition', 'facade', 'outdoor'],
            image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10091.png',
            colours: [
                { name: 'Red', code: '10091', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10091.png', weight: '2.4 Kg' },
                { name: 'White', code: '10092', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10092.png', weight: '2.5 Kg' },
                { name: 'Grey', code: '10093', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10093.png', weight: '2.3 Kg' },
                { name: 'Orange', code: '10094', image: 'images/UGRAM BREEZE BLOCKS DOUBLE  SIDE FINISH/10094.png', weight: '2.4 Kg' }
            ]
        },

        // =====================================================================
        // 3D TILES (from CSV data)
        // =====================================================================
        {
            id: '3d-emboss',
            name: 'Emboss',
            category: '3d-tile',
            subcategory: '3d-tile',
            size: '73 × 220 mm',
            weight: '0.53 Kg',
            pcsPerSqFt: 5.88,
            perBox: 20,
            sqftPerBox: 3.4,
            description: 'Raised textured surface creating bold shadow lines. A versatile tile for accent walls and facades.',
            application: ['indoor', 'facade', 'feature-wall'],
            image: 'images/UGRAM - 3D TILES/12001.png',
            colours: [
                { name: 'White', code: '12001', image: 'images/UGRAM - 3D TILES/12001.png', weight: '0.53 Kg' },
                { name: 'Red', code: '12002', image: 'images/UGRAM - 3D TILES/12002.png', weight: '0.48 Kg' },
                { name: 'Grey', code: '12003', image: 'images/UGRAM - 3D TILES/12003.png', weight: '0.50 Kg' },
                { name: 'Orange', code: '12004', image: 'images/UGRAM - 3D TILES/12004.png', weight: '0.52 Kg' },
                { name: 'Brown', code: '12005', image: 'images/UGRAM - 3D TILES/12005.png', weight: '0.55 Kg' },
                { name: 'Black', code: '12006', image: 'images/UGRAM - 3D TILES/12006.png', weight: '0.48 Kg' },
                { name: 'Yellow', code: '12007', image: 'images/UGRAM - 3D TILES/12007.png', weight: '0.53 Kg' }
            ]
        },
        {
            id: '3d-ovate',
            name: 'Ovate',
            category: '3d-tile',
            subcategory: '3d-tile',
            size: '145 × 145 mm',
            weight: '0.67 Kg',
            pcsPerSqFt: 4.42,
            perBox: 20,
            sqftPerBox: 4.52,
            description: 'Soft oval protruded forms for gentle, organic aesthetics. Creates a calming, tactile wall surface.',
            application: ['indoor', 'feature-wall'],
            image: 'images/UGRAM - 3D TILES/12011.png',
            colours: [
                { name: 'White', code: '12011', image: 'images/UGRAM - 3D TILES/12011.png', weight: '0.67 Kg' },
                { name: 'Red', code: '12012', image: 'images/UGRAM - 3D TILES/12012.png', weight: '0.77 Kg' },
                { name: 'Grey', code: '12013', image: 'images/UGRAM - 3D TILES/12013.png', weight: '0.81 Kg' },
                { name: 'Orange', code: '12014', image: 'images/UGRAM - 3D TILES/12014.png', weight: '0.72 Kg' },
                { name: 'Brown', code: '12015', image: 'images/UGRAM - 3D TILES/12015.png', weight: '0.76 Kg' },
                { name: 'Yellow', code: '12016', image: 'images/UGRAM - 3D TILES/12016.png', weight: '0.78 Kg' }
            ]
        },
        {
            id: '3d-tero',
            name: 'Tero',
            category: '3d-tile',
            subcategory: '3d-tile',
            size: '145 × 145 mm',
            weight: '0.62 Kg',
            pcsPerSqFt: 4.42,
            perBox: 20,
            sqftPerBox: 4.52,
            description: 'Angular, geometric relief tile with sharp facets that catch and reflect light dynamically.',
            application: ['indoor', 'facade'],
            image: 'images/UGRAM - 3D TILES/12021.png',
            colours: [
                { name: 'White', code: '12021', image: 'images/UGRAM - 3D TILES/12021.png', weight: '0.62 Kg' },
                { name: 'Red', code: '12022', image: 'images/UGRAM - 3D TILES/12022.png', weight: '0.67 Kg' },
                { name: 'Grey', code: '12023', image: 'images/UGRAM - 3D TILES/12023.png', weight: '0.65 Kg' },
                { name: 'Orange', code: '12024', image: 'images/UGRAM - 3D TILES/12024.png', weight: '0.64 Kg' },
                { name: 'Brown', code: '12025', image: 'images/UGRAM - 3D TILES/12025.png', weight: '0.68 Kg' },
                { name: 'Black', code: '12026', image: 'images/UGRAM - 3D TILES/12026.png', weight: '0.61 Kg' },
                { name: 'Yellow', code: '12027', image: 'images/UGRAM - 3D TILES/12027.png', weight: '0.63 Kg' }
            ]
        },
        {
            id: '3d-ralse',
            name: 'Ralse',
            category: '3d-tile',
            subcategory: '3d-tile',
            size: '145 × 145 mm',
            weight: '0.80 Kg',
            pcsPerSqFt: 4.42,
            perBox: 20,
            sqftPerBox: 4.52,
            description: 'Rising step pattern for dynamic vertical rhythm. Bold depth creates commanding shadow lines.',
            application: ['facade', 'outdoor', 'feature-wall'],
            image: 'images/UGRAM - 3D TILES/12031.png',
            colours: [
                { name: 'White', code: '12031', image: 'images/UGRAM - 3D TILES/12031.png', weight: '0.80 Kg' },
                { name: 'Red', code: '12032', image: 'images/UGRAM - 3D TILES/12032.png', weight: '0.76 Kg' },
                { name: 'Grey', code: '12033', image: 'images/UGRAM - 3D TILES/12033.png', weight: '0.80 Kg' },
                { name: 'Orange', code: '12034', image: 'images/UGRAM - 3D TILES/12034.png', weight: '0.74 Kg' }
            ]
        },
        {
            id: '3d-concave',
            name: 'Concave',
            category: '3d-tile',
            subcategory: '3d-tile',
            size: '146 × 168 mm',
            weight: '0.51 Kg',
            pcsPerSqFt: 5.03,
            perBox: 20,
            sqftPerBox: 3.97,
            description: 'Inward curving surface that captures and redirects ambient light, adding depth to flat walls.',
            application: ['indoor', 'facade'],
            image: 'images/UGRAM - 3D TILES/12041.png',
            colours: [
                { name: 'White', code: '12041', image: 'images/UGRAM - 3D TILES/12041.png', weight: '0.51 Kg' },
                { name: 'Red', code: '12042', image: 'images/UGRAM - 3D TILES/12042.png', weight: '0.54 Kg' },
                { name: 'Grey', code: '12043', image: 'images/UGRAM - 3D TILES/12043.png', weight: '0.54 Kg' },
                { name: 'Orange', code: '12044', image: 'images/UGRAM - 3D TILES/12044.png', weight: '0.50 Kg' }
            ]
        },
        {
            id: '3d-prism',
            name: 'Prism',
            category: '3d-tile',
            subcategory: '3d-tile',
            size: '146 × 168 mm',
            weight: '0.67 Kg',
            pcsPerSqFt: 5.03,
            perBox: 20,
            sqftPerBox: 3.97,
            description: 'Sharp prismatic facets that catch and scatter light. A statement tile for feature walls.',
            application: ['indoor', 'facade', 'feature-wall'],
            image: 'images/UGRAM - 3D TILES/12051.png',
            colours: [
                { name: 'White', code: '12051', image: 'images/UGRAM - 3D TILES/12051.png', weight: '0.67 Kg' },
                { name: 'Red', code: '12052', image: 'images/UGRAM - 3D TILES/12052.png', weight: '0.60 Kg' },
                { name: 'Grey', code: '12053', image: 'images/UGRAM - 3D TILES/12053.png', weight: '0.65 Kg' },
                { name: 'Orange', code: '12054', image: 'images/UGRAM - 3D TILES/12054.png', weight: '0.57 Kg' },
                { name: 'Brown', code: '12055', image: 'images/UGRAM - 3D TILES/12055.png', weight: '0.62 Kg' },
                { name: 'Black', code: '12056', image: 'images/UGRAM - 3D TILES/12056.png', weight: '0.58 Kg' }
            ]
        },
        {
            id: '3d-petal',
            name: 'Petal Tile',
            category: '3d-tile',
            subcategory: '3d-tile',
            size: '146 × 168 mm',
            weight: '0.73 Kg',
            pcsPerSqFt: 5.03,
            perBox: 20,
            sqftPerBox: 3.97,
            description: 'Delicate petal relief that creates a soft, botanical texture on any wall surface.',
            application: ['indoor', 'feature-wall'],
            image: 'images/UGRAM - 3D TILES/12061.png',
            colours: [
                { name: 'White', code: '12061', image: 'images/UGRAM - 3D TILES/12061.png', weight: '0.73 Kg' },
                { name: 'Red', code: '12062', image: 'images/UGRAM - 3D TILES/12062.png', weight: '0.78 Kg' },
                { name: 'Grey', code: '12063', image: 'images/UGRAM - 3D TILES/12063.png', weight: '0.75 Kg' },
                { name: 'Orange', code: '12064', image: 'images/UGRAM - 3D TILES/12064.png', weight: '0.69 Kg' }
            ]
        },

        // =====================================================================
        // WALL TILES (from CSV data)
        // =====================================================================
        {
            id: 'wt-verona',
            name: 'Verona',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '198 × 99 mm',
            weight: '0.47 Kg',
            perBox: 20,
            sqftPerBox: 4.2,
            pcsPerSqFt: 4.76,
            description: 'Classic slim rectangular wall tile with a smooth finish, perfect for herringbone or subway patterns.',
            application: ['indoor', 'facade'],
            image: 'images/UGRAM - WALL TILES/13001.png',
            colours: [
                { name: 'White', code: '13001', image: 'images/UGRAM - WALL TILES/13001.png', weight: '0.47 Kg' },
                { name: 'Red', code: '13002', image: 'images/UGRAM - WALL TILES/13002.png', weight: '0.50 Kg' },
                { name: 'Grey', code: '13003', image: 'images/UGRAM - WALL TILES/13003.png', weight: '0.48 Kg' },
                { name: 'Orange', code: '13004', image: 'images/UGRAM - WALL TILES/13004.png', weight: '0.43 Kg' },
                { name: 'Brown', code: '13005', image: 'images/UGRAM - WALL TILES/13005.png', weight: '0.50 Kg' }
            ]
        },
        {
            id: 'wt-natura',
            name: 'Natura',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '266 × 99 mm',
            weight: '0.71 Kg',
            perBox: 20,
            sqftPerBox: 5.26,
            pcsPerSqFt: 3.5,
            description: 'Elongated format providing a sleek, modern horizontal rhythm to large wall surfaces.',
            application: ['indoor', 'outdoor', 'facade'],
            image: 'images/UGRAM - WALL TILES/13011.png',
            colours: [
                { name: 'White', code: '13011', image: 'images/UGRAM - WALL TILES/13011.png', weight: '0.71 Kg' },
                { name: 'Red', code: '13012', image: 'images/UGRAM - WALL TILES/13012.png', weight: '0.73 Kg' },
                { name: 'Grey', code: '13013', image: 'images/UGRAM - WALL TILES/13013.png', weight: '0.70 Kg' }
            ]
        },
        {
            id: 'wt-florina',
            name: 'Florina',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '127 × 128 mm',
            weight: '0.25 Kg',
            perBox: 20,
            sqftPerBox: 4.2,
            pcsPerSqFt: 4.76,
            description: 'Ornate square tile featuring traditional floral motifs, ideal for accent features and borders.',
            application: ['indoor', 'feature-wall'],
            image: 'images/UGRAM - WALL TILES/13021.png',
            colours: [
                { name: 'White', code: '13021', image: 'images/UGRAM - WALL TILES/13021.png', weight: '0.25 Kg' },
                { name: 'Red', code: '13022', image: 'images/UGRAM - WALL TILES/13022.png', weight: '0.26 Kg' },
                { name: 'Grey', code: '13023', image: 'images/UGRAM - WALL TILES/13023.png', weight: '0.26 Kg' },
                { name: 'Orange', code: '13024', image: 'images/UGRAM - WALL TILES/13024.png', weight: '0.24 Kg' },
                { name: 'Brown', code: '13025', image: 'images/UGRAM - WALL TILES/13025.png', weight: '0.25 Kg' }
            ]
        },
        {
            id: 'wt-olymia',
            name: 'Olymia',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '266 × 99 mm',
            weight: '0.80 Kg',
            perBox: 20,
            sqftPerBox: 5.7,
            pcsPerSqFt: 3.51,
            description: 'Robust textural tile designed for high-end exterior facades and perimeter architecture.',
            application: ['facade', 'outdoor'],
            image: 'images/UGRAM - WALL TILES/13031.png',
            colours: [
                { name: 'White', code: '13031', image: 'images/UGRAM - WALL TILES/13031.png', weight: '0.80 Kg' },
                { name: 'Red', code: '13032', image: 'images/UGRAM - WALL TILES/13032.png', weight: '0.77 Kg' },
                { name: 'Grey', code: '13033', image: 'images/UGRAM - WALL TILES/13033.png', weight: '0.74 Kg' },
                { name: 'Orange', code: '13034', image: 'images/UGRAM - WALL TILES/13034.png', weight: '0.74 Kg' }
            ]
        },
        {
            id: 'wt-rivoli',
            name: 'Rivoli',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '300 × 147 mm',
            weight: '1.2 Kg',
            perBox: 16,
            sqftPerBox: 7.6,
            pcsPerSqFt: 2.1,
            description: 'Premium large-format tile with bold presence. Excellent for expansive commercial feature walls.',
            application: ['feature-wall', 'facade', 'indoor'],
            image: 'images/UGRAM - WALL TILES/13041.png',
            colours: [
                { name: 'White', code: '13041', image: 'images/UGRAM - WALL TILES/13041.png', weight: '1.2 Kg' },
                { name: 'Red', code: '13042', image: 'images/UGRAM - WALL TILES/13042.png', weight: '1.1 Kg' },
                { name: 'Grey', code: '13043', image: 'images/UGRAM - WALL TILES/13043.png', weight: '1.1 Kg' },
                { name: 'Orange', code: '13044', image: 'images/UGRAM - WALL TILES/13044.png', weight: '1.0 Kg' },
                { name: 'Brown', code: '13045', image: 'images/UGRAM - WALL TILES/13045.png', weight: '1.2 Kg' }
            ]
        },
        {
            id: 'wt-sofia',
            name: 'Sofia',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '221 × 73 mm',
            weight: '0.35 Kg',
            perBox: 40,
            sqftPerBox: 7,
            pcsPerSqFt: 5.71,
            description: 'Elegant slender tile offering a delicate touch to interior walls and retail environments.',
            application: ['indoor', 'feature-wall'],
            image: 'images/UGRAM - WALL TILES/13051.png',
            colours: [
                { name: 'White', code: '13051', image: 'images/UGRAM - WALL TILES/13051.png', weight: '0.35 Kg' },
                { name: 'Red', code: '13052', image: 'images/UGRAM - WALL TILES/13052.png', weight: '0.35 Kg' },
                { name: 'Grey', code: '13053', image: 'images/UGRAM - WALL TILES/13053.png', weight: '0.37 Kg' },
                { name: 'Orange', code: '13054', image: 'images/UGRAM - WALL TILES/13054.png', weight: '0.34 Kg' },
                { name: 'Brown', code: '13055', image: 'images/UGRAM - WALL TILES/13055.png', weight: '0.36 Kg' }
            ]
        },
        {
            id: 'wt-spark',
            name: 'Spark',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '225 × 75 mm',
            weight: '0.44 Kg',
            perBox: 30,
            sqftPerBox: 5.6,
            pcsPerSqFt: 5.33,
            description: 'Textured surface tile with subtle sparkle effect. Creates lively, vibrant wall compositions.',
            application: ['indoor', 'facade'],
            image: 'images/UGRAM - WALL TILES/13061.png',
            colours: [
                { name: 'White', code: '13061', image: 'images/UGRAM - WALL TILES/13061.png', weight: '0.44 Kg' },
                { name: 'Red', code: '13062', image: 'images/UGRAM - WALL TILES/13062.png', weight: '0.46 Kg' },
                { name: 'Grey', code: '13063', image: 'images/UGRAM - WALL TILES/13063.png', weight: '0.47 Kg' },
                { name: 'Orange', code: '13064', image: 'images/UGRAM - WALL TILES/13064.png', weight: '0.43 Kg' },
                { name: 'Olive', code: '13065', image: 'images/UGRAM - WALL TILES/13065.png', weight: '0.46 Kg' }
            ]
        },
        {
            id: 'wt-onix',
            name: 'Onix',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '221 × 37 mm',
            weight: '0.69 Kg',
            perBox: 20,
            sqftPerBox: 5.69,
            pcsPerSqFt: 3.51,
            description: 'Ultra-slim linear tile for sophisticated stacked or running bond patterns on feature walls.',
            application: ['indoor', 'feature-wall'],
            image: 'images/UGRAM - WALL TILES/13071.png',
            colours: [
                { name: 'White', code: '13071', image: 'images/UGRAM - WALL TILES/13071.png', weight: '0.69 Kg' },
                { name: 'Red', code: '13072', image: 'images/UGRAM - WALL TILES/13072.png', weight: '0.67 Kg' },
                { name: 'Grey', code: '13073', image: 'images/UGRAM - WALL TILES/13073.png', weight: '0.69 Kg' },
                { name: 'Orange', code: '13074', image: 'images/UGRAM - WALL TILES/13074.png', weight: '0.65 Kg' },
                { name: 'Brown', code: '13075', image: 'images/UGRAM - WALL TILES/13075.png', weight: '0.67 Kg' }
            ]
        },
        {
            id: 'wt-diamond',
            name: 'Diamond',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '200 × 100 mm',
            weight: '0.43 Kg',
            perBox: 30,
            sqftPerBox: 6.46,
            pcsPerSqFt: 4.65,
            description: 'Faceted surface mimicking gemstone geometry. Catches ambient light for subtle luminance shifts.',
            application: ['indoor', 'facade', 'feature-wall'],
            image: 'images/UGRAM - WALL TILES/13081.png',
            colours: [
                { name: 'White', code: '13081', image: 'images/UGRAM - WALL TILES/13081.png', weight: '0.43 Kg' },
                { name: 'Red', code: '13082', image: 'images/UGRAM - WALL TILES/13082.png', weight: '0.43 Kg' },
                { name: 'Grey', code: '13083', image: 'images/UGRAM - WALL TILES/13083.png', weight: '0.45 Kg' },
                { name: 'Orange', code: '13084', image: 'images/UGRAM - WALL TILES/13084.png', weight: '0.42 Kg' },
                { name: 'Brown', code: '13085', image: 'images/UGRAM - WALL TILES/13085.png', weight: '0.46 Kg' }
            ]
        },
        {
            id: 'wt-coral',
            name: 'Coral',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '221 × 73 mm',
            weight: '0.40 Kg',
            perBox: 40,
            sqftPerBox: 7,
            pcsPerSqFt: 5.71,
            description: 'Organic coral-reef inspired texture bringing natural underwater formations to interior surfaces.',
            application: ['indoor', 'feature-wall'],
            image: 'images/UGRAM - WALL TILES/13091.png',
            colours: [
                { name: 'White', code: '13091', image: 'images/UGRAM - WALL TILES/13091.png', weight: '0.40 Kg' },
                { name: 'Red', code: '13092', image: 'images/UGRAM - WALL TILES/13092.png', weight: '0.40 Kg' },
                { name: 'Grey', code: '13093', image: 'images/UGRAM - WALL TILES/13093.png', weight: '0.40 Kg' },
                { name: 'Brown', code: '13094', image: 'images/UGRAM - WALL TILES/13094.png', weight: '0.40 Kg' },
                { name: 'Orange', code: '13095', image: 'images/UGRAM - WALL TILES/13095.png', weight: '0.40 Kg' }
            ]
        },
        {
            id: 'wt-strip',
            name: 'Strip',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '300 × 75 mm',
            weight: '0.49 Kg',
            perBox: 30,
            sqftPerBox: 7.5,
            pcsPerSqFt: 4,
            description: 'Minimal linear tile for clean, contemporary walls. Creates a seamless horizontal visual flow.',
            application: ['indoor', 'facade'],
            image: 'images/UGRAM - WALL TILES/13101.png',
            colours: [
                { name: 'White', code: '13101', image: 'images/UGRAM - WALL TILES/13101.png', weight: '0.49 Kg' },
                { name: 'Red', code: '13102', image: 'images/UGRAM - WALL TILES/13102.png', weight: '0.51 Kg' },
                { name: 'Grey', code: '13103', image: 'images/UGRAM - WALL TILES/13103.png', weight: '0.53 Kg' },
                { name: 'Orange', code: '13104', image: 'images/UGRAM - WALL TILES/13104.png', weight: '0.52 Kg' },
                { name: 'Brown', code: '13105', image: 'images/UGRAM - WALL TILES/13105.png', weight: '0.51 Kg' }
            ]
        },
        {
            id: 'wt-hexa',
            name: 'Hexa',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: 'Hexagonal',
            weight: '1.1 Kg',
            perBox: 14,
            sqftPerBox: 5.38,
            pcsPerSqFt: 2.6,
            description: 'Geometric hexagonal tile creating organic honeycomb patterns. A statement piece for modern interiors.',
            application: ['indoor', 'feature-wall'],
            image: 'images/UGRAM - WALL TILES/13111.png',
            colours: [
                { name: 'White', code: '13111', image: 'images/UGRAM - WALL TILES/13111.png', weight: '1.1 Kg' },
                { name: 'Red', code: '13112', image: 'images/UGRAM - WALL TILES/13112.png', weight: '1.2 Kg' },
                { name: 'Grey', code: '13113', image: 'images/UGRAM - WALL TILES/13113.png', weight: '1.2 Kg' },
                { name: 'Orange', code: '13114', image: 'images/UGRAM - WALL TILES/13114.png', weight: '1.2 Kg' },
                { name: 'Brown', code: '13115', image: 'images/UGRAM - WALL TILES/13115.png', weight: '1.1 Kg' }
            ]
        },
        {
            id: 'wt-stone',
            name: 'Stone Wall',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '250 × 125 mm',
            weight: '1.02 Kg',
            perBox: 16,
            sqftPerBox: 5.5,
            pcsPerSqFt: 2.88,
            description: 'Rough-hewn natural stone replica providing authentic masonry character to any wall surface.',
            application: ['facade', 'outdoor', 'feature-wall'],
            image: 'images/UGRAM - WALL TILES/13121.png',
            colours: [
                { name: 'White', code: '13121', image: 'images/UGRAM - WALL TILES/13121.png', weight: '1.02 Kg' },
                { name: 'Red', code: '13122', image: 'images/UGRAM - WALL TILES/13122.png', weight: '0.94 Kg' },
                { name: 'Grey', code: '13123', image: 'images/UGRAM - WALL TILES/13123.png', weight: '0.93 Kg' },
                { name: 'Orange', code: '13124', image: 'images/UGRAM - WALL TILES/13124.png', weight: '0.87 Kg' },
                { name: 'Brown', code: '13125', image: 'images/UGRAM - WALL TILES/13125.png', weight: '0.93 Kg' }
            ]
        },
        {
            id: 'wt-rustic',
            name: 'Rustic',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '215 × 75 mm',
            weight: '0.32 Kg',
            perBox: 40,
            sqftPerBox: 6.9,
            pcsPerSqFt: 5.78,
            description: 'Handmade-look tile with earthy, rustic charm. Ideal for farmhouse and Mediterranean aesthetics.',
            application: ['indoor', 'facade'],
            image: 'images/UGRAM - WALL TILES/13131.png',
            colours: [
                { name: 'White', code: '13131', image: 'images/UGRAM - WALL TILES/13131.png', weight: '0.32 Kg' },
                { name: 'Red', code: '13132', image: 'images/UGRAM - WALL TILES/13132.png', weight: '0.32 Kg' },
                { name: 'Grey', code: '13133', image: 'images/UGRAM - WALL TILES/13133.png', weight: '0.34 Kg' },
                { name: 'Orange', code: '13134', image: 'images/UGRAM - WALL TILES/13134.png', weight: '0.36 Kg' },
                { name: 'Brown', code: '13135', image: 'images/UGRAM - WALL TILES/13135.png', weight: '0.37 Kg' }
            ]
        },
        {
            id: 'wt-brick',
            name: 'Brick',
            category: 'wall-tile',
            subcategory: 'wall-tile',
            size: '480 × 170 mm',
            weight: '2.7 Kg',
            perBox: 6,
            sqftPerBox: 5.3,
            pcsPerSqFt: 1.13,
            description: 'Oversized brick-format tile providing a monumental industrial aesthetic for large-scale facades.',
            application: ['facade', 'outdoor'],
            image: 'images/UGRAM - WALL TILES/13151.png',
            colours: [
                { name: 'White', code: '13151', image: 'images/UGRAM - WALL TILES/13151.png', weight: '2.7 Kg' },
                { name: 'Red', code: '13152', image: 'images/UGRAM - WALL TILES/13152.png', weight: '2.6 Kg' },
                { name: 'Grey', code: '13153', image: 'images/UGRAM - WALL TILES/13153.png', weight: '2.6 Kg' },
                { name: 'Orange', code: '13154', image: 'images/UGRAM - WALL TILES/13154.png', weight: '2.6 Kg' },
                { name: 'Yellow', code: '13155', image: 'images/UGRAM - WALL TILES/13155.png', weight: '2.7 Kg' },
                { name: 'Brown', code: '13156', image: 'images/UGRAM - WALL TILES/13156.png', weight: '2.9 Kg' }
            ]
        },

        // =====================================================================
        // RAILING PILLARS (from XLSX data)
        // =====================================================================
        {
            id: 'rp-roman-1',
            name: 'Roman Pillar I',
            category: 'railing-pillar',
            subcategory: 'railing-pillar',
            size: '24 in × 95 mm',
            weight: '7.5 Kg',
            perBox: 1,
            description: 'Classical fluted pillar with reinforced 8mm rod (30 in length). Premium choice for elegant balustrades.',
            application: ['railing', 'outdoor'],
            image: 'images/UGRAM RAILING PILLAR/14001.png',
            colours: [
                { name: 'White', code: '14001', image: 'images/UGRAM RAILING PILLAR/14001.png', weight: '7.5 Kg' }
            ]
        },
        {
            id: 'rp-roman-2',
            name: 'Roman Pillar II',
            category: 'railing-pillar',
            subcategory: 'railing-pillar',
            size: '24 in × 95 mm',
            weight: '7.7 Kg',
            perBox: 1,
            description: 'Enhanced classical profile with reinforced 8mm rod. Ideal for staircase and terrace balustrades.',
            application: ['railing', 'outdoor'],
            image: 'images/UGRAM RAILING PILLAR/14011.png',
            colours: [
                { name: 'White', code: '14011', image: 'images/UGRAM RAILING PILLAR/14011.png', weight: '7.7 Kg' }
            ]
        },
        {
            id: 'rp-roman-3',
            name: 'Roman Pillar III',
            category: 'railing-pillar',
            subcategory: 'railing-pillar',
            size: '24 in × 95 mm',
            weight: '7.8 Kg',
            perBox: 1,
            description: 'Tapered neoclassical pillar for sophisticated railing systems and terrace borders.',
            application: ['railing', 'outdoor'],
            image: 'images/UGRAM RAILING PILLAR/14021.png',
            colours: [
                { name: 'White', code: '14021', image: 'images/UGRAM RAILING PILLAR/14021.png', weight: '7.8 Kg' },
                { name: 'Red', code: '14022', image: 'images/UGRAM RAILING PILLAR/14022.png', weight: '7.9 Kg' }
            ]
        },
        {
            id: 'rp-roman-4',
            name: 'Roman Pillar IV',
            category: 'railing-pillar',
            subcategory: 'railing-pillar',
            size: '24 in × 95 mm',
            weight: '5.3 Kg',
            perBox: 1,
            description: 'Lightweight contemporary pillar combining classic proportions with modern structural efficiency.',
            application: ['railing', 'outdoor'],
            image: 'images/UGRAM RAILING PILLAR/14031.png',
            colours: [
                { name: 'White', code: '14031', image: 'images/UGRAM RAILING PILLAR/14031.png', weight: '5.3 Kg' }
            ]
        },
        {
            id: 'rp-copping',
            name: 'Copping',
            category: 'railing-pillar',
            subcategory: 'railing-pillar',
            size: '24 in',
            weight: '7.2 Kg',
            perBox: 1,
            description: 'Decorative cap element for railing pillars. Provides a finished, polished top to balustrade systems.',
            application: ['railing', 'outdoor'],
            image: 'images/UGRAM RAILING PILLAR/14041.png',
            colours: [
                { name: 'White', code: '14041', image: 'images/UGRAM RAILING PILLAR/14041.png', weight: '7.2 Kg' }
            ]
        },
        {
            id: 'rp-rectangle-lock',
            name: 'Rectangle Lock',
            category: 'railing-pillar',
            subcategory: 'railing-pillar',
            size: '230 × 60 × 60 mm',
            weight: '1.4 Kg',
            perBox: 1,
            description: '360-degree interlocking structural component for modern railing stability and alignment.',
            application: ['railing', 'outdoor'],
            image: 'images/UGRAM RAILING PILLAR/14051.png',
            colours: [
                { name: 'White', code: '14051', image: 'images/UGRAM RAILING PILLAR/14051.png', weight: '1.4 Kg' },
                { name: 'Red', code: '14052', image: 'images/UGRAM RAILING PILLAR/14052.png', weight: '1.4 Kg' }
            ]
        },
        {
            id: 'rp-round-lock',
            name: 'Round Lock',
            category: 'railing-pillar',
            subcategory: 'railing-pillar',
            size: '230 × 60 × 60 mm',
            weight: '1.3 Kg',
            perBox: 1,
            description: '360-degree cylindrical interlocking component for curved railing configurations and smooth transitions.',
            application: ['railing', 'outdoor'],
            image: 'images/UGRAM RAILING PILLAR/14061.png',
            colours: [
                { name: 'White', code: '14061', image: 'images/UGRAM RAILING PILLAR/14061.png', weight: '1.3 Kg' }
            ]
        }
    ];

    // -------------------------------------------------------------------------
    // 2. RENDER FUNCTIONS
    // -------------------------------------------------------------------------
    const productGrid = document.getElementById('productGrid');
    const noResults = document.getElementById('noResults');

    function renderProducts(items) {
        productGrid.innerHTML = '';

        if (items.length === 0) {
            noResults.classList.remove('hidden');
            return;
        } else {
            noResults.classList.add('hidden');
        }

        items.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card fade-in-up';

            // Format applications tags
            const tagsHtml = product.application.map(app =>
                `<span class="tag">${capitalize(app)}</span>`
            ).join('');

            const categoryLabels = { 'breeze-block': 'Breeze Block', '3d-tile': '3D Tile', 'wall-tile': 'Wall Tile', 'railing-pillar': 'Railing Pillar' };
            const categoryLabel = categoryLabels[product.category] || 'Product';

            // Subcategory badge
            let finishLabel = '';
            if (product.subcategory === 'single-side') finishLabel = 'Single Side';
            else if (product.subcategory === 'double-side') finishLabel = 'Double Side';

            // Colour swatches
            const colourMap = { 'White': '#f5f5f5', 'Red': '#c0392b', 'Orange': '#e67e22', 'Grey': '#95a5a6', 'Dark Grey': '#555', 'Brown': '#8b5e3c', 'Black': '#222', 'Yellow': '#f1c40f', 'Olive': '#808000' };
            let coloursHtml = '';
            if (product.colours && product.colours.length > 1) {
                coloursHtml = `<div class="colour-swatches">` +
                    product.colours.map((c, i) =>
                        `<span class="colour-dot${i === 0 ? ' active' : ''}" 
                              style="background-color: ${colourMap[c.name] || '#ccc'}" 
                              title="${c.name}"
                              data-image="${c.image}"
                              onclick="swapCardImage(this)"></span>`
                    ).join('') + `</div>`;
            }

            card.innerHTML = `
                <div class="card-image" onclick="openModal('${product.id}')">
                    <span class="card-badge">${categoryLabel}${finishLabel ? ' · ' + finishLabel : ''}</span>
                    <img src="${product.image}" loading="lazy" alt="${product.name} ${categoryLabel}" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x400?text=UGRAM+Product';">
                    <div class="card-overlay">
                        <span>View Specifications</span>
                    </div>
                </div>
                <div class="card-content">
                    <span class="card-category">UGRAM™ Collection</span>
                    <h3 class="card-title">${product.name}</h3>
                    <p class="text-sm text-muted">${product.description}</p>
                    
                    <div class="card-specs">
                        <div class="spec-item">
                            <span>Size</span>
                            <span>${product.size}</span>
                        </div>
                        <div class="spec-item">
                            <span>Weight</span>
                            <span>${product.weight}</span>
                        </div>
                        <div class="spec-item">
                            <span>Per Box Qty</span>
                            <span>${product.perBox} pcs</span>
                        </div>
                    </div>

                    ${coloursHtml}
                    
                    <div class="card-footer">
                        <div class="card-tags">
                            ${tagsHtml}
                        </div>
                        <button class="btn-text" onclick="openModal('${product.id}')">Specs <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    function capitalize(str) {
        return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    // Swap card image on colour dot click
    window.swapCardImage = function (dot) {
        const card = dot.closest('.product-card');
        const img = card.querySelector('.card-image img');
        img.src = dot.dataset.image;
        // Update active state
        dot.parentElement.querySelectorAll('.colour-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        // Stop event from bubbling to openModal
        event.stopPropagation();
    };

    // Initial Render
    renderProducts(products);

    // -------------------------------------------------------------------------
    // 3. FILTER LOGIC
    // -------------------------------------------------------------------------
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const finishFilter = document.getElementById('finishFilter');
    const appFilter = document.getElementById('appFilter');
    const resetBtn = document.getElementById('resetFilters');

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const categoryVal = categoryFilter.value;
        const finishVal = finishFilter.value;
        const appVal = appFilter.value;

        const filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = categoryVal === 'all' || product.category === categoryVal;
            const matchesFinish = finishVal === 'all' || product.subcategory === finishVal;
            const matchesApp = appVal === 'all' || product.application.includes(appVal);

            return matchesSearch && matchesCategory && matchesFinish && matchesApp;
        });

        renderProducts(filtered);
    }

    // Event Listeners
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    finishFilter.addEventListener('change', filterProducts);
    appFilter.addEventListener('change', filterProducts);

    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        categoryFilter.value = 'all';
        finishFilter.value = 'all';
        appFilter.value = 'all';
        renderProducts(products);
    });

    // -------------------------------------------------------------------------
    // 4. ANIMATIONS & INTERACTIONS
    // -------------------------------------------------------------------------

    // Navbar Transition
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.querySelector('i').classList.remove('fa-times');
            navToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // Scroll Reveal Animation (IntersectionObserver)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Trigger counters if in stat container
                if (entry.target.querySelector('.counter')) {
                    startCounters();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Number Counters
    let countersStarted = false;
    function startCounters() {
        if (countersStarted) return;

        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / 50;

            const updateCount = () => {
                const count = +counter.innerText;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 40);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
        countersStarted = true;
    }

    // Scroll To Top
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // -------------------------------------------------------------------------
    // 5. CONTACT FORM HANDLER
    // -------------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulating form submission
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Thank you for contacting UGRAM! We will get back to you shortly.');
            contactForm.reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });

    // -------------------------------------------------------------------------
    // 6. PRODUCT MODAL
    // -------------------------------------------------------------------------
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalImg = document.getElementById('modalImg');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalSize = document.getElementById('modalSize');
    const modalWeight = document.getElementById('modalWeight');
    const modalApps = document.getElementById('modalApps');

    // Make functions global so onClick works
    window.openModal = function (productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        modalImg.src = product.image;
        modalCategory.innerText = product.category.replace('-', ' ') +
            (product.subcategory === 'single-side' ? ' · Single Side Finish' :
                product.subcategory === 'double-side' ? ' · Double Side Finish' : '');
        modalTitle.innerText = product.name;
        modalDesc.innerText = product.description;
        modalSize.innerText = product.size;
        modalWeight.innerText = product.weight;
        modalApps.innerText = product.application.map(app => capitalize(app)).join(', ');
        document.getElementById('modalPerBox').innerText = product.perBox + ' pcs';

        // Render colour variants in modal
        const existingSwatches = document.querySelector('.modal-colours');
        if (existingSwatches) existingSwatches.remove();

        if (product.colours && product.colours.length > 1) {
            const colourMap = { 'White': '#f5f5f5', 'Red': '#c0392b', 'Orange': '#e67e22', 'Grey': '#95a5a6', 'Dark Grey': '#555', 'Brown': '#8b5e3c', 'Black': '#222', 'Yellow': '#f1c40f', 'Olive': '#808000' };
            const coloursDiv = document.createElement('div');
            coloursDiv.className = 'modal-colours';
            coloursDiv.innerHTML = '<strong>Available Colours:</strong><div class="modal-colour-dots">' +
                product.colours.map((c, i) =>
                    `<span class="colour-dot${i === 0 ? ' active' : ''}" 
                          style="background-color: ${colourMap[c.name] || '#ccc'}" 
                          title="${c.name}"
                          data-image="${c.image}"
                          data-weight="${c.weight}"
                          onclick="swapModalImage(this)"></span>`
                ).join('') + '</div>';

            const modalSpecs = document.querySelector('.modal-specs');
            modalSpecs.parentNode.insertBefore(coloursDiv, modalSpecs);
        }

        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    };

    window.swapModalImage = function (dot) {
        modalImg.src = dot.dataset.image;
        modalWeight.innerText = dot.dataset.weight;
        dot.parentElement.querySelectorAll('.colour-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    };

    window.closeModal = function () {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        document.body.style.overflow = 'auto';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', window.closeModal);
    }

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            window.closeModal();
        }
    });

    // Update product card HTML to include onclick
    // We need to re-render products to attach the new onclick event
    // Or we can use event delegation. Let's use event delegation on productGrid.
    productGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card) {
            // Find the product name from the card title to look up ID
            // Since we didn't store ID in DOM initially, let's look up by name
            const name = card.querySelector('.card-title').innerText;
            const product = products.find(p => p.name === name);
            if (product) {
                window.openModal(product.id);
            }
        }
    });

});
