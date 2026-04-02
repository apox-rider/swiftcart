import { createClient } from '@sanity/client';
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.configDotenv()

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Use your actual Project ID and Dataset name
const client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_WRITE_TOKEN, 
});

// const products = [
//   {
//     _id: 'prod_001',
//     _type: 'product',
//     name: 'Classic White T-Shirt',
//     slug: { _type: 'slug', current: 'classic-white-tshirt' },
//     price: 29.99,
//     stock: 150,
//     category: 'Apparel',
//     description: 'A comfortable cotton t-shirt.',
//   },
//   {
//     "_id": "prod_002",
//     "_type": "product",
//     "name": "Leather Messenger Bag",
//     "slug": { "_type": "slug", "current": "leather-messenger-bag" },
//     "price": 120.00,
//     "stock": 15,
//     "category": "Accessories",
//     "tags": ["office", "travel", "leather"],
//     "description": "Handcrafted premium leather bag with dedicated laptop compartment and adjustable strap."
//   },
//   {
//     "_id": "prod_003",
//     "_type": "product",
//     "name": "High-Performance Running Shoes",
//     "slug": { "_type": "slug", "current": "running-shoes-v1" },
//     "price": 85.50,
//     "stock": 42,
//     "category": "Footwear",
//     "tags": ["fitness", "sports"],
//     "description": "Lightweight breathable mesh upper with responsive cushioning for long-distance comfort."
//   },
//   {
//     "_id": "prod_004",
//     "_type": "product",
//     "name": "Vintage Denim Jacket",
//     "slug": { "_type": "slug", "current": "vintage-denim-jacket" },
//     "price": 65.00,
//     "stock": 8,
//     "category": "Apparel",
//     "tags": ["style", "outerwear"],
//     "description": "Classic wash denim jacket featuring reinforced stitching and a relaxed fit."
//   },
//   {
//     "_id": "prod_005",
//     "_type": "product",
//     "name": "Polarized Sunglasses",
//     "slug": { "_type": "slug", "current": "polarized-sunglasses" },
//     "price": 45.00,
//     "stock": 120,
//     "category": "Accessories",
//     "tags": ["summer", "eyewear"],
//     "description": "UV400 protection with anti-glare polarized lenses and a lightweight frame."
//   },
//   {
//     "_id": "prod_006",
//     "_type": "product",
//     "name": "Matte Ceramic Coffee Mug",
//     "slug": { "_type": "slug", "current": "matte-ceramic-mug" },
//     "price": 18.99,
//     "stock": 200,
//     "category": "Home & Living",
//     "tags": ["kitchen", "minimalist"],
//     "description": "Hand-finished ceramic mug with a minimalist matte texture. Microwave and dishwasher safe."
//   },
//   {
//     "_id": "prod_007",
//     "_type": "product",
//     "name": "Wireless Over-Ear Headphones",
//     "slug": { "_type": "slug", "current": "wireless-headphones-pro" },
//     "price": 199.00,
//     "stock": 0,
//     "category": "Electronics",
//     "tags": ["tech", "audio"],
//     "description": "Noise-cancelling wireless headphones with 40-hour battery life and high-fidelity sound."
//   },
//   {
//     "_id": "prod_008",
//     "_type": "product",
//     "name": "Mechanical Gaming Keyboard",
//     "slug": { "_type": "slug", "current": "mechanical-gaming-keyboard" },
//     "price": 89.00,
//     "stock": 25,
//     "category": "Electronics",
//     "tags": ["gaming", "peripherals"],
//     "description": "RGB backlit mechanical keyboard with blue switches for tactile feedback."
//   },
//   {
//     "_id": "prod_009",
//     "_type": "product",
//     "name": "Minimalist Wall Clock",
//     "slug": { "_type": "slug", "current": "minimalist-wall-clock" },
//     "price": 35.00,
//     "stock": 12,
//     "category": "Home & Living",
//     "tags": ["decor", "minimalist"],
//     "description": "A sleek, silent-movement wall clock with a matte black finish."
//   },
//   {
//     "_id": "prod_010",
//     "_type": "product",
//     "name": "Cotton Crewneck Sweater",
//     "slug": { "_type": "slug", "current": "cotton-crewneck-sweater" },
//     "price": 45.99,
//     "stock": 0,
//     "category": "Apparel",
//     "tags": ["winter", "basics"],
//     "description": "Soft 100% organic cotton sweater, perfect for layering."
//   },
//   {
//     "_id": "prod_011",
//     "_type": "product",
//     "name": "Stainless Steel Water Bottle",
//     "slug": { "_type": "slug", "current": "stainless-steel-bottle" },
//     "price": 24.50,
//     "stock": 150,
//     "category": "Accessories",
//     "tags": ["eco-friendly", "fitness"],
//     "description": "Vacuum-insulated bottle that keeps drinks cold for 24 hours."
//   },
//   {
//     "_id": "prod_012",
//     "_type": "product",
//     "name": "Professional Graphic Tablet",
//     "slug": { "_type": "slug", "current": "graphic-tablet-pro" },
//     "price": 299.00,
//     "stock": 8,
//     "category": "Electronics",
//     "tags": ["design", "art"],
//     "description": "High-pressure sensitivity tablet for digital artists and designers."
//   },
//   {
//     "_id": "prod_013",
//     "_type": "product",
//     "name": "Ergonomic Mesh Office Chair",
//     "slug": { "_type": "slug", "current": "ergonomic-mesh-office-chair" },
//     "price": 249.99,
//     "stock": 10,
//     "category": "Furniture",
//     "tags": ["office", "wellness", "work-from-home"],
//     "description": "Breathable mesh back with adjustable lumbar support and 4D armrests for all-day comfort."
//   },
//   {
//     "_id": "prod_014",
//     "_type": "product",
//     "name": "Compact Espresso Machine",
//     "slug": { "_type": "slug", "current": "compact-espresso-machine" },
//     "price": 155.00,
//     "stock": 22,
//     "category": "Home & Living",
//     "tags": ["kitchen", "coffee", "appliances"],
//     "description": "Professional 15-bar pressure system with a built-in milk frother for barista-quality lattes."
//   },
//   {
//     "_id": "prod_015",
//     "_type": "product",
//     "name": "Bamboo Laptop Stand",
//     "slug": { "_type": "slug", "current": "bamboo-laptop-stand" },
//     "price": 38.50,
//     "stock": 45,
//     "category": "Accessories",
//     "tags": ["minimalist", "office", "eco-friendly"],
//     "description": "Elevated sustainable wood stand designed to improve posture and laptop airflow."
//   },
//   {
//     "_id": "prod_016",
//     "_type": "product",
//     "name": "Acoustic Guitar Starter Kit",
//     "slug": { "_type": "slug", "current": "acoustic-guitar-kit" },
//     "price": 180.00,
//     "stock": 14,
//     "category": "Music",
//     "tags": ["hobby", "instruments", "education"],
//     "description": "Full-size dreadnought guitar including a gig bag, tuner, and picks for beginners."
//   },
//   {
//     "_id": "prod_017",
//     "_type": "product",
//     "name": "Smart Fitness Tracker",
//     "slug": { "_type": "slug", "current": "smart-fitness-tracker-v2" },
//     "price": 110.00,
//     "stock": 75,
//     "category": "Electronics",
//     "tags": ["tech", "fitness", "health"],
//     "description": "Waterproof wearable featuring heart rate monitoring, sleep tracking, and GPS."
//   },
//   {
//     "_id": "prod_018",
//     "_type": "product",
//     "name": "Heavy-Duty Cast Iron Skillet",
//     "slug": { "_type": "slug", "current": "cast-iron-skillet-12in" },
//     "price": 42.00,
//     "stock": 30,
//     "category": "Home & Living",
//     "tags": ["kitchen", "cooking", "durable"],
//     "description": "Pre-seasoned 12-inch skillet offering superior heat retention for searing and baking."
//   },
//   {
//     "_id": "prod_019",
//     "_type": "product",
//     "name": "Waterproof Trail Hiking Boots",
//     "slug": { "_type": "slug", "current": "waterproof-trail-boots" },
//     "price": 135.00,
//     "stock": 18,
//     "category": "Footwear",
//     "tags": ["outdoor", "adventure", "sports"],
//     "description": "Rugged all-terrain boots with reinforced toe caps and high-grip rubber outsoles."
//   },
//   {
//     "_id": "prod_020",
//     "_type": "product",
//     "name": "Organic Skincare Travel Set",
//     "slug": { "_type": "slug", "current": "organic-skincare-travel-set" },
//     "price": 29.99,
//     "stock": 110,
//     "category": "Personal Care",
//     "tags": ["wellness", "travel", "organic"],
//     "description": "TSA-approved set containing cleanser, toner, and moisturizer made from natural botanicals."
//   }
// ];
// const addresses=[
//   {
//     "_id": "addr_001",
//     "_type": "address",
//     "label": "Home",
//     "street": "123 Magomeni Mapipa",
//     "city": "Dar es Salaam",
//     "region": "Coastal",
//     "country": "Tanzania",
//     "postalCode": "14111",
//     "isDefault": true
//   },
//   {
//     "_id": "addr_002",
//     "_type": "address",
//     "label": "Office",
//     "street": "456 Uhuru Street",
//     "city": "Arusha",
//     "region": "Northern",
//     "country": "Tanzania",
//     "postalCode": "23101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_003",
//     "_type": "address",
//     "label": "Branch Office",
//     "street": "789 Nyerere Road",
//     "city": "Mwanza",
//     "region": "Lake",
//     "country": "Tanzania",
//     "postalCode": "33101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_004",
//     "_type": "address",
//     "label": "Main Warehouse",
//     "street": "Plot 12 Industrial Area",
//     "city": "Dodoma",
//     "region": "Central",
//     "country": "Tanzania",
//     "postalCode": "41101",
//     "isDefault": false
//   },

