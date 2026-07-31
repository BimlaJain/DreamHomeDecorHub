
import BlogNavbar from "@/components/blog/BlogNavbar";
import BrowseByRoom from "@/components/blog/BrowseByRoom";
import CategoryBar from "@/components/blog/CategoryBar";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import HeroSection from "@/components/blog/HeroSection";
import LatestInspiration from "@/components/blog/LatestInspiration";

export default function BlogPage() {
    return (
        <>
            <BlogNavbar />
            <CategoryBar/>
            <HeroSection />
            <FeaturedArticle />
            <LatestInspiration />
            <BrowseByRoom/>
        </>
    );
}