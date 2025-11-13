"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, CalendarCheck, TrendingUp, AlertTriangle, CheckCircle, Target, Zap, Clock, Maximize2, Sun } from 'lucide-react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';


const MotionDiv = motion.div;

// Warianty animacji dla sekcji
const sectionVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.99 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" }
    },
};

// --- DANE DLA PLANU SPLIT (4 DNI) ---
const splitSchedule = [
    { day: 'Poniedziałek', training: 'Klatka piersiowa + Biceps', isTraining: true },
    { day: 'Wtorek', training: 'Nogi (Quady i Pośladki)', isTraining: true },
    { day: 'Środa', training: 'ODPOCZYNEK', isTraining: false },
    { day: 'Czwartek', training: 'Barki + Triceps', isTraining: true },
    { day: 'Piątek', training: 'Plecy + Tylne Akcesoria Nóg', isTraining: true },
    { day: 'Weekend', training: 'ODPOCZYNEK', isTraining: false },
];

// Przykładowe ćwiczenia dla planu 4-dniowego
const workoutSections = [
    {
        title: 'Dzień 1: Klatka Piersiowa + Biceps',
        data: [
            { ćwiczenie: 'Wyciskanie sztangi na ławce płaskiej', target: 'Klatka', serie: '3', powtórzenia: '8-10' },
            { ćwiczenie: 'Wyciskanie hantli na skosie dodatnim', target: 'Klatka', serie: '3', powtórzenia: '10-12' },
            { ćwiczenie: 'Rozpiętki na bramie/maszynie', target: 'Klatka', serie: '3', powtórzenia: '12-15' },
            { ćwiczenie: 'Uginanie ramion ze sztangą (Biceps)', target: 'Biceps', serie: '3', powtórzenia: '10-12' },
            { ćwiczenie: 'Uginanie ramion z hantlami na modlitewniku', target: 'Biceps', serie: '2', powtórzenia: '12-15' },
        ]
    },
    {
        title: 'Dzień 2: Nogi (Quady i Pośladki)',
        data: [
            { ćwiczenie: 'Przysiady ze sztangą na plecach', target: 'Czworogłowe/Pośladki', serie: '3', powtórzenia: '8-10' },
            { ćwiczenie: 'Wypychanie na suwnicy (Leg Press)', target: 'Czworogłowe', serie: '3', powtórzenia: '10-12' },
            { ćwiczenie: 'Wyprosty nóg na maszynie (Quady)', target: 'Czworogłowe', serie: '3', powtórzenia: '12-15' },
            { ćwiczenie: 'Wykroki z hantlami', target: 'Pośladki/Quady', serie: '3', powtórzenia: '10-12 na nogę' },
            { ćwiczenie: 'Odwodzenie nogi na maszynie (Pośladki)', target: 'Pośladki', serie: '3', powtórzenia: '15-20' },
        ]
    },
    {
        title: 'Dzień 3: Barki + Triceps',
        data: [
            { ćwiczenie: 'Wyciskanie hantli siedząc (Barki)', target: 'Barki przód/bok', serie: '3', powtórzenia: '8-10' },
            { ćwiczenie: 'Unoszenie hantli bokiem (Barki boczne)', target: 'Barki bok', serie: '3', powtórzenia: '12-15' },
            { ćwiczenie: 'Unoszenie hantli w opadzie tułowia (Barki tył)', target: 'Barki tył', serie: '3', powtórzenia: '12-15' },
            { ćwiczenie: 'Prostowanie ramion na wyciągu górnym (Triceps)', target: 'Triceps', serie: '3', powtórzenia: '10-12' },
            { ćwiczenie: 'Pompki na poręczach (dla tricepsa)', target: 'Triceps', serie: '3', powtórzenia: 'Max' },
        ]
    },
    {
        title: 'Dzień 4: Plecy + Tył Nóg/Brzuch',
        data: [
            { ćwiczenie: 'Martwy Ciąg (klasyczny lub rumuński)', target: 'Plecy/Dwugłowe', serie: '3', powtórzenia: '6-8' },
            { ćwiczenie: 'Podciąganie na drążku (lub ściąganie wyciągu)', target: 'Plecy szerokość', serie: '3', powtórzenia: '8-10' },
            { ćwiczenie: 'Wiosłowanie sztangą w opadzie tułowia', target: 'Plecy grubość', serie: '3', powtórzenia: '8-10' },
            { ćwiczenie: 'Uginanie nóg leżąc/siedząc (Dwugłowe)', target: 'Dwugłowe', serie: '3', powtórzenia: '10-12' },
            { ćwiczenie: 'Allahy (na brzuch)', target: 'Brzuch', serie: '3', powtórzenia: '15-20' },
        ]
    },
];

