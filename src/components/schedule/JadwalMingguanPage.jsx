import React, { useState, useEffect } from 'react';
import { 
  CalendarDays, 
  Clock, 
  MapPin, 
  User, 
  BookOpen, 
  CheckCircle2, 
  Radio, 
  Sparkles,
  Award
} from 'lucide-react';
import { currentUser as defaultUser, getWeeklySchedule } from '../../data/mockData';

export default function JadwalMingguanPage({ theme = 'original', currentUser = defaultUser }) {
  const isOriginal = theme === 'original';
  const isClay = theme === 'claymorphism';
  const isPlayful = theme === 'playful';
  const isNeu = theme === 'neumorphic';

  // Live ticking digital clock
  const [liveTime, setLiveTime] = useState(() => {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      setLiveTime(d.toTimeString().split(' ')[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Dynamically tailor schedule based on selected study program
  const displaySchedule = getWeeklySchedule(currentUser?.studyProgram);

  // -------------------------------------------------------------
  // 1. ORIGINAL (KLASIK 1:1) THEME
  // -------------------------------------------------------------
  if (isOriginal) {
    return (
      <div className="space-y-5 font-sans animate-in fade-in duration-200">
        {/* Title Header Card */}
        <div className="bg-white p-4 rounded-md shadow-sm border border-slate-200/60 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-normal text-slate-800">
              Perkuliahan
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Jadwal Kuliah Mingguan
            </p>
          </div>
          <div className="text-xs text-slate-600 font-mono">
            {liveTime}
          </div>
        </div>

        {/* Student Info Card */}
        <div className="bg-white rounded-md shadow-sm border border-slate-200/60 p-4 max-w-md">
          <div className="grid grid-cols-3 gap-2 text-xs text-slate-800">
            <div className="font-semibold text-slate-600">NAMA</div>
            <div className="col-span-2">: {currentUser.name}</div>

            <div className="font-semibold text-slate-600">NPM</div>
            <div className="col-span-2">: {currentUser.nim}</div>

            <div className="font-semibold text-slate-600">PRODI</div>
            <div className="col-span-2">: {currentUser.studyProgram}</div>
          </div>
        </div>

        {/* Schedule Table Card */}
        <div className="bg-white rounded-md shadow-sm border border-slate-200/60 overflow-hidden">
          <div 
            className="p-3 text-slate-900 font-bold text-sm tracking-wide"
            style={{ backgroundColor: 'deepskyblue' }}
          >
            Jadwal Kuliah
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center w-12">No</th>
                  <th className="py-2.5 px-4 border-r border-slate-200">Kelas</th>
                  <th className="py-2.5 px-4 border-r border-slate-200">Mata Kuliah / Dosen</th>
                  <th className="py-2.5 px-4 border-r border-slate-200 text-center">Jadwal</th>
                  <th className="py-2.5 px-4 border-r border-slate-200 text-center">Ruang</th>
                  <th className="py-2.5 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {displaySchedule.map((item) => (
                  <tr 
                    key={item.id}
                    style={{ 
                      backgroundColor: item.type === 'daring' ? '#ffe0b3' : '#ccffcc' 
                    }}
                    className="hover:opacity-95 transition-opacity"
                  >
                    <td className="py-3 px-3 text-center border-r border-slate-200/60 font-semibold text-slate-700">
                      {item.id}
                    </td>
                    <td className="py-3 px-4 border-r border-slate-200/60">
                      <div className="font-bold text-slate-900">{item.kelas}</div>
                      <div className="text-[11px] text-slate-700">{item.prodi}</div>
                    </td>
                    <td className="py-3 px-4 border-r border-slate-200/60">
                      <div className="font-bold text-slate-900">
                        {item.mataKuliah} ({item.sks} sks)
                      </div>
                      <div className="text-[11px] text-slate-700 mt-0.5">{item.dosen}</div>
                    </td>
                    <td className="py-3 px-4 text-center font-medium text-slate-700 whitespace-nowrap border-r border-slate-200/60">
                      {item.jadwal}
                    </td>
                    <td className="py-3 px-4 text-center font-medium text-slate-700 border-r border-slate-200/60">
                      {item.ruang || '-'}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-slate-800">
                      {item.aksi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-1.5 text-xs text-slate-700 pt-2 font-medium">
          <div className="flex items-center gap-2">
            <div className="w-24 h-5 border border-slate-300/40" style={{ backgroundColor: '#ffe0b3' }}></div>
            <span>= Perkuliahan Daring / Online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-24 h-5 border border-slate-300/40" style={{ backgroundColor: '#ccffcc' }}></div>
            <span>= Perkuliahan Luring / Offline / Onsite</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. HIGH-FIDELITY CLAYMORHPISM THEME
  // -------------------------------------------------------------
  if (isClay) {
    return (
      <div className="space-y-6 font-dmsans text-[#332F3A] animate-in fade-in duration-200">
        {/* Title Header Card */}
        <div className="rounded-[36px] clay-card p-7 sm:p-8 bg-white/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-[22px] clay-orb bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white shrink-0">
              <CalendarDays className="w-7 h-7" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black font-display text-[#332F3A] tracking-tight">
                Jadwal Perkuliahan
              </h1>
              <p className="text-xs sm:text-sm text-[#635F69] font-medium mt-0.5">
                Jadwal Kuliah Mingguan Terpadu Civitas
              </p>
            </div>
          </div>

          <div className="clay-btn-secondary px-4 py-2.5 rounded-[20px] text-xs font-black font-display text-[#7C3AED] flex items-center gap-2 self-start sm:self-auto">
            <Clock className="w-4 h-4" />
            <span>Waktu Sekarang: {liveTime}</span>
          </div>
        </div>

        {/* Student Identity Card */}
        <div className="max-w-xl rounded-[28px] clay-card p-6 bg-white/80 space-y-4">
          <div className="flex items-center gap-2 text-xs font-black font-display uppercase tracking-wider text-[#7C3AED]">
            <Award className="w-4 h-4" />
            <span>Informasi Mahasiswa</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-[#EFEBF5] clay-pressed rounded-[20px]">
              <span className="text-[11px] text-[#635F69] font-medium block mb-0.5">Nama Lengkap</span>
              <span className="font-black font-display text-[#332F3A] text-sm truncate block">{currentUser.name}</span>
            </div>
            <div className="p-3.5 bg-[#EFEBF5] clay-pressed rounded-[20px]">
              <span className="text-[11px] text-[#635F69] font-medium block mb-0.5">NPM / NIM</span>
              <span className="font-black font-display text-[#7C3AED] text-sm block">{currentUser.nim}</span>
            </div>
            <div className="p-3.5 bg-[#EFEBF5] clay-pressed rounded-[20px]">
              <span className="text-[11px] text-[#635F69] font-medium block mb-0.5">Program Studi</span>
              <span className="font-black font-display text-[#332F3A] text-xs leading-snug block">{currentUser.studyProgram}</span>
            </div>
          </div>
        </div>

        {/* Schedule Table Card */}
        <div className="rounded-[36px] clay-card p-6 sm:p-7 bg-white/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#DB2777]"></span>
              <h3 className="font-black font-display text-[#332F3A] text-base">
                Daftar Mata Kuliah Semester Ini
              </h3>
            </div>
            <span className="text-xs font-bold text-[#635F69]">
              Total: {displaySchedule.length} Pertemuan Terdaftar
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2.5 text-xs">
              <thead>
                <tr className="text-[11px] font-black font-display uppercase tracking-wider text-[#635F69]">
                  <th className="py-2.5 px-4">No</th>
                  <th className="py-2.5 px-4">Kelas & Prodi</th>
                  <th className="py-2.5 px-4">Mata Kuliah & Dosen</th>
                  <th className="py-2.5 px-4 text-center">Jadwal</th>
                  <th className="py-2.5 px-4 text-center">Ruang</th>
                  <th className="py-2.5 px-4 text-center">Presensi</th>
                </tr>
              </thead>
              <tbody>
                {displaySchedule.map((item) => (
                  <tr
                    key={item.id}
                    className={`
                      transition-all duration-200 group
                      ${item.type === 'daring' ? 'bg-[#FFFBEB]/80 hover:bg-[#FEF3C7]' : 'bg-white/90 hover:bg-white'}
                      shadow-xs hover:shadow-clay-card
                    `}
                  >
                    <td className="py-3.5 px-4 font-black font-display text-[#7C3AED] rounded-l-[20px]">
                      {item.id}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-black font-display text-[#332F3A] text-sm">{item.kelas}</div>
                      <div className="text-[11px] text-[#635F69] font-medium">{item.prodi}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-black font-display text-[#332F3A] text-xs">
                        {item.mataKuliah} <span className="text-[#7C3AED]">({item.sks} SKS)</span>
                      </div>
                      <div className="text-[11px] text-[#635F69] font-medium">{item.dosen}</div>
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-[#332F3A] whitespace-nowrap">
                      {item.jadwal}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="clay-btn-secondary px-3 py-1 rounded-[14px] text-xs font-bold text-[#332F3A]">
                        {item.ruang || 'Online'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center rounded-r-[20px]">
                      {item.aksi === 'recorded' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 text-[11px] font-black font-display shadow-2xs">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Recorded
                        </span>
                      ) : (
                        <span className="text-[#635F69] font-medium">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-2">
          <div className="clay-btn-secondary flex items-center gap-2.5 px-4 py-2 rounded-[20px] text-[#332F3A]">
            <span className="w-3.5 h-3.5 rounded-full bg-[#F59E0B] shadow-xs"></span>
            <span className="font-display font-black">Perkuliahan Daring / Online</span>
          </div>
          <div className="clay-btn-secondary flex items-center gap-2.5 px-4 py-2 rounded-[20px] text-[#332F3A]">
            <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] shadow-xs"></span>
            <span className="font-display font-black">Perkuliahan Luring / Offline</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 3. NEUMORPHISM (SOFT UI) THEME
  // -------------------------------------------------------------
  if (isNeu) {
    return (
      <div className="space-y-6 font-dmsans text-[#3D4852] animate-in fade-in duration-200">
        {/* Title Header Card */}
        <div className="rounded-[32px] neu-flat p-7 sm:p-8 bg-[#E0E5EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl neu-well flex items-center justify-center text-[#6C63FF] shrink-0">
              <CalendarDays className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold font-jakarta text-[#3D4852] tracking-tight">
                Perkuliahan
              </h1>
              <p className="text-xs sm:text-sm text-[#6B7280] font-medium mt-0.5">
                Jadwal Kuliah Mingguan Terpadu
              </p>
            </div>
          </div>

          <div className="neu-btn px-4 py-2.5 rounded-2xl text-xs font-bold font-jakarta text-[#6C63FF] flex items-center gap-2 self-start sm:self-auto">
            <Clock className="w-4 h-4" />
            <span>Waktu Sekarang: {liveTime}</span>
          </div>
        </div>

        {/* Student Info Card */}
        <div className="max-w-md rounded-2xl neu-flat p-5 bg-[#E0E5EC] space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#6C63FF] uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Identitas Mahasiswa</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs pt-1">
            <div className="text-[#6B7280] font-medium">Nama</div>
            <div className="col-span-2 font-bold text-[#3D4852]">: {currentUser.name}</div>

            <div className="text-[#6B7280] font-medium">NPM</div>
            <div className="col-span-2 font-bold text-[#3D4852]">: {currentUser.nim}</div>

            <div className="text-[#6B7280] font-medium">Prodi</div>
            <div className="col-span-2 font-bold text-[#3D4852]">: {currentUser.studyProgram}</div>
          </div>
        </div>

        {/* Schedule Table Card */}
        <div className="rounded-[32px] neu-flat p-6 sm:p-7 bg-[#E0E5EC] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-black/5">
            <h3 className="font-extrabold font-jakarta text-[#3D4852] text-base">
              Daftar Jadwal Kuliah
            </h3>
            <span className="text-xs text-[#6B7280] font-medium">
              Total {displaySchedule.length} Pertemuan Terdaftar
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2.5 text-xs">
              <thead>
                <tr className="text-[11px] font-bold font-jakarta uppercase tracking-wider text-[#6B7280]">
                  <th className="py-2 px-4">No</th>
                  <th className="py-2 px-4">Kelas & Prodi</th>
                  <th className="py-2 px-4">Mata Kuliah & Dosen</th>
                  <th className="py-2 px-4 text-center">Jadwal</th>
                  <th className="py-2 px-4 text-center">Ruang</th>
                  <th className="py-2 px-4 text-center">Aksi / Status</th>
                </tr>
              </thead>
              <tbody>
                {displaySchedule.map((item) => (
                  <tr 
                    key={item.id}
                    className="neu-flat rounded-2xl transition-all duration-200 hover:-translate-y-0.5 group"
                    style={{
                      backgroundColor: item.type === 'daring' ? '#e9edf2' : '#E0E5EC'
                    }}
                  >
                    <td className="py-3.5 px-4 font-bold text-[#6C63FF] rounded-l-2xl">
                      {item.id}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#3D4852]">{item.kelas}</div>
                      <div className="text-[11px] text-[#6B7280]">{item.prodi}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#3D4852]">
                        {item.mataKuliah} <span className="text-[#6C63FF]">({item.sks} SKS)</span>
                      </div>
                      <div className="text-[11px] text-[#6B7280]">{item.dosen}</div>
                    </td>
                    <td className="py-3.5 px-4 text-center font-medium text-[#3D4852] whitespace-nowrap">
                      {item.jadwal}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="neu-inset-sm px-2.5 py-1 rounded-xl text-xs font-semibold text-[#3D4852]">
                        {item.ruang || 'Online'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center rounded-r-2xl">
                      {item.aksi === 'recorded' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[#38B2AC] neu-inset-sm text-[11px] font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Recorded
                        </span>
                      ) : (
                        <span className="text-[#6B7280]">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
          <div className="flex items-center gap-2 neu-inset-sm px-3.5 py-2 rounded-xl text-[#3D4852]">
            <span className="w-3 h-3 rounded-full bg-amber-400 shadow-xs"></span>
            <span className="font-semibold">Perkuliahan Daring / Online</span>
          </div>
          <div className="flex items-center gap-2 neu-inset-sm px-3.5 py-2 rounded-xl text-[#3D4852]">
            <span className="w-3 h-3 rounded-full bg-teal-400 shadow-xs"></span>
            <span className="font-semibold">Perkuliahan Luring / Offline</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 4. PLAYFUL GEOMETRIC THEME
  // -------------------------------------------------------------
  return (
    <div className="space-y-6 font-jakarta animate-in fade-in duration-200">
      {/* Title Header Card */}
      <div className="bg-white border-2 border-[#1E293B] shadow-pop-violet rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-sticker">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6] text-white border-2 border-[#1E293B] shadow-pop-sm flex items-center justify-center shrink-0">
            <CalendarDays className="w-7 h-7" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-outfit text-[#1E293B] tracking-tight">
              Perkuliahan
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] font-bold mt-0.5">
              Jadwal Kuliah Mingguan Terpadu
            </p>
          </div>
        </div>

        <div className="btn-candy bg-[#FBBF24] text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm px-4 py-2 rounded-full text-xs font-black font-outfit flex items-center gap-2 self-start sm:self-auto">
          <Clock className="w-4 h-4" />
          <span>Waktu Sekarang: {liveTime}</span>
        </div>
      </div>

      {/* Student Identity Card */}
      <div className="max-w-md bg-white border-2 border-[#1E293B] shadow-pop-pink rounded-3xl p-5 space-y-2.5">
        <div className="flex items-center gap-2 text-xs font-extrabold font-outfit text-[#8B5CF6] uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#FBBF24]" />
          <span>Identitas Mahasiswa</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs pt-1">
          <div className="text-[#64748B] font-bold">Nama</div>
          <div className="col-span-2 font-extrabold text-[#1E293B]">: {currentUser.name}</div>

          <div className="text-[#64748B] font-bold">NPM</div>
          <div className="col-span-2 font-extrabold text-[#1E293B]">: {currentUser.nim}</div>

          <div className="text-[#64748B] font-bold">Prodi</div>
          <div className="col-span-2 font-extrabold text-[#1E293B]">: {currentUser.studyProgram}</div>
        </div>
      </div>

      {/* Schedule Table Card */}
      <div className="bg-white border-2 border-[#1E293B] shadow-pop-lg rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#E2E8F0]">
          <h3 className="font-extrabold font-outfit text-[#1E293B] text-base">
            Daftar Jadwal Kuliah
          </h3>
          <span className="text-xs text-[#64748B] font-bold">
            Total {displaySchedule.length} Pertemuan Terdaftar
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b-2 border-[#1E293B] bg-[#FFFDF5] text-[#1E293B] font-extrabold font-outfit">
                <th className="py-3 px-4">No</th>
                <th className="py-3 px-4">Kelas & Prodi</th>
                <th className="py-3 px-4">Mata Kuliah & Dosen</th>
                <th className="py-3 px-4 text-center">Jadwal</th>
                <th className="py-3 px-4 text-center">Ruang</th>
                <th className="py-3 px-4 text-center">Aksi / Status</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-[#E2E8F0]">
              {displaySchedule.map((item) => (
                <tr 
                  key={item.id}
                  className="hover:bg-slate-50 transition-colors"
                  style={{
                    backgroundColor: item.type === 'daring' ? '#FFFBEB' : '#F0FDF4'
                  }}
                >
                  <td className="py-3.5 px-4 font-black font-outfit text-[#8B5CF6]">
                    {item.id}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-extrabold text-sm text-[#1E293B] font-outfit">{item.kelas}</div>
                    <div className="text-[11px] text-[#64748B] font-medium">{item.prodi}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-[#1E293B] text-xs">
                      {item.mataKuliah} <span className="text-[#8B5CF6]">({item.sks} SKS)</span>
                    </div>
                    <div className="text-[11px] text-[#64748B]">{item.dosen}</div>
                  </td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#1E293B] whitespace-nowrap">
                    {item.jadwal}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="px-2.5 py-1 rounded-xl bg-[#FFFDF5] border border-[#1E293B] font-bold text-xs">
                      {item.ruang || 'Online'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {item.aksi === 'recorded' ? (
                      <span className="btn-candy inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#34D399] text-[#1E293B] border-2 border-[#1E293B] shadow-pop-sm text-[11px] font-black uppercase font-outfit">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Recorded
                      </span>
                    ) : (
                      <span className="text-[#64748B] font-bold">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Playful Legend */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-2">
        <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full border-2 border-[#1E293B] shadow-pop-sm">
          <span className="w-3.5 h-3.5 rounded-full bg-amber-300 border border-black"></span>
          <span>Perkuliahan Daring / Online</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full border-2 border-[#1E293B] shadow-pop-sm">
          <span className="w-3.5 h-3.5 rounded-full bg-[#34D399] border border-black"></span>
          <span>Perkuliahan Luring / Offline / Onsite</span>
        </div>
      </div>
    </div>
  );
}
