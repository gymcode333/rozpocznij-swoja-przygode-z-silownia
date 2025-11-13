import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from "./App.jsx";
import PlansPage from './pages/PlansPage.jsx';
import BlogPage from "./pages/BlogPage.jsx";
import FBW from './pages/FBW.jsx';
import SPLIT from './pages/SPLIT.jsx';
import PPL from './pages/PPL.jsx';





// 1. Definiujemy element główny (root)
const rootElement = document.getElementById('root');

// 2. Renderujemy aplikację, umieszczając router i trasy bezpośrednio w funkcji render
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<App />} />
                
                <Route path="/plany" element={<PlansPage />} />

                <Route path="/plany/fbw" element={<FBW />} />
                
                <Route path="/plany/ppl" element={<PPL />} />
                
                <Route path="/plany/split" element={<SPLIT />} />

                <Route path="/blog" element={<BlogPage />} />

                

            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);