"use client";
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { Menu, X, Sun, Moon, Zap } from 'lucide-react'; 
export const MotionDiv = motion.div;

const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const Header = () => {
    const location = useLocation();
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode === '1';
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            // Dodano klasy tła i tekstu Dark Mode z Twojej konfiguracji Tailwind
            body.classList.add('dark', 'bg-dark-bg', 'text-dark-text'); 
            localStorage.setItem('dark-mode', '1');
        } else {
            body.classList.remove('dark', 'bg-dark-bg', 'text-dark-text');
            localStorage.setItem('dark-mode', '0');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    
    const getLinkClasses = (path) => 
        `px-4 py-2 rounded-full transition-all duration-300 font-medium ${
            location.pathname === path
                ? 'bg-primary-500 text-white dark:bg-primary-600'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
        }`;

    return (
        <header role="banner">
            {/* TOP BAR - FIXED/STICKY z efektem Glassmorphism */}
            <div className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    
                    {/* Logo i Brand */}
                    <Link className="flex items-center space-x-3 transition-colors duration-300 hover:text-primary-500" to="/" aria-label="Siła & Zdrowie — strona główna">
                        <Zap className="h-8 w-8 text-primary-500 dark:text-primary-400" aria-hidden="true" /> 
                        <div>
                            <h1 className="text-2xl font-extrabold font-heading tracking-tight text-gray-900 dark:text-white">Siła&Zdrowie</h1>
                            <div className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">Porady dla początkujących</div>
                        </div>
                    </Link>

                    {/* Nawigacja główna (Desktop) */}
                    <nav className="hidden md:flex space-x-2" role="navigation" aria-label="Główne menu">
                        <Link to="/" className={getLinkClasses('/')}>Strona główna</Link>
                        <Link to="/plany" className={getLinkClasses('/plany')}>Plany treningowe</Link>
                        <Link to="/blog" className={getLinkClasses('/blog')}>Blog</Link>
                    </nav>

                    {/* Przełącznik Dark Mode i Menu Mobilne */}
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={toggleDarkMode} 
                            aria-label={isDarkMode ? 'Przełącz na tryb jasny' : 'Przełącz na tryb ciemny'}
                            className="p-2 rounded-full transition-colors duration-300 text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                        </button>
                        
                        <button 
                            className="p-2 rounded-full md:hidden transition-colors duration-300 text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                            aria-label="Pokaż menu" 
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} 
                        </button>
                    </div>
                </div>

                {/* Mobilne Menu (otwierane pod spodem) */}
                <nav 
                    className={`md:hidden absolute w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${
                        isMenuOpen ? 'max-h-60 opacity-100 p-4' : 'max-h-0 opacity-0'
                    }`}
                    role="navigation" 
                    aria-label="Główne menu mobilne"
                >
                    <div className="flex flex-col space-y-2">
                        <Link onClick={toggleMenu} to="/" className={getLinkClasses('/')}>Strona główna</Link>
                        <Link onClick={toggleMenu} to="/plany" className={getLinkClasses('/plany')}>Plany treningowe</Link>
                        <Link onClick={toggleMenu} to="/blog" className={getLinkClasses('/blog')}>Blog</Link>
                    </div>
                </nav>
            </div>


            {/* SEKCJA HERO - Duża, czysta, z animacją */}
            <motion.div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 **py-12** md:py-24 **lg:py-32** text-center"
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                role="region" 
                aria-label="Wprowadzenie do poradnika"
            >
                <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
                        Mój kompletny poradnik
                    </p>
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading leading-tight text-gray-900 dark:text-white max-w-4xl">
                        Rozpocznij ze mną swoją podróż w świecie <span className="text-primary-500">siły i zdrowia!</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                        Przygotowałem dla Ciebie kompletny przewodnik dla początkujących, gotowe plany treningowe i porady, które naprawdę działają.
                    </p>
                    <Link 
                        to="/plany" 
                        className="mt-10 px-8 py-3 text-lg font-bold rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-[1.02] dark:bg-primary-500 dark:hover:bg-primary-600"
                    >
                        Odkryj moje plany treningowe
                    </Link>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;