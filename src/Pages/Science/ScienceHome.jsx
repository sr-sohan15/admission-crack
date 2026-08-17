import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scienceData } from '../../Data/scienceData';
import { FiBookOpen, FiArrowRight, FiCheckCircle, FiZap, FiTarget, FiCheck } from 'react-icons/fi';

const ScienceHome = () => {
  const [completedDays, setCompletedDays] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('chancehack-science-plan');
    if (saved) setCompletedDays(JSON.parse(saved));
  }, []);

  const toggleDay = (idx) => {
    let updated;
    if (completedDays.includes(idx)) {
      updated = completedDays.filter(d => d !== idx);
    } else {
      updated = [...completedDays, idx];
    }
    setCompletedDays(updated);
    localStorage.setItem('chancehack-science-plan', JSON.stringify(updated));
  };

  const studyPlanList = scienceData?.studyPlan || [];
  const subjectsList = scienceData?.subjects || [];
  const progress = studyPlanList.length > 0 
    ? Math.round((completedDays.length / studyPlanList.length) * 100) 
    : 0;

  return (
    <div className="space-y-8 max-w-5xl w-full mx-auto py-2">
      {/* Header Banner - scienceData.title ব্যবহার করা হয়েছে */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-9 space-y-4 shadow-xl">
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 inline-flex items-center gap-1.5">
          <FiZap /> DU A Unit ক্র্যাশ কোর্স
        </span>
        
        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {scienceData?.title}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            {scienceData?.subtitle}
          </p>
        </div>
      </div>

      {/* 30-Day Mission Tracker */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 space-y-5 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FiTarget className="text-emerald-400" /> সায়েন্স ডেইলি মিশন ট্র্যাকার
            </h3>
            <p className="text-xs text-slate-400">প্রতিদিনের টাস্ক কমপ্লিট করে টিক দিয়ে প্রোগ্রেস বাড়াও</p>
          </div>
          <span className="text-emerald-400 font-bold text-sm bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-xl">
            {progress}% সম্পন্ন
          </span>
        </div>

        <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
          <div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {studyPlanList.map((item, idx) => {
            const isDone = completedDays.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleDay(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex justify-between items-center select-none ${
                  isDone 
                    ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200' 
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    Day {item.day}
                  </span>
                  <p className="text-xs font-semibold text-slate-200">{item.task}</p>
                </div>
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all shrink-0 ml-2 ${
                  isDone ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                }`}>
                  {isDone && <FiCheck className="text-sm font-black" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subject Cards Grid */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">বিষয় নির্বাচন ও ১০০% কমন শর্টকাট</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjectsList.map(sub => {
            const chapterCount = sub.chapters?.length || 0;

            return (
              <Link
                key={sub.id}
                to={`/science/subject/${sub.id}`}
                className="p-5 sm:p-6 rounded-3xl border transition-all flex flex-col justify-between gap-4 group bg-slate-900/70 border-slate-800 hover:border-emerald-500/50"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <FiCheckCircle />
                      {sub.statusText}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{chapterCount}টি অধ্যায়</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold transition-colors flex items-center gap-2 text-white group-hover:text-emerald-400">
                    <FiBookOpen className="text-emerald-400" /> {sub.name}
                  </h3>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-800/80 text-xs">
                  <span className="text-slate-400">{sub.tagline}</span>
                  <FiArrowRight className="text-base transition-all group-hover:translate-x-1 text-emerald-400" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScienceHome;