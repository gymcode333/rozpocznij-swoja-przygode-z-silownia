// src/hooks/useScrollSpy.js
import { useState, useEffect } from 'react';

const defaultOffset = 100;

const useScrollSpy = (sectionIds) => {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            let currentActiveId = null;

            sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const top = element.offsetTop - defaultOffset;
                    const bottom = top + element.offsetHeight;
                    
                    if (currentScrollPos >= top && currentScrollPos < bottom) {
                        currentActiveId = id;
                    }
                }
            });

            setActiveId(currentActiveId);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeId;
};

export default useScrollSpy;