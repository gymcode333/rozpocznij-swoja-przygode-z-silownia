"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Target, CheckCircle, TrendingUp, Zap, CalendarDays, AlertTriangle, Armchair, Hand, Footprints, Clock, Heart, Maximize2 } from 'lucide-react';
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

// --- DANE DLA PLANU PPL (6 DNI) ---
const pplSchedule = [
    { day: 'Poniedziałek', training: 'PUSH', isTraining: true, icon: Hand, color: 'bg-primary-600', hoverColor: 'hover:bg-primary-700' },
    { day: 'Wtorek', training: 'PULL', isTraining: true, icon: Armchair, color: 'bg-primary-600', hoverColor: 'hover:bg-primary-700' },
    { day: 'Środa', training: 'LEGS', isTraining: true, icon: Footprints, color: 'bg-primary-600', hoverColor: 'hover:bg-primary-700' },
    { day: 'Czwartek', training: 'REGENERACJA', isTraining: false, icon: Clock, color: 'bg-gray-200', hoverColor: 'hover:bg-gray-300' },
    { day: 'Piątek', training: 'PUSH', isTraining: true, icon: Hand, color: 'bg-primary-600', hoverColor: 'hover:bg-primary-700' },
    { day: 'Sobota', training: 'PULL', isTraining: true, icon: Armchair, color: 'bg-primary-600', hoverColor: 'hover:bg-primary-700' },
    { day: 'Niedziela', training: 'LEGS', isTraining: true, icon: Footprints, color: 'bg-primary-600', hoverColor: 'hover:bg-primary-700' },
];

const pushWorkout = [
    { ćwiczenie: 'Wyciskanie sztangi na ławce płaskiej', target: 'Klatka', serie: '3', powtórzenia: '6-8' },
    { ćwiczenie: 'Wyciskanie hantli na skosie dodatnim', target: 'Klatka', serie: '3', powtórzenia: '8-10' },
    { ćwiczenie: 'Wyciskanie hantli siedząc (Barki)', target: 'Barki', serie: '3', powtórzenia: '8-10' },
    { ćwiczenie: 'Unoszenie hantli bokiem', target: 'Barki boczne', serie: '3', powtórzenia: '12-15' },
    { ćwiczenie: 'Wyprosty ramion na wyciągu (Triceps)', target: 'Triceps', serie: '3', powtórzenia: '10-12' },
];

const pullWorkout = [
    { ćwiczenie: 'Martwy ciąg (Rumunski)', target: 'Plecy/Dwugłowe', serie: '3', powtórzenia: '8-10' },
    { ćwiczenie: 'Podciąganie na drążku (lub ściąganie wyciągu szerokim chwytem)', target: 'Plecy (szerokość)', serie: '3', powtórzenia: '8-12' },
    { ćwiczenie: 'Wiosłowanie sztangą w opadzie tułowia', target: 'Plecy (grubość)', serie: '3', powtórzenia: '8-10' },
    { ćwiczenie: 'Face Pull', target: 'Barki tył', serie: '3', powtórzenia: '15-20' },
    { ćwiczenie: 'Uginanie ramion ze sztangą (Biceps)', target: 'Biceps', serie: '3', powtórzenia: '10-12' },
];

const legsWorkout = [
    { ćwiczenie: 'Przysiady ze sztangą na plecach', target: 'Czworogłowe', serie: '3', powtórzenia: '6-8' },
    { ćwiczenie: 'Hack Squat / Wypychanie na suwnicy', target: 'Czworogłowe/Pośladki', serie: '3', powtórzenia: '10-12' },
    { ćwiczenie: 'Uginanie nóg leżąc (Dwugłowe)', target: 'Dwugłowe', serie: '3', powtórzenia: '10-12' },
    { ćwiczenie: 'Wykroki z hantlami', target: 'Czworogłowe/Pośladki', serie: '3', powtórzenia: '10 na nogę' },
    { ćwiczenie: 'Spięcia brzucha z obciążeniem', target: 'Brzuch', serie: '3', powtórzenia: '15-20' },
];


