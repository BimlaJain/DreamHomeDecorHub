import BuyingGuide from "@/components/BuyingGuide";
import ComparisonTable from "@/components/ComparisionTable";
import DetailedReview from "@/components/DetailedReview";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import InstallationGuide from "@/components/InstallationGuide";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import TopPicks from "@/components/TopPics";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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