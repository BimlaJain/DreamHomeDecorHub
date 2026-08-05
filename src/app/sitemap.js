import articles from "@/data/articles/Index";

export default function sitemap() {
    const baseUrl = "https://dream-home-decor-hub.vercel.app";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },

        ...articles.map((article) => ({
            url: `${baseUrl}/blog/${article.slug}`,
            lastModified: article.updated || new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        })),
    ];
}