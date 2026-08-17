import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-900/60 py-6 text-center text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} ChanceHack. All rights reserved.</p>
        <p className="text-slate-400">
          Target: <span className="text-emerald-400 font-semibold">DU & GST Varsity Admission Mission</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;