"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { ArrowUp } from 'lucide-react'; 
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
export const MotionDiv = motion.div;

function App() {
    // ... (cała reszta logiki)
    return (
        <div className="min-h-screen flex flex-col antialiased"> 
            {/* TYMCZASOWO ZAKOMENTUJ PONIŻSZE KOMPONENTY */}
            {/* <Header /> */}
            
            {/* <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12"> 
                <div className="lg:flex lg:space-x-8">
                    <main className="flex-1 lg:order-2 h-auto">
                        <div className="bg-white dark:bg-dark-card rounded-xl shadow-xl p-4 md:p-8 mb-10"> 
                            <MainContent /> 
                        </div>
                    </main>
                    <div className="w-full lg:w-80 lg:order-1">
                        <Sidebar />
                    </div>
                </div>
            </div> */}

            {/* <Footer /> */}

            {/* TYMCZASOWA WERYFIKACJA */}
            <h1>APLIKACJA DZIAŁA!</h1> 
        </div>
    );
}

export default App;