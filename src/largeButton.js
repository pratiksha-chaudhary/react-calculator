import React from "react";

function LargeButton({ text, onClick }) {
  return (
    <button className="span-two" onClick={onClick}>
      {text}
    </button>
  );
}

export default LargeButton;
