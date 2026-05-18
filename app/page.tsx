import React from 'react'
import Navbar from './components/Navbar';
import HeroSlider from './components/Slider';
import ShayriSection from './components/Shayri';
import FeaturedProducts from './components/FeaturedProducts';
import DessertCarousel from './components/DessertCarousell';
import TrustedSection from './components/TrustedSection';
import Footer from './components/Footer';

const page = () => {
  return (
    <div>
      <header>
         <Navbar />
      </header>
     
      
      <main className="flex-1">
        <HeroSlider />
        <ShayriSection />
        <FeaturedProducts />
        <DessertCarousel />
        <TrustedSection />
      </main>

      <Footer />
    </div>
  )
}

export default page
