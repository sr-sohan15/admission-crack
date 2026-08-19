import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60 py-6 text-center text-xs text-slate-600 dark:text-slate-500 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Md. Saidur Rahman Sohan</span>. All rights reserved.</p>
        <p className="text-slate-500 dark:text-slate-400">
          Target: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">DU & GST Varsity Admission Mission</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;