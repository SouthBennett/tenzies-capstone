/* eslint-disable react-hooks/purity */
import Die from './components/Die'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {  

  const [dice, setDice] = useState(() => generateAllNewDice())

  const gameWon = dice.every(die => die.isHeld) && 
    dice.every(die => die.value === dice[0].value)

  function generateAllNewDice(){
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6)

      randomNumbers.push({
        value: randomNumber,
        isHeld: false,
        id: nanoid()
      })
    }
    return (
      randomNumbers
    )
  }
  console.log(generateAllNewDice())

  

  function hold(id) {
    setDice(oldDice => oldDice.map(die => {
      if (die.id === id) {
        return {
          id: die.id,
          value: die.value,
          isHeld: !die.isHeld
        }
      }
      return die
    }))
  }

  const diceElements = dice.map((dieObj) => {
    return (
      <Die 
        key={dieObj.id} 
        value={dieObj.value} 
        isHeld={dieObj.isHeld}
        hold={hold}
        id={dieObj.id}
      />
    )
  })

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      if (die.isHeld === true) {
        return {
          ...die
        }
      }
      return {
        ...die, 
        value: Math.ceil(Math.random() * 6)
      }
    }))
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
    
  )
}