import { biologyData } from "./biology/biologyData";
import { physicsData } from "./physics/physicsData";
import { chemistryData } from "./Chemistry/chemistryData";
import { mathData } from "./Higher Mathematics/mathData";

const allBiologyChapters = [
  ...(biologyData?.botany || []),
  ...(biologyData?.zoology || [])
];

export const scienceData = {
  title: "DU A Unit",
  subtitle: "কম পরিশ্রমে ঢাকা বিশ্ববিদ্যালয়ে চান্স নিশ্চিত করার বুলেটপ্রুফ হ্যাকস ও শর্টকাট প্রিপারেশন.",
  
 
  studyPlan: [
    { day: 1, task: "Biology: কোষ ও এর গঠন (DNA ক্ষারক ও স্টপ কোডন হ্যাক)" },
    { day: 2, task: "Biology: কোষ বিভাজন (মায়োসিস-১ ও ক্রসিং ওভার ৫-সেকেন্ড ট্রিক)" },
    { day: 3, task: "Physics: ভেক্টর লব্ধির কোণ ও নদী-নৌকা ৫-সেকেন্ড হ্যাকস" },
    { day: 4, task: "Chemistry: গুণগত রসায়ন শিখা পরীক্ষা ছন্দ ও কোয়ান্টাম সংখ্যা" },
    { day: 5, task: "Math: ম্যাট্রিক্স ও নির্ণায়ক ২×২ ডিটারমিন্যান্ট ট্রিকস" },
    { day: 6, task: "Biology: জিনতত্ত্ব ও মেন্ডেলের সূত্রের অনুপাত হ্যাক" },
    { day: 7, task: "Biology: রক্ত ও সংবহন (হৃৎপিণ্ড কপাটিকা ছন্দ)" }
  ],

  
  subjects: [
    {
      id: "physics",
      name: "Physics (পদার্থবিজ্ঞান)",
      statusText: "বাধ্যতামূলক (Must Read)",
      chapters: [
        ...(physicsData?.paper1Chapters || []),
        ...(physicsData?.paper2Chapters || [])
      ],
      tagline: "বিগত ১৫ বছরের স্টার রেটিং প্রশ্ন ও ট্রিকস",
      route: "/science/subject/physics"
    },
    {
      id: "chemistry",
      name: "Chemistry (রসায়ন)",
      statusText: "বাধ্যতামূলক (Must Read)",
      chapters: [
        ...(chemistryData?.firstPaper || chemistryData?.paper1Chapters || []),
        ...(chemistryData?.secondPaper || chemistryData?.paper2Chapters || [])
      ],
      tagline: "বিগত ১৫ বছরের স্টার রেটিং প্রশ্ন ও ট্রিকস",
      route: "/science/subject/chemistry"
    },
    {
      id: "math",
      name: "Higher Math (উচ্চতর গণিত)",
      statusText: "ইঞ্জিনিয়ারিং চাইলে বাধ্যতামূলক",
      chapters: [
        ...(mathData?.firstPaper || mathData?.paper1Chapters || []),
        ...(mathData?.secondPaper || mathData?.paper2Chapters || [])
      ],
      tagline: "বিগত ১৫ বছরের স্টার রেটিং প্রশ্ন ও ট্রিকস",
      route: "/science/subject/math"
    },
    {
      id: "biology",
      name: "Biology (জীববিজ্ঞান)",
      statusText: "বাধ্যতামূলক / গুরুত্বপূর্ণ",
      chapters: allBiologyChapters, 
      tagline: "বিগত ১৫ বছরের স্টার রেটিং প্রশ্ন ও ট্রিকস",
      route: "/science/subject/biology"
    }
  ]
};

export const scienceSubjects = scienceData.subjects;
export default scienceData;