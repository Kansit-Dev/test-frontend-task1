import { Navbar } from './navbar'
import {
  BrandStatement,
  Footer,
  Hero,
  Lookbook,
  NewArrivals,
  Newsletter,
  Testimonials,
} from './sections'

export default function OracleLandingPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <Navbar />
      <Hero />
      <NewArrivals />
      <BrandStatement />
      <Lookbook />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
