import React, { useState, useEffect } from 'react';
import LoginPage from './components/auth/LoginPage';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import GreetingBanner from './components/dashboard/GreetingBanner';
import StatCards from './components/dashboard/StatCard';
import AnnouncementCarousel from './components/dashboard/AnnouncementCarousel';
import AnnouncementModal from './components/dashboard/AnnouncementModal';
import NotificationList from './components/dashboard/NotificationList';
import NotificationModal from './components/dashboard/NotificationModal';
import JadwalMingguanPage from './components/schedule/JadwalMingguanPage';
import { currentUser as defaultUser } from './data/mockData';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('civitas-theme');
    if (!saved || saved === 'modern' || saved === 'bauhaus' || saved === 'flat') return 'original';
    return saved;
  });

  // Authentication & Dynamic User Profile State
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('civitas-is-logged-in') === 'true';
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('civitas-user-profile');
    if (saved) {
      try {
        return { ...defaultUser, ...JSON.parse(saved) };
      } catch (e) {
        return defaultUser;
      }
    }
    return defaultUser;
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('beranda');
  
  // Modals state
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [notificationModalOpen, setNotificationModalOpen] = useState(false);

  // Persist theme choice
  useEffect(() => {
    localStorage.setItem('civitas-theme', theme);
  }, [theme]);

  const handleLogin = (formData) => {
    const updatedUser = {
      ...user,
      name: formData.name,
      nim: formData.nim,
      studyProgram: formData.studyProgram,
    };
    setUser(updatedUser);
    setIsLoggedIn(true);
    localStorage.setItem('civitas-is-logged-in', 'true');
    localStorage.setItem('civitas-user-profile', JSON.stringify(updatedUser));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('civitas-is-logged-in');
    setActiveMenuItem('beranda');
  };

  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isPlayful = theme === 'playful';
  const isNeu = theme === 'neumorphic';

  // If not authenticated, render Login Page with theme switcher
  if (!isLoggedIn) {
    return (
      <LoginPage
        theme={theme}
        setTheme={setTheme}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <div className={`
      min-h-screen flex flex-col antialiased transition-colors duration-300 relative overflow-x-hidden
      ${isClay
        ? 'theme-claymorphism bg-[#F4F1FA] text-[#332F3A]'
        : isNeu
          ? 'theme-neumorphic bg-[#E0E5EC] text-[#3D4852]'
          : isOriginal
            ? 'theme-original bg-[#f1f4f6] text-[#495057]'
            : 'theme-playful bg-[#FFFDF5] text-[#1E293B]'}
    `}>
      
      {/* High-Fidelity Claymorphism Ambient Floating Blobs */}
      {isClay && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
          <div className="absolute -top-[10%] -left-[10%] h-[55vh] w-[55vh] rounded-full bg-[#7C3AED]/12 blur-3xl animate-clay-float"></div>
          <div className="absolute top-[25%] -right-[10%] h-[60vh] w-[60vh] rounded-full bg-[#DB2777]/10 blur-3xl animate-clay-float-delayed"></div>
          <div className="absolute -bottom-[10%] left-[20%] h-[50vh] w-[50vh] rounded-full bg-[#0EA5E9]/10 blur-3xl animate-clay-float"></div>
          <div className="absolute top-[60%] right-[30%] h-[40vh] w-[40vh] rounded-full bg-[#10B981]/08 blur-3xl animate-clay-breathe"></div>
        </div>
      )}

      {/* Top Fixed Header with 4-Theme Selector */}
      <Header
        theme={theme}
        setTheme={setTheme}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        unreadNotificationCount={5}
        onOpenNotifications={() => setNotificationModalOpen(true)}
        currentUser={user}
        onLogout={handleLogout}
      />

      {/* Main Body Layout */}
      <div className="flex-1 flex relative z-10 pt-16">
        
        {/* Left Sidebar */}
        <Sidebar
          theme={theme}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          sidebarCollapsed={sidebarCollapsed}
          activeItem={activeMenuItem}
          setActiveItem={setActiveMenuItem}
        />

        {/* Main Content Area */}
        <main
          className={`
            flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out
            ${sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-72'}
          `}
        >
          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl w-full mx-auto space-y-6">
            
            {/* Conditional Page View */}
            {activeMenuItem === 'jadwal_mingguan' ? (
              <JadwalMingguanPage theme={theme} currentUser={user} />
            ) : (
              <>
                {/* 1. Greeting & Academic Header */}
                <GreetingBanner theme={theme} currentUser={user} />

                {/* 2. Stat Summary Cards */}
                <StatCards theme={theme} />

                {/* 3. Main Split Content (Pengumuman & Notifikasi) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Left Column: Announcement Carousel */}
                  <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
                    <AnnouncementCarousel
                      theme={theme}
                      onSelectAnnouncement={(item) => setSelectedAnnouncement(item)}
                    />
                  </div>

                  {/* Right Column: Notification List */}
                  <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
                    <NotificationList
                      theme={theme}
                      onOpenAll={() => setNotificationModalOpen(true)}
                    />
                  </div>

                </div>
              </>
            )}

          </div>

          {/* Footer Component */}
          <Footer theme={theme} />
        </main>
      </div>

      {/* Interactive Modals */}
      <AnnouncementModal
        theme={theme}
        announcement={selectedAnnouncement}
        onClose={() => setSelectedAnnouncement(null)}
      />

      <NotificationModal
        theme={theme}
        isOpen={notificationModalOpen}
        onClose={() => setNotificationModalOpen(false)}
      />
    </div>
  );
}
