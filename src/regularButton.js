import React from "react";

function RegularButton({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default RegularButton;
