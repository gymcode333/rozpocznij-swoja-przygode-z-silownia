// src/pages/plany/fbw-3-dniowy.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Calendar, ChevronDown } from 'lucide-react';

// Prosty komponent Akordeonu do zarządzania dniem treningowym
const DayAccordion = ({ day, focus, exercises }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            className="border-b border-gray-200 dark:border-gray-700"
            initial={false}
            animate={{ backgroundColor: isOpen ? (isDarkMode ? '#1e293b' : '#f8fafc') : (isDarkMode ? '#0f172a' : '#ffffff') }}
            transition={{ duration: 0.3 }}
        >
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full text-left flex justify-between items-center py-4 px-4 font-semibold text-lg text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
                <span>{day}: {focus}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
                    <h4 className="font-bold mb-2 text-primary-600 dark:text-primary-400">Ćwiczenia:</h4>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        {exercises.map((ex, index) => (
                            <li key={index} className="flex justify-between border-b border-gray-200 dark:border-gray-700/50 pb-1">
                                <span>{ex.name}</span>
                                <span className="font-medium text-gray-900 dark:text-white">{ex.sets}x{ex.reps}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};


const Fbw3DniowyPage = () => {
    const isDarkMode = document.body.classList.contains('dark'); // Pobranie statusu Dark Mode
    
    const plan = [
        { 
            day: "Dzień 1", 
            focus: "Góra Ciała A (Pchanie/Push)", 
            exercises: [
                { name: "Wyciskanie sztangi leżąc", sets: 3, reps: "8-12" },
                { name: "Wyciskanie hantli siedząc", sets: 3, reps: "8-12" },
                { name: "Wyciskanie francuskie (triceps)", sets: 3, reps: "10-15" },
                { name: "Wznosy boczne hantli (barki)", sets: 3, reps: "12-15" },
            ] 
        },
        { 
            day: "Dzień 2", 
            focus: "Dół Ciała (Nogi)", 
            exercises: [
                { name: "Przysiady ze sztangą", sets: 4, reps: "6-10" },
                { name: "Martwy ciąg rumuński", sets: 3, reps: "8-12" },
                { name: "Wypychanie na suwnicy (Leg Press)", sets: 3, reps: "10-15" },
                { name: "Wspięcia na palce (łydki)", sets: 4, reps: "15-20" },
            ] 
        },
        { 
            day: "Dzień 3", 
            focus: "Góra Ciała B (Przyciąganie/Pull)", 
            exercises: [
                { name: "Podciąganie na drążku (lub Lat Pulldown)", sets: 3, reps: "Max/8-12" },
                { name: "Wiosłowanie sztangą/hantlami", sets: 3, reps: "8-12" },
                { name: "Uginanie ramion ze sztangą (biceps)", sets: 3, reps: "10-15" },
                { name: "Face Pull (tylne aktony barków)", sets: 3, reps: "12-15" },
            ] 
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold font-heading text-gray-900 dark:text-white mb-2 flex items-center">
                <Dumbbell className="w-8 h-8 mr-3 text-primary-500" /> Plan Treningowy FBW (3 Dni)
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                Full Body Workout (FBW) to idealny plan dla początkujących. Angażuje wszystkie partie mięśniowe na każdym treningu, zapewniając optymalną częstotliwość stymulacji.
            </p>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden mb-8">
                <div className="p-4 bg-primary-50 dark:bg-gray-800/50 flex items-center text-primary-700 dark:text-primary-300">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-medium">Plan jest przeznaczony na 3 dni treningowe w tygodniu (np. Pon, Śr, Pt).</span>
                </div>
                
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {plan.map((day, index) => (
                        <DayAccordion key={index} {...day} />
                    ))}
                </div>
            </div>

            {/* Sekcja Uwagi Końcowe */}
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mt-8 mb-4">Ważne uwagi</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>**Regeneracja:** Pamiętaj o dniach wolnych między treningami (np. Wt, Czw, Sob, Niedz).</li>
                <li>**Technika:** Skup się na idealnej technice, zanim zwiększysz obciążenie.</li>
                <li>**Rozgrzewka:** Zawsze wykonaj 5-10 minut rozgrzewki przed rozpoczęciem.</li>
            </ul>

        </div>
    );
};

export default Fbw3DniowyPage;