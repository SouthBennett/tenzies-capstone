/* eslint-disable react-hooks/purity */
import Die from './components/Die'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App() {  

  function generateAllNewDice(){
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6)

      randomNumbers.push({
        value: randomNumber,
        isHeld: true,
        id: nanoid()
      })
    }
    return (
      randomNumbers
    )
  }
  console.log(generateAllNewDice())

  const [dice, setDice] = useState(generateAllNewDice)

  const diceElements = dice.map((dieObj) => {
    return (
      <Die 
        key={dieObj.id} 
        value={dieObj.value} 
        isHeld={dieObj.isHeld}
      />
    )
  })

  function rollDice() {
    setDice(generateAllNewDice())
  }

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
    
  )
}