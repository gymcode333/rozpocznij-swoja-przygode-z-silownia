"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Search, Users, Zap, BookOpen, AlertTriangle } from 'lucide-react'; 

// Import komponentów
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard'; // Nasza nowa karta
export const MotionDiv = motion.div;

// DANE POSTÓW (możesz je przenieść do osobnego pliku JSON)
const blogPostsData = [
    { title: "Jak zacząć trening siłowy?", date: "23 lutego 2025", category: "Początkujący", excerpt: "Pierwszy raz na siłowni? Dowiedz się, jak przygotować się do treningu, jakie ćwiczenia wybrać i jak unikać błędów.", readTime: "7 min czytania", imageUrl: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/blog/jak-zaczac-silowy" },
    { title: "Dieta na masę — 5 prostych zasad", date: "10 lutego 2025", category: "Dieta", excerpt: "Nadwyżka kaloryczna, białko i regularność — proste zasady, które przyspieszą Twoje postępy.", readTime: "5 min czytania", imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/blog/dieta-na-mase" },
    { title: "Mity w świecie fitness — co jest prawdą?", date: "3 stycznia 2025", category: "Porady", excerpt: "Obalamy najpopularniejsze mity dotyczące treningu i odżywiania. Dowiedz się, co naprawdę działa.", readTime: "6 min czytania", imageUrl: "https://images.pexels.com/photos/2294351/pexels-photo-2294351.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/blog/mity-fitness" },
    { title: "Cardio vs siłowy — co wybrać?", date: "12 marca 2025", category: "Trening", excerpt: "Porównujemy efekty treningu cardio i siłowego dla początkujących. Który trening da najlepsze rezultaty?", readTime: "5 min czytania", imageUrl: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg", link: "/blog/cardio-vs-silowy" },
    { title: "Stretching po treningu — dlaczego jest ważny?", date: "18 kwietnia 2025", category: "Regeneracja", excerpt: "Poznaj najlepsze techniki rozciągania, które przyspieszą regenerację mięśni i zmniejszą ryzyko kontuzji.", readTime: "4 min czytania", imageUrl: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg", link: "/blog/stretching-regeneracja" },
];


const BlogPage = () => {
    
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg">
            <Header />

            {/* SEKCJA HERO BLOGA */}
            <header className="bg-gray-900 py-24 text-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2">BLOG</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold font-heading mb-4">
                        Zbuduj formę z głową
                    </h1>
                    <p className="text-lg text-gray-300 max-w-3xl">
                        Świeże artykuły o treningu siłowym, diecie, regeneracji i motywacji. Zaczynasz? Jesteś we właściwym miejscu.
                    </p>
                </div>
            </header>
            
            <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
                
                {/* SEKCJA O BLOGU */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 mb-12 border-l-4 border-primary-500"
                >
                    <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-2 flex items-center">
                        <BookOpen className="w-6 h-6 mr-3 text-primary-500" /> O blogu
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Ten blog jest dla początkujących, którzy chcą zbudować formę, nauczyć się prawidłowego treningu siłowego i dbać o dietę oraz regenerację. Znajdziesz tu praktyczne plany, przepisy i motywację.
                    </p>
                </motion.div>


                {/* GŁÓWNY UKŁAD: TREŚĆ + SIDEBAR */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* TREŚĆ GŁÓWNA (9 kolumn) */}
                    <main id="main" className="lg:col-span-8" role="main">
                        <section aria-label="Lista najnowszych wpisów">
                            <div className="flex items-center justify-between mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                                <h2 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-white">Najnowsze wpisy</h2>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Strona 1 z 12</div>
                            </div>

                            {/* LISTA POSTÓW - używamy naszego komponentu karty */}
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                initial="hidden"
                                animate="visible"
                                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                            >
                                {blogPostsData.map((post, index) => (
                                    <BlogPostCard key={index} {...post} index={index} />
                                ))}
                            </motion.div>

                            {/* PAGINACJA */}
                            <nav className="pagination flex gap-3 justify-center mt-12" role="navigation" aria-label="Paginacja wpisów">
                                <a href="#" className="px-4 py-2 border rounded-lg text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">« Poprzednia</a>
                                <a href="#" className="px-4 py-2 border rounded-lg bg-primary-600 text-white border-primary-600 font-bold">1</a>
                                <a href="#" className="px-4 py-2 border rounded-lg text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">2</a>
                                <a href="#" className="px-4 py-2 border rounded-lg text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">3</a>
                                <a href="#" className="px-4 py-2 border rounded-lg text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Następna »</a>
                            </nav>
                        </section>

                        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 mt-16 shadow-inner border border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-3">Polecane akcesoria</h2>
                            <p className="text-gray-700 dark:text-gray-400">
                                Sprawdź najpopularniejsze narzędzia treningowe dla początkujących — hantle, gumy oporowe i maty do ćwiczeń. (Miejsce na linki afiliacyjne)
                            </p>
                        </div>
                    </main>

                    {/* PANEL BOCZNY (4 kolumny) */}
                    <aside className="lg:col-span-4" role="complementary" aria-label="Panel boczny bloga">
                        
                        {/* WYSZUKIWARKA */}
                        <div className="card bg-white dark:bg-dark-card p-4 rounded-xl shadow-md mb-6">
                            <label htmlFor="searchInput" className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">Szukaj</label>
                            <div className="relative">
                                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    id="searchInput" 
                                    type="search" 
                                    placeholder="Szukaj artykułów..." 
                                    aria-label="Szukaj artykułów"
                                    className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-white"
                                />
                            </div>
                        </div>

                        {/* KATEGORIE */}
                        <div className="card bg-white dark:bg-dark-card p-5 rounded-xl shadow-md mb-6">
                            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Kategorie</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary-600 transition-colors">Trening (12)</a></li>
                                <li><a href="#" className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary-600 transition-colors">Dieta (8)</a></li>
                                <li><a href="#" className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary-600 transition-colors">Regeneracja (5)</a></li>
                                <li><a href="#" className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary-600 transition-colors">Porady (15)</a></li>
                            </ul>
                        </div>

                        {/* POPULARNE */}
                        <div className="card bg-white dark:bg-dark-card p-5 rounded-xl shadow-md mb-6">
                            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Popularne</h4>
                            <div className="space-y-4">
                                <a href="#" className="item flex gap-3 items-center hover:bg-gray-50 dark:hover:bg-gray-800 p-2 -m-2 rounded-lg transition-colors">
                                    <img src="https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg" alt="Najlepszy plan dla początkujących" className="w-16 h-12 object-cover rounded-lg flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">Najlepszy plan dla początkujących</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">10 lutego 2025 • 8 min</div>
                                    </div>
                                </a>
                                <a href="#" className="item flex gap-3 items-center hover:bg-gray-50 dark:hover:bg-gray-800 p-2 -m-2 rounded-lg transition-colors">
                                    <img src="https://images.pexels.com/photos/2294415/pexels-photo-2294415.jpeg" alt="Jak ustawić dietę na masę" className="w-16 h-12 object-cover rounded-lg flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">Jak ustawić dietę na masę</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">15 stycznia 2025 • 6 min</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* NEWSLETTER */}
                        <div className="card bg-primary-50 dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6 border-l-4 border-primary-500">
                            <h4 className="text-xs font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider mb-1">Zapisz się</h4>
                            <h4 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">Newsletter — cotygodniowe porady</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">Dołącz do tysiąca subskrybentów. Otrzymasz plany i przepisy.</p>
                            <form onSubmit={(e) => { e.preventDefault(); alert('Dziękujemy! Formularz demo.'); }}>
                                <input 
                                    type="email" 
                                    placeholder="Twój e-mail" 
                                    aria-label="Twój e-mail" 
                                    required
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-white mb-3"
                                />
                                <button type="submit" className="w-full py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors duration-300">Zapisz się</button>
                            </form>
                        </div>

                        {/* REKLAMA */}
                        <div className="card bg-white dark:bg-dark-card p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 text-center">Reklama</h4>
                            <div className="p-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-center text-sm text-gray-500">
                                Miejsce na reklamy / afiliacje
                            </div>
                        </div>

                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogPage;