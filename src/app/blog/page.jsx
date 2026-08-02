
import DesignerTip from "@/components/article/DesignerTip";
import NewsletterCTA from "@/components/article/NewsletterCTA";
import BlogNavbar from "@/components/blog/BlogNavbar";
import BrowseByRoom from "@/components/blog/BrowseByRoom";
import BrowseByStyle from "@/components/blog/BrowseByStyle";
import CategoryBar from "@/components/blog/CategoryBar";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import Footer from "@/components/home-page/Footer";
import HeroSection from "@/components/blog/HeroSection";
import LatestInspiration from "@/components/blog/LatestInspiration";
import ShopTheLook from "@/components/blog/ShopTheLook";

export default function BlogPage() {
    return (
        <>
            <BlogNavbar />
            <CategoryBar />
            <HeroSection />
            <FeaturedArticle />
            <LatestInspiration />
            <BrowseByRoom />
            <BrowseByStyle />
            <DesignerTip />
            <ShopTheLook />
            <NewsletterCTA />
            <Footer />
        </>
    );
}