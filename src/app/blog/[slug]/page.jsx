import ArticleHero from "@/components/article/ArticleHero";
import Introduction from "@/components/article/Introduction";
import QuickNavigation from "@/components/article/QuickNavigation";
import IdeaCard from "@/components/blog/IdeaCard";
import { articles } from "@/data/Article";

export default function ArticlePage() {
    const article = articles[0];
    return (
        <>
            <ArticleHero />
            <Introduction />
            <QuickNavigation />
            {article.ideas.map((idea) => (
                <IdeaCard key={idea.number} {...idea} />
            ))}
        </>
    );
}