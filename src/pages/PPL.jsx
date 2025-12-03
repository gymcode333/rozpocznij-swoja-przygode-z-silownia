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
           
            { name: 'Wyciskanie sztangi na ławce płaskiej', sets: '4', reps: '4-6', notes: 'Główny ruch na klatkę w pełni rozwijające ją.' },
            { name: 'Wyciskanie hantli na skosie dodatnim', sets: '3', reps: '6-8', notes: 'Góra klatki piersiowej.' },
            { name: 'Rozpiętki na maszynie', sets: '3', reps: '10-12', notes: 'Głównie mięsień piersiowy większy.' },
            { name: 'Wyciskanie hantli siedząc', sets: '3', reps: '6-8', notes: 'Główne ćwiczenie na budowe wielkości barków.' },
            { name: 'Wznosy hantli bokiem', sets: '4', reps: '10-12', notes: 'Szerokość barków.' },
            { name: 'Wyciskanie francuskie', sets: '2', reps: '8-10', notes: 'Wielkość tricepsa.' },
            { name: 'Prostowanie ramion na wyciągu', sets: '3', reps: '12-15', notes: 'Izolacja tricepsa.' },
            
        ],
    },
    {
        day: 'Dzień 2: PULL (Ciągnięcie)',
        focus: 'Plecy, Biceps, Tylny Akton Barków',
        exercises: [
            { name: 'Podciąganie nachwytem', sets: '4', reps: '6-8', notes: 'Obowiązkowe ćwczenie na szerokość pleców.' },
            { name: 'Wiosłowanie sztangą / hantlą', sets: '4', reps: '8-10', notes: 'Na grubość pleców.' },
            { name: 'Ściąganie drążka neutral grip', sets: '3', reps: '8-10', notes: 'Szerokość pleców uzupełnienie.' },
            { name: 'Face pull', sets: '3', reps: '12-15', notes: 'Tył barków, góra pleców, poprawa sylwetki.' },
            { name: 'Uginanie sztangi stojąc', sets: '3', reps: '8-10', notes: 'Masa bicepsa.' },
            { name: 'Uginanie młotkowe', sets: '3', reps: '10-12', notes: 'Grubość bicepsa oraz przedramie.' },
        ],
    },
    {
        day: 'Dzień 3: LEGS (Nogi)',
        focus: 'Uda, Pośladki, Łydki, Core',
        exercises: [
            { name: 'Przysiady ze sztangą', sets: '4', reps: '4-6', notes: 'Fundamentalne dla budowy nóg.' },
            { name: 'Wypychanie na suwnicy', sets: '3', reps: '8-10', notes: 'Lekko - Dla wysokiej objętości i hipertrofii.' },
            { name: 'Prostowanie nóg na maszynie', sets: '3', reps: '10-12', notes: 'Izolacja czworogłowego uda.' },
            { name: 'Rumuński martwy ciąg (RDL)', sets: '3', reps: '6-8', notes: 'Wielostawowe ćwiczenie na dwugłowy uda.' },
            { name: 'Uginanie nóg leżąc', sets: '3', reps: '10-12', notes: 'Izolacja dwugłowego uda.' },
            { name: 'Wspięcia na palce', sets: '3', reps: '10-12', notes: 'Ćwiczenia na łydki.' },
        ],
    },
    {
        day: 'Dzień 4: UPPER',
        focus: 'Objętościowy trening na hipertrofię',
        exercises: [
            { name: 'Wyciskanie hantli na płaskiej', sets: '4', reps: '8-10', notes: 'Siła i wygląd ogólny klatki piersiowej.' },
            { name: 'Wiosłowanie na maszynie', sets: '4', reps: '8-10', notes: 'Grubość pleców.' },
            { name: 'Odwrotne rozpiętki', sets: '3', reps: '12-15', notes: 'Rozbudowa tylnej części barków - bardzo ważne.' },
            { name: 'Podciąganie podchwytem', sets: '3', reps: '6-8', notes: 'Szerokośc pleców z zaanagażowaniem bicepsa.' },
            { name: 'Rozpiętki skos dodatni', sets: '3', reps: '12-15', notes: 'Izolacja górnej części klatki piersiowej.'},
            { name: 'Biceps na wyciągu', sets: '2', reps: '10-12', notes: 'Izolacja bicepsa.'},
            { name: 'Triceps na wyciągu', sets: '2', reps: '10-12', notes: 'Izolacja tricepsa.'},
           
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
                {/* NOWA SEKCJA WSKAZÓWEK - DYNAMICZNE BLOKI AKCJI (INDIGO ONLY) */}
<div className="mt-8">
    <h3 className="text-3xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-3 mb-6">
        🔥 Kluczowe Zasady Planu PPL
    </h3>

    {/* Kontener Siatki na Wskazówki */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* --- WSKAZÓWKA 1: Ćwiczenia Wielostawowe --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-indigo-700 font-bold mr-3">💪</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Priorytet Wielostawów:</strong> 
                    Rozpoczynaj każdy dzień od dużego ćwiczenia wielostawowego (przysiad, martwy ciąg, wyciskanie), aby wykorzystać maksymalnie siłę i energię.
                </p>
            </div>
        </div>
        
        {/* --- WSKAZÓWKA 2: Progresja --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-indigo-700 font-bold mr-3">📈</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Progresja:</strong> 
                    Zachowaj progresję — dodawaj ciężar lub powtórzenia, gdy osiągniesz górną granicę zakresu powtórzeń. Systematyczny wzrost obciążenia jest kluczem do hipertrofii.
                </p>
            </div>
        </div>

        {/* --- WSKAZÓWKA 3: Intensywność --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-indigo-700 font-bold mr-3">🔥</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Intensywność:</strong> 
                    Trenuj z odpowiednią intensywnością — zostaw 1–2 powtórzenia w zapasie (RIR 1–2) w większości ćwiczeń, aby uniknąć przetrenowania przy częstym powtarzaniu partii mięśniowych.
                </p>
            </div>
        </div>

        {/* --- WSKAZÓWKA 4: Regeneracja --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-indigo-700 font-bold mr-3">😴</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Priorytetyzuj Regenerację:</strong> 
                    PPL pozwala trenować każdą partię dwa razy w tygodniu, więc odpoczynek, sen i odpowiednia dieta są niezbędne dla wzrostu mięśni.
                </p>
            </div>
        </div>

        {/* --- WSKAZÓWKA 5: Rozkład dni --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-indigo-700 font-bold mr-3">🗓️</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Rozkładaj Dni Mądrze:</strong> 
                    Np. PUSH → PULL → wolne → LEGS → UPPER → wolne, aby te same grupy mięśniowe miały czas na regenerację.
                </p>
            </div>
        </div>

        {/* --- WSKAZÓWKA 6: Izolacje --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-indigo-700 font-bold mr-3">🔬</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Nie Pomijaj Izolacji:</strong> 
                    Ćwiczenia na biceps, triceps czy tylne aktony barków poprawiają proporcje sylwetki i pomagają w wyrzeźbieniu mięśni.
                </p>
            </div>
        </div>

        {/* --- WSKAZÓWKA 7: Kontrola Tempa --- */}
        <div className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
                <span className="text-xl text-indigo-700 font-bold mr-3">⚙️</span>
                <p className="flex-1">
                    <strong className="text-indigo-700 block text-lg mb-1">Kontroluj Tempo Ruchu:</strong> 
                    Wolniejsze opuszczanie ciężaru i płynne podnoszenie zwiększają efektywność ćwiczenia i zmniejszają ryzyko kontuzji.
                </p>
            </div>
        </div>

    </div>
</div>
{/* KONIEC NOWEJ SEKCJI WSKAZÓWEK */}





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