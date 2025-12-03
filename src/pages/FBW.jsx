// pages/plan-fbw.js - BEZ PRZEŁĄCZNIKÓW DO SPLIT I PPL

import React from 'react';

// 1. ZAKŁADAMY, ŻE TE KOMPONENTY ISTNIEJĄ (Dostosuj ścieżki importu)
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

// Ikona, użyta w stylu FBW (kolor indigo)
const MuscleIcon = () => (
    <svg className="w-7 h-7 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
);

// DANE: Plan Treningowy FBW (3 dni)
const fbwPlan = [
    {
        day: 'Trening A',
        focus: 'Akcent na ćwiczenia złożone (siła)',
        exercises: [
            { name: 'Wyciskanie sztangi na ławce płaskiej', sets: '4', reps: '4-6', notes: 'Główny ruch na klatkę w pełni rozwijające ją.' },
            { name: 'Przysiad', sets: '4', reps: '4-6', notes: 'Główne ćwiczenie rozwijające nogi.' },
            { name: 'Przyciąganie drążka V-bar', sets: '4', reps: '8-10', notes: 'Impuls dla środkowych pleców' },
            { name: 'Rozpiętki na maszynie/hantle', sets: '3', reps: '10-12', notes: 'Głównie mięsień piersiowy większy.' },
            { name: 'Face Pull', sets: '3', reps: '12-15', notes: 'Tył barków, góra pleców, wyprostowanie sylwetki.' },
            { name: 'Wyprosty nóg na maszynie', sets: '3', reps: '10-12', notes: 'Izolacja czworogłowego uda.' },
            { name: 'Biceps hantlem z suplinacją', sets: '4', reps: '8-10', notes: 'Wzmacnainie bicepsu oraz przedramienia.' },
        ],
    },
    {
        day: 'Trening B',
        focus: 'Akcent na objętość (hipertrofia)',
        exercises: [
            { name: 'Martwy ciąg klasyczny', sets: '3', reps: '4-5', notes: 'Podstawowe ćwiczenie wzmacniające całe ciało.' },
            { name: 'Ściąganie drążka szerokim chwytem', sets: '4', reps: '8-10', notes: 'Ćwiczenie na szerokość pleców .' },
            { name: 'Wyciskanie hantli siedząc', sets: '4', reps: '6-8', notes: 'Główne ćwiczenie na budowe wielkości barków.' },
            { name: 'Odwrotne rozpiętki', sets: '3', reps: '12-15', notes: 'Tylna część barków, bardzo ważna, często pomijana.' },
            { name: 'Wyciskanie francuskie', sets: '3', reps: '8-10', notes: 'Rozwój tricepsa, konieczne przed izolacją.' },
            { name: 'Prostowanie ramion na wyciągu', sets: '3', reps: '10-12', notes: 'Izolacja, uzupełnienie tricepsa.' },
            { name: 'Spięcia łydek na maszynie', sets: '3', reps: '10-12', notes: 'Izolacja łydek, mocne rozciągnięcie.' },
        ],
    },
    {
        day: 'Trening C',
        focus: 'Trening mieszany (siła i objętość)',
        exercises: [
            { name: 'Podciąganie', sets: '4', reps: 'Max', notes: 'Obowiązkowe ćwiczenie na szerokość pleców.' },
            { name: 'Wiosłowanie na maszynie', sets: '3', reps: '8-10', notes: 'Grubość pleców.' },
            { name: 'Wyciskanie hantli na skosie dodatnim', sets: '4', reps: '6-8', notes: 'Góra klatki piersiowej.' },
            { name: 'Dipy', sets: '3', reps: '6-8', notes: 'Dół klatki piersiowej.' },
            { name: 'Suwnica na nogi', sets: '4', reps: '8-10', notes: 'Siła i izolowanie nóg.' },
            { name: 'Wznosy bokiem', sets: '4', reps: '10-12', notes: 'Główne ćwiczenie na szerokie barki.' },
            { name: 'Biceps na wyciągu/sztanga', sets: '4', reps: '8-10', notes: 'Główne ćwiczenie na duży biceps.' },
        ],
    },
];

// Komponent wyświetlający pojedyncze ćwiczenie
const ExerciseRow = ({ exercise }) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
        <div className="flex-1 min-w-0 pr-4">
            <p className="text-gray-900 font-semibold">{exercise.name}</p>
            <p className="text-sm text-gray-500 mt-1 italic">{exercise.notes}</p>
        </div>
        <div className="text-right flex-shrink-0">
            <p className="text-sm text-gray-700 font-medium">{exercise.sets} serie</p>
            <p className="text-xs text-indigo-600 font-bold">{exercise.reps} powtórzeń</p> 
        </div>
    </div>
);

