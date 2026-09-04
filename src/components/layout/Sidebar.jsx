import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  UserCircle2,
  BookMarked,
  Award,
  CalendarDays,
  Users2,
  FileBadge2,
  Sparkles,
  CheckSquare,
  HelpCircle,
  ChevronDown,
  Circle,
  X
} from 'lucide-react';
import { sidebarMenu } from '../../data/mockData';

const iconMap = {
  LayoutDashboard,
  UserCircle2,
  BookMarked,
  Award,
  CalendarDays,
  Users2,
  FileBadge2,
  Sparkles,
  CheckSquare,
  HelpCircle,
};

const playfulColors = [
  'bg-[#8B5CF6] text-white',
  'bg-[#F472B6] text-white',
  'bg-[#FBBF24] text-[#1E293B]',
  'bg-[#34D399] text-[#1E293B]',
];

const clayOrbGradients = [
  'from-violet-400 to-purple-600',
  'from-pink-400 to-rose-600',
  'from-sky-400 to-blue-600',
  'from-emerald-400 to-teal-600',
  'from-amber-400 to-orange-500',
];

export default function Sidebar({
  theme = 'original',
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  activeItem = 'beranda',
  setActiveItem
}) {
  const [openSubmenus, setOpenSubmenus] = useState({
    kuliah: activeItem === 'jadwal_mingguan' || activeItem === 'krs',
    bimbingan: false,
    skpm: false,
    skpm_v2: false,
    layanan_umum: false,
  });

  useEffect(() => {
    if (activeItem === 'jadwal_mingguan' || activeItem === 'krs') {
      setOpenSubmenus((prev) => ({ ...prev, kuliah: true }));
    } else if (activeItem === 'beranda') {
      setOpenSubmenus({
        kuliah: false,
        bimbingan: false,
        skpm: false,
        skpm_v2: false,
        layanan_umum: false,
      });
    }
  }, [activeItem]);

  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isPlayful = theme === 'playful';
  const isNeu = theme === 'neumorphic';

  const toggleSubmenu = (itemId) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300 bg-slate-900/40 backdrop-blur-xs"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed top-0 lg:top-16 bottom-0 left-0 z-50 lg:z-20
          flex flex-col h-full lg:h-[calc(100vh-4rem)]
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-72'}
          w-72
          ${isClay
            ? 'bg-[#F4F1FA]/85 backdrop-blur-xl border-r border-white/60 shadow-clay-card font-dmsans text-[#332F3A]'
            : isNeu
              ? 'bg-[#E0E5EC] neu-flat border-none font-dmsans text-[#3D4852]'
              : isOriginal
                ? 'bg-happy-fisher font-sans shadow-md border-r border-cyan-400/30'
                : 'bg-[#FFFDF5] border-r-2 border-[#1E293B] font-jakarta shadow-pop-sm lg:shadow-none'}
        `}
      >
        {/* Mobile Header in Drawer */}
        <div className={`
          h-16 flex items-center justify-between px-4 lg:hidden
          ${isClay
            ? 'border-b border-white/60 bg-[#F4F1FA]'
            : isNeu
              ? 'border-b border-black/5 bg-[#E0E5EC]'
              : isOriginal
                ? 'bg-white/40 border-b border-white/20 text-[#004085]'
                : 'border-b-2 border-[#1E293B] bg-[#FFFDF5]'}
        `}>
          <div className="flex items-center gap-2.5">
            <img src="/assets/stan_ico.ico" alt="PKN STAN" className="w-7 h-7 object-contain" />
            <span className={`font-bold text-base ${isClay ? 'font-display text-[#332F3A]' : isNeu ? 'font-jakarta text-[#3D4852]' : 'text-slate-800 font-outfit'}`}>
              Civitas PKN STAN
            </span>
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className={`p-1.5 ${isClay ? 'clay-btn-secondary rounded-xl text-[#332F3A]' : isNeu ? 'neu-btn rounded-xl text-[#3D4852]' : 'rounded-full border border-black hover:bg-black/5'}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-4">
          {sidebarMenu.map((group, groupIdx) => (
            <div key={group.section} className="space-y-1">
              {/* Section Heading */}
              {!sidebarCollapsed ? (
                <div className={`
                  px-3 pb-1 uppercase select-none
                  ${isClay
                    ? 'text-[11px] font-black tracking-wider text-[#635F69] font-display flex items-center gap-1.5'
                    : isNeu
                      ? 'text-[11px] font-extrabold tracking-wider text-[#6B7280] font-jakarta'
                      : isOriginal
                        ? 'text-xs font-extrabold tracking-wider text-[#0284c7] pt-1'
                        : 'text-[11px] font-extrabold tracking-wider text-[#64748B] font-outfit flex items-center gap-1.5'}
                `}>
                  {isClay && (
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#DB2777]"></span>
                  )}
                  {isPlayful && (
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                  )}
                  <span>{group.section}</span>
                </div>
              ) : (
                <div className="my-2 mx-2 h-px bg-black/5"></div>
              )}

              {/* Items List */}
              <div className="space-y-1">
                {group.items.map((item, itemIdx) => {
                  const Icon = iconMap[item.icon] || Circle;
                  const hasSubmenu = Boolean(item.submenu && item.submenu.length > 0);
                  const isSubmenuOpen = Boolean(openSubmenus[item.id]);
                  const isActive = activeItem === item.id;
                  const shapeColor = playfulColors[(groupIdx * 2 + itemIdx) % playfulColors.length];
                  const clayGradient = clayOrbGradients[(groupIdx * 2 + itemIdx) % clayOrbGradients.length];

                  return (
                    <div key={item.id} className="relative">
                      {hasSubmenu ? (
                        /* Item With Submenu */
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleSubmenu(item.id)}
                            title={sidebarCollapsed ? item.title : undefined}
                            className={`
                              w-full flex items-center justify-between px-3 py-2 text-xs font-semibold
                              transition-all duration-200 group
                              ${isClay ? (
                                isSubmenuOpen
                                  ? 'bg-white/90 text-[#7C3AED] shadow-sm rounded-[20px] font-bold active:scale-[0.96]'
                                  : 'text-[#332F3A] hover:bg-white/60 rounded-[20px] font-bold active:scale-[0.96]'
                              ) : isNeu ? (
                                isSubmenuOpen
                                  ? 'neu-pressed text-[#6C63FF] rounded-2xl font-bold'
                                  : 'text-[#3D4852] hover:bg-black/5 rounded-2xl'
                              ) : isOriginal ? (
                                isSubmenuOpen
                                  ? 'bg-white/30 text-[#004085] rounded-md shadow-2xs'
                                  : 'text-slate-800 hover:bg-white/20 rounded-md'
                              ) : (
                                isSubmenuOpen
                                  ? 'bg-white text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm rounded-xl font-bold'
                                  : 'text-[#1E293B] hover:bg-white/80 border-2 border-transparent hover:border-[#1E293B]/20 rounded-xl font-semibold'
                              )}
                              ${sidebarCollapsed ? 'justify-center' : ''}
                            `}
                          >
                            <div className="flex items-center gap-2.5 min-w-0 flex-1">
                              <div className={`
                                p-1.5 shrink-0 transition-all
                                ${isClay
                                  ? `rounded-[14px] bg-gradient-to-br ${clayGradient} text-white clay-orb`
                                  : isNeu 
                                    ? (isSubmenuOpen ? 'neu-well text-[#6C63FF] rounded-xl' : 'neu-sm text-[#3D4852] rounded-xl')
                                    : isPlayful 
                                      ? `rounded-full border-2 border-[#1E293B] ${shapeColor}` 
                                      : ''}
                              `}>
                                <Icon className="w-3.5 h-3.5" strokeWidth={isClay ? 2.5 : isNeu ? 2 : 2.5} />
                              </div>
                              {!sidebarCollapsed && (
                                <span className={`truncate text-xs ${isClay ? 'font-display font-bold' : 'font-medium'}`}>
                                  {item.title}
                                </span>
                              )}
                            </div>

                            {!sidebarCollapsed && (
                              <div className="flex items-center gap-1.5">
                                <ChevronDown
                                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                    isSubmenuOpen ? 'rotate-180 text-[#7C3AED]' : 'text-[#635F69]'
                                  }`}
                                />
                              </div>
                            )}
                          </button>

                          {/* Submenu Items */}
                          {!sidebarCollapsed && isSubmenuOpen && (
                            <div className={`
                              mt-1 ml-4 pl-3 space-y-1 animate-in slide-in-from-top-1 duration-150
                              ${isClay 
                                ? 'border-l-2 border-[#7C3AED]/30' 
                                : isNeu 
                                  ? 'border-l-2 border-[#6C63FF]/30' 
                                  : isOriginal 
                                    ? 'border-l-2 border-white/40' 
                                    : 'border-l-2 border-[#1E293B]'}
                            `}>
                              {item.submenu.map((sub, idx) => {
                                const subId = sub.id || sub.title.toLowerCase().replace(/\s+/g, '_');
                                const isSubActive = activeItem === subId;

                                return (
                                  <a
                                    key={idx}
                                    href={sub.path}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setActiveItem?.(subId);
                                      if (window.innerWidth < 1024) setSidebarOpen(false);
                                    }}
                                    className={`
                                      flex items-center justify-between py-1.5 px-2.5 text-xs transition-all
                                      ${isClay
                                        ? isSubActive
                                          ? 'clay-btn-primary rounded-[14px] text-white font-black font-display'
                                          : 'text-[#635F69] hover:text-[#7C3AED] hover:bg-white/60 rounded-[14px] font-bold'
                                        : isNeu
                                          ? isSubActive
                                            ? 'neu-pressed text-[#6C63FF] font-bold rounded-xl'
                                            : 'text-[#3D4852] hover:text-[#6C63FF] hover:neu-inset-sm rounded-xl font-medium'
                                          : isPlayful 
                                            ? isSubActive
                                              ? 'bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm rounded-xl font-extrabold'
                                              : 'text-[#1E293B] font-bold hover:bg-[#FBBF24] hover:border-2 hover:border-[#1E293B] rounded-xl hover:shadow-pop-sm' 
                                            : isSubActive
                                              ? 'bg-white text-[#004085] shadow-xs rounded-md font-bold'
                                              : 'text-slate-800 hover:text-[#004085] hover:bg-white/30 rounded-md font-semibold'}
                                    `}
                                  >
                                    <span className="truncate">{sub.title}</span>
                                    {isSubActive && isOriginal && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#004085]"></span>
                                    )}
                                  </a>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Direct Link Item */
                        <a
                          href={item.path}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveItem?.(item.id);
                            if (item.id === 'beranda') {
                              setOpenSubmenus({
                                kuliah: false,
                                bimbingan: false,
                                skpm: false,
                                skpm_v2: false,
                                layanan_umum: false,
                              });
                            }
                            if (window.innerWidth < 1024) setSidebarOpen(false);
                          }}
                          title={sidebarCollapsed ? item.title : undefined}
                          className={`
                            flex items-center justify-between px-3 py-2 text-xs font-semibold
                            transition-all duration-200 group
                            ${isClay ? (
                              isActive
                                ? 'clay-btn-primary rounded-[20px] text-white font-black font-display active:scale-[0.92]'
                                : 'text-[#332F3A] hover:bg-white/60 rounded-[20px] font-bold active:scale-[0.96]'
                            ) : isNeu ? (
                              isActive
                                ? 'neu-pressed text-[#6C63FF] font-bold rounded-2xl'
                                : 'text-[#3D4852] hover:bg-black/5 rounded-2xl'
                            ) : isOriginal ? (
                              isActive
                                ? 'bg-white/40 text-[#004085] font-bold shadow-2xs rounded-md'
                                : 'text-slate-800 hover:bg-white/20 rounded-md'
                            ) : (
                              isActive
                                ? 'bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-pop-sm rounded-blob font-extrabold'
                                : 'text-[#1E293B] hover:bg-white/80 border-2 border-transparent hover:border-[#1E293B]/20 rounded-xl font-bold'
                            )}
                            ${sidebarCollapsed ? 'justify-center' : ''}
                          `}
                        >
                          <div className="flex items-center gap-2.5 min-w-0 flex-1">
                            <div className={`
                              p-1.5 shrink-0 transition-transform duration-200
                              ${isClay
                                ? (isActive ? 'rounded-[14px] bg-white text-[#7C3AED] shadow-sm' : `rounded-[14px] bg-gradient-to-br ${clayGradient} text-white clay-orb`)
                                : isNeu 
                                  ? (isActive ? 'neu-well text-[#6C63FF] rounded-xl' : 'neu-sm text-[#3D4852] rounded-xl')
                                  : isPlayful 
                                    ? (isActive ? 'rounded-full bg-[#FBBF24] text-[#1E293B] border border-black' : `rounded-full border-2 border-[#1E293B] ${shapeColor}`) 
                                    : ''}
                            `}>
                              <Icon className="w-3.5 h-3.5" strokeWidth={isClay ? 2.5 : isNeu ? 2 : 2.5} />
                            </div>
                            {!sidebarCollapsed && (
                              <span className={`truncate text-xs ${isClay ? 'font-display font-bold' : ''}`}>
                                {item.title}
                              </span>
                            )}
                          </div>

                          {!sidebarCollapsed && (
                            <div className="flex items-center gap-1.5">
                              {isActive && isOriginal && (
                                <span className="w-2 h-2 rounded-full bg-[#0b5885]"></span>
                              )}
                            </div>
                          )}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer Card */}
        {!sidebarCollapsed && (
          <div className="p-3">
            {isClay ? (
              <div className="p-3.5 clay-card rounded-[24px] bg-white/70 text-[#332F3A]">
                <div className="flex items-center justify-between text-xs font-black font-display">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
                    <span>Digital Clay</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#7C3AED]/10 text-[#7C3AED] px-2 py-0.5 rounded-full">v3.0</span>
                </div>
                <p className="text-[11px] text-[#635F69] mt-1">
                  Layanan Terpadu PKN STAN.
                </p>
              </div>
            ) : isNeu ? (
              <div className="p-3.5 neu-flat rounded-2xl bg-[#E0E5EC] text-[#3D4852]">
                <div className="flex items-center justify-between text-xs font-bold font-jakarta">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38B2AC] shadow-xs"></span>
                    <span>Civitas Soft UI</span>
                  </div>
                  <span className="text-[10px] font-bold neu-inset-sm px-1.5 py-0.5 rounded-md text-[#6C63FF]">v2.6</span>
                </div>
                <p className="text-[11px] text-[#6B7280] mt-1">
                  Layanan Terpadu PKN STAN.
                </p>
              </div>
            ) : isOriginal ? (
              <div className="p-2.5 bg-white/30 rounded-md border border-white/30 text-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-[#004085]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Civitas Online</span>
                </div>
              </div>
            ) : (
              <div className="p-3 bg-[#34D399] text-[#1E293B] border-2 border-[#1E293B] rounded-2xl shadow-pop-sm">
                <div className="flex items-center justify-between text-xs font-extrabold font-outfit">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24] border border-black"></span>
                    <span>Civitas Play Online</span>
                  </div>
                  <span className="text-[10px] bg-white px-1.5 py-0.5 rounded-md border border-black">v2.5</span>
                </div>
              </div>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
