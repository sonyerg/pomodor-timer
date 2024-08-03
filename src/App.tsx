import { useState } from "react";
import "./App.css";

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timer, setTimer] = useState(sessionTime);

  return (
    <div id="pomodoro-timer">
      <h1>Pomodoro Timer</h1>
      <div className="label-container">
        <div className="container">
          <h3 id="break-label">Break Length</h3>
          <div className="button-container">
            <button id="break-increment">Increase</button>
            <p id="break-length">{breakTime}</p>
            <button id="break-decrement">Decrease</button>
          </div>
        </div>
        <div className="container">
          <h3 id="session-label">Session Length</h3>
          <div className="button-container">
            <button id="session-increment">Increase</button>
            <p id="session-length">{sessionTime}</p>
            <button id="session-decrement">Decrease</button>
          </div>
        </div>
      </div>
      <div id="timer">
        <div className="timer-container">
          <div id="timer-label">Session</div>
          <div id="time-left">{timer}</div>
        </div>
      </div>
      <div className="button-container">
        <button id="start_stop">Start/Stop</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
