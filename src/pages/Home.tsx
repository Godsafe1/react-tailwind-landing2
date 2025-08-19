import HomeHero from "@/components/pagesofhome/HomeHero";
import NewDish from "@/components/pagesofhome/NewDish";
import OurServices from "@/components/pagesofhome/OurServices";
import TopListCarousel from "@/components/pagesofhome/TopListCarousel";

export default function Home() {

  return (
    <>
    <HomeHero />
    <TopListCarousel />
    <NewDish/>
    <OurServices />
    </>
  )
}
