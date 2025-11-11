"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, Scale, User, Calendar, Flame, Zap } from 'lucide-react'; 
export const MotionDiv = motion.div;
const TDEECalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [activity, setActivity] = useState('1.2');
    const [result, setResult] = useState(null);

    const activityLabels = {
        '1.2': 'Bardzo niska', '1.375': 'Niska', '1.55': 'Umiarkowana',
        '1.725': 'Wysoka', '1.9': 'Bardzo wysoka',
    };

    const calculateTDEE = (e) => {
        e.preventDefault();
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const a = parseInt(age);
        const activityLevel = parseFloat(activity);

        if (w > 0 && h > 0 && a > 0) {
            let bmr;
            if (gender === 'male') { bmr = 10 * w + 6.25 * h - 5 * a + 5; } 
            else { bmr = 10 * w + 6.25 * h - 5 * a - 161; }

            const tdee = (bmr * activityLevel).toFixed(0);
            
            setResult({
                tdee: tdee,
                message: `Twoje dzienne zapotrzebowanie kaloryczne (TDEE) wynosi ${tdee} kcal.`,
                activityName: activityLabels[activity],
            });
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
                <Zap className="w-8 h-8" />
                <h3 className="text-2xl font-extrabold font-heading text-gray-900 dark:text-white">Kalkulator TDEE</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                Oblicz, ile kalorii potrzebuje Twój organizm, aby utrzymać wagę, schudnąć lub przytyć.
            </p>
            
            <form onSubmit={calculateTDEE} className="space-y-4">
                
                <div>
                    <label htmlFor="tdee-weight" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                        <Scale className="w-4 h-4 mr-2" /> Waga (kg):
                    </label>
                    <input type="number" id="tdee-weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required placeholder="Np. 80" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                </div>
                
                <div>
                    <label htmlFor="tdee-height" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                        <Ruler className="w-4 h-4 mr-2" /> Wzrost (cm):
                    </label>
                    <input type="number" id="tdee-height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} required placeholder="Np. 185" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                </div>
                
                <div>
                    <label htmlFor="tdee-age" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" /> Wiek:
                    </label>
                    <input type="number" id="tdee-age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required placeholder="Np. 28" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                </div>

                <div>
                    <label htmlFor="tdee-gender" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                        <User className="w-4 h-4 mr-2" /> Płeć:
                    </label>
                    <select id="tdee-gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option value="male">Mężczyzna</option>
                        <option value="female">Kobieta</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="tdee-activity" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                        <Flame className="w-4 h-4 mr-2" /> Poziom aktywności:
                    </label>
                    <select id="tdee-activity" name="activity" value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option value="1.2">Bardzo niska (brak ćwiczeń)</option>
                        <option value="1.375">Niska (1-3 razy w tygodniu)</option>
                        <option value="1.55">Umiarkowana (3-5 razy w tygodniu)</option>
                        <option value="1.725">Wysoka (codziennie)</option>
                        <option value="1.9">Bardzo wysoka (zawodowy sport)</option>
                    </select>
                </div>

                <button type="submit" className="w-full mt-4 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-md transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700">
                    Oblicz TDEE
                </button>
            </form>

            <AnimatePresence>
                {result && (
                    <motion.div 
                        key="tdee-result"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 p-4 rounded-xl border border-primary-400 bg-primary-50 dark:bg-gray-800 text-center"
                    >
                        <p className="text-lg font-bold text-primary-700 dark:text-primary-300">
                            {result.message}
                        </p>
                        {result.tdee && (
                             <div className="mt-4 border-t border-primary-200 dark:border-gray-700 pt-3 text-sm text-gray-700 dark:text-gray-300">
                                <p className="font-semibold mb-1">Cel:</p>
                                <p>• Utrzymanie wagi: <span className="font-bold">{result.tdee} kcal</span></p>
                                <p>• Redukcja (deficyt 500 kcal): <span className="font-bold">{parseInt(result.tdee) - 500} kcal</span></p>
                                <p>• Masa (nadwyżka 300 kcal): <span className="font-bold">{parseInt(result.tdee) + 300} kcal</span></p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default TDEECalculator;