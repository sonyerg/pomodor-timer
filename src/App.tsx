import { useState } from "react";

import "./App.css";
import { DisplayState } from "./helpers";
import TimeSetter from "./TimeSetter";
import Display from "./Display";
import AlarmSound from "./assets/AlarmSound.mp3";

const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [displayState, setDisplayState] = useState<DisplayState>({
    time: sessionTime,
    timeType: "Session",
    timerRunning: false,
  });

  function reset() {
    setBreakTime(defaultBreakTime);
    setSessionTime(defaultSessionTime);
    setDisplayState({
      time: sessionTime,
      timeType: "Session",
      timerRunning: false,
    });

    const audio = document.getElementById("beep") as HTMLAudioElement;
    audio.pause();
    audio.currentTime = 0;
  }

  return (
    <div id="pomodoro-timer">
      <h1>Pomodoro Timer</h1>
      <div className="setters">
        <div className="container">
          <h3 id="break-label">Break Length</h3>
          <TimeSetter
            type="break"
            time={breakTime}
            max={max}
            min={min}
            interval={interval}
            setTime={setBreakTime}
          />
        </div>
        <div className="container">
          <h3 id="session-label">Session Length</h3>
          <TimeSetter
            type="session"
            time={sessionTime}
            max={max}
            min={min}
            interval={interval}
            setTime={setSessionTime}
          />
        </div>
      </div>
      <Display displayState={displayState} reset={reset} startStop={() => {}} />
      <audio id="beep" src={AlarmSound} />
    </div>
  );
}

export default App;
