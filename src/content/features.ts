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

const id: Feature[] = [
  {
    id: 'plan',
    title: 'Rencanakan bulan ini',
    blurb:
      'Alokasikan uang yang kamu punya ke tiap kategori. Pindah-pindahkan kalau ada kebutuhan mendadak; semua tercatat.',
    heading: 'Rencana dari uang yang sudah ada',
    body: 'Setiap rupiah yang masuk ke rekening langsung muncul di Siap Dialokasikan. Kasih tugas (sewa, belanja dapur, liburan itu) dan kamu selalu tahu berapa yang aman dibelanjakan.',
    points: [
      'Alokasikan, pindahkan, dan tutupi overspending cukup dengan beberapa klik',
      'Mutasi Terakhir mencatat ke mana uang berpindah, lengkap dengan waktunya',
      'Saring untuk lihat kategori yang kurang dana atau minus saja',
      'Overspending tetap di kategorinya sampai kamu tutupi, nggak diam-diam motong jatah bulan depan',
    ],
  },
  {
    id: 'targets',
    title: 'Target dan catatan',
    blurb:
      'Sisihkan jumlah tertentu tiap bulan per kategori. Lihat yang masih kurang dana sekilas, atau tunda target sebulan.',
    heading: 'Target yang mengingatkan, bukan menuntut',
    body: 'Tentukan jumlah yang mau disisihkan tiap bulan untuk sebuah kategori. Capybudget menunjukkan sudah sejauh mana, dan bisa menambal semua kategori yang kurang dana sekaligus.',
    points: [
      'Kuning artinya target masih butuh uang; hijau artinya beres',
      'Tunda target sebulan kalau memang bisa menunggu',
      'Catatan di setiap kategori, untuk "alasan" di balik angkanya',
      'Alokasikan ke semua kategori yang kurang dana sekaligus',
    ],
  },
  {
    id: 'transactions',
    title: 'Split dan tag',
    blurb:
      'Bagi satu struk ke beberapa kategori dan tandai yang penting, di daftar transaksi yang cepat dan ramah keyboard.',
    heading: 'Pencatatan yang bisa ngikutin kamu',
    body: 'Catat transaksi secepat kamu mengetik. Penerima, kategori, dan tanggal terisi otomatis, dan edit massal cukup sekali pilih.',
    points: [
      'Split satu transaksi ke sebanyak mungkin kategori yang kamu perlu',
      'Tandai memo dengan [liburan], [kantor], atau [reimburse] lalu cari lagi nanti',
      'Pencarian, rentang tanggal, dan ganti kategori secara massal',
      'Transfer antar-akun otomatis tercatat di kedua sisi',
    ],
  },
  {
    id: 'scheduled',
    title: 'Transaksi terjadwal',
    blurb: 'Sewa, gaji, dan langganan tercatat sendiri tepat waktu, termasuk transfer.',
    heading: 'Uang rutin, jalan otomatis',
    body: 'Atur apa pun yang berulang dan Capybudget mencatatnya di harinya, sesuai zona waktumu, jadi rencanamu nggak pernah ketinggalan.',
    points: [
      'Sekali, mingguan, dua minggu sekali, dua kali sebulan, bulanan, tahunan, dan lainnya',
      'Transfer terjadwal antar-akun',
      'Transaksi mendatang sudah kelihatan di daftar sebelum tercatat',
    ],
  },
  {
    id: 'reports',
    title: 'Laporan',
    blurb:
      'Pengeluaran per kategori, pemasukan vs pengeluaran, dan kekayaan bersih. Tiap angka bisa diklik untuk lihat transaksinya.',
    heading: 'Laporan yang menjawab pertanyaanmu',
    body: 'Lihat ke mana uangmu pergi, bagaimana bulan ini dibanding sebelumnya, dan apakah kamu makin maju. Klik bagian grafik mana pun untuk lihat transaksi di baliknya.',
    points: [
      'Pengeluaran per kategori, dalam bentuk rincian atau tren',
      'Pemasukan vs pengeluaran per bulan',
      'Kekayaan bersih dari waktu ke waktu',
      'Saring berdasarkan akun, kategori, dan rentang tanggal',
    ],
  },
  {
    id: 'reconcile',
    title: 'Rekonsiliasi',
    blurb: 'Cocokkan dengan saldo bank dalam hitungan detik. Titik merah menandai akun yang punya transaksi tertunda.',
    heading: 'Yakin dengan setiap saldo',
    body: 'Rekonsiliasi akun dengan mutasi rekeningmu, dan Capybudget mengunci yang sudah cocok. Kalau ada selisih, cukup satu penyesuaian dan kamu bisa lanjut.',
    points: [
      'Transaksi terkonfirmasi dan tertunda kelihatan sekilas',
      'Rekonsiliasi sekali langkah, dengan penyesuaian kalau perlu',
      'Transaksi yang sudah direkonsiliasi aman dari edit nggak sengaja',
    ],
  },
  {
    id: 'undo',
    title: 'Bisa diurungkan',
    blurb: 'Salah alokasi kategori? Salah hapus baris? Tinggal undo atau redo.',
    heading: 'Bebas berubah pikiran',
    body: 'Setiap perubahan budget masuk ke riwayat yang bisa kamu telusuri mundur, jadi mencoba-coba nggak pernah berisiko.',
    points: [
      'Undo dan redo untuk alokasi, pemindahan, edit, dan hapus',
      'Pratinjau apa saja yang berubah di setiap undo',
      'Shortcut keyboard di mana-mana',
    ],
  },
  {
    id: 'ynab',
    title: 'Pindahan dari YNAB?',
    blurb: 'Akun, kategori, daftar penerima, dan seluruh riwayat transaksimu kami bawa waktu menyiapkan budget-mu.',
    heading: 'Bawa riwayat YNAB-mu',
    body: 'Capybudget memakai metode amplop yang sama, jadi budget YNAB-mu pindah apa adanya. Begitu giliranmu tiba, kami yang jalankan impornya: akun, grup kategori, penerima, semua transaksi, dan alokasi setiap bulan.',
    points: [
      'Riwayat lengkap, bukan cuma saldo',
      'Split dan transfer tetap utuh',
      'Rencanamu lanjut persis dari terakhir kamu tinggalkan',
    ],
  },
  {
    id: 'mobile',
    title: 'Di HP kamu',
    blurb: 'Tambahkan ke layar utama untuk aplikasi layar penuh dengan tombol yang besar dan swipe untuk kembali.',
    heading: 'Muat di saku, fiturnya nggak dipangkas',
    body: 'Capybudget bisa dipasang di layar utama dan terasa seperti aplikasi native: layar penuh, swipe untuk kembali, tarik untuk refresh, dan panel yang ikut naik bersama keyboard.',
    points: [
      'Pasang langsung dari browser di iOS dan Android',
      'Tombol seukuran HP dengan area sentuh 44px',
      'Tema terang dan gelap, mengikuti sistem',
    ],
  },
  {
    id: 'claude',
    title: 'Bisa bareng Claude',
    blurb:
      'Hubungkan Claude untuk tanya soal budget-mu, mencatat struk, dan merapikan kategori, dengan persetujuanmu di setiap perubahan.',
    heading: 'Tanya Claude soal budget-mu',
    body: 'Capybudget punya server MCP bawaan, jadi Claude (di Claude.ai atau Claude Code) bisa membaca budget-mu dan membuat perubahan untukmu. Apa pun yang sifatnya menghapus selalu minta persetujuanmu dulu.',
    points: [
      '"Kuartal ini kita habis berapa buat makan di luar?"',
      '"Catat struk ini dan split antara belanja dapur dan rumah tangga."',
      'Hapus, edit massal, dan rekonsiliasi selalu butuh OK darimu',
    ],
  },
];

export const FEATURES: Record<Locale, Feature[]> = { en, id };

export const feature = (locale: Locale, id: string) => {
  const found = FEATURES[locale].find((f) => f.id === id);
  if (!found) throw new Error(`Unknown feature: ${id}`);
  return found;
};
