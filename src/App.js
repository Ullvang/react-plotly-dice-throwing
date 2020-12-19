import React, { useState } from "react";
import PlotComponent from "./components/PlotComponent";
import "./App.css";

function App() {
  const [dice, setDice] = useState([]);
  const [throws, setThrows] = useState(5000);
  const [numberOfDice, setNumberOfDice] = useState(5);
  const [numberOfDiceAsProp, setNumberOfDiceAsProp] = useState(0);

  const rollDice = () => {
    let result = [];
    for (let i = 0; i < throws; i++) {
      let throwResult = [];
      for (let j = 0; j < numberOfDice; j++) {
        throwResult.push(Math.floor(Math.random() * 6) + 1);
      }
      result.push(throwResult);
    }
    setDice(result);
    setNumberOfDiceAsProp(numberOfDice);
  };

  return (
    <div className="app">
      <button onClick={rollDice}>Roll dice</button>
      <br />
      <h3>How many throws?</h3>
      <p>{throws}</p>
      <input
        style={{ marginTop: "20px" }}
        type="range"
        name="numberOfDices"
        min="1"
        max="10000"
        value={throws}
        onChange={(e) => setThrows(e.target.value)}
      />
      <h3>How many dice in each throw?</h3>
      <p>{numberOfDice}</p>
      <input
        style={{ marginTop: "20px" }}
        type="range"
        name="numberOfDices"
        min="1"
        max="10"
        value={numberOfDice}
        onChange={(e) => setNumberOfDice(e.target.value)}
      />
      {dice.length > 0 ? (
        <PlotComponent dice={dice} numberOfDice={numberOfDiceAsProp} />
      ) : null}
    </div>
  );
}

export default App;
