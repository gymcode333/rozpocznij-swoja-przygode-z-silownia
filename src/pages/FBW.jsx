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
            { name: 'Przysiad ze sztangą', sets: '4', reps: '8-10', notes: 'Główny ruch na nogi. Pełne zejście.' },
            { name: 'Wyciskanie sztangi na ławce płaskiej', sets: '4', reps: '8-10', notes: 'Główny ruch na klatkę. Kontrola.' },
            { name: 'Wiosłowanie sztangą/hantlami', sets: '4', reps: '8-10', notes: 'Główny ruch na plecy. Mocne spięcie.' },
            { name: 'Wyciskanie żołnierskie (barki)', sets: '3', reps: '10-12', notes: 'Ćwiczenie na barki. Stabilny tułów.' },
            { name: 'Uginanie ramion ze sztangą (biceps)', sets: '2', reps: '10-12', notes: 'Izolacja bicepsa.' },
            { name: 'Prostowanie ramion na wyciągu (triceps)', sets: '2', reps: '10-12', notes: 'Izolacja tricepsa.' },
        ],
    },
    {
        day: 'Trening B',
        focus: 'Akcent na objętość (hipertrofia)',
        exercises: [
            { name: 'Martwy Ciąg (Rumuński)', sets: '4', reps: '8-10', notes: 'Akcent na dwugłowe uda i pośladki.' },
            { name: 'Wyciskanie hantli skos w górę', sets: '4', reps: '10-12', notes: 'Akcent na górną klatkę.' },
            { name: 'Ściąganie drążka szerokim chwytem', sets: '4', reps: '10-12', notes: 'Akcent na szerokość pleców.' },
            { name: 'Unoszenie hantli bokiem (barki)', sets: '3', reps: '12-15', notes: 'Izolacja bocznego aktonu.' },
            { name: 'Uginanie młotkowe (hantle)', sets: '2', reps: '10-12', notes: 'Akcent na przedramiona.' },
            { name: 'Pompki na poręczach (Dipsy)', sets: '2', reps: '10-12', notes: 'Akcent na triceps i dolną klatkę.' },
        ],
    },
    {
        day: 'Trening C',
        focus: 'Trening mieszany (siła i objętość)',
        exercises: [
            { name: 'Wypychanie na suwnicy (Leg Press)', sets: '3', reps: '12-15', notes: 'Wysoka objętość na nogi.' },
            { name: 'Pompki na poręczach (Dipsy/Dumbbell Press)', sets: '4', reps: '8-10', notes: 'Alternatywny ruch na klatkę.' },
            { name: 'Podciąganie (chwyt neutralny)', sets: '4', reps: 'Max', notes: 'Dla grubości pleców.' },
            { name: 'Face Pulls (tylny akton barków)', sets: '3', reps: '15-20', notes: 'Dla zdrowia stawów i postawy.' },
            { name: 'Modlitewnik (biceps)', sets: '2', reps: '10-12', notes: 'Maksymalna izolacja bicepsa.' },
            { name: 'Wyciskanie francuskie (triceps)', sets: '2', reps: '10-12', notes: 'Ćwiczenie na masę tricepsa.' },
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
                <div className="mt-16 p-8 bg-white rounded-xl shadow-lg border-l-4 border-indigo-600">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ważne Wskazówki do Planu FBW</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>**Częstotliwość:** Trenuj 3 razy w tygodniu (np. Poniedziałek, Środa, Piątek). Dni wolne są kluczowe.</li>
                        <li>**Zasada:** Pomiędzy treningami musi być minimum jeden dzień wolnego na pełną regenerację.</li>
                        <li>**Obciążenie:** Skup się na ciężarze, który pozwala Ci wykonać wszystkie powtórzenia z idealną techniką.</li>
                    </ul>
                </div>

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