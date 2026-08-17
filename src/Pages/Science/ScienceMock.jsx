import React, { useState, useEffect } from 'react';
import { scienceData } from '../../Data/scienceData';
import { FiClock, FiCheckCircle, FiXCircle, FiRefreshCw } from 'react-icons/fi';

const ScienceMock = () => {
  const [examStarted, setExamStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // সায়েন্সের মেইন ৪টি বিষয়ের প্রশ্ন ফিল্টার
  const scienceQuestions = scienceData.subjects
    .filter(s => s.status !== 'skippable')
    .flatMap(sub => sub.questions);

  useEffect(() => {
    let timer;
    if (examStarted && timeLeft > 0 && !isSubmitted) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && !isSubmitted) {
      setIsSubmitted(true);
    }
    return () => clearInterval(timer);
  }, [examStarted, timeLeft, isSubmitted]);

  const handleStart = () => {
    setExamStarted(true);
    setTimeLeft(60);
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const handleSelect = (qId, optionIdx) => {
    if (!isSubmitted) {
      setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    }
  };

  const calculateScore = () => {
    let correct = 0;
    let wrong = 0;
    scienceQuestions.forEach(q => {
      if (userAnswers[q.id] !== undefined) {
        if (userAnswers[q.id] === q.correctAnswer) {
          correct += 1;
        } else {
          wrong += 1;
        }
      }
    });
    const totalScore = (correct * 1) - (wrong * 0.25);
    return { correct, wrong, totalScore };
  };

  const result = calculateScore();

  return (
    <div className="max-w-3xl w-full mx-auto space-y-6 py-2">
      {!examStarted ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-12 text-center space-y-5">
          <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-bold">
            সায়েন্স স্পিড টেস্ট
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">বিজ্ঞান ইউনিট লাইভ মক টেস্ট</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            নেগেটিভ মার্কিং (<span className="text-red-400 font-bold">০.২৫</span>) সহ দ্রুত সঠিক শর্টকাট প্রয়োগ করার ক্ষমতা যাচাই করুন।
          </p>
          <button
            onClick={handleStart}
            className="btn bg-emerald-500 hover:bg-emerald-600 text-slate-950 border-none rounded-xl px-8 font-bold text-sm shadow-lg shadow-emerald-500/20"
          >
            মক টেস্ট শুরু করুন
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Topbar */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex justify-between items-center sticky top-20 z-40 backdrop-blur-md">
            <div>
              <span className="text-xs font-semibold text-slate-400">ইউনিট: বিজ্ঞান (Physics, Chem, Math, Bio)</span>
              <p className="text-sm font-bold text-white">উত্তর দেওয়া হয়েছে: {Object.keys(userAnswers).length}/{scienceQuestions.length}</p>
            </div>
            <div className={`flex items-center gap-2 text-base font-black px-4 py-1.5 rounded-xl border ${
              timeLeft <= 15 ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse' : 'bg-slate-800 text-emerald-400 border-slate-700'
            }`}>
              <FiClock /> {timeLeft}s
            </div>
          </div>

          {/* Result Summary */}
          {isSubmitted && (
            <div className="bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/40 rounded-3xl p-6 text-center space-y-4">
              <h3 className="text-xl font-bold text-white">টেস্ট সমাপ্ত! আপনার রেজাল্ট:</h3>
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto text-center">
                <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
                  <span className="text-xs text-slate-400 block">সঠিক</span>
                  <strong className="text-emerald-400 text-lg">{result.correct}</strong>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
                  <span className="text-xs text-slate-400 block">ভুল (-০.২৫)</span>
                  <strong className="text-red-400 text-lg">{result.wrong}</strong>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
                  <span className="text-xs text-slate-400 block">প্রাপ্ত নম্বর</span>
                  <strong className="text-white text-lg">{result.totalScore.toFixed(2)}</strong>
                </div>
              </div>
              <button onClick={handleStart} className="btn btn-sm bg-emerald-500 text-slate-950 rounded-xl px-5 font-bold border-none">
                <FiRefreshCw /> আবার পরীক্ষা দিন
              </button>
            </div>
          )}

          {/* Questions */}
          <div className="space-y-4">
            {scienceQuestions.map((q, idx) => {
              const selected = userAnswers[q.id];
              return (
                <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3">
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    <span className="text-emerald-400 mr-1.5">{idx + 1}.</span> {q.question}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, oIdx) => {
                      let style = "border-slate-800 bg-slate-950/60 text-slate-300 hover:bg-slate-800";
                      if (selected === oIdx) {
                        style = "border-emerald-500 bg-emerald-500/20 text-emerald-300 font-bold";
                      }
                      if (isSubmitted) {
                        if (oIdx === q.correctAnswer) {
                          style = "border-emerald-500 bg-emerald-950 text-emerald-200 font-bold";
                        } else if (selected === oIdx) {
                          style = "border-red-500 bg-red-950 text-red-200 font-bold";
                        }
                      }
                      return (
                        <button
                          key={oIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelect(q.id, oIdx)}
                          className={`p-3 rounded-xl border text-left text-xs transition-all flex justify-between items-center ${style}`}
                        >
                          <span><strong>{String.fromCharCode(65 + oIdx)}.</strong> {opt}</span>
                          {isSubmitted && oIdx === q.correctAnswer && <FiCheckCircle className="text-emerald-400" />}
                          {isSubmitted && selected === oIdx && oIdx !== q.correctAnswer && <FiXCircle className="text-red-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {!isSubmitted && (
            <div className="text-center pt-2">
              <button
                onClick={() => setIsSubmitted(true)}
                className="btn bg-emerald-500 hover:bg-emerald-600 text-slate-950 border-none rounded-xl px-8 font-bold"
              >
                সাবমিট করুন
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScienceMock;