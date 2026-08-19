import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { scienceData } from '../Data/Science/scienceData';
import { FiArrowRight, FiBookOpen, FiCheckCircle } from 'react-icons/fi';

const StreamSelection = () => {
  const { streamId } = useParams();

  if (streamId?.toLowerCase() !== 'science') {
    return (
      <div className="text-center py-16 sm:py-24 text-white px-4">
        <h2 className="text-lg sm:text-xl font-bold">স্ট্রিম পাওয়া যায়নি অথবা এটি এখনো উন্মুক্ত হয়নি!</h2>
        <Link to="/" className="btn bg-emerald-500 text-slate-950 mt-4 rounded-xl font-bold px-6 py-3 cursor-pointer inline-block">হোমে ফিরে যান</Link>
      </div>
    );
  }

  const scienceSubjects = [
    {
      id: 'physics',
      name: 'পদার্থবিজ্ঞান (Physics)',
      status: 'compulsory',
      statusText: 'বাধ্যতামূলক (Compulsory)',
      description: '১০০% কমন টাইপ, সূত্র ও ৫-সেকেন্ড শর্টকাট হ্যাকস',
      chaptersCount: (scienceData.physics?.firstPaper?.length || 0) + (scienceData.physics?.secondPaper?.length || 0)
    },
    {
      id: 'chemistry',
      name: 'রসায়ন (Chemistry)',
      status: 'compulsory',
      statusText: 'বাধ্যতামূলক (Compulsory)',
      description: 'জৈব রসায়ন, বিক্রিয়া ও মৌলের পর্যাবৃত্ত ধর্ম ট্রিকস',
      chaptersCount: (scienceData.chemistry?.firstPaper?.length || 0) + (scienceData.chemistry?.secondPaper?.length || 0)
    },
    {
      id: 'higherMath',
      name: 'উচ্চতর গণিত (Higher Math)',
      status: 'choice',
      statusText: 'বাধ্যতামূলক / ৪র্থ বিষয়',
      description: 'কণিক, স্থিতিবিদ্যা, ক্যালকুলাস ও ম্যাট্রিক্স হ্যাকস',
      chaptersCount: (scienceData.higherMath?.firstPaper?.length || 0) + (scienceData.higherMath?.secondPaper?.length || 0)
    },
    {
      id: 'biology',
      name: 'জীববিজ্ঞান (Biology)',
      status: 'choice',
      statusText: 'বাধ্যতামূলক / ৪র্থ বিষয়',
      description: 'উদ্ভিদবিজ্ঞান ও প্রাণীবিজ্ঞানের মোস্ট রিপিটেড এমসিকিউ',
      chaptersCount: (scienceData.biology?.botany?.length || 0) + (scienceData.biology?.zoology?.length || 0)
    }
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto py-2 px-3 sm:px-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 space-y-2 shadow-xl">
        <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full font-bold inline-block">
          DU A Unit / GST KA
        </span>
        <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">বিজ্ঞান ইউনিট (Science Stream)</h2>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          ভার্সিটি ভর্তি পরীক্ষার জন্য পদার্থবিজ্ঞান, রসায়ন, উচ্চতর গণিত ও বায়োলজির পূর্ণাঙ্গ শর্টকাট মিশন।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scienceSubjects.map(sub => {
          return (
            <Link
              key={sub.id}
              to={`/science/subject/${sub.id}`}
              className="bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 p-5 sm:p-6 rounded-3xl transition-all flex flex-col justify-between gap-4 group shadow-lg cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <FiCheckCircle /> {sub.statusText}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{sub.chaptersCount}টি অধ্যায় উপলব্ধ</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold transition-colors flex items-center gap-2 text-white group-hover:text-emerald-400">
                  <FiBookOpen className="text-emerald-400 shrink-0" /> {sub.name}
                </h3>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-800/80 text-xs gap-3">
                <span className="text-slate-400 leading-relaxed">
                  {sub.description}
                </span>
                <FiArrowRight className="text-base transition-all group-hover:translate-x-1.5 text-emerald-400 shrink-0" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default StreamSelection;