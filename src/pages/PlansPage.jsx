"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell, Users, DivideCircle, Check, BookOpen } from 'lucide-react'; 

// Importujemy zdefiniowane w projekcie komponenty layoutu
import Header from '../components/Header'; 
import Footer from '../components/Footer';
export const MotionDiv = motion.div;

// Warianty animacji dla kart
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 } 
    }
};

const PlanCard = ({ title, tag, link, icon, description, features, delay }) => {
    // Stosujemy bezpieczny wzorzec: przypisanie propa 'icon' do zmiennej z dużej litery
    const IconComponent = icon; 
    
    return (
        <motion.div 
            className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2 hover:shadow-xl-dark"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            custom={delay}
            transition={{ duration: 0.6, delay: delay }}
        >
            {/* NAGŁÓWEK KARTY */}
            <div className="flex items-start space-x-4 mb-4">
                <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                <div>
                    <h3 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-dark-text m-0">{title}</h3>
                </div>
            </div>

            {/* TAG */}
            <div className="inline-block bg-secondary text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
                {tag}
            </div>
            
            {/* OPIS */}
            <p className="text-gray-600 dark:text-gray-400 mb-8">{description}</p>
            
            {/* CECHY/LISTA */}
            <h4 className="text-lg font-bold font-heading mb-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">Co zyskujesz:</h4>
            <ul className="space-y-4 list-none p-0 m-0">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300 text-base">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* PRZYCISK */}
            <Link 
                to={link} 
                className="mt-10 block w-full text-center px-6 py-3 font-bold rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-[1.01]"
            >
                Zobacz plan szczegółowo
            </Link>
        </motion.div>
    );
};


const PlansPage = () => {
    
    const plansData = [
        {
            title: "FBW (Full Body Workout)",
            tag: "Dla początkujących",
            link: "/plany/FBW", 
            icon: Dumbbell,
            description: "Plan, w którym ćwiczysz całe ciało na każdej sesji. Idealny, aby szybko nauczyć się techniki i zbudować solidne podstawy siły.",
            features: [
                "3 dni treningowe w tygodniu",
                "Buduje bazową siłę i wytrzymałość",
                "Niski poziom ryzyka przetrenowania",
                "Wymaga minimalnej ilości sprzętu"
            ],
        },
        {
            title: "PPL (Push, Pull, Legs, Upper)",
            tag: "Dla średnio zaawansowanych",
            link: "/plany/PPL", 
            icon: Users,
            description: "Plan dzielony na trzy główne grupy ruchów. Świetny do zwiększenia częstotliwości treningowej i lepszego podziału pracy mięśniowej.",
            features: [
                "4-6 dni treningowych w tygodniu",
                "Wysoka objętość dla każdej partii",
                "Skupienie na hipertrofii mięśni",
                "Duża elastyczność w doborze ćwiczeń"
            ],
        },
        {
            title: "Split (Tradycyjny Podział)",
            tag: "Dla zaawansowanych",
            link: "/plany/SPLIT", // Zmieniono na nową konwencję
            icon: DivideCircle,
            description: "Najczęściej używany schemat przez kulturystów. Każda sesja koncentruje się na jednej lub dwóch dużych grupach mięśniowych.",
            features: [
                "5 dni treningowych w tygodniu (i więcej)",
                "Maksymalna koncentracja na regeneracji partii",
                "Idealny dla doświadczonych w budowaniu masy",
                "Pozwala na pracę nad słabymi punktami"
            ],
        },
    ];

    return (
        
        <div className="min-h-screen flex flex-col"> 
            
            <Header /> {/* ZWRÓCONY HEADER */}
            

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <main id="main" className="w-full" role="main">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {plansData.map((plan, index) => (
                            <PlanCard 
                                key={index} 
                                {...plan} 
                                delay={index * 0.1}
                            />
                        ))}
                    </div>

                    <div className="mt-20 p-8 bg-primary-50 dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center space-x-4">
                        <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            Wszystkie plany zawierają szczegółowe opisy ćwiczeń i porady dotyczące progresji.
                        </p>
                    </div>

                </main>
            </div>
            
            <Footer /> {/* ZWRÓCONY FOOTER */}
        </div>
    );
};

export default PlansPage;