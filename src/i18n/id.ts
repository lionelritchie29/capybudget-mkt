import type { Dictionary } from './en';

/**
 * Bahasa Indonesia UI copy: casual "kamu", the calm capybara voice, loanwords where Indonesians
 * actually use them (budget, waitlist, split, transfer). Same keys as en.ts.
 */
const list = (items: string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} dan ${items[items.length - 1]}` : (items[0] ?? '');

const id: Dictionary = {
  meta: {
    homeTitle: 'Capybudget · Atur uang dengan metode amplop, santai aja',
    description:
      'Budgeting metode amplop yang bikin tenang. Kasih tugas ke setiap rupiah, lihat berapa yang aman dibelanjakan, dan biar sisanya ikut berendam.',
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
      { href: '/#faq', label: 'FAQ' },
    ],
    signIn: 'Masuk',
    join: { before: 'Gabung', optional: ' waitlist', after: '' },
    menu: 'Menu',
  },
  language: { name: 'Bahasa Indonesia', short: 'ID', switchTo: 'Baca dalam Bahasa Indonesia' },
  theme: { toLight: 'Ganti ke tema terang', toDark: 'Ganti ke tema gelap', label: 'Tema' },
  themeOptions: { system: 'Ikuti sistem', light: 'Terang', dark: 'Gelap' },
  footer: {
    tagline: 'Budgeting metode amplop yang tenang. Dibuat sambil banyak berendam.',
    label: 'Footer',
    join: 'Gabung waitlist',
    signIn: 'Masuk',
  },
  waitlist: {
    emailLabel: 'Alamat email',
    placeholder: 'kamu@example.com',
    submit: 'Gabung waitlist',
    submitting: 'Sebentar…',
    hint: 'Tanpa spam. Cuma satu email waktu budget-mu sudah siap.',
    success: 'Kamu sudah masuk daftar. Cek inbox, ada salam dari si capybara.',
    errors: {
      invalid: 'Masukkan alamat email yang valid.',
      tooLong: 'Alamat email itu kepanjangan.',
      network: 'Nggak bisa terhubung ke server. Cek koneksimu, lalu coba lagi.',
      unavailable: 'Kami belum bisa menambahkanmu sekarang. Coba lagi sebentar lagi, ya.',
    },
  },
  waitlistPage: {
    title: 'Waitlist',
    joined: 'Kamu sudah masuk daftar',
    join: 'Gabung waitlist',
    back: 'Kembali ke beranda',
  },
  notFound: {
    title: 'Halaman tidak ditemukan',
    heading: 'Halaman ini lagi berendam',
    body: 'Kami nggak menemukan yang kamu cari. Kalau kamu mau buka budget-mu, sekarang tempatnya di aplikasi.',
    home: 'Kembali ke beranda',
    app: 'Buka aplikasi',
  },
  hero: {
    eyebrow: 'Akses dibuka bertahap lewat waitlist',
    titleLead: 'Kasih tugas ke setiap rupiah.',
    titleAccent: 'Lalu, santai aja.',
    body: 'Capybudget adalah aplikasi budget metode amplop yang tenang dan cepat, untuk uang yang benar-benar kamu punya. Rencanakan bulan ini, lihat berapa yang aman dibelanjakan, dan biar sisanya ikut berendam.',
    mockLabel: (d) =>
      `Layar Rencana Capybudget untuk ${d.month}: ${d.ready} siap dialokasikan, serta kategori ${list(d.groups)} dengan jumlah yang dialokasikan, aktivitas, dan saldo tersedia.`,
  },
  principles: [
    {
      title: 'Cuma uang yang beneran ada',
      body: 'Kamu nge-budget uang yang ada di rekening hari ini, bukan yang baru kamu harapkan.',
    },
    {
      title: 'Overspending tetap di tempatnya',
      body: 'Kategori yang minus tetap terbawa sampai kamu tutupi. Nggak diam-diam motong jatah bulan depan.',
    },
    {
      title: 'Tanpa ribet kartu kredit',
      body: 'Uang tunai, rekening, dan tabungan. Nggak ada kategori cicilan kartu yang harus terus dipantau.',
    },
    {
      title: 'Mata uangmu, harimu',
      body: 'Tiap budget punya mata uang dan zona waktunya sendiri, jadi "hari ini" ya hari ini versimu.',
    },
  ],
  bento: {
    eyebrow: 'Semuanya di satu tempat yang tenang',
    title: 'Semua fitur budget amplop. Tanpa stresnya.',
    body: 'Semua yang kamu butuhkan buat menjalankan rencana bulanan, tanpa fitur yang bikin kamu merasa ketinggalan.',
    seeAll: 'Lihat semua fitur',
  },
  howItWorks: {
    eyebrow: 'Cara kerja',
    title: 'Tiga kebiasaan. Udah, itu aja metodenya.',
    body: 'Budgeting metode amplop sebagaimana mestinya: aturan sederhana, dipakai untuk uang sungguhan.',
    steps: [
      {
        title: 'Alokasikan yang kamu punya',
        body: 'Uang yang masuk ke rekening langsung muncul di Siap Dialokasikan. Kasih kategori ke setiap rupiah sampai angkanya nol.',
      },
      {
        title: 'Belanja dari kategori',
        body: 'Setiap transaksi mengurangi saldo kategorinya. Hijau artinya masih ada uang buat dibelanjakan; kuning artinya target masih butuh tambahan.',
      },
      {
        title: 'Meleset? Santai',
        body: 'Kebablasan belanja? Warna merah nunjukin persis di mana. Pindahkan uang dari kategori lain buat nutupin, lalu lanjut lagi.',
      },
    ],
  },
  mobile: { eyebrow: 'Di HP kamu' },
  claude: { eyebrow: 'Bisa bareng Claude' },
  faq: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan, dijawab dengan santai',
    items: [
      {
        q: 'Apa itu budgeting metode amplop?',
        a: 'Kamu membagi uang yang kamu punya ke beberapa kategori ("amplop") sebelum dibelanjakan. Kalau satu amplop habis, kamu berhenti belanja atau pindahkan uang dari amplop lain. Capybudget yang urus pencatatannya, jadi isi tiap amplop selalu pas.',
      },
      {
        q: 'Gimana cara dapat akses?',
        a: 'Gabung waitlist. Kami membuka akses sedikit demi sedikit dan akan kirim email begitu budget-mu sudah disiapkan. Gratis, cukup modal satu alamat email.',
      },
      {
        q: 'Bisa terhubung ke rekening bank?',
        a: 'Belum. Kamu catat transaksi sendiri (cepat kok, dan banyak orang justru merasa itu yang bikin mereka tetap disiplin), atur transaksi terjadwal untuk yang rutin, atau minta Claude yang mencatatnya.',
      },
      {
        q: 'Aku pakai YNAB. Budget-ku bisa dipindah?',
        a: 'Bisa. Akun, grup kategori, daftar penerima (payee), semua transaksi (termasuk split dan transfer), dan alokasi setiap bulan ikut pindah. Satu bedanya: Capybudget memang sengaja nggak punya akun kartu kredit atau kategori pembayaran kartu kredit.',
      },
      {
        q: 'Kenapa nggak ada kartu kredit?',
        a: 'Urusan kartu kredit itu bagian yang paling sering bikin budget amplop jadi membingungkan. Capybudget fokus ke uang tunai, rekening, tabungan, dan akun pantauan, dan overspending tetap di kategorinya sampai kamu tutupi.',
      },
      {
        q: 'Mata uang apa saja yang didukung?',
        a: 'Tiap budget punya mata uangnya sendiri, termasuk yang tanpa desimal seperti rupiah dan yen Jepang, plus zona waktunya sendiri. Jadi pergantian bulan ikut kalendermu, bukan kalender server.',
      },
      {
        q: 'Ada aplikasi HP-nya?',
        a: 'Capybudget adalah web app yang bisa kamu tambahkan ke layar utama di iOS dan Android. Tampil layar penuh, tombolnya pas untuk HP, dan bisa swipe untuk kembali. Rasanya seperti aplikasi, karena memang aplikasi.',
      },
      {
        q: 'Integrasi dengan Claude-nya gimana?',
        a: 'Capybudget punya server MCP. Tambahkan ke Claude.ai atau Claude Code, lalu Claude bisa membaca budget-mu, menambah transaksi, memindahkan uang, dan lainnya. Menghapus, edit massal, dan rekonsiliasi selalu minta persetujuanmu dulu.',
      },
    ],
  },
  finalCta: {
    title: 'Siap punya budget yang lebih tenang?',
    body: 'Gabung waitlist, nanti kami kabari begitu giliranmu tiba.',
  },
  featuresPage: {
    title: 'Fitur',
    description:
      'Semua yang ada di Capybudget: rencana bulanan, target, pencatatan transaksi yang cepat dengan split dan tag, transaksi terjadwal, laporan, rekonsiliasi, undo, impor dari YNAB, aplikasi HP, dan Claude.',
    eyebrow: 'Fitur',
    heading: 'Semua yang dibutuhkan budget yang tenang',
    body: 'Tur singkat Capybudget, dari rencana bulanan sampai HP di sakumu.',
    toc: 'Di halaman ini',
    cardLabel: (title) => `${title} di Capybudget`,
    planLabel: 'Layar Rencana: Siap Dialokasikan, kategori bulan ini, dan saldo tersedianya.',
    targetsLabel: (d) =>
      `Layar Rencana dengan kategori ${d.category} dipilih: panelnya menampilkan saldo tersedia, target bulanan ${d.target} yang masih kurang ${d.gap}, dan sebuah catatan.`,
    registerLabel: (d) =>
      `Daftar transaksi akun ${d.account}: saldo, transaksi terjadwal yang akan datang, belanja di ${d.splitPayee} yang di-split, sebuah transfer, dan transaksi yang sudah direkonsiliasi.`,
    reportsLabel: 'Laporan rincian pengeluaran 6 bulan terakhir: grafik donat dan tabel grup kategori.',
  },
  og: {
    titleLead: 'Kasih tugas ke setiap rupiah.',
    titleAccent: 'Lalu, santai aja.',
    tagline: 'Budgeting metode amplop',
  },
  email: {
    subject: 'Kamu sudah masuk waitlist Capybudget',
    heading: 'Kamu sudah masuk daftar.',
    body: 'Makasih sudah gabung waitlist Capybudget. Kami membuka akses sedikit demi sedikit, dan akan kirim email begitu budget-mu siap.',
    textSignoff: 'Sambil menunggu: kasih tugas ke setiap rupiah, lalu berendam yang lama.',
    htmlSignoff: 'Sambil menunggu: berendam yang lama, ya.',
    signature: 'Si capybara dari Capybudget',
    readyAmount: 'Rp 0',
    readyCaption: 'Siap Dialokasikan · semua rupiah sudah punya tugas',
    footer: (link) =>
      `Kamu menerima email ini karena alamat ini dimasukkan di ${link}. Kalau itu bukan kamu, abaikan saja email ini dan kami nggak akan menghubungimu lagi.`,
  },

  app: {
    nav: { plan: 'Rencana', reports: 'Laporan', transactions: 'Transaksi', accounts: 'Akun', settings: 'Pengaturan' },
    addAccount: 'Tambah Akun',
    budget: 'Budget',
    today: 'Hari ini',
    all: 'Semua',
    readyToAssign: 'Siap Dialokasikan',
    assign: 'Alokasikan',
    overspent: (n) => `${n} Minus`,
    underfunded: (n) => `${n} Kurang dana`,
    overfunded: 'Lebih dana',
    categoryGroup: 'Grup Kategori',
    undo: 'Urungkan',
    redo: 'Ulangi',
    moves: 'Mutasi',
    columns: { category: 'Kategori', assigned: 'Dialokasikan', activity: 'Aktivitas', available: 'Tersedia' },
    panel: {
      availableBalance: 'Saldo Tersedia',
      leftOver: 'Sisa dari Bulan Lalu',
      assignedThisMonth: 'Dialokasikan Bulan Ini',
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
      recentMoves: 'Mutasi Terakhir',
      filters: ['Semua', 'Dipindah', 'Dialokasikan'],
      assigned: 'Dialokasikan',
      removed: 'Dikurangi',
    },
    register: {
      cleared: { label: 'Saldo Terkonfirmasi', short: 'Terkonfirmasi' },
      uncleared: { label: 'Saldo Tertunda', short: 'Tertunda' },
      working: { label: 'Saldo Berjalan', short: 'Berjalan' },
      editAccount: 'Ubah akun',
      reconcile: 'Rekonsiliasi',
      add: 'Tambah',
      addSuffix: ' Transaksi',
      needsCategoryCount: (n) => `${n} belum ada kategori`,
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
      needsCategory: 'Belum ada kategori',
      split: 'Split',
    },
    reconcile: {
      title: 'Rekonsiliasi akun',
      question: { before: 'Apakah saldo ', middle: ' kamu saat ini ', after: '?' },
      hint: 'Ini saldo terkonfirmasi. Transaksi tertunda tidak dihitung dan tidak akan dikunci.',
      no: 'Tidak',
      yes: 'Ya, rekonsiliasi',
      done: (n) => `${n} transaksi berhasil direkonsiliasi.`,
    },
    reports: {
      title: 'Laporan',
      tabs: ['Pengeluaran', 'Kekayaan Bersih', 'Pemasukan vs Pengeluaran'],
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
    undoCard: { title: 'Urungkan edit transaksi', outflow: 'Keluar', category: 'Kategori' },
    phoneLabel:
      'Capybudget di HP: layar Rencana dengan Siap Dialokasikan dan saldo tiap kategori, plus tab bar di bagian bawah.',
    chat: {
      label:
        'Percakapan dengan Claude: Claude membaca budget di Capybudget untuk menjawab pertanyaan soal pengeluaran, lalu minta persetujuan sebelum menghapus transaksi yang dobel.',
      question: 'Bulan ini kita udah habis berapa buat makan di luar?',
      answer: (d) => ({
        a: ` untuk ${d.category} di bulan ${d.month.split(' ')[0]}, lebih `,
        b: ` dari yang kamu alokasikan. Saya juga menemukan ${d.count} transaksi ${d.payee} yang sepertinya tercatat dua kali.`,
      }),
      followUp: 'Hapus yang dobel, ya.',
      approvalTitle: 'Capybudget minta persetujuan',
      approvalBody: (n) => `Hapus ${n} transaksi, termasuk sisi lain dari transfer di antaranya?`,
      cannotUndo: 'Tindakan ini tidak bisa diurungkan.',
      approveHint: 'Centang untuk menyetujui, lalu terima',
      accept: 'Terima',
      decline: 'Tolak',
    },
  },
};

export default id;
