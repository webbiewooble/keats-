import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import KitaCoolSection from '../components/KitaCoolSection';
import OurRangeSection from '../components/OurRangeSection';
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
      <OurRangeSection />
      
      <ProductGrid 
        id="purifiers"
        title="Premium Residential Purifiers"
        subtitle="Home Appliances"
        products={products.purifiers}
        bgColor="gray"
      />
      
      <ProductGrid 
        id="water-coolers"
        title="Commercial Water Coolers"
        subtitle="Water Coolers"
        products={products.waterCoolers}
        bgColor="white"
      />
      
      <ProductGrid 
        id="industrial-ro"
        title="Heavy-Duty Reverse Osmosis"
        subtitle="Industrial RO Plants"
        products={products.industrialRO}
        bgColor="gray"
      />

      <ProductGrid 
        id="sand-filters"
        title="Industrial & Commercial Sand Filters"
        subtitle="Sand Filters"
        products={products.sandFilters}
        bgColor="white"
      />

      <ProductGrid 
        id="iron-filters"
        title="Borewell Iron & Manganese Removal"
        subtitle="Iron Filters"
        products={products.ironFilters}
        bgColor="gray"
      />

      <ProductGrid 
        id="water-softeners"
        title="High-Capacity Water Softeners"
        subtitle="Water Softeners"
        products={products.softeners}
        bgColor="white"
      />

      <ProductGrid 
        id="carbon-filters"
        title="Activated Carbon Filtration"
        subtitle="Carbon Filters & UV"
        products={products.carbonFilters}
        bgColor="gray"
      />
      
      <ProductGrid 
        id="ionizers"
        title="Advanced Alkaline Health"
        subtitle="Water Ionizers"
        products={products.ionizers}
        bgColor="white"
      />
      
      <GallerySection />
    </>
  );
}
