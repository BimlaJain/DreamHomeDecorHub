
import { Ruler, Layers, Palette, Weight } from "lucide-react";
import { MapPin,  Drill, Hammer, CheckCircle } from "lucide-react";
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