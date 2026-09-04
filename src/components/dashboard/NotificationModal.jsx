import React, { useEffect } from 'react';
import { X, Bell, CheckCheck, ExternalLink, Clock } from 'lucide-react';
import { notifications } from '../../data/mockData';

export default function NotificationModal({ theme = 'original', isOpen, onClose }) {
  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isPlayful = theme === 'playful';
  const isNeu = theme === 'neumorphic';

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 transition-opacity animate-in fade-in ${
          isClay
            ? 'bg-[#332F3A]/60 backdrop-blur-md'
            : isNeu
              ? 'bg-[#3D4852]/50 backdrop-blur-xs'
              : isPlayful
                ? 'bg-[#1E293B]/60 backdrop-blur-xs'
                : 'bg-slate-900/50 backdrop-blur-xs'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className={`
        relative w-full max-w-lg overflow-hidden z-10 flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150
        ${isClay
          ? 'bg-[#F4F1FA] clay-card rounded-[36px] border border-white/80 shadow-clay-deep font-dmsans text-[#332F3A]'
          : isNeu
            ? 'bg-[#E0E5EC] neu-flat rounded-[32px] font-dmsans text-[#3D4852]'
            : isPlayful
              ? 'bg-[#FFFDF5] border-2 border-[#1E293B] shadow-pop-lg rounded-3xl font-jakarta text-[#1E293B]'
              : 'bg-white rounded-3xl shadow-2xl border border-slate-100 font-sans'}
      `}>
        
        {/* Header */}
        <div className={`
          px-6 py-4 flex items-center justify-between
          ${isClay
            ? 'border-b border-slate-200/60 bg-white/60'
            : isNeu
              ? 'border-b border-black/5 bg-[#E0E5EC]'
              : 'border-b-2 border-[#E2E8F0] bg-[#FFFDF5]'}
        `}>
          <div className="flex items-center gap-2.5">
            <div className={`
              p-2 rounded-[16px]
              ${isClay
                ? 'bg-gradient-to-br from-violet-400 to-purple-600 text-white clay-orb'
                : isNeu 
                  ? 'neu-well text-[#6C63FF]'
                  : 'bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-pop-sm rounded-xl'}
            `}>
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-base font-black ${isClay ? 'font-display text-[#332F3A]' : isNeu ? 'font-jakarta text-[#3D4852]' : 'font-outfit text-[#1E293B]'}`}>
                Pusat Notifikasi
              </h3>
              <p className={`text-xs ${isClay ? 'text-[#635F69]' : isNeu ? 'text-[#6B7280]' : 'text-[#64748B]'}`}>
                Informasi & pengingat akademik penting
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`
              p-1.5 transition-colors
              ${isClay
                ? 'w-8 h-8 rounded-[12px] clay-btn-secondary flex items-center justify-center text-[#332F3A] active:scale-[0.92]'
                : isNeu
                  ? 'w-8 h-8 rounded-xl neu-btn flex items-center justify-center text-[#3D4852]'
                  : 'w-8 h-8 rounded-full bg-white text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm btn-candy flex items-center justify-center'}
            `}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-6 overflow-y-auto space-y-3">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`
                p-4 transition-all
                ${isClay
                  ? 'clay-pressed rounded-[22px] bg-[#EFEBF5]'
                  : isNeu
                    ? 'neu-inset-sm rounded-2xl bg-[#E0E5EC]'
                    : 'bg-white border-2 border-[#1E293B] shadow-pop-sm rounded-2xl'}
              `}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {notif.unread && (
                      <span className={`w-2.5 h-2.5 rounded-full ${isClay ? 'bg-gradient-to-r from-[#7C3AED] to-[#DB2777]' : isNeu ? 'bg-[#6C63FF]' : 'bg-[#F472B6] border-2 border-[#1E293B]'}`}></span>
                    )}
                    <h4 className={`text-xs font-black ${isClay ? 'font-display text-[#332F3A]' : isNeu ? 'font-jakarta text-[#3D4852]' : 'font-outfit text-[#1E293B]'}`}>
                      {notif.title}
                    </h4>
                    <span className={`px-2.5 py-0.5 text-[10px] font-black rounded-full ${isClay ? 'bg-white text-[#7C3AED] shadow-2xs font-display' : isNeu ? 'neu-sm text-[#38B2AC]' : 'bg-[#34D399] text-[#1E293B] border border-[#1E293B]'}`}>
                      {notif.tag}
                    </span>
                  </div>
                  <p className={`text-xs leading-relaxed ${isClay ? 'text-[#635F69]' : isNeu ? 'text-[#6B7280]' : 'text-[#475569]'}`}>
                    {notif.description}
                  </p>
                </div>

                <a
                  href={notif.link}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Menuju halaman: ${notif.title}`);
                  }}
                  className={`w-7 h-7 flex items-center justify-center shrink-0 ${isClay ? 'clay-btn-secondary rounded-[12px] text-[#7C3AED] active:scale-[0.92]' : isNeu ? 'neu-btn rounded-xl text-[#6C63FF]' : 'rounded-full bg-white text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm btn-candy'}`}
                  title="Buka tautan terkait"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className={`mt-3 flex items-center justify-between text-[11px] pt-2 border-t ${isClay ? 'border-slate-200/50 text-[#635F69]' : 'border-black/5 text-[#6B7280]'}`}>
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3 text-[#7C3AED]" />
                  {notif.date} - {notif.time}
                </span>
                <span className={`cursor-pointer font-bold hover:underline ${isClay ? 'text-[#7C3AED] font-display' : 'text-[#6C63FF]'}`}>
                  Tandai telah dibaca
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`
          px-6 py-3.5 flex items-center justify-between
          ${isClay
            ? 'border-t border-slate-200/60 bg-white/60'
            : isNeu
              ? 'border-t border-black/5 bg-[#E0E5EC]'
              : 'border-t-2 border-[#E2E8F0] bg-[#FFFDF5]'}
        `}>
          <button
            type="button"
            onClick={() => alert('Semua notifikasi telah ditandai dibaca')}
            className={`text-xs font-bold flex items-center gap-1.5 ${isClay ? 'text-[#332F3A] hover:text-[#7C3AED] font-display' : isNeu ? 'text-[#3D4852] hover:text-[#6C63FF]' : 'text-[#1E293B] hover:text-[#8B5CF6]'}`}
          >
            <CheckCheck className={`w-4 h-4 ${isClay ? 'text-[#10B981]' : 'text-[#38B2AC]'}`} />
            <span>Tandai Semua Dibaca</span>
          </button>
          
          <button
            type="button"
            onClick={onClose}
            className={`
              px-5 py-2 text-xs font-black uppercase
              ${isClay
                ? 'clay-btn-primary rounded-[16px] text-white font-display'
                : isNeu
                  ? 'neu-btn rounded-2xl text-[#3D4852]'
                  : 'btn-candy bg-[#1E293B] text-white border-2 border-[#1E293B] shadow-pop-sm rounded-full font-outfit'}
            `}
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
