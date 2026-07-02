import { useEffect, useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && contentRef.current) {
          contentRef.current.style.animation = 'fadeInUp 1s ease-out';
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative w-full py-20 md:py-32 px-4 bg-gradient-to-b from-dark-bg to-dark-light">
      <div className="max-w-6xl mx-auto">
        {/* 分割线 */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-accent-yellow to-accent-pink"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            关于我
            <span className="text-2xl md:text-3xl text-accent-yellow ml-4">About</span>
          </h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-accent-pink to-accent-yellow"></div>
        </div>

        <div ref={contentRef} className="grid md:grid-cols-3 gap-8 items-start mt-12">
          {/* 左侧：个人照片 */}
          <div className="flex justify-center">
            <div className="relative w-48 h-56 md:w-56 md:h-72 group">
              {/* 背景装饰 */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow to-accent-pink opacity-20 transform group-hover:scale-105 transition-transform duration-300"></div>
              
              {/* 照片 */}
              <img
                src="https://via.placeholder.com/280x360/1a1f3a/FFD700?text=Personal+Photo"
                alt="李栋"
                className="relative w-full h-full object-cover border-2 border-accent-pink"
              />

              {/* 悬停效果 */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* 右侧：信息卡片 */}
          <div className="md:col-span-2 space-y-8">
            {/* 基本信息 */}
            <div className="border-l-4 border-accent-yellow pl-6">
              <h3 className="text-lg font-bold text-white mb-4">基本信息</h3>
              <div className="space-y-3 text-base text-gray-300">
                <p>
                  <span className="text-accent-pink font-semibold">姓名：</span>
                  李栋 <span className="text-xs text-gray-400">(She/Her)</span>
                </p>
                <p>
                  <span className="text-accent-pink font-semibold">出生日期：</span>
                  2004.02.04
                </p>
                <p>
                  <span className="text-accent-pink font-semibold">专业：</span>
                  视觉传达设计 <span className="text-xs text-gray-400">Visual Communication Design</span>
                </p>
              </div>
            </div>

            {/* 个人简介 */}
            <div className="border-l-4 border-accent-green pl-6">
              <h3 className="text-lg font-bold text-white mb-4">自我介绍</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                我是一名视觉传达设计师，热衷于用颜色和设计讲故事。擅长平面设计、品牌设计、视频制作等多个领域。致力于将创意想法转化为视觉语言，为每一个项目注入灵魂。
              </p>
              <p className="text-xs text-gray-400 mt-3">
                I am a visual communication designer passionate about telling stories through colors and design. Skilled in graphic design, branding, video production and more.
              </p>
            </div>

            {/* 联系方式 */}
            <div className="border-l-4 border-accent-cyan pl-6">
              <h3 className="text-lg font-bold text-white mb-4">联系方式</h3>
              <div className="space-y-2 text-base text-gray-300">
                <p>
                  <span className="text-accent-cyan font-semibold">📞 电话：</span>
                  15523957239
                </p>
                <p>
                  <span className="text-accent-cyan font-semibold">💬 QQ：</span>
                  1303212579
                </p>
                <p>
                  <span className="text-accent-cyan font-semibold">📧 邮箱：</span>
                  <a href="mailto:1303212579@qq.com" className="text-accent-yellow hover:underline">
                    1303212579@qq.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
