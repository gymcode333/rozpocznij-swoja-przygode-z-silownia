"use client";
import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { Target, Stethoscope, Dumbbell, CalendarCheck, TrendingUp, Bed, BookOpen, Lightbulb, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

import BMICalculator from './BMICalculator';
import TDEECalculator from './TDEECalculator';
import FAQ from './FAQ';
export const MotionDiv = motion.div;
// Warianty animacji dla elementów (kart)
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ 
        opacity: 1, 
        y: 0, 
        transition: { delay: i * 0.1, duration: 0.5 } 
    }),
};

// ----------------------------------------------------------------------
// KOMPONENTY WEWNĘTRZNE
// ----------------------------------------------------------------------

// Poprawiona definicja StepCard, używająca 'icon' i zmieniająca nazwę na IconComponent
const StepCard = ({ icon, title, text, index }) => {
    // Przypisanie do dużej litery, aby React poprawnie renderował ikonę
    const IconComponent = icon; 
    
    return (
        <motion.section 
            className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-soft transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
            variants={itemVariants}
            custom={index}
            role="article"
        >
            <div className="flex items-center space-x-3 mb-4">
                <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text m-0">{title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{text}</p>
        </motion.section>
    );
};

const BlogArticleCard = ({ title, date, shortText, link = "/blog" }) => (
    <motion.article 
        className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-soft transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col justify-between"
        variants={itemVariants}
        custom={Math.random()}
    >
        <div>
            <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{date}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{shortText}</p>
        </div>
        <Link to={link} className="text-primary-600 dark:text-primary-400 font-semibold hover:underline flex items-center mt-3">
            Czytaj dalej <Lightbulb className="w-4 h-4 ml-2" />
        </Link>
    </motion.article>
);


// ----------------------------------------------------------------------
// GŁÓWNY KOMPONENT MainContent
// ----------------------------------------------------------------------