//   {
//     "_id": "addr_005",
//     "_type": "address",
//     "label": "Secondary Warehouse",
//     "street": "Plot 88 Vingunguti",
//     "city": "Dar es Salaam",
//     "region": "Coastal",
//     "country": "Tanzania",
//     "postalCode": "12101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_006",
//     "_type": "address",
//     "label": "Retail Store A",
//     "street": "Kenyatta Road, Suite 4",
//     "city": "Mwanza",
//     "region": "Lake",
//     "country": "Tanzania",
//     "postalCode": "33102",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_007",
//     "_type": "address",
//     "label": "Customer Support Hub",
//     "street": "Sokoine Road",
//     "city": "Mbeya",
//     "region": "Southern Highlands",
//     "country": "Tanzania",
//     "postalCode": "53101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_008",
//     "_type": "address",
//     "label": "Logistics Center",
//     "street": "Nyerere Square",
//     "city": "Dodoma",
//     "region": "Central",
//     "country": "Tanzania",
//     "postalCode": "41102",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_009",
//     "_type": "address",
//     "label": "Zanzibar Office",
//     "street": "Mkunazini Street",
//     "city": "Stone Town",
//     "region": "Zanzibar",
//     "country": "Tanzania",
//     "postalCode": "71101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_010",
//     "_type": "address",
//     "label": "Distribution Point",
//     "street": "Tabora Road",
//     "city": "Shinyanga",
//     "region": "Lake",
//     "country": "Tanzania",
//     "postalCode": "37101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_011",
//     "_type": "address",
//     "label": "Tech Hub Office",
//     "street": "Ali Hassan Mwinyi Rd",
//     "city": "Dar es Salaam",
//     "region": "Coastal",
//     "country": "Tanzania",
//     "postalCode": "14112",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_012",
//     "_type": "address",
//     "label": "Northern Branch",
//     "street": "Moshi-Arusha Rd",
//     "city": "Moshi",
//     "region": "Kilimanjaro",
//     "country": "Tanzania",
//     "postalCode": "25101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_013",
//     "_type": "address",
//     "label": "Coastal Storage",
//     "street": "Boko Area",
//     "city": "Bagamoyo",
//     "region": "Pwani",
//     "country": "Tanzania",
//     "postalCode": "61101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_014",
//     "_type": "address",
//     "label": "Residential Delivery 1",
//     "street": "Sinza Block C",
//     "city": "Dar es Salaam",
//     "region": "Coastal",
//     "country": "Tanzania",
//     "postalCode": "14113",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_015",
//     "_type": "address",
//     "label": "Tanga Outlet",
//     "street": "Market Street",
//     "city": "Tanga",
//     "region": "Tanga",
//     "country": "Tanzania",
//     "postalCode": "21101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_016",
//     "_type": "address",
//     "label": "Kigoma Hub",
//     "street": "Lumumba St",
//     "city": "Kigoma",
//     "region": "Western",
//     "country": "Tanzania",
//     "postalCode": "47101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_017",
//     "_type": "address",
//     "label": "Morogoro Pickup",
//     "street": "Iringa Road",
//     "city": "Morogoro",
//     "region": "Eastern",
//     "country": "Tanzania",
//     "postalCode": "67101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_018",
//     "_type": "address",
//     "label": "Lindi Office",
//     "street": "Boma Road",
//     "city": "Lindi",
//     "region": "Southern",
//     "country": "Tanzania",
//     "postalCode": "65101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_019",
//     "_type": "address",
//     "label": "Iringa Branch",
//     "street": "Gangilonga Hill",
//     "city": "Iringa",
//     "region": "Southern Highlands",
//     "country": "Tanzania",
//     "postalCode": "56101",
//     "isDefault": false
//   },
//   {
//     "_id": "addr_020",
//     "_type": "address",
//     "label": "Mtwara Port Site",
//     "street": "Shangani Street",
//     "city": "Mtwara",
//     "region": "Southern",
//     "country": "Tanzania",
//     "postalCode": "63101",
//     "isDefault": false
//   }

