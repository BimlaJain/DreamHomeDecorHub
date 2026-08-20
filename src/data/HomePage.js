import {
    Shield,
    Lock,
    Cookie,
    Database,
    User,
    Mail,
    ChevronRight,
} from "lucide-react";
export const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Home Decor",
        href: "/home-decor",
        dropdown: true,
        categories: [
            {
                title: "Rooms",
                items: [
                    { title: "Living Room", href: "/home-decor/living-room" },
                    { title: "Bedroom", href: "/home-decor/bedroom" },
                    { title: "Kitchen", href: "/home-decor/kitchen" },
                    { title: "Bathroom", href: "/home-decor/bathroom" },
                    { title: "Dining Room", href: "/home-decor/dining-room" },
                    { title: "Home Office", href: "/home-decor/home-office" },
                ],
            },
            {
                title: "Ideas",
                items: [
                    { title: "Small Spaces", href: "/home-decor/small-spaces" },
                    { title: "Organization", href: "/home-decor/organization" },
                    { title: "Seasonal Decor", href: "/home-decor/seasonal-decor" },
                    { title: "Budget Decor", href: "/home-decor/budget-decor" },
                ],
            },
        ],
    },
    {
        title: "Blog",
        href: "/blog",
    },
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "About",
        href: "/about",
    },
];

export const categories = [
    {
        title: "Living Room",
        href: "/blog/21-cozy-living-room-ideas",
        image: "/images/home-page/living-room.webp",
    },
    {
        title: "Bedroom",
        href: "/blog/25-cozy-bedroom-decor-ideas",
        image: "/images/home-page/bedroom.webp",
    },
    {
        title: "Kitchen",
        href: "/blog/18-kitchen-decor-ideas",
        image: "/images/home-page/kitchen.webp",
    },
    {
        title: "Bathroom",
        href: "/blog/17-bathroom-decor-ideas",
        image: "/images/home-page/bathroom.webp",
    },
    {
        title: "Wall Decor",
        href: "/wall-decor",
        image: "/images/home-page/wall-decor.webp",
    },
    {
        title: "Floating Shelves",
        href: "/floating-shelves",
        image: "/images/home-page/shelves.webp",
    },
    {
        title: "Small Spaces",
        href: "/blog/21-Small-Space-Organization-Ideas-That-Actually-Work",
        image: "/images/home-page/small-space.webp",
    },
    {
        title: "DIY Decor",
        href: "/diy",
        image: "/images/home-page/workspace.webp",
    },
];

export const posts = [
    {
        title: "15 Floating Shelf Ideas You'll Love in 2026",
        category: "Wall Decor",
        image: "/images/home-page/shelves.webp",
        href: "/blog/minimalist-floating-shelf-ideas",
        featured: true,
    },
    {
        title: "Modern Bedroom Ideas You'll Love",
        category: "Bedroom",
        image: "/images/home-page/bedroom.webp",
        href: "blog/25-cozy-bedroom-decor-ideas",
    },
    {
        title: "Beautiful Kitchen Decor Trends",
        category: "Kitchen",
        image: "/images/home-page/kitchen.webp",
        href: "/blog/18-kitchen-decor-ideas",
    },
    {
        title: "Luxury Bathroom Inspiration",
        category: "Bathroom",
        image: "/images/home-page/bathroom.webp",
        href: "/blog/bathroom-ideas",
    },
];

 export const rooms = [
    {
        title: "Living Room",
        href: "/living-room",
         image: "/images/home-page/living-room.webp",
        ideas: "240+ Ideas",
    },
    {
        title: "Bedroom",
        href: "/bedroom",
        image: "/images/home-page/bedroom.webp",
        ideas: "180+ Ideas",
    },
    {
        title: "Kitchen",
        href: "/kitchen",
        image: "/images/home-page/kitchen.webp",
        ideas: "150+ Ideas",
    },
    {
        title: "Bathroom",
        href: "/bathroom",
        image: "/images/home-page/bathroom.webp",
        ideas: "120+ Ideas",
    },
    {
        title: "Dining Room",
        href: "/dining-room",
        image: "/images/home-page/dining-room.webp",
        ideas: "90+ Ideas",
    },
    {
        title: "Home Office",
        href: "/home-office",
        image: "/images/home-page/home-office.webp",
        ideas: "110+ Ideas",
    },
 ];

