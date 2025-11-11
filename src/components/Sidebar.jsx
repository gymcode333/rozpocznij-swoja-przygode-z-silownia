import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin } from 'lucide-react';
import useScrollSpy from '../hooks/useScrollSpy'; 

const tocItems = [
    { label: "Jak zacząć trening siłowy?", href: "#start", id: "start" },
    { label: "Najczęstsze błędy, jakie popełniają początkujący", href: "#errors", id: "errors" },
    { label: "Dobór obciążenia i progresywne przeładowanie", href: "#weights", id: "weights" },
    { label: "Plany treningowe (Strona)", href: "/plany", isRoute: true }, 
    { label: "Dieta – fundament sukcesu", href: "#diet", id: "diet" },
    { label: "Suplementy – co naprawdę pomaga", href: "#supplements", id: "supplements" },
    { label: "Podsumowanie", href: "#podsumowanie", id: "podsumowanie" },
    { label: "Mój blog", href: "#blog", id: "blog" },
    { label: "Kalkulatory", href: "#calculators", id: "calculators" },
    { label: "Najczęściej zadawane pytania", href: "#faq", id: "faq" },
];

const Sidebar = () => {
    const sectionIds = tocItems.filter(item => item.id).map(item => item.id);
    const activeId = useScrollSpy(sectionIds);

    return (
        <nav 
            id="table-of-contents" 
            className="w-full h-fit lg:sticky lg:top-24 lg:pt-0 pb-6 lg:pb-0" 
            role="navigation"
            aria-label="Spis treści poradnika"
        >
            <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 border-l-4 border-primary-500 dark:border-primary-400">
                
                <h3 className="flex items-center text-xl font-extrabold font-heading text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                    <BookOpen className="w-5 h-5 mr-3 text-primary-500" />
                    Spis treści
                </h3>

                <ul className="space-y-3 list-none p-0 m-0">
                    {tocItems.map((item, index) => {
                        const isActive = item.id && activeId === item.id;
                        
                        const baseClasses = "text-gray-700 dark:text-gray-300 font-medium text-sm block py-1.5 transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400";
                        const activeClasses = "text-primary-600 dark:text-primary-400 font-bold border-r-2 border-primary-600 dark:border-primary-400 pr-1";

                        return (
                            <li key={index}>
                                {item.isRoute ? (
                                    <Link 
                                        to={item.href}
                                        className={`${baseClasses} flex items-center`}
                                    >
                                        {item.label}
                                        <span className="ml-2 text-xs opacity-50"> (Strona)</span>
                                    </Link>
                                ) : (
                                    <a 
                                        href={item.href}
                                        className={`${baseClasses} ${isActive ? activeClasses : ''} flex items-center`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(item.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            window.history.pushState(null, null, item.href); 
                                        }}
                                    >
                                        {isActive && <MapPin className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400 flex-shrink-0" />}
                                        {!isActive && <span className="w-4 h-4 mr-2" />} 
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;