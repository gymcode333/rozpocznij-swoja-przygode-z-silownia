import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from "./App.jsx";
import PlansPage from './pages/PlansPage.jsx';
import BlogPage from "./pages/BlogPage.jsx";
import FBW from './pages/FBW.jsx';





// 1. Definiujemy element główny (root)
const rootElement = document.getElementById('root');

// 2. Renderujemy aplikację, umieszczając router i trasy bezpośrednio w funkcji render
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Ścieżka główna / */}
                <Route path="/" element={<App />} />
                
                {/* Ścieżka /plany (Lista planów) */}
                <Route path="/plany" element={<PlansPage />} />

                {/* !!! NOWA TRASA DLA PLANU FBW (Musisz tu użyć pełnej ścieżki) !!! */}
                <Route path="/plany/fbw" element={<FBW />} />

                {/* Ścieżka /blog */}
                <Route path="/blog" element={<BlogPage />} />

                

            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);