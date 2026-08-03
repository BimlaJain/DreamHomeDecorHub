import { notFound } from "next/navigation";

import articles from "@/data/articles/Index";

import ArticleNavbar from "@/components/article/ArticleNavbar";
import ArticleHero from "@/components/article/ArticleHero";
import TableOfContents from "@/components/article/TableOfContent";
import IdeaCard from "@/components/article/IdeaCard";
import CommonMistakes from "@/components/article/CommonMistakes";
import RelatedArticles from "@/components/article/RelatedArticles";
import BrandBanner from "@/components/article/BrandBanner";
import PinterestCTA from "@/components/article/PinterestCTA";
import Footer from "@/components/home-page/Footer";


export default async function Page({ params }) {


    const { slug } = await params;


    const article = articles.find(
        (item) => item.slug === slug
    );


    if (!article) {
        notFound();
    }


    return (

        <>

            <ArticleNavbar
                category={article.category}
                title={article.title}
            />


            <ArticleHero
                category={article.category}
                title={article.title}
                description={article.description}
                updated={article.updated}
                readTime={article.readTime}
                image={article.image}
            />



            <TableOfContents
                items={article.tableOfContents}
                totalIdeas={article.totalIdeas}
                totalProducts={article.totalProducts}
            />



            {
                article.ideas?.length > 0 && (

                    article.ideas.map((idea) => (

                        <IdeaCard
                            key={idea.id}
                            idea={idea}
                        />

                    ))

                )
            }



            {
                article.mistakes?.length > 0 && (

                    <CommonMistakes
                        mistakes={article.mistakes}
                    />

                )
            }



            {
                article.relatedArticles?.length > 0 && (

                    <RelatedArticles
                        articles={article.relatedArticles}
                    />

                )
            }



            <BrandBanner />


            <PinterestCTA />


            <Footer />


        </>

    );

}