"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, CalendarCheck, TrendingUp, AlertTriangle, CheckCircle, Target, Zap, Clock } from 'lucide-react';
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

// Dane do tabel (Table data)
const scheduleData = [
    { day: 'Poniedziałek', training: 'Trening A', goal: 'Całe Ciało', isTraining: true },
    { day: 'Wtorek', training: 'Odpoczynek/Aktywna Regeneracja', goal: '-', isTraining: false },
    { day: 'Środa', training: 'Trening B', goal: 'Całe Ciało', isTraining: true },
    { day: 'Czwartek', training: 'Odpoczynek/Aktywna Regeneracja', goal: '-', isTraining: false },
    { day: 'Piątek', training: 'Trening C', goal: 'Całe Ciało', isTraining: true },
    { day: 'Weekend', training: 'Odpoczynek i Regeneracja', goal: '-', isTraining: false },
];

const treningA = [
    { partia: 'Nogi (przód/tył)', ćwiczenie: 'Przysiady ze sztangą na plecach (lub goblet squat)', serie: '3', powtórzenia: '10–12' },
    { partia: 'Klatka piersiowa', ćwiczenie: 'Wyciskanie hantli na ławce płaskiej', serie: '3', powtórzenia: '10–12' },
    { partia: 'Plecy (szerokość)', ćwiczenie: 'Wiosłowanie hantlem w opadzie tułowia', serie: '3', powtórzenia: '10–12 (na każdą rękę)' },
    { partia: 'Barki', ćwiczenie: 'Wyciskanie hantli siedząc (żołnierskie)', serie: '2', powtórzenia: '10–12' },
    { partia: 'Ramiona', ćwiczenie: 'Uginanie przedramion ze sztangą (biceps)', serie: '2', powtórzenia: '10–12' },
    { partia: 'Brzuch', ćwiczenie: 'Deska (Plank)', serie: '3', powtórzenia: '45-60 sekund' },
];

const treningB = [
    { partia: 'Nogi (tył/plecy)', ćwiczenie: 'Martwy ciąg na prostych nogach (Rumuński)', serie: '3', powtórzenia: '10–12' },
    { partia: 'Plecy (góra/grubość)', ćwiczenie: 'Ściąganie drążka wyciągu górnego do klatki', serie: '3', powtórzenia: '10–12' },
    { partia: 'Klatka piersiowa', ćwiczenie: 'Rozpiętki na maszynie Pec Deck (lub z hantlami)', serie: '3', powtórzenia: '12–15' },
    { partia: 'Barki', ćwiczenie: 'Unoszenie hantli bokiem (na barki boczne)', serie: '2', powtórzenia: '12–15' },
    { partia: 'Ramiona', ćwiczenie: 'Prostowanie przedramion na wyciągu górnym (triceps)', serie: '2', powtórzenia: '10–12' },
    { partia: 'Brzuch', ćwiczenie: 'Spięcia brzucha leżąc', serie: '3', powtórzenia: '15–20' },
];

const treningC = [
    { partia: 'Nogi (całe)', ćwiczenie: 'Wykroki z hantlami', serie: '3', powtórzenia: '10–12 (na każdą nogę)' },
    { partia: 'Klatka piersiowa', ćwiczenie: 'Wyciskanie sztangi na ławce skośnej (skos głową w górę)', serie: '3', powtórzenia: '10–12' },
    { partia: 'Plecy (dół)', ćwiczenie: 'Hyperextension (prostowanie tułowia na ławce rzymskiej)', serie: '3', powtórzenia: '12–15' },
    { partia: 'Barki', ćwiczenie: 'Podciąganie sztangi wzdłuż tułowia (High Pull)', serie: '2', powtórzenia: '10–12' },
    { partia: 'Ramiona', ćwiczenie: 'Młotkowanie hantlami (Hammer Curls)', serie: '2', powtórzenia: '10–12' },
    { partia: 'Brzuch', ćwiczenie: 'Unoszenie nóg w zwisie na drążku (lub leżąc)', serie: '3', powtórzenia: '10–15' },
];

