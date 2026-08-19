import { physicsFirstData } from './physicsFirstData';
import { physicsSecondData } from './physicsSecondData';

export const physicsData = {
  id: "physics",
  name: "Physics (পদার্থবিজ্ঞান)",
  status: "compulsory",
  statusText: "বাধ্যতামূলক (Must Read)",
  hasPapers: true,
  
  paper1Chapters: physicsFirstData,

  paper2Chapters: physicsSecondData,

  skipChapters: [
    "অতিরিক্ত বড় প্রমাণ, ডেরিভেশন ও অপ্রয়োজনীয় তাত্ত্বিক প্রতিপাদন",
    "বোর মডেলের জটিল গাণিতিক ডেরিভেশনের ভেতরের অপ্রাসঙ্গিক অংশ"
  ]
};

export default physicsData;