const MainContent = () => {
    
    const stepData = [
        { icon: Target, title: "Cel i priorytety", text: "Na początku zastanów się, czy dążysz do redukcji tkanki tłuszczowej, budowy masy mięśniowej, czy poprawy ogólnej sprawności. Gdy ustalisz cel, twoje treningi prawdopodobnie staną się bardziej efektywne i co najważniejsze, polubisz to." },
        { icon: Stethoscope, title: "Konsultacje z ekspertem", text: "Jeśli masz jakieś choroby, kontuzje lub wątpliwości, porozmawiaj z lekarzem lub fizjoterapeutą. Nie leczona kontuzja może prowadzić do wielu negatywnych skutków." },
        { icon: Dumbbell, title: "Opanuj technikę", text: "Zanim zaczniesz dodawać obciążenie, skup się na poprawanej technice każdego ćwiczenia. To fundament bezpiecznego i efektywnego treningu. Korzystaj z filmów instruktażowych, nagrywaj się i analizuj." },
        { icon: CalendarCheck, title: "Plan treningowy", text: "Zacznij od planu ogólnorozwojowego (FBW). Jest to najlepszy wybór dla osób początkujących. Z biegiem czasu próbuj innych planów i wybierz ten, który daje Ci najwięcej satysfakcji." },
        { icon: TrendingUp, title: "Progresja", text: "Kluczem do wzrostu siły i mięśni jest stopniowe zwiększanie wymagań. Prowadź dziennik treningowy, by monitorować postępy w ciężarze, liczbie powtórzeń i serii." },
        { icon: Bed, title: "Regeneracja", text: "Mięśnie rosną i regenerują się podczas odpoczynku. Zbyt mała ilość snu oraz brak dni wolnych mogą prowadzić do przetrenowania i zastoju. Daj mięśniom odpocząć 2-3 dni." }
    ];

    const blogPosts = [
        { title: "Jak zacząć trening siłowy?", date: "26 sierpnia 2025", shortText: "Pierwszy raz na siłowni? Dowiedz się, jak przygotować się do treningu, jakie ćwiczenia wybrać i jak unikać błędów." },
        { title: "Dieta na masę — 5 prostych zasad", date: "19 sierpnia 2025", shortText: "Nadwyżka kaloryczna, białko, kreatyna i regularność. Są to proste zasady, które przyspieszą Twoje postępy." },
        { title: "Mity w świecie fitness — co jest prawdą?", date: "26 sierpnia 2025", shortText: "Obalamy najpopularniejsze mity dotyczące treningu i odżywiania. Dowiedz się, co naprawdę działa." },
        { title: "Cardio vs siłowy — co wybrać?", date: "26 sierpnia 2025", shortText: "Porównujemy efekty treningu cardio i siłowego dla początkujących. Który trening da najlepsze rezultaty?" }
    ];
    
    const errorList = [
        "Brak rozgrzewki: Pomijanie rozgrzewki zwiększa ryzyko kontuzji. Zawsze pamiętaj o dynamicznym rozciąganiu przed treningiem.",
        "Zbyt duże obciążenie: Zaczynanie od zbyt dużych ciężarów kosztem techniki jest jedną z gorszych rzeczy jaką możesz zrobić.",
        "Brak planu treningowego: Prowadzi do chaosu i braku progresji. Dobrze dobrany plan nadaje sens treningowi.",
        "Ignorowanie diety: Nawet najlepszy plan nie zadziała bez odpowiedniego odżywiania.",
        "Niedocenianie regeneracji: Mięśnie rosną w czasie odpoczynku, nie podczas treningu.",
        "Brak cierpliwości: Efekty wymagają czasu i regularności. Nie zniechęcaj się, jeśli progres jest wolniejszy."
    ];


    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            
            {/* SEKCJA KROKÓW: JAK ZACZĄĆ */}
            <section id="start" className="py-6 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-white mb-4 flex items-center">
                    Jak zacząć trening siłowy? <Zap className="w-6 h-6 ml-3 text-primary-500" />
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    32Rozpoczęcie treningu siłowego jest jedną z najlepszych inwestycji w nasze zdrowie i sylwetkę. Kluczem jest świadome podejście do całego procesu.
                </p>
                <motion.section 
                    className="grid w-full min-h-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                >
                    {stepData.map((step, index) => (
                        <StepCard key={index} {...step} index={index} />
                    ))}
                </motion.section>
                <p className="text-gray-600 dark:text-gray-400 mt-8">
                    Pamiętaj, że jeśli chcesz zbudować zdrowe i wysportowane ciało, musisz zachować regularność, jest to ważniejsze niż krótkotrwała, intensywna motywacja.
                </p>
            </section>
        
            {/* SEKCJA BŁĘDÓW */}
            <section id="errors" className="py-6 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-white mb-4 flex items-center">
                    Najczęstsze błędy, jakie popełniają początkujący <AlertTriangle className="w-6 h-6 ml-3 text-secondary" />
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Unikanie poniższych błędów pozwoli Ci osiągnąć cele szybciej i bezpieczniej.
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 list-disc pl-5">
                    {errorList.map((item, index) => (
                        <motion.li 
                            key={index} 
                            className="flex items-start text-base"
                            variants={itemVariants}
                            custom={index * 0.05}
                        >
                            <span className="font-semibold text-red-500 dark:text-red-400 mr-2 flex-shrink-0">
                                <AlertTriangle className="w-4 h-4 mt-1" />
                            </span>
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </section>

            {/* SEKCJA WAGI I PROGRESJI */}
            <section id="weights" className="py-8 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-white mb-4 flex items-center">
                    Dobór obciążenia i progresywne przeładowanie <TrendingUp className="w-6 h-6 ml-3 text-primary-500" />
                </h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 list-disc pl-5">
                    <li><strong>Zakres powtórzeń:</strong> Zalecam pracować na powtórzeniach 6-10 w zależności od wykonywanego ćwiczenia.</li>
                    <li><strong>Zwiększanie ciężaru:</strong> Progresuj stopniowo. Po osiągnięciu górnego zakresu powtórzeń (np. 8), dołóż ciężar i wróć do dolnego zakresu (np. 6).</li>
                    <li><strong>Alternatywne formy progresji:</strong> Zwiększ liczbę serii, skróć czas odpoczynku lub wydłuż fazę ekscentryczną (powolne opuszczanie ciężaru).</li>
                    <li><strong>Dziennik treningowy:</strong> Monitorowanie postępów jest kluczowe. Zapisuj każdy trening, wpisując ciężar oraz liczbę powtórzeń.</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 mt-6">
                    Pamiętaj, że kluczem do sukcesu jest stała, a nie gwałtowna, progresja. Obserwuj swoje ciało i rób zdjęcia postępów.
                </p>
            </section>

            {/* SEKCJA DIETY */}
            <section id="diet" className="py-8 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-white mb-4 flex items-center">
                    Dieta – fundament sukcesu <CheckCircle className="w-6 h-6 ml-3 text-green-500" />
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Bez odpowiedniego odżywiania, nawet najbardziej efektywny trening nie przyniesie oczekiwanych rezultatów.
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 list-disc pl-5">
                    <li><strong>Kaloryczność:</strong> Identyfikacja TDEE jest kluczowa. Do masy dodaj 200–500 kcal, do redukcji odejmij 300–500 kcal.</li>
                    <li><strong>Białko:</strong> Zalecana ilość to 1,6–2,2 g białka na kilogram masy ciała dziennie, aby wspierać wzrost mięśni.</li>
                    <li><strong>Węglowodany:</strong> Główne źródło energii. Wybieraj złożone węglowodany (płatki owsiane, ryż, ziemniaki).</li>
                    <li><strong>Tłuszcze:</strong> Niezbędne dla funkcjonowania hormonów. Powinny stanowić około 20-30% dziennego spożycia kalorii.</li>
                    <li><strong>Nawodnienie:</strong> Pij co najmniej 2–3 litry wody dziennie. Nawodnienie wpływa na wydajność i regenerację.</li>
                </ul>
            </section>

            {/* SEKCJA SUPLEMENTÓW */}
            <section id="supplements" className="py-8 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-white mb-4 flex items-center">
                    Suplementy – co naprawdę pomaga <Lightbulb className="w-6 h-6 ml-3 text-secondary" />
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Suplementy są dodatkiem, ale nigdy nie zastąpią solidnych podstaw: diety i ćwiczeń.
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 list-disc pl-5">
                    <li><strong>Białko serwatkowe (Whey Protein):</strong> Szybko przyswajalne źródło białka, gdy nie jesteś w stanie uzupełnić go z diety.</li>
                    <li><strong>Kreatyna:</strong> Jeden z najlepiej przebadanych suplementów. Zwiększa siłę, wytrzymałość oraz masę mięśniową.</li>
                    <li><strong>Kofeina:</strong> Poprawia koncentrację i wydolność (kawa lub przedtreningówka).</li>
                    <li><strong>Witamina D3 + K2:</strong> Kluczowe dla zdrowia kości i układu odpornościowego.</li>
                    <li><strong>Omega-3:</strong> Kwas tłuszczowy o działaniu przeciwzapalnym, wspiera zdrowie stawów i serca.</li>
                </ul>
                <div className="bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/50 dark:border-red-800 dark:text-red-300 p-4 rounded-lg mt-6 text-sm flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <strong>Uwaga:</strong> Przed rozpoczęciem suplementacji, szczególnie przy problemach zdrowotnych, skonsultuj się z lekarzem lub dietetykiem.
                </div>
            </section>

            {/* SEKCJA PODSUMOWANIA */}
            <section id="podsumowanie" className="py-8 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-white mb-4">Podsumowanie</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    Początek z treningiem siłowym nie musi być trudny. Odpowiednia dieta, plan treningowy oraz wytrwałość przyniosą Ci upragnione efekty.
                </p>
                <ul className="space-y-3 font-semibold text-gray-800 dark:text-gray-200">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-green-500" /> <strong>Plan treningowy:</strong> Przestań improwizować - trzymaj się planu.</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-green-500" /> <strong>Dieta:</strong> Jedzenie decyduje o 70% twoich wyników.</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-green-500" /> <strong>Regeneracja:</strong> Sen i odpoczynek to czas, w którym Twoje mięśnie rosną - nie olewaj tej części.</li>
                </ul>
            </section>

            {/* SEKCJA KALKULATORÓW */}
            <section id="calculators" className="py-8 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-white mb-8 flex items-center">
                    Kalkulatory <CalendarCheck className="w-6 h-6 ml-3 text-primary-500" />
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Aby ułatwić Ci śledzenie postępów, przygotowałem dla Ciebie dwa proste kalkulatory, z których sam korzystam.
                </p>
                
                {/* Nowoczesny układ 2-kolumnowy dla kalkulatorów */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <BMICalculator />
                    <TDEECalculator />
                </div>
            </section>

            {/* SEKCJA BLOGA */}
            <section id="blog" className="py-8 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-white mb-8 flex items-center">
                    Mój blog <BookOpen className="w-6 h-6 ml-3 text-primary-500" />
                </h2>
                <motion.section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                    {blogPosts.map((post, index) => (
                        <BlogArticleCard key={index} {...post} />
                    ))}
                </motion.section>
            </section>
            
            {/* SEKCJA FAQ (NAJCZĘSTSZE PYTANIA) */}
            <section id="faq" className="py-8">
                <FAQ />
            </section>
        </motion.div>
    );
};

export default MainContent;