// Komponent do renderowania tabeli ćwiczeń (Workout table component)
const WorkoutTable = ({ data, title }) => (
    <div className="mb-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 transform hover:scale-[1.01] hover:shadow-xl">
        <h3 className="text-2xl font-extrabold font-heading text-gray-900 mb-4 flex items-center">
            {title} <Dumbbell className="w-6 h-6 ml-3 text-primary-600 flex-shrink-0" />
        </h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full border-collapse">
                <thead>
                    {/* Jasny/szary nagłówek tabeli */}
                    <tr className="bg-gray-100 text-primary-600">
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-700">Partia Mięśniowa</th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-700">Ćwiczenie</th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-700">Serie</th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-700">Powtórzenia</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((item, index) => (
                        <motion.tr 
                            key={index} 
                            className="hover:bg-gray-50 transition duration-200"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{item.partia}</td>
                            <td className="px-4 py-3 whitespace-normal text-sm text-gray-600">{item.ćwiczenie}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.serie}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.powtórzenia}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


// Główny komponent (The main component, App)
const App = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-inter text-gray-900">
            <Header /> {/* Zastąpione Twoim komponentem Header */}
            
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
                            PLAN TRENINGOWY FBW
                        </h1>
                        <p className="text-2xl sm:text-3xl text-primary-600 font-extrabold mb-5">
                            FULL BODY WORKOUT: Fundament Twojej Siły
                        </p>
                        <Zap className="w-12 h-12 text-primary-600 mx-auto mt-4 animate-pulse drop-shadow-lg" />
                    </motion.header>


                    {/* SEKCJA 1: WPROWADZENIE */}
                    <MotionDiv 
                        className="mb-16 p-8 bg-white rounded-3xl shadow-2xl border border-gray-100"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-extrabold font-heading text-primary-600 mb-6 flex items-center border-b pb-3 border-gray-200">
                            <Target className="w-7 h-7 mr-3 flex-shrink-0" />
                            Co to jest Trening FBW i Dlaczego Jest Idealny dla Początkujących?
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            **FBW (Full Body Workout)** to plan treningowy, w którym podczas każdej sesji ćwiczysz <strong>wszystkie główne partie mięśniowe ciała</strong>. Jest to absolutny **fundament** dla każdego, kto dopiero zaczyna swoją przygodę na siłowni, ponieważ uczy podstaw i buduje ogólną bazę siłową.
                        </p>
                        <p className="font-semibold text-gray-900 border-l-4 border-primary-600 pl-4 py-1 bg-primary-50 transition duration-300 hover:shadow-md">
                            **Kluczowa Zasada:** Trening 3 razy w tygodniu (A-wolne-B-wolne-C-wolne), co daje optymalną częstotliwość stymulacji dla początkujących.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" /> **Maksymalna Częstotliwość:** Każda partia trenowana 3x/tydz.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" /> **Szybka Regeneracja:** Dzień przerwy między treningami.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" /> **Nauka Wzorców:** Skupienie na ćwiczeniach wielostawowych (przysiad, wyciskanie, wiosłowanie).</li>
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
                            Podstawowa Struktura Planu FBW (3 Dni w Tygodniu)
                        </h2>
                        
                        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-xl">
                            <table className="min-w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-700">
                                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Dzień</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Trening</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Cel</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {scheduleData.map((item, index) => (
                                        <motion.tr 
                                            key={index} 
                                            className={`${item.isTraining ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'} transition duration-200`}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <td className={`px-4 py-3 whitespace-nowrap text-sm ${item.isTraining ? 'font-bold text-primary-600' : 'text-gray-500'}`}>{item.day}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{item.training}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{item.goal}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="bg-red-100 p-4 rounded-lg mt-6 border-l-4 border-red-500">
                            <p className="text-sm text-red-700">
                                **Przypomnienie:** Zawsze zacznij od **10 minut rozgrzewki ogólnej** i **specjalistycznej** przed pierwszym ćwiczeniem głównym.
                            </p>
                        </div>
                    </MotionDiv>

                    {/* SEKCJA 3: TRENINGI */}
                    <MotionDiv 
                        className="mb-16 p-8 bg-gray-100 rounded-3xl shadow-2xl border border-gray-200"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-extrabold font-heading text-gray-900 mb-8 flex items-center border-b pb-3 border-gray-200">
                            <Dumbbell className="w-7 h-7 mr-3 text-primary-600 flex-shrink-0" />
                            Przykładowy Plan Treningowy FBW (A-B-C)
                        </h2>
                        <div className="bg-primary-50 p-4 rounded-lg mb-6 border-l-4 border-primary-600">
                            <p className="text-sm text-primary-700 text-center font-bold">
                                Skup się na **idealnej technice** – kontrola i zakres ruchu są ważniejsze niż ciężar!
                            </p>
                        </div>

                        <WorkoutTable data={treningA} title="Trening A (Poniedziałek)" />
                        <WorkoutTable data={treningB} title="Trening B (Środa)" />
                        <WorkoutTable data={treningC} title="Trening C (Piątek)" />
                    </MotionDiv>

                    {/* SEKCJA 4: ZASADY */}
                    <MotionDiv 
                        className="p-8 bg-white rounded-3xl shadow-2xl border-l-8 border-primary-600"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-extrabold font-heading text-primary-600 mb-6 flex items-center">
                            <CheckCircle className="w-7 h-7 mr-3 flex-shrink-0" />
                            Złote Zasady FBW dla Początkujących
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition duration-200 border-b border-gray-100">
                                <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-500" />
                                <p>
                                    <strong>Progresja Minimalna:</strong> Co tydzień staraj się zwiększyć obciążenie o 1-2 kg LUB wykonać o 1 powtórzenie więcej. Stały progres jest kluczem.
                                </p>
                            </li>
                            <li className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition duration-200 border-b border-gray-100">
                                <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-500" />
                                <p>
                                    <strong>Czas Przerwy:</strong> Trzymaj się 60–90 sekund między seriami. W FBW czas jest ważny, aby utrzymać tempo treningu.
                                </p>
                            </li>
                            <li className="flex items-start p-3 rounded-lg bg-red-100 border border-red-500 transition duration-200">
                                <AlertTriangle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-red-500" />
                                <p className="font-semibold text-red-700">
                                    <strong>Regeneracja = Wzrost:</strong> Mięśnie nóg trenowane w poniedziałek muszą mieć czas na odbudowę przed piątkiem. Dieta i sen są najważniejsze!
                                </p>
                            </li>
                        </ul>
                    </MotionDiv>
                </div>
            </main>

            <Footer /> {/* Zastąpione Twoim komponentem Footer */}
        </div>
    );
};

export default App;
