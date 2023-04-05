import { Counter } from "./bases/Counter"
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { Counterhook } from "./bases/CounterHook";
import { CounterReducer } from "./bases/CounterReducer";

type CounterProps = {
  initialValue: number;
  prevValue: number;
}

function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <hr />
      {/* <Counter
        initialValue={15}
        prevValue={0}
      /> */}
      {/* <CounterBy/> */}
      {/* <CounterEffect/> */}
      {/* <Counterhook/> */}
      <CounterReducer
      />
    </div>
  )
}

export default App
