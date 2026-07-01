import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PremiumHero from '../components/PremiumHero';
import PremiumTrustRow from '../components/PremiumTrustRow';
import PremiumAbout from '../components/PremiumAbout';
import PremiumSolutions from '../components/PremiumSolutions';
import PremiumFeatures from '../components/PremiumFeatures';
import PremiumReviews from '../components/PremiumReviews';
import PremiumCTA from '../components/PremiumCTA';

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
    <div className="bg-ocean">
      <PremiumHero />
      <PremiumTrustRow />
      <PremiumAbout />
      <PremiumSolutions />
      <PremiumFeatures />
      <PremiumReviews />
      <PremiumCTA />
    </div>
  );
}
