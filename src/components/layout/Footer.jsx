import React from 'react';

export default function Footer({ theme = 'original' }) {
  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isPlayful = theme === 'playful';
  const isNeu = theme === 'neumorphic';

  if (isOriginal) {
    return (
      <footer className="mt-12 py-4 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            <strong className="text-blue-900 font-bold">
              Politeknik Keuangan Negara STAN
            </strong>
          </div>

          <div className="text-orange-500 font-medium">
            <span>&copy; Redesign by </span>
            <strong className="font-bold text-orange-600">Erlangga</strong>
          </div>
        </div>
      </footer>
    );
  }

  if (isClay) {
    return (
      <footer className="mt-12 py-6 px-4 sm:px-6 lg:px-8 bg-[#F4F1FA] border-t border-white/80 font-dmsans text-[#332F3A]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-[12px] clay-orb bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>

            <span className="font-black font-display text-[#332F3A]">
              Politeknik Keuangan Negara STAN
            </span>
            <span className="hidden md:inline text-[#635F69]">•</span>
            <span className="hidden md:inline font-bold text-[#635F69]">
              Kementerian Keuangan RI
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-[#635F69]">
            <span>&copy; Redesign by</span>
            <span className="font-black font-display text-[#7C3AED]">
              Erlangga
            </span>
          </div>
        </div>
      </footer>
    );
  }

  if (isNeu) {
    return (
      <footer className="mt-12 py-6 px-4 sm:px-6 lg:px-8 bg-[#E0E5EC] neu-flat border-none font-dmsans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-xl neu-sm flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#6C63FF]"></span>
            </div>

            <span className="font-bold font-jakarta text-[#3D4852]">
              Politeknik Keuangan Negara STAN
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline font-medium">
              Kementerian Keuangan RI
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-medium">
            <span>&copy; Redesign by</span>
            <span className="font-bold font-jakarta text-[#6C63FF]">
              Erlangga
            </span>
          </div>
        </div>
      </footer>
    );
  }

  // Playful Geometric Style
  return (
    <footer className="mt-12 py-6 px-4 sm:px-6 lg:px-8 bg-[#FFFDF5] border-t-2 border-[#1E293B] font-jakarta">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#8B5CF6] border-2 border-[#1E293B] shadow-pop-sm flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#FBBF24]"></span>
          </div>

          <span className="font-extrabold font-outfit text-[#1E293B]">
            Politeknik Keuangan Negara STAN
          </span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline text-[#64748B] font-semibold">
            Kementerian Keuangan RI
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[#64748B] font-bold">
          <span>&copy; Redesign by</span>
          <span className="font-extrabold font-outfit text-[#8B5CF6]">
            Erlangga
          </span>
        </div>
      </div>
    </footer>
  );
}
