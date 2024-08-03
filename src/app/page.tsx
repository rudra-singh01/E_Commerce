import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Seller from '@/components/Seller'

function page() {
  return (
    <>
    <div className="full p-7  flex flex-col gap-10">
      <HeroSection/>
      <Seller/>
    </div>
    </>
  )
}

export default page