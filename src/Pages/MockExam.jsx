import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { biologyData } from '../Data/Science/biology/biologyData';
import { FiClock, FiCheckCircle, FiXCircle, FiRotateCcw, FiAward, FiArrowLeft, FiAlertCircle } from 'react-icons/fi';

// Fisher-Yates Shuffle Algorithm
const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const MockExam = () => {
  const [examQuestions, setExamQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // ২৫ মিনিট (DU স্ট্যান্ডার্ড)
  const [examStarted, setExamStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(25); // ২৫টি প্রশ্ন

  // নতুন মক টেস্ট শুরু ও প্রশ্ন-অপশন শাফল করার ফাংশন
  const startNewExam = (count = 25) => {
    setQuestionCount(count);
    
    // বায়োলজির বোটানি ও জুলজির সব প্রশ্ন একত্রিত করা
    const allBiologyRaw = [
      ...(biologyData?.botany || []).flatMap(ch => ch.questions || []),
      ...(biologyData?.zoology || []).flatMap(ch => ch.questions || [])
    ];

    // ১. প্রথমে সব প্রশ্ন এলোমেলো (Shuffle) করে নির্দিষ্ট সংখ্যক নেওয়া
    const selected = shuffleArray(allBiologyRaw).slice(0, count);

    // ২. প্রতিটি প্রশ্নের অপশনগুলোকেও এলোমেলো (Shuffle) করা এবং নতুন correctAnswer ইনডেক্স ট্র্যাক করা
    const preparedQuestions = selected.map((q, idx) => {
      const originalCorrectText = q.options[q.correctAnswer];
      const shuffledOptions = shuffleArray(q.options);
      const newCorrectIndex = shuffledOptions.indexOf(originalCorrectText);

      return {
        ...q,
        uniqueExamId: `${q.id || idx}_${Date.now()}_${idx}`,
        options: shuffledOptions,
        correctAnswer: newCorrectIndex,
        originalCorrectText
      };
    });

    setExamQuestions(preparedQuestions);
    setUserAnswers({});
    setIsSubmitted(false);
    setTimeLeft(count * 60); // প্রতি প্রশ্নে ১ মিনিট
    setExamStarted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // টাইমার হ্যান্ডলার
  useEffect(() => {
    let timer;
    if (examStarted && !isSubmitted && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && examStarted && !isSubmitted) {
      setIsSubmitted(true);
    }
    return () => clearInterval(timer);
  }, [examStarted, isSubmitted, timeLeft]);

  const handleSelect = (qIdx, optionIdx) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [qIdx]: optionIdx
    }));
  };

  // স্কোর ক্যালকুলেশন (DU A Unit স্ট্যান্ডার্ড: সঠিক +১, ভুল -০.২৫)
  const calculateScore = () => {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    examQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === undefined) {
        unattempted++;
      } else if (userAnswers[idx] === q.correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });

    const finalScore = (correct * 1) - (wrong * 0.25);
    return { correct, wrong, unattempted, finalScore: finalScore.toFixed(2) };
  };

  const scoreData = isSubmitted ? calculateScore() : null;

  // সময় ফরম্যাট
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 max-w-4xl w-full mx-auto py-2">
      {/* শুরুর স্ক্রিন */}
      {!examStarted ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto text-2xl">
            <FiAward />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white">DU A Unit বায়োলজি মক টেস্ট</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              প্রতিবার সম্পূর্ণ নতুন ও এলোমেলো (Shuffled) প্রশ্ন ও অপশনে পরীক্ষা দাও। নেগেটিভ মার্কিং সহ লাইভ রেজাল্ট শিট।
            </p>
          </div>

          {/* নিয়মাবলী */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left text-xs text-slate-300">
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-2xl">
              <span className="text-emerald-400 font-bold block mb-1">⏱️ সময়সীমা</span>
              প্রতি প্রশ্নে ১ মিনিট (DU স্ট্যান্ডার্ড)
            </div>
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-2xl">
              <span className="text-emerald-400 font-bold block mb-1">🎯 নেগেটিভ মার্কিং</span>
              ভুল উত্তরে -০.২৫ কাটা যাবে
            </div>
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-2xl">
              <span className="text-emerald-400 font-bold block mb-1">🔀 রিয়েল র‍্যান্ডম</span>
              প্রশ্ন ও ৪টি অপশন প্রতিবার পরিবর্তনশীল
            </div>
          </div>

          {/* শুরু বাটন */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => startNewExam(25)}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-sm transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              ২৫ নম্বরের মক টেস্ট শুরু করো
            </button>
            <button
              onClick={() => startNewExam(50)}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white font-bold rounded-2xl text-sm transition-all cursor-pointer"
            >
              ৫০ নম্বরের মেগা টেস্ট
            </button>
          </div>
        </div>
      ) : (
        /* রানিং এক্সাম ও রেজাল্ট স্ক্রিন */
        <div className="space-y-6">
          {/* ফ্লোটিং স্ট্যাটাস বার */}
          <div className="sticky top-4 z-40 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-4 shadow-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link to="/science" className="text-slate-400 hover:text-white text-xs font-bold flex items-center gap-1">
                <FiArrowLeft /> এক্সিট
              </Link>
              <span className="text-xs font-bold text-slate-300 border-l border-slate-800 pl-3">
                উত্তর সম্পন্ন: <strong className="text-emerald-400">{Object.keys(userAnswers).length}</strong>/{examQuestions.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {!isSubmitted && (
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold border ${
                  timeLeft < 300 
                    ? 'bg-red-950/60 border-red-500/40 text-red-400 animate-pulse' 
                    : 'bg-slate-950 border-slate-800 text-emerald-400'
                }`}>
                  <FiClock /> {formatTime(timeLeft)}
                </div>
              )}

              {!isSubmitted ? (
                <button
                  onClick={() => setIsSubmitted(true)}
                  className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black rounded-xl cursor-pointer"
                >
                  পরীক্ষা সাবমিট করো
                </button>
              ) : (
                <button
                  onClick={() => startNewExam(questionCount)}
                  className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black rounded-xl flex items-center gap-1 cursor-pointer"
                >
                  <FiRotateCcw /> পুনরায় নতুন পরীক্ষা দাও
                </button>
              )}
            </div>
          </div>

          {/* রেজাল্ট কার্ড (সাবমিটের পর প্রদর্শিত হবে) */}
          {isSubmitted && scoreData && (
            <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">টেস্ট সম্পন্ন হয়েছে</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-0.5">মক টেস্ট রেজাল্ট শিট</h3>
                </div>
                <div className="bg-emerald-500 text-slate-950 px-5 py-2.5 rounded-2xl text-center shadow-lg shadow-emerald-500/20">
                  <span className="text-[10px] uppercase font-bold block">প্রাপ্ত নম্বর</span>
                  <span className="text-2xl font-black">{scoreData.finalScore}</span>
                  <span className="text-[10px] font-bold block">/{examQuestions.length}</span>
                </div>
              </div>

              {/* স্ট্যাটাস গ্রিড */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 bg-slate-950/60 border border-emerald-500/20 rounded-2xl text-center">
                  <span className="text-xs text-emerald-400 font-semibold block">সঠিক (+১.০০)</span>
                  <strong className="text-xl font-black text-emerald-400">{scoreData.correct}টি</strong>
                </div>
                <div className="p-3.5 bg-slate-950/60 border border-red-500/20 rounded-2xl text-center">
                  <span className="text-xs text-red-400 font-semibold block">ভুল (-০.২৫)</span>
                  <strong className="text-xl font-black text-red-400">{scoreData.wrong}টি</strong>
                </div>
                <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-2xl text-center">
                  <span className="text-xs text-slate-400 font-semibold block">উত্তর দাওনি</span>
                  <strong className="text-xl font-black text-slate-300">{scoreData.unattempted}টি</strong>
                </div>
              </div>
            </div>
          )}

          {/* প্রশ্নসমূহ */}
          <div className="space-y-4">
            {examQuestions.map((q, qIdx) => {
              const userChoice = userAnswers[qIdx];
              const isAnswered = userChoice !== undefined;

              return (
                <div key={q.uniqueExamId} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 space-y-4 shadow-sm">
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg font-bold">
                      প্রশ্ন {qIdx + 1}/{examQuestions.length}
                    </span>

                    {/* সাবমিটের পর ব্যাজ */}
                    {isSubmitted && (
                      <div>
                        {!isAnswered ? (
                          <span className="text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md text-[11px] font-bold">
                            উত্তর দাওনি
                          </span>
                        ) : userChoice === q.correctAnswer ? (
                          <span className="text-emerald-300 bg-emerald-950 border border-emerald-500/30 px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1">
                            <FiCheckCircle /> সঠিক (+১.০০)
                          </span>
                        ) : (
                          <span className="text-red-300 bg-red-950 border border-red-500/30 px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1">
                            <FiXCircle /> ভুল উত্তর (-০.২৫)
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                    {q.question}
                  </h4>

                  {/* ৪টি অপশন */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, oIdx) => {
                      let btnStyle = "border-slate-800 bg-slate-950/60 hover:bg-slate-850 text-slate-300";

                      if (!isSubmitted) {
                        // পরীক্ষা চলাকালীন
                        if (userChoice === oIdx) {
                          btnStyle = "border-emerald-500 bg-emerald-950/80 text-emerald-200 font-bold ring-1 ring-emerald-500/40";
                        }
                      } else {
                        // সাবমিটের পর রেজাল্ট ভিউ
                        if (oIdx === q.correctAnswer) {
                          btnStyle = "border-emerald-500 bg-emerald-950/80 text-emerald-200 font-bold ring-1 ring-emerald-500/50";
                        } else if (userChoice === oIdx) {
                          btnStyle = "border-red-500 bg-red-950/80 text-red-200 font-bold";
                        } else {
                          btnStyle = "border-slate-800 bg-slate-950/20 text-slate-600 opacity-40";
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelect(qIdx, oIdx)}
                          className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <span>
                            <strong className="mr-2 text-slate-400">{String.fromCharCode(65 + oIdx)}.</strong>
                            {opt}
                          </span>
                          {isSubmitted && oIdx === q.correctAnswer && <FiCheckCircle className="text-emerald-400 text-base" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* সাবমিটের পর ব্যাখ্যা ও শর্টকাট প্রদর্শন */}
                  {isSubmitted && (
                    <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-2 text-xs text-slate-300">
                      {q.hack && (
                        <div className="flex items-start gap-2 text-emerald-300">
                          <span className="bg-emerald-500/10 text-emerald-400 font-bold px-2 py-0.5 rounded text-[10px] shrink-0">
                            টেকনিক
                          </span>
                          <span>{q.hack}</span>
                        </div>
                      )}
                      {q.explanation && (
                        <p className="text-slate-400 pt-1 border-t border-slate-850 leading-relaxed">
                          <strong className="text-slate-300">ব্যাখ্যা:</strong> {q.explanation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MockExam;