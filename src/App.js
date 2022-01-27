import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementby, decrementby } from "./actions/index";
import { useState } from "react";

function App() {
  const myState = useSelector(state => state.changeTheNumber)
  const dispatch = useDispatch();
  
  const [incBy, setIncBy] = useState(2)

  const inputHandler = (e) => {
    setIncBy(e.target.value)
  }

  return (
    <div>

      <button onClick={() => dispatch(decrementby(incBy))} >decrement By</button>
      <input type="number" value={incBy} onChange={inputHandler} />
      <button onClick={() => dispatch(incrementby(incBy))} >Increment BY</button>

      <br /><br />

      <button onClick={() => dispatch(increment())} >Increment</button>

      <p>{myState}</p>

      <button onClick={() => dispatch(decrement())} >Decrement</button>

      {/* <button onClick={() => dispatch(reset())} >RESET</button> */}

    </div>
  );
}

export default App;
