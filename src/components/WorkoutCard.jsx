import React from 'react';

// To jest Komponent Funkcyjny. Przyjmuje dane w obiekcie 'props'
// Używamy destrukturyzacji ({ id, name, series, reps, completed, onToggle })
// aby bezpośrednio używać nazw właściwości.
const WorkoutCard = ({ id, name, series, reps, completed, onToggle }) => {

  // Definicja klasy CSS: jeśli 'completed' jest true, dodajemy klasę 'card-completed'
  const cardClassName = `card ${completed ? 'card-completed' : ''}`;
  
  // Funkcja, która wywoła funkcję przekazaną z App.jsx, podając ID.
  const handleClick = () => {
    onToggle(id); 
  };

  return (
    <div className={cardClassName}>
      <h2>{name}</h2>
      <p>
        **Serie:** {series} | **Powtórzenia:** {reps}
      </p>
      
      {/* Warunkowe renderowanie: Wyświetla 'Wykonane!' lub 'Oczekujące...' */}
      {completed ? (
        <span className="status-badge complete">✅ Wykonane!</span>
      ) : (
        <span className="status-badge pending">Oczekujące...</span>
      )}
      
      <button 
        onClick={handleClick} // PRZYPIĘCIE FUNKCJI DO KLIKNIĘCIA!
        className="toggle-button"
      >
        {completed ? 'Zmień na Oczekujące' : 'Oznacz jako Wykonane'}
      </button>
    </div>
  );
};

export default WorkoutCard;