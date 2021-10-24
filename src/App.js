import './App.css';
import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessedWords/GuessedWords';
import Input from './Input/Input';

function App() {
  // TODO: get props from state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;