// ]

// const authors=[
//   {
//     "_id": "auth_001",
//     "_type": "author",
//     "name": "Avith R. Apolinary",
//     "nickname": "APOX RIDER",
//     "slug": { "_type": "slug", "current": "avith-r-apolinary" },
//     "role": "Lead Full-Stack Developer",
//     "bio": "Founder of Pox.Technologies. Specialist in Next.js, MySQL, and professional graphite artistry.",
//     "social": {
//       "twitter": "https://twitter.com/apoxrider",
//       "github": "https://github.com/pox-tech"
//     }
//   },
//   {
//     "_id": "auth_002",
//     "_type": "author",
//     "name": "Efransia J.",
//     "nickname": "Effy",
//     "slug": { "_type": "slug", "current": "efransia-j" },
//     "role": "UI/UX Designer",
//     "bio": "Creative designer focusing on clean, professional tech aesthetics and user experience.",
//     "social": {
//       "instagram": "https://instagram.com/effy_design"
//     }
//   },
//   {
//     "_id": "auth_003",
//     "_type": "author",
//     "name": "Anitha R.",
//     "slug": { "_type": "slug", "current": "anitha-r" },
//     "role": "Content Strategist",
//     "bio": "Managing communications and brand storytelling for Pox.Artistics and Pox.Graphics.",
//     "social": {}
//   },
//   {
//     "_id": "auth_004",
//     "_type": "author",
//     "name": "Noella M.",
//     "slug": { "_type": "slug", "current": "noella-m" },
//     "role": "Project Manager",
//     "bio": "Coordinating development timelines and client relations across all technology branches.",
//     "social": {
//       "linkedin": "https://linkedin.com/in/noella-m"
//     }
//   },
//   {
//     "_id": "auth_005",
//     "_type": "author",
//     "name": "Nasra S.",
//     "slug": { "_type": "slug", "current": "nasra-s" },
//     "role": "Quality Assurance",
//     "bio": "Specializing in front-end testing and ensuring design fidelity across mobile and desktop.",
//     "social": {}
//   }