// Komponent do renderowania tabeli ćwiczeń dla PPL
const PPLWorkoutTable = ({ data, title, icon: Icon }) => {
    // Używamy koloru primary dla ikon i nagłówków
    const accentColor = 'primary-600';
    
    return (
        <div className="mb-10 p-6 border border-gray-100 rounded-3xl bg-white shadow-xl transition duration-500 transform hover:scale-[1.01] hover:shadow-2xl">
            <h3 className={`text-2xl font-extrabold font-heading mb-6 flex items-center text-gray-900`}>
                <Icon className={`w-7 h-7 mr-3 text-${accentColor} flex-shrink-0 drop-shadow-md`} />
                {title}
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full border-collapse">
                    <thead>
                        {/* Jasny, stonowany nagłówek tabeli */}
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
};

// Komponent do renderowania Harmonogramu jako kart
const ScheduleCard = ({ day, training, icon: Icon, color, hoverColor, isTraining }) => (
    <MotionDiv 
        className={`p-6 rounded-2xl shadow-xl transition-all duration-300 transform ${color} ${hoverColor} hover:-translate-y-1 h-full flex flex-col justify-between border border-gray-200`}
        whileHover={{ scale: isTraining ? 1.02 : 1.0 }}
    >
        <div className="flex items-center space-x-3 mb-2">
            {/* Ikony w białym kolorze na tle primary/szarym */}
            <Icon className={`w-8 h-8 ${isTraining ? 'text-white' : 'text-gray-700'} drop-shadow-sm opacity-90`} />
            <h4 className={`text-lg font-extrabold ${isTraining ? 'text-white' : 'text-gray-800'}`}>{day}</h4>
        </div>
        <p className={`text-xl font-bold mb-1 ${isTraining ? 'text-white' : 'text-gray-900'}`}>
            {training}
        </p>
        <p className={`text-xs ${isTraining ? 'text-white/90' : 'text-gray-600'}`}>
            {isTraining ? 'Wysoka intensywność i objętość.' : 'Pełna regeneracja kluczem do postępów.'}
        </p>
    </MotionDiv>
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
                            PLAN TRENINGOWY PPL
                        </h1>
                        <p className="text-2xl sm:text-3xl text-primary-600 font-extrabold mb-5">
                            PUSH, PULL, LEGS: MAX Hipertrofia
                        </p>
                        <Zap className="w-12 h-12 text-primary-600 mx-auto mt-4 animate-pulse drop-shadow-lg" />
                    </motion.header>

                    {/* SEKCJA 1: CZYM JEST PPL I DLA KOGO */}
                    <MotionDiv 
                        className="mb-16 p-8 bg-white rounded-3xl shadow-2xl border border-gray-100"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-extrabold font-heading text-primary-600 mb-6 flex items-center border-b pb-3 border-gray-200">
                            <Maximize2 className="w-7 h-7 mr-3 flex-shrink-0" />
                            Definicja i Kluczowe Korzyści PPL
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="col-span-1 md:col-span-2 text-lg text-gray-700 space-y-4">
                                <p>
                                    PPL (Push, Pull, Legs) to **funkcjonalny** podział treningowy, który grupuje mięśnie ze względu na ich **działanie (pchanie, ciągnięcie, nogi)**. Jest uznawany za jeden z najbardziej efektywnych schematów dla osób średniozaawansowanych i zaawansowanych, dążących do **maksymalnej hipertrofii**.
                                </p>
                                <p className="font-semibold text-gray-900 border-l-4 border-primary-600 pl-4 py-1 bg-primary-50 transition duration-300 hover:shadow-md">
                                    **Kluczowa zasada:** Trenujesz każdą dużą partię mięśniową **dwa razy w tygodniu**, co jest optymalne dla szybkiego wzrostu siły i masy.
                                </p>
                            </div>
                            <div className="col-span-1">
                                <ul className="space-y-4 p-5 bg-gray-100 rounded-xl shadow-inner border border-gray-200">
                                    <li className="flex items-start text-primary-600 font-bold"><CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" /> Częstotliwość 2x/tydzień</li>
                                    <li className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" /> Idealny na 6 dni treningowych</li>
                                    <li className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" /> Lepsze zarządzanie regeneracją</li>
                                </ul>
                            </div>
                        </div>
                    </MotionDiv>

                    {/* SEKCJA 2: HARMONOGRAM (KARTY) */}
                    <MotionDiv 
                        className="mb-16 p-8 bg-gray-100 rounded-3xl shadow-2xl border border-gray-200"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{ visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
                    >
                        <h2 className="text-3xl font-extrabold font-heading text-gray-900 mb-8 text-center flex items-center justify-center">
                            <CalendarDays className="w-7 h-7 mr-3 text-primary-600" />
                            Profesjonalny Harmonogram PPL (6-Dniowy)
                        </h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                            {pplSchedule.map((item, index) => (
                                <motion.div key={index} variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
                                    <ScheduleCard {...item} />
                                </motion.div>
                            ))}
                        </div>
                    </MotionDiv>

                    {/* SEKCJA 3: PLAN TRENINGOWY (GRID) */}
                    <h2 className="text-4xl font-extrabold font-heading text-gray-900 mb-10 text-center">
                        <Dumbbell className="w-9 h-9 mr-3 inline text-primary-600" />
                        Szczegółowy Podział Ćwiczeń
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants}>
                            <PPLWorkoutTable data={pushWorkout} title="PUSH DAY (Pchanie)" icon={Hand} />
                        </MotionDiv>
                        
                        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants}>
                            <PPLWorkoutTable data={pullWorkout} title="PULL DAY (Ciągnięcie)" icon={Armchair} />
                        </MotionDiv>

                        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants}>
                            <PPLWorkoutTable data={legsWorkout} title="LEGS DAY (Nogi)" icon={Footprints} />
                        </MotionDiv>
                    </div>

                    {/* SEKCJA 4: ZASADY ZAŻYŁE */}
                    <MotionDiv 
                        className="p-8 bg-white rounded-3xl shadow-2xl border-l-8 border-primary-600"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-extrabold font-heading text-primary-600 mb-6 flex items-center">
                            <Heart className="w-7 h-7 mr-3 flex-shrink-0" />
                            Zasady Progresji i Regeneracji (Must-Have)
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition duration-200 border-b border-gray-100">
                                <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-500" />
                                <p>
                                    <strong>Podwójna Progresja Obciążenia:</strong> W pierwszym cyklu (Pon, Wt, Śr) skup się na mniejszym ciężarze i technice (10-15 powt.). W drugim cyklu (Pt, Sob, Ndz) zwiększ obciążenie, pracując w zakresie siłowym (6-10 powt.). To zapewnia stały bodziec do wzrostu.
                                </p>
                            </li>
                            <li className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition duration-200 border-b border-gray-100">
                                <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-500" />
                                <p>
                                    <strong>Zarządzanie Czasem:</strong> Długość treningu PPL to zwykle 60–75 minut. Jeśli trwa dłużej, zredukuj akcesoria. Skróć przerwy do 60-90 sekund dla izolacji, 120-180 sekund dla ćwiczeń złożonych.
                                </p>
                            </li>
                            <li className="flex items-start p-3 rounded-lg bg-red-100 border border-red-500 transition duration-200">
                                <AlertTriangle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-red-500" />
                                <p className="font-semibold text-red-700">
                                    <strong>Priorytet Regeneracji:</strong> 6 sesji w tygodniu wymaga **rygorystycznej** diety (białko!) i **minimum 7-8 godzin snu**. Bez tego plan ten jest nieefektywny i prowadzi do przetrenowania.
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
