import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaLock, FaUnlockAlt, FaReply, FaTrash, FaEdit, FaKey, FaStar, FaCheck } from 'react-icons/fa';
import { FiCheckCircle, FiHelpCircle, FiUser } from 'react-icons/fi';

// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyCPAn4MxbKwL5ERRZFoalF8hP7XAWG55E",
  authDomain: "tabiha-91277.firebaseapp.com",
  databaseURL: "https://tabiha-91277-default-rtdb.firebaseio.com/",
  projectId: "tabiha-91277",
  storageBucket: "tabiha-91277.appspot.com",
  messagingSenderId: "41456858367",
  appId: "1:41456858367:web:979df18bf20edeaa2d08ca",
  measurementId: "G-2C56GPSON3"
};

// --- FIREBASE INITIALIZATION ---
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, push, onValue, remove, update } from "firebase/database";

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
const db = getDatabase(app);
// ---------------------------------------------------------------

import { v4 as uuidv4 } from 'uuid';

const duQuestionPool = [
  {
    question: "ঢাকা বিশ্ববিদ্যালয় কত সালে প্রতিষ্ঠিত হয়?",
    options: ["১৯২০ সালে", "১৯২১ সালে", "১৯২২ সালে", "১৯২৩ সালে"],
    correct: 1
  },
  {
    question: "নিচের কোনটি ভেক্টর রাশি নয়?",
    options: ["বেগ", "ত্বরণ", "দ্রুতি", "বল"],
    correct: 2
  },
  {
    question: "সবচেয়ে বেশি তড়িৎ ঋণাত্মক মৌল কোনটি?",
    options: ["ফ্লোরিন (F)", "অক্সিজেন (O)", "ক্লোরিন (Cl)", "নাইট্রোজেন (N)"],
    correct: 0
  },
  {
    question: "একটি বৃত্তের সমীকরণ x^2 + y^2 = r^2 হলে এর কেন্দ্র কত?",
    options: ["(1, 1)", "(r, r)", "(0, 0)", "(r, 0)"],
    correct: 2
  },
  {
    question: "কোনটি প্রাইমারি স্ট্যান্ডার্ড পদার্থ?",
    options: ["HCl", "NaOH", "H2SO4", "K2Cr2O7"],
    correct: 3
  },
  {
    question: "শালকসংশ্লেষণে আলোর কোন বর্ণে সবচেয়ে বেশি শোষণ হয়?",
    options: ["সবুজ ও হলুদ", "লাল ও নীল", "কমলা ও হলুদ", "সবুজ ও বেগুনি"],
    correct: 1
  }
];

