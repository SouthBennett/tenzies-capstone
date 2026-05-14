/* eslint-disable react-hooks/purity */
import Die from './components/Die'

export default function App() {  

  function generateAllNewDice (){
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.ceil(Math.random() * 6))
    }
    return (
      randomNumbers
    )
  }
  console.log(generateAllNewDice())

  return (
    <main>
      <div className="dice-container">
        <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        <Die value={5}/>
        <Die value={6}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
      </div>
    </main>
    
  )
}