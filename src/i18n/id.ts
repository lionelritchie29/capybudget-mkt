import type { Dictionary } from './en';

/**
 * Bahasa Indonesia UI copy. Same keys as en.ts. Written to the bahasa-indonesia-plain skill
 * (.cursor/skills/bahasa-indonesia-plain/SKILL.md): plain, warm, standard Indonesian, "kamu" for the
 * reader and "kami" for the team, sentence case, no heading punctuation, Rp without a space.
 */
const list = (items: string[]) =>
  items.length > 2 ? `${items.slice(0, -1).join(', ')}, dan ${items[items.length - 1]}` : items.join(' dan ');

const id: Dictionary = {
  meta: {
    homeTitle: 'Capybudget · Atur uang dengan metode amplop, tanpa repot',
    description:
      'Atur uang dengan metode amplop. Beri setiap rupiah tugas, lihat berapa yang aman dibelanjakan, dan simpan sisanya dengan tenang.',
    ogLocale: 'id_ID',
    ogImage: '/og-id.png',
  },
  skipToContent: 'Langsung ke konten',
  nav: {
    label: 'Navigasi utama',
    home: 'Beranda Capybudget',
    links: [
      { href: '/features', label: 'Fitur' },
      { href: '/#how-it-works', label: 'Cara kerja' },
      { href: '/#faq', label: 'Tanya jawab' },
    ],
    signIn: 'Masuk',
    join: { before: 'Gabung', optional: ' daftar tunggu', after: '', optionalFrom: 'lg' },
    menu: 'Menu',
  },
  language: { name: 'Bahasa Indonesia', short: 'ID', switchTo: 'Baca dalam Bahasa Indonesia' },
  theme: { toLight: 'Ganti ke tema terang', toDark: 'Ganti ke tema gelap', label: 'Tema' },
  themeOptions: { system: 'Ikuti sistem', light: 'Terang', dark: 'Gelap' },
  footer: {
    tagline: 'Budget metode amplop yang tenang. Dibuat sambil sering berendam.',
    label: 'Footer',
    join: 'Gabung ke daftar tunggu',
    signIn: 'Masuk',
  },
  waitlist: {
    emailLabel: 'Alamat email',
    placeholder: 'nama@email.com',
    submit: 'Gabung ke daftar tunggu',
    submitting: 'Mendaftarkan…',
    hint: 'Kami hanya mengirim satu email, yaitu saat budget kamu siap.',
    success: 'Kamu sudah masuk daftar tunggu. Cek email kamu, ada salam dari si kapibara.',
    errors: {
      invalid: 'Format email ini belum sesuai. Contohnya: nama@email.com.',
      tooLong: 'Alamat email ini terlalu panjang. Coba gunakan alamat email lain.',
      network: 'Kami tidak bisa terhubung ke server. Periksa koneksi internet kamu, lalu coba lagi.',
      unavailable: 'Kami belum bisa mencatat email kamu sekarang. Silakan coba lagi dalam satu menit.',
    },
  },
  waitlistPage: {
    title: 'Daftar tunggu',
    joined: 'Kamu sudah masuk daftar tunggu',
    join: 'Gabung ke daftar tunggu',
    back: 'Kembali ke beranda',
  },
  notFound: {
    title: 'Halaman tidak ditemukan',
    heading: 'Halaman ini sedang berendam',
    body: 'Kami tidak menemukan halaman yang kamu cari. Kalau kamu ingin membuka budget kamu, sekarang tempatnya di aplikasi.',
    home: 'Kembali ke beranda',
    app: 'Buka aplikasi',
  },
  hero: {
    eyebrow: 'Kami membuka akses bertahap lewat daftar tunggu',
    titleLead: 'Setiap rupiah punya tugas,',
    titleAccent: 'kamu tinggal bersantai',
    body: 'Capybudget membantu kamu mengatur uang yang benar-benar ada dengan metode amplop. Rencanakan bulan ini dan lihat berapa yang aman dibelanjakan. Sisanya bisa kamu simpan dengan tenang.',
    mockLabel: (d) =>
      `Layar Rencana Capybudget untuk ${d.month}: ${d.ready} siap dialokasikan, serta kategori ${list(d.groups)} dengan jumlah yang dialokasikan, aktivitas, dan saldo tersedia.`,
  },
  principles: [
    {
      title: 'Hanya uang yang benar-benar ada',
      body: 'Kamu mengatur uang yang kamu punya hari ini, bukan uang yang baru akan datang.',
    },
    {
      title: 'Kelebihan belanja tetap tercatat',
      body: 'Kategori yang minus tetap minus sampai kamu menutupnya. Jatah bulan depan tidak ikut berkurang diam-diam.',
    },
    {
      title: 'Tanpa urusan kartu kredit',
      body: 'Cukup uang tunai, rekening, dan tabungan. Tidak ada kategori pembayaran kartu kredit yang harus kamu pantau.',
    },
    {
      title: 'Mata uang dan waktumu sendiri',
      body: 'Setiap budget punya mata uang dan zona waktunya sendiri. Jadi, "hari ini" selalu sesuai waktu di tempat kamu.',
    },
  ],
  bento: {
    eyebrow: 'Satu tempat yang tenang',
    title: 'Alat lengkap untuk budget amplop, tanpa repot',
    body: 'Isinya hanya yang kamu perlukan untuk rencana bulanan. Tidak ada fitur yang membuat kamu merasa tertinggal.',
    seeAll: 'Lihat semua fitur',
  },
  howItWorks: {
    eyebrow: 'Cara kerja',
    title: 'Cukup tiga kebiasaan sederhana',
    body: 'Metode amplop yang sebenarnya: aturan sederhana untuk uang sungguhan.',
    steps: [
      {
        title: 'Pertama, alokasikan uang yang ada',
        body: 'Uang yang masuk langsung tercatat di "Siap dialokasikan". Bagikan ke kategori sampai angkanya nol.',
      },
      {
        title: 'Kedua, belanja dari kategori',
        body: 'Setiap transaksi mengurangi saldo kategorinya. Hijau berarti uangnya masih ada. Kuning berarti target belum terpenuhi.',
      },
      {
        title: 'Terakhir, tutupi yang minus',
        body: 'Kalau belanja melebihi jatah, warna merah menunjukkan kategorinya. Pindahkan uang dari kategori lain, lalu lanjutkan.',
      },
    ],
  },
  mobile: { eyebrow: 'Di ponsel kamu' },
  claude: { eyebrow: 'Bisa dipakai dengan Claude' },
  faq: {
    eyebrow: 'Tanya jawab',
    title: 'Hal yang perlu kamu tahu',
    items: [
      {
        q: 'Apa itu metode amplop',
        a: 'Kamu membagi uang yang kamu punya ke beberapa kategori, atau "amplop", sebelum membelanjakannya. Kalau satu amplop habis, kamu berhenti belanja atau memindahkan uang dari amplop lain. Capybudget mencatat semuanya, jadi isi setiap amplop selalu tepat.',
      },
      {
        q: 'Cara mendapat akses',
        a: 'Gabung ke daftar tunggu. Kami membuka akses sedikit demi sedikit dan akan mengirim email saat budget kamu siap. Gratis, cukup dengan satu alamat email.',
      },
      {
        q: 'Koneksi ke rekening bank',
        a: 'Belum bisa. Kamu mencatat transaksi sendiri. Caranya cepat, dan banyak orang merasa cara ini membantu mereka tetap disiplin. Untuk transaksi rutin, atur jadwalnya sekali saja. Kamu juga bisa meminta Claude mencatatnya.',
      },
      {
        q: 'Pindah dari YNAB',
        a: 'Bisa. Kami memindahkan akun, grup kategori, daftar penerima, semua transaksi (termasuk transaksi yang dibagi dan transfer), serta alokasi setiap bulan. Satu perbedaannya: Capybudget memang tidak punya akun kartu kredit atau kategori pembayaran kartu kredit.',
      },
      {
        q: 'Alasan tidak ada kartu kredit',
        a: 'Kartu kredit adalah bagian yang paling sering membuat metode amplop membingungkan. Capybudget fokus pada uang tunai, rekening, tabungan, dan akun pantauan. Kelebihan belanja tetap tercatat di kategorinya sampai kamu menutupnya.',
      },
      {
        q: 'Mata uang yang didukung',
        a: 'Setiap budget punya mata uangnya sendiri, termasuk mata uang tanpa desimal seperti rupiah dan yen Jepang. Setiap budget juga punya zona waktunya sendiri. Jadi, pergantian bulan mengikuti kalender kamu, bukan kalender server.',
      },
      {
        q: 'Aplikasi di ponsel',
        a: 'Capybudget adalah aplikasi web yang bisa kamu tambahkan ke layar utama di iOS dan Android. Aplikasinya tampil layar penuh, tombolnya pas untuk ponsel, dan kamu bisa menggeser layar untuk kembali. Rasanya seperti aplikasi biasa, karena memang aplikasi.',
      },
      {
        q: 'Cara kerja integrasi dengan Claude',
        a: 'Capybudget punya server MCP. Tambahkan ke Claude.ai atau Claude Code, lalu Claude bisa membaca budget kamu, menambah transaksi, memindahkan uang, dan lainnya. Sebelum menghapus, mengedit banyak transaksi sekaligus, atau merekonsiliasi, Claude selalu meminta persetujuan kamu.',
      },
    ],
  },
  finalCta: {
    title: 'Atur budget dengan lebih tenang',
    body: 'Gabung ke daftar tunggu. Kami akan mengabari kamu saat giliranmu tiba.',
  },
  featuresPage: {
    title: 'Fitur',
    description:
      'Semua fitur Capybudget: rencana bulanan, target, pencatatan transaksi yang cepat dengan pembagian dan label, transaksi terjadwal, laporan, rekonsiliasi, riwayat urungkan, impor dari YNAB, aplikasi ponsel, dan Claude.',
    eyebrow: 'Fitur',
    heading: 'Semua fitur untuk budget yang tenang',
    body: 'Tur singkat Capybudget, dari rencana bulanan sampai ponsel di saku kamu.',
    toc: 'Di halaman ini',
    cardLabel: (title) => `${title} di Capybudget`,
    planLabel: 'Layar Rencana: Siap dialokasikan, kategori bulan ini, dan saldo tersedianya.',
    targetsLabel: (d) =>
      `Layar Rencana dengan kategori ${d.category} terpilih. Panelnya menampilkan saldo tersedia, target bulanan ${d.target} yang masih kurang ${d.gap}, dan sebuah catatan.`,
    registerLabel: (d) =>
      `Daftar transaksi akun ${d.account}: saldo, transaksi terjadwal, belanja di ${d.splitPayee} yang dibagi ke dua kategori, sebuah transfer, dan transaksi yang sudah direkonsiliasi.`,
    reportsLabel: 'Laporan rincian pengeluaran 6 bulan terakhir: grafik donat dan tabel grup kategori.',
  },
  og: {
    titleLead: 'Setiap rupiah punya tugas,',
    titleAccent: 'kamu tinggal bersantai',
    tagline: 'Budget metode amplop',
  },
  email: {
    subject: 'Kamu sudah masuk daftar tunggu Capybudget',
    heading: 'Kamu sudah masuk daftar tunggu',
    body: 'Terima kasih sudah bergabung. Kami membuka akses sedikit demi sedikit dan akan mengirim email saat budget kamu siap.',
    textSignoff: 'Sambil menunggu, beri setiap rupiah tugas dan luangkan waktu untuk bersantai.',
    htmlSignoff: 'Sambil menunggu, luangkan waktu untuk bersantai.',
    signature: 'Si kapibara dari Capybudget',
    readyAmount: 'Rp0',
    readyCaption: 'Siap dialokasikan · semua rupiah sudah punya tugas',
    footer: (link) =>
      `Kamu menerima email ini karena alamat ini didaftarkan di ${link}. Kalau bukan kamu yang mendaftar, abaikan saja email ini. Kami tidak akan mengirim email lagi.`,
  },

  app: {
    nav: { plan: 'Rencana', reports: 'Laporan', transactions: 'Transaksi', accounts: 'Akun', settings: 'Pengaturan' },
    addAccount: 'Tambah akun',
    budget: 'Budget',
    today: 'Hari ini',
    all: 'Semua',
    readyToAssign: 'Siap dialokasikan',
    assign: 'Alokasikan',
    overspent: (n) => `${n} minus`,
    underfunded: (n) => `${n} kurang dana`,
    overfunded: 'Lebih dana',
    categoryGroup: 'Grup kategori',
    undo: 'Urungkan',
    redo: 'Ulangi',
    moves: 'Mutasi',
    columns: { category: 'Kategori', assigned: 'Dialokasikan', activity: 'Aktivitas', available: 'Tersedia' },
    panel: {
      availableBalance: 'Saldo tersedia',
      leftOver: 'Sisa dari bulan lalu',
      assignedThisMonth: 'Dialokasikan bulan ini',
      spending: 'Pengeluaran',
      target: 'Target',
      setAside: { before: 'Sisihkan ', after: ' setiap bulan' },
      needed: { before: 'Butuh ', after: ' lagi bulan ini' },
      assign: (amount) => `Alokasikan ${amount}`,
      snooze: 'Tunda bulan ini',
      editTarget: 'Ubah target',
      note: 'Catatan',
    },
    moveMoney: {
      title: 'Pindahkan uang',
      move: 'Jumlah',
      submit: 'Pindahkan',
      to: 'Ke',
      cancel: 'Batal',
      recentMoves: 'Mutasi terakhir',
      filters: ['Semua', 'Dipindah', 'Dialokasikan'],
      assigned: 'Dialokasikan',
      removed: 'Dikurangi',
    },
    register: {
      cleared: { label: 'Saldo terkonfirmasi', short: 'Terkonfirmasi' },
      uncleared: { label: 'Saldo tertunda', short: 'Tertunda' },
      working: { label: 'Saldo berjalan', short: 'Berjalan' },
      editAccount: 'Ubah akun',
      reconcile: 'Rekonsiliasi',
      add: 'Tambah',
      addSuffix: ' transaksi',
      needsCategoryCount: (n) => `${n} perlu kategori`,
      view: 'Tampilan:',
      thisMonth: 'Bulan ini',
      search: (account) => `Cari di ${account}`,
      headers: {
        date: 'Tanggal',
        payee: 'Penerima',
        category: 'Kategori',
        memo: 'Memo',
        outflow: 'Keluar',
        inflow: 'Masuk',
      },
      clearedMark: 'C',
      upcoming: 'Transaksi mendatang',
      needsCategory: 'Perlu kategori',
      split: 'Dibagi',
    },
    reconcile: {
      title: 'Rekonsiliasi akun',
      question: { before: 'Saldo ', middle: ' kamu sekarang ', after: '?' },
      hint: 'Ini saldo terkonfirmasi. Transaksi tertunda tidak dihitung dan tidak akan dikunci.',
      no: 'Tidak',
      yes: 'Ya, rekonsiliasi',
      done: (n) => `${n} transaksi sudah direkonsiliasi.`,
    },
    reports: {
      title: 'Laporan',
      tabs: ['Pengeluaran', 'Kekayaan bersih', 'Pemasukan dan pengeluaran'],
      accounts: 'Akun',
      categories: 'Kategori',
      breakdown: 'Rincian',
      trends: 'Tren',
      totalSpending: 'Total pengeluaran',
      monthlyAverage: 'Rata-rata per bulan',
      categoryGroup: 'Grup kategori',
      amount: 'Jumlah',
      share: 'Porsi',
      total: 'Total',
    },
    undoCard: { title: 'Urungkan perubahan transaksi', outflow: 'Keluar', category: 'Kategori' },
    phoneLabel:
      'Capybudget di ponsel: layar Rencana dengan saldo Siap dialokasikan dan saldo setiap kategori, serta tab navigasi di bagian bawah.',
    chat: {
      label:
        'Percakapan dengan Claude. Claude membaca budget di Capybudget untuk menjawab pertanyaan soal pengeluaran, lalu meminta persetujuan sebelum menghapus transaksi ganda.',
      question: 'Berapa pengeluaran kita untuk makan di luar bulan ini?',
      answer: (d) => ({
        a: ` untuk ${d.category} di bulan ${d.month.split(' ')[0]}. Jumlah ini lebih `,
        b: ` dari yang kamu alokasikan. Saya juga menemukan ${d.count} transaksi ${d.payee} yang tampaknya tercatat dua kali.`,
      }),
      followUp: 'Hapus transaksi yang ganda.',
      approvalTitle: 'Capybudget meminta persetujuan',
      approvalBody: (n) =>
        `Hapus ${n} transaksi? Jika ada transfer di antaranya, pasangan transfernya juga ikut terhapus.`,
      cannotUndo: 'Tindakan ini tidak bisa diurungkan.',
      approveHint: 'Centang untuk menyetujui, lalu pilih Terima',
      accept: 'Terima',
      decline: 'Tolak',
    },
  },
};

export default id;
