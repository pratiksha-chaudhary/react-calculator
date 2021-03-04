import React, { useState } from "react";
import "./App.css";
import LargeButton from "./largeButton";
import RegularButton from "./regularButton";
import Display from "./display";

function App() {
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operation, setOperation] = useState("");
  const updateOperands = (event) => {
    console.log("update operands");
    const operandPressed = event.target.innerText;
    if (operandPressed === "." && currentOperand.includes(".")) {
      return;
    }
    setCurrentOperand(currentOperand + operandPressed);
  };

  const compute = () => {
    console.log("compute");
    setPreviousOperand("");
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }
    setCurrentOperand(result.toString());
    setOperation("");
  };
  const updateOperation = (event) => {
    setOperation(event.target.innerText);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };
  const clear = () => {
    setPreviousOperand("");
    setCurrentOperand("");
    setOperation(null);
  };

  const performDelete = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  return (
    <div className="calculator-grid">
      <Display
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        operation={operation}
      />
      <LargeButton onClick={clear} text="AC" />
      <RegularButton onClick={performDelete} text="DEL" />
      <RegularButton onClick={updateOperation} text="/" />
      <RegularButton onClick={updateOperands} text="1" />
      <RegularButton onClick={updateOperands} text="2" />
      <RegularButton onClick={updateOperands} text="3" />
      <RegularButton onClick={updateOperation} text="*" />
      <RegularButton onClick={updateOperands} text="4" />
      <RegularButton onClick={updateOperands} text="5" />
      <RegularButton onClick={updateOperands} text="6" />
      <RegularButton onClick={updateOperation} text="+" />
      <RegularButton onClick={updateOperands} text="7" />
      <RegularButton onClick={updateOperands} text="8" />
      <RegularButton onClick={updateOperands} text="9" />
      <RegularButton onClick={updateOperation} text="-" />
      <RegularButton onClick={updateOperands} text="." />
      <RegularButton onClick={updateOperands} text="0" />
      <LargeButton onClick={compute} text="=" />
    </div>
  );
}

export default App;
