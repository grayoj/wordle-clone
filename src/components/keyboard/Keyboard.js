import React from 'react'
// Import Key module
import Keys from './Keys'

function Keyboard() {
// Create a constant assigned to each string to store Keyboard characters.
const keysOne = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];;
const keysTwo = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'k', 'L'];
const KeysThree = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  return (
    // Keyboard rows and keys
    <div className="keyboard">
      <div className="row1">
        {keysOne.map((key) =>{
          return <Keys keyValue={key} />
        })}
      </div>
      <div className="row2">
      {keysTwo.map((key) =>{
          return <Keys keyValue={key} />
        })}
      </div>
      <div className="row3">
        <Keys keyValue={"ENTER"} largeKey />
      {KeysThree.map((key) =>{
          return <Keys keyValue={key} />
        })}
        <Keys keyValue={"DELETE"} largeKey />
      </div>
    </div>
  )
}

export default Keyboard;