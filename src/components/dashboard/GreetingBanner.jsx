import React from 'react';
import { Sparkles, Calendar, LineChart } from 'lucide-react';
import { currentUser as defaultUser } from '../../data/mockData';

export default function GreetingBanner({ theme = 'original', currentUser = defaultUser }) {
  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isPlayful = theme === 'playful';
  const isNeu = theme === 'neumorphic';

  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  if (isOriginal) {
    return (
      <div className="space-y-4 font-sans">
        <div className="bg-white p-4 rounded-md shadow-sm border border-slate-200/60 flex items-center gap-4">
          <div className="w-12 h-12 rounded bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
            <LineChart className="w-6 h-6 text-[#d57eeb]" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-normal text-slate-800">
              Dashboard Mahasiswa
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              {currentUser.semester} Tahun Akademik {currentUser.academicYear}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm sm:text-base font-bold text-[#16AAFF] tracking-wide uppercase">
            Selamat datang {currentUser.name} - {currentUser.nim}
          </h2>
        </div>
      </div>
    );
  }

  if (isClay) {
    return (
      <div className="space-y-5 font-dmsans text-[#332F3A]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-black text-[#332F3A] font-display tracking-tight">
                Dashboard Mahasiswa
              </h1>
              <span className="bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1 rounded-full text-xs font-black font-display flex items-center gap-1.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                {currentUser.status}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#635F69] font-medium mt-1">
              {currentUser.semester} • Tahun Akademik {currentUser.academicYear}
            </p>
          </div>

          <div className="clay-btn-secondary px-4 py-2 rounded-[20px] text-xs font-bold text-[#332F3A] flex items-center gap-2 self-start sm:self-auto">
            <Calendar className="w-4 h-4 text-[#7C3AED]" />
            <span>{today}</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[40px] clay-card p-7 sm:p-9 bg-white/80">
          {/* Ambient Clay Glow Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br from-[#A78BFA]/30 to-[#7C3AED]/20 blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-20 w-44 h-44 rounded-full bg-gradient-to-br from-[#DB2777]/20 to-[#F59E0B]/20 blur-xl pointer-events-none hidden sm:block"></div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#332F3A] font-display tracking-tight leading-snug">
                Selamat Datang Kembali, <br />
                <span className="text-[#7C3AED]">{currentUser.name}</span>
              </h2>
              
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-bold text-[#332F3A]">
                <span className="clay-btn-secondary px-3.5 py-1.5 rounded-[16px]">
                  NIM: <strong className="text-[#7C3AED]">{currentUser.nim}</strong>
                </span>
                <span className="clay-btn-secondary px-3.5 py-1.5 rounded-[16px]">
                  {currentUser.studyProgram}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isNeu) {
    return (
      <div className="space-y-5 font-dmsans text-[#3D4852]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#3D4852] font-jakarta tracking-tight">
                Dashboard Mahasiswa
              </h1>
              <span className="neu-inset-sm px-3 py-1 rounded-full text-xs font-bold text-[#38B2AC] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38B2AC] shadow-xs"></span>
                {currentUser.status}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6B7280] font-medium mt-1">
              {currentUser.semester} • Tahun Akademik {currentUser.academicYear}
            </p>
          </div>

          <div className="neu-btn px-4 py-2 rounded-2xl text-xs font-medium text-[#3D4852] flex items-center gap-2 self-start sm:self-auto">
            <Calendar className="w-4 h-4 text-[#6C63FF]" />
            <span>{today}</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] neu-flat p-7 sm:p-9 bg-[#E0E5EC]">
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full neu-well opacity-40 pointer-events-none"></div>
          <div className="absolute -top-4 -right-4 w-48 h-48 rounded-full neu-flat opacity-50 pointer-events-none"></div>
          <div className="absolute top-12 right-12 w-28 h-28 rounded-full neu-well opacity-30 pointer-events-none hidden sm:block"></div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-inset-sm text-xs font-bold text-[#6C63FF] font-jakarta">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Portal Akademik Terpadu</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#3D4852] font-jakarta tracking-tight leading-snug">
                Selamat Datang Kembali, <br />
                <span className="text-[#6C63FF] font-black">{currentUser.name}</span>
              </h2>
              
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-medium text-[#3D4852]">
                <span className="neu-inset-sm px-3.5 py-1.5 rounded-xl">
                  NIM: <strong className="text-[#3D4852]">{currentUser.nim}</strong>
                </span>
                <span className="neu-inset-sm px-3.5 py-1.5 rounded-xl">
                  {currentUser.studyProgram}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Playful Geometric Style
  return (
    <div className="space-y-4 font-jakarta">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] font-outfit tracking-tight">
              Dashboard Mahasiswa
            </h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold font-outfit bg-[#34D399] text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm">
              <span className="w-2 h-2 rounded-full bg-[#1E293B]"></span>
              {currentUser.status}
            </span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#64748B] mt-0.5">
            {currentUser.semester} • Tahun Akademik {currentUser.academicYear}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 text-xs font-bold bg-white text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm rounded-full">
          <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>{today}</span>
        </div>
      </div>

      <div className="relative overflow-hidden bg-white border-2 border-[#1E293B] shadow-pop-pink rounded-3xl p-6 sm:p-8 card-sticker">
        <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-[#FBBF24]/30 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-blob bg-[#34D399]/20 pointer-events-none"></div>
        <div className="bg-dot-pattern absolute inset-0 opacity-40 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-pop-sm text-xs font-extrabold font-outfit">
              <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>Halo Civitas!</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1E293B] font-outfit tracking-tight leading-snug">
              Selamat Datang Kembali, <br />
              <span className="text-[#8B5CF6] underline decoration-wavy decoration-[#F472B6]">
                {currentUser.name}
              </span>
            </h2>
            
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-bold text-[#1E293B]">
              <span className="bg-[#FFFDF5] px-3 py-1 rounded-xl border-2 border-[#1E293B] shadow-pop-sm">
                NIM: {currentUser.nim}
              </span>
              <span className="bg-[#FFFDF5] px-3 py-1 rounded-xl border-2 border-[#1E293B] shadow-pop-sm">
                {currentUser.studyProgram}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
