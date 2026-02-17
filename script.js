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
        // --- BREEZE BLOCKS (Original Collection) ---
        {
            id: 'b1',
            name: 'Petal',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Floral inspired geometric pattern providing aesthetic ventilation.',
            application: ['facade', 'partition', 'outdoor'],
            image: 'images/breeze-blocks/Petal.jpeg'
        },
        {
            id: 'b2',
            name: 'Camp',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Minimalist classic design suitable for modern compounds.',
            application: ['fence', 'outdoor'],
            image: 'images/breeze-blocks/CAMP.jpeg'
        },
        {
            id: 'b3',
            name: 'Seaform',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '2.8 Kg',
            description: 'Fluid organic waves creating dynamic shadow play.',
            application: ['facade', 'partition', 'indoor'],
            image: 'images/breeze-blocks/Seaform.png'
        },
        {
            id: 'b4',
            name: 'Flower',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Traditional floral motif re-engineered for contemporary use.',
            application: ['fence', 'partition'],
            image: 'images/breeze-blocks/Flower.jpeg'
        },
        {
            id: 'b5',
            name: 'Curl',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '2.9 Kg',
            description: 'Soft curves that soften brutalist concrete structures.',
            application: ['facade', 'indoor', 'partition'],
            image: 'images/breeze-blocks/Curl.jpeg'
        },
        {
            id: 'b6',
            name: 'Crosstine',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.1 Kg',
            description: 'Strong intersecting lines for secure yet airy barriers.',
            application: ['fence', 'outdoor'],
            image: 'images/breeze-blocks/Crosstine.jpeg'
        },
        {
            id: 'b7',
            name: 'Stonee',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.2 Kg',
            description: 'Robust texture mimicking natural stone finishes.',
            application: ['facade', 'outdoor'],
            image: 'images/breeze-blocks/stonee.png'
        },
        {
            id: 'b8',
            name: 'Tulip',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '2.8 Kg',
            description: 'Elegant tulip-inspired negative space design.',
            application: ['partition', 'indoor'],
            image: 'images/breeze-blocks/Tulip.jpeg'
        },
        {
            id: 'b9',
            name: 'Lotus',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Symmetrical lotus pattern for zen-like spaces.',
            application: ['facade', 'partition'],
            image: 'images/breeze-blocks/lotus.png'
        },
        {
            id: 'b10',
            name: 'Swastik',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Traditional auspicious symbol with modern casting.',
            application: ['indoor', 'outdoor'],
            image: 'images/breeze-blocks/swastik.jpeg'
        },
        {
            id: 'b11',
            name: 'Mountain',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.1 Kg',
            description: 'Triangular peaks offering privacy and style.',
            application: ['fence', 'facade'],
            image: 'images/breeze-blocks/mountain.png'
        },
        // --- BREEZE BLOCKS (New Additions) ---
        {
            id: 'bb-asymmetric',
            name: 'Asymmetric Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Modern asymmetric design for contemporary facades.',
            application: ['facade', 'outdoor'],
            image: 'images/breeze-blocks/Asymmetric.jpg'
        },
        {
            id: 'bb-diamond',
            name: 'Diamond Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Classic diamond pattern offering excellent privacy.',
            application: ['fence', 'partition'],
            image: 'images/breeze-blocks/Diamond.jpg'
        },
        {
            id: 'bb-diamond-screen',
            name: 'Diamond Screen',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '2.9 Kg',
            description: 'Intricate diamond lattice for light filtration.',
            application: ['indoor', 'partition'],
            image: 'images/breeze-blocks/DiamondScreen.jpg'
        },
        {
            id: 'bb-floral',
            name: 'Floral Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Detailed floral design for decorative walls.',
            application: ['facade', 'garden'],
            image: 'images/breeze-blocks/FloralBlock.jpg'
        },
        {
            id: 'bb-funnel',
            name: 'Funnel Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.1 Kg',
            description: 'Funnel-shaped openings that play with depth.',
            application: ['facade', 'outdoor'],
            image: 'images/breeze-blocks/Funnel.jpg'
        },
        {
            id: 'bb-grid',
            name: 'Grid Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Standard grid pattern for clean, linear looks.',
            application: ['fence', 'industrial'],
            image: 'images/breeze-blocks/Grid.jpg'
        },
        {
            id: 'bb-hourglass',
            name: 'Hourglass Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '2.9 Kg',
            description: 'Iconic hourglass shape for timeless appeal.',
            application: ['partition', 'indoor'],
            image: 'images/breeze-blocks/Hourglass.jpg'
        },
        {
            id: 'bb-lvoid',
            name: 'L-Void Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'L-shaped voids creating interlocking visual patterns.',
            application: ['facade', 'outdoor'],
            image: 'images/breeze-blocks/LVoid.jpg'
        },
        {
            id: 'bb-mblock',
            name: 'M-Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Bold M-shape design for strong architectural statements.',
            application: ['fence', 'facade'],
            image: 'images/breeze-blocks/MBlock.jpg'
        },
        {
            id: 'bb-octagon',
            name: 'Octagon Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.1 Kg',
            description: 'Geometric octagon pattern for structured elegance.',
            application: ['facade', 'partition'],
            image: 'images/breeze-blocks/Octagon.jpg'
        },
        {
            id: 'bb-octofoil',
            name: 'Octofoil Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Eight-lobed design inspired by traditional architecture.',
            application: ['indoor', 'decorative'],
            image: 'images/breeze-blocks/Octofoil.jpg'
        },
        {
            id: 'bb-pentagonal',
            name: 'Pentagonal Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Five-sided geometric pattern for modern facades.',
            application: ['facade', 'outdoor'],
            image: 'images/breeze-blocks/Pentagonal.jpg'
        },
        {
            id: 'bb-planter',
            name: 'Planter Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.5 Kg',
            description: 'Functional block designed to hold vertical greenery.',
            application: ['garden', 'outdoor'],
            image: 'images/breeze-blocks/Planter.jpg'
        },
        {
            id: 'bb-pyramid',
            name: 'Pyramid Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.2 Kg',
            description: 'Pyramidal relief adding significant depth and shadow.',
            application: ['facade', 'feature-wall'],
            image: 'images/breeze-blocks/Pyramid.jpg'
        },
        {
            id: 'bb-quatrefoil',
            name: 'Quatrefoil Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Classic four-lobed design for cultural continuity.',
            application: ['partition', 'facade'],
            image: 'images/breeze-blocks/Quatrefoil.jpg'
        },
        {
            id: 'bb-screen',
            name: 'Screen Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '2.8 Kg',
            description: 'High-ventilation screen for maximum airflow.',
            application: ['fence', 'outdoor'],
            image: 'images/breeze-blocks/Screen.jpg'
        },
        {
            id: 'bb-slot',
            name: 'Slot Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.1 Kg',
            description: 'Minimalist slot opening for privacy and ventilation.',
            application: ['facade', 'fence'],
            image: 'images/breeze-blocks/Slot.jpg'
        },
        {
            id: 'bb-star',
            name: 'Star Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '2.9 Kg',
            description: 'Decorative star pattern for feature installations.',
            application: ['indoor', 'partition'],
            image: 'images/breeze-blocks/Star.jpg'
        },
        {
            id: 'bb-three-stripe',
            name: 'Three Stripe',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Linear three-stripe design for modern texture.',
            application: ['facade', 'outdoor'],
            image: 'images/breeze-blocks/ThreeStripe.jpg'
        },
        {
            id: 'bb-ublock',
            name: 'U-Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'U-shaped motif for repetitive pattern generation.',
            application: ['fence', 'facade'],
            image: 'images/breeze-blocks/UBlock.jpg'
        },
        {
            id: 'bb-uframe',
            name: 'U-Frame',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Framed U design for structured visual appeal.',
            application: ['facade', 'outdoor'],
            image: 'images/breeze-blocks/UFrame.jpg'
        },
        {
            id: 'bb-vase',
            name: 'Vase Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Elegant vase silhouette for classic styling.',
            application: ['garden', 'partition'],
            image: 'images/breeze-blocks/Vase.jpg'
        },
        {
            id: 'bb-wblock',
            name: 'W-Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'W-shaped geometric block for strong zig-zag patterns.',
            application: ['fence', 'facade'],
            image: 'images/breeze-blocks/WBlock.jpg'
        },
        {
            id: 'bb-window',
            name: 'Window Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.1 Kg',
            description: 'Rectangular window opening for simple utility.',
            application: ['outdoor', 'ventilation'],
            image: 'images/breeze-blocks/Window.jpg'
        },
        {
            id: 'bb-twisting',
            name: 'Twisting Block',
            category: 'breeze-block',
            size: '200 x 200 x 60mm',
            weight: '3.0 Kg',
            description: 'Twisted geometry creating dynamic light and shadow.',
            application: ['facade', 'feature-wall'],
            image: 'images/breeze-blocks/Twisting.jpg'
        },


        // --- 3D TILES (Original Collection) ---
        {
            id: 't2',
            name: 'S-Ovate',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '3.8 Kg',
            description: 'Soft oval protruded forms for gentle aesthetics.',
            application: ['indoor'],
            image: 'images/3d-tiles/S-Ovate.jpg'
        },
        {
            id: 't4',
            name: 'H-Prism',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '3.9 Kg',
            description: 'Sharp prismatic facets that catch light.',
            application: ['indoor', 'facade'],
            image: 'images/3d-tiles/H-Prism.jpg'
        },
        {
            id: 't5',
            name: 'S-Ralse',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '4.1 Kg',
            description: 'Rising step pattern for dynamic vertical rhythm.',
            application: ['facade', 'outdoor'],
            image: 'images/3d-tiles/S-Ralse.jpg'
        },

        // --- 3D TILES (New Additions) ---
        {
            id: '3d-bamboo',
            name: 'Bamboo Tile',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '4.0 Kg',
            description: 'Nature-inspired bamboo texture for serene spaces.',
            application: ['indoor', 'facade'],
            image: 'images/3d-tiles/Bamboo.jpg'
        },
        {
            id: '3d-bubble',
            name: 'Bubble Texture',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '3.9 Kg',
            description: 'Playful bubble texture adding surface interest.',
            application: ['indoor', 'kid-friendly'],
            image: 'images/3d-tiles/Bubble.jpg'
        },
        {
            id: '3d-concave',
            name: 'Concave Tile',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '3.8 Kg',
            description: 'Inward curving surface for light capture.',
            application: ['facade', 'indoor'],
            image: 'images/3d-tiles/Concave.jpg'
        },
        {
            id: '3d-dualhorn',
            name: 'Dual Horn',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '4.0 Kg',
            description: 'Symmetrical horn-like protrusions.',
            application: ['facade', 'feature-wall'],
            image: 'images/3d-tiles/DualHorn.jpg'
        },
        {
            id: '3d-faceted',
            name: 'Faceted Tile',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '3.9 Kg',
            description: 'Multi-faceted surface for complex reflections.',
            application: ['facade', 'outdoor'],
            image: 'images/3d-tiles/Faceted.jpg'
        },
        {
            id: '3d-geohex',
            name: 'Geometric Hex',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '4.0 Kg',
            description: 'Sharp hexagonal geometry.',
            application: ['indoor', 'office'],
            image: 'images/3d-tiles/GeoHex.jpg'
        },
        {
            id: '3d-hexcluster',
            name: 'Hex Cluster',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '4.0 Kg',
            description: 'Clustered hexagonal pattern.',
            application: ['facade', 'outdoor'],
            image: 'images/3d-tiles/HexCluster.jpg'
        },
        {
            id: '3d-hexagonal',
            name: 'Hexagonal Tile',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '3.8 Kg',
            description: 'Single large hexagonal form.',
            application: ['indoor', 'partition'],
            image: 'images/3d-tiles/Hexagonal.jpg'
        },
        {
            id: '3d-pyramid-tile',
            name: 'Pyramid Tile',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '4.1 Kg',
            description: 'Classic 3D pyramid shape.',
            application: ['facade', 'outdoor'],
            image: 'images/3d-tiles/PyramidTile.jpg'
        },
        {
            id: '3d-quatrefoil',
            name: 'Quatrefoil Tile',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '3.9 Kg',
            description: 'Relief quatrefoil pattern.',
            application: ['indoor', 'decorative'],
            image: 'images/3d-tiles/QuatrefoilTile.jpg'
        },
        {
            id: '3d-ribbed',
            name: 'Ribbed Panel',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '4.0 Kg',
            description: 'Linear ribbed texture for height enhancement.',
            application: ['facade', 'indoor'],
            image: 'images/3d-tiles/Ribbed.jpg'
        },
        {
            id: '3d-texpyramid',
            name: 'Textured Pyramid',
            category: '3d-tile',
            size: '300 x 300mm',
            weight: '4.2 Kg',
            description: 'Pyramid shape with added surface texture.',
            application: ['facade', 'outdoor'],
            image: 'images/3d-tiles/TexPyramid.jpg'
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

            card.innerHTML = `
                <div class="card-image">
                    <span class="card-badge">${categoryLabel}</span>
                    <img src="${product.image}" loading="lazy" alt="${product.name} ${categoryLabel}" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x400?text=UGRAM+Product';">
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
                    </div>
                    
                    <div class="card-tags">
                        ${tagsHtml}
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Initial Render
    renderProducts(products);

    // -------------------------------------------------------------------------
    // 3. FILTER LOGIC
    // -------------------------------------------------------------------------
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const appFilter = document.getElementById('appFilter');
    const sizeFilter = document.getElementById('sizeFilter');
    const resetBtn = document.getElementById('resetFilters');

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const categoryVal = categoryFilter.value;
        const appVal = appFilter.value;
        const sizeVal = sizeFilter.value;

        const filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            const matchesCategory = categoryVal === 'all' || product.category === categoryVal;
            const matchesApp = appVal === 'all' || product.application.includes(appVal);

            let matchesSize = true;
            if (sizeVal !== 'all') {
                if (sizeVal === '200') matchesSize = product.size.includes('200');
                else if (sizeVal === '300') matchesSize = product.size.includes('300');
                else if (sizeVal === 'custom') matchesSize = !product.size.includes('200') && !product.size.includes('300');
            }

            return matchesSearch && matchesCategory && matchesApp && matchesSize;
        });

        renderProducts(filtered);
    }

    // Event Listeners
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    appFilter.addEventListener('change', filterProducts);
    sizeFilter.addEventListener('change', filterProducts);

    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        categoryFilter.value = 'all';
        appFilter.value = 'all';
        sizeFilter.value = 'all';
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
        modalCategory.innerText = product.category.replace('-', ' ');
        modalTitle.innerText = product.name;
        modalDesc.innerText = product.description;
        modalSize.innerText = product.size;
        modalWeight.innerText = product.weight;
        modalApps.innerText = product.application.map(app => capitalize(app)).join(', ');

        modal.style.display = 'flex';
        // Small delay for transition
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
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
