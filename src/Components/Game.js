import React from 'react';
import './Game.css'; 

function Game({ guess, setGuess, handleGuess, feedback, restartGame }) {
  return (
    <div className="game-container">
      <h2 className="game-subtitle">Guess The Number</h2>
      <input 
        type="number" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)} 
        placeholder="Enter your guess" 
        className="guess-input"
      />
      <div className="button-group">
        <button 
          onClick={handleGuess} 
          className="guess-button">
          Check
        </button>
        <button 
          onClick={restartGame} 
          className="restart-button">
          Restart
        </button>
      </div>
      <p className="feedback">{feedback}</p>
    </div>
  );
}

export default Game;
