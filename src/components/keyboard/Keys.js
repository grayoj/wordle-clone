import React, {useContext} from "react";
import {AppContext} from "../../App";

//Register keyValue and largeKey
function Keys({ keyValue, largeKey }) {
    // Register Values for board on click function
    const {board, setBoard, currentAttempt, setCurrentAttempt} = useContext(AppContext);
    const selectLetters = () => {
        const newBoard = [...board]
        newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue
        setBoard(newBoard);
        //Increment on attempts
        setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition = +1});
    }
  return (
    <div className="keys" id={largeKey && "big"} onClick={selectLetters}>
      {keyValue}
    </div>
  );
}

export default Keys;
