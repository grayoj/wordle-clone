import React, { useContext } from "react";
import { AppContext } from "../../App";

//Register keyValue and largeKey
function Keys({ keyValue, largeKey }) {
  // Register Values for board on click function
  const {
    onDelete,
    onSelectLetters,
    onEnter,
  } = useContext(AppContext);
  const selectLetters = () => {
    //Implement condition for largeKey (Enter) when clicked
    if (keyValue === "ENTER") {
       onEnter() 
    } else if (keyValue === "DELETE") {
        onDelete()
    } else {
        onSelectLetters(keyValue)
    }
  };
  return (
    <div className="keys" id={largeKey && "big"} onClick={selectLetters}>
      {keyValue}
    </div>
  );
}

export default Keys;