// ]

// const blogCategories=[
//   {
//     "_id": "bcat_001",
//     "_type": "blogCategory",
//     "title": "Development Insights",
//     "slug": { "_type": "slug", "current": "development-insights" },
//     "description": "Technical deep-dives into Next.js, React, and MySQL for modern businesses.",
//     "color": "blue"
//   },
//   {
//     "_id": "bcat_002",
//     "_type": "blogCategory",
//     "title": "Artistic Techniques",
//     "slug": { "_type": "slug", "current": "artistic-techniques" },
//     "description": "Behind-the-scenes of hand-drawn graphite and charcoal portrait creation.",
//     "color": "gray"
//   },
//   {
//     "_id": "bcat_003",
//     "_type": "blogCategory",
//     "title": "Graphic Design Trends",
//     "slug": { "_type": "slug", "current": "design-trends" },
//     "description": "Tips on branding, poster design, and using Affinity Photo effectively.",
//     "color": "gold"
//   },
//   {
//     "_id": "bcat_004",
//     "_type": "blogCategory",
//     "title": "eCommerce Tips",
//     "slug": { "_type": "slug", "current": "ecommerce-tips" },
//     "description": "How to manage online stores, payment gateways, and digital inventories.",
//     "color": "green"
//   },
//   {
//     "_id": "bcat_005",
//     "_type": "blogCategory",
//     "title": "Product Spotlights",
//     "slug": { "_type": "slug", "current": "product-spotlights" },
//     "description": "Detailed looks at new arrivals and custom commission pieces.",
//     "color": "purple"
//   }
// ]

