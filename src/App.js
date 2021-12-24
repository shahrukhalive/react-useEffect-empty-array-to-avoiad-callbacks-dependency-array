import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['blue', 'green', 'red', 'orange'];

  /* 
    We are performing a 'side effect' since we are working with an API.
    We are working with the DOM, a browser API outside of React.
    */
  /* with empty array the button doesnt work on click,the backgrounfd color is set once when the components mounts*/
  /*colorIndex,,,useEffect lets us conditionally perform effects with the dependencies array

The dependencies array is the second argument and if any one of the values in the array changes, the effect function runs again here colorIndex is the dependency array */
  useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  }, [colorIndex]);
  /* Whenever state is updated, App re-renders and useEffect runs */

  function handleChangeColor() {
    /* This code may look complex, but all it does is go to the next color in the 'colors' array, and if it is on the last color, goes back to the beginning */
    const nextIndex = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
    setColorIndex(nextIndex);
  }
  return (
    <div>
      <button onClick={handleChangeColor}>Change background color</button>;
    </div>
  );
}
