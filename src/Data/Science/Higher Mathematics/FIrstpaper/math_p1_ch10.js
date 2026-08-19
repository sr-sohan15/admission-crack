export const math_p1_ch10 = {
  id: "math-p1-10",
  paper: "উচ্চতর গণিত ১ম পত্র",
  chapterNo: "১০ম অধ্যায়",
  title: "ইন্টিগ্রেশন বা সমাকলন",
  questions: [
    {
      id: "du_m1_10_1",
      question: "∫ xⁿ dx এর সঠিক সমাকলন বা ইন্টিগ্রেশন কত?",
      options: ["(xⁿ⁺¹ / (n + 1)) + c (যেখানে n ≠ -1)", "n · xⁿ⁻¹ + c", "(xⁿ / n) + c", "ln(x) + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2014, 2018, 2021, 2024",
      explanation: "পাওয়ার রুল অনুযায়ী ∫ xⁿ dx = (xⁿ⁺¹ / (n + 1)) + c (যেখানে n ≠ -1)।"
    },
    {
      id: "du_m1_10_2",
      question: "∫ (1/x) dx এর মান কত?",
      options: ["ln|x| + c", "1/x² + c", "-1/x² + c", "e^x + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2016, 2019, 22, 2025",
      explanation: "1/x এর ইন্টিগ্রেশন বা সমাকলন হলো স্বাভাবিক লগারিদম ln|x| + c।"
    },
    {
      id: "du_m1_10_3",
      question: "∫ e^x dx এর সমাকলন কত?",
      options: ["e^x + c", "xe^x + c", "ln(x) + c", "1/e^x + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2015, 2017, 2020, 23",
      explanation: "সূত্রের সাহায্যে, e^x এর ইন্টিগ্রেশন সর্বদা অপরিবর্তিত থেকে e^x + c হয়।"
    },
    {
      id: "du_m1_10_4",
      question: "∫ sin(x) dx এর মান কত?",
      options: ["-cos x + c", "cos x + c", "sin x + c", "-sin x + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2017, 20, 24",
      explanation: "ত্রিকোণমিতিক সমাকলনের সূত্র অনুযায়ী সাইনের ইন্টিগ্রেশন মাইনাস কোসাইন, অর্থাৎ -cos x + c।"
    },
    {
      id: "du_m1_10_5",
      question: "∫ cos(x) dx এর মান কত?",
      options: ["sin x + c", "-sin x + c", "cos x + c", "-cos x + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2018, 21, 25",
      explanation: "কোসাইনের ইন্টিগ্রেশন হলো sin x + c।"
    },
    {
      id: "du_m1_10_6",
      question: "∫ sec²(x) dx এর মান কত?",
      options: ["tan x + c", "cot x + c", "-tan x + c", "sec x + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2016, 2019, 22",
      explanation: "sec² x এর সমাকলন সরাসরি tan x + c এর সমান।"
    },
    {
      id: "du_m1_10_7",
      question: "∫ (1 / (1 + x²)) dx এর মান কত?",
      options: ["tan⁻¹(x) + c", "sin⁻¹(x) + c", "sec⁻¹(x) + c", "ln(1+x²) + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2013, 2017, 2020, 23",
      explanation: "বিপরীত ত্রিকোণমিতিক ফাংশনের অবকলন থেকে পাওয়া যায় ∫ (1 / (1 + x²)) dx = tan⁻¹(x) + c।"
    },
    {
      id: "du_m1_10_8",
      question: "∫ (1 / √(1 - x²)) dx এর মান কত?",
      options: ["sin⁻¹(x) + c", "tan⁻¹(x) + c", "-cos⁻¹(x) + c", "sec⁻¹(x) + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2015, 2021, 25",
      explanation: "রুট ওভার (1 - x²) এর নিচে 1 থাকলে তার সমাকলন sin⁻¹(x) + c হয়।"
    },
    {
      id: "du_m1_10_9",
      question: "নির্দিষ্ট ইন্টিগ্রালে (Definite integral) যোগজীকরণ ধ্রুবক c কেন লেখা হয় না?",
      options: ["উর্ধ্বসীমা ও নিম্নসীমা বিয়োগ করার সময় c বাদ চলে যায়", "c এর মান সর্বদা শূন্য", "এটি অনির্দিষ্টের নিয়মের বাইরে", "কোনোটিই নয়"],
      correctAnswer: 0,
      stars: "★★★★☆",
      repeatCount: "DU: 2014, 2018, 22",
      explanation: "নির্দিষ্ট সীমার মধ্যে মান বসালে (F(b) + c) - (F(a) + c) থেকে c কেটে যায়, তাই ধ্রুবক লেখা হয় না।"
    },
    {
      id: "du_m1_10_10",
      question: "∫ a^x dx (যেখানে a > 0 এবং a ≠ 1) এর মান কত?",
      options: ["(a^x / ln(a)) + c", "a^x · ln(a) + c", "x · a^(x-1) + c", "a^x + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2019, 23",
      explanation: "সূচকীয় ফাংশনের সমাকলন হলো (a^x / ln a) + c।"
    },
    {
      id: "du_m1_10_11",
      question: "পদ্ধতিগতভাবে ইন্টিগ্রেশনে 'Integration by parts' বা আংশিক সমাকলন কোন ধরনের ফাংশনের ক্ষেত্রে ব্যবহৃত হয়?",
      options: ["দুটি ভিন্ন ফাংশনের গুণফলের ক্ষেত্রে", "ভাগের ক্ষেত্রে", "শুধুমাত্র ত্রিকোণমিতিক", "ধ্রুবক রাশির জন্য"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2016, 2020, 24",
      explanation: "দুটি ফাংশনের গুণফলের সমাকলন করতে আংশিক সমাকলন বা ∫ u v dx = u ∫ v dx - ∫ (u' ∫ v dx) dx সূত্র ব্যবহার করা হয়।"
    },
    {
      id: "du_m1_10_12",
      question: "∫ cosec²(x) dx এর মান কত?",
      options: ["-cot x + c", "tan x + c", "cot x + c", "-tan x + c"],
      correctAnswer: 0,
      stars: "★★★★☆",
      repeatCount: "DU: 2013, 2017, 21",
      explanation: "cosec² x এর সমাকলন হলো -cot x + c।"
    },
    {
      id: "du_m1_10_13",
      question: "y = f(x) বক্ররেখা, x-অক্ষ এবং x = a ও x = b রেখাদ্বয় দ্বারা গঠিত ক্ষেত্রের ক্ষেত্রফল নির্ণয়ের সঠিক সূত্র কোনটি?",
      options: ["∫ (a থেকে b) y dx", "∫ (a থেকে b) x dy", "π ∫ y² dx", "2π ∫ y dx"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2018, 21, 24",
      explanation: "নির্দিষ্ট ইন্টিগ্রালের সাহায্যে ক্ষেত্রফল নির্ণয়ের প্রমাণ সূত্রটি হলো Area = ∫ (a থেকে b) y dx।"
    },
    {
      id: "du_m1_10_14",
      question: "∫ sec x tan x dx এর মান কত?",
      options: ["sec x + c", "cosec x + c", "tan x + c", "-sec x + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2015, 20, 23",
      explanation: "sec x tan x এর সমাকলন সরাসরি sec x + c।"
    },
    {
      id: "du_m1_10_15",
      question: "∫ cosec x cot x dx এর মান কত?",
      options: ["-cosec x + c", "cosec x + c", "-sec x + c", "cot x + c"],
      correctAnswer: 0,
      stars: "★★★★☆",
      repeatCount: "DU: 2013, 2017, 22, 25",
      explanation: "cosec x cot x এর সমাকলন হলো -cosec x + c।"
    },
    {
      id: "du_m1_10_16",
      question: "∫ tan(x) dx এর মান কোনটি?",
      options: ["-ln|cos x| + c বা ln|sec x| + c", "ln|sin x| + c", "-ln|sin x| + c", "sec x + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2016, 20, 24",
      explanation: "sin x / cos x আকারে রূপান্তর করে সমাকলন করলে ln|sec x| + c পাওয়া যায়।"
    },
    {
      id: "du_m1_10_17",
      question: "যদি f'(x) দেওয়া থাকে, তবে f(x) বের করতে কোন প্রক্রিয়াটি প্রয়োগ করতে হয়?",
      options: ["সমাকলন বা ইন্টিগ্রেশন", "অন্তরীকরণ", "লগারিদম", "মডুলাস"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2014, 2018, 21, 24",
      explanation: "ডিফারেন্সিয়েশনের বিপরীত প্রক্রিয়া বা অ্যান্টি-ডেরিভেটিভ হলো ইন্টিগ্রেশন।"
    },
    {
      id: "du_m1_10_18",
      question: "∫ (1 / √(x² + a²)) dx এর মান কত?",
      options: ["ln|x + √(x² + a²)| + c", "sin⁻¹(x/a) + c", "tan⁻¹(x/a) + c", "1/a tan⁻¹(x/a) + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2011, 2016, 23",
      explanation: "স্ট্যান্ডার্ড লগারিদমিক ইন্টিগ্রাল সূত্র অনুযায়ী ∫ (1 / √(x² + a²)) dx = ln|x + √(x² + a²)| + c।"
    },
    {
      id: "du_m1_10_19",
      question: "নির্দিষ্ট ইন্টিগ্রালের প্রপার্টি অনুযায়ী ∫ (a থেকে b) f(x) dx সমান কত হবে যদি সীমা উল্টে দেওয়া হয়?",
      options: ["-∫ (b থেকে a) f(x) dx", "∫ (b থেকে a) f(x) dx", "0", "1"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2015, 2019, 25",
      explanation: "নির্দিষ্ট ইন্টিগ্রালের ধর্ম মতে উচ্চ ও নিম্নসীমা পরস্পর স্থান বদল করলে সামনে একটি ঋণাত্মক চিহ্ন আসে।"
    },
    {
      id: "du_m1_10_20",
      question: "∫ (1 / (a² - x²)) dx এর সঠিক সূত্র কোনটি?",
      options: ["(1 / 2a) ln|(a + x) / (a - x)| + c", "1/a tan⁻¹(x/a) + c", "sin⁻¹(x/a) + c", "ln|a² - x²| + c"],
      correctAnswer: 0,
      stars: "★★★★★",
      repeatCount: "DU: 2012, 2017, 22",
      explanation: "আংশিক ভগ্নাংশের রূপান্তর বা স্ট্যান্ডার্ড সূত্র অনুযায়ী ∫ (1 / (a² - x²)) dx = (1 / 2a) ln|(a + x) / (a - x)| + c।"
    }
  ]
};