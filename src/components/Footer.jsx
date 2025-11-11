import React from 'react';
import { Link } from 'react-router-dom'; 
import { Heart, Mail, Phone } from 'lucide-react'; 

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-dark-card text-gray-400 dark:text-gray-400 py-12 border-t border-gray-800 dark:border-gray-700 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                    
                    {/* Kolumna 1: Info i Prawa Autorskie */}
                    <div className="md:col-span-2 space-y-4">
                        <strong className="text-xl font-bold font-heading text-white dark:text-dark-text tracking-wider flex items-center">
                            <Heart className="w-6 h-6 mr-2 text-primary-500" />
                            Siła & Zdrowie
                        </strong>
                        <p className="text-sm text-gray-500 dark:text-gray-500 max-w-sm">
                            Twój kompletny poradnik na start. Z nami budowanie siły i zdrowia staje się prostsze.
                        </p>
                        <small className="block pt-4 text-xs text-gray-600 dark:text-gray-500">
                            &copy; {new Date().getFullYear()} Siła & Zdrowie. Wszelkie prawa zastrzeżone.
                        </small>
                    </div>

                    {/* Kolumna 2: Przydatne linki (Nawigacja) */}
                    <div>
                        <strong className="text-lg font-semibold font-heading text-white dark:text-dark-text mb-4 block">Szybkie linki</strong>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Strona główna</Link></li>
                            <li><Link to="/kalkulatory" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Kalkulatory</Link></li> 
                            <li><Link to="/plany" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Plany treningowe</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Blog</Link></li>
                        </ul>
                    </div>
                    
                    {/* Kolumna 3: Kontakt */}
                    <div>
                        <strong className="text-lg font-semibold font-heading text-white dark:text-dark-text mb-4 block">Kontakt</strong>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <Mail className="w-4 h-4 mr-3 text-gray-500 flex-shrink-0" />
                                <a href="mailto:kontakt@silny-start.pl" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                                    kontakt@silny-start.pl
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-4 h-4 mr-3 text-gray-500 flex-shrink-0" />
                                <a href="tel:+48123456789" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                                    +48 123 456 789
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;