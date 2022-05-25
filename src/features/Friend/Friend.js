import React, { useState } from "react";
import "../Friend/Frien.css";

export const Friend = (props) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prevCounter) => prevCounter + 1);
  const decrement = () => setCounter((prevCounter) => prevCounter - 1);

  const [color, setColor] = useState("Tomato");
  const divStyle = { backgroundColor: color };
  return (
    <div style={divStyle}>
      <div>
        <p>The selected color is: {color}</p>
        <button onClick={() => setColor("aquamarine")}>Aquamarine</button>
        <button onClick={() => setColor("black")}>Black</button>
      </div>

      <div>
        <p>The counter value is: {counter}</p>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
    </div>
  );
};
// Hooks do not work in classes.
