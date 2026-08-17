export const admissionData = {
  science: {
    title: "বিজ্ঞান ইউনিট (DU A / GST KA)",
    subtitle: "ব্যাকবেঞ্চার রুল: মেইন ৪টি বিষয় পড়লে ১০০% চান্স নিশ্চিত। দুর্বল হলে যেকোনো ১টি বিষয় বাদ দিয়ে বাংলা/ইংরেজি ব্যাকআপ নাও।",
    subjects: [
      {
        id: "physics",
        name: "Physics (পদার্থবিজ্ঞান)",
        status: "compulsory",
        statusText: "বাধ্যতামূলক (Must Read)",
        mustReadChapters: [
          { title: "ভেক্টর ও গতিবিদ্যা", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "লব্ধির কোণ ও নদী-নৌকা হ্যাক", count: "৪-৫ টি প্রশ্ন" },
          { title: "কাজ, শক্তি ও ক্ষমতা", guarantee: "৯৫% নিশ্চিত টাইপ", shortcuts: "কুয়া খালি করার কৃতকাজ সূত্র", count: "২-৩ টি প্রশ্ন" },
          { title: "মহাকর্ষ ও অভিকর্ষ", guarantee: "৯০% নিশ্চিত টাইপ", shortcuts: "g এর পরিবর্তন ও উপগ্রহের বেগ", count: "২ টি প্রশ্ন" }
        ],
        questions: [
          {
            id: "p1",
            type: "লব্ধির স্পেশাল কেস",
            priority: "Must Solve",
            repeatCount: "DU, GST, RU তে ৮ বার এসেছে",
            question: "দুটি সমমানের বলের লব্ধির মান তাদের যেকোনো একটির মানের সমান হলে বলদ্বয়ের মধ্যবর্তী কোণ কত?",
            options: ["60°", "90°", "120°", "180°"],
            correctAnswer: 2,
            hack: "💡 ৫-সেকেন্ড হ্যাক: দুটি সমান ভেক্টরের লব্ধি তাদের সমান হলে চোখ বন্ধ করে কোণ ১২০° হবে!",
            eliminationTip: "🚫 এলিমিনেশন ট্রিক: কোণ ৯০° হলে লব্ধি হয় √2 গুণ এবং ১৮০° হলে ০। তাই ৯০° ও ১৮০° শুরুতেই বাদ।",
            explanation: "R² = P² + P² + 2P² cosα => P² = 2P²(1 + cosα) => cosα = -1/2 => α = 120°।"
          },
          {
            id: "p2",
            type: "প্রক্ষেপকের পাল্লা",
            priority: "Must Solve",
            repeatCount: "CU, JU, GST তে ৬ বার এসেছে",
            question: "সর্বোচ্চ অনুভূমিক পাল্লার জন্য নিক্ষিপ্ত বস্তুর নিক্ষেপণ কোণ কত হতে হবে?",
            options: ["30°", "45°", "60°", "90°"],
            correctAnswer: 1,
            hack: "💡 ৫-সেকেন্ড হ্যাক: পাল্লা (R_max) সর্বোচ্চ করতে কোণ সর্বদা ৪৫°।",
            eliminationTip: "🚫 এলিমিনেশন ট্রিক: ৯০° এ নিক্ষেপ করলে বস্তু সোজা উপরে উঠে নিচে নামবে, পাল্লা শূন্য হবে।",
            explanation: "R = (v² sin 2θ)/g; sin 2θ এর সর্বোচ্চ মান 1, তাই θ = 45°।"
          },
          {
            id: "p3",
            type: "কুয়া খালি করার কৃতকাজ",
            priority: "Must Solve",
            repeatCount: "DU ও GST তে প্রায় প্রতি বছর রিপিট",
            question: "একটি সম্পূর্ণ পূর্ণ কুয়ার গভীরতা h হলে তা পাম্প দিয়ে খালি করতে গড় সরণ কত?",
            options: ["h", "h/2", "h/3", "h/4"],
            correctAnswer: 1,
            hack: "💡 ৫-সেকেন্ড হ্যাক: গড় সরণ x = (0 + h)/2 = h/2।",
            eliminationTip: "🚫 সম্পূর্ণ কুয়া h হলে গড় সরণ কখনো h বা 2h হতে পারে না।",
            explanation: "পানির ভরকেন্দ্রের সরণ হলো কুয়ার গভীরতার অর্ধেক, অর্থাৎ h/2।"
          }
        ]
      },
      {
        id: "chemistry",
        name: "Chemistry (রসায়ন)",
        status: "compulsory",
        statusText: "বাধ্যতামূলক (Must Read)",
        mustReadChapters: [
          { title: "গুণগত রসায়ন", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "শিখা পরীক্ষা ও কোয়ান্টাম সংখ্যা", count: "৪-৫ টি প্রশ্ন" },
          { title: "জৈব রসায়ন", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "নামধারী বিক্রিয়া ও শনাক্তকরণ", count: "৫-৬ টি প্রশ্ন" },
          { title: "মৌলের পর্যায়বৃত্ত ধর্ম", guarantee: "৯৫% নিশ্চিত টাইপ", shortcuts: "আয়নীকরণ শক্তি ও সংকরায়ন ছক", count: "৩-৪ টি প্রশ্ন" }
        ],
        questions: [
          {
            id: "c1",
            type: "শিখা পরীক্ষা ছন্দ",
            priority: "Must Solve",
            repeatCount: "বিগত ৭ বছরে বহুবার আসা",
            question: "বুনসেন শিখা পরীক্ষায় ক্যালসিয়াম (Ca²⁺) কী বর্ণ দেখায়?",
            options: ["ইটের মতো লাল", "সোনালী হলুদ", "গাঢ় লাল", "কাঁচা আপেলের মতো সবুজ"],
            correctAnswer: 0,
            hack: "💡 ছন্দ হ্যাক: ক্যালসিয়াম = 'ইট' (Ca-Brick Red), সোডিয়াম = 'সোনা' (Na-Golden Yellow)।",
            eliminationTip: "🚫 সোনালী হলুদ Na এর এবং আপেল সবুজ Ba এর, তাই এ দুটো আগেই বাদ।",
            explanation: "Ca²⁺ আয়ন বুনসেন শিখায় ইটের মতো লাল (Brick Red) বর্ণ প্রদর্শন করে।"
          },
          {
            id: "c2",
            type: "সংকরায়ন শর্টকাট",
            priority: "Must Solve",
            repeatCount: "DU & GST প্রতিবছর নিশ্চিত ১টি",
            question: "PCl₅ যৌগের কেন্দ্রীয় পরমাণুর সংকরায়ন কোনটি?",
            options: ["sp²", "sp³", "sp³d", "sp³d²"],
            correctAnswer: 2,
            hack: "💡 ৫-সেকেন্ড হ্যাক: কেন্দ্রীয় পরমাণুর সাথে যুক্ত পরমাণু ৫ (PCl₅) + মুক্তজোড় ০ = ৫টি অরবিটাল => sp³d।",
            eliminationTip: "🚫 sp³ তে ৪টি এবং sp² তে ৩টি অরবিটাল থাকে, তাই এ দুটি অসম্ভব।",
            explanation: "H = 1/2 [5 + 5 - 0 + 0] = 5 => sp³d সংকরায়ন।"
          }
        ]
      },
      {
        id: "math",
        name: "Higher Math (উচ্চতর গণিত)",
        status: "major",
        statusText: "ইঞ্জিনিয়ারিং চাইলে বাধ্যতামূলক",
        mustReadChapters: [
          { title: "ম্যাট্রিক্স ও নির্ণায়ক", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "বিপরীত ম্যাট্রিক্স ও ডিটারমিন্যান্ট ট্রিক", count: "৩-৪ টি প্রশ্ন" },
          { title: "অন্তরীকরণ (Calculus)", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "L'Hopital Rule ও চরম মান", count: "৪-৫ টি প্রশ্ন" }
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
            hack: "💡 ৫-সেকেন্ড হ্যাক: n×n ম্যাট্রিক্সের ক্ষেত্রে |kA| = kⁿ |A|। এখানে |2A| = 2² × 5 = 20।",
            eliminationTip: "🚫 সাধারণ গুণ ভেবে অনেকে 2×5=10 দাগায়, যা ভুল।",
            explanation: "|kA| = kⁿ |A| সূত্রানুযায়ী 2² × 5 = 20।"
          }
        ]
      },
      {
        id: "biology",
        name: "Biology (জীববিজ্ঞান)",
        status: "major",
        statusText: "মেডিকেল/ফার্মেসি চাইলে বাধ্যতামূলক",
        mustReadChapters: [
          { title: "কোষ ও এর গঠন (DNA/RNA/ট্রান্সলেশন)", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "স্টপ কোডন ও ক্ষারক অনুপাত", count: "৪-৫ টি প্রশ্ন" },
          { title: "কোষ বিভাজন (মায়োসিস-১ এর উপপর্যায়)", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "ক্রসিং ওভার ও কায়াজমা ছক", count: "৩-৪ টি প্রশ্ন" }
        ],
        questions: [
          {
            id: "bio1",
            type: "মায়োসিস উপপর্যায় ট্রিক",
            priority: "Must Solve",
            repeatCount: "DU ও মেডিকেল/GST তে বহুবার আসা",
            question: "মায়োসিস-১ এর কোন উপপর্যায়ে ক্রসিং ওভার ঘটে?",
            options: ["লেপ্টোটিন", "জাইগোটিন", "প্যাকাইটিন", "ডিপ্লোটিন"],
            correctAnswer: 2,
            hack: "💡 ছন্দ হ্যাক: 'প্যাকেটে ক্রস' => প্যাকাইটিন উপপর্যায়েই কায়াজমা তৈরি ও ক্রসিং ওভার ঘটে।",
            eliminationTip: "🚫 জাইগোটিনে শুধু সিন্যাপসিস হয়, ক্রসিং ওভার হয় না।",
            explanation: "প্রফেজ-১ এর প্যাকাইটিন উপপর্যায়ে নন-সিস্টার ক্রোমাটিডের মধ্যে অংশের বিনিময় ঘটে।"
          }
        ]
      },
      {
        id: "bangla-sci",
        name: "Bangla (বিজ্ঞান বিকল্প)",
        status: "skippable",
        statusText: "⚠️ Skip Option: শুধু Math/Biology কঠিন লাগলে এটি পড়ো",
        mustReadChapters: [
          { title: "বাংলা ব্যাকরণ (ধ্বনি ও ণ-ত্ব/ষ-ত্ব বিধান)", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "স্বাভাবিক 'ষ' ও 'ণ' চেনার ট্রিক", count: "৩-৪ টি প্রশ্ন" }
        ],
        questions: [
          {
            id: "bs1",
            type: "ণ-ত্ব বিধান স্পেশাল",
            priority: "Must Solve",
            repeatCount: "DU A ইউনিটে বারবার আসা",
            question: "নিচের কোন শব্দটিতে স্বভাবতই 'ণ' হয়েছে?",
            options: ["লবণ", "তৃণ", "বর্ণ", "কারণ"],
            correctAnswer: 0,
            hack: "💡 ট্রিক: 'চাণক্য মাণিক্য গণ, বাণিজ্য লবণ মণ' ছন্দে থাকা লবণ শব্দে স্বভাবতই 'ণ' হয়।",
            eliminationTip: "🚫 বাকিগুলোতে ঋ, র, ষ এর নিয়মে 'ণ' হয়েছে।",
            explanation: "ণ-ত্ব বিধানের নিয়মে 'লবণ' শব্দে স্বভাবতই মূর্ধন্য-ণ হয়।"
          }
        ]
      },
      {
        id: "english-sci",
        name: "English (বিজ্ঞান বিকল্প)",
        status: "skippable",
        statusText: "⚠️ Skip Option: শুধু Math/Biology কঠিন লাগলে এটি পড়ো",
        mustReadChapters: [
          { title: "Conditionals & Clauses", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "Had + V3 থাকলে Would have + V3", count: "৩-৪ টি প্রশ্ন" }
        ],
        questions: [
          {
            id: "es1",
            type: "3rd Conditional ট্রিক",
            priority: "Must Solve",
            repeatCount: "DU ও GST তে প্রায় প্রতি বছর আসা",
            question: "If I had known the shortcut, I ______ the answer in 5 seconds.",
            options: ["would write", "will write", "would have written", "had written"],
            correctAnswer: 2,
            hack: "💡 ৫-সেকেন্ড হ্যাক: If + Had + V3 থাকলে অপর পাশে চোখ বন্ধ করে Would/Could have + V3 বসবে!",
            eliminationTip: "🚫 would write হলো ২য় কন্ডিশনাল, তাই হবে না।",
            explanation: "Third conditional নিয়মানুযায়ী Past Perfect হলে Would have + V3 বসে।"
          }
        ]
      }
    ]
  },
  arts: {
    title: "মানবিক ইউনিট (DU B / GST KHA)",
    subtitle: "মানবিক ইউনিটের এই ৩টি বিষয় ১০০% পড়তে হবে—কোনো বিষয় স্কিপ করা যাবে না।",
    subjects: [
      {
        id: "bangla",
        name: "Bangla (বাংলা)",
        status: "compulsory",
        statusText: "বাধ্যতামূলক (Must Read)",
        mustReadChapters: [
          { title: "অপরিচিতা ও রেইনকোট", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "মূল উক্তি ও চরিত্র ছক", count: "৪-৫ টি প্রশ্ন" }
        ],
        questions: [
          {
            id: "b1",
            type: "গল্পের মূল উক্তি",
            priority: "Must Solve",
            repeatCount: "DU B Unit ও GST তে বারবার আসা",
            question: "'মেয়েটিকে আমি দেখিয়াছি, সেই রূপের কথা বলিতে পারি কিন্তু তাহার মনটি বড় মধুর'—উক্তিটি কার?",
            options: ["অনুপম", "হরিশ", "মামা", "শম্ভুনাথ সেন"],
            correctAnswer: 1,
            hack: "💡 ট্রিক: বিয়ের প্রস্তাব নিয়ে মামার কাছে ওকালতি করেছিল 'হরিশ'।",
            eliminationTip: "🚫 মামা বা শম্ভুনাথ সেন কখনো এমন রোমান্টিক প্রশংসা করবেন না।",
            explanation: "অনুপমের বন্ধু হরিশ কানপুর থেকে ফিরে এ উক্তিটি করেছিল।"
          }
        ]
      },
      {
        id: "english",
        name: "English (ইংরেজি)",
        status: "compulsory",
        statusText: "বাধ্যতামূলক (Must Read)",
        mustReadChapters: [
          { title: "Subject-Verb Agreement", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "Along with, As well as রুলস", count: "৩-৪ টি প্রশ্ন" }
        ],
        questions: [
          {
            id: "e1",
            type: "Subject-Verb Agreement",
            priority: "Must Solve",
            repeatCount: "বিগত ১০ বছরে ৮ বার এসেছে",
            question: "The captain along with his team members ______ present in the meeting.",
            options: ["is", "are", "were", "have been"],
            correctAnswer: 0,
            hack: "💡 ৫-সেকেন্ড হ্যাক: along with থাকলে ১ম Subject অনুযায়ী Verb হয় (The captain = Singular => is)।",
            eliminationTip: "🚫 'team members' প্লুরাল দেখে are দাগানো ভুল।",
            explanation: "Along with থাকলে প্রথম Subject অনুযায়ী Verb বসে।"
          }
        ]
      },
      {
        id: "gk",
        name: "General Knowledge (সাধারণ জ্ঞান)",
        status: "compulsory",
        statusText: "বাধ্যতামূলক (Must Read)",
        mustReadChapters: [
          { title: "মুক্তিযুদ্ধ ও সংবিধান", guarantee: "১০০% নিশ্চিত টাইপ", shortcuts: "সেক্টর কমান্ডার ও মূল অনুচ্ছেদ", count: "৬-৮ টি প্রশ্ন" }
        ],
        questions: [
          {
            id: "g1",
            type: "মুক্তিযুদ্ধ সেক্টর ট্রিক",
            priority: "Must Solve",
            repeatCount: "সকল পাবলিক ভার্সিটিতে নিশ্চিত কমন",
            question: "মুক্তিযুদ্ধের সময় রাজধানী ঢাকা কত নম্বর সেক্টরের অধীনে ছিল?",
            options: ["১ নং", "২ নং", "৮ নং", "১০ নং"],
            correctAnswer: 1,
            hack: "💡 ট্রিক: রাজধানী ঢাকা = ২ নং সেক্টর। নৌপথের সেক্টর = ১০ নং।",
            eliminationTip: "🚫 ১ নং সেক্টর চট্টগ্রাম অঞ্চলের জন্য ছিল।",
            explanation: "ঢাকা অঞ্চল ২ নং সেক্টরের অধীনে ছিল।"
          }
        ]
      }
    ]
  }
};

export const studyPlan30Days = [
  { day: 1, stream: "Science", task: "Physics: ভেক্টর লব্ধির কোণ ও নদী-নৌকা ৫-সেকেন্ড হ্যাকস", completed: false },
  { day: 2, stream: "Science", task: "Chemistry: গুণগত রসায়ন শিখা পরীক্ষা ছন্দ ও কোয়ান্টাম সংখ্যা", completed: false },
  { day: 3, stream: "Science", task: "Math: ম্যাট্রিক্স ও নির্ণায়ক ২×২ ডিটারমিন্যান্ট ট্রিকস", completed: false },
  { day: 4, stream: "Science", task: "Biology: কোষ বিভাজন (প্যাকাইটিন ও মায়োসিস-১ উপপর্যায়)", completed: false },
  { day: 5, stream: "Science", task: "Physics: কুয়া ও পাম্পের কৃতকাজের গড় সরণ শর্টকাট", completed: false },
  { day: 1, stream: "Arts", task: "Bangla: অপরিচিতা গল্পের সকল উক্তি ও চরিত্র শর্টকাট ছক", completed: false },
  { day: 2, stream: "Arts", task: "English: Subject-Verb Agreement (Along with/As well as)", completed: false },
  { day: 3, stream: "Arts", task: "GK: মুক্তিযুদ্ধের ১১টি সেক্টর ও কমান্ডার ছক মুখস্থ", completed: false }
];