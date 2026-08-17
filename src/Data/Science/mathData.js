export const mathData = {
  id: "math",
  name: "Higher Math (উচ্চতর গণিত)",
  status: "major",
  statusText: "ইঞ্জিনিয়ারিং চাইলে বাধ্যতামূলক",
  mustReadChapters: [
    { title: "ম্যাট্রিক্স ও নির্ণায়ক", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "বিপরীত ম্যাট্রিক্স ও ডিটারমিন্যান্ট ট্রিক", count: "৩-৪ টি প্রশ্ন" },
    { title: "অন্তরীকরণ (Calculus)", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "L'Hopital Rule ও চরম মান", count: "৪-৫ টি প্রশ্ন" },
    { title: "যোগজীকরণ (Integration)", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "e^x [f(x) + f'(x)] স্পেশাল ট্রিক", count: "৩-৪ টি প্রশ্ন" },
    { title: "সরলরেখা ও বৃত্ত", guarantee: "৯৫% নিশ্চিত টাইপ", shortcuts: "দূরত্ব ও স্পর্শকের শর্ত", count: "৩-৪ টি প্রশ্ন" }
  ],
  questions: [
    {
      id: "m1",
      type: "নির্ণায়কের মান ট্রিক",
      priority: "Must Solve",
      repeatCount: "DU তে ৫ বার এসেছে",
      question: "একটি 2x2 ম্যাট্রিক্স A এর জন্য |A| = 5 হলে, |2A| এর মান কত?",
      options: ["10", "20", "25", "50"],
      correctAnswer: 1,
      hack: "💡 ৫-সেকেন্ড হ্যাক: n×n ম্যাট্রিক্সের ক্ষেত্রে |kA| = kⁿ |A|। এখানে n=2, তাই |2A| = 2² × 5 = 20!",
      eliminationTip: "🚫 সাধারণ গুণ ভেবে 2×5=10 দাগানো যাবে না, ম্যাট্রিক্সে ঘাত আকারে গুণ হয়।",
      explanation: "|kA| = kⁿ |A| সূত্রানুযায়ী 2² × 5 = 20।"
    },
    {
      id: "m2",
      type: "লিমিট ও L'Hopital হ্যাক",
      priority: "Must Solve",
      repeatCount: "সকল ভার্সিটিতে নিশ্চিত কমন",
      question: "lim (x→0) [sin 7x / sin 3x] এর মান কত?",
      options: ["0", "1", "7/3", "3/7"],
      correctAnswer: 2,
      hack: "💡 ৫-সেকেন্ড হ্যাক: lim (x→0) [sin ax / sin bx] থাকলে উত্তর সরাসরি সহগের অনুপাত a/b = 7/3!",
      eliminationTip: "🚫 0 বা 1 হওয়ার সুযোগ নেই, সরাসরি লব ও হরের কোণ অনুপাত হবে।",
      explanation: "L'Hopital প্রয়োগ করলে lim (x→0) [7 cos 7x / 3 cos 3x] = 7(1) / 3(1) = 7/3।"
    },
    {
      id: "m3",
      type: "ত্রিকোণমিতিক চরম মান",
      priority: "Must Solve",
      repeatCount: "DU ও GST তে বহুবার আসা",
      question: "f(x) = 3 sin x + 4 cos x এর সর্বোচ্চ মান কত?",
      options: ["3", "4", "5", "7"],
      correctAnswer: 2,
      hack: "💡 ৫-সেকেন্ড হ্যাক: a sin x + b cos x এর সর্বোচ্চ মান = √(a² + b²) = √(3² + 4²) = 5!",
      eliminationTip: "🚫 সাধারণ যোগফল ভেবে 3+4=7 দাগানো ভুল।",
      explanation: "সর্বোচ্চ মান = +√(3² + 4²) = +5 এবং সর্বনিম্ন মান = -5।"
    },
    {
      id: "m4",
      type: "যোগজীকরণ সুপার ট্রিক",
      priority: "Must Solve",
      repeatCount: "বিগত ১০ বছরে অসংখ্যবার আসা",
      question: "∫ eˣ (sin x + cos x) dx এর মান কত?",
      options: ["eˣ cos x + c", "eˣ sin x + c", "-eˣ cos x + c", "eˣ (sin x - cos x) + c"],
      correctAnswer: 1,
      hack: "💡 ৫-সেকেন্ড হ্যাক: ∫ eˣ [f(x) + f'(x)] dx = eˣ f(x) + c। এখানে sin x এর অন্তরক cos x, তাই উত্তর eˣ sin x + c!",
      eliminationTip: "🚫 যার ডিফারেনশিয়েশন উপস্থিত থাকে মূল ফাংশন হিসেবে সেটি eˣ এর সাথে বসবে।",
      explanation: "যেহেতু d/dx (sin x) = cos x, তাই সূত্রানুযায়ী সরাসরি eˣ sin x + c।"
    }
  ]
};