import { useEffect, useState } from 'react'
import './App.css'
import Title from './components/Title';
import Guess_color from './components/Guess_color';
import Answers from './components/Answers';

const getRandomColor = () => {
  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;
  let channels = [red, green, blue].map(item => Math.round(item).toString(16).toUpperCase());

  return `#${channels.join('')}`;
}

function App() {
  const [color, setColor] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    generateColors()
  }, []);

  const generateColors = () => {
    const actualColor = getRandomColor()
    setColor(actualColor);
    setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()));
  }

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setResult(true)
      generateColors()
      setTimeout(() => { setResult(undefined) }, 500);
    } else {
      setResult(false)
      setTimeout(() => { setResult(undefined) }, 500);

    }
  };


  return (
    <div className='App'>
      <Title />

      {result === true && <div className='correct'>Correct</div>}
      {result === false && <div className='wrong'>Wrong Answer</div>}

      <Guess_color color={color} />
      <Answers answers={answers} handleAnswerClicked={handleAnswerClicked} />

    </div >
  )
}

export default App
