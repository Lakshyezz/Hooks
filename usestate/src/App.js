
import React, { useState } from "react";

// useState always work under function
// useState cant be called in class, loop, condition or watever
// its a toplevel function and has to be called separately

// useState returns "array" of values so,
// const arr = useState();    // lets say here we have count that increase or decrease,

// const(state,functionThatChangesState) = useState(defaultState);


function App() {

  function decreamentCount(){
    setCount(prevCount => prevCount-1);      // everytime this function calls it re-renders the component
  }
  function increamentCount(){
    setCount(prevCount => prevCount+1);
  }
 
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')

  return (
    <>
      <button onClick={decreamentCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick = {increamentCount}> +</button>
    </>
  );
}

export default App;
