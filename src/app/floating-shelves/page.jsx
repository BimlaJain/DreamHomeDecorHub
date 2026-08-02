import BuyingGuide from "@/components/floating-shelves/BuyingGuide";
import ComparisonTable from "@/components/floating-shelves/ComparisionTable";
import DetailedReview from "@/components/floating-shelves/DetailedReview";
import FAQ from "@/components/floating-shelves/FAQ";
import Hero from "@/components/floating-shelves/Hero";
import InstallationGuide from "@/components/floating-shelves/InstallationGuide";
import Navbar from "@/components/floating-shelves/Navbar";
import Newsletter from "@/components/floating-shelves/Newsletter";
import Testimonials from "@/components/floating-shelves/Testimonials";
import TopPicks from "@/components/floating-shelves/TopPics";
import CTA from "@/components/floating-shelves/CTA";
import Footer from "@/components/floating-shelves/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TopPicks />
        <DetailedReview />
        <ComparisonTable />
        <BuyingGuide />
        <InstallationGuide />
        <FAQ />
        <Testimonials />
        <Newsletter />
        <CTA />
        <Footer/>
      </main>
    </>
  );
}