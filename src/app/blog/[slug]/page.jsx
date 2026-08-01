import ArticleHero from "@/components/article/ArticleHero";
import Introduction from "@/components/article/Introduction";
import QuickNavigation from "@/components/article/QuickNavigation";
import IdeaCard from "@/components/article/IdeaCard";
import { articles } from "@/data/Article";
import DesignerTip from "@/components/article/DesignerTip";
import CommonMistakes from "@/components/article/CommonMistakes";
import StylingChecklist from "@/components/article/StylingChecklist";
import Conclusion from "@/components/article/Conclusion";
import RelatedArticles from "@/components/article/RelatedArticles";
import NewsletterCTA from "@/components/article/NewsletterCTA";

export default function ArticlePage() {
    const article = articles[0];
    return (
        <>
            <ArticleHero />
            <Introduction />
            <QuickNavigation />

            {article.ideas.slice(0, 5).map((idea) => (
                <IdeaCard key={idea.id} {...idea} />
            ))}

            <DesignerTip/> 

            {article.ideas.slice(5 , 10).map((idea) => (
                <IdeaCard key={idea.id} {...idea} />
            ))}
            <CommonMistakes/>
            {article.ideas.slice(10 , 15).map((idea) => (
                <IdeaCard key={idea.id} {...idea} />
            ))}
            <StylingChecklist />
            <Conclusion />
            <RelatedArticles />
            <NewsletterCTA/>
        </>
    );
}
