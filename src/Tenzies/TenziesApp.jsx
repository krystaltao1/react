import { useState } from 'react';
import Confetti from 'react-confetti';
import Die from './Die';

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  const gameWon =
    dice.every((die) => die.isHeld) && dice.every((die) => die.value === dice[0].value);

  function generateAllNewDice() {
    return new Array(10).fill(0).map((_, index) => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: index,
    }));
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((item) => (item.id === id ? { ...item, isHeld: !item.isHeld } : item))
    );
  }

  const diceElement = dice.map((dieObject) => (
    <Die
      key={dieObject.id}
      value={dieObject.value}
      isHeld={dieObject.isHeld}
      hold={() => hold(dieObject.id)}
    />
  ));

  function rollDice() {
    setDice(generateAllNewDice());
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <h1>Tenzies</h1>
      <div className="dice-container">{diceElement}</div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}
