
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [time, setTime] = useState({
    sec: 0,
    min: 0,
  });
  const [intervalId, setIntervalId] = useState();

  const updateTimer = () => {
    setTime((prev) => {
      let newTime = { ...prev };

      if (newTime.sec < 59) newTime.sec += 1;
      else {
        newTime.min += 1;
        newTime.sec = 0;
      }

      return newTime;
    });
  };

  const pauseOrResume = () => {
    if (!intervalId) {
      let id = setInterval(updateTimer, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId("");
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId("");
    setTime({
      sec: 0,
      min: 0,
    });
  };
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <span>Time: </span>
      <span>{time.min}:
        {`${time.sec < 10 ? 0 : ""}${time.sec}`}</span><br />
      <button onClick={pauseOrResume}>
        {intervalId ? "Stop" : "Start"}
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