// const blogs=[
//   {
//     "_id": "blog_001",
//     "_type": "blog",
//     "title": "The Power of Next.js for Modern Admin Panels",
//     "slug": { "_type": "slug", "current": "nextjs-admin-panels-pox-tech" },
//     "author": { "_type": "reference", "_ref": "auth_001" },
//     "categories": [
//       { "_key": "c1", "_type": "reference", "_ref": "bcat_001" },
//       { "_key": "c2", "_type": "reference", "_ref": "bcat_004" }
//     ],
//     "publishedAt": "2026-04-01T08:00:00Z",
//     "excerpt": "Discover why Next.js is the leading choice for building scalable, high-performance admin dashboards for businesses.",
//     "content": "Full-stack development requires a balance of speed and security. At Pox.Technologies, we leverage Next.js and MySQL..."
//   },
//   {
//     "_id": "blog_002",
//     "_type": "blog",
//     "title": "Mastering the Art of Hyper-Realistic Portraits",
//     "slug": { "_type": "slug", "current": "mastering-hyper-realistic-portraits" },
//     "author": { "_type": "reference", "_ref": "auth_001" },
//     "categories": [
//       { "_key": "c1", "_type": "reference", "_ref": "bcat_002" }
//     ],
//     "publishedAt": "2026-03-28T12:30:00Z",
//     "excerpt": "A deep dive into the graphite and charcoal techniques used by Pox.Artistics to bring portraits to life.",
//     "content": "Creating a portrait is more than just drawing; it is about capturing the soul of the subject using light and shadow..."
//   },
//   {
//     "_id": "blog_003",
//     "_type": "blog",
//     "title": "Essential Graphic Design Principles for Startups",
//     "slug": { "_type": "slug", "current": "graphic-design-principles-startups" },
//     "author": { "_type": "reference", "_ref": "auth_002" },
//     "categories": [
//       { "_key": "c1", "_type": "reference", "_ref": "bcat_003" }
//     ],
//     "publishedAt": "2026-03-25T09:00:00Z",
//     "excerpt": "How professional branding and poster design can elevate your business identity from day one.",
//     "content": "First impressions matter. We look at how Pox.Graphics utilizes Affinity Photo to create stunning visual assets..."
//   },
//   {
//     "_id": "blog_004",
//     "_type": "blog",
//     "title": "Securing Your MySQL Databases: ACID & Beyond",
//     "slug": { "_type": "slug", "current": "securing-mysql-databases-acid" },
//     "author": { "_type": "reference", "_ref": "auth_001" },
//     "categories": [
//       { "_key": "c1", "_type": "reference", "_ref": "bcat_001" }
//     ],
//     "publishedAt": "2026-03-20T15:00:00Z",
//     "excerpt": "Understanding the core principles of database reliability and how to protect your business data.",
//     "content": "Data integrity is non-negotiable. This post explains why the ACID properties are vital for your eCommerce backend..."
//   },
//   {
//     "_id": "blog_005",
//     "_type": "blog",
//     "title": "Managing Your Digital Inventory Effectively",
//     "slug": { "_type": "slug", "current": "managing-digital-inventory" },
//     "author": { "_type": "reference", "_ref": "auth_004" },
//     "categories": [
//       { "_key": "c1", "_type": "reference", "_ref": "bcat_004" },
//       { "_key": "c2", "_type": "reference", "_ref": "bcat_005" }
//     ],
//     "publishedAt": "2026-03-15T10:00:00Z",
//     "excerpt": "Strategies for tracking stock levels and handling custom orders in a growing eCommerce environment.",
//     "content": "Efficiency in logistics starts with clear data. Learn how we structure our admin panels to keep stock accurate..."
//   }
// ]

