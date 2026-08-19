import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { scienceData } from '../../Data/scienceData';
import { FiArrowLeft, FiArrowRight, FiBookOpen, FiStar, FiZap } from 'react-icons/fi';

const ScienceHacks = () => {
  const { subjectId } = useParams();
  const currentSubject = scienceData.subjects.find(s => s.id === subjectId?.toLowerCase());

  if (!currentSubject) {
    return (
      <div className="text-center py-16">
        <h2 className="text-lg font-bold">বিষয় পাওয়া যায়নি!</h2>
        <Link to="/science" className="btn bg-emerald-500 text-slate-950 mt-4 rounded-xl font-bold">সায়েন্স হোমে ফিরুন</Link>
      </div>
    );
  }

  const botanyChapters = currentSubject.chapters?.filter(c => c.paper.includes('১ম পত্র')) || [];
  const zoologyChapters = currentSubject.chapters?.filter(c => c.paper.includes('২য় পত্র')) || [];

  return (
    <div className="space-y-8 max-w-5xl w-full mx-auto py-2">
      <Link to="/science" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors">
        <FiArrowLeft /> সায়েন্স বিষয় তালিকায় ফিরে যান
      </Link>

      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 space-y-2">
        <div className="flex justify-between items-center">
          <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-bold">
            DU A & GST KA Focus
          </span>
          <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
            <FiStar /> স্টার অনুযায়ী সাজানো
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">{currentSubject.name}</h2>
        <p className="text-slate-300 text-xs sm:text-sm">{currentSubject.subtitle}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-sm sm:text-base font-extrabold text-emerald-400 flex items-center gap-2">
            🌿 উদ্ভিদবিজ্ঞান (১ম পত্র - মোস্ট ইম্পর্ট্যান্ট অধ্যায়)
          </h3>
          <span className="text-xs text-slate-400">{botanyChapters.length}টি অধ্যায়</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {botanyChapters.map(ch => (
            <div
              key={ch.id}
              className={`p-5 rounded-3xl border transition-all flex flex-col justify-between gap-3 ${
                ch.importance === 5 
                  ? 'bg-slate-900/90 border-emerald-500/40 hover:border-emerald-400 shadow-md shadow-emerald-950/20' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 text-sm font-bold tracking-wider">{ch.stars}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    ch.importance === 5 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {ch.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FiBookOpen className="text-emerald-400" /> {ch.chapterNo}: {ch.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  🏛️ <strong className="text-slate-300">অ্যানালাইসিস:</strong> {ch.duRepeats}
                </p>
                <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800/80 text-[11px] text-emerald-300 flex items-center gap-1.5">
                  <FiZap className="text-amber-400 shrink-0" /> <span>{ch.shortcuts}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-semibold">{ch.weightage}</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1 cursor-pointer hover:underline">
                  প্রশ্ন ব্যাংক ওপেন করো <FiArrowRight />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-sm sm:text-base font-extrabold text-cyan-400 flex items-center gap-2">
            🧬 প্রাণীবিজ্ঞান (২য় পত্র - মোস্ট ইম্পর্ট্যান্ট অধ্যায়)
          </h3>
          <span className="text-xs text-slate-400">{zoologyChapters.length}টি অধ্যায়</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {zoologyChapters.map(ch => (
            <div
              key={ch.id}
              className={`p-5 rounded-3xl border transition-all flex flex-col justify-between gap-3 ${
                ch.importance === 5 
                  ? 'bg-slate-900/90 border-cyan-500/40 hover:border-cyan-400 shadow-md shadow-cyan-950/20' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 text-sm font-bold tracking-wider">{ch.stars}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    ch.importance === 5 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {ch.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FiBookOpen className="text-cyan-400" /> {ch.chapterNo}: {ch.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  🏛️ <strong className="text-slate-300">অ্যানালাইসিস:</strong> {ch.duRepeats}
                </p>
                <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800/80 text-[11px] text-cyan-300 flex items-center gap-1.5">
                  <FiZap className="text-amber-400 shrink-0" /> <span>{ch.shortcuts}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-semibold">{ch.weightage}</span>
                <span className="text-cyan-400 font-bold flex items-center gap-1 cursor-pointer hover:underline">
                  প্রশ্ন ব্যাংক ওপেন করো <FiArrowRight />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScienceHacks;