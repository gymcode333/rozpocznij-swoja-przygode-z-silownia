import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Importy istniejących komponentów:
import App from "./App.jsx";
import PlansPage from './pages/PlansPage.jsx';
import BlogPage from "./pages/BlogPage.jsx";

// !!! NOWY IMPORT: Komponent strony szczegółów planu !!!
import Plany from '../src/pages/Plany/FBW-3-dniowy.jsx';


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
                <Route path="/plany/fbw-3-dniowy" element={<Fbw3DniowyPage />} />

                {/* Ścieżka /blog */}
                <Route path="/blog" element={<BlogPage />} />

                {/* Możesz dodać trasę 404 jako ostatnią, aby obsłużyć nieznane adresy */}
                {/* <Route path="*" element={<div>404 Not Found</div>} /> */}

            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
