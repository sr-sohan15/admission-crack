export const math_p2_ch2 = {
  id: "math-p2-2",
  paper: "উচ্চতর গণিত ২য় পত্র",
  chapterNo: "২য় অধ্যায়",
  title: "জটিল সংখ্যা",
  questions: [
    {
      id: "du_m2_2_1",
      question: "i² (যেখানে i হলো কাল্পনিক একক) এর মান কত?",
      options: ["-1", "1", "i", "-i"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2014, 2018, 2021, 2024",
      explanation: "কাল্পনিক একক i এর সংজ্ঞা অনুযায়ী i = √(-1), সুতরাং উভয় পক্ষে বর্গ করলে i² = -1 হয়।"
    },
    {
      id: "du_m2_2_2",
      question: "i^4 এর মান কত?",
      options: ["1", "-1", "i", "-i"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2016, 2019, 2022, 2025",
      explanation: "i^4 = (i²)² = (-1)² = 1।"
    },
    {
      id: "du_m2_2_3",
      question: "একটি জটিল সংখ্যা z = x + iy এর অনুবন্ধী বা কনজুগেট (z̄) কত?",
      options: ["x - iy", "-x + iy", "-x - iy", "x + iy"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2015, 2017, 2020, 23",
      explanation: "অনুবন্ধী জটিল সংখ্যায় কাল্পনিক অংশের চিহ্ন পরিবর্তিত হয়, তাই z̄ = x - iy।"
    },
    {
      id: "du_m2_2_4",
      question: "z · z̄ (একটি জটিল সংখ্যা ও তার অনুবন্ধীর গুণফল) এর মান নিচের কোনটি?",
      options: ["x² + y²", "x² - y²", "2x", "2iy"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2017, 20, 24",
      explanation: "(x + iy)(x - iy) = x² - (iy)² = x² - i²y² = x² + y² (|z|²)।"
    },
    {
      id: "du_m2_2_5",
      question: "এককের একটি কাল্পনিক ঘনমূল ω হলে, ω³ এর মান কত?",
      options: ["1", "-1", "0", "i"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2018, 21, 25",
      explanation: "এককের জটিল ঘনমূলগুলোর ধর্ম অনুযায়ী ω³ = 1 এবং 1 + ω + ω² = 0 হয়।"
    },
    {
      id: "du_m2_2_6",
      question: "1 + ω + ω² এর মান কত? (যেখানে ω হলো এককের ঘনমূল)",
      options: ["0", "1", "-1", "3"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2016, 2019, 22",
      explanation: "এককের তিনটি ঘনমূলের যোগফল সর্বদা শূন্য হয়, অর্থাৎ 1 + ω + ω² = 0।"
    },
    {
      id: "du_m2_2_7",
      question: "z = x + iy জটিল সংখ্যার মডিউলাস বা পরম মান (|z|) কত?",
      options: ["√(x² + y²)", "x + y", "x² + y²", "√(x - y)"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2017, 2020, 23",
      explanation: "জটিল সংখ্যার মডিউলাস বা মূলবিন্দু থেকে দূরত্বের সূত্র হলো |z| = √(x² + y²)।"
    },
    {
      id: "du_m2_2_8",
      question: "z = 1 + i জটিল সংখ্যার আর্গুমেন্ট (Argument) কত ডিগ্রি?",
      options: ["45° বা π/4", "90°", "60°", "30°"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2015, 2021, 25",
      explanation: "θ = tan⁻¹(y/x) = tan⁻¹(1/1) = tan⁻¹(1) = 45° বা π/4।"
    },
    {
      id: "du_m2_2_9",
      question: "জটিল সংখ্যার পোলার রূপ বা Polar form কোনটি?",
      options: ["r(cosθ + i sinθ)", "r(sinθ + i cosθ)", "x + iy", "r e^(iθ) (ইউলার রূপভেদ)"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2018, 22",
      explanation: "জটিল সংখ্যার প্রমাণ পোলার রূপ হলো z = r(cosθ + i sinθ)। (বিদ্র: ইউলার রূপও সঠিক, তবে স্ট্যান্ডার্ড পোলার রূপ প্রথমটি)।"
    },
    {
      id: "du_m2_2_10",
      question: "ডি মোইভরের উপপাদ্য (De Moivre's theorem) অনুসারে (cosθ + i sinθ)ⁿ সমান কত?",
      options: ["cos(nθ) + i sin(nθ)", "cos(θⁿ) + i sin(θⁿ)", "n cosθ + i sinθ", "cos(θ/n) + i sin(θ/n)"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2019, 23",
      explanation: "ডি মোইভরের বিখ্যাত উপপাদ্য অনুযায়ী পাওয়ার n কোণের সাথে গুণ হয়ে যায়: (cosθ + i sinθ)ⁿ = cos(nθ) + i sin(nθ)।"
    },
    {
      id: "du_m2_2_11",
      question: "i এর আর্গুমেন্ট (Argument) কত?",
      options: ["π / 2", "π", "0", "3π / 2"],
      correctAnswer: 0,
      stars: "★★★★☆",
      repeatCount: "DU: 2012, 2016, 2020, 24",
      explanation: "i কে 0 + 1i আকারে লিখলে x = 0, y = 1; tan⁻¹(1/0) = tan⁻¹(∞) = 90° বা π/2।"
    },
    {
      id: "du_m2_2_12",
      question: "এককের চতুর্থ মূলগুলো নিচের কোনটি?",
      options: ["±1, ±i", "1, -1", "i, -i", "1, ω, ω²"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2017, 21",
      explanation: "x^4 - 1 = 0 সমাধান করলে x = ±1 এবং ±i পাওয়া যায়।"
    },
    {
      id: "du_m2_2_13",
      question: "যদি z₁ এবং z₂ দুটি জটিল সংখ্যা হয়, তবে |z₁z₂| সমান কত?",
      options: ["|z₁| · |z₂|", "|z₁| + |z₂|", "|z₁| / |z₂|", "কোনটিই নয়"],
      correctAnswer: 0,
      stars: "★★★★☆",
      repeatCount: "DU: 2014, 2018, 21, 24",
      explanation: "মডিউলাসের গুণন ধর্ম অনুযায়ী দুটি জটিল সংখ্যার গুণের মডিউলাস তাদের পৃথক মডিউলাসের গুণফলের সমান।"
    },
    {
      id: "du_m2_2_14",
      question: "-1 এর বর্গমূলগুলো কত?",
      options: ["±i", "1, -1", "±1", "±iω"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2015, 20, 23",
      explanation: "√(-1) = ±i হলো কাল্পনিক এককের মান।"
    },
    {
      id: "du_m2_2_15",
      question: "i^(-1) বা 1/i এর মান নিচের কোনটি?",
      options: ["-i", "i", "1", "-1"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2017, 22, 25",
      explanation: "লব ও হরকে i দিয়ে গুণ করলে 1/i = i/i² = i/(-1) = -i হয়।"
    },
    {
      id: "du_m2_2_16",
      question: "একটি জটিল সংখ্যা z বাস্তব হওয়ার শর্ত কোনটি? (যেখানে z = x + iy)",
      options: ["y = 0", "x = 0", "x = y", "x² + y² = 1"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2016, 20, 24",
      explanation: "জটিল সংখ্যার কাল্পনিক অংশ শূন্য হলে (y = 0) সংখ্যাটি কেবল একটি বাস্তব সংখ্যা থাকে।"
    },
    {
      id: "du_m2_2_17",
      question: "একটি জটিল সংখ্যা বিশুদ্ধ কাল্পনিক (Purely imaginary) হওয়ার শর্ত কোনটি?",
      options: ["x = 0", "y = 0", "x = y", "x + y = 0"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2018, 21, 24",
      explanation: "বাস্তব অংশ শূন্য হলে (x = 0) জটিল সংখ্যাটি বিশুদ্ধ কাল্পনিক সংখ্যাে পরিণত হয়।"
    },
    {
      id: "du_m2_2_18",
      question: "arg(z̄) বা অনুবন্ধী জটিল সংখ্যার আর্গুমেন্ট মূল আর্গুমেন্টের সাথে কেমন সম্পর্কযুক্ত?",
      options: ["- arg(z)", "arg(z)", "2 arg(z)", "0"],
      correctAnswer: 0,
      stars: "★★★★☆",
      repeatCount: "DU: 2011, 2016, 23",
      explanation: "অনুবন্ধী জটিল সংখ্যা x - iy এর ক্ষেত্রে আর্গুমেন্টের চিহ্ন উল্টে যায়, তাই - arg(z)।"
    },
    {
      id: "du_m2_2_19",
      question: "যদি z = 3 + 4i হয়, তবে |z| এর মান কত?",
      options: ["5", "7", "25", "1"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2019, 25",
      explanation: "|z| = √(3² + 4²) = √(9 + 16) = √25 = 5।"
    },
    {
      id: "du_m2_2_20",
      question: "ω^10 এর মান নিচের কোনটির সমান?",
      options: ["ω", "ω²", "1", "-1"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2017, 22",
      explanation: "ω^10 = (ω³)^3 · ω = (1)^3 · ω = ω, কারণ ω³ = 1।"
    }
  ]
};