const LovePuzzleModal = ({ isOpen, onClose, onSuccess, photoUrl }) => {
  const [mode, setMode] = useState('choice'); 
  const [userCode, setUserCode] = useState('');
  const [codeError, setCodeError] = useState(false);
  
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizError, setQuizError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFullView, setIsFullView] = useState(false);

  // ব্রাউজারের জন্য ইউনিক ভিজিটর আইডি
  const [visitorId] = useState(() => {
    let id = localStorage.getItem('tabiha_visitor_id');
    if (!id) {
      id = uuidv4();
      localStorage.setItem('tabiha_visitor_id', id);
    }
    return id;
  });

  // --- নোট বোর্ডের স্টেট ---
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');
  const [replyTexts, setReplyTexts] = useState({});
  
  const [editingNote, setEditingNote] = useState(null);       
  const [editingReply, setEditingReply] = useState(null);   

  const [authorKey, setAuthorKey] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  
  const adminSecretKey = "7815"; 
  const notesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && mode === 'notes') {
      const notesRef = ref(db, 'dedicationNotes');
      onValue(notesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const loadedNotes = Object.entries(data).map(([id, value]) => ({
            ...value,
            id, 
            replies: value.replies ? Object.entries(value.replies).map(([rid, rvalue]) => ({
              ...rvalue,
              id: rid 
            })) : []
          }));
          setNotes(loadedNotes.reverse());
        } else {
          setNotes([]);
        }
      });
    }
  }, [isOpen, mode]);

  if (!isOpen) return null;

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (userCode.trim() === '7815') {
      setSuccess(true);
      setCodeError(false);
      setTimeout(() => {
        setSuccess(false);
        setMode('notes');
      }, 1000);
    } else {
      setCodeError(true);
    }
  };

  const loadRandomQuiz = () => {
    const randomIndex = Math.floor(Math.random() * duQuestionPool.length);
    setCurrentQuiz(duQuestionPool[randomIndex]);
    setSelectedOption(null);
    setQuizError(false);
  };

  const startQuiz = () => {
    loadRandomQuiz();
    setMode('quiz');
  };

  const handleQuizSubmit = () => {
    if (selectedOption === currentQuiz.correct) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setMode('notes');
      }, 1000);
    } else {
      setQuizError(true);
      setTimeout(() => {
        loadRandomQuiz();
      }, 800);
    }
  };

  const resetModal = () => {
    setMode('choice');
    setUserCode('');
    setCodeError(false);
    setCurrentQuiz(null);
    setSelectedOption(null);
    setQuizError(false);
    setSuccess(false);
    setReplyTexts({});
    setEditingNote(null);
    setEditingReply(null);
    setAuthorKey('');
    setIsAdmin(false);
    setShowKeyModal(false);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;

    const newNote = {
      ownerId: visitorId,
      text: newNoteText.trim(),
      date: new Date().toLocaleDateString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
      author: isAdmin ? '✍️ লেখক (Admin)' : '👤 পাবলিক ভিজিটর',
      isAdminNote: isAdmin,
      replies: {}
    };

    const notesRef = ref(db, 'dedicationNotes');
    push(notesRef, newNote);
    setNewNoteText('');
    setTimeout(() => notesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleAddReply = (noteId) => {
    const replyText = replyTexts[noteId];
    if (!replyText || !replyText.trim()) return;

    const newReply = {
      ownerId: visitorId,
      text: replyText.trim(),
      date: new Date().toLocaleDateString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
      author: isAdmin ? '✍️ লেখক (Admin)' : `👤 পাবলিক_${uuidv4().substring(0,4)}`,
      isAdminReply: isAdmin
    };

    const repliesRef = ref(db, `dedicationNotes/${noteId}/replies`);
    push(repliesRef, newReply);
    setReplyTexts(prev => ({ ...prev, [noteId]: '' }));
  };

  const handleDelete = (noteId, firebaseReplyKey = null) => {
    let path = `dedicationNotes/${noteId}`;
    if (firebaseReplyKey) {
      path = `dedicationNotes/${noteId}/replies/${firebaseReplyKey}`;
    }
    remove(ref(db, path)).catch(err => alert("ডিলিট করতে ব্যর্থ: " + err.message));
  };

  const saveEditedNote = (noteId) => {
    if (!editingNote || !editingNote.text.trim()) return;
    update(ref(db, `dedicationNotes/${noteId}`), { text: editingNote.text.trim() })
      .catch(err => alert("এডিট করতে ব্যর্থ: " + err.message));
    setEditingNote(null);
  };

  const saveEditedReply = (noteId, firebaseReplyKey) => {
    if (!editingReply || !editingReply.text.trim()) return;
    update(ref(db, `dedicationNotes/${noteId}/replies/${firebaseReplyKey}`), { text: editingReply.text.trim() })
      .catch(err => alert("এডিট করতে ব্যর্থ: " + err.message));
    setEditingReply(null);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (authorKey === adminSecretKey) {
      setIsAdmin(true);
      setAuthorKey('');
      setShowKeyModal(false);
      alert("সিক্রেট কি গৃহীত! আপনি এখন অথর মোডে আছেন।");
    } else {
      alert("❌ ভুল সিক্রেট কি!");
      setIsAdmin(false);
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    alert("আপনি অথর মোড থেকে লগআউট করেছেন।");
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 dark:bg-slate-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
        <div className="relative max-w-lg w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl my-auto max-h-[94vh] overflow-y-auto flex flex-col space-y-4 text-slate-900 dark:text-slate-100 transition-colors">
          
          {/* মোডাল হেডার বার */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
            {mode === 'notes' ? (
              <button 
                onClick={() => setShowKeyModal(!showKeyModal)}
                className={`p-2.5 rounded-full transition-colors cursor-pointer border ${isAdmin ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
                title={isAdmin ? "অথর মোড সক্রিয়" : "অথর হিসেবে লগইন করুন"}
              >
                {isAdmin ? <FaUnlockAlt className="text-sm" /> : <FaLock className="text-sm" />}
              </button>
            ) : <div />}

            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-black tracking-tight">
                {mode !== 'notes' && 'সিক্রেট এন্ট্রি গেট 🔐'}
              </h3>
            </div>

            <button 
              onClick={() => { resetModal(); onClose(); }}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 p-2 rounded-full transition-colors cursor-pointer"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>

          <div className="absolute -right-10 -top-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col items-center text-center space-y-4 relative z-20">
            
            {mode !== 'notes' && (
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-500 shadow-lg shrink-0">
                {success ? <FaUnlockAlt className="text-2xl text-emerald-600 dark:text-emerald-400 animate-bounce" /> : <FaLock className="text-xl animate-pulse" />}
              </div>
            )}

            {/* --- চয়েস মোড --- */}
            {mode === 'choice' && (
              <div className="w-full space-y-3 pt-2">
                <button
                  onClick={() => setMode('code')}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm py-3.5 rounded-2xl transition-all shadow-lg shadow-emerald-500/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  🔑 আমার সিক্রেট কোড জানা আছে
                </button>

                <button
                  onClick={startQuiz}
                  className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 font-bold text-xs sm:text-sm py-3.5 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <FiHelpCircle className="text-emerald-600 dark:text-emerald-400 text-base shrink-0" /> 
                  <span>কোড নেই? ঢাবির প্রশ্ন উত্তর করে ঢুকো!</span>
                </button>
              </div>
            )}

            {/* --- কোড মোড --- */}
            {mode === 'code' && (
              <form onSubmit={handleCodeSubmit} className="w-full space-y-3 pt-2">
                <div className="w-full bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl text-xs text-left">
                  <p>আপনার সিক্রেট কোডটি নিচে প্রদান করুন:</p>
                </div>

                <input 
                  type="password"
                  value={userCode}
                  onChange={(e) => { setUserCode(e.target.value); setCodeError(false); }}
                  placeholder="সিক্রেট কোড লিখুন..."
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-emerald-500 rounded-2xl px-4 py-3 text-sm text-center font-bold outline-none tracking-widest shadow-inner"
                />

                {codeError && (
                  <p className="text-xs text-red-500 dark:text-red-400 font-semibold">❌ ভুল কোড! সঠিক কোড দিন।</p>
                )}

                {success && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center gap-1">
                    <FiCheckCircle /> সঠিক কোড! প্রবেশ করা হচ্ছে...
                  </p>
                )}

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setMode('choice')}
                    className="w-1/3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold py-3 rounded-xl cursor-pointer"
                  >
                    ফিরে যান
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black py-3 rounded-xl cursor-pointer"
                  >
                    প্রবেশ করো ❤️
                  </button>
                </div>
              </form>
            )}

            {/* --- কুইজ মোড --- */}
            {mode === 'quiz' && currentQuiz && (
              <div className="w-full space-y-3 pt-1 text-left">
                <div className="w-full bg-slate-100 dark:bg-slate-950 border border-emerald-500/30 p-3.5 rounded-2xl space-y-2">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded font-bold inline-block">
                    DU Standard Challenge
                  </span>
                  <p className="text-xs sm:text-sm font-bold leading-relaxed">
                    {currentQuiz.question}
                  </p>
                </div>

                <div className="space-y-2">
                  {currentQuiz.options.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => { setSelectedOption(idx); setQuizError(false); }}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-left transition-all cursor-pointer font-medium flex items-center ${
                        selectedOption === idx 
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200' 
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <strong className="mr-2 text-emerald-600 dark:text-emerald-400 shrink-0">{String.fromCharCode(65 + idx)}.</strong> 
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>

                {quizError && (
                  <p className="text-xs text-red-500 dark:text-red-400 font-semibold text-center animate-shake">
                    ❌ ভুল উত্তর! নতুন প্রশ্ন লোড হচ্ছে...
                  </p>
                )}

                {success && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center gap-1">
                    <FiCheckCircle /> অসাধারণ! সঠিক উত্তর, প্রবেশ করা হচ্ছে...
                  </p>
                )}

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setMode('choice')}
                    className="w-1/3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold py-3 rounded-xl cursor-pointer"
                  >
                    বাতিল
                  </button>
                  <button
                    type="button"
                    onClick={handleQuizSubmit}
                    className="w-2/3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black py-3 rounded-xl cursor-pointer"
                  >
                    উত্তর জমা দিন 🚀
                  </button>
                </div>
              </div>
            )}

            {/* --- নোট বোর্ড ও ডেডিকেশন মোড --- */}
            {mode === 'notes' && (
              <div className="w-full space-y-4 text-left flex-1 flex flex-col">
                
                {/* বড় সাইজের ছবি ও ডেডিকেশন মেসেজ */}
                <div className="bg-slate-100 dark:bg-slate-950/70 border border-emerald-500/40 p-4 sm:p-6 rounded-2xl text-center space-y-3.5 shadow-md">
                  <div className="relative group cursor-pointer inline-block" onClick={() => setIsFullView(true)} title="Click to view full photo ❤️">
                    <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto rounded-3xl overflow-hidden border-3 border-emerald-400 shadow-2xl p-1 bg-white dark:bg-slate-950 transition-transform hover:scale-105">
                      <img src={photoUrl || `${import.meta.env.BASE_URL}munia.jpg`} alt="Tabiha Marzan Munia" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black">For <span className="text-emerald-600 dark:text-emerald-400">Tabiha Marzan Munia</span> ❤️</h4>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed mt-2 text-justify sm:text-center">
                      "জীবনের চাওয়া-পাওয়া তো সবারই বদলায়, কিন্তু কারও জন্য শুভকামনা কখনো বদলে যায় না। এই ওয়েবসাইটের কোড বা শর্টকাটগুলো হয়তো পরীক্ষার প্রস্তুতি ও সাফল্যের সিঁড়ি বেয়ে সামনে এগিয়ে যাওয়ার জন্য, কিন্তু আমার জীবনের সবচেয়ে সুন্দর পাওয়া হলো তোমাকেও এমনভাবে চেনা। তোমার প্রতিটা স্বপ্ন পূরণ হোক, প্রতিটি দিন যেন হাসিমুখে কাটে—আজ এবং আগামীতেও তোমার যেকোনো অর্জনে আমার মন থেকে সবসময় তোমার জন্য অনেক দোয়া ও শুভকামনা থাকবে।"
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-xs text-emerald-600 dark:text-emerald-300 font-bold pt-1">
                    <span>✨ My Inspiration</span>
                    <span>•</span>
                    <span>✨ My Forever Support</span>
                  </div>
                </div>

                {/* লক আইকনে ক্লিক করলে পপ-আপ হওয়া মাস্টার কি বক্স */}
                {showKeyModal && (
                  <div className="bg-slate-100 dark:bg-slate-950 border border-emerald-500/50 p-3 rounded-2xl text-xs space-y-2 animate-fadeIn shadow-xl">
                    {isAdmin ? (
                      <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
                        <span className="font-bold flex items-center gap-1.5"><FaUnlockAlt /> অথর মোড সক্রিয় (Admin)</span>
                        <button onClick={handleAdminLogout} className="text-red-500 dark:text-red-400 hover:underline font-bold cursor-pointer">লগআউট</button>
                      </div>
                    ) : (
                      <form onSubmit={handleAdminLogin} className="flex items-center gap-2">
                        <span className="flex items-center gap-1 shrink-0 font-bold"><FaKey /> মাস্টার কি:</span>
                        <input 
                          type="password" 
                          value={authorKey} 
                          onChange={e => setAuthorKey(e.target.value)} 
                          placeholder="কোড লিখুন..." 
                          className="flex-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3 py-2 rounded-xl outline-none focus:border-emerald-500 font-bold tracking-widest text-center" 
                        />
                        <button type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2 rounded-xl font-black cursor-pointer">এন্টার</button>
                      </form>
                    )}
                  </div>
                )}

                {/* নোট লিস্ট সেকশন */}
                <div className="w-full space-y-3">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 px-1">সকল বার্তা ও নোটস:</h4>
                  
                  <div className="space-y-3">
                    {notes.length === 0 ? (
                      <p className="text-center text-xs text-slate-500 dark:text-slate-400 font-medium py-6">কোনো নোট বা বার্তা নেই। প্রথম নোটটি আপনি লিখুন!</p>
                    ) : (
                      notes.map((note) => {
                        const isMyNote = note.ownerId === visitorId || !note.ownerId;
                        const canModifyNote = isAdmin || isMyNote;

                        return (
                          <div key={note.id} className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-3.5 sm:p-4 rounded-2xl space-y-2.5 shadow">
                            <div className="flex justify-between items-start gap-2">
                              <div className="flex items-center gap-2">
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${note.isAdminNote ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200'}`}>
                                  {note.isAdminNote ? <FaStar className="text-[10px]" /> : <FiUser />}
                                </div>
                                <div>
                                  <p className={`text-xs font-bold ${note.isAdminNote ? 'text-emerald-600 dark:text-emerald-400' : ''}`}>{note.author}</p>
                                  <span className="text-[10px] text-slate-500 dark:text-slate-400">{note.date}</span>
                                </div>
                              </div>

                              {canModifyNote && (
                                <div className="flex items-center gap-2">
                                  {!editingNote && (
                                    <button onClick={() => setEditingNote({ noteId: note.id, text: note.text })} className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 cursor-pointer" title="নোট এডিট করুন">
                                      <FaEdit className="text-xs" />
                                    </button>
                                  )}
                                  <button onClick={() => handleDelete(note.id)} className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 p-1 cursor-pointer" title="নোট ডিলিট করুন">
                                    <FaTrash className="text-xs" />
                                  </button>
                                </div>
                              )}
                            </div>

                            {/* নোট এডিট মোড */}
                            {editingNote && editingNote.noteId === note.id ? (
                              <div className="flex gap-2 pt-1 pl-9">
                                <input 
                                  type="text" 
                                  value={editingNote.text} 
                                  onChange={e => setEditingNote({ ...editingNote, text: e.target.value })} 
                                  className="flex-1 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded-xl text-xs outline-none" 
                                />
                                <button onClick={() => saveEditedNote(note.id)} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 cursor-pointer">
                                  <FaCheck /> সেভ
                                </button>
                                <button onClick={() => setEditingNote(null)} className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-xl text-xs cursor-pointer">
                                  বাতিল
                                </button>
                              </div>
                            ) : (
                              <p className="text-xs sm:text-sm font-medium leading-relaxed pl-9">{note.text}</p>
                            )}

                            {/* রিপ্লাই লিস্ট */}
                            {note.replies && note.replies.length > 0 && (
                              <div className="pl-9 space-y-2 pt-1 border-t border-slate-200 dark:border-slate-800 mt-2">
                                {note.replies.map((reply) => {
                                  const isMyReply = reply.ownerId === visitorId || !reply.ownerId;
                                  const canModifyReply = isAdmin || isMyReply;

                                  return (
                                    <div key={reply.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-2.5 rounded-xl text-xs space-y-1">
                                      <div className="flex justify-between items-center">
                                        <span className={`font-bold text-[11px] ${reply.isAdminReply ? 'text-emerald-600 dark:text-emerald-400' : ''}`}>{reply.author}</span>
                                        <span className="text-[9px] text-slate-500 dark:text-slate-400">{reply.date}</span>
                                      </div>

                                      {/* রিপ্লাই এডিট মোড */}
                                      {editingReply && editingReply.replyId === reply.id ? (
                                        <div className="flex gap-2 pt-1">
                                          <input 
                                            type="text" 
                                            value={editingReply.text} 
                                            onChange={e => setEditingReply({...editingReply, text: e.target.value})} 
                                            className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-2.5 py-1 rounded-lg text-xs outline-none" 
                                          />
                                          <button onClick={() => saveEditedReply(note.id, reply.id)} className="text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center gap-1"><FaCheck /> সেভ</button>
                                          <button onClick={() => setEditingReply(null)} className="text-slate-500 dark:text-slate-400 text-xs">বাতিল</button>
                                        </div>
                                      ) : (
                                        <p className="text-xs font-medium">{reply.text}</p>
                                      )}

                                      {canModifyReply && (
                                        <div className="flex justify-end gap-3 pt-1 text-[10px]">
                                          {(!editingReply) && (
                                            <button onClick={() => setEditingReply({ noteId: note.id, replyId: reply.id, text: reply.text })} className="text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 cursor-pointer font-semibold">
                                              <FaEdit /> এডিট
                                            </button>
                                          )}
                                          <button onClick={() => handleDelete(note.id, reply.id)} className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1 cursor-pointer font-semibold">
                                            <FaTrash /> ডিলিট
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* রিপ্লাই লেখার ইনপুট ও সেন্ড বাটন */}
                            <div className="flex gap-2 pl-9 pt-1.5 items-center">
                              <input 
                                type="text"
                                value={replyTexts[note.id] || ''}
                                onChange={(e) => setReplyTexts(prev => ({ ...prev, [note.id]: e.target.value }))}
                                placeholder="রিপ্লাই লিখুন..."
                                className="flex-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-emerald-500 rounded-xl px-3.5 py-2 text-xs font-medium outline-none shadow-inner"
                              />
                              <button 
                                onClick={() => handleAddReply(note.id)}
                                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-2 rounded-xl cursor-pointer transition-all flex items-center gap-1.5 shadow"
                                title="রিপ্লাই পাঠান"
                              >
                                <FaReply className="text-xs" />
                                <span className="text-[11px]">রিপ্লাই</span>
                              </button>
                            </div>

                          </div>
                        );
                      })
                    )}
                    <div ref={notesEndRef} />
                  </div>
                </div>

                {/* নতুন নোট লেখার ফর্ম */}
                <form onSubmit={handleAddNote} className="flex gap-2 pt-3 border-t border-slate-200 dark:border-slate-800 shrink-0 sticky bottom-0 bg-white/95 dark:bg-slate-900/95 pb-1 backdrop-blur-sm">
                  <input 
                    type="text"
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    placeholder={isAdmin ? "লেখক (Admin) হিসেবে নোট লিখুন..." : "আপনার একটি সুন্দর নোট বা বার্তা লিখুন..."}
                    className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-emerald-500 rounded-xl px-3.5 py-2.5 text-xs font-medium outline-none shadow-inner"
                  />
                  <button 
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs transition-all cursor-pointer shadow-md"
                  >
                    পোস্ট 🚀
                  </button>
                </form>

              </div>
            )}

          </div>
        </div>
      </div>

      {/* ছবির ফুল স্ক্রিন প্রিভিউ মোডাল */}
      {isFullView && (
        <div 
          className="fixed inset-0 z-[99] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn cursor-pointer"
          onClick={() => setIsFullView(false)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full flex items-center justify-center">
            <button 
              onClick={() => setIsFullView(false)}
              className="absolute -top-12 right-0 text-white bg-slate-800 hover:bg-slate-700 p-2.5 rounded-full transition-colors cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>
            <img 
              src={photoUrl || `${import.meta.env.BASE_URL}munia.jpg`} 
              alt="Tabiha Marzan Munia Full View" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border-2 border-emerald-400/50 shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LovePuzzleModal;