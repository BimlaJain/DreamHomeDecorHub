
import { Ruler, Layers, Palette, Weight } from "lucide-react";
import { MapPin, Drill, Hammer, CheckCircle } from "lucide-react";
export const products = {
    wallShelves: [
        {
            id: 1,
            title: "Modern Wooden Floating Wall Shelf",
            image: "/images/hero/hero.webp",
            rating: 4.8,
            reviews: "950+ Reviews",
            price: "₹1,999",
            badge: "Editor's Choice",
            description:
                "A premium floating shelf with modern design and excellent build quality.",
            whyRecommend:
                "We recommend this shelf because it offers a perfect balance of design, durability, and functionality. It is ideal for displaying books, plants, frames, and decorative items while saving floor space.",

            pros: [
                "Premium Build Quality",
                "Easy Wall Installation",
                "Perfect for Modern Interiors",
                "Great Value for Money"
            ],

            cons: [
                "Not suitable for very heavy items",
                "Installation hardware may vary"
            ],

            affiliateLink:
                "https://link.amazon/B0h5tWp9G"
        },
        {
            id: 2,
            title: "Wooden 2-Tier Floating Wall Shelf",
            image: "/images/top-pic/toppic1.webp",
            rating: 3.8,
            reviews: "450+ Reviews",
            price: "₹1,949",
            badge: "Premium Pick",
            description:
                "Perfect for displaying books, plants, and decorative items.",
            whyRecommend:
                "This shelf is perfect for small rooms because it utilizes corner spaces beautifully and adds an elegant touch to your interiors.",

            pros: [
                "Space Saving Design",
                "Elegant Wooden Finish",
                "Strong Material"
            ],

            cons: [
                "Limited Weight Capacity",
                "Requires Accurate Installation"
            ],

            affiliateLink:
                "https://link.amazon/B09uTQ9PJ"
        },
        {
            id: 3,
            title: "Modern 7-Tier Corner Display Shelf",
            image: "/images/top-pic/toppic2.webp",
            rating: 4.8,
            reviews: "1,450+ Reviews",
            price: "₹771",
            badge: "Best for Small Spaces",
            description:
                "A stylish corner wall shelf with 7 tiers, while making the most of unused corner space.",
            whyRecommend:
                "This shelf is perfect for small rooms because it utilizes corner spaces beautifully and adds an elegant touch to your interiors.",

            pros: [
                "Space Saving Design",
                "Elegant Wooden Finish",
                "Strong Material"
            ],

            cons: [
                "Limited Weight Capacity",
                "Requires Accurate Installation"
            ],

            affiliateLink:
                "https://link.amazon/B05dOKXqE"
        },
        {
            id: 4,
            title: "Multifunctional 2-Tier Wall Shelf & Storage Rack",
            image: "/images/detailed-review/detail7.webp",
            rating: 3.8,
            reviews: "50+ Reviews",
            price: "₹854",
            badge: "Good Alternative",
            whyRecommend:
                "Upgrade your home with this multifunctional 2-tier wall shelf and storage rack, designed to combine style and practicality. Crafted from durable engineered wood with a smooth painted finish, it provides an elegant space to display books, photo frames, indoor plants, decorative pieces, and everyday essentials. Its modern floating design blends seamlessly with living rooms, bedrooms, offices, and study areas while helping you maximize vertical storage without taking up floor space.",

            pros: [
                "Durable engineered wood construction with painted finish",
                "Perfect for books, plants, photo frames, and decor items",
                "Suitable for living rooms, bedrooms, offices, and study areas",
                "Easy to clean and maintain",
            ],

            cons: [
                "Not suitable for very heavy items",
                "Requires drilling for wall installation",
                "Weight capacity depends on proper wall mounting"
            ],

            affiliateLink:
                "https://link.amazon/B03aJ1jeD"
        },
        {
            id: 5,
            title: "Wooden Floating Honeycomb Wall Shelves for Living Room, Bedroom & Office",
            image: "/images/detailed-review/detail6.webp",
            rating: 2.8,
            reviews: "30+ Reviews",
            price: "₹699",
            badge: "Best Value",
            whyRecommend:
                "Enhance your walls with this Set of 6 Hexagon Wall Shelves, featuring a modern honeycomb design that adds elegance and functionality to any room. Made from durable wood, these floating shelves are perfect for displaying plants, photo frames, candles, books, collectibles, and decorative accessories. Their geometric design creates a stylish focal point while maximizing wall space, making them an excellent choice for living rooms, bedrooms, offices, hallways, and apartments.",

            pros: [
               "Unique honeycomb design adds a modern decorative touch",
               "Set of 6 shelves offers flexible wall arrangements",
                "Durable wooden construction with a premium white finish",
                "Easy to customize into different wall patterns"
            ],

            cons: [
                "Not designed for storing heavy items",
                "Requires wall drilling for installation",
                "White finish may require regular cleaning",
                "Installation takes time to align all six shelves evenly"
            ],

            affiliateLink:
                "https://link.amazon/B0i8FqaVg"
        },
        {
            id: 6,
            title: "MDF Engineered Wood Storage Shelf for Living Room, Bedroom, Office & Home Decor",
            image: "/images/detailed-review/detail5.webp",
            rating: 4.7,
            reviews: "90+ Reviews",
            price: "₹349",
            badge: "Best for small space",
            whyRecommend:
                "Add a touch of modern elegance to your home with this Wooden Floating Wall Shelf, crafted from high-quality MDF engineered wood with a sleek black finish. Designed to maximize wall space, this floating shelf is ideal for displaying books, photo frames, indoor plants, candles, trophies, and decorative accessories. Its minimalist design blends seamlessly with contemporary, industrial, and modern interiors, making it a practical storage solution for living rooms, bedrooms, offices, and study spaces.",

            pros: [
                "Modern floating design with a stylish black finish",
                "Ideal for displaying books, plants, photo frames, and décor",
                "Easy to clean and maintain",
                "Complements modern and minimalist interiors"
            ],

            cons: [
                "Not recommended for very heavy objects",
                "Requires drilling for secure wall installation"
            ],

            affiliateLink:
                "https://link.amazon/B0cHcxgeG"
        },
        {
            id: 7,
            title: "MDF Engineered Wood Storage Shelf for Living Room, Bedroom, Office & Home Decor",
            image: "/images/detailed-review/detail4.webp",
            rating: 4.1,
            reviews: "700+ Reviews",
            price: "₹771",
            badge: "Best for living room",
            whyRecommend:
                "Maximize your corner space with the Dime Store 5-Tier Zig Zag Corner Wall Shelf, a stylish and functional storage solution for modern homes. Crafted from durable engineered wood with a premium black finish, this unique zig-zag floating shelf transforms unused corners into eye-catching display areas. Perfect for showcasing books, indoor plants, photo frames, candles, collectibles, and decorative accents, it adds both storage and elegance to your living room, bedroom, office, or hallway while saving valuable floor space.",

            pros: [
                "Space-saving floating corner shelf design",
                "Durable engineered wood construction",
                "Ideal for living rooms, bedrooms, offices, and hallways",
                "Adds both storage and decorative appeal"
            ],

            cons: [
                "Not suitable for storing very heavy items",
                "Requires wall drilling for secure installation",
                "Corner installation requires accurate measurements"
            ],

            affiliateLink:
                "https://link.amazon/B0gi9hfsz"
        },
        {
            id: 8,
            title: "White Engineered Wood Display Shelves with Brown Back Panel for Living Room, Bedroom & Office",
            image: "/images/detailed-review/detail3.webp",
            rating: 4.0,
            reviews: "70+ Reviews",
            price: "₹419",
            badge: "Primium look",
            whyRecommend:
                "Upgrade your home décor with this Set of 3 Wall Mounted Floating Shelves, featuring a modern white finish complemented by elegant brown vertical back panels. Whether you want to display photo frames, books, indoor plants, candles, or decorative accessories, this minimalist wall shelf set helps organize your space while enhancing the look of your living room, bedroom, office, hallway, or study.",

            pros: [
                "Perfect for displaying books, plants, photo frames, and décor",
                "Modern minimalist design complements various interior styles",
                "Wall-mounted design saves valuable floor space",
            ],

            cons: [
                "Not recommended for very heavy items",
                "Requires wall drilling for installation",
            ],

            affiliateLink:
                "https://link.amazon/B06yUbgek"
        },
        {
            id: 9,
            title: "Handmade Teak Wood Wall Mounted Shelves for Library, Office & Home Décor",
            image: "/images/detailed-review/detail2.webp",
            rating: 4.0,
            reviews: "70+ Reviews",
            price: "₹499",
            badge: "Primium look",
            whyRecommend:
                "Bring timeless elegance to your space with the Dreamy Design Set of 2 Wooden Floating Book Shelves, handcrafted from premium teak wood for exceptional durability and natural beauty. These modern wall-mounted shelves are perfect for organizing books while showcasing photo frames, indoor plants, collectibles, and decorative accents. Their minimalist floating design enhances any library, study room, home office, bedroom, or living room, offering both functional storage and a warm, sophisticated look.",

            pros: [
                "Crafted from premium handmade teak wood",
                "Set of 2 shelves provides flexible storage and display options",
                "Strong and durable natural wood construction",
                "Modern floating design enhances any interior",
                "Perfect for books, plants, photo frames, and decorative items",
            ],

            cons: [
                "Premium teak wood may be more expensive than engineered wood",
                "Requires wall drilling for secure installation",
            ],

            affiliateLink:
                "https://link.amazon/B07wdJYgu"
        },
        {
            id: 10,
            title: "Wooden Wall Mounted Display Shelf for Living Room, Bedroom & Modern Home Décor",
            image: "/images/detailed-review/detail1.webp",
            rating: 4.0,
            reviews: "70+ Reviews",
            price: "₹1399",
            badge: "Primium look",
            whyRecommend:
                "Enhance your home's style with this Pine Wood Floating Wall Shelf, designed to provide both elegant display space and practical storage. Made from high-quality natural pine wood, this wall-mounted shelf features a clean, modern design that blends effortlessly with contemporary, Scandinavian, rustic, and minimalist interiors. It's perfect for showcasing indoor plants, books, photo frames, candles, vases, and decorative showpieces while making the most of your wall space in the living room, bedroom, office, hallway, or study.",

            pros: [
                "Crafted from durable natural pine wood",
                "Modern floating design enhances any room",
                "Perfect for displaying plants, books, photo frames, and decorative items",
                "Space-saving wall-mounted storage solution",
            ],

            cons: [
                "Requires wall drilling for installation",
                "Not suitable for very heavy storage items",
            ],

            affiliateLink:
                "https://link.amazon/B0iYrdc9r"
        },
    ],
};



export const guides = [
    {
        icon: Ruler,
        title: "Measure Your Space",
        description:
            "Before buying a wall shelf, measure your wall area carefully. Consider the shelf width, depth, and placement to ensure it fits perfectly."
    },

    {
        icon: Layers,
        title: "Choose The Right Material",
        description:
            "Solid wood offers premium durability, MDF is budget-friendly, and metal shelves work well for modern interiors."
    },

    {
        icon: Weight,
        title: "Check Weight Capacity",
        description:
            "Choose a shelf according to what you want to display. Books and heavy items require stronger shelves with better support."
    },

    {
        icon: Palette,
        title: "Match Your Interior Style",
        description:
            "Select a design that complements your room. Floating shelves suit minimal spaces while wooden shelves add warmth."
    }
];

export const installationSteps = [
    {
        icon: MapPin,
        step: "01",
        title: "Choose The Right Location",
        description:
            "Select a suitable wall area where the shelf looks good and can support the required weight."
    },
    {
        icon: Ruler,
        step: "02",
        title: "Measure & Mark Points",
        description:
            "Measure the shelf position carefully and mark the drilling points to ensure proper alignment."
    },
    {
        icon: Drill,
        step: "03",
        title: "Install Wall Brackets",
        description:
            "Secure the brackets properly using suitable screws and wall anchors for better stability."
    },
    {
        icon: Hammer,
        step: "04",
        title: "Mount The Shelf",
        description:
            "Place the shelf on the installed brackets and tighten all screws securely."
    },
    {
        icon: CheckCircle,
        step: "05",
        title: "Check Stability",
        description:
            "Make sure the shelf is firmly installed before placing books, plants, or decorations."
    }
];