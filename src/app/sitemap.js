import { articles } from "@/data/Article";

export default function sitemap() {
    return [
        {
            url: "https://dream-home-decor-hub.vercel.app",
        },

        ...articles.map((article) => ({
            url: `https://dream-home-decor-hub.vercel.app/blog/${article.slug}`,
        })),
    ];
}