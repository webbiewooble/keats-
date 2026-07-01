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
import { Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-brand-white font-sans text-brand-navy selection:bg-brand-light selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
      {!isHome && <ReviewsSection />}
      {!isHome && <CTASection />}
      <Footer />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
