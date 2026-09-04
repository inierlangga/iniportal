import React, { useEffect } from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';

export default function AnnouncementModal({ theme = 'original', announcement, onClose }) {
  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isPlayful = theme === 'playful';
  const isNeu = theme === 'neumorphic';

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    if (announcement) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [announcement, onClose]);

  if (!announcement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 transition-opacity animate-in fade-in duration-200 ${
          isClay
            ? 'bg-[#332F3A]/60 backdrop-blur-md'
            : isNeu
              ? 'bg-[#3D4852]/50 backdrop-blur-xs'
              : isPlayful
                ? 'bg-[#1E293B]/60 backdrop-blur-xs'
                : 'bg-slate-900/60'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className={`
        relative w-full max-w-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200
        ${isClay
          ? 'bg-[#F4F1FA] clay-card rounded-[36px] border border-white/80 shadow-clay-deep text-[#332F3A] font-dmsans'
          : isNeu
            ? 'bg-[#E0E5EC] neu-flat rounded-[32px] font-dmsans text-[#3D4852]'
            : isPlayful
              ? 'bg-[#FFFDF5] border-2 border-[#1E293B] shadow-pop-lg rounded-3xl font-jakarta text-[#1E293B]'
              : 'bg-white rounded-2xl shadow-xl border border-slate-200 font-sans'}
      `}>
        
        {/* Modal Top Header with Image & Close */}
        <div className="relative aspect-video sm:aspect-[21/9] bg-slate-900 overflow-hidden shrink-0">
          <img
            src={announcement.image}
            alt={announcement.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80";
            }}
          />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className={`
              absolute top-4 right-4 p-2 transition-all focus:outline-none
              ${isClay
                ? 'w-9 h-9 rounded-[14px] clay-btn-secondary flex items-center justify-center text-[#332F3A] active:scale-[0.92]'
                : isNeu
                  ? 'w-9 h-9 rounded-2xl neu-btn flex items-center justify-center text-[#3D4852]'
                  : isPlayful
                    ? 'w-9 h-9 rounded-full bg-white text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm btn-candy flex items-center justify-center'
                    : 'rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md'}
            `}
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Date overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
            <span className={`
              px-3.5 py-1 text-xs font-black uppercase
              ${isClay
                ? 'bg-gradient-to-r from-[#7C3AED] to-[#DB2777] text-white rounded-full shadow-xs font-display'
                : isNeu
                  ? 'bg-[#E0E5EC]/90 neu-sm text-[#3D4852] rounded-full'
                  : isPlayful
                    ? 'bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-pop-sm rounded-full font-outfit'
                    : 'bg-blue-600 text-white rounded-lg shadow-xs'}
            `}>
              {announcement.category}
            </span>
            <span className={`
              flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase
              ${isClay
                ? 'bg-white/90 backdrop-blur-md text-[#332F3A] rounded-full shadow-xs font-display'
                : isNeu
                  ? 'bg-[#E0E5EC]/90 neu-sm text-[#3D4852] rounded-full'
                  : isPlayful
                    ? 'bg-white text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm rounded-full font-outfit'
                    : 'bg-black/40 text-slate-200 rounded-lg'}
            `}>
              <Calendar className="w-3.5 h-3.5" />
              {announcement.date}
            </span>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          <h2 className={`
            leading-tight
            ${isClay
              ? 'text-xl sm:text-2xl font-black font-display text-[#332F3A]'
              : isNeu
                ? 'text-xl sm:text-2xl font-extrabold font-jakarta text-[#3D4852]'
                : isPlayful
                  ? 'text-xl sm:text-2xl font-extrabold text-[#1E293B] font-outfit tracking-tight'
                  : 'text-xl sm:text-2xl font-bold text-slate-900'}
          `}>
            {announcement.title}
          </h2>

          <div className={`
            text-sm leading-relaxed whitespace-pre-line space-y-3
            ${isClay ? 'text-[#635F69] font-medium' : isNeu ? 'text-[#6B7280]' : isPlayful ? 'text-[#334155] font-medium' : 'text-slate-700'}
          `}>
            {announcement.fullContent}
          </div>

          {/* Links */}
          {announcement.links && announcement.links.length > 0 && (
            <div className={`pt-4 flex flex-wrap gap-3 ${isClay ? 'border-t border-slate-200/60' : isNeu ? 'border-t border-black/5' : 'border-t-2 border-[#E2E8F0]'}`}>
              {announcement.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target={link.type === 'external' ? '_blank' : '_self'}
                  rel="noreferrer"
                  className={`
                    inline-flex items-center gap-2 px-4 py-2 text-xs font-bold transition-all
                    ${isClay
                      ? 'clay-btn-secondary rounded-[18px] text-[#7C3AED] font-black font-display active:scale-[0.92]'
                      : isNeu
                        ? 'neu-btn rounded-2xl text-[#6C63FF]'
                        : isPlayful
                          ? 'btn-candy bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm rounded-full font-outfit'
                          : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-xl font-bold'}
                  `}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className={`
          px-6 py-4 flex items-center justify-between shrink-0
          ${isClay
            ? 'border-t border-slate-200/60 bg-white/60'
            : isNeu
              ? 'border-t border-black/5 bg-[#E0E5EC]'
              : isPlayful
                ? 'bg-[#F1F5F9] border-t-2 border-[#E2E8F0]'
                : 'bg-slate-50 border-t border-slate-100'}
        `}>
          <span className={`text-xs ${isClay ? 'text-[#635F69] font-medium' : isNeu ? 'text-[#6B7280]' : 'text-slate-500 font-semibold'}`}>
            Portal Civitas PKN STAN
          </span>
          <button
            type="button"
            onClick={onClose}
            className={`
              px-5 py-2 text-xs font-black uppercase transition-all
              ${isClay
                ? 'clay-btn-primary rounded-[18px] text-white font-display'
                : isNeu
                  ? 'neu-btn rounded-2xl text-[#3D4852]'
                  : isPlayful
                    ? 'btn-candy bg-[#1E293B] text-white border-2 border-[#1E293B] shadow-pop-sm rounded-full font-outfit'
                    : 'rounded-xl bg-slate-800 text-white hover:bg-slate-900'}
            `}
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
