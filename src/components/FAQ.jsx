"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare, Zap } from 'lucide-react'; 
export const MotionDiv = motion.div;
// Dane FAQ (zostały bez zmian)
const faqData = [
    { question: "Ile razy w tygodniu powinienem ćwiczyć?", answer: "Dla początkujących 2-3 treningi siłowe w tygodniu to idealna częstotliwość. Pozwala to na optymalną regenerację i ciągły progres. Pamiętaj, że mięśnie rosną podczas odpoczynku." },
    { question: "Czy trening siłowy jest bezpieczny dla kobiet?", answer: "Tak, trening siłowy jest bezpieczny i bardzo korzystny dla kobiet. Pomaga w budowaniu masy mięśniowej, poprawia gęstość kości, przyspiesza metabolizm i kształtuje sylwetkę." },
    { question: "Czy mogę ćwiczyć na czczo?", answer: "Można, ale ja nie jest to zalecam dla początkujących. Węglowodany są głównym źródłem energii. Brak ich dostarczenia przed treningiem może skutkować mniejszą wydajnością i szybszym zmęczeniem. Warto zjeść lekki posiłek 1-2 godziny przed treningiem." },
    { question: "Ile powinienem czekać między seriami?", answer: "Optymalny czas odpoczynku zależy od Twojego celu. Dla budowania masy mięśniowej (hipertrofii) zaleca się odpoczynek od 60 do 90 sekund. Jeśli trenujesz siłowo, aby zwiększyć siłę, przerwy mogą być dłuższe – od 2 do 5 minut. Pamiętaj, że najważniejsze jest, abyś był wystarczająco wypoczęty, żeby wykonać kolejną serię z odpowiednią techniką." },
    { question: "Co to jest progresywne przeładowanie?", answer: "Progresywne przeładowanie to kluczowa zasada w treningu siłowym, która polega na stopniowym zwiększaniu wymagań stawianych mięśniom. Może to być zwiększenie ciężaru, liczby powtórzeń, liczby serii, skrócenie przerw między seriami, czy też wydłużenie czasu pod napięciem. To właśnie dzięki tej zasadzie Twoje mięśnie nieustannie adaptują się do nowych obciążeń i rosną." }
];


const FAQItem = ({ question, answer, isActive, onToggle }) => {
    return (
        <motion.div 
            className="mb-4 bg-white dark:bg-dark-card rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-shadow duration-300"
            animate={isActive ? { boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)' } : { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
        >
            <button 
                className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg transition-colors duration-300 rounded-xl ${
                    isActive 
                        ? 'bg-gray-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400' 
                        : 'text-gray-800 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={onToggle}
                aria-expanded={isActive}
            >
                {question}
                <motion.span
                    initial={false}
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5 ml-4" />
                </motion.span>
            </button>
            
            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <p className="p-5 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}


const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq">
            <h2 className="text-3xl font-extrabold font-heading text-gray-900 dark:text-white mb-6 flex items-center">
                Najczęściej zadawane pytania <MessageSquare className="w-6 h-6 ml-3 text-primary-500" />
            </h2>
            
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <FAQItem 
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isActive={activeIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQ;