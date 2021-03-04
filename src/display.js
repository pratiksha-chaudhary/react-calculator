import React from "react";

function Display({ previousOperand, currentOperand, operation }) {
  return (
    <div className="output">
      <div className="previous-operand">{previousOperand}</div>
      <div className="current-operand">
        {operation} {currentOperand}
      </div>
    </div>
  );
}

export default Display;
