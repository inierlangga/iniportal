import React, { useState, useRef, useEffect } from 'react';
import { Palette, ChevronDown, Check, User, Hash, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

const prodiOptions = [
  { value: 'D-IV Manajemen Keuangan Negara', label: 'Manajemen Keuangan Negara' },
  { value: 'D-IV Akuntansi Sektor Publik', label: 'Akuntansi Sektor Publik' },
  { value: 'D-IV Manajemen Aset Publik', label: 'Manajemen Aset Publik' },
];

export default function LoginPage({ theme = 'original', setTheme, onLogin }) {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  const [prodi, setProdi] = useState('');
  
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [prodiDropdownOpen, setProdiDropdownOpen] = useState(false);

  const themeDropdownRef = useRef(null);
  const prodiDropdownRef = useRef(null);

  const [hasInteractedTheme, setHasInteractedTheme] = useState(false);
  const [peekMounted, setPeekMounted] = useState(false);
  const [peekVisible, setPeekVisible] = useState(false);

  useEffect(() => {
    if (!hasInteractedTheme) {
      const mountTimer = setTimeout(() => {
        setPeekMounted(true);
        setTimeout(() => setPeekVisible(true), 50);
      }, 700);
      return () => clearTimeout(mountTimer);
    }
  }, [hasInteractedTheme]);

  const dismissPeek = () => {
    setPeekVisible(false);
    setTimeout(() => setPeekMounted(false), 500);
    setHasInteractedTheme(true);
  };

  const handleThemeToggle = () => {
    setThemeDropdownOpen((prev) => !prev);
    dismissPeek();
  };

  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isNeu = theme === 'neumorphic';
  const isPlayful = theme === 'playful';

  const themeOptions = [
    { id: 'original', label: 'Original (Klasik)', color: 'bg-cyan-500' },
    { id: 'claymorphism', label: 'Claymorphism (Digital Clay)', color: 'bg-gradient-to-br from-[#A78BFA] to-[#7C3AED]' },
    { id: 'neumorphic', label: 'Neumorphism (Soft UI)', color: 'bg-[#6C63FF]' },
    { id: 'playful', label: 'Playful Geometric', color: 'bg-violet-500' },
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target)) {
        setThemeDropdownOpen(false);
      }
      if (prodiDropdownRef.current && !prodiDropdownRef.current.contains(event.target)) {
        setProdiDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Mohon masukkan Nama Lengkap.');
      return;
    }
    if (!nim.trim()) {
      alert('Mohon masukkan NIM.');
      return;
    }
    if (!prodi) {
      alert('Mohon pilih Program Studi.');
      return;
    }

    onLogin({
      name: name.trim(),
      nim: nim.trim(),
      studyProgram: prodi,
    });
  };

  const selectedProdiObj = prodiOptions.find((p) => p.value === prodi);

  return (
    <div className={`
      min-h-screen w-full flex flex-col justify-center items-center px-4 py-8 relative overflow-x-hidden transition-colors duration-300
      ${isClay
        ? 'theme-claymorphism bg-[#F4F1FA] text-[#332F3A]'
        : isNeu
          ? 'theme-neumorphic bg-[#E0E5EC] text-[#3D4852]'
          : isOriginal
            ? 'theme-original bg-[#f1f4f6] text-[#495057]'
            : 'theme-playful bg-[#FFFDF5] text-[#1E293B]'}
    `}>
      {/* Ambient Blobs for Claymorphism */}
      {isClay && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
          <div className="absolute -top-[10%] -left-[10%] h-[55vh] w-[55vh] rounded-full bg-[#7C3AED]/12 blur-3xl animate-clay-float"></div>
          <div className="absolute top-[25%] -right-[10%] h-[60vh] w-[60vh] rounded-full bg-[#DB2777]/10 blur-3xl animate-clay-float-delayed"></div>
          <div className="absolute -bottom-[10%] left-[20%] h-[50vh] w-[50vh] rounded-full bg-[#0EA5E9]/10 blur-3xl animate-clay-float"></div>
        </div>
      )}

      {/* Floating Theme Selector on Top Right */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30" ref={themeDropdownRef}>
        <button
          type="button"
          onClick={handleThemeToggle}
          className={`
            group relative flex items-center justify-center w-10 h-10 transition-all duration-300 focus:outline-none cursor-pointer
            ${peekVisible ? 'animate-peek ring-2 ring-violet-500/40 shadow-md' : ''}
            ${isClay
              ? 'clay-btn-secondary rounded-[16px] text-[#7C3AED]'
              : isNeu
                ? 'neu-btn rounded-xl text-[#6C63FF]'
                : isOriginal
                  ? 'bg-white text-[#3f6ad8] border border-slate-300 shadow-sm rounded-md hover:bg-slate-50'
                  : 'bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-pop-sm btn-candy rounded-xl'}
          `}
          title="Ganti tema tampilan"
          aria-label="Pilih tema"
        >
          {/* Pulsing indicator badge with smooth fade */}
          <span className={`
            absolute -top-1 -right-1 flex h-2.5 w-2.5 transition-opacity duration-500 pointer-events-none
            ${peekVisible ? 'opacity-100' : 'opacity-0'}
          `}>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600"></span>
          </span>

          <Palette className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 ${
            isClay ? 'text-[#7C3AED]' : isNeu ? 'text-[#6C63FF]' : isPlayful ? 'text-white' : 'text-[#3f6ad8]'
          }`} />
        </button>

        {/* Floating Peek Teaser Tooltip with Smooth Transition */}
        {peekMounted && !themeDropdownOpen && (
          <div 
            onClick={handleThemeToggle}
            className={`
              absolute top-full mt-2.5 right-0 z-50 cursor-pointer
              transition-all duration-500 ease-out transform
              ${peekVisible 
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}
            `}
          >
            <div className="animate-peek-bounce">
              <div className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-2xl shadow-xl text-xs font-extrabold whitespace-nowrap transition-transform hover:scale-105 select-none
                ${isClay
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#DB2777] text-white border border-white/60 shadow-clay-card font-display'
                  : isNeu
                    ? 'bg-[#6C63FF] text-white neu-flat font-jakarta'
                    : isOriginal
                      ? 'bg-blue-600 text-white shadow-lg font-sans'
                      : 'bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm font-outfit'}
              `}>
                <Sparkles className="w-3.5 h-3.5 animate-spin text-yellow-300" style={{ animationDuration: '3s' }} />
                <span>Coba ganti 4 tema di sini!</span>
                {/* Arrow pointing up */}
                <div className={`
                  absolute -top-1 right-3.5 w-2.5 h-2.5 rotate-45
                  ${isClay
                    ? 'bg-[#7C3AED]'
                    : isNeu
                      ? 'bg-[#6C63FF]'
                      : isOriginal
                        ? 'bg-blue-600'
                        : 'bg-[#FBBF24] border-t-2 border-l-2 border-[#1E293B]'}
                `}></div>
              </div>
            </div>
          </div>
        )}

        {themeDropdownOpen && (
          <div className={`
            absolute right-0 mt-2 w-64 p-2 z-50 animate-in fade-in duration-100 shadow-2xl
            ${isClay
              ? '!bg-[#F4F1FA] rounded-[24px] border-2 border-white shadow-2xl text-[#332F3A]'
              : isNeu
                ? 'bg-[#E0E5EC] neu-flat rounded-2xl font-dmsans text-[#3D4852]'
                : isOriginal
                  ? 'bg-white rounded-xl border border-slate-200 ring-1 ring-black/5 font-sans shadow-xl'
                  : 'bg-[#FFFDF5] rounded-2xl border-2 border-[#1E293B] shadow-pop-md font-jakarta'}
          `}>
            <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider opacity-60">Pilih Tampilan:</div>
            {themeOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setTheme(opt.id);
                  setThemeDropdownOpen(false);
                  dismissPeek();
                }}
                className={`
                  w-full flex items-center justify-between px-3 py-2 text-xs font-bold transition-all text-left mb-1
                  ${theme === opt.id 
                    ? (isClay
                        ? 'clay-btn-primary text-white rounded-[16px] font-black'
                        : isNeu 
                          ? 'neu-inset-sm text-[#6C63FF] rounded-xl font-extrabold'
                          : isOriginal
                            ? 'bg-blue-50 text-blue-700 rounded-lg'
                            : 'bg-[#F472B6] text-white border-2 border-[#1E293B] rounded-xl shadow-pop-sm')
                    : (isClay
                        ? 'hover:bg-white/60 rounded-[16px] text-[#332F3A]'
                        : isNeu
                          ? 'hover:bg-black/5 rounded-xl text-[#3D4852]'
                          : 'hover:bg-slate-100 text-slate-700 rounded-xl')}
                `}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-3.5 h-3.5 rounded-full border border-black/10 ${opt.color} shadow-2xs`}></span>
                  <span className={isClay && theme === opt.id ? 'font-display font-bold' : ''}>{opt.label}</span>
                </div>
                {theme === opt.id && <Check className="w-4 h-4 text-current" />}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Login Card Container */}
      <div className={`
        relative z-10 w-full max-w-md my-auto animate-in zoom-in-95 duration-200
        ${isClay
          ? 'clay-card rounded-[40px] bg-white/80 p-8 sm:p-10 border border-white/80 text-[#332F3A]'
          : isNeu
            ? 'neu-flat rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 text-[#3D4852]'
            : isOriginal
              ? 'bg-white rounded-xl shadow-md border border-slate-200 p-8 text-slate-800'
              : 'bg-white border-2 border-[#1E293B] shadow-pop-pink rounded-3xl p-8 sm:p-10 card-sticker text-[#1E293B]'}
      `}>
        {/* Brand & Campus Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="flex justify-center">
            {isClay ? (
              <div className="w-16 h-16 rounded-[24px] clay-orb bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center shadow-clay-card">
                <img src="/assets/stan_ico.ico" alt="PKN STAN" className="w-8 h-8 object-contain drop-shadow" />
              </div>
            ) : isNeu ? (
              <div className="w-16 h-16 rounded-3xl neu-well flex items-center justify-center">
                <img src="/assets/stan_ico.ico" alt="PKN STAN" className="w-8 h-8 object-contain" />
              </div>
            ) : isOriginal ? (
              <div className="w-14 h-14 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <img src="/assets/stan_ico.ico" alt="PKN STAN" className="w-9 h-9 object-contain" />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6] border-2 border-[#1E293B] shadow-pop-sm flex items-center justify-center relative">
                <img src="/assets/stan_ico.ico" alt="PKN STAN" className="w-8 h-8 object-contain drop-shadow" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FBBF24] border border-[#1E293B]"></span>
              </div>
            )}
          </div>

          <div>
            <h1 className={`
              text-2xl sm:text-3xl font-black tracking-tight
              ${isClay ? 'font-display text-[#332F3A]' : isNeu ? 'font-jakarta text-[#3D4852]' : isOriginal ? 'text-[#004085]' : 'font-outfit text-[#1E293B]'}
            `}>
              Civitas PKN STAN
            </h1>
            <p className={`
              text-xs sm:text-sm mt-1
              ${isClay ? 'text-[#635F69] font-medium' : isNeu ? 'text-[#6B7280]' : isOriginal ? 'text-slate-500' : 'text-[#64748B] font-semibold'}
            `}>
              Portal Akademik & Kemahasiswaan Terpadu
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Field 1: Nama */}
          <div className="space-y-1.5">
            <label className={`
              block text-xs font-bold uppercase tracking-wider
              ${isClay ? 'font-display text-[#332F3A]' : isNeu ? 'font-jakarta text-[#3D4852]' : isOriginal ? 'text-slate-700' : 'font-outfit text-[#1E293B]'}
            `}>
              Nama Lengkap
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none opacity-60">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan Nama Lengkap"
                className={`
                  w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm font-semibold transition-all focus:outline-none placeholder:text-gray-400
                  ${isClay
                    ? 'clay-pressed rounded-[20px] bg-[#EFEBF5] text-[#332F3A] focus:ring-2 focus:ring-[#7C3AED]/40'
                    : isNeu
                      ? 'neu-inset-sm rounded-2xl bg-[#E0E5EC] text-[#3D4852] focus:ring-2 focus:ring-[#6C63FF]/30'
                      : isOriginal
                        ? 'rounded-md border border-slate-300 bg-white text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        : 'rounded-xl border-2 border-[#1E293B] bg-white text-[#1E293B] shadow-pop-sm focus:bg-[#FFFDF5]'}
                `}
              />
            </div>
          </div>

          {/* Field 2: NIM */}
          <div className="space-y-1.5">
            <label className={`
              block text-xs font-bold uppercase tracking-wider
              ${isClay ? 'font-display text-[#332F3A]' : isNeu ? 'font-jakarta text-[#3D4852]' : isOriginal ? 'text-slate-700' : 'font-outfit text-[#1E293B]'}
            `}>
              NIM (Nomor Induk Mahasiswa)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none opacity-60">
                <Hash className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Masukkan NIM"
                className={`
                  w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm font-semibold transition-all focus:outline-none placeholder:text-gray-400
                  ${isClay
                    ? 'clay-pressed rounded-[20px] bg-[#EFEBF5] text-[#332F3A] focus:ring-2 focus:ring-[#7C3AED]/40'
                    : isNeu
                      ? 'neu-inset-sm rounded-2xl bg-[#E0E5EC] text-[#3D4852] focus:ring-2 focus:ring-[#6C63FF]/30'
                      : isOriginal
                        ? 'rounded-md border border-slate-300 bg-white text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        : 'rounded-xl border-2 border-[#1E293B] bg-white text-[#1E293B] shadow-pop-sm focus:bg-[#FFFDF5]'}
                `}
              />
            </div>
          </div>

          {/* Field 3: Custom Prodi Dropdown */}
          <div className="space-y-1.5 relative" ref={prodiDropdownRef}>
            <label className={`
              block text-xs font-bold uppercase tracking-wider
              ${isClay ? 'font-display text-[#332F3A]' : isNeu ? 'font-jakarta text-[#3D4852]' : isOriginal ? 'text-slate-700' : 'font-outfit text-[#1E293B]'}
            `}>
              Program Studi
            </label>
            
            {/* Custom Dropdown Trigger Button */}
            <button
              type="button"
              onClick={() => setProdiDropdownOpen(!prodiDropdownOpen)}
              className={`
                w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm font-semibold transition-all flex items-center justify-between text-left focus:outline-none relative
                ${isClay
                  ? 'clay-pressed rounded-[20px] bg-[#EFEBF5] text-[#332F3A] focus:ring-2 focus:ring-[#7C3AED]/40'
                  : isNeu
                    ? 'neu-inset-sm rounded-2xl bg-[#E0E5EC] text-[#3D4852] focus:ring-2 focus:ring-[#6C63FF]/30'
                    : isOriginal
                      ? 'rounded-md border border-slate-300 bg-white text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      : 'rounded-xl border-2 border-[#1E293B] bg-white text-[#1E293B] shadow-pop-sm focus:bg-[#FFFDF5]'}
              `}
            >
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none opacity-60">
                <GraduationCap className="w-4 h-4" />
              </div>
              
              <span className={prodi ? 'font-semibold truncate' : 'text-gray-400 font-normal truncate'}>
                {selectedProdiObj ? selectedProdiObj.label : 'Pilih Program Studi'}
              </span>

              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform duration-200 shrink-0 ml-2 ${prodiDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Custom Dropdown Options Menu */}
            {prodiDropdownOpen && (
              <div className={`
                absolute left-0 right-0 mt-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 shadow-2xl
                ${isClay
                  ? 'clay-card rounded-[24px] bg-[#F4F1FA]/95 backdrop-blur-md border border-white/80 p-2 text-[#332F3A] space-y-1'
                  : isNeu
                    ? 'neu-flat rounded-2xl bg-[#E0E5EC] p-2 text-[#3D4852] space-y-1'
                    : isOriginal
                      ? 'rounded-md bg-white border border-slate-200 p-1 text-slate-800 space-y-0.5'
                      : 'rounded-2xl bg-[#FFFDF5] border-2 border-[#1E293B] shadow-pop-md p-1.5 text-[#1E293B] space-y-1'}
              `}>
                {prodiOptions.map((opt) => {
                  const isSelected = prodi === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setProdi(opt.value);
                        setProdiDropdownOpen(false);
                      }}
                      className={`
                        w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold transition-all text-left
                        ${isClay
                          ? isSelected
                            ? 'bg-gradient-to-r from-[#7C3AED] to-[#DB2777] text-white rounded-[16px] shadow-xs font-display'
                            : 'hover:bg-white/70 rounded-[16px] text-[#332F3A]'
                          : isNeu
                            ? isSelected
                              ? 'neu-inset-sm text-[#6C63FF] rounded-xl font-extrabold'
                              : 'hover:bg-black/5 rounded-xl text-[#3D4852]'
                            : isOriginal
                              ? isSelected
                                ? 'bg-blue-600 text-white rounded-md font-bold'
                                : 'hover:bg-blue-50 hover:text-blue-700 rounded-md text-slate-700'
                              : isSelected
                                ? 'bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] rounded-xl shadow-pop-sm font-extrabold'
                                : 'hover:bg-[#8B5CF6]/15 rounded-xl border-2 border-transparent text-[#1E293B]'}
                      `}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? (isPlayful ? 'bg-[#1E293B]' : isClay ? 'bg-white' : isNeu ? 'bg-[#6C63FF]' : 'bg-white') : 'bg-transparent'}`}></span>
                        <span className="truncate">{opt.label}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className={`
                w-full py-3 px-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-black transition-all focus:outline-none
                ${isClay
                  ? 'clay-btn-primary rounded-[22px] text-white font-display active:scale-[0.95]'
                  : isNeu
                    ? 'neu-accent-btn rounded-2xl text-white font-jakarta'
                    : isOriginal
                      ? 'bg-[#3f6ad8] hover:bg-[#3459b8] text-white rounded-md shadow-sm active:scale-[0.99]'
                      : 'bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-2 border-[#1E293B] shadow-pop-sm btn-candy rounded-2xl font-outfit'}
              `}
            >
              <span>Masuk ke Portal Civitas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
