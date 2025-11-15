// pages/plan-split.js - BEZ PRZEŁĄCZNIKÓW DO FBW I PPL

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

// DANE: Plan Treningowy SPLIT 4-dniowy
const splitPlan = [
    {
        day: 'Dzień 1: Klatka Piersiowa & Triceps',
        focus: 'Siłowe ćwiczenia złożone na klatkę, akcesoria na triceps.',
        exercises: [
            { name: 'Wyciskanie sztangi na ławce płaskiej', sets: '4', reps: '6-8', notes: 'Główne ćwiczenie siłowe. Progresja ciężaru.' },
            { name: 'Wyciskanie hantli skos w górę (30°)', sets: '3', reps: '8-10', notes: 'Akcent na górną część klatki.' },
            { name: 'Rozpiętki z linkami wyciągu górnego', sets: '3', reps: '12-15', notes: 'Maksymalne rozciągnięcie i spięcie.' },
            { name: 'Wyciskanie francuskie sztangi leżąc', sets: '3', reps: '8-10', notes: 'Ćwiczenie na masę tricepsa.' },
            { name: 'Prostowanie ramion na wyciągu (linki)', sets: '3', reps: '12-15', notes: 'Izolacja i dopompowanie tricepsa.' },
        ],
    },
    {
        day: 'Dzień 2: Plecy & Biceps',
        focus: 'Ćwiczenia na szerokość i grubość pleców, mocne ramiona.',
        exercises: [
            { name: 'Martwy Ciąg (klasyczny/sumo)', sets: '4', reps: '5-7', notes: 'Fundamentalne dla budowania siły i gęstości pleców.' },
            { name: 'Podciąganie na drążku (nachwyt szeroki)', sets: '4', reps: 'Max', notes: 'Skup się na szerokości. Można użyć gumy.' },
            { name: 'Wiosłowanie sztangą w opadzie tułowia', sets: '3', reps: '8-10', notes: 'Dla grubości pleców. Kontrolowany ruch.' },
            { name: 'Uginanie ramion ze sztangą łamaną', sets: '3', reps: '8-10', notes: 'Główne ćwiczenie na biceps. Pełny zakres.' },
            { name: 'Uginanie młotkowe hantlami', sets: '3', reps: '10-12', notes: 'Akcent na przedramiona i długą głowę bicepsa.' },
        ],
    },
    {
        day: 'Dzień 3: Barki & Brzuch',
        focus: 'Kompleksowe kształtowanie barków i stabilny korpus.',
        exercises: [
            { name: 'Wyciskanie żołnierskie (sztanga/hantle)', sets: '4', reps: '8-10', notes: 'Ćwiczenie na masę barków. Stabilny tułów.' },
            { name: 'Unoszenie hantli bokiem (stojąc)', sets: '3', reps: '12-15', notes: 'Izolacja bocznego aktonu. Prowadź łokcie.' },
            { name: 'Odwrotne rozpiętki (maszyna/hantle)', sets: '3', reps: '15-20', notes: 'Na tylny akton barków. Dla zdrowych stawów.' },
            { name: 'Unoszenie nóg w zwisie na drążku', sets: '3', reps: '15-20', notes: 'Mocne spięcie brzucha, nie bujaj ciałem.' },
            { name: 'Allahy/Spięcia na wyciągu', sets: '3', reps: '15-20', notes: 'Izolacja prostych mięśni brzucha.' },
        ],
    },
    {
        day: 'Dzień 4: Nogi',
        focus: 'Mocny trening ud, pośladków i łydek.',
        exercises: [
            { name: 'Przysiad ze sztangą (High Bar/Low Bar)', sets: '4', reps: '6-8', notes: 'Król ćwiczeń. Pilnuj techniki, głębokość ATG.' },
            { name: 'Wypychanie na suwnicy (Leg Press)', sets: '3', reps: '10-12', notes: 'Wysoka objętość, dla siły i hipertrofii.' },
            { name: 'Uginanie nóg na maszynie leżąc', sets: '3', reps: '12-15', notes: 'Izolacja dwugłowych uda. Wolne opuszczanie.' },
            { name: 'Wykroki z hantlami/sztangą', sets: '3', reps: '10-12 na nogę', notes: 'Wyzwanie dla równowagi i pośladków.' },
            { name: 'Wspięcia na palce stojąc', sets: '4', reps: '15-20', notes: 'Maksymalne rozciągnięcie i spięcie łydki.' },
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
            
            {/* Nagłówek Dnia (Ujednolicony styl indigo) */}
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
const SplitContent = () => {
    return (
        <section className="bg-gray-100 py-16 sm:py-24" id="plan-split">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Nagłówek Sekcji */}
                <div className="text-center mb-12">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                        Trening dla Zaawansowanych
                    </h2>
                    <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Intensywny Plan Treningowy SPLIT (4 Dni)
                    </p>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Trening SPLIT (dzielony) pozwala na maksymalne skupienie się na konkretnych partiach mięśniowych, optymalny dla budowania masy i rzeźby.
                    </p>
                </div>

                {/* Kontener Dni Treningowych (GRID) - KLUCZOWE: ID DLA KOTWICY */}
                <div id="plan-table" className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {splitPlan.map((plan, index) => (
                        <TrainingDayCard key={index} plan={plan} />
                    ))}
                </div>

                {/* Wskazówki Treningowe */}
                <div className="mt-16 p-8 bg-white rounded-xl shadow-lg border-l-4 border-indigo-600">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ważne Wskazówki do Planu SPLIT</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>**Regeneracja:** Pamiętaj o dniu przerwy pomiędzy treningami, np. Poniedziałek, Wtorek, Środa (Wolne), Czwartek, Piątek.</li>
                        <li>**Objętość:** Na każdą dużą partię mięśniową wykonujesz 8-12 serii efektywnych w tygodniu.</li>
                        <li>**Odżywianie:** Trening Split wymaga odpowiednio zbilansowanej diety, szczególnie jeśli celujesz w masę mięśniową.</li>
                    </ul>
                </div>

                {/* CTA - Lead Magnet (ostatnia sekcja przed Footerem) */}
                <div className="text-center mt-12">
                    <p className="text-xl text-gray-800 font-semibold mb-4">
                        Stwórz swój spersonalizowany plan SPLIT!
                    </p>
                    <a
                        href="/pobierz-ebook-split"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                    >
                        Pobierz DARMOWY Przewodnik po SPLIT!
                    </a>
                </div>
            </div>
        </section>
    );
};

// GŁÓWNY KOMPONENT STRONY
const SplitPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header /> 
            <main className="flex-grow">
                <SplitContent />
            </main>
            <Footer />
        </div>
    );
};

export default SplitPage;