// const brands=[
//   {
//     "_id": "brand_001",
//     "_type": "brand",
//     "name": "Pox.Artistics",
//     "slug": { "_type": "slug", "current": "pox-artistics" },
//     "description": "Premium hand-drawn portraits and fine arts division of Pox.Technologies.",
//     "website": "https://pox.technologies/artistics",
//     "isFeatured": true
//   },
//   {
//     "_id": "brand_002",
//     "_type": "brand",
//     "name": "Pox.Graphics",
//     "slug": { "_type": "slug", "current": "pox-graphics" },
//     "description": "Professional graphic design, branding, and digital asset creation.",
//     "website": "https://pox.technologies/graphics",
//     "isFeatured": true
//   },
//   {
//     "_id": "brand_003",
//     "_type": "brand",
//     "name": "Pox.Developers",
//     "slug": { "_type": "slug", "current": "pox-developers" },
//     "description": "Custom web solutions, Next.js development, and database architecture.",
//     "website": "https://pox.technologies/developers",
//     "isFeatured": true
//   },
//   {
//     "_id": "brand_004",
//     "_type": "brand",
//     "name": "TechGear Pro",
//     "slug": { "_type": "slug", "current": "techgear-pro" },
//     "description": "Third-party supplier for high-quality computer peripherals and hardware.",
//     "website": "https://techgear.example.com",
//     "isFeatured": false
//   },
//   {
//     "_id": "brand_005",
//     "_type": "brand",
//     "name": "Urban Style Co.",
//     "slug": { "_type": "slug", "current": "urban-style-co" },
//     "description": "Partner brand for premium apparel and accessories.",
//     "website": "https://urbanstyle.example.com",
//     "isFeatured": false
//   }
// ]

// const categories=[
//   {
//     "_id": "cat_001",
//     "_type": "category",
//     "name": "Web Development Services",
//     "slug": { "_type": "slug", "current": "web-development-services" },
//     "description": "Full-stack solutions including Next.js applications, Admin Panels, and API integrations.",
//     "isFeatured": true
//   },
//   {
//     "_id": "cat_002",
//     "_type": "category",
//     "name": "Custom Portraits",
//     "slug": { "_type": "slug", "current": "custom-portraits" },
//     "description": "Bespoke hand-drawn graphite and charcoal portraits from Pox.Artistics.",
//     "isFeatured": true
//   },
//   {
//     "_id": "cat_003",
//     "_type": "category",
//     "name": "Graphic Design",
//     "slug": { "_type": "slug", "current": "graphic-design-assets" },
//     "description": "Branding packages, professional posters, and digital marketing assets.",
//     "isFeatured": true
//   },
//   {
//     "_id": "cat_004",
//     "_type": "category",
//     "name": "Tech Accessories",
//     "slug": { "_type": "slug", "current": "tech-accessories" },
//     "description": "High-quality computer peripherals, keyboards, and networking hardware.",
//     "isFeatured": false
//   },
//   {
//     "_id": "cat_005",
//     "_type": "category",
//     "name": "Art Supplies",
//     "slug": { "_type": "slug", "current": "premium-art-supplies" },
//     "description": "Professional-grade pencils, charcoal, and paper for aspiring artists.",
//     "isFeatured": false
//   }
// ]

