import Footer from "@/components/home-page/Footer";
import Header from "@/components/home-page/Header";
import Hero from "@/components/home-page/Hero";
import Newsletter from "@/components/home-page/Newsletter";
import OurPromise from "@/components/home-page/OurPromise";
import CookieBanner from "@/components/home-page/CookieBanner";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import LatestInspiration from "@/components/blog/LatestInspiration";

export default function Home() {
  return (
    <>
      <CookieBanner/>
      <Header />
      <Hero />
      <FeaturedArticle/>
      <LatestInspiration />
      <OurPromise />
      <Newsletter />
      <Footer />
    </>
  );
}