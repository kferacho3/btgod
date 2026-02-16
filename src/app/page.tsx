import { HomeBannerStripSection } from "@/features/home/components/home-banner-strip-section";
import { HomeCollectionsSection } from "@/features/home/components/home-collections-section";
import { HomeFeaturedProductsSection } from "@/features/home/components/home-featured-products-section";
import { HomeHeroSection } from "@/features/home/components/home-hero-section";
import { HomeLookbookSection } from "@/features/home/components/home-lookbook-section";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeBannerStripSection />
      <HomeFeaturedProductsSection />
      <HomeCollectionsSection />
      <HomeLookbookSection />
    </>
  );
}
