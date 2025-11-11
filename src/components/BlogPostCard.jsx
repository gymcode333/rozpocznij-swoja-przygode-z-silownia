"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
export const MotionDiv = motion.div;
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ 
        opacity: 1, 
        y: 0, 
        transition: { delay: i * 0.1, duration: 0.5 } 
    }),
};

const BlogPostCard = ({ title, date, category, excerpt, readTime, imageUrl, link, index }) => (
    <motion.article 
        className="bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-xl-dark transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col h-full"
        variants={cardVariants}
        custom={index}
        role="article"
    >
        {/* Media / Obrazek */}
        <Link to={link} className="block overflow-hidden h-44">
            <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
        </Link>
        
        <div className="content p-5 flex flex-col flex-grow">
            {/* Meta */}
            <div className="text-xs text-gray-500 dark:text-gray-500 mb-2 font-medium uppercase tracking-wider">
                {date} • <span className="text-primary-600 dark:text-primary-400">{category}</span>
            </div>

            {/* Tytuł */}
            <Link to={link} className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 mb-2">
                {title}
            </Link>
            
            {/* Excerpt */}
            <p className="excerpt text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                {excerpt}
            </p>

            {/* CTA i Czas czytania */}
            <div className="cta flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                <Link 
                    to={link} 
                    className="flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:underline text-sm transition-colors duration-200"
                >
                    Czytaj dalej <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <div className="text-xs text-gray-500 dark:text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> {readTime}
                </div>
            </div>
        </div>
    </motion.article>
);

export default BlogPostCard;