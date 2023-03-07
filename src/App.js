import React, {useState, useReducer} from "react";
import "./style.css";

function CounterReducer(oldCount, action) {
  let newCount = oldCount;

  switch(action.type) {
    case "UP":
      newCount += 1;
      break;
    case "DOWN":
      newCount -=1;
      break;
  }

  return newCount;
}

export default function App() {
  const [count, countDispatch] = useReducer(CounterReducer, 0);

  const down = (e) => {
    countDispatch({type:"DOWN"});
  }

  const up = (e) => {
    countDispatch({type:"UP"});
  }
  
  return (
    <div>
      <input type="button" value="-" onClick={down} />
      <input type="button" value={count}  />
      <input type="button" value="+" onClick={up} />
    </div>
  );
}