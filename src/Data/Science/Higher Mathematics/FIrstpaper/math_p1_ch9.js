export const math_p1_ch9 = {
  id: "math-p1-9",
  paper: "উচ্চতর গণিত ১ম পত্র",
  chapterNo: "৯ম অধ্যায়",
  title: "অন্তরীকরণ",
  questions: [
    {
      id: "du_m1_9_1",
      question: "d/dx (xⁿ) এর সঠিক গাণিতিক সূত্র কোনটি?",
      options: ["n · xⁿ⁻¹", "xⁿ / n", "n · xⁿ", "(n - 1)xⁿ"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2014, 2018, 2021, 2024",
      explanation: "পাওয়ার রুল বা শক্তি সূত্র অনুযায়ী d/dx (xⁿ) = n · xⁿ⁻¹।"
    },
    {
      id: "du_m1_9_2",
      question: "d/dx (sin x) এর মান কত?",
      options: ["cos x", "-cos x", "sin x", "-sin x"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2016, 2019, 2022, 2025",
      explanation: "ত্রিকোণমিতিক ফাংশনের ডিফারেন্সিয়েশন সূত্র অনুযায়ী sin x এর অন্তরজ cos x।"
    },
    {
      id: "du_m1_9_3",
      question: "d/dx (ln x) এর মান কত?",
      options: ["1/x", "x", "e^x", "ln(x)"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2015, 2017, 2020, 23",
      explanation: "স্বাভাবিক লগারিদম ln x এর অন্তরজ বা ডেরিভেটিভ হলো 1/x।"
    },
    {
      id: "du_m1_9_4",
      question: "যদি y = uv (দুটি ফাংশনের গুণফল) হয়, তবে d/dx (uv) এর সঠিক রূপ কোনটি?",
      options: ["u(dv/dx) + v(du/dx)", "(du/dx)(dv/dx)", "u(dv/dx) - v(du/dx)", "u'v'"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2017, 20, 24",
      explanation: "গুণের সূত্র বা প্রোডাক্ট রুল অনুযায়ী d/dx(uv) = u(dv/dx) + v(du/dx)।"
    },
    {
      id: "du_m1_9_5",
      question: "d/dx (e^(3x)) এর মান কত?",
      options: ["3e^(3x)", "e^(3x)", "3xe^(3x)", "e^x / 3"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2018, 21, 25",
      explanation: "চেইন রুল বা শিকড় নিয়ম প্রয়োগ করে d/dx(e^(3x)) = e^(3x) · d/dx(3x) = 3e^(3x) পাওয়া যায়।"
    },
    {
      id: "du_m1_9_6",
      question: "কোনো ধ্রুবক সংখ্যা c এর অন্তরজ (d/dx (c)) এর মান কত?",
      options: ["0", "1", "c", "অসীম"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2016, 2019, 22",
      explanation: "ধ্রুবক রাশির পরিবর্তনের হার শূন্য হওয়ায় যেকোনো কনস্ট্যান্টের ডিফারেন্সিয়েশন 0 হয়।"
    },
    {
      id: "du_m1_9_7",
      question: "d/dx (tan x) এর মান কত?",
      options: ["sec² x", "cosec² x", "sec x tan x", "-sec² x"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2017, 2020, 23",
      explanation: "ট্যানজেন্ট ফাংশনের অন্তরজ হলো sec² x।"
    },
    {
      id: "du_m1_9_8",
      question: "y = f(x) বক্ররেখার যেকোনো বিন্দুতে স্পর্শকের ঢাল (Slope) নিচের কোনটির সমান?",
      options: ["dy/dx", "d²y/dx²", "∫ y dx", "y / x"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2015, 2021, 25",
      explanation: "কোনো বক্ররেখার যেকোনো বিন্দুতে প্রথম অন্তরজ dy/dx ওই বিন্দুতে অঙ্কিত স্পর্শকের ঢাল নির্দেশ করে।"
    },
    {
      id: "du_m1_9_9",
      question: "একটি ফাংশনের লঘিষ্ঠ বা সর্বোচ্চ মানের জন্য প্রয়োজনীয় শর্ত (First derivative test) কোনটি?",
      options: ["dy/dx = 0", "dy/dx > 0", "dy/dx < 0", "dy/dx = 1"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2018, 22",
      explanation: "সর্বোচ্চ বা সর্বনিম্ন মানের টার্নিং পয়েন্টে ঢাল বা প্রথম অন্তরজ dy/dx এর মান শূন্য হতে হয়।"
    },
    {
      id: "du_m1_9_10",
      question: "d/dx (a^x) (যেখানে a > 0 এবং a ≠ 1) এর মান কত?",
      options: ["a^x · ln(a)", "a^x / ln(a)", "x · a^(x-1)", "a^x"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2019, 23",
      explanation: "সূচকীয় ফাংশনের ডিফারেন্সিয়েশন সূত্র হলো d/dx(a^x) = a^x · ln(a)।"
    },
    {
      id: "du_m1_9_11",
      question: "d/dx (sec x) এর সঠিক মান কোনটি?",
      options: ["sec x tan x", "cosec x cot x", "-sec x tan x", "sec² x"],
      correctAnswer: 0,
      stars: "★★★★☆",
      repeatCount: "DU: 2012, 2016, 2020, 24",
      explanation: "sec x এর অন্তরজ বা ডেরিভেটিভ হলো sec x tan x।"
    },
    {
      id: "du_m1_9_12",
      question: "d/dx (sin⁻¹(x)) এর মান কত?",
      options: ["1 / √(1 - x²)", "-1 / √(1 - x²)", "1 / (1 + x²)", "-1 / (1 + x²)"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2017, 21",
      explanation: "বিপরীত ত্রিকোণমিতিক ফাংশনের অবকলন অনুযায়ী sin⁻¹(x) এর অন্তরজ 1 / √(1 - x²)।"
    },
    {
      id: "du_m1_9_13",
      question: "d/dx (tan⁻¹(x)) এর মান কত?",
      options: ["1 / (1 + x²)", "-1 / (1 + x²)", "1 / √(1 - x²)", "1 / (x √(x² - 1))"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2018, 21, 24",
      explanation: "tan⁻¹(x) এর অন্তরজ হলো 1 / (1 + x²)।"
    },
    {
      id: "du_m1_9_14",
      question: "যদি y = u / v (ভাগের নিয়ম বা Quotient rule) হয়, তবে dy/dx এর হর অংশটি কীরূপ হয়?",
      options: ["v²", "v", "2v", "v³"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2015, 20, 23",
      explanation: "ভাগের সূত্রে dy/dx = (v(du/dx) - u(dv/dx)) / v² হয়, অর্থাৎ হরে v² থাকে।"
    },
    {
      id: "du_m1_9_15",
      question: "d/dx (cos x) এর মান কত?",
      options: ["-sin x", "sin x", "cos x", "-cos x"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2017, 22, 25",
      explanation: "cos x এর ডিফারেন্সিয়েশন হলো -sin x।"
    },
    {
      id: "du_m1_9_16",
      question: "কোনো ফাংশনের বর্ধিষ্ণু (Increasing) হওয়ার শর্ত কোনটি?",
      options: ["dy/dx > 0", "dy/dx < 0", "dy/dx = 0", "d²y/dx² = 0"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2016, 20, 24",
      explanation: "প্রথম অন্তরজের মান ধনাত্মক (dy/dx > 0) হলে ফাংশনটি বর্ধিষ্ণু বা ক্রমবর্ধমান হয়।"
    },
    {
      id: "du_m1_9_17",
      question: "d/dx (cosec x) এর মান কোনটি?",
      options: ["-cosec x cot x", "cosec x cot x", "-sec x tan x", "cosec² x"],
      correctAnswer: 0,
      stars: "★★★★☆",
      repeatCount: "DU: 2014, 2018, 21, 24",
      explanation: "cosec x এর অন্তরজ হলো -cosec x cot x।"
    },
    {
      id: "du_m1_9_18",
      question: "d/dx (log_a (x)) এর মান কত?",
      options: ["(1 / x) · log_a (e)", "1 / x", "ln(a) / x", "x / ln(a)"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2016, 23",
      explanation: "বেজ a ভিত্তিক লগারিদমের অন্তরজ হলো (1 / x) · log_a (e) বা (1 / x) · (1 / ln a)।"
    },
    {
      id: "du_m1_9_19",
      question: "যদি কোনো ফাংশনের দ্বিতীয় অন্তরজ ঋণাত্মক (d²y/dx² < 0) হয়, তবে ওই বিন্দুতে ফাংশনটির কী থাকে?",
      options: ["সর্বোচ্চ মান (Maximum)", "লঘিষ্ঠ মান", "নমন বিন্দু", "কোনোটিই নয়"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2019, 25",
      explanation: "দ্বিতীয় অন্তরজ ঋণাত্মক হওয়ার অর্থ গ্রাফটি অবতল (Concave down), যা সর্বোচ্চ মান নির্দেশ করে।"
    },
    {
      id: "du_m1_9_20",
      question: "d/dx (cot x) এর মান কত?",
      options: ["-cosec² x", "cosec² x", "-sec² x", "sec² x"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2017, 22",
      explanation: "কটজেন্ট বা cot x এর অন্তরজ হলো -cosec² x।"
    }
  ]
};