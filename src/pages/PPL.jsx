// pages/plan-ppl.js - BEZ PRZEŁĄCZNIKÓW DO FBW I SPLIT

import React from 'react';

// 1. ZAKŁADAMY, ŻE TE KOMPONENTY ISTNIEJĄ (Dostosuj ścieżki importu)
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

// Ikona, użyta w stylu FBW (kolor indigo)
const HandIcon = () => (
    <svg className="w-7 h-7 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m-4.5-4.5l4.5 4.5 4.5-4.5m-9-9l4.5-4.5 4.5 4.5"></path>
    </svg>
);

// DANE: Plan Treningowy PPL (Push, Pull, Legs) (6 dni)
const pplPlan = [
    {
        day: 'Dzień 1: PUSH (Pchanie)',
        focus: 'Klatka, Barki, Triceps',
        exercises: [
            { name: 'Wyciskanie na ławce (sztanga)', sets: '4', reps: '6-8', notes: 'Główny ruch na klatkę.' },
            { name: 'Wyciskanie hantli skos (góra)', sets: '3', reps: '8-10', notes: 'Akcent na górną część klatki.' },
            { name: 'Wyciskanie żołnierskie (barki)', sets: '3', reps: '8-10', notes: 'Na masę i siłę barków.' },
            { name: 'Unoszenie hantli bokiem', sets: '3', reps: '12-15', notes: 'Izolacja bocznego aktonu barków.' },
            { name: 'Wyciskanie francuskie (triceps)', sets: '3', reps: '10-12', notes: 'Ćwiczenie na masę tricepsa.' },
            { name: 'Prostowanie ramion na wyciągu', sets: '2', reps: '15-20', notes: 'Dopompowanie tricepsa.' },
        ],
    },
    {
        day: 'Dzień 2: PULL (Ciągnięcie)',
        focus: 'Plecy, Biceps, Tylny Akton Barków',
        exercises: [
            { name: 'Martwy Ciąg', sets: '3', reps: '5-7', notes: 'Ruch podstawowy, budowanie siły.' },
            { name: 'Podciąganie / Ściąganie drążka', sets: '4', reps: '6-10', notes: 'Na szerokość pleców.' },
            { name: 'Wiosłowanie hantlami/sztangą', sets: '3', reps: '8-10', notes: 'Na grubość i gęstość pleców.' },
            { name: 'Uginanie ramion ze sztangą', sets: '3', reps: '8-10', notes: 'Główne ćwiczenie na biceps.' },
            { name: 'Face Pulls (przyciąganie liny)', sets: '3', reps: '15-20', notes: 'Na tylny akton barków i zdrowie stawów.' },
            { name: 'Uginanie nadgarstków', sets: '2', reps: '20+', notes: 'Wzmocnienie przedramion.' },
        ],
    },
    {
        day: 'Dzień 3: LEGS (Nogi)',
        focus: 'Uda, Pośladki, Łydki, Core',
        exercises: [
            { name: 'Przysiady ze sztangą', sets: '4', reps: '6-8', notes: 'Fundamentalne dla budowy nóg.' },
            { name: 'Wypychanie na suwnicy (Leg Press)', sets: '3', reps: '10-12', notes: 'Dla wysokiej objętości i hipertrofii.' },
            { name: 'Wykroki z hantlami/sztangą', sets: '3', reps: '10-12 na nogę', notes: 'Akcent na pośladki i stabilność.' },
            { name: 'Uginanie nóg leżąc/siedząc', sets: '3', reps: '12-15', notes: 'Izolacja dwugłowych uda.' },
            { name: 'Wspięcia na palce stojąc', sets: '4', reps: '15-20', notes: 'Na łydki. Pełne rozciągnięcie.' },
            { name: 'Plank/Unoszenie nóg w zwisie', sets: '3', reps: '60s/15', notes: 'Ćwiczenia na stabilny korpus.' },
        ],
    },
    {
        day: 'Dzień 4: PUSH (Pchanie II)',
        focus: 'Objętościowy trening na hipertrofię',
        exercises: [
            { name: 'Pompki na poręczach (Dipsy)', sets: '3', reps: '8-10', notes: 'Alternatywa dla wyciskania, akcent na dolną klatkę.' },
            { name: 'Wyciskanie hantli siedząc (barki)', sets: '3', reps: '10-12', notes: 'Kontrolowany ruch, dla lepszej koncentracji.' },
            { name: 'Rozpiętki na maszynie Pec Deck', sets: '3', reps: '12-15', notes: 'Maksymalne dopompowanie klatki.' },
            { name: 'Unoszenie hantli w opadzie tułowia', sets: '3', reps: '15-20', notes: 'Na tylne aktony. Wyższa objętość.' },
            { name: 'Prostowanie ramion linkami (overhand)', sets: '3', reps: '12-15', notes: 'Izolacja bocznej głowy tricepsa.'},
        ],
    },
    {
        day: 'Dzień 5: PULL (Ciągnięcie II)',
        focus: 'Wysoka objętość, akcent na szerokość pleców',
        exercises: [
            { name: 'Wiosłowanie T-Bar/w podporze', sets: '3', reps: '8-10', notes: 'Dla grubości pleców.' },
            { name: 'Ściąganie drążka (chwyt neutralny)', sets: '4', reps: '10-12', notes: 'Na szerokość, mocne spięcie na dole.' },
            { name: 'Szrugsy ze sztangą/hantlami', sets: '3', reps: '15-20', notes: 'Na mięśnie kapturowe (trapezy).' },
            { name: 'Uginanie młotkowe (hantle)', sets: '3', reps: '10-12', notes: 'Budowanie szczytu bicepsa i przedramienia.' },
            { name: 'Uginanie na modlitewniku', sets: '3', reps: '10-12', notes: 'Maksymalna izolacja bicepsa.' },
        ],
    },
    {
        day: 'Dzień 6: LEGS (Nogi II)',
        focus: 'Akcent na tylną taśmę i pośladki',
        exercises: [
            { name: 'Martwy Ciąg Rumuński', sets: '4', reps: '8-10', notes: 'Idealne dla pośladków i dwugłowych. Duże rozciągnięcie.' },
            { name: 'Hack Przysiady/Prostowanie nóg', sets: '3', reps: '10-15', notes: 'Izolacja mięśni czworogłowych.' },
            { name: 'Hip Thrusts (unoszenie bioder)', sets: '3', reps: '10-12', notes: 'Najlepsze ćwiczenie na siłę pośladków.' },
            { name: 'Odwodzenie nóg na maszynie/linkach', sets: '3', reps: '15-20', notes: 'Kształtowanie pośladków (boczna część).' },
            { name: 'Wspięcia na palce siedząc', sets: '3', reps: '20+', notes: 'Na mniejszy mięsień płaszczkowaty.' },
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
                <HandIcon />
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.day}</h3>
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


// *******************************************************************
// USUNIĘTO: QuickPlanSwitcher (sekcja z guzikami FBW/SPLIT)
// *******************************************************************


// GŁÓWNY KOMPONENT TREŚCI
const PplContent = () => {
    return (
        <section className="bg-gray-100 py-16 sm:py-24" id="plan-ppl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Nagłówek Sekcji */}
                <div className="text-center mb-12">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                        Plan dla Efektywnej Hipertrofii
                    </h2>
                    <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Plan Treningowy PPL (Push-Pull-Legs)
                    </p>
                    <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
                        PPL to podział treningowy, który umożliwia trenowanie każdej partii mięśniowej dwa razy w tygodniu, co jest optymalne dla maksymalnego wzrostu masy mięśniowej.
                    </p>
                </div>

                {/* Kontener Dni Treningowych (GRID) - KLUCZOWE: ID DLA KOTWICY #plan-table */}
                <div id="plan-table" className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {pplPlan.map((plan, index) => (
                        <TrainingDayCard key={index} plan={plan} />
                    ))}
                </div>

                {/* Wskazówki Treningowe */}
                <div className="mt-16 p-8 bg-white rounded-xl shadow-lg border-l-4 border-indigo-600">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Schemat i Cykliczność PPL</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>**Zalecany Schemat:** PUSH (1), PULL (2), LEGS (3), WOLNE, PUSH (4), PULL (5), LEGS (6), WOLNE.</li>
                        <li>**Cel:** Trenowanie partii dwa razy w tygodniu z zachowaniem pełnej regeneracji.</li>
                        <li>**Intensywność:** Skup się na ciężarze w pierwszych ćwiczeniach (3-4 serie) i na objętości w ćwiczeniach akcesoryjnych (izolacyjnych).</li>
                    </ul>
                </div>

                {/* CTA - Lead Magnet (ostatnia sekcja przed Footerem) */}
                <div className="text-center mt-12">
                    <p className="text-xl text-gray-800 font-semibold mb-4">
                        Pobierz gotowy 8-tygodniowy plan PPL z progresją!
                    </p>
                    <a
                        href="/pobierz-ebook-ppl"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                    >
                        Pobierz DARMOWY Plan Hipertrofii PPL
                    </a>
                </div>
            </div>
        </section>
    );
};

// GŁÓWNY KOMPONENT STRONY
const PplPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header /> 
            <main className="flex-grow">
                <PplContent />
            </main>
            <Footer />
        </div>
    );
};

export default PplPage;