
import { notFound } from "next/navigation";

import articles from "@/data/articles/Index";

import ArticleHero from "@/components/article/ArticleHero";
import TableOfContents from "@/components/article/TableOfContent";
import IdeaCard from "@/components/article/IdeaCard";
import RelatedArticles from "@/components/article/RelatedArticles";
import BrandBanner from "@/components/article/BrandBanner";
import PinterestCTA from "@/components/article/PinterestCTA";
import Footer from "@/components/home-page/Footer";
import NewsletterCTA from "@/components/article/NewsletterCTA";
import Header from "@/components/home-page/Header";


// Helper function
const getCategories = (article) => {
    if (Array.isArray(article.categories)) {
        return article.categories;
    }

    if (article.category) {
        return [article.category];
    }

    return [];
};


export async function generateMetadata({ params }) {
    const { slug } = await params;

    const article = articles.find(
        (item) => item.slug === slug
    );

    if (!article) {
        return {
            title: "Article Not Found | Dream Home Decor Hub",
        };
    }

    const description = Array.isArray(article.description)
        ? article.description.join(" ")
        : article.description;

    return {
        title: article.title,

        description,

        keywords: article.keywords || [
            "Home Decor",
            "bedroom decor",
            "living room decor",
            "interior design",
            "home styling",
            "Pinterest home decor",
        ],

        alternates: {
            canonical: `https://dream-home-decor-hub.vercel.app/blog/${article.slug}`,
        },

openGraph: {
    title: article.title,

        description,

        url: `https://dream-home-decor-hub.vercel.app/blog/${article.slug}`,

            siteName: "Dream Home Decor Hub",

                images: [
                    {
                        url: `https://dream-home-decor-hub.vercel.app${article.image}`,
                        width: 1200,
                        height: 630,
                    },
                ],

                    type: "article",
        },

twitter: {
    card: "summary_large_image",

        title: article.title,

            description,

            images: [
                `https://dream-home-decor-hub.vercel.app${article.image}`,
            ],
        },
    };
}


export default async function Page({ params }) {
    const { slug } = await params;

    const article = articles.find(
        (item) => item.slug === slug
    );

    if (!article) {
        notFound();
    }


    // Current article categories
    const categories = getCategories(article);


    // Find related articles
    const relatedArticles = articles
        .filter(
            (item) => item.slug !== article.slug
        )
        .filter((item) => {
            const itemCategories = getCategories(item);

            return itemCategories.some((itemCategory) =>
                categories.some(
                    (category) =>
                        itemCategory.toLowerCase().trim() ===
                        category.toLowerCase().trim()
                )
            );
        })
        .slice(0, 4);


    // Article Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",

        headline: article.title,

        description: Array.isArray(article.description)
            ? article.description.join(" ")
            : article.description,

        image: [
            `https://dream-home-decor-hub.vercel.app${article.image}`,
        ],

        author: {
            "@type": "Organization",
            name: article.author || "Dream Home Decor Hub",
        },

        publisher: {
            "@type": "Organization",
            name: "Dream Home Decor Hub",

            logo: {
                "@type": "ImageObject",
                url: "https://dream-home-decor-hub.vercel.app/favicon.ico",
            },
        },

        datePublished: article.datePublished || "2026-08-05",

        dateModified: article.dateModified || "2026-08-05",

        articleSection: categories,

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://dream-home-decor-hub.vercel.app/blog/${article.slug}`,
        },
    };


    return (
        <>
            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />


            {/* Header */}
            <Header
                categories={categories}
                title={article.title}
            />


            {/* Article Hero */}
            <ArticleHero
                categories={categories}
                title={article.title}
                description={article.description}
                updated={article.updated}
                readTime={article.readTime}
                image={article.image}
            />


            {/* Table of Contents */}
            <TableOfContents
                items={article.tableOfContents}
                totalIdeas={article.totalIdeas}
                totalProducts={article.totalProducts}
            />


            {/* Ideas */}
            {article.ideas?.map((idea) => (
                <IdeaCard
                    key={`${article.slug}-idea-${idea.id}`}
                    idea={idea}
                />
            ))}


            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <RelatedArticles
                    articles={relatedArticles}
                />
            )}


            {/* Bottom Sections */}
            <BrandBanner />

            <PinterestCTA />

            <NewsletterCTA />

            <Footer />
        </>
    );
}

