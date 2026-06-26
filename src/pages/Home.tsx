import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import KitaCoolSection from '../components/KitaCoolSection';
import ProductGrid from '../components/ProductGrid';
import GallerySection from '../components/GallerySection';
import { products } from '../data/products';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <HeroSlider />
      <AboutSection />
      <KitaCoolSection />
      
      <ProductGrid 
        id="services"
        title="Commercial & Industrial Solutions"
        subtitle="Water Appliances"
        products={products.waterAppliances}
        bgColor="gray"
      />
      
      <ProductGrid 
        id="ionizers"
        title="Advanced Alkaline Health"
        subtitle="Water Ionizers"
        products={products.ionizers}
        bgColor="white"
      />
      
      <ProductGrid 
        id="treatments"
        title="Heavy-Duty Filtration & Softening"
        subtitle="Water Treatments"
        products={products.treatments}
        bgColor="gray"
      />
      
      <ProductGrid 
        id="home-appliances"
        title="Premium Residential Purifiers"
        subtitle="Home Appliances"
        products={products.homeAppliances}
        bgColor="white"
      />
      
      <GallerySection />
    </>
  );
}
