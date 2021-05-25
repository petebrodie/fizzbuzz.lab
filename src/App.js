import {useState, useEffect} from 'react'
import './App.css';

function App() {

const [inputNumber, setInputNumber] = useState(1);
const [answer, setAnswer] = useState("");
const [multiNumber, setMultiNumber] = useState(10);

const handleIncrease = () => {
  setInputNumber(inputNumber + 1);
}
const handleMulti = () => {
  let randomNumber = Math.floor(Math.random())
  setMultiNumber(randomNumber * 10)





useEffect(() => {
  
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(inputNumber);
    }
  }, [inputNumber])


  return (
    <div className="App">
      <h1>FIZZBUZZ</h1>
      <button value={inputNumber} onClick={handleIncrease}> + </button>
      <button value={multiNumber} onClick={handleMulti}> x </button>
      
      <h2>Answer is {answer}</h2>
      <h2>Multi number is {multiNumber}</h2>
    </div>
  );
}

export default App;
