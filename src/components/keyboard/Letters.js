import React, { useContext } from 'react';
import { AppContext } from '../../App';

function Letters({ letterPosition, attemptValue }) {
  const { board, correctWords, currentAttempt } = useContext(AppContext);
  const letters = board[attemptValue][letterPosition];
  
  const correct = correctWords[letterPosition] === letters
  const nearly = !correct && letters !== "" && correctWords.includes(letters)
  
  const lettersState = currentAttempt.attempt > attemptValue && (correct ? "correct" : nearly ? "nearly" : "wrong");
  return (
  <div className='letters' id={lettersState}>
    {""}
    {letters}
  </div>
  );
}

export default Letters;
