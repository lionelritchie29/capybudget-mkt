import type { Locale } from '../i18n/config';

/**
 * Feature copy, shared by the home page bento (title + blurb) and /features (everything).
 * Both locales list the same ids in the same order; only claim what the app actually does.
 */
export type Feature = {
  id: string;
  title: string;
  blurb: string;
  heading: string;
  body: string;
  points: string[];
};

const en: Feature[] = [
  {
    id: 'plan',
    title: 'Plan the month',
    blurb: 'Assign the money you have to categories. Move it around when life happens; every move is logged.',
    heading: 'A plan made of money you already have',
    body: "Every dollar that lands in an account shows up in Ready to Assign. Give it a job (rent, groceries, that trip) and you'll always know what's safe to spend.",
    points: [
      'Assign, move, and cover overspending in a couple of clicks',
      'Recent Moves keeps a timestamped trail of where money went',
      'Filter to just the underfunded or overspent categories',
      'Overspending stays in its category until you cover it, never quietly eating next month',
    ],
  },
  {
    id: 'targets',
    title: 'Targets and notes',
    blurb:
      'Set aside a monthly amount per category. See what is underfunded at a glance, or snooze a target for a month.',
    heading: 'Targets that nudge, not nag',
    body: 'Give a category an amount to set aside every month. Capybudget shows how far along you are and tops up every underfunded category in one go.',
    points: [
      'Yellow means a target still needs money; green means done',
      'Snooze a target for a month when it can wait',
      'Notes on any category, for the "why" behind the number',
      'Assign to all underfunded categories at once',
    ],
  },
  {
    id: 'transactions',
    title: 'Splits and tags',
    blurb: 'Split one receipt across categories and tag what matters, all in a fast keyboard-friendly register.',
    heading: 'A register that keeps up with you',
    body: 'Enter transactions as quickly as you can type. Payees, categories and dates autocomplete, and bulk edits take a single selection.',
    points: [
      'Split a transaction across as many categories as you need',
      'Tag a memo with [trip], [work] or [reimburse] and search by it later',
      'Search, date ranges and bulk recategorize',
      'Transfers between accounts post both sides for you',
    ],
  },
  {
    id: 'scheduled',
    title: 'Scheduled transactions',
    blurb: 'Rent, salary and subscriptions enter themselves on time, transfers included.',
    heading: 'Recurring money, on autopilot',
    body: 'Set up anything that repeats and Capybudget enters it on the day, in your time zone, so your plan is never a step behind.',
    points: [
      'Once, weekly, every other week, twice a month, monthly, yearly and more',
      'Scheduled transfers between accounts',
      'Upcoming entries show in the register before they post',
    ],
  },
  {
    id: 'reports',
    title: 'Reports',
    blurb: 'Spending by category, income vs. expense and net worth, with every number one click from its transactions.',
    heading: 'Reports that answer the actual question',
    body: 'See where the money went, how this month compares, and whether you are getting ahead. Click any slice or bar to see the transactions behind it.',
    points: [
      'Spending by category, as a breakdown or a trend',
      'Income vs. expense by month',
      'Net worth over time',
      'Filter by account, category and date range',
    ],
  },
  {
    id: 'reconcile',
    title: 'Reconcile',
    blurb: 'Match your bank balance in seconds. A red dot flags accounts with uncleared transactions.',
    heading: 'Trust every balance',
    body: 'Reconcile an account against your statement, and Capybudget locks what matches. If it is off, it posts one adjustment so you can move on.',
    points: [
      'Cleared and uncleared at a glance',
      'One-step reconcile with an optional adjustment',
      'Reconciled transactions are protected from accidental edits',
    ],
  },
  {
    id: 'undo',
    title: 'Undo anything',
    blurb: 'Assigned to the wrong category? Deleted the wrong row? Undo and redo cover it.',
    heading: 'Change your mind freely',
    body: 'Every budget change goes into a history you can step back through, so trying things is never risky.',
    points: [
      'Undo and redo for assignments, moves, edits and deletes',
      'A preview of what each undo will change',
      'Keyboard shortcuts throughout',
    ],
  },
  {
    id: 'ynab',
    title: 'Coming from YNAB?',
    blurb: 'We bring your accounts, categories, payees and full transaction history across when we set you up.',
    heading: 'Bring your YNAB history',
    body: 'Capybudget speaks envelope budgeting natively, so your YNAB budget comes across as-is. When your spot opens, we run the import for you: accounts, category groups, payees, every transaction and every month of assignments.',
    points: [
      'Full history, not just balances',
      'Splits and transfers preserved',
      'Your plan picks up right where you left off',
    ],
  },
  {
    id: 'mobile',
    title: 'On your phone',
    blurb: 'Add it to your home screen for a full-screen app with big tap targets and swipe-back.',
    heading: 'Pocket-sized, not cut down',
    body: 'Capybudget installs to your home screen and behaves like a native app: full screen, swipe back, pull to refresh, sheets that follow the keyboard.',
    points: [
      'Install from the browser on iOS and Android',
      'Phone-sized controls and 44px tap targets',
      'Light and dark, following your system',
    ],
  },
  {
    id: 'claude',
    title: 'Works with Claude',
    blurb:
      'Connect Claude to ask about your budget, file receipts and tidy categories, with you approving every change.',
    heading: 'Ask Claude about your budget',
    body: 'Capybudget has a built-in MCP server, so Claude (in Claude.ai or Claude Code) can read your budget and make changes for you. Anything destructive asks for your approval first.',
    points: [
      '"How much did we spend eating out this quarter?"',
      '"Add this receipt and split it between groceries and household."',
      'Deletes, bulk edits and reconciles always need your OK',
    ],
  },
];

