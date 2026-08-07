import Footer from "@/components/home-page/Footer";
import FeaturedCategories from "@/components/home-page/FeaturedCategories";
import Header from "@/components/home-page/Header";
import Hero from "@/components/home-page/Hero";
import Newsletter from "@/components/home-page/Newsletter";
import OurPromise from "@/components/home-page/OurPromise";
import PopularCollections from "@/components/home-page/PopularCollections";
import ShopTheLook from "@/components/home-page/ShopTheLook";
import TrendingSection from "@/components/home-page/TrendingSection";
import CookieBanner from "@/components/home-page/CookieBanner";

export default function Home() {
  return (
    <>
      <CookieBanner/>
      <Header />
      <Hero />
      <FeaturedCategories />
      <TrendingSection />
      <PopularCollections />
      <ShopTheLook />
      <OurPromise />
      <Newsletter />
      <Footer />
    </>
  );
}