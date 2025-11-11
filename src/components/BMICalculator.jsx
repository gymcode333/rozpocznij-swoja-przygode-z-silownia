"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Ruler, HeartPulse } from 'lucide-react'; 
export const MotionDiv = motion.div;
const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);

    const getCategoryStyles = (category) => {
        switch (category) {
            case 'Waga prawidłowa':
                return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-400';
            case 'Nadwaga':
                return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-400';
            case 'Otyłość':
                return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 border-red-400';
            case 'Niedowaga':
                return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-400';
            default:
                return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 border-gray-400';
        }
    };

    const calculateBMI = (e) => {
        e.preventDefault();
        const h = parseFloat(height);
        const w = parseFloat(weight);

        if (h > 0 && w > 0) {
            const bmi = (w / ((h / 100) ** 2)).toFixed(2);
            let category;
            if (bmi < 18.5) { category = 'Niedowaga'; } 
            else if (bmi <= 24.9) { category = 'Waga prawidłowa'; } 
            else if (bmi <= 29.9) { category = 'Nadwaga'; } 
            else { category = 'Otyłość'; }

            setResult({ value: bmi, category: category, message: `Twoje BMI wynosi ${bmi} (${category}).` });
        } else {
            setResult({ message: 'Proszę wprowadzić prawidłowe dane.' });
        }
    };

    return (
        <motion.section 
            className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-800 max-w-sm w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center space-x-3 mb-4 text-primary-600 dark:text-primary-400">
                <HeartPulse className="w-8 h-8" />
                <h3 className="text-2xl font-extrabold font-heading text-gray-900 dark:text-white">Kalkulator BMI</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                Wskaźnik, który pozwala ocenić, czy Twoja waga jest w odpowiednim zakresie względem wzrostu.
            </p>
            
            <form onSubmit={calculateBMI} className="space-y-4">
                
                <div>
                    <label htmlFor="height" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                        <Ruler className="w-4 h-4 mr-2" /> Wzrost (cm):
                    </label>
                    <input 
                        type="number" 
                        id="height" 
                        name="height" 
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                        placeholder="Np. 180"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                <div>
                    <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                        <Scale className="w-4 h-4 mr-2" /> Waga (kg):
                    </label>
                    <input 
                        type="number" 
                        id="weight" 
                        name="weight" 
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                        placeholder="Np. 75"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full mt-4 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-md transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700"
                >
                    Oblicz BMI
                </button>
            </form>
            
            <AnimatePresence>
                {result && (
                    <motion.div 
                        key="bmi-result"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className={`mt-6 p-4 rounded-xl border-l-4 font-bold text-center ${getCategoryStyles(result.category)}`}
                    >
                        {result.message}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default BMICalculator;