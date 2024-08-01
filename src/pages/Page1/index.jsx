import { AboutMeSection } from "../../components/AboutMeSection"
import { BannerSection } from "../../components/BannerMeSection"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { TechSection } from "../../components/TechSection"

export const Page1 = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <Footer />
    </>
  )
}