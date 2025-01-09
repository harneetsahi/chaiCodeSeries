import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addCount = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeCount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addCount}>Add count</button>

      <button onClick={removeCount}>Remove count</button>
    </>
  );
}

export default App;
