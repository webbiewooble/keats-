/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import ReviewsSection from './components/ReviewsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Locations from './pages/Locations';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-navy selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
