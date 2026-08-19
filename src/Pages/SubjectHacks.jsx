import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { admissionData } from '../Data/admissionData';
import { biologyData } from '../Data/Science/biology/biologyData';
import { physicsData } from '../Data/Science/physics/physicsData';
import { chemistryData } from '../Data/Science/Chemistry/chemistryData';
import { mathData } from '../Data/Science/Higher Mathematics/mathData';

import {
  FiCheckCircle,
  FiAlertTriangle,
  FiArrowLeft,
  FiBookmark,
  FiZap,
  FiXCircle,
  FiLayers,
  FiBookOpen,
  FiArrowRight,
} from 'react-icons/fi';

import { toast } from 'react-toastify';

const SubjectHacks = () => {
  const { streamId, subjectId } = useParams();

  const [selectedPaper, setSelectedPaper] = useState('1st');
  const [activeChapterId, setActiveChapterId] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('chancehack-bookmarks');

    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const currentSubId = (subjectId || streamId)?.toLowerCase();

  let currentSubject = null;

  // =========================
  // Clean prefix
  // =========================
  const cleanPrefix = (text) => {
    if (!text) return '';

    return text
      .replace(
        /^💡?\s*DU\s*৫-সেকেন্ড\s*[\u0980-\u09FF\w\s]*:\s*/i,
        ''
      )
      .replace(/^💡\s*/, '')
      .replace(/^🚫\s*/, '');
  };

  // =========================
  // Biology
  // =========================
  if (currentSubId === 'biology') {
    const rawChapters = [
      ...(biologyData?.botany || []),
      ...(biologyData?.zoology || []),
    ];

    currentSubject = {
      name: 'Biology (জীববিজ্ঞান)',
      hasPapers: true,

      botanyCount: biologyData?.botany?.length || 12,
      zoologyCount: biologyData?.zoology?.length || 12,

      totalQuestionsCount:
        biologyData?.totalBiologyQuestions || 353,

      mustReadChapters: rawChapters.map((ch) => ({
        id: ch.id,
        paper: ch.paper,

        paperType: ch.paper?.includes('১ম') ? '1st' : '2nd',

        chapterNo: ch.chapterNo,

        title: `${ch.paper} - ${ch.chapterNo}: ${ch.title}`,

        guarantee:
          ch.weightage ||
          ch.stars ||
          '১-২ নম্বর',

        shortcuts:
          ch.shortcuts ||
          'শর্টকাট টেকনিক',

        count: `${ch.questions?.length || 0}টি প্রশ্ন`,

        questions: ch.questions || [],
      })),

      skipChapters: [
        'বোটানি ও জুলজির অতিরিক্ত মুখস্থ নির্ভর ইতিহাস ও সাল',
        'অনাবশ্যক বিশাল পরিপাক চক্র ও অনুচ্ছেদ বর্ণনা',
      ],
    };
  }

  // =========================
  // Physics
  // =========================
  else if (currentSubId === 'physics') {
    const paper1 =
      physicsData?.paper1Chapters ||
      physicsData?.firstPaper ||
      [];

    const paper2 =
      physicsData?.paper2Chapters ||
      physicsData?.secondPaper ||
      [];

    const rawChapters =
      selectedPaper === '1st'
        ? paper1
        : paper2;

    currentSubject = {
      name:
        physicsData?.name ||
        'Physics (পদার্থবিজ্ঞান)',

      hasPapers:
        physicsData?.hasPapers ?? true,

      botanyCount: paper1.length,
      zoologyCount: paper2.length,

      totalQuestionsCount: [
        ...paper1,
        ...paper2,
      ].flatMap(
        (c) => c.questions || []
      ).length,

      mustReadChapters: rawChapters.map((ch) => ({
        id: ch.id,

        paper: ch.paper,

        paperType:
          ch.paperType ||
          (ch.paper?.includes('১ম')
            ? '1st'
            : '2nd'),

        chapterNo: ch.chapterNo,

        title: `${ch.paper} - অধ্যায় ${ch.chapterNo}: ${ch.title}`,

        guarantee:
          ch.weightage ||
          '১০০% নিশ্চিত টাইপ',

        shortcuts:
          ch.shortcuts ||
          'শর্টকাট টেকনিক',

        count:
          `${ch.questions?.length || 0}টি প্রশ্ন`,

        questions: ch.questions || [],
      })),

      skipChapters:
        physicsData?.skipChapters || [
          'অতিরিক্ত বড় প্রমাণ ও ডেরিভেশন',
        ],
    };
  }

  // =========================
  // Chemistry
  // =========================
  else if (currentSubId === 'chemistry') {
    const paper1 =
      chemistryData?.firstPaper ||
      chemistryData?.paper1Chapters ||
      [];

    const paper2 =
      chemistryData?.secondPaper ||
      chemistryData?.paper2Chapters ||
      [];

    const rawChapters =
      selectedPaper === '1st'
        ? paper1
        : paper2;

    const allChapters = [
      ...paper1,
      ...paper2,
    ];

    currentSubject = {
      name:
        chemistryData?.name ||
        'Chemistry (রসায়ন)',

      hasPapers:
        paper1.length > 0 ||
        paper2.length > 0,

      botanyCount: paper1.length,
      zoologyCount: paper2.length,

      totalQuestionsCount:
        allChapters.flatMap(
          (c) => c.questions || []
        ).length,

      mustReadChapters: rawChapters.map((ch) => ({
        id: ch.id || ch.title,

        paper:
          ch.paper ||
          (selectedPaper === '1st'
            ? '১ম পত্র'
            : '২য় পত্র'),

        paperType:
          ch.paperType ||
          selectedPaper,

        chapterNo:
          ch.chapterNo || 1,

        title: ch.title,

        guarantee:
          ch.weightage ||
          '১-২ নম্বর',

        shortcuts:
          ch.shortcuts ||
          'ছন্দ ও ট্রিকস',

        count:
          `${ch.questions?.length || 0}টি প্রশ্ন`,

        questions: ch.questions || [],
      })),

      skipChapters:
        chemistryData?.skipChapters || [
          'অপ্রয়োজনীয় দীর্ঘ বাণিজ্যিক প্রস্তুতি ও বর্ণনা',
        ],
    };
  }

  // =========================
  // Higher Math
  // =========================
  else if (
    currentSubId === 'math' ||
    currentSubId === 'highermath' ||
    currentSubId === 'higher mathematics'
  ) {
    const paper1 =
      mathData?.firstPaper ||
      mathData?.paper1Chapters ||
      [];

    const paper2 =
      mathData?.secondPaper ||
      mathData?.paper2Chapters ||
      [];

    const rawChapters =
      selectedPaper === '1st'
        ? paper1
        : paper2;

    const allChapters = [
      ...paper1,
      ...paper2,
    ];

    currentSubject = {
      name:
        mathData?.name ||
        'Higher Math (উচ্চতর গণিত)',

      hasPapers:
        paper1.length > 0 ||
        paper2.length > 0,

      botanyCount: paper1.length,
      zoologyCount: paper2.length,

      totalQuestionsCount:
        allChapters.flatMap(
          (c) => c.questions || []
        ).length,

      mustReadChapters: rawChapters.map((ch) => ({
        id: ch.id || ch.title,

        paper:
          ch.paper ||
          (selectedPaper === '1st'
            ? '১ম পত্র'
            : '২য় পত্র'),

        paperType:
          ch.paperType ||
          selectedPaper,

        chapterNo:
          ch.chapterNo || 1,

        title: ch.title,

        guarantee:
          ch.weightage ||
          '১-২ নম্বর',

        shortcuts:
          ch.shortcuts ||
          'ক্যালকুলেটর টেকনিক',

        count:
          `${ch.questions?.length || 0}টি প্রশ্ন`,

        questions: ch.questions || [],
      })),

      skipChapters:
        mathData?.skipChapters || [
          'বড় থিওরেম ও ৩ পৃষ্ঠার সমীকরণ প্রমাণ',
        ],
    };
  }

  // =========================
  // Admission
  // =========================
  else {
    const currentStream =
      admissionData[
        streamId?.toLowerCase()
      ];

    const found =
      currentStream?.subjects?.find(
        (s) =>
          s.id ===
          subjectId?.toLowerCase()
      );

    if (found) {
      currentSubject = {
        name: found.name,

        hasPapers: false,

        totalQuestionsCount:
          (found.questions || []).length,

        mustReadChapters:
          found.mustReadChapters || [],

        skipChapters:
          found.skipChapters || [],

        questions: found.questions || [],
      };
    }
  }

  // =========================
  // Not found
  // =========================
  if (!currentSubject) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-bold text-white">
            বিষয় পাওয়া যায়নি!
          </h2>

          <Link
            to="/science"
            className="inline-flex mt-4 px-4 py-2.5 bg-emerald-500 text-slate-950 rounded-xl font-bold text-sm"
          >
            সায়েন্স হোমে ফিরুন
          </Link>
        </div>
      </div>
    );
  }

  // =========================
  // Filter chapters
  // =========================
  const filteredChapters =
    currentSubject.mustReadChapters?.filter(
      (ch) => {
        if (!currentSubject.hasPapers) {
          return true;
        }

        return ch.paperType === selectedPaper;
      }
    ) || [];

  const activeChapter =
    currentSubject.mustReadChapters?.find(
      (ch) => ch.id === activeChapterId
    );

  let displayedQuestions = [];
  let pageTitle = '';

  // =========================
  // Questions
  // =========================
  if (activeChapterId === 'all_global') {
    displayedQuestions =
      currentSubject.mustReadChapters?.flatMap(
        (ch) => ch.questions || []
      ) ||
      currentSubject.questions ||
      [];

    pageTitle = `${currentSubject.name} - সকল অধ্যায়ের প্রশ্ন ও সমাধান একত্রে`;
  }

  else if (activeChapterId === 'all_paper') {
    displayedQuestions =
      filteredChapters.flatMap(
        (ch) => ch.questions || []
      );

    pageTitle = `${
      selectedPaper === '1st'
        ? '১ম পত্রের'
        : '২য় পত্রের'
    } সকল প্রশ্ন ও সমাধান একত্রে`;
  }

  else if (activeChapter) {
    displayedQuestions =
      activeChapter.questions || [];

    pageTitle = activeChapter.title;
  }

  // =========================
  // Bookmark
  // =========================
  const toggleBookmark = (qId) => {
    let updated;

    if (bookmarks.includes(qId)) {
      updated = bookmarks.filter(
        (id) => id !== qId
      );

      toast.info(
        'রিভিশন বুকমার্ক থেকে সরানো হয়েছে'
      );
    } else {
      updated = [
        ...bookmarks,
        qId,
      ];

      toast.success(
        'রিভিশনের জন্য সেভ করা হয়েছে!'
      );
    }

    setBookmarks(updated);

    localStorage.setItem(
      'chancehack-bookmarks',
      JSON.stringify(updated)
    );
  };

  const backLink = streamId
    ? `/stream/${streamId}`
    : '/science';

  // =====================================================
  // UI
  // =====================================================

  return (
    <div
      className="
        w-full
        max-w-7xl
        mx-auto
        px-3
        sm:px-4
        md:px-6
        lg:px-8
        py-2
        sm:py-4
        lg:py-6
        space-y-5
        sm:space-y-6
        overflow-x-hidden
      "
    >

      {/* =================================================
          QUESTION / STUDY PAGE
      ================================================= */}

      {activeChapterId ? (
        <div className="space-y-5 sm:space-y-6">

          {/* Back button */}
          <button
            onClick={() =>
              setActiveChapterId(null)
            }
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              sm:text-sm
              font-bold
              text-emerald-400
              hover:text-emerald-300
              transition-colors
              bg-emerald-950/40
              border
              border-emerald-500/30
              px-3
              sm:px-3.5
              py-2
              rounded-xl
            "
          >
            <FiArrowLeft />
            অধ্যায় তালিকায় ফিরে যান
          </button>

          {/* Page header */}
          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              sm:rounded-3xl
              p-4
              sm:p-6
              lg:p-7
              space-y-3
              shadow-md
              overflow-hidden
            "
          >
            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:flex-wrap
                sm:justify-between
                sm:items-center
                gap-3
              "
            >
              <span
                className="
                  w-fit
                  max-w-full
                  bg-emerald-500/20
                  text-emerald-300
                  text-[10px]
                  sm:text-xs
                  px-3
                  py-1
                  rounded-full
                  font-bold
                  border
                  border-emerald-500/30
                  break-words
                "
              >
                {activeChapterId.startsWith('all')
                  ? 'একত্রে সকল প্রশ্ন ও সমাধান'
                  : (
                    activeChapter?.guarantee ||
                    '১-২ নম্বর'
                  )}
              </span>

              <span
                className="
                  text-[11px]
                  sm:text-xs
                  text-slate-400
                  font-semibold
                "
              >
                মোট {displayedQuestions.length}টি প্রশ্ন
              </span>
            </div>

            <h2
              className="
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-3xl
                font-black
                text-white
                leading-snug
                break-words
              "
            >
              {pageTitle}
            </h2>

            {activeChapter?.shortcuts && (
              <p
                className="
                  text-[11px]
                  sm:text-xs
                  md:text-sm
                  text-emerald-400
                  font-medium
                  leading-relaxed
                  break-words
                "
              >
                🎯 শর্টকাট টেকনিক:{' '}
                {activeChapter.shortcuts}
              </p>
            )}
          </div>

          {/* Questions title */}
          <div className="pt-1 sm:pt-2">
            <h3
              className="
                text-[10px]
                sm:text-xs
                font-bold
                text-slate-400
                uppercase
                tracking-wider
                flex
                items-start
                gap-2
                leading-relaxed
              "
            >
              <FiAlertTriangle className="text-amber-400 shrink-0 mt-0.5" />

              <span>
                বিগত ১৫ বছরের রিপিটেড প্রশ্ন ও শর্টকাট সমাধান
              </span>
            </h3>
          </div>

          {/* Questions */}
          <div className="space-y-3 sm:space-y-4">

            {displayedQuestions.map(
              (q, idx) => {
                const isBookmarked =
                  bookmarks.includes(q.id);

                return (
                  <div
                    key={q.id || idx}
                    className="
                      w-full
                      bg-slate-900
                      border
                      border-slate-800
                      rounded-2xl
                      sm:rounded-3xl
                      p-4
                      sm:p-5
                      md:p-6
                      lg:p-7
                      space-y-4
                      shadow-sm
                      overflow-hidden
                    "
                  >

                    {/* Question meta */}
                    <div
                      className="
                        flex
                        flex-wrap
                        justify-between
                        items-center
                        gap-2
                        border-b
                        border-slate-800
                        pb-3
                      "
                    >
                      <span
                        className="
                          bg-slate-800
                          text-slate-300
                          px-2
                          sm:px-2.5
                          py-1
                          rounded-lg
                          font-bold
                          text-[10px]
                          sm:text-xs
                        "
                      >
                        {q.type || 'MCQ'}
                      </span>

                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          sm:gap-2
                          min-w-0
                        "
                      >
                        <span
                          className="
                            text-[10px]
                            sm:text-xs
                            text-emerald-400
                            bg-emerald-950/60
                            px-2
                            sm:px-2.5
                            py-0.5
                            rounded-full
                            font-semibold
                            truncate
                            max-w-[150px]
                            sm:max-w-none
                          "
                        >
                          ★ {q.repeatCount || 'DU Repeat'}
                        </span>

                        <button
                          onClick={() =>
                            toggleBookmark(q.id)
                          }
                          className={`
                            btn
                            btn-circle
                            btn-ghost
                            btn-xs
                            text-base
                            shrink-0
                            ${
                              isBookmarked
                                ? 'text-amber-400'
                                : 'text-slate-500 hover:text-slate-300'
                            }
                          `}
                          title="Bookmark for Revision"
                        >
                          <FiBookmark />
                        </button>
                      </div>
                    </div>

                    {/* Question */}
                    <h4
                      className="
                        text-sm
                        sm:text-base
                        md:text-lg
                        font-bold
                        text-white
                        leading-relaxed
                        break-words
                      "
                    >
                      <span className="text-emerald-400 mr-1.5">
                        {idx + 1}.
                      </span>

                      {q.question}
                    </h4>

                    {/* Options */}
                    <div
                      className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        gap-2
                        sm:gap-2.5
                      "
                    >
                      {q.options?.map(
                        (opt, oIdx) => {
                          const isCorrect =
                            oIdx ===
                            q.correctAnswer;

                          return (
                            <div
                              key={oIdx}
                              className={`
                                min-w-0
                                p-3
                                sm:p-3.5
                                rounded-xl
                                sm:rounded-2xl
                                border
                                text-left
                                text-[11px]
                                sm:text-xs
                                md:text-sm
                                flex
                                items-start
                                justify-between
                                gap-2
                                transition-all
                                ${
                                  isCorrect
                                    ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-200 font-bold ring-1 ring-emerald-500/30'
                                    : 'border-slate-800 bg-slate-950/40 text-slate-400'
                                }
                              `}
                            >
                              <span
                                className="
                                  min-w-0
                                  break-words
                                  leading-relaxed
                                "
                              >
                                <strong
                                  className={`
                                    mr-2
                                    ${
                                      isCorrect
                                        ? 'text-emerald-400'
                                        : 'text-slate-500'
                                    }
                                  `}
                                >
                                  {String.fromCharCode(
                                    65 + oIdx
                                  )}
                                  .
                                </strong>

                                {opt}
                              </span>

                              {isCorrect && (
                                <span
                                  className="
                                    shrink-0
                                    flex
                                    items-center
                                    gap-1
                                    text-[9px]
                                    sm:text-[10px]
                                    bg-emerald-500
                                    text-slate-950
                                    px-1.5
                                    sm:px-2
                                    py-0.5
                                    rounded-md
                                    font-black
                                  "
                                >
                                  <FiCheckCircle />

                                  <span className="hidden sm:inline">
                                    সঠিক উত্তর
                                  </span>

                                  <span className="sm:hidden">
                                    ✓
                                  </span>
                                </span>
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>

                    {/* Solution */}
                    <div
                      className="
                        p-3
                        sm:p-4
                        bg-slate-950/70
                        border
                        border-slate-800
                        rounded-xl
                        sm:rounded-2xl
                        space-y-3
                        text-[11px]
                        sm:text-xs
                        text-slate-300
                        overflow-hidden
                      "
                    >

                      {q.hack && (
                        <div
                          className="
                            flex
                            flex-col
                            sm:flex-row
                            items-start
                            gap-2
                            sm:gap-2.5
                          "
                        >
                          <span
                            className="
                              bg-emerald-500/10
                              border
                              border-emerald-500/30
                              text-emerald-400
                              text-[9px]
                              sm:text-[10px]
                              font-bold
                              px-2
                              py-0.5
                              rounded-md
                              shrink-0
                            "
                          >
                            শর্টকাট টেকনিক
                          </span>

                          <p
                            className="
                              text-emerald-300
                              font-medium
                              leading-relaxed
                              break-words
                              min-w-0
                            "
                          >
                            {cleanPrefix(q.hack)}
                          </p>
                        </div>
                      )}

                      {q.eliminationTip && (
                        <div
                          className="
                            flex
                            flex-col
                            sm:flex-row
                            items-start
                            gap-2
                            sm:gap-2.5
                          "
                        >
                          <span
                            className="
                              bg-amber-500/10
                              border
                              border-amber-500/30
                              text-amber-400
                              text-[9px]
                              sm:text-[10px]
                              font-bold
                              px-2
                              py-0.5
                              rounded-md
                              shrink-0
                            "
                          >
                            এলিমিনেশন টিপ
                          </span>

                          <p
                            className="
                              text-amber-200/90
                              leading-relaxed
                              break-words
                              min-w-0
                            "
                          >
                            {cleanPrefix(
                              q.eliminationTip
                            )}
                          </p>
                        </div>
                      )}

                      {q.explanation && (
                        <div
                          className="
                            pt-2
                            border-t
                            border-slate-800
                            text-slate-400
                            leading-relaxed
                            break-words
                          "
                        >
                          <strong className="text-slate-300 mr-1.5 font-semibold">
                            বিস্তারিত ব্যাখ্যা:
                          </strong>

                          {q.explanation}
                        </div>
                      )}
                    </div>

                  </div>
                );
              }
            )}

          </div>
        </div>
      ) : (

        /* =================================================
           CHAPTER LIST PAGE
        ================================================= */

        <div className="space-y-5 sm:space-y-6">

          {/* Back */}
          <Link
            to={backLink}
            className="
              inline-flex
              items-center
              gap-1.5
              text-[11px]
              sm:text-xs
              font-bold
              text-slate-400
              hover:text-emerald-400
              transition-colors
            "
          >
            <FiArrowLeft />
            বিষয় তালিকায় ফিরে যান
          </Link>

          {/* Subject header */}
          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              sm:rounded-3xl
              p-4
              sm:p-6
              lg:p-8
              shadow-sm
              space-y-4
              overflow-hidden
            "
          >
            <div
              className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-4
              "
            >

              <h2
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-extrabold
                  text-white
                  leading-tight
                  break-words
                "
              >
                {currentSubject.name}
              </h2>

              <button
                onClick={() =>
                  setActiveChapterId(
                    'all_global'
                  )
                }
                className="
                  w-full
                  lg:w-auto
                  px-4
                  sm:px-5
                  py-2.5
                  rounded-xl
                  sm:rounded-2xl
                  bg-gradient-to-r
                  from-emerald-500
                  to-teal-400
                  text-slate-950
                  font-extrabold
                  text-xs
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:opacity-95
                  shadow-lg
                  shadow-emerald-500/20
                  transition-all
                  cursor-pointer
                "
              >
                <FiZap />

                <span>
                  সব প্রশ্ন-উত্তর একসাথে
                </span>

                <span>
                  ({currentSubject.totalQuestionsCount}টি)
                </span>
              </button>

            </div>

            {/* Paper buttons */}
            {currentSubject.hasPapers && (
              <div
                className="
                  flex
                  flex-col
                  xs:flex-row
                  sm:flex-row
                  items-stretch
                  sm:items-center
                  gap-2
                  pt-3
                  border-t
                  border-slate-800
                "
              >

                <button
                  onClick={() =>
                    setSelectedPaper('1st')
                  }
                  className={`
                    w-full
                    sm:w-auto
                    px-4
                    py-2.5
                    rounded-xl
                    text-xs
                    font-bold
                    transition-all
                    flex
                    items-center
                    justify-center
                    gap-2
                    cursor-pointer
                    ${
                      selectedPaper === '1st'
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-700'
                    }
                  `}
                >
                  🌿 ১ম পত্র

                  <span
                    className={`
                      text-[10px]
                      px-1.5
                      py-0.5
                      rounded-md
                      ${
                        selectedPaper === '1st'
                          ? 'bg-emerald-950 text-emerald-200'
                          : 'bg-slate-800 text-slate-400'
                      }
                    `}
                  >
                    {currentSubject.botanyCount}টি অধ্যায়
                  </span>
                </button>

                <button
                  onClick={() =>
                    setSelectedPaper('2nd')
                  }
                  className={`
                    w-full
                    sm:w-auto
                    px-4
                    py-2.5
                    rounded-xl
                    text-xs
                    font-bold
                    transition-all
                    flex
                    items-center
                    justify-center
                    gap-2
                    cursor-pointer
                    ${
                      selectedPaper === '2nd'
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-700'
                    }
                  `}
                >
                  🐾 ২য় পত্র

                  <span
                    className={`
                      text-[10px]
                      px-1.5
                      py-0.5
                      rounded-md
                      ${
                        selectedPaper === '2nd'
                          ? 'bg-emerald-950 text-emerald-200'
                          : 'bg-slate-800 text-slate-400'
                      }
                    `}
                  >
                    {currentSubject.zoologyCount}টি অধ্যায়
                  </span>
                </button>

              </div>
            )}
          </div>

          {/* Main content */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-5
              sm:gap-6
              lg:gap-8
            "
          >

            {/* Chapters */}
            <div className="space-y-3 min-w-0">

              <h3
                className="
                  text-[10px]
                  sm:text-xs
                  font-bold
                  text-emerald-400
                  uppercase
                  tracking-wider
                  flex
                  items-center
                  gap-2
                "
              >
                <FiZap className="text-emerald-400 text-base" />

                {currentSubject.hasPapers
                  ? selectedPaper === '1st'
                    ? '১ম পত্রের'
                    : '২য় পত্রের'
                  : 'সকল'}

                অধ্যায় ({filteredChapters.length}টি)
              </h3>

              <div
                className="
                  space-y-2.5
                  max-h-[420px]
                  sm:max-h-[500px]
                  overflow-y-auto
                  overflow-x-hidden
                  pr-1
                "
              >

                {/* All paper */}
                {currentSubject.hasPapers && (
                  <div
                    onClick={() =>
                      setActiveChapterId(
                        'all_paper'
                      )
                    }
                    className="
                      p-3.5
                      sm:p-4
                      rounded-xl
                      sm:rounded-2xl
                      border
                      border-slate-800
                      bg-slate-900/90
                      hover:border-emerald-500/60
                      hover:bg-emerald-950/20
                      transition-all
                      cursor-pointer
                      flex
                      items-center
                      justify-between
                      gap-3
                      group
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2.5
                        sm:gap-3
                        min-w-0
                      "
                    >
                      <div
                        className="
                          w-8
                          h-8
                          sm:w-9
                          sm:h-9
                          rounded-xl
                          bg-emerald-500/10
                          text-emerald-400
                          flex
                          items-center
                          justify-center
                          font-bold
                          shrink-0
                        "
                      >
                        <FiLayers />
                      </div>

                      <div className="min-w-0">
                        <h4
                          className="
                            font-bold
                            text-xs
                            sm:text-sm
                            text-white
                            group-hover:text-emerald-300
                            break-words
                            leading-relaxed
                          "
                        >
                          {selectedPaper === '1st'
                            ? '১ম পত্রের সব প্রশ্ন একসাথে'
                            : '২য় পত্রের সব প্রশ্ন একসাথে'}

                          {' '}
                          (
                          {filteredChapters.flatMap(
                            (c) =>
                              c.questions
                          ).length}
                          টি প্রশ্ন)
                        </h4>

                        <p
                          className="
                            text-[10px]
                            sm:text-[11px]
                            text-slate-400
                            mt-0.5
                          "
                        >
                          ধারাবাহিক প্রশ্ন ও ব্যাখ্যা স্টাডি
                        </p>
                      </div>
                    </div>

                    <FiArrowRight
                      className="
                        text-slate-500
                        group-hover:text-emerald-400
                        group-hover:translate-x-1
                        transition-all
                        shrink-0
                      "
                    />
                  </div>
                )}

                {/* Chapters */}
                {filteredChapters.map(
                  (ch, idx) => (
                    <div
                      key={ch.id || idx}
                      onClick={() =>
                        setActiveChapterId(
                          ch.id
                        )
                      }
                      className="
                        p-3.5
                        sm:p-4
                        rounded-xl
                        sm:rounded-2xl
                        border
                        border-slate-800
                        bg-slate-900/70
                        hover:border-emerald-500/50
                        hover:bg-slate-850
                        transition-all
                        cursor-pointer
                        space-y-2
                        group
                        overflow-hidden
                      "
                    >

                      <div
                        className="
                          flex
                          flex-col
                          sm:flex-row
                          sm:justify-between
                          sm:items-start
                          gap-2
                        "
                      >
                        <h4
                          className="
                            font-bold
                            text-xs
                            sm:text-sm
                            text-white
                            group-hover:text-emerald-400
                            transition-colors
                            flex
                            items-start
                            gap-1.5
                            min-w-0
                          "
                        >
                          <FiBookOpen
                            className="
                              text-emerald-400
                              text-xs
                              shrink-0
                              mt-0.5
                            "
                          />

                          <span className="break-words leading-relaxed">
                            {ch.title}
                          </span>
                        </h4>

                        <span
                          className="
                            w-fit
                            text-[10px]
                            bg-emerald-500/10
                            text-emerald-400
                            px-2
                            py-0.5
                            rounded-md
                            font-bold
                            whitespace-nowrap
                            sm:ml-2
                          "
                        >
                          {ch.guarantee}
                        </span>
                      </div>

                      <div
                        className="
                          flex
                          flex-col
                          sm:flex-row
                          sm:justify-between
                          sm:items-center
                          gap-1.5
                          text-[10px]
                          sm:text-[11px]
                          text-slate-400
                          pt-2
                          border-t
                          border-slate-800/60
                        "
                      >
                        <span
                          className="
                            min-w-0
                            break-words
                            leading-relaxed
                          "
                        >
                          🎯 {ch.shortcuts}
                        </span>

                        <span
                          className="
                            text-emerald-400
                            font-semibold
                            whitespace-nowrap
                            flex
                            items-center
                            gap-1
                            shrink-0
                          "
                        >
                          {ch.count}

                          <FiArrowRight
                            className="
                              text-xs
                              group-hover:translate-x-1
                              transition-transform
                            "
                          />
                        </span>
                      </div>

                    </div>
                  )
                )}

              </div>
            </div>

            {/* Skip chapters */}
            <div className="space-y-3 min-w-0">

              <h3
                className="
                  text-[10px]
                  sm:text-xs
                  font-bold
                  text-red-400
                  uppercase
                  tracking-wider
                  flex
                  items-start
                  gap-2
                  leading-relaxed
                "
              >
                <FiXCircle className="text-red-400 text-base shrink-0" />

                <span>
                  একদম পড়বে না (১০০% বাদ / Skip)
                </span>
              </h3>

              <div className="space-y-2.5">

                {currentSubject.skipChapters?.map(
                  (skip, idx) => (
                    <div
                      key={idx}
                      className="
                        bg-red-950/20
                        border
                        border-red-500/30
                        p-3.5
                        sm:p-4
                        rounded-xl
                        sm:rounded-2xl
                        flex
                        items-start
                        gap-2.5
                        overflow-hidden
                      "
                    >
                      <span
                        className="
                          text-red-400
                          font-bold
                          text-sm
                          leading-none
                          mt-0.5
                          shrink-0
                        "
                      >
                        ✕
                      </span>

                      <p
                        className="
                          text-[11px]
                          sm:text-xs
                          font-semibold
                          text-red-300
                          leading-relaxed
                          break-words
                          min-w-0
                        "
                      >
                        {skip}
                      </p>
                    </div>
                  )
                )}

              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectHacks;