import { DisplayState, formatTime } from "./helpers";

interface DisplayProps {
  displayState: DisplayState;
  reset: () => void;
  startStop: (displayState: DisplayState) => void;
}

export default function Display({
  displayState,
  reset,
  startStop,
}: DisplayProps) {
  return (
    <div className="display">
      <div className="timer-container">
        <div id="timer-label">{displayState.timeType}</div>
        <div id="time-left">{formatTime(displayState.time)}</div>
      </div>
      <div>
        <button id="start_stop" onClick={() => startStop(displayState)}>
          Start/Stop
        </button>
        <button id="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
