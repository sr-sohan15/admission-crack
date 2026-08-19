import React, { useState, useEffect } from 'react';
import { FiTarget, FiX, FiCheck } from 'react-icons/fi';
import { scienceData } from "../Data/Science/scienceData";

const MissionTrackerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  const progress = studyPlanList.length > 0 
    ? Math.round((completedDays.length / studyPlanList.length) * 100) 
    : 0;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-emerald-950/20 transition-all group"
      >
        <FiTarget className="text-emerald-400 text-xl group-hover:rotate-45 transition-transform" />
        <span>সায়েন্স ডেইলি মিশন ট্র্যাকার ওপেন করো</span>
        <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full ml-2 border border-emerald-500/30">
          {progress}% সম্পন্ন
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-3xl rounded-3xl p-6 sm:p-8 relative shadow-2xl my-8 max-h-[90vh] flex flex-col">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800 p-2.5 rounded-full transition-all"
            >
              <FiX className="text-lg" />
            </button>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5 pr-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <FiTarget className="text-emerald-400" /> সায়েন্স ডেইলি মিশন ট্র্যাকার
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">প্রতিদিনের টাস্ক কমপ্লিট করে টিক দিয়ে প্রোগ্রেস বাড়াও</p>
              </div>
              <span className="text-emerald-400 font-bold text-sm bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-xl">
                {progress}% সম্পন্ন
              </span>
            </div>

            <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800 mb-6 shrink-0">
              <div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="grid grid-cols-1 gap-3 overflow-y-auto pr-1">
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
        </div>
      )}
    </>
  );
};

export default MissionTrackerModal;