import React from 'react';
import { GraduationCap, BookOpenCheck, CheckCircle, ArrowUpRight } from 'lucide-react';
import { academicSummary } from '../../data/mockData';

const iconComponents = {
  GraduationCap,
  BookOpenCheck,
};

export default function StatCards({ theme = 'original' }) {
  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isPlayful = theme === 'playful';
  const isNeu = theme === 'neumorphic';

  if (isOriginal) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-arielle-smile text-white rounded-md shadow-sm p-4 flex items-center justify-between">
          <div>
            <div className="font-semibold text-sm">Mata Kuliah telah diikuti</div>
            <div className="text-xs text-white/80 mt-0.5">jumlah</div>
          </div>
          <div className="text-2xl font-bold tracking-tight">
            24 (57 sks)
          </div>
        </div>

        <div className="bg-arielle-smile text-white rounded-md shadow-sm p-4 flex items-center justify-between">
          <div>
            <div className="font-semibold text-sm">Mata Kuliah semester ini</div>
            <div className="text-xs text-white/80 mt-0.5">jumlah</div>
          </div>
          <div className="text-2xl font-bold tracking-tight">
            7 (18 sks)
          </div>
        </div>
      </div>
    );
  }

  if (isClay) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-dmsans text-[#332F3A]">
        {academicSummary.map((card, idx) => {
          const Icon = iconComponents[card.icon] || GraduationCap;
          const isFirst = idx === 0;

          return (
            <div
              key={card.id}
              className="rounded-[32px] clay-card p-7 sm:p-8 bg-white/80 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Background ambient lighting */}
              <div className={`absolute -right-8 -bottom-8 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-40 ${isFirst ? 'bg-[#7C3AED]' : 'bg-[#DB2777]'}`}></div>

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className={`px-3.5 py-1 rounded-full text-xs font-black font-display inline-block mb-2 shadow-2xs ${
                    isFirst ? 'bg-[#7C3AED]/10 text-[#7C3AED]' : 'bg-[#DB2777]/10 text-[#DB2777]'
                  }`}>
                    {card.badge}
                  </span>
                  <h3 className="text-sm font-bold text-[#635F69]">
                    {card.title}
                  </h3>
                </div>

                <div className={`w-14 h-14 rounded-[22px] clay-orb flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 ${
                  isFirst ? 'bg-gradient-to-br from-violet-400 to-purple-600' : 'bg-gradient-to-br from-pink-400 to-rose-600'
                }`}>
                  <Icon className="w-7 h-7" strokeWidth={2.5} />
                </div>
              </div>

              <div className="relative z-10 mt-5 flex items-baseline gap-3">
                <span className="text-5xl sm:text-6xl font-black font-display text-[#332F3A] tracking-tight leading-none">
                  {card.count}
                </span>
                <span className="text-sm font-bold text-[#635F69]">
                  {card.unit}
                </span>
              </div>

              <div className="relative z-10 mt-6 pt-3.5 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium">
                <span className="inline-flex items-center gap-1.5 text-[#10B981] font-black font-display">
                  <CheckCircle className="w-4 h-4" />
                  {card.subInfo}
                </span>

                <span className="flex items-center gap-0.5 text-[#7C3AED] group-hover:text-[#DB2777] transition-colors cursor-pointer font-black font-display">
                  <span>Rincian</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (isNeu) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-dmsans text-[#3D4852]">
        {academicSummary.map((card) => {
          const Icon = iconComponents[card.icon] || GraduationCap;

          return (
            <div
              key={card.id}
              className="rounded-[32px] neu-flat p-7 sm:p-8 bg-[#E0E5EC] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="neu-inset-sm px-3 py-1 rounded-full text-[11px] font-bold font-jakarta text-[#6C63FF] inline-block mb-2">
                    {card.badge}
                  </span>
                  <h3 className="text-sm font-bold text-[#6B7280]">
                    {card.title}
                  </h3>
                </div>

                <div className="w-13 h-13 rounded-2xl neu-well flex items-center justify-center text-[#6C63FF] group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold font-jakarta text-[#3D4852] tracking-tight">
                  {card.count}
                </span>
                <span className="text-sm font-medium text-[#6B7280]">
                  {card.unit}
                </span>
              </div>

              <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-medium">
                <span className="inline-flex items-center gap-1.5 text-[#38B2AC] font-bold">
                  <CheckCircle className="w-4 h-4" />
                  {card.subInfo}
                </span>

                <span className="flex items-center gap-0.5 text-[#6B7280] group-hover:text-[#6C63FF] transition-colors cursor-pointer font-bold">
                  <span>Rincian</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Playful Geometric Style
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-jakarta">
      {academicSummary.map((card, idx) => {
        const Icon = iconComponents[card.icon] || GraduationCap;
        const isFirst = idx === 0;

        return (
          <div
            key={card.id}
            className={`
              relative bg-white border-2 border-[#1E293B] rounded-3xl p-6 pt-8
              transition-all duration-300 group
              hover:-translate-y-1 hover:rotate-[-1deg]
              ${isFirst ? 'shadow-pop-violet' : 'shadow-pop-pink'}
            `}
          >
            <div className="absolute -top-5 left-6">
              <div className={`
                w-11 h-11 rounded-2xl border-2 border-[#1E293B] shadow-pop-sm flex items-center justify-center transition-transform duration-200 group-hover:rotate-6
                ${isFirst ? 'bg-[#8B5CF6] text-white' : 'bg-[#F472B6] text-white'}
              `}>
                <Icon className="w-5 h-5" strokeWidth={2.5} />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold font-outfit text-[#1E293B]">
                {card.title}
              </h3>
              <span className={`
                px-2.5 py-0.5 text-[10px] font-extrabold uppercase font-outfit border-2 border-[#1E293B] shadow-pop-sm rounded-full
                ${isFirst ? 'bg-[#FBBF24] text-[#1E293B]' : 'bg-[#34D399] text-[#1E293B]'}
              `}>
                {card.badge}
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <span className={`
                text-5xl sm:text-6xl font-black font-outfit tracking-tight leading-none
                ${isFirst ? 'text-[#8B5CF6]' : 'text-[#F472B6]'}
              `}>
                {card.count}
              </span>
              <span className="text-sm font-extrabold font-outfit text-[#64748B]">
                {card.unit}
              </span>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-[#E2E8F0] flex items-center justify-between text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 text-[#1E293B]">
                <CheckCircle className={`w-4 h-4 ${isFirst ? 'text-[#8B5CF6]' : 'text-[#F472B6]'}`} strokeWidth={2.5} />
                {card.subInfo}
              </span>

              <span className="flex items-center gap-0.5 text-[#64748B] group-hover:text-[#1E293B] transition-colors cursor-pointer font-extrabold font-outfit">
                <span>Rincian</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
