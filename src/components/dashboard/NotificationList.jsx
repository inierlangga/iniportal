import React from 'react';
import { Bell, ExternalLink, Clock, ChevronRight, Link as LinkIcon } from 'lucide-react';
import { notifications } from '../../data/mockData';

export default function NotificationList({ theme = 'original', onOpenAll }) {
  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isPlayful = theme === 'playful';
  const isNeu = theme === 'neumorphic';

  if (isOriginal) {
    return (
      <div className="bg-white rounded-md shadow-sm border border-slate-200/60 p-4 font-sans flex flex-col h-full">
        <div className="mb-3">
          <span className="bg-[#16AAFF] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
            Notifikasi
          </span>
        </div>

        <div className="space-y-2.5 flex-1 overflow-y-auto max-h-[480px] pr-1">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="bg-[#d4edda] border border-[#c3e6cb] text-[#155724] rounded p-2.5 relative transition-opacity hover:opacity-95"
            >
              <div className="absolute top-2 right-2">
                <a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Membuka tautan notifikasi: ${item.title}`);
                  }}
                  className="text-[#155724] hover:text-[#0b2e13] opacity-80 hover:opacity-100"
                  title="Sematan tautan"
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pr-5">
                <strong className="text-xs font-bold text-[#155724] block">
                  {item.title}
                </strong>
                <p className="text-[11px] text-[#155724] mt-0.5 leading-snug">
                  {item.description}
                </p>
              </div>

              <div className="text-right text-[10px] text-[#155724]/80 mt-1">
                {item.date} {item.time}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-2">
          <button
            type="button"
            onClick={onOpenAll}
            className="original-arrow-link focus:outline-none"
          >
            selengkapnya
          </button>
        </div>
      </div>
    );
  }

  if (isClay) {
    return (
      <div className="rounded-[32px] clay-card p-6 sm:p-7 bg-white/80 font-dmsans text-[#332F3A] flex flex-col h-full">
        <div className="pb-4 mb-4 border-b border-slate-200/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-[#DB2777] to-[#7C3AED] text-white px-3.5 py-1 rounded-full text-xs font-black font-display inline-flex items-center gap-1.5 shadow-xs">
              <Bell className="w-3.5 h-3.5" />
              Notifikasi Terbaru
            </span>
          </div>
          
          <span className="bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 px-3 py-0.5 rounded-full text-xs font-black font-display shadow-2xs">
            5 Baru
          </span>
        </div>

        <div className="space-y-3.5 flex-1 overflow-y-auto max-h-[460px] pr-1">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-[22px] bg-[#EFEBF5] clay-pressed transition-all duration-200 hover:bg-white/90 hover:shadow-clay-card group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#DB2777] shrink-0 shadow-xs"></span>
                  <h4 className="text-xs font-black font-display text-[#332F3A]">
                    {item.title}
                  </h4>
                </div>

                <a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Membuka notifikasi: "${item.title}"`);
                  }}
                  className="w-7 h-7 rounded-[12px] clay-btn-secondary flex items-center justify-center text-[#7C3AED] shrink-0 active:scale-[0.92]"
                  title="Sematan tautan"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs text-[#635F69] mt-1.5 leading-relaxed font-medium">
                {item.description}
              </p>

              <div className="mt-3 pt-2 border-t border-slate-200/50 flex items-center justify-between text-[11px] text-[#635F69]">
                <span className="bg-white px-2.5 py-0.5 text-[10px] font-black font-display text-[#7C3AED] rounded-full shadow-2xs">
                  {item.tag}
                </span>
                <div className="flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3 text-[#7C3AED]" />
                  <span>{item.date} {item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 mt-2 border-t border-slate-200/60 text-center">
          <button
            type="button"
            onClick={onOpenAll}
            className="w-full py-2.5 px-4 text-xs flex items-center justify-center gap-2 clay-btn-secondary rounded-[20px] font-black font-display text-[#332F3A] hover:text-[#7C3AED] active:scale-[0.96] focus:outline-none"
          >
            <span>Lihat Semua Notifikasi</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  if (isNeu) {
    return (
      <div className="rounded-[32px] neu-flat p-6 sm:p-7 bg-[#E0E5EC] font-dmsans text-[#3D4852] flex flex-col h-full">
        <div className="pb-4 mb-4 border-b border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="neu-inset-sm text-[#6C63FF] px-3.5 py-1 rounded-full text-xs font-bold font-jakarta inline-flex items-center gap-1.5">
              <Bell className="w-3.5 h-3.5" />
              Notifikasi Terbaru
            </span>
          </div>
          
          <span className="neu-inset-sm text-[#38B2AC] px-2.5 py-0.5 rounded-full text-[10px] font-bold font-jakarta">
            5 Baru
          </span>
        </div>

        <div className="space-y-3.5 flex-1 overflow-y-auto max-h-[460px] pr-1">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`
                p-4 rounded-2xl transition-all duration-200 hover:neu-flat
                ${item.unread ? 'neu-inset-sm' : 'neu-inset-sm opacity-80'}
              `}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  {item.unread && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6C63FF] shrink-0 shadow-xs"></span>
                  )}
                  <h4 className="text-xs font-bold font-jakarta text-[#3D4852]">
                    {item.title}
                  </h4>
                </div>

                <a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Membuka notifikasi: "${item.title}"`);
                  }}
                  className="w-6 h-6 rounded-xl neu-btn flex items-center justify-center text-[#6C63FF] shrink-0"
                  title="Sematan tautan"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-3 pt-2 border-t border-black/5 flex items-center justify-between text-[11px] text-[#6B7280]">
                <span className="neu-sm px-2 py-0.5 text-[10px] font-bold text-[#6C63FF] rounded-full">
                  {item.tag}
                </span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#6C63FF]" />
                  <span>{item.date} {item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 mt-2 border-t border-black/5 text-center">
          <button
            type="button"
            onClick={onOpenAll}
            className="w-full py-2.5 px-4 text-xs flex items-center justify-center gap-2 neu-btn rounded-2xl font-bold font-jakarta text-[#3D4852] hover:text-[#6C63FF] focus:outline-none"
          >
            <span>Lihat Semua Notifikasi</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Playful Geometric Style
  return (
    <div className="bg-white border-2 border-[#1E293B] shadow-pop-lg rounded-3xl overflow-hidden font-jakarta flex flex-col h-full">
      <div className="px-6 py-4 border-b-2 border-[#E2E8F0] flex items-center justify-between bg-[#FFFDF5]">
        <div className="flex items-center gap-2">
          <span className="bg-[#F472B6] text-white border-2 border-[#1E293B] shadow-pop-sm px-3 py-1 rounded-full font-outfit font-extrabold text-xs inline-flex items-center gap-1.5">
            <Bell className="w-3.5 h-3.5 text-[#FBBF24]" />
            Notifikasi Terbaru
          </span>
        </div>
        
        <span className="bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] px-2.5 py-0.5 rounded-full font-outfit font-extrabold text-[10px] shadow-pop-sm">
            5 Baru
        </span>
      </div>

      <div className="p-4 flex-1 space-y-3 overflow-y-auto max-h-[460px]">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`
              p-3.5 rounded-2xl border-2 border-[#1E293B] shadow-pop-sm transition-all duration-200 hover:-translate-y-0.5
              ${item.unread ? 'bg-[#FFFDF5]' : 'bg-white'}
            `}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                {item.unread && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F472B6] border-2 border-[#1E293B] shrink-0"></span>
                )}
                <h4 className="text-xs font-extrabold font-outfit text-[#1E293B]">
                  {item.title}
                </h4>
              </div>

              <a
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Membuka notifikasi: "${item.title}"`);
                }}
                className="w-6 h-6 rounded-full bg-white text-[#1E293B] border border-[#1E293B] shadow-pop-sm btn-candy flex items-center justify-center shrink-0"
                title="Sematan tautan"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-xs text-[#475569] mt-1.5 leading-relaxed font-medium">
              {item.description}
            </p>

            <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-semibold text-[#64748B]">
              <span className="px-2 py-0.5 text-[10px] font-extrabold font-outfit rounded-full bg-[#34D399] text-[#1E293B] border border-[#1E293B]">
                {item.tag}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#8B5CF6]" />
                <span>{item.date} {item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t-2 border-[#E2E8F0] bg-[#FFFDF5] text-center">
        <button
          type="button"
          onClick={onOpenAll}
          className="w-full py-2.5 px-4 text-xs flex items-center justify-center gap-2 btn-candy bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm rounded-full font-outfit font-extrabold"
        >
          <span>Lihat Semua Notifikasi</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
