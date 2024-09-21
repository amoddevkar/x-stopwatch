
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervalId;
    if (isRunning) {

      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);


  const startAndStop = () => {
    setIsRunning(!isRunning);
  };


  const reset = () => {
    setTime(0);
  };


  const min = Math.floor((time % 360000) / 6000);


  const sec = Math.floor((time % 6000) / 100);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <span>Time: </span>
      <span>{min.toString().padStart(1, "0")}:
        {sec.toString().padStart(2, "0")}</span><br />
      <button onClick={startAndStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
