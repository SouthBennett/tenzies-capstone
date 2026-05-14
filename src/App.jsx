/* eslint-disable react-hooks/purity */
import Die from './components/Die'
import { useState } from 'react'

export default function App() {  

  function generateAllNewDice(){
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.ceil(Math.random() * 6))
    }
    return (
      randomNumbers
    )
  }
  console.log(generateAllNewDice())

  const [dice, setDice] = useState(generateAllNewDice)

  const diceElements = dice.map((number, index) => {
    return (
      <Die key={index} value={number} />
    )
  })

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
    
  )
}