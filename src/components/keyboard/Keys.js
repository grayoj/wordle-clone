import React, { useContext } from "react";
import { AppContext } from "../../App";

//Register keyValue and largeKey
function Keys({ keyValue, largeKey }) {
  // Register Values for board on click function
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(AppContext);
  const selectLetters = () => {
    //Implement condition for largeKey (Enter) when clicked
    if (keyValue === "ENTER") {
      if (currentAttempt.letterPosition !== 5) return;
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else if (keyValue === "DELETE") {
      if (currentAttempt.letterPosition === 0) return;
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
      setBoard(newBoard);
      setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1})
    } else {
      if (currentAttempt.letterPosition > 4) return;
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] =
        keyValue;
      setBoard(newBoard);
      //Increment on attempts
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: (currentAttempt.letterPosition = +1),
      });
    }
  };
  return (
    <div className="keys" id={largeKey && "big"} onClick={selectLetters}>
      {keyValue}
    </div>
  );
}

export default Keys;