// Komponent dla pojedynczego Dnia Treningowego
const TrainingDayCard = ({ plan }) => {
    return (
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden h-full flex flex-col transition duration-300 hover:shadow-indigo-300/50">
            
            {/* Nagłówek Dnia */}
            <div className={`p-6 bg-indigo-50 border-b-4 border-indigo-600 flex items-center`}>
                <MuscleIcon />
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.day}</h3>
                    <p className="text-sm text-gray-600 mt-1">{plan.focus}</p>
                </div>
            </div>

            {/* Lista Ćwiczeń */}
            <div className="p-6 space-y-2 flex-1">
                {plan.exercises.map((exercise, index) => (
                    <ExerciseRow key={index} exercise={exercise} />
                ))}
            </div>
        </div>
    );
};


// GŁÓWNY KOMPONENT TREŚCI
const FbwContent = () => {
    return (
        <section className="bg-gray-100 py-16 sm:py-24" id="plan-fbw">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Nagłówek Sekcji */}
                <div className="text-center mb-12">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                        Trening dla Początkujących
                    </h2>
                    <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Plan Treningowy FBW (Full Body Workout)
                    </p>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        FBW to idealny start: trenujesz całe ciało na jednej sesji, co świetnie buduje siłę i kondycję.
                    </p>
                </div>

                {/* Sekcja QuickPlanSwitcher została usunięta */}

                {/* Kontener Dni Treningowych (GRID) */}
                <div id="plan-table" className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {fbwPlan.map((plan, index) => (
                        <TrainingDayCard key={index} plan={plan} />
                    ))}
                </div>

                {/* Wskazówki Treningowe */}
                {/* NOWA SEKCJA WSKAZÓWEK - DYNAMICZNE BLOKI AKCJI */}
<div className="mt-8">
    <h3 className="text-3xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-3 mb-6">
        🔥 Twoje Kluczowe Zasady Treningowe
    </h3>

    {/* Kontener Siatki na Wskazówki */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* --- WSKAZÓWKA 1: Częstotliwość --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-indigo-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-indigo-700 font-bold mr-3">🗓️</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Częstotliwość:</strong> 
                    Trenuj 3 razy w tygodniu, np. Poniedziałek, Środa, Piątek, aby każda partia mięśniowa miała odpowiednią stymulację i regenerację.
                </p>
            </div>
        </div>
        
        {/* --- WSKAZÓWKA 2: Priorytet ćwiczeń wielostawowych --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-indigo-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-indigo-700 font-bold mr-3">💪</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Priorytet ćwiczeń wielostawowych:</strong> 
                    Zaczynaj trening od dużych ruchów (przysiad, martwy ciąg, wyciskanie), aby wykorzystać maksymalnie siłę i energię.
                </p>
            </div>
        </div>

        {/* --- WSKAZÓWKA 3: Progresja --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-indigo-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-red-700 font-bold mr-3">📈</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Progresja:</strong> 
                    Systematycznie zwiększaj ciężar lub liczbę powtórzeń, gdy osiągniesz górny zakres powtórzeń. To klucz do budowy masy mięśniowej i siły.
                </p>
            </div>
        </div>

        {/* --- WSKAZÓWKA 4: Intensywność --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-indigo-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-red-700 font-bold mr-3">⚡</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Intensywność:</strong> 
                    Trenuj ciężko, ale zostaw 1–2 powtórzenia w zapasie (RIR 1–2), aby uniknąć przetrenowania i poprawić technikę.
                </p>
            </div>
        </div>

        {/* --- WSKAZÓWKA 5: Objętość --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-indigo-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-indigo-700 font-bold mr-3">📚</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Objętość:</strong> 
                    Staraj się wykonywać 12–18 serii na największe partie mięśniowe w tygodniu, łącząc ćwiczenia złożone i izolacyjne.
                </p>
            </div>
        </div>

        {/* --- WSKAZÓWKA 6: Regeneracja --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-indigo-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-teal-700 font-bold mr-3">🌙</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Regeneracja:</strong> 
                    Zachowaj 1–2 dni przerwy między sesjami, dbaj o sen 7–9 godzin i odpowiednią dietę, aby mięśnie mogły rosnąć.
                </p>
            </div>
        </div>

        {/* --- WSKAZÓWKA 7: Technika i tempo --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-indigo-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-teal-700 font-bold mr-3">🔬</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Technika i tempo:</strong> 
                    Kontroluj ruch, zwłaszcza opuszczanie ciężaru. Poprawna forma minimalizuje ryzyko kontuzji i zwiększa efektywność ćwiczeń.
                </p>
            </div>
        </div>

    </div>
</div>
{/* KONIEC NOWEJ SEKCJI WSKAZÓWEK */}

                {/* CTA - Lead Magnet (ostatnia sekcja przed Footerem) */}
                <div className="text-center mt-12">
                    <p className="text-xl text-gray-800 font-semibold mb-4">
                        Pobierz gotowy 8-tygodniowy plan FBW z progresją!
                    </p>
                    <a
                        href="/pobierz-ebook-fbw"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                    >
                        Pobierz DARMOWY Plan dla Początkujących
                    </a>
                </div>
                
            </div>
        </section>
    );
};

// GŁÓWNY KOMPONENT STRONY
const FbwPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header /> 
            <main className="flex-grow">
                <FbwContent />
            </main>
            <Footer />
        </div>
    );
};

export default FbwPage;