// const orders=[
//   {
//     "_id": "order_001",
//     "_type": "order",
//     "orderNumber": "ORD-2026-001",
//     "customer": {
//       "name": "Efransia J.",
//       "email": "efransia@example.com"
//     },
//     "items": [
//       {
//         "_key": "item_1",
//         "product": { "_type": "reference", "_ref": "prod_001" },
//         "quantity": 2,
//         "price": 29.99
//       },
//       {
//         "_key": "item_2",
//         "quantity": 1,
//         "price": 45.00
//       }
//     ],
//     "totalPrice": 104.98,
//     "shippingAddress": { "_type": "reference", "_ref": "addr_001" },
//     "status": "delivered",
//     "paymentStatus": "paid",
//     "orderDate": "2026-03-28T14:30:00Z"
//   },
//   {
//     "_id": "order_002",
//     "_type": "order",
//     "orderNumber": "ORD-2026-002",
//     "customer": {
//       "name": "Guest User",
//       "email": "guest@example.com"
//     },
//     "items": [
//       {
//         "_key": "item_1",
//         "product": { "_type": "reference", "_ref": "prod_008" },
//         "quantity": 1,
//         "price": 89.00
//       }
//     ],
//     "totalPrice": 89.00,
//     "shippingAddress": { "_type": "reference", "_ref": "addr_014" },
//     "status": "shipped",
//     "paymentStatus": "paid",
//     "orderDate": "2026-03-30T09:15:00Z"
//   },
//   {
//     "_id": "order_003",
//     "_type": "order",
//     "orderNumber": "ORD-2026-003",
//     "customer": {
//       "name": "Noella M.",
//       "email": "noella@example.com"
//     },
//     "items": [
//       {
//         "_key": "item_1",
//         "product": { "_type": "reference", "_ref": "prod_002" },
//         "quantity": 1,
//         "price": 120.00
//       }
//     ],
//     "totalPrice": 120.00,
//     "shippingAddress": { "_type": "reference", "_ref": "addr_002" },
//     "status": "pending",
//     "paymentStatus": "unpaid",
//     "orderDate": "2026-04-01T11:00:00Z"
//   }
// ]

async function seedData() {
  console.log('Starting migration...');
  for (const order of orders) {
    try {
      await client.createOrReplace(order);
      console.log(`✅ Success: ${ order.customer}`);
    } catch (err) {
      console.error(`❌ Error: ${order.customer}`, err.message);
    }
  }
//   console.log('Starting migration...');
//   for (const order of orders) {
//     try {
//       await client.createOrReplace(order);
//       console.log(`✅ Success: ${ order.customer}`);
//     } catch (err) {
//       console.error(`❌ Error: ${order.customer}`, err.message);
//     }
//   }
//   console.log('Starting migration...');
//   for (const cat of categories) {
//     try {
//       await client.createOrReplace(cat);
//       console.log(`✅ Success: ${ cat.name}`);
//     } catch (err) {
//       console.error(`❌ Error: ${cat.name}`, err.message);
//     }
//   }
//   console.log('Starting migration...');
//   for (const brand of brands) {
//     try {
//       await client.createOrReplace(brand);
//       console.log(`✅ Success: ${ brand.name}`);
//     } catch (err) {
//       console.error(`❌ Error: ${brand.name}`, err.message);
//     }
//   }
//   console.log('Starting migration...');
//   for (const blog of blogs) {
//     try {
//       await client.createOrReplace(blog);
//       console.log(`✅ Success: ${ blog.title}`);
//     } catch (err) {
//       console.error(`❌ Error: ${blog.title}`, err.message);
//     }
//   }
//   console.log('Starting migration...');
//   for (const cat of blogCategories) {
//     try {
//       await client.createOrReplace(cat);
//       console.log(`✅ Success: ${ cat.title}`);
//     } catch (err) {
//       console.error(`❌ Error: ${cat.title}`, err.message);
//     }
//   }
//   console.log('Starting migration...');
//   for (const author of authors) {
//     try {
//       await client.createOrReplace(author);
//       console.log(`✅ Success: ${author.name}`);
//     } catch (err) {
//       console.error(`❌ Error: ${author.name}`, err.message);
//     }
//   }
//   console.log('Starting migration...');
//   for (const address of addresses) {
//     try {
//       await client.createOrReplace(address);
//       console.log(`✅ Success: ${address.label}`);
//     } catch (err) {
//       console.error(`❌ Error: ${address.label}`, err.message);
//     }
//   }
//   console.log('Starting migration...');
//   for (const product of products) {
//     try {
//       await client.createOrReplace(product);
//       console.log(`✅ Success: ${product.name}`);
//     } catch (err) {
//       console.error(`❌ Error: ${product.name}`, err.message);
//     }
//   }
  console.log('Migration complete!');
}

seedData();