export const math_p2_ch7 = {
  id: "math-p2-7",
  paper: "উচ্চতর গণিত ২য় পত্র",
  chapterNo: "৭ম অধ্যায়",
  title: "বিপরীত ত্রিকোণমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ",
  questions: [
    {
      id: "du_m2_7_1",
      question: "sin⁻¹(x) + cos⁻¹(x) এর মান কত? (যেখানে x এর মান [-1, 1] এর মধ্যে)",
      options: ["π / 2", "π", "0", "1"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2014, 2018, 2021, 2024",
      explanation: "বিপরীত ত্রিকোণমিতিক ফাংশনের মৌলিক সূত্র অনুযায়ী sin⁻¹(x) + cos⁻¹(x) = π/2 সর্বদা সত্য।"
    },
    {
      id: "du_m2_7_2",
      question: "tan⁻¹(x) + tan⁻¹(y) এর সঠিক সূত্র কোনটি?",
      options: ["tan⁻¹((x + y) / (1 - xy))", "tan⁻¹((x - y) / (1 + xy))", "tan⁻¹((x + y) / (1 + xy))", "tan⁻¹(xy / (1 - xy))"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2016, 2019, 2022, 2025",
      explanation: "যোগফলের বিপরীত ত্রিকোণমিতিক রূপ হলো tan⁻¹((x + y) / (1 - xy))।"
    },
    {
      id: "du_m2_7_3",
      question: "sin⁻¹(-x) এর মান নিচের কোনটির সমান?",
      options: ["-sin⁻¹(x)", "sin⁻¹(x)", "π - sin⁻¹(x)", "-π - sin⁻¹(x)"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2015, 2017, 2020, 23",
      explanation: "সাইন ইনভার্স একটি বিজোড় ফাংশন হওয়ায় sin⁻¹(-x) = -sin⁻¹(x) হয়।"
    },
    {
      id: "du_m2_7_4",
      question: "cos⁻¹(-x) এর মান কত?",
      options: ["π - cos⁻¹(x)", "-cos⁻¹(x)", "π + cos⁻¹(x)", "-π + cos⁻¹(x)"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2017, 20, 24",
      explanation: "কোসাইন ইনভার্সের ক্ষেত্রে ঋণাত্মক মানের জন্য π থেকে বিয়োগ করতে হয়, অর্থাৎ cos⁻¹(-x) = π - cos⁻¹(x)।"
    },
    {
      id: "du_m2_7_5",
      question: "tan⁻¹(1) এর মুখ্য মান (Principal value) কত?",
      options: ["π / 4", "π / 2", "π / 3", "0"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2018, 21, 25",
      explanation: "ট্যানজেন্টের মান ১ হয় যখন কোণটি 45° বা π / 4 রেডিয়ান হয়।"
    },
    {
      id: "du_m2_7_6",
      question: "sec⁻¹(x) + cosec⁻¹(x) এর মান কত?",
      options: ["π / 2", "π", "0", "2π"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2016, 2019, 22",
      explanation: "পূরক কোণের বিপরীত সম্পর্ক অনুযায়ী sec⁻¹(x) + cosec⁻¹(x) = π/2 হয়।"
    },
    {
      id: "du_m2_7_7",
      question: "tan⁻¹(1/2) + tan⁻¹(1/3) এর মান কত?",
      options: ["π / 4", "π / 2", "π / 3", "0"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2017, 2020, 23",
      explanation: "सूत्र প্রয়োগ করলে tan⁻¹((1/2 + 1/3) / (1 - 1/6)) = tan⁻¹((5/6) / (5/6)) = tan⁻¹(1) = π/4।"
    },
    {
      id: "du_m2_7_8",
      question: "sin(cos⁻¹(3/5)) এর মান কত?",
      options: ["4/5", "3/5", "5/4", "3/4"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2015, 2021, 25",
      explanation: "cos⁻¹(3/5) = θ হলে cos θ = 3/5; সুতরাং sin θ = √(1 - 9/25) = √(16/25) = 4/5।"
    },
    {
      id: "du_m2_7_9",
      question: "sin x = sin α হলে x এর সাধারণ সমাধান কোনটি?",
      options: ["nπ + (-1)ⁿ α", "nπ ± α", "2nπ ± α", "nπ + α"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2018, 22",
      explanation: "ত্রিকোণমিতিক সমীকরণের সাধারণ সমাধান অনুযায়ী sin x = sin α এর জন্য x = nπ + (-1)ⁿ α।"
    },
    {
      id: "du_m2_7_10",
      question: "cos x = cos α হলে x এর সাধারণ সমাধান কোনটি?",
      options: ["2nπ ± α", "nπ + (-1)ⁿ α", "nπ + α", "(2n + 1)π / 2"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2019, 23",
      explanation: "কোসাইনের সাধারণ সমাধানের ক্ষেত্রে x = 2nπ ± α হয়।"
    },
    {
      id: "du_m2_7_11",
      question: "2 tan⁻¹(x) এর সঠিক রূপ কোনটি?",
      options: ["tan⁻¹(2x / (1 - x²))", "tan⁻¹(2x / (1 + x²))", "sin⁻¹(2x / (1 - x²))", "cos⁻¹((1 - x²) / (1 + x²))", "ক ও ঘ উভয়ই"],
      correctAnswer: 4,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2016, 2020, 24",
      explanation: "2 tan⁻¹(x) এর একাধিক রূপ রয়েছে যার মধ্যে tan⁻¹(2x / (1 - x²)) এবং cos⁻¹((1 - x²) / (1 + x²)) অন্যতম।"
    },
    {
      id: "du_m2_7_12",
      question: "tan⁻¹(-x) এর মান কত?",
      options: ["-tan⁻¹(x)", "tan⁻¹(x)", "π - tan⁻¹(x)", "-π + tan⁻¹(x)"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2017, 21",
      explanation: "ট্যান ইনভার্স একটি বিজোড় ফাংশন, তাই tan⁻¹(-x) = -tan⁻¹(x)।"
    },
    {
      id: "du_m2_7_13",
      question: "sin(2 sin⁻¹(x)) এর মান কত?",
      options: ["2x √(1 - x²)", "2x²", "1 - 2x²", "x √(1 - x²)"],
      correctAnswer: 0,
      stars: "★★★★☆",
      repeatCount: "DU: 2014, 2018, 21, 24",
      explanation: "sin 2θ = 2 sin θ cos θ সূত্র থেকে sin(2 sin⁻¹ x) = 2x √(1 - x²) পাওয়া যায়।"
    },
    {
      id: "du_m2_7_14",
      question: "cot⁻¹(x) সমান কত?",
      options: ["tan⁻¹(1/x)", "-tan⁻¹(x)", "1 / tan⁻¹(x)", "cot(x)"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2015, 20, 23",
      explanation: "বিপরীত সম্পর্কের পারস্পরিক রূপান্তর অনুযায়ী cot⁻¹(x) = tan⁻¹(1/x) (যখন x > 0)।"
    },
    {
      id: "du_m2_7_15",
      question: "cos(2 cos⁻¹(x)) এর মান কত?",
      options: ["2x² - 1", "1 - 2x²", "2x", "x² - 1"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2017, 22, 25",
      explanation: "cos 2θ = 2cos²θ - 1 সূত্রানুযায়ী cos(2 cos⁻¹ x) = 2x² - 1।"
    },
    {
      id: "du_m2_7_16",
      question: "cos⁻¹( -1/2 ) এর মুখ্য মান কত রেডিয়ান?",
      options: ["2π / 3", "π / 3", "5π / 6", "π / 6"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2016, 20, 24",
      explanation: "cos⁻¹(-1/2) = π - cos⁻¹(1/2) = π - π/3 = 2π / 3।"
    },
    {
      id: "du_m2_7_17",
      question: "যদি tan x = 0 হয়, তবে x এর সাধারণ সমাধান কত?",
      options: ["nπ", "2nπ", "(2n + 1)π / 2", "nπ + π/2"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2018, 21, 24",
      explanation: "sin x = 0 এর মতোই tan x = 0 এর সাধারণ সমাধান হলো x = nπ।"
    },
    {
      id: "du_m2_7_18",
      question: "sec⁻¹(-x) এর মান নিচের কোনটির সমান?",
      options: ["π - sec⁻¹(x)", "-sec⁻¹(x)", "π + sec⁻¹(x)", "sec⁻¹(x)"],
      correctAnswer: 0,
      stars: "★★★★☆",
      repeatCount: "DU: 2011, 2016, 23",
      explanation: "কোসাইনের মতো সেক ইনভার্সের ক্ষেত্রেও ঋণাত্মক মানের জন্য π থেকে বিয়োগ করতে হয়, অর্থাৎ π - sec⁻¹(x)।"
    },
    {
      id: "du_m2_7_19",
      question: "sin⁻¹(x) + sin⁻¹(y) এর সঠিক সূত্র কোনটি?",
      options: ["sin⁻¹(x √(1 - y²) + y √(1 - x²))", "sin⁻¹(x √(1 - y²) - y √(1 - x²))", "sin⁻¹(xy + √(1-x²)(1-y²))", "sin⁻¹(xy - √(1-x²)(1-y²))"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2019, 25",
      explanation: "সাইন ইনভার্সের যোগফলের প্রমাণ সূত্রটি হলো sin⁻¹(x √(1 - y²) + y √(1 - x²))।"
    },
    {
      id: "du_m2_7_20",
      question: "tan⁻¹(x) + tan⁻¹(y) + tan⁻¹(z) এর মান π হলে নিচের কোন সম্পর্কটি সঠিক?",
      options: ["x + y + z = xyz", "x + y + z = 0", "xy + yz + zx = 1", "x = y = z"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2017, 22",
      explanation: "যোগফল π হলে tan⁻¹((x + y + z - xyz) / (1 - xy - yz - zx)) = π হওয়ায় এর হর শূন্য হয়, অর্থাৎ x + y + z = xyz।"
    }
  ]
};