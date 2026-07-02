import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: '首页', enLabel: 'Home', id: 'hero' },
    { label: '关于', enLabel: 'About', id: 'about' },
    { label: '作品', enLabel: 'Works', id: 'works' },
    { label: '联系', enLabel: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-accent-pink/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span className="text-white">Li</span>
          <span className="text-accent-yellow">D</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm group relative overflow-hidden"
            >
              <span className="text-white group-hover:text-accent-pink transition-colors">
                {item.label}
              </span>
              <span className="text-xs text-gray-400 ml-1 group-hover:text-accent-pink transition-colors">
                {item.enLabel}
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-yellow to-accent-pink group-hover:w-full transition-all duration-300"></div>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-accent-yellow transition-all ${
            isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-accent-pink transition-all ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-accent-green transition-all ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-dark-light/95 backdrop-blur-md border-b border-accent-pink/20 px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left hover:text-accent-yellow transition-colors"
            >
              <span className="text-white">{item.label}</span>
              <span className="text-xs text-gray-400 ml-2">{item.enLabel}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
