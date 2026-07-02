import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.animation = 'fadeInUp 1s ease-out';
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.animation = 'fadeInUp 1s ease-out 0.2s both';
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToWorks = () => {
    const element = document.getElementById('works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-light to-dark-bg"></div>

      {/* 鼠标跟随光点 */}
      <div
        className="pointer-events-none fixed w-32 h-32 rounded-full blur-3xl opacity-20 transition-all duration-100"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>

      {/* 内容 */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
        >
          <span className="text-white">李</span>
          <span className="text-accent-yellow">栋</span>
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light tracking-widest mt-2 inline-block">
            Li Dong
          </span>
        </h1>

        <div
          ref={subtitleRef}
          className="mt-8 space-y-3"
        >
          <p className="text-lg md:text-xl text-gray-300">
            视觉传达设计师
            <span className="text-sm md:text-base text-gray-400 ml-2">Visual Communication Designer</span>
          </p>
          <p className="text-base md:text-lg text-gray-400">
            用色彩讲故事 | Telling Stories with Colors
          </p>
        </div>

        {/* CTA Button */}
        <button 
          onClick={scrollToWorks}
          className="mt-12 group relative px-8 py-3 border-2 border-accent-pink text-accent-pink hover:text-white transition-colors duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <span className="relative font-medium">
            探索作品
            <span className="text-xs ml-2">Explore Works</span>
          </span>
        </button>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-yellow rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
