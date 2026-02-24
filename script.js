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
        // BREEZE BLOCKS — DOUBLE SIDE FINISH (from image folder)
        // =====================================================================
        {
            id: 'ds-petal',
            name: 'Petal',
            category: 'breeze-block',
            subcategory: 'double-side',
            size: '200 × 200 × 60 mm',
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
            size: '200 × 200 × 60 mm',
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
            size: '200 × 200 × 60 mm',
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
            size: '200 × 200 × 60 mm',
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
            size: '200 × 200 × 60 mm',
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
            size: '200 × 200 × 60 mm',
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
            size: '200 × 200 × 60 mm',
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
            size: '200 × 200 × 60 mm',
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
            size: '200 × 200 × 60 mm',
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

            const categoryLabel = product.category === 'breeze-block' ? 'Breeze Block' : '3D Tile';

            // Subcategory badge
            let finishLabel = '';
            if (product.subcategory === 'single-side') finishLabel = 'Single Side';
            else if (product.subcategory === 'double-side') finishLabel = 'Double Side';

            // Colour swatches
            const colourMap = { 'White': '#f5f5f5', 'Red': '#c0392b', 'Orange': '#e67e22', 'Grey': '#95a5a6', 'Dark Grey': '#555', 'Brown': '#8b5e3c', 'Black': '#222', 'Yellow': '#f1c40f' };
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
            const colourMap = { 'White': '#f5f5f5', 'Red': '#c0392b', 'Orange': '#e67e22', 'Grey': '#95a5a6', 'Dark Grey': '#555', 'Brown': '#8b5e3c', 'Black': '#222', 'Yellow': '#f1c40f' };
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
