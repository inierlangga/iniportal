import React, { useState, useEffect, useRef } from 'react';
import { 
  Megaphone, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  ArrowRight
} from 'lucide-react';
import { announcements } from '../../data/mockData';

export default function AnnouncementCarousel({ theme = 'original', onSelectAnnouncement }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isPlayful = theme === 'playful';
  const isNeu = theme === 'neumorphic';
  const total = announcements.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isHovered]);

  const currentItem = announcements[currentIndex];

  if (isOriginal) {
    return (
      <div 
        className="bg-white rounded-md shadow-sm border border-slate-200/60 p-4 font-sans flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="bg-[#16AAFF] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
            Pengumuman
          </span>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevSlide}
              className="p-1 text-slate-500 hover:text-slate-800 rounded"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-1 text-slate-500 hover:text-slate-800 rounded"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div 
          onClick={() => onSelectAnnouncement(currentItem)}
          className="relative rounded overflow-hidden cursor-pointer group"
        >
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full aspect-[16/9] sm:aspect-[21/10] object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80";
            }}
          />

          <div 
            className="absolute bottom-3 left-4 right-4 sm:left-12 sm:right-12 p-3 rounded-lg shadow-sm text-[#0B5885] transition-transform duration-200 group-hover:scale-[1.01]"
            style={{
              backgroundImage: 'linear-gradient(to bottom right, #4dbeff, #D0EEFF)',
            }}
          >
            <h3 className="font-bold text-sm sm:text-base leading-tight mb-1">
              {currentItem.title}
            </h3>
            <p className="text-xs line-clamp-3 leading-relaxed opacity-95">
              {currentItem.snippet}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isClay) {
    return (
      <div 
        className="rounded-[32px] clay-card p-6 sm:p-7 bg-white/80 font-dmsans text-[#332F3A] flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="pb-4 mb-4 border-b border-slate-200/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#DB2777] text-white px-3.5 py-1 rounded-full text-xs font-black font-display inline-flex items-center gap-1.5 shadow-xs">
              <Megaphone className="w-3.5 h-3.5 text-[#FBBF24]" />
              Pengumuman Kampus
            </span>
            <span className="text-xs text-[#635F69] font-bold font-display">
              {currentIndex + 1} / {total}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Pengumuman sebelumnya"
              className="w-8 h-8 rounded-[14px] clay-btn-secondary flex items-center justify-center text-[#332F3A] focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Pengumuman berikutnya"
              className="w-8 h-8 rounded-[14px] clay-btn-secondary flex items-center justify-center text-[#332F3A] focus:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div 
          onClick={() => onSelectAnnouncement(currentItem)}
          className="group relative cursor-pointer flex-1 flex flex-col"
        >
          <div className="rounded-[24px] overflow-hidden mb-4 p-1.5 bg-white/70 shadow-inner">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[20px] overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute top-3 left-3">
                <span className="px-3.5 py-1 text-xs font-black font-display bg-white/90 backdrop-blur-md text-[#7C3AED] rounded-full shadow-sm">
                  {currentItem.category}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-black font-display text-[#7C3AED]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentItem.date}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black font-display text-[#332F3A] group-hover:text-[#7C3AED] transition-colors leading-snug">
                {currentItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#635F69] line-clamp-3 leading-relaxed font-medium">
                {currentItem.snippet}
              </p>
            </div>

            <div className="pt-3.5 border-t border-slate-200/60 flex items-center justify-between">
              <span className="clay-btn-primary px-5 py-2.5 rounded-[20px] font-black font-display text-xs inline-flex items-center gap-2">
                Baca Selengkapnya
                <ArrowRight className="w-3.5 h-3.5" />
              </span>

              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                {announcements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`
                      transition-all duration-300 rounded-full
                      ${currentIndex === idx 
                        ? 'w-7 h-2.5 bg-gradient-to-r from-[#7C3AED] to-[#DB2777] shadow-xs' 
                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-[#7C3AED]/40'}
                    `}
                    aria-label={`Ke slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isNeu) {
    return (
      <div 
        className="rounded-[32px] neu-flat p-6 sm:p-7 bg-[#E0E5EC] font-dmsans text-[#3D4852] flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="pb-4 mb-4 border-b border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="neu-inset-sm text-[#6C63FF] px-3.5 py-1 rounded-full text-xs font-bold font-jakarta inline-flex items-center gap-1.5">
              <Megaphone className="w-3.5 h-3.5" />
              Pengumuman Kampus
            </span>
            <span className="text-xs text-[#6B7280] font-medium">
              {currentIndex + 1} / {total}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Pengumuman sebelumnya"
              className="w-8 h-8 rounded-xl neu-btn flex items-center justify-center text-[#3D4852] focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Pengumuman berikutnya"
              className="w-8 h-8 rounded-xl neu-btn flex items-center justify-center text-[#3D4852] focus:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div 
          onClick={() => onSelectAnnouncement(currentItem)}
          className="group relative cursor-pointer flex-1 flex flex-col"
        >
          <div className="neu-well p-2 rounded-2xl overflow-hidden mb-4">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 text-xs font-bold font-jakarta bg-[#E0E5EC]/90 backdrop-blur-sm text-[#3D4852] neu-sm rounded-full">
                  {currentItem.category}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#6C63FF]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentItem.date}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-jakarta text-[#3D4852] group-hover:text-[#6C63FF] transition-colors leading-snug">
                {currentItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#6B7280] line-clamp-3 leading-relaxed">
                {currentItem.snippet}
              </p>
            </div>

            <div className="pt-3 border-t border-black/5 flex items-center justify-between">
              <span className="neu-accent-btn px-4 py-2 rounded-2xl font-bold font-jakarta text-xs inline-flex items-center gap-2">
                Baca Selengkapnya
                <ArrowRight className="w-3.5 h-3.5" />
              </span>

              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                {announcements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`
                      transition-all duration-200 rounded-full
                      ${currentIndex === idx 
                        ? 'w-6 h-2 neu-well bg-[#6C63FF]' 
                        : 'w-2 h-2 neu-sm bg-[#E0E5EC] hover:bg-[#6C63FF]/30'}
                    `}
                    aria-label={`Ke slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Playful Geometric Style
  return (
    <div 
      className="bg-white border-2 border-[#1E293B] shadow-pop-lg rounded-3xl overflow-hidden font-jakarta flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-6 py-4 border-b-2 border-[#E2E8F0] flex items-center justify-between bg-[#FFFDF5]">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-pop-sm px-3 py-1 rounded-full font-outfit font-extrabold text-xs inline-flex items-center gap-1.5">
            <Megaphone className="w-3.5 h-3.5 text-[#FBBF24]" />
            Pengumuman Kampus
          </span>
          <span className="text-xs font-bold text-[#64748B]">
            {currentIndex + 1} dari {total}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Pengumuman sebelumnya"
            className="w-8 h-8 rounded-full bg-white text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm btn-candy flex items-center justify-center focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Pengumuman berikutnya"
            className="w-8 h-8 rounded-full bg-white text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm btn-candy flex items-center justify-center focus:outline-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div 
        onClick={() => onSelectAnnouncement(currentItem)}
        className="group relative cursor-pointer flex-1 flex flex-col"
      >
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-100">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80";
            }}
          />

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-extrabold font-outfit bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm rounded-full">
              {currentItem.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B5CF6]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentItem.date}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold font-outfit text-[#1E293B] group-hover:text-[#8B5CF6] transition-colors leading-snug">
              {currentItem.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#475569] line-clamp-3 leading-relaxed font-medium">
              {currentItem.snippet}
            </p>
          </div>

          <div className="pt-3 border-t-2 border-[#E2E8F0] flex items-center justify-between">
            <span className="btn-candy inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-pop-sm font-outfit font-extrabold text-xs">
              Baca Selengkapnya
              <ArrowRight className="w-3.5 h-3.5" />
            </span>

            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              {announcements.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`
                    transition-all duration-200 border-2 border-[#1E293B] rounded-full
                    ${currentIndex === idx 
                      ? 'w-6 h-2.5 bg-[#F472B6] shadow-pop-sm' 
                      : 'w-2.5 h-2.5 bg-white hover:bg-[#FBBF24]'}
                  `}
                  aria-label={`Ke slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
