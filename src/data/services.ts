import jobIconRaw from "../assets/icons/job-title-icon.svg?raw";
import companyIconRaw from "../assets/icons/company-icon.svg?raw";
import locationIconRaw from "../assets/icons/location-icon.svg?raw";
import { sanitizeToOutline } from "../lib/svg";

export const servicesIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const services = [
  {
    title: "Landing Page",
    category: "Branding & Marketing",
    bestFor: "Company Profile, UMKM, Portfolio",
    description:
      "Website ultra-cepat yang dirancang khusus untuk konversi. Dibangun dengan Astro & Tailwind untuk memastikan skor SEO 100/100, load time di bawah 1 detik, dan tampilan sempurna di semua perangkat.",
    technologies: [
      "Astro",
      "Tailwind CSS",
      "SEO Optimization",
      "Responsive Design",
    ],
  },
  {
    title: "Fullstack Website",
    category: "Sistem Bisnis Custom",
    bestFor: "SaaS, CRM, ERP, Dashboard Admin",
    description:
      "Solusi digital end-to-end untuk masalah bisnis yang kompleks. Kami membangun sistem custom dengan backend yang aman, manajemen database skalabel, dan antarmuka (UI) yang interaktif untuk operasional bisnis Anda.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Auth",
    ],
  },
  {
    title: "Business Automation (n8n)",
    category: "Efisiensi Operasional",
    bestFor: "Notifikasi WA, Sinkronisasi Data, Laporan Otomatis",
    description:
      "Hilangkan pekerjaan manual yang membosankan. Kami menghubungkan aplikasi Anda (Google Sheets, Email, WhatsApp, Trello) untuk bekerja otomatis 24/7. Hemat waktu dan kurangi human error secara signifikan.",
    technologies: [
      "n8n",
      "Webhooks",
      "REST API",
      "WhatsApp API",
      "Google Workspace",
    ],
  },
  {
    title: "AI Solutions",
    category: "Data & Smart System",
    bestFor: "Prediksi Penjualan, Klasifikasi Gambar, Analisis Tren",
    description:
      "Ubah data menjadi keputusan cerdas. Layanan mencakup pembuatan model Machine Learning untuk prediksi tren bisnis, klasifikasi data otomatis, hingga Computer Vision untuk mendeteksi objek dari gambar/CCTV.",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "Pandas",
      "Scikit-learn",
    ],
  },
];

export type WorkItem = (typeof services)[number];
