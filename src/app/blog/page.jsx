
import NewsletterCTA from "@/components/article/NewsletterCTA";
import CategoryBar from "@/components/blog/CategoryBar";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import Footer from "@/components/home-page/Footer";
import HeroSection from "@/components/blog/HeroSection";
import LatestInspiration from "@/components/blog/LatestInspiration";
import Header from "@/components/home-page/Header";


export default function BlogPage() {
    
    return (
        
        <>
            
         <Header/>
            <CategoryBar />
            <HeroSection />
            <FeaturedArticle />
            <LatestInspiration />
            <NewsletterCTA />
            <Footer />
        </>
    );
}