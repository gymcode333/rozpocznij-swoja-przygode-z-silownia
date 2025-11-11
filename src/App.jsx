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
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-screen flex flex-col antialiased"> 
            <Header /> 
            
            <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12"> 
                <div className="lg:flex lg:space-x-8">
                    
                    {/* Main Content - zajmuje więcej miejsca na desktop */}
                    <main className="flex-1 lg:order-2 h-auto">
                        {/* Wprowadzono padding top/bottom i marginesy do głównej treści */}
                        <div className="bg-white dark:bg-dark-card rounded-xl shadow-xl p-4 md:p-8 mb-10"> 
                            <MainContent />
                        </div>
                    </main>
                    
                    {/* Sidebar - zorganizowany, po lewej na desktop */}
                    <div className="w-full lg:w-80 lg:order-1">
                        <Sidebar />
                    </div>
                </div>
            </div>

            <Footer />

            {/* Nowoczesny przycisk "Do góry" z Framer Motion */}
            <AnimatePresence>
                {showScrollButton && (
                    <motion.button 
                        onClick={scrollToTop} 
                        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary-600 text-white shadow-xl hover:bg-primary-700 transition-colors duration-300 z-50 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700"
                        title="Przejdź na górę"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowUp className="w-6 h-6" /> 
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;