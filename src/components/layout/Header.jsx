import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  User, 
  HelpCircle, 
  LogOut, 
  Bell, 
  PanelLeftClose, 
  PanelLeft, 
  Palette, 
  Check,
  Sparkles,
  MoreVertical 
} from 'lucide-react';
import { currentUser as defaultUser } from '../../data/mockData';

export default function Header({ 
  theme = 'original',
  setTheme,
  sidebarOpen, 
  setSidebarOpen, 
  sidebarCollapsed, 
  setSidebarCollapsed,
  unreadNotificationCount = 5,
  onOpenNotifications,
  currentUser = defaultUser,
  onLogout,
  justLoggedIn = false
}) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const themeDropdownRef = useRef(null);

  const [hasInteractedTheme, setHasInteractedTheme] = useState(() => {
    return localStorage.getItem('civitas-theme-interacted') === 'true';
  });
  const [isPeeking, setIsPeeking] = useState(false);
  const [showPeek, setShowPeek] = useState(false);

  useEffect(() => {
    const wasJustLoggedIn = justLoggedIn || sessionStorage.getItem('civitas-just-logged-in') === 'true';

    if (wasJustLoggedIn) {
      sessionStorage.removeItem('civitas-just-logged-in');
      const enterTimer = setTimeout(() => {
        setIsPeeking(true);
        setShowPeek(true);
      }, 350);

      const hideTimer = setTimeout(() => {
        setIsPeeking(false);
        setShowPeek(false);
      }, 3350); // Munculkan 3 detik setelah masuk dashboard

      return () => {
        clearTimeout(enterTimer);
        clearTimeout(hideTimer);
      };
    } else if (!hasInteractedTheme) {
      const enterTimer = setTimeout(() => {
        setIsPeeking(true);
        setShowPeek(true);
      }, 700);

      const hideTimer = setTimeout(() => {
        setIsPeeking(false);
        setShowPeek(false);
      }, 3700);

      return () => {
        clearTimeout(enterTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [justLoggedIn, hasInteractedTheme]);

  const dismissPeek = () => {
    setIsPeeking(false);
    setShowPeek(false);
    if (!hasInteractedTheme) {
      setHasInteractedTheme(true);
      localStorage.setItem('civitas-theme-interacted', 'true');
    }
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

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target)) {
        setThemeDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-30 w-full transition-all duration-200
      ${isClay
        ? 'bg-[#F4F1FA]/85 backdrop-blur-xl border-b border-white/60 shadow-clay-card font-dmsans text-[#332F3A]'
        : isNeu
          ? 'bg-[#E0E5EC] neu-flat border-none font-dmsans text-[#3D4852]'
          : isOriginal
            ? 'bg-heavy-rain border-b border-slate-300 shadow-sm font-sans'
            : 'bg-[#FFFDF5] border-b-2 border-[#1E293B] shadow-sm font-sans'}
    `}>
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        
        {/* Left: Logo & Sidebar Toggle */}
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Toggle Button */}
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`
              p-1.5 lg:hidden transition-all focus:outline-none cursor-pointer
              ${isClay
                ? 'clay-btn-secondary rounded-[16px] text-[#7C3AED]'
                : isNeu
                  ? 'neu-btn rounded-xl text-[#3D4852]'
                  : isOriginal
                    ? 'text-[#3f6ad8] hover:bg-black/5 rounded-md p-1'
                    : 'bg-white border-2 border-[#1E293B] shadow-pop-sm btn-candy rounded-xl text-[#1E293B]'}
            `}
            aria-label="Toggle mobile menu"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>

          {/* Desktop Sidebar Collapse Toggle */}
          <button
            type="button"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className={`
              hidden lg:flex p-2 transition-all focus:outline-none cursor-pointer
              ${isClay
                ? 'clay-btn-secondary rounded-[18px] text-[#7C3AED]'
                : isNeu
                  ? 'neu-btn rounded-2xl text-[#3D4852]'
                  : isOriginal
                    ? 'text-[#3f6ad8] hover:bg-black/5 rounded-md'
                    : 'bg-white border-2 border-[#1E293B] shadow-pop-sm btn-candy rounded-full text-[#1E293B]'}
            `}
            title={sidebarCollapsed ? "Perluas sidebar" : "Ciutkan sidebar"}
            aria-label="Toggle sidebar collapse"
          >
            {sidebarCollapsed ? (
              <PanelLeft className="w-4 h-4" />
            ) : (
              <PanelLeftClose className="w-4 h-4" />
            )}
          </button>

          {/* Brand Logo & Name: Only shown on desktop, hidden on mobile like web aslinya */}
          <div className="hidden lg:flex items-center gap-2.5 select-none">
            {isClay ? (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-[18px] clay-orb bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center">
                  <img 
                    src="/assets/stan_ico.ico" 
                    alt="PKN STAN" 
                    className="w-5 h-5 object-contain drop-shadow" 
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-[#332F3A] text-lg font-display tracking-tight">Civitas</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#7C3AED] to-[#DB2777] text-white px-2.5 py-0.5 rounded-full shadow-sm font-display">PKN STAN</span>
                </div>
              </div>
            ) : isNeu ? (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-2xl neu-well flex items-center justify-center">
                  <img 
                    src="/assets/stan_ico.ico" 
                    alt="PKN STAN" 
                    className="w-5 h-5 object-contain" 
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[#3D4852] text-lg font-jakarta tracking-tight">Civitas</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider neu-inset-sm text-[#6C63FF] px-2 py-0.5 rounded-full font-bold">PKN STAN</span>
                  </div>
                  <span className="text-[11px] text-[#6B7280] font-medium hidden sm:block">Portal Akademik Soft UI</span>
                </div>
              </div>
            ) : isOriginal ? (
              <div className="flex items-center gap-2">
                <img 
                  src="/assets/stan_ico.ico" 
                  alt="PKN STAN" 
                  className="w-9 h-9 object-contain" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <strong className="text-slate-800 text-lg font-bold">Civitas</strong>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-2xl bg-[#8B5CF6] border-2 border-[#1E293B] shadow-pop-sm flex items-center justify-center relative overflow-hidden group">
                  <img 
                    src="/assets/stan_ico.ico" 
                    alt="PKN STAN" 
                    className="w-6 h-6 object-contain drop-shadow" 
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FBBF24] border border-[#1E293B]"></span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[#1E293B] text-lg font-outfit tracking-tight">Civitas</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] px-2 py-0.5 rounded-full shadow-pop-sm font-outfit">PKN STAN</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium hidden sm:block">Portal Mahasiswa Ceria & Terpadu</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Theme Switcher, Notifications & Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Theme Selector Dropdown */}
          <div className="relative" ref={themeDropdownRef}>
            <button
              type="button"
              onClick={handleThemeToggle}
              className={`
                group relative flex items-center justify-center w-9 h-9 transition-all focus:outline-none cursor-pointer
                ${isPeeking ? 'animate-peek ring-2 ring-violet-500/40 shadow-md' : ''}
                ${isClay
                  ? 'clay-btn-secondary rounded-[16px] text-[#7C3AED]'
                  : isNeu
                    ? 'neu-btn rounded-xl text-[#6C63FF]'
                    : isOriginal
                      ? 'bg-white hover:bg-slate-50 text-[#3f6ad8] border border-slate-300 shadow-xs rounded-md'
                      : 'bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-pop-sm btn-candy rounded-xl'}
              `}
              title="Ganti tema tampilan"
              aria-label="Pilih tema"
            >
              {/* Pulsing indicator badge if peeking */}
              {isPeeking && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600"></span>
                </span>
              )}

              {/* Theme Palette Logo Icon */}
              <Palette className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 ${
                isClay 
                  ? 'text-[#7C3AED]' 
                  : isNeu 
                    ? 'text-[#6C63FF]' 
                    : isPlayful 
                      ? 'text-white' 
                      : 'text-[#3f6ad8]'
              }`} />
            </button>

            {/* Floating Peek Teaser Tooltip */}
            {showPeek && !themeDropdownOpen && (
              <div 
                onClick={handleThemeToggle}
                className="absolute top-full mt-2.5 right-0 z-50 animate-peek-bounce cursor-pointer"
              >
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
                <div className="px-3 py-1.5 text-[10px] font-black uppercase text-[#635F69] tracking-wider">Pilih Tampilan:</div>
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

          {/* Quick Notification Bell (shown on sm+ for original, and all for others) */}
          <button
            type="button"
            onClick={onOpenNotifications}
            className={`
              relative p-2 transition-all focus:outline-none cursor-pointer
              ${isOriginal ? 'hidden sm:flex' : 'flex'}
              ${isClay
                ? 'clay-btn-secondary rounded-[16px] text-[#332F3A]'
                : isNeu
                  ? 'neu-btn rounded-xl text-[#3D4852]'
                  : isOriginal
                    ? 'text-slate-600 hover:bg-black/5 rounded-full'
                    : 'bg-white border-2 border-[#1E293B] shadow-pop-sm btn-candy rounded-full text-[#1E293B]'}
            `}
            title="Lihat notifikasi"
          >
            <Bell className="w-5 h-5" />
            {unreadNotificationCount > 0 && (
              <span className={`
                absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center text-[10px] font-bold text-white
                ${isClay
                  ? 'bg-gradient-to-r from-[#DB2777] to-[#7C3AED] rounded-full shadow-xs'
                  : isNeu
                    ? 'bg-[#6C63FF] rounded-full shadow-sm'
                    : isOriginal
                      ? 'bg-rose-500 rounded-full ring-2 ring-white'
                      : 'bg-[#F472B6] rounded-full border-2 border-[#1E293B] font-extrabold'}
              `}>
                {unreadNotificationCount}
              </span>
            )}
          </button>

          {/* User Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className={`
                flex items-center transition-all focus:outline-none cursor-pointer
                ${isClay
                  ? 'clay-btn-secondary rounded-[16px] p-1 md:pl-1.5 md:pr-3 md:py-1 text-[#332F3A] gap-2.5'
                  : isNeu
                    ? 'neu-btn rounded-xl p-1 md:pl-1.5 md:pr-3 md:py-1 text-[#3D4852] gap-2.5'
                    : isOriginal
                      ? 'hover:bg-black/5 rounded-md p-0 lg:px-2 lg:py-1 lg:gap-2'
                      : 'bg-white border-2 border-[#1E293B] shadow-pop-sm btn-candy rounded-xl md:rounded-full p-1 md:pl-1 md:pr-2.5 md:py-1 gap-2.5'}
              `}
              aria-expanded={profileDropdownOpen}
              title="Profil Pengguna"
            >
              {/* For isOriginal on mobile: render the blue 3-dots button from web aslinya! */}
              {isOriginal ? (
                <>
                  <div className="lg:hidden w-8 h-8 rounded bg-[#3f6ad8] hover:bg-[#3459b8] text-white flex items-center justify-center shadow-xs">
                    <MoreVertical className="w-4 h-4" />
                  </div>
                  <div className="hidden lg:flex items-center gap-2">
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="w-8 h-8 rounded-full border border-slate-300 object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80";
                      }}
                    />
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-800 line-clamp-1 max-w-[150px]">
                        {currentUser.name}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[150px]">
                        {currentUser.nim}
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 text-[#635F69]" />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className={`
                        w-8 h-8 object-cover
                        ${isClay
                          ? 'rounded-[12px] shadow-xs'
                          : isNeu
                            ? 'rounded-xl'
                            : 'rounded-lg border-2 border-[#1E293B]'}
                      `}
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80";
                      }}
                    />
                    {isClay && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#10B981] border-2 border-[#F4F1FA]"></span>
                    )}
                    {isNeu && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#38B2AC] border-2 border-[#E0E5EC]"></span>
                    )}
                    {isPlayful && (
                      <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#34D399] border border-[#1E293B]"></span>
                    )}
                  </div>

                  <div className="text-left hidden md:block">
                    <div className={`text-xs tracking-tight line-clamp-1 max-w-[150px] ${
                      isClay
                        ? 'font-black text-[#332F3A] font-display'
                        : isNeu 
                          ? 'font-bold text-[#3D4852]' 
                          : 'font-extrabold text-[#1E293B]'
                    }`}>
                      {currentUser.name}
                    </div>
                    <div className={`text-[11px] truncate max-w-[150px] ${
                      isClay ? 'text-[#635F69]' : isNeu ? 'text-[#6B7280]' : 'text-slate-500 font-medium'
                    }`}>
                      {currentUser.nim}
                    </div>
                  </div>

                  <ChevronDown className="w-4 h-4 transition-transform duration-200 text-[#635F69] hidden md:block" />
                </>
              )}
            </button>

            {/* Dropdown Menu Popup */}
            {profileDropdownOpen && (
              <div className={`
                absolute right-0 mt-2 w-64 origin-top-right p-2 z-50 animate-in fade-in duration-150 shadow-2xl
                ${isClay
                  ? '!bg-[#F4F1FA] rounded-[24px] border-2 border-white shadow-2xl text-[#332F3A]'
                  : isNeu
                    ? 'bg-[#E0E5EC] neu-flat rounded-2xl font-dmsans text-[#3D4852]'
                    : isOriginal
                      ? 'bg-white rounded-xl shadow-xl border border-slate-200/80 font-sans'
                      : 'bg-[#FFFDF5] rounded-2xl border-2 border-[#1E293B] shadow-pop-lg font-jakarta'}
              `}>
                <div className={`
                  px-3 py-2.5 mb-2
                  ${isClay
                    ? 'bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] text-white rounded-[18px] shadow-sm'
                    : isNeu
                      ? 'neu-inset-sm rounded-xl text-[#3D4852]'
                      : isOriginal
                        ? 'bg-slate-50 rounded-lg border-b border-slate-100'
                        : 'bg-[#8B5CF6] text-white rounded-xl border-2 border-[#1E293B] shadow-pop-sm'}
                `}>
                  <p className="text-xs font-black uppercase leading-snug font-display">{currentUser.name}</p>
                  <p className="text-[11px] font-medium mt-0.5 opacity-90">NIM: {currentUser.nim}</p>
                </div>

                <div className="space-y-1">
                  {/* Notification item for mobile */}
                  <button
                    type="button"
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      if (onOpenNotifications) onOpenNotifications();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold rounded-xl hover:bg-black/5 transition-colors sm:hidden text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Bell className="w-4 h-4 text-amber-500" />
                      <span>Notifikasi</span>
                    </div>
                    {unreadNotificationCount > 0 && (
                      <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {unreadNotificationCount}
                      </span>
                    )}
                  </button>

                  <a
                    href="#profil"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-xl hover:bg-black/5 transition-colors"
                  >
                    <User className={`w-4 h-4 ${isOriginal ? 'text-[#3f6ad8]' : 'text-[#7C3AED]'}`} />
                    <span>User Account</span>
                  </a>

                  <a
                    href="#bantuan"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-xl hover:bg-black/5 transition-colors"
                  >
                    <HelpCircle className={`w-4 h-4 ${isOriginal ? 'text-[#3f6ad8]' : 'text-[#7C3AED]'}`} />
                    <span>Info & Bantuan</span>
                  </a>

                  <div className="h-px bg-black/10 my-1"></div>

                  <a
                    href="#logout"
                    onClick={(e) => {
                      e.preventDefault();
                      setProfileDropdownOpen(false);
                      if (onLogout) {
                        onLogout();
                      } else {
                        alert('Aksi Logout: Sesi berhasil ditutup.');
                      }
                    }}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-500/10 rounded-xl transition-all"
                  >
                    <LogOut className="w-4 h-4 text-rose-500" />
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
}
