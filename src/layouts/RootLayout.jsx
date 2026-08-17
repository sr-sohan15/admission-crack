import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <Navbar />
      <main className="max-w-6xl w-full mx-auto px-4 py-6 flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
};

export default RootLayout;