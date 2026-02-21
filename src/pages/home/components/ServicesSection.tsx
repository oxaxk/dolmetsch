import { useState, useRef, useEffect } from 'react';
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const services = [
    {
      icon: 'ri-briefcase-4-line',
      title: 'Dolmetschen für Unternehmen',
      description:
        'Professionelles Dolmetschen bei Geschäftsterminen, Verhandlungen und Mandantengesprächen. Wir unterstützen Sie bei der sicheren und präzisen Kommunikation mit internationalen Partnern.',
      image: '/images/services/1.png'
    },
    {
      icon: 'ri-government-line',
      title: 'Dolmetschen für Behörden',
      description:
        'Begleitung bei Terminen mit Behörden, Gerichten und öffentlichen Einrichtungen. Wir sorgen für klare Verständigung und rechtssichere Kommunikation.',
      image: '/images/services/2.png'
    },
    {
      icon: 'ri-hospital-line',
      title: 'Medizinisches Dolmetschen',
      description:
        'Sprachliche Unterstützung bei Arztterminen, Krankenhausaufenthalten und medizinischen Gesprächen – einfühlsam, diskret und zuverlässig.',
      image: '/images/services/3.png'
    },
    {
      icon: 'ri-home-4-line',
      title: 'Dolmetschen für private Anliegen',
      description:
        'Begleitung bei persönlichen Terminen wie Behördengängen oder wichtigen Gesprächen im privaten Umfeld.',
      image: '/images/services/4.png'
    },
    {
      icon: 'ri-translate-2',
      title: 'Übersetzungsdienst',
      description:
        'Schriftliche Übersetzungen von Dokumenten, Bescheinigungen und weiteren Unterlagen – sorgfältig und termingerecht.',
      image: '/images/services/5.png'
    }
  ];

  const goToSlide = (index: number) => {
    const normalizedIndex = (index + services.length) % services.length;
    if (normalizedIndex === currentIndex) return;

    setCurrentIndex(normalizedIndex);

    const el = mobileScrollRef.current;
    if (el) {
      el.scrollTo({
        left: normalizedIndex * el.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    goToSlide(currentIndex + 1);
    setTimeout(() => setIsTransitioning(false), 350);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    goToSlide(currentIndex - 1);
    setTimeout(() => setIsTransitioning(false), 350);
  };

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current || isTransitioning) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDraggingRef.current || isTransitioning) return;
    
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    isDraggingRef.current = false;
  };

  // Mobile scroll handler for snap carousel
  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIndex = Math.round(el.scrollLeft / el.clientWidth);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  // Mouse events
  const handleMouseDown = (e: ReactMouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };


  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: ReactTouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    handleStart(touch.clientX);
  };

  const handleTouchMove = (e: ReactTouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    handleMove(touch.clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionEl = sectionRef.current;
      const el = mobileScrollRef.current;
      if (!sectionEl || !el) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      // Nur reagieren, wenn Section im Viewport ist
      if (rect.bottom <= 0 || rect.top >= viewportHeight) return;

      const sectionHeight = rect.height || 1;
      const distanceFromTop = Math.min(Math.max(-rect.top, 0), sectionHeight);
      const progress = distanceFromTop / sectionHeight; // 0 = oben, 1 = unten

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const targetScrollLeft = progress * maxScrollLeft;

      el.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });

      const maxIndex = services.length - 1;
      const targetIndex = Math.round(progress * maxIndex);
      if (targetIndex !== currentIndex) {
        setCurrentIndex(targetIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex, services.length]);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        handleEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);


  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-14 lg:py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-3 text-[#0F3D8C]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Unsere Leistungen
          </p>
          <h2
            className="text-3xl lg:text-4xl font-semibold mb-4"
            style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
          >
            Dolmetsch- & Übersetzungsdienst in Frankfurt (Oder)
          </h2>
          <p
            className="text-base lg:text-lg opacity-90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
          >
            Wir bieten Dolmetsch- und Übersetzungsleistungen für Behörden, medizinische Einrichtungen, Unternehmen und Privatpersonen. Jede Leistung erfolgt terminsicher, vertraulich und strukturiert geplant.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* Card Container with proper spacing - jetzt für alle Viewports */}
          <div className="w-full px-4 lg:px-20">
            <div
              ref={mobileScrollRef}
              className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-4"
              onScroll={handleMobileScroll}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {services.map((svc) => (
                <div key={svc.title} className="shrink-0 w-[85%] md:w-[45%] lg:w-[38%] snap-center">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition-all duration-300 flex flex-col">
                    <div className="px-6 pt-6 pb-4 flex-1 flex flex-col">
                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-full bg-[#0F3D8C]/10 text-[#0F3D8C] flex items-center justify-center shadow-[0_10px_24px_rgba(15,61,140,0.25)]">
                          <i className={`${svc.icon} text-xl`} />
                        </div>
                        <div className="flex-1">
                          <p
                            className="text-[0.7rem] tracking-[0.22em] uppercase text-sky-700/80 mb-1"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            Leistung
                          </p>
                          <h3
                            className="text-sm md:text-base lg:text-[1.05rem] font-semibold text-slate-900"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p
                        className="mt-4 text-sm md:text-[0.95rem] leading-relaxed text-slate-700 flex-1"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Dots Navigation mit Pfeilen */}
          <div className="flex items-center justify-center mt-8 lg:mt-12 space-x-4">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/60 bg-[#0F3D8C]/90 hover:bg-[#0C316F] transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <i className="ri-arrow-left-s-line text-lg text-white"></i>
            </button>

            <div className="flex space-x-3">
              <button
                onClick={() => goToSlide(0)}
                disabled={isTransitioning}
                className={`h-2.5 w-7 rounded-full bg-[#0F3D8C] transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  currentIndex === 0 ? 'opacity-100' : 'opacity-40'
                }`}
              />
              <button
                onClick={() => goToSlide(services.length - 1)}
                disabled={isTransitioning}
                className={`h-2.5 w-7 rounded-full bg-[#0F3D8C] transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  currentIndex === services.length - 1 ? 'opacity-100' : 'opacity-40'
                }`}
              />
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/60 bg-[#0F3D8C]/90 hover:bg-[#0C316F] transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <i className="ri-arrow-right-s-line text-lg text-white"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