export const collections = [
    {
        title: "Modern Luxury",
        image: "/images/home-page/modern.webp",
        href: "/collections/modern-luxury",
        className: "lg:col-span-3 lg:row-span-2 h-[650px]"
    },
    {
        title: "Japandi",
        image: "/images/home-page/japandi.webp",
        href: "/collections/japandi",
        className: "lg:col-span-1 h-[310px]"
    },
    {
        title: "Minimalist",
        image: "/images/home-page/minimalist.webp",
        href: "/collections/minimalist",
        className: "lg:col-span-1 h-[310px]"
    },
    {
        title: "Boho",
        image: "/images/home-page/boho.webp",
        href: "/collections/boho",
        className: "lg:col-span-1 h-[320px]"
    },
    {
        title: "Farmhouse",
        image: "/images/home-page/farmhouse.webp",
        href: "/collections/farmhouse",
        className: "lg:col-span-1 h-[320px]"
    },
    {
        title: "Coastal",
        image: "/images/home-page/coastal.webp",
        href: "/collections/coastal",
        className: "lg:col-span-1 h-[320px]"
    },
    {
        title: "Scandinavian",
        image: "/images/home-page/scandinavian.webp",
        href: "/collections/Scandinavian",
        className: "lg:col-span-1 h-[320px]"
    },
];

export const products = [
    {
        title: "Floating Oak Shelf",
        category: "Wall Decor",
        image: "/images/home-page/shelf.webp",
        href: "/blog/minimalist-floating-shelf-ideas",
        description: "Perfect for displaying books, plants and decor pieces.",
    },
    {
        title: "Minimal Ceramic Vase",
        category: "Decor",
        image: "/images/home-page/vase.webp",
        href: "/products/ceramic-vase",
        description: "Elegant handcrafted vase for modern interiors.",
    },
    {
        title: "Modern Table Lamp",
        category: "Lighting",
        image: "/images/home-page/lamp.webp",
        href: "/products/modern-table-lamp",
        description: "Soft ambient lighting with timeless style.",
    },
    {
        title: "Neutral Wall Art",
        category: "Wall Decor",
        image: "/images/home-page/wall-decor.webp",
        href: "/products/neutral-wall-art",
        description: "Minimal artwork for a warm modern home.",
    },
    {
        title: "Cozy Area Rug",
        category: "Textiles",
        image: "/images/home-page/rug.webp",
        href: "/products/cozy-area-rug",
        description: "Add warmth and texture to any room.",
    },
    {
        title: "Soft Throw Blanket",
        category: "Living Room",
        image: "/images/home-page/blanket.webp",
        href: "/products/throw-blanket",
        description: "Comfortable neutral blanket for cozy spaces.",
    },
];

export const sections = [
    {
        icon: <User size={28} />,
        title: "Information We Collect",
        content: [
            "When you contact us through email or our contact form, we may collect your name, email address, and any information you voluntarily provide.",
            "We also automatically collect non-personal information such as browser type, operating system, device information, pages visited, time spent on the website, referral source, and general location data to improve user experience.",
        ],
    },
    {
        icon: <Database size={28} />,
        title: "How We Use Your Information",
        content: [
            "Improve our website experience and performance.",
            "Respond to inquiries and support requests.",
            "Create better home decor inspiration and articles.",
            "Understand how visitors interact with our website.",
            "Protect our website from spam and misuse.",
        ],
    },
    {
        icon: <Cookie size={28} />,
        title: "Cookies",
        content: [
            "DreamHomeDecorHub uses cookies to enhance your browsing experience and remember your preferences.",
            "Cookies also help us understand website performance, improve navigation, and support affiliate tracking.",
            "You may disable cookies through your browser settings, although some features of the website may not function properly.",
        ],
    },
    {
        icon: <Shield size={28} />,
        title: "Google Analytics",
        content: [
            "We may use Google Analytics to understand how visitors interact with DreamHomeDecorHub.",
            "Analytics helps us understand which articles are most helpful, where visitors come from, and how we can improve our website.",
            "Google Analytics collects anonymous information and does not personally identify individual visitors.",
        ],
    },
    {
        icon: <Lock size={28} />,
        title: "Your Privacy Matters",
        content: [
            "We respect your privacy and never sell your personal information to third parties.",
            "We only collect information necessary to operate and improve our website.",
        ],
    },
];