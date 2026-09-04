export const currentUser = {
  name: "ERLANGGA SATRYA UTAMA",
  nim: "4121240048",
  email: "4121240048_angga@pknstan.ac.id",
  avatar: "/assets/user.jpg",
  studyProgram: "D-IV Manajemen Keuangan Negara",
  semester: "Semester Genap",
  academicYear: "2025/2026",
  status: "Aktif",
};

export const academicSummary = [
  {
    id: "followed_courses",
    title: "Mata Kuliah Telah Diikuti",
    count: 24,
    unit: "Mata Kuliah",
    subInfo: "Total 57 SKS Diselesaikan",
    badge: "Kumulatif",
    gradient: "from-blue-600 via-indigo-600 to-blue-700",
    bgLight: "bg-blue-50/70 text-blue-700 border-blue-100",
    icon: "GraduationCap",
  },
  {
    id: "current_courses",
    title: "Mata Kuliah Semester Ini",
    count: 7,
    unit: "Mata Kuliah",
    subInfo: "Beban 18 SKS Aktif",
    badge: "Semester Genap",
    gradient: "from-slate-800 via-slate-900 to-blue-950",
    bgLight: "bg-emerald-50/70 text-emerald-700 border-emerald-100",
    icon: "BookOpenCheck",
  },
];

export const sidebarMenu = [
  {
    section: "General",
    items: [
      {
        id: "beranda",
        title: "Beranda",
        icon: "LayoutDashboard",
        path: "#",
        active: true,
      },
      {
        id: "profil",
        title: "Profil Mahasiswa",
        icon: "UserCircle2",
        path: "#",
      },
      {
        id: "aturan",
        title: "Peraturan & Buku Perkuliahan",
        icon: "BookMarked",
        path: "#",
      },
    ],
  },
  {
    section: "Perkuliahan",
    items: [
      {
        id: "nilai",
        title: "Nilai",
        icon: "Award",
        path: "#",
      },
      {
        id: "kuliah",
        title: "Kuliah",
        icon: "CalendarDays",
        submenu: [
          { id: "krs", title: "KRS (Kartu Rencana Studi)", path: "#" },
          { id: "jadwal_mingguan", title: "Jadwal Mingguan", path: "#" },
        ],
      },
      {
        id: "bimbingan",
        title: "Bimbingan Akademik",
        icon: "Users2",
        submenu: [
          { title: "Dashboard Bimbingan", path: "#" },
          { title: "Buat Bimbingan", path: "#" },
        ],
      },
    ],
  },
  {
    section: "Layanan",
    items: [
      {
        id: "skpm",
        title: "SKPM",
        icon: "FileBadge2",
        submenu: [
          { title: "Data RPM", path: "#" },
          { title: "Data HPM", path: "#" },
          { title: "Data Pelanggaran", path: "#" },
        ],
      },
      {
        id: "skpm_v2",
        title: "SKPM V2",
        icon: "Sparkles",
        submenu: [
          { title: "Dashboard SKPM", path: "#" },
          { title: "Data SKPM", path: "#" },
        ],
      },
      {
        id: "evaluasi",
        title: "Evaluasi",
        icon: "CheckSquare",
        path: "#",
      },
      {
        id: "layanan_umum",
        title: "Layanan",
        icon: "HelpCircle",
        submenu: [
          { title: "Peminjaman Ruang Diskusi", path: "#" },
          { title: "Informasi Nilai Data SPMB", path: "#" },
        ],
      },
    ],
  },
];

export const announcements = [
  {
    id: 1,
    title: "Konfigurasi Wifi SSID Mahasiswa",
    date: "14 Okt 2024 16:34",
    category: "IT & Jaringan",
    image: "/assets/peng_1728898454.jpg",
    snippet:
      "Dalam rangka peningkatan keamanan jaringan di lingkungan Mahasiswa Politeknik Keuangan Negara STAN, mahasiswa dapat menggunakan user dan password Email PKN STAN sebagai autentikasi SSID Mahasiswa.",
    fullContent: `Dalam rangka peningkatan keamanan jaringan di lingkungan Mahasiswa Politeknik Keuangan Negara STAN. Mahasiswa dapat menggunakan user dan password Email PKN STAN sebagai user dan password SSID Mahasiswa.

Ada perbedaan konfigurasi antara Smartphone dengan Operating System ANDROID dan iOS (iPhone):
1. **Untuk Pengguna Android**: Pilih metode EAP 'PEAP', Phase 2 Authentication 'MSCHAPV2', dan CA Certificate 'Use system certificates' atau 'Do not validate'.
2. **Untuk Pengguna iOS**: Hubungkan ke SSID Mahasiswa, masukkan kredensial Email PKN STAN, lalu terima sertifikat keamanan yang muncul.

Panduan lengkap telah disediakan dan dapat diunduh di Aplikasi Portal PKN STAN dengan cara:
Login ke aplikasi Portal, klik icon Foto Profil di pojok kanan atas, lalu pilih menu **Info & Bantuan**.`,
    links: [
      {
        label: "Panduan Info & Bantuan",
        url: "#",
        type: "internal",
      },
    ],
  },
  {
    id: 2,
    title: "Ada Apa di Perpustakaan?",
    date: "11 Nov 2025 16:57",
    category: "Perpustakaan",
    image: "/assets/peng_1762855030.png",
    snippet:
      "Perpustakaan PKN STAN menyediakan akses ke koleksi digital premium untuk mendukung kualitas riset dan tugas akademik civitas akademika PKN STAN (Emerald Insight, e-book global, LSEG).",
    fullContent: `Halo sobat perpus!

Perpustakaan PKN STAN menyediakan akses ke koleksi digital premium untuk mendukung kualitas riset dan tugas akademik civitas academika PKN STAN. Koleksi ini mencakup:
- Ribuan jurnal internasional dari **Emerald Insight**
- **E-Book** dari penerbit global terkemuka
- Data keuangan dan bisnis terpercaya dari basis data **LSEG (London Stock Exchange Group)**

Manfaatkan sumber daya ini untuk memastikan referensi yang valid dan data yang akurat bagi riset, skripsi, atau tugas akhir Anda!

Untuk panduan visual dan informasi lebih detail mengenai layanan serta cara akses, saksikan video panduan di kanal YouTube Perpustakaan PKN STAN.`,
    links: [
      {
        label: "Tonton Video Panduan di YouTube",
        url: "https://youtu.be/7xNferTbjCo?si=gNaHLW0PtiNQp5ZK",
        type: "external",
      },
      {
        label: "Tautan Satu Pintu Perpustakaan (linktr.ee/pknstanlib)",
        url: "https://linktr.ee/pknstanlib",
        type: "external",
      },
    ],
  },
];

export const notifications = [
  {
    id: "notif-1",
    title: "Evaluasi Perkuliahan",
    description: "Mohon isi evaluasi perkuliahan semester berjalan untuk Mata Kuliah Akuntansi Keuangan.",
    date: "27 Agu 2026",
    time: "12:57",
    unread: true,
    link: "#",
    tag: "Akademik",
  },
  {
    id: "notif-2",
    title: "Evaluasi Perkuliahan",
    description: "Kuesioner evaluasi dosen pembimbing akademik telah dibuka.",
    date: "19 Agu 2026",
    time: "10:31",
    unread: true,
    link: "#",
    tag: "Akademik",
  },
  {
    id: "notif-3",
    title: "Evaluasi Perkuliahan",
    description: "Pengingat pengisian evaluasi sarana dan prasarana ruang kelas perkuliahan.",
    date: "18 Agu 2026",
    time: "14:40",
    unread: true,
    link: "#",
    tag: "Akademik",
  },
  {
    id: "notif-4",
    title: "Evaluasi Perkuliahan",
    description: "Evaluasi tengah semester mata kuliah Hukum Pajak telah tersedia.",
    date: "13 Agu 2026",
    time: "15:20",
    unread: true,
    link: "#",
    tag: "Evaluasi",
  },
  {
    id: "notif-5",
    title: "Evaluasi Perkuliahan",
    description: "Mohon isi kuesioner kepuasan layanan bimbingan akademik dan KRS.",
    date: "12 Agu 2026",
    time: "11:02",
    unread: true,
    link: "#",
    tag: "Layanan",
  },
];

export const weeklySchedule = [
  {
    id: 1,
    kelas: "4 Penerimaan-4",
    prodi: "Manajemen Keuangan Negara STR Reguler tk 4",
    mataKuliah: "Perdagangan Internasional",
    sks: 2,
    dosen: "Sri Murwani",
    jadwal: "31 Aug 2026 14:00 - 15:40",
    ruang: "N 208",
    tipe: "luring", // luring (#ccffcc), daring (#ffe0b3)
    aksi: "-",
  },
  {
    id: 2,
    kelas: "4 Penerimaan-4",
    prodi: "Manajemen Keuangan Negara STR Reguler tk 4",
    mataKuliah: "Pengantar Cukai",
    sks: 2,
    dosen: "Budhi Setyawan",
    jadwal: "02 Sep 2026 07:30 - 09:10",
    ruang: "N 305",
    tipe: "luring",
    aksi: "-",
  },
  {
    id: 3,
    kelas: "4 Penerimaan-4",
    prodi: "Manajemen Keuangan Negara STR Reguler tk 4",
    mataKuliah: "Pajak Penghasilan Terapan",
    sks: 3,
    dosen: "Suhut Tumpal Sinaga",
    jadwal: "02 Sep 2026 08:00 - 12:00",
    ruang: "",
    tipe: "luring",
    aksi: "-",
  },
  {
    id: 4,
    kelas: "4 Penerimaan-4",
    prodi: "Manajemen Keuangan Negara STR Reguler tk 4",
    mataKuliah: "Pengantar Kepabeanan",
    sks: 3,
    dosen: "Mohammad Fachrudin",
    jadwal: "02 Sep 2026 10:30 - 13:00",
    ruang: "N 306",
    tipe: "luring",
    aksi: "-",
  },
  {
    id: 5,
    kelas: "4 Penerimaan-4",
    prodi: "Manajemen Keuangan Negara STR Reguler tk 4",
    mataKuliah: "Pajak dan Retribusi Daerah Terapan",
    sks: 3,
    dosen: "Benny Gunawan Ardiansyah",
    jadwal: "03 Sep 2026 07:30 - 10:00",
    ruang: "N 311",
    tipe: "luring",
    aksi: "recorded",
  },
  {
    id: 6,
    kelas: "4 Penerimaan-4",
    prodi: "Manajemen Keuangan Negara STR Reguler tk 4",
    mataKuliah: "Pajak Pertambahan Nilai dan Pajak Tidak Langsung Lainnya",
    sks: 3,
    dosen: "Petric Andika Marsetyo Rendy",
    jadwal: "03 Sep 2026 10:30 - 13:00",
    ruang: "N 610",
    tipe: "luring",
    aksi: "recorded",
  },
  {
    id: 7,
    kelas: "4 Penerimaan-4",
    prodi: "Manajemen Keuangan Negara STR Reguler tk 4",
    mataKuliah: "Manajemen Penerimaan Negara Bukan Pajak",
    sks: 2,
    dosen: "Ibnu Hasim",
    jadwal: "03 Sep 2026 14:00 - 15:40",
    ruang: "N 214",
    tipe: "luring",
    aksi: "recorded",
  },
];

export const getWeeklySchedule = (studyProgram = 'D-IV Manajemen Keuangan Negara') => {
  const clean = (studyProgram || '').toLowerCase();
  const cleanTitle = (studyProgram || 'Manajemen Keuangan Negara').replace(/^D-IV\s+/i, '');
  const prodiFormatted = `${cleanTitle} STR Reguler tk 4`;

  if (clean.includes('akuntansi')) {
    return [
      {
        id: 1,
        kelas: "4 Akuntansi-4",
        prodi: prodiFormatted,
        mataKuliah: "Standar Akuntansi Pemerintahan (SAP) Terapan",
        sks: 3,
        dosen: "Dr. Hendra Permana, M.Acc.",
        jadwal: "31 Aug 2026 14:00 - 15:40",
        ruang: "N 208",
        tipe: "luring",
        aksi: "-",
      },
      {
        id: 2,
        kelas: "4 Akuntansi-4",
        prodi: prodiFormatted,
        mataKuliah: "Audit Keuangan Sektor Publik",
        sks: 3,
        dosen: "Rina Kusumastuti, S.E., M.Ak.",
        jadwal: "02 Sep 2026 07:30 - 09:10",
        ruang: "N 305",
        tipe: "luring",
        aksi: "-",
      },
      {
        id: 3,
        kelas: "4 Akuntansi-4",
        prodi: prodiFormatted,
        mataKuliah: "Sistem Akuntansi Instansi & Penganggaran",
        sks: 3,
        dosen: "Budi Wibowo, S.ST., Ak.",
        jadwal: "02 Sep 2026 08:00 - 12:00",
        ruang: "",
        tipe: "luring",
        aksi: "-",
      },
      {
        id: 4,
        kelas: "4 Akuntansi-4",
        prodi: prodiFormatted,
        mataKuliah: "Akuntansi Manajemen Sektor Publik",
        sks: 3,
        dosen: "Dian Anggraini, M.E., Ak.",
        jadwal: "02 Sep 2026 10:30 - 13:00",
        ruang: "N 306",
        tipe: "luring",
        aksi: "-",
      },
      {
        id: 5,
        kelas: "4 Akuntansi-4",
        prodi: prodiFormatted,
        mataKuliah: "Analisis Laporan Keuangan Pemerintah",
        sks: 2,
        dosen: "Ahmad Fauzi, S.E., M.Sc.",
        jadwal: "03 Sep 2026 07:30 - 10:00",
        ruang: "N 311",
        tipe: "luring",
        aksi: "recorded",
      },
      {
        id: 6,
        kelas: "4 Akuntansi-4",
        prodi: prodiFormatted,
        mataKuliah: "Praktikum Forensik & Investigasi Keuangan",
        sks: 2,
        dosen: "Agus Setiawan, S.E., M.Ak.",
        jadwal: "03 Sep 2026 10:30 - 13:00",
        ruang: "N 610",
        tipe: "luring",
        aksi: "recorded",
      },
      {
        id: 7,
        kelas: "4 Akuntansi-4",
        prodi: prodiFormatted,
        mataKuliah: "Tata Kelola & Akuntabilitas Publik",
        sks: 2,
        dosen: "Nurul Hidayati, S.IP., M.Si.",
        jadwal: "03 Sep 2026 14:00 - 15:40",
        ruang: "N 214",
        tipe: "luring",
        aksi: "recorded",
      },
    ];
  }

  if (clean.includes('aset')) {
    return [
      {
        id: 1,
        kelas: "4 Manajemen Aset-4",
        prodi: prodiFormatted,
        mataKuliah: "Penilaian Properti & Aset Pemerintah",
        sks: 3,
        dosen: "Ir. Bambang Suharjo, M.App.Sc.",
        jadwal: "31 Aug 2026 14:00 - 15:40",
        ruang: "N 208",
        tipe: "luring",
        aksi: "-",
      },
      {
        id: 2,
        kelas: "4 Manajemen Aset-4",
        prodi: prodiFormatted,
        mataKuliah: "Pengelolaan Barang Milik Negara (BMN)",
        sks: 3,
        dosen: "Dedi Supriyadi, S.E., M.M.",
        jadwal: "02 Sep 2026 07:30 - 09:10",
        ruang: "N 305",
        tipe: "luring",
        aksi: "-",
      },
      {
        id: 3,
        kelas: "4 Manajemen Aset-4",
        prodi: prodiFormatted,
        mataKuliah: "Hukum Kebendaan dan Lelang Aset Negara",
        sks: 3,
        dosen: "Ratna Sari Dewi, S.H., M.H.",
        jadwal: "02 Sep 2026 08:00 - 12:00",
        ruang: "",
        tipe: "luring",
        aksi: "-",
      },
      {
        id: 4,
        kelas: "4 Manajemen Aset-4",
        prodi: prodiFormatted,
        mataKuliah: "Sistem Informasi Pengelolaan Aset (SIMAN)",
        sks: 2,
        dosen: "Eko Prasetyo, S.Kom., M.TI.",
        jadwal: "02 Sep 2026 10:30 - 13:00",
        ruang: "N 306",
        tipe: "luring",
        aksi: "-",
      },
      {
        id: 5,
        kelas: "4 Manajemen Aset-4",
        prodi: prodiFormatted,
        mataKuliah: "Pemeliharaan & Optimalisasi Aset Daerah",
        sks: 3,
        dosen: "Wahyu Tri Nugroho, S.E., M.Ec.",
        jadwal: "03 Sep 2026 07:30 - 10:00",
        ruang: "N 311",
        tipe: "luring",
        aksi: "recorded",
      },
      {
        id: 6,
        kelas: "4 Manajemen Aset-4",
        prodi: prodiFormatted,
        mataKuliah: "Manajemen Kekayaan Negara Dipisahkan",
        sks: 2,
        dosen: "Tri Haryanto, S.E., Ak.",
        jadwal: "03 Sep 2026 10:30 - 13:00",
        ruang: "N 610",
        tipe: "luring",
        aksi: "recorded",
      },
      {
        id: 7,
        kelas: "4 Manajemen Aset-4",
        prodi: prodiFormatted,
        mataKuliah: "Studi Kelayakan Pemanfaatan Aset Publik",
        sks: 2,
        dosen: "Siti Rahmawati, S.E., M.Si.",
        jadwal: "03 Sep 2026 14:00 - 15:40",
        ruang: "N 214",
        tipe: "luring",
        aksi: "recorded",
      },
    ];
  }

  // Default: Manajemen Keuangan Negara
  return weeklySchedule.map((item) => ({
    ...item,
    prodi: prodiFormatted,
  }));
};

