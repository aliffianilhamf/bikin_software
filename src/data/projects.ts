import N8nIcon from "../assets/logos/N8n-logo.svg?raw";
import SupabaseIcon from "../assets/logos/Supabase-logo.svg?raw";
import PythonIcon from "../assets/logos/Python-logo.svg?raw";
import TailwindIcon from "../assets/logos/Tailwind-logo.svg?raw";
import LaravelIcon from "../assets/logos/Laravel-icon.svg?raw";
import NodejsIcon from "../assets/logos/Node.js.svg?raw";
import OpenCvIcon from "../assets/logos/OpenCV.svg?raw";

export const projects = [
  {
    title: "Ticketing Event",
    techStack: "Laravel • Breeze • Tailwind • MySQL • Docker",
    description:
      "Website Ticketing Event yang menyediakan informasi mengenai event - event terbaru serta terdapat fitur pemesanan tiket dengan mudah, sehingga meminimalisir kepalsuan tiket.",
    ctaText: "View Repo",
    ctaLink: "https://github.com/aliffianilhamf/ticketing-app",
    icon: LaravelIcon,
  },
  {
    title: "Job Search Tracker API",
    techStack: "Node.js • TypeScript • MongoDB • Express.js",
    description:
      "REST Full API untuk Job Management yang berguna untuk melakukan tracking job yang sudah di apply. Bisa menambahkan job yang akan kita apply, melihat status, mengganti status, dan membuat surat lamaran menggunakan AI berdasarkan deskripsi job yang diberikan.",
    ctaText: "View Repo",
    ctaLink: "https://github.com/aliffianilhamf/jobtracker",
    icon: NodejsIcon,
  },

  {
    title: "Recommender System for Coffee Shop",
    techStack: "Python • Django • SQLite3",
    description:
      "Dashboard informatif yang menyediakan berbagai insight dari data penjualan meliputi kapan toko paling ramai di datangi customer, produk apa yang sering dibeli, memberikan rekomendasi produk berdasarkan pola pembelian customer.",
    ctaText: "View Repo",
    ctaLink: "#",
    icon: PythonIcon,
  },
  {
    title: "Virtual Smart Assistant",
    techStack: "Python • OpenCV",
    description:
      "Sistem cerdas yang mampu menghitung durasi seseorang berada di dalam suatu ruangan based on image (kamera cctv). Sehingga dapat digunakan untuk lingkungan yang membutuhkan pengawasan cerdas.",
    ctaText: "View Repo",
    ctaLink: "https://github.com/aliffianilhamf/person_detection",
    icon: OpenCvIcon,
  },
  {
    title: "Deteksi Intrusi pada Edge Network",
    techStack: "Python • Scikit-Learn",
    description:
      "Sistem cerdas mendeteksi intrusi dengan akurat di lingkungan edge network dengan memanfaatkan ensemble learning. Sehingga mampu memberikan pencegahan jika terdapat serangan yang masuk.",
    ctaText: "View Repo",
    ctaLink: "#",
    icon: PythonIcon,
  },
  {
    title: "People Counting",
    techStack: "Python • Scikit-Learn • OpenCV",
    description:
      "Sistem cerdas yang mampu menghitung banyaknya orang di dalam ruangan dengan teknologi machine learning, sehingga cukup mengirimkan gambar, dan langsung dapat mendeteksi seberapa banyak orang yang terdapat pada gambar tersebut.",
    ctaText: "View Repo",
    ctaLink: "https://github.com/aliffianilhamf/People_Counting",
    icon: PythonIcon,
  },
];
