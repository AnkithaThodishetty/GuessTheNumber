import React, { useState } from 'react';
import './App.css'; 
import Game from './Components/Game';

function App() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  const handleGuess = () => {
    const numberGuess = parseInt(guess, 10);
    if (numberGuess < targetNumber) {
      setFeedback('Too Low! Try Again!');
    } else if (numberGuess > targetNumber) {
      setFeedback('Too High! Try Again!');
    } else {
      setFeedback('Congratulations! You guessed the right number!');
      setScore(score + 1); 
    }
  };

  const restartGame = () => {
    setGuess('');
    setFeedback('');
    setTargetNumber(Math.floor(Math.random() * 10) + 1); 
  };

  return (
    <div className="app-container">
      <img src="https://www.earthrangers.com/public/content/wildwire/PageHeaders-06.png" alt="" className='img'/>
      <p className="game-description">The secret number is hidden between 1 and 10. Can you unveil it?</p>
      <Game 
        guess={guess} 
        setGuess={setGuess} 
        handleGuess={handleGuess} 
        feedback={feedback}
        restartGame={restartGame}
      />
      <p className="score-display">Your Score: {score}</p>
    </div>
  );
}

export default App;