// Komponent do renderowania tabeli ćwiczeń
const WorkoutTable = ({ data, title }) => (
    <div className="mb-10 p-6 border border-gray-100 rounded-3xl bg-white shadow-xl transition duration-300 transform hover:scale-[1.01] hover:shadow-2xl">
        <h3 className={`text-2xl font-extrabold font-heading text-gray-900 mb-6 flex items-center`}>
            {title} <Dumbbell className={`w-7 h-7 ml-3 text-primary-600 flex-shrink-0`} />
        </h3>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className={`bg-gray-100 text-gray-700`}>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Ćwiczenie</th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Celowany Mięsień</th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Serie</th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Powtórzenia</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((item, index) => (
                        <motion.tr 
                            key={index} 
                            className="hover:bg-gray-50 transition duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <td className="px-4 py-3 whitespace-normal text-sm font-medium text-gray-900">{item.ćwiczenie}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.target}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.serie}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.powtórzenia}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


// Główny komponent strony
const App = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-inter text-gray-900">
            <Header /> {/* Komponent Header (Twoja wersja) */}
            
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                    
                    {/* BANNER GŁÓWNY */}
                    <motion.header 
                        className="text-center mb-16 p-12 rounded-3xl shadow-xl bg-gradient-to-br from-white to-gray-100 border-b-4 border-primary-600/50"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0 }}
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading text-gray-900 mb-4 leading-tight tracking-tight">
                            PLAN TRENINGOWY SPLIT
                        </h1>
                        <p className="text-2xl sm:text-3xl text-primary-600 font-extrabold mb-5">
                            DLA ŚREDNIOZAAWANSOWANYCH: Maksymalna Objętość na Parti
                        </p>
                        <Zap className="w-12 h-12 text-primary-600 mx-auto mt-4 animate-pulse drop-shadow-lg" />
                    </motion.header>


                    {/* SEKCJA 1: WPROWADZENIE I KIEDY ZMIENIĆ */}
                    <MotionDiv 
                        className="mb-16 p-8 bg-white rounded-3xl shadow-2xl border border-gray-100"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-extrabold font-heading text-primary-600 mb-6 flex items-center border-b pb-3 border-gray-200">
                            <Maximize2 className="w-7 h-7 mr-3 flex-shrink-0" />
                            Czym Jest Plan Split i Kiedy Na Niego Przejść?
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Plan Split (Dzielony) polega na dzieleniu ciała na kilka sesji, trenując każdą partię mięśniową **raz w tygodniu** z bardzo wysoką objętością. Jest to naturalny następny krok po opanowaniu FBW i jest dedykowany dla osób, które chcą skupić się na **szczegółowym rozbudowywaniu mięśni**.
                        </p>
                        <p className="font-semibold text-gray-900 border-l-4 border-primary-600 pl-4 py-1 bg-primary-50 transition duration-300 hover:shadow-md">
                            **Przejście na Split:** Jest to idealny moment, gdy masz za sobą 3-6 miesięcy treningu FBW i potrzebujesz większej intensywności dla małej grupy mięśni w trakcie jednej sesji.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" /> **Wysoka Objętość:** Jedna partia mięśniowa jest dosłownie "bombardowana" w trakcie jednej sesji.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" /> **Długi Odpoczynek:** 7 dni przerwy na regenerację każdej partii.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" /> **Skupienie na Detalach:** Idealny, gdy celujesz w konkretne grupy (np. boczne aktony barków).</li>
                        </ul>
                    </MotionDiv>

                    {/* SEKCJA 2: HARMONOGRAM */}
                    <MotionDiv 
                        className="mb-16 p-8 bg-white rounded-3xl shadow-2xl border border-gray-100"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-extrabold font-heading text-primary-600 mb-6 flex items-center border-b pb-3 border-gray-200">
                            <CalendarCheck className="w-7 h-7 mr-3 flex-shrink-0" />
                            Przykładowy Harmonogram Planu Split (4 Dni)
                        </h2>
                        
                        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-xl">
                            <table className="min-w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-700">
                                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Dzień</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Partie Mięśniowe</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Cel</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {splitSchedule.map((item, index) => (
                                        <motion.tr 
                                            key={index} 
                                            className={`${item.isTraining ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'} transition duration-200`}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <td className={`px-4 py-4 whitespace-nowrap text-sm ${item.isTraining ? 'font-bold text-primary-600' : 'text-gray-500'}`}>{item.day}</td>
                                            <td className={`px-4 py-4 whitespace-nowrap text-sm text-gray-700`}>{item.training}</td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.isTraining ? 'Intensywny Trening' : 'Regeneracja'}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="bg-red-100 p-4 rounded-lg mt-6 border-l-4 border-red-500">
                            <p className="text-sm text-red-700">
                                **Elastyczność:** Pamiętaj o minimum jednym dniu przerwy po dwóch dniach treningowych, aby nie przeciążyć układu nerwowego.
                            </p>
                        </div>
                    </MotionDiv>

                    {/* SEKCJA 3: PLAN TRENINGOWY */}
                    <MotionDiv 
                        className="mb-16 p-8 bg-gray-100 rounded-3xl shadow-2xl border border-gray-200"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-extrabold font-heading text-gray-900 mb-8 flex items-center border-b pb-3 border-gray-200">
                            <Dumbbell className="w-7 h-7 mr-3 text-primary-600 flex-shrink-0" />
                            Szczegółowy Przykład Ćwiczeń Split
                        </h2>
                        
                        {workoutSections.map((section, index) => (
                            <WorkoutTable 
                                key={index} 
                                data={section.data} 
                                title={section.title} 
                            />
                        ))}
                    </MotionDiv>

                    {/* SEKCJA 4: ZASADY SPLIT */}
                    <MotionDiv 
                        className="p-8 bg-white rounded-3xl shadow-2xl border-l-8 border-primary-600"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-extrabold font-heading text-primary-600 mb-6 flex items-center">
                            <TrendingUp className="w-7 h-7 mr-3 flex-shrink-0" />
                            Kluczowe Zasady Planu Split
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition duration-200 border-b border-gray-100">
                                <Maximize2 className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-500" />
                                <p>
                                    <strong>Zakres Powtórzeń:</strong> Ze względu na większą objętość i nacisk na hipertrofię, trzymaj się zakresu **8-12 powtórzeń** dla większości ćwiczeń.
                                </p>
                            </li>
                            <li className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition duration-200 border-b border-gray-100">
                                <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-500" />
                                <p>
                                    <strong>Długość Przerwy:</strong> Wydłuż przerwy do **90-120 sekund** dla ćwiczeń złożonych, aby zachować siłę.
                                </p>
                            </li>
                            <li className="flex items-start p-3 rounded-lg bg-red-100 border border-red-500 transition duration-200">
                                <AlertTriangle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-red-500" />
                                <p className="font-semibold text-red-700">
                                    <strong>Intensywność Blisko Upadku:</strong> W Split możesz i powinieneś pracować blisko upadku mięśniowego (RIR 1-2). Mięsień musi być maksymalnie zmęczony.
                                </p>
                            </li>
                        </ul>
                    </MotionDiv>
                </div>
            </main>

            <Footer /> {/* Komponent Footer (Twoja wersja) */}
        </div>
    );
};

export default App;