/**
 * Indonesian feature copy, written to .cursor/skills/bahasa-indonesia-plain/SKILL.md: points start
 * in lowercase and carry no full stop, titles and headings take no closing punctuation.
 */
const id: Feature[] = [
  {
    id: 'plan',
    title: 'Rencanakan bulan ini',
    blurb:
      'Alokasikan uang yang kamu punya ke setiap kategori. Pindahkan saat ada kebutuhan mendadak. Setiap perpindahan tercatat.',
    heading: 'Rencana dari uang yang sudah ada',
    body: 'Setiap rupiah yang masuk langsung muncul di "Siap dialokasikan". Beri tugas untuk uang itu, misalnya sewa, belanja dapur, atau liburan. Dengan begitu, kamu selalu tahu berapa yang aman dibelanjakan.',
    points: [
      'alokasikan, pindahkan, dan tutupi kelebihan belanja dengan beberapa klik',
      'riwayat mutasi mencatat ke mana uang berpindah, lengkap dengan waktunya',
      'tampilkan hanya kategori yang kurang dana atau minus',
      'kelebihan belanja tetap di kategorinya sampai kamu menutupnya, tanpa mengurangi jatah bulan depan',
    ],
  },
  {
    id: 'targets',
    title: 'Target dan catatan',
    blurb:
      'Sisihkan jumlah tertentu setiap bulan untuk tiap kategori. Lihat yang masih kurang dana, atau tunda target selama sebulan.',
    heading: 'Target yang mengingatkan, bukan menuntut',
    body: 'Tentukan jumlah yang ingin kamu sisihkan setiap bulan untuk sebuah kategori. Capybudget menunjukkan sejauh mana target itu terpenuhi. Kamu juga bisa mengisi semua kategori yang kurang dana sekaligus.',
    points: [
      'kuning berarti target masih butuh uang, hijau berarti sudah terpenuhi',
      'tunda target selama sebulan kalau memang bisa menunggu',
      'tambahkan catatan di kategori mana pun untuk mengingat alasannya',
      'alokasikan ke semua kategori yang kurang dana sekaligus',
    ],
  },
  {
    id: 'transactions',
    title: 'Bagi transaksi dan beri label',
    blurb:
      'Bagi satu struk ke beberapa kategori dan beri label pada yang penting. Semuanya di daftar transaksi yang cepat dan nyaman dipakai dengan keyboard.',
    heading: 'Pencatatan yang mengikuti kecepatan kamu',
    body: 'Catat transaksi secepat kamu mengetik. Penerima, kategori, dan tanggal terisi otomatis. Untuk mengubah banyak transaksi, cukup pilih semuanya sekaligus.',
    points: [
      'bagi satu transaksi ke kategori sebanyak yang kamu perlukan',
      'beri label di memo, misalnya [liburan], [kantor], atau [klaim], lalu cari lagi nanti',
      'cari transaksi, pilih rentang tanggal, dan ganti kategori sekaligus',
      'transfer antarakun otomatis tercatat di kedua akun',
    ],
  },
  {
    id: 'scheduled',
    title: 'Transaksi terjadwal',
    blurb: 'Sewa, gaji, dan langganan tercatat sendiri tepat waktu, termasuk transfer.',
    heading: 'Uang rutin tercatat otomatis',
    body: 'Atur transaksi yang berulang sekali saja. Capybudget mencatatnya pada harinya, sesuai zona waktu kamu. Jadi, rencana kamu selalu terkini.',
    points: [
      'sekali, mingguan, dua minggu sekali, dua kali sebulan, bulanan, tahunan, dan lainnya',
      'transfer terjadwal antarakun',
      'transaksi mendatang sudah terlihat di daftar sebelum tercatat',
    ],
  },
  {
    id: 'reports',
    title: 'Laporan',
    blurb:
      'Pengeluaran per kategori, pemasukan dan pengeluaran, serta kekayaan bersih. Klik angka mana pun untuk melihat transaksinya.',
    heading: 'Laporan yang menjawab pertanyaan kamu',
    body: 'Lihat ke mana uang kamu pergi, bandingkan bulan ini dengan bulan lalu, dan cek apakah keuangan kamu membaik. Klik bagian grafik mana pun untuk melihat transaksi di baliknya.',
    points: [
      'pengeluaran per kategori, sebagai rincian atau tren',
      'pemasukan dan pengeluaran per bulan',
      'kekayaan bersih dari waktu ke waktu',
      'saring berdasarkan akun, kategori, dan rentang tanggal',
    ],
  },
  {
    id: 'reconcile',
    title: 'Rekonsiliasi',
    blurb: 'Cocokkan dengan saldo bank dalam hitungan detik. Titik merah menandai akun yang punya transaksi tertunda.',
    heading: 'Percaya pada setiap saldo',
    body: 'Cocokkan akun dengan mutasi rekening, lalu Capybudget mengunci transaksi yang sudah sesuai. Kalau ada selisih, Capybudget membuat satu penyesuaian supaya kamu bisa lanjut.',
    points: [
      'transaksi terkonfirmasi dan tertunda terlihat jelas',
      'rekonsiliasi dalam satu langkah, dengan penyesuaian jika perlu',
      'transaksi yang sudah direkonsiliasi terlindung dari perubahan yang tidak disengaja',
    ],
  },
  {
    id: 'undo',
    title: 'Urungkan apa saja',
    blurb: 'Salah memilih kategori? Salah menghapus baris? Kamu bisa mengurungkan atau mengulanginya.',
    heading: 'Bebas berubah pikiran',
    body: 'Setiap perubahan budget masuk ke riwayat yang bisa kamu telusuri mundur. Jadi, mencoba sesuatu tidak pernah berisiko.',
    points: [
      'urungkan dan ulangi alokasi, pemindahan, perubahan, dan penghapusan',
      'lihat pratinjau perubahan sebelum kamu mengurungkannya',
      'pintasan keyboard di semua bagian',
    ],
  },
  {
    id: 'ynab',
    title: 'Pindah dari YNAB',
    blurb:
      'Saat menyiapkan budget kamu, kami memindahkan akun, kategori, daftar penerima, dan seluruh riwayat transaksi.',
    heading: 'Bawa riwayat YNAB kamu',
    body: 'Capybudget memakai metode amplop yang sama, jadi budget YNAB kamu pindah apa adanya. Saat giliranmu tiba, kami yang menjalankan impornya: akun, grup kategori, penerima, semua transaksi, dan alokasi setiap bulan.',
    points: [
      'riwayat lengkap, bukan hanya saldo',
      'transaksi yang dibagi dan transfer tetap utuh',
      'rencana kamu berlanjut persis dari titik terakhir',
    ],
  },
  {
    id: 'mobile',
    title: 'Di ponsel kamu',
    blurb: 'Tambahkan ke layar utama untuk aplikasi layar penuh dengan tombol besar dan gerakan geser untuk kembali.',
    heading: 'Pas di saku, fiturnya tetap lengkap',
    body: 'Pasang Capybudget di layar utama, dan aplikasinya bekerja seperti aplikasi biasa: layar penuh, geser untuk kembali, tarik untuk memuat ulang, dan panel yang menyesuaikan diri dengan keyboard.',
    points: [
      'pasang langsung dari browser di iOS dan Android',
      'tombol seukuran ponsel dengan area sentuh 44 piksel',
      'tema terang dan gelap yang mengikuti pengaturan sistem',
    ],
  },
  {
    id: 'claude',
    title: 'Bisa dipakai dengan Claude',
    blurb:
      'Hubungkan Claude untuk bertanya soal budget kamu, mencatat struk, dan merapikan kategori. Kamu tetap menyetujui setiap perubahan.',
    heading: 'Tanya Claude soal budget kamu',
    body: 'Capybudget punya server MCP bawaan. Claude, di Claude.ai atau Claude Code, bisa membaca budget kamu dan mengubahnya untukmu. Sebelum menghapus data, Claude selalu meminta persetujuanmu.',
    points: [
      '"Berapa pengeluaran kita untuk makan di luar kuartal ini?"',
      '"Catat struk ini dan bagi antara belanja dapur dan rumah tangga."',
      'menghapus, mengubah banyak transaksi, dan rekonsiliasi selalu butuh persetujuan kamu',
    ],
  },
];

export const FEATURES: Record<Locale, Feature[]> = { en, id };

export const feature = (locale: Locale, id: string) => {
  const found = FEATURES[locale].find((f) => f.id === id);
  if (!found) throw new Error(`Unknown feature: ${id}`);
  return found;
};
