import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scienceData } from '../Data/Science/scienceData';
import { FiBookmark, FiTrash2, FiArrowLeft, FiZap } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Bookmarks = () => {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('chancehack-bookmarks');
    if (saved) setBookmarkedIds(JSON.parse(saved));
  }, []);

  const getAllQuestions = () => {
    let allQ = [];
    
    Object.values(scienceData).forEach(subject => {
      ['firstPaper', 'secondPaper'].forEach(paperKey => {
        if (subject[paperKey] && Array.isArray(subject[paperKey])) {
          subject[paperKey].forEach(chapter => {
            if (chapter.questions && Array.isArray(chapter.questions)) {
              allQ.push(...chapter.questions);
            }
          });
        }
      });

      if (subject.botany && Array.isArray(subject.botany)) {
        subject.botany.forEach(ch => ch.questions && allQ.push(...ch.questions));
      }
      if (subject.zoology && Array.isArray(subject.zoology)) {
        subject.zoology.forEach(ch => ch.questions && allQ.push(...ch.questions));
      }
      if (subject.chapters && Array.isArray(subject.chapters)) {
        subject.chapters.forEach(ch => {
          if (ch.questions && Array.isArray(ch.questions)) {
            allQ.push(...ch.questions);
          }
        });
      }
    });

    return allQ;
  };

  const allQuestions = getAllQuestions();
  const bookmarkedQuestions = allQuestions.filter(q => bookmarkedIds.includes(q.id));

  const removeBookmark = (qId) => {
    const updated = bookmarkedIds.filter(id => id !== qId);
    setBookmarkedIds(updated);
    localStorage.setItem('chancehack-bookmarks', JSON.stringify(updated));
    toast.info('রিভিশন তালিকা থেকে সরানো হয়েছে');
  };

  return (
    <div className="space-y-6 max-w-4xl w-full mx-auto py-2">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-emerald-400">
        <FiArrowLeft /> হোমে ফিরে যান
      </Link>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <FiZap /> One-Night Revision Hub
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">আমার সেভ করা শর্টকাট ও ট্রিকস</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">পরীক্ষার আগের রাতে শুধু এই পয়েন্টগুলো রিভিশন দিয়ে যাও</p>
        </div>
        <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold shrink-0">
          মোট সেভড: {bookmarkedQuestions.length} টি
        </span>
      </div>

      {bookmarkedQuestions.length === 0 ? (
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-3">
          <FiBookmark className="text-4xl text-slate-600 mx-auto" />
          <h3 className="text-base sm:text-lg font-bold text-white">কোনো প্রশ্ন বুকমার্ক করা নেই!</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            যেকোনো বিষয়ের প্রশ্ন পড়ার সময় উপরে বুকমার্ক আইকনে ক্লিক করে এখানে সেভ করে রাখতে পারো।
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookmarkedQuestions.map((q, idx) => (
            <div key={q.id || idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-7 space-y-4 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3 text-xs">
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg font-bold">{q.type || 'শর্টকাট ও ট্রিকস'}</span>
                <button 
                  onClick={() => removeBookmark(q.id)}
                  className="btn btn-ghost btn-circle btn-xs text-red-400 hover:bg-red-950/30"
                  title="Remove Bookmark"
                >
                  <FiTrash2 className="text-sm" />
                </button>
              </div>

              <h4 className="text-sm sm:text-lg font-bold text-white leading-relaxed">
                <span className="text-emerald-400 mr-1.5">{idx + 1}.</span> {q.question}
              </h4>

              <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl space-y-2 text-xs text-slate-300">
                {q.hack && <p className="font-bold text-emerald-400 text-xs sm:text-sm">{q.hack}</p>}
                {q.eliminationTip && <p className="text-amber-300 font-semibold">{q.eliminationTip}</p>}
                {q.explanation && (
                  <p className="text-slate-400 pt-1 border-t border-slate-800 leading-relaxed">
                    <strong className="text-slate-300">ব্যাখ্যা:</strong> {q.explanation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;