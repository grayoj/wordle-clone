import React, {useContext} from "react";
import {AppContext} from "../../App";

//Register keyValue and largeKey
function Keys({ keyValue, largeKey }) {
    const {board, setBoard} = useContext(AppContext);
    const selectLetters = () => {
        const newBoard = [...board]
        newBoard[0][0] = keyValue
        setBoard(newBoard);
    }
  return (
    <div className="keys" id={largeKey && "big"} onClick={selectLetters}>
      {keyValue}
    </div>
  );
}

export default Keys;
