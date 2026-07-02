import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll', window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-dark-bg">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
