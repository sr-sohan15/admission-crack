import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { admissionData } from '../Data/admissionData';
import { FiArrowRight, FiBookOpen, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

const StreamSelection = () => {
  const { streamId } = useParams();
  const currentStream = admissionData[streamId?.toLowerCase()];

  if (!currentStream) {
    return (
      <div className="text-center py-16 sm:py-24">
        <h2 className="text-lg sm:text-xl font-bold">স্ট্রিম পাওয়া যায়নি!</h2>
        <Link to="/" className="btn bg-emerald-500 text-slate-950 mt-4 rounded-xl font-bold">হোমে ফিরে যান</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto py-2">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 space-y-2">
        <h2 className="text-xl sm:text-3xl font-extrabold text-white">{currentStream.title}</h2>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{currentStream.subtitle}</p>
      </div>

      {/* Subject Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentStream.subjects.map(sub => {
          const isSkippable = sub.status === 'skippable';
          const isCompulsory = sub.status === 'compulsory';

          return (
            <Link
              key={sub.id}
              to={`/stream/${streamId}/subject/${sub.id}`}
              className={`p-5 sm:p-6 rounded-3xl border transition-all flex flex-col justify-between gap-4 group ${
                isSkippable 
                  ? 'bg-red-950/20 border-red-500/40 hover:border-red-500' 
                  : 'bg-slate-900/70 border-slate-800 hover:border-emerald-500/50'
              }`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                    isSkippable 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : isCompulsory 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  }`}>
                    {isSkippable ? <FiAlertCircle /> : <FiCheckCircle />}
                    {sub.statusText}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{sub.mustReadChapters.length}টি অধ্যায়</span>
                </div>

                <h3 className={`text-base sm:text-lg font-bold transition-colors flex items-center gap-2 ${
                  isSkippable ? 'text-red-200 group-hover:text-red-300' : 'text-white group-hover:text-emerald-400'
                }`}>
                  <FiBookOpen className={isSkippable ? 'text-red-400' : 'text-emerald-400'} /> {sub.name}
                </h3>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-slate-800/80 text-xs">
                <span className="text-slate-400">
                  {isSkippable ? 'Math/Bio কঠিন লাগলে এটি পড়ো' : '১০০% কমন টাইপ ও শর্টকাট হ্যাকস'}
                </span>
                <FiArrowRight className={`text-base transition-all group-hover:translate-x-1 ${
                  isSkippable ? 'text-red-400' : 'text-emerald-400'
                }`} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default StreamSelection;