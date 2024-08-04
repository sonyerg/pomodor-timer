interface TimeSetterProps {
  type: "break" | "session";
  time: number;
  setTime: (time: number) => void;
  min: number;
  max: number;
  interval: number;
}

export default function TimeSetter({
  type,
  time,
  setTime,
  min,
  max,
  interval,
}: TimeSetterProps) {
  return (
    <div className="setter-container">
      <button
        id={`${type}-decrement`}
        onClick={() => (time > min ? setTime(time - interval) : null)}
      >
        –
      </button>
      <p id={`${type}-length`}>{time / interval}</p>
      <button
        id={`${type}-increment`}
        onClick={() => (time < max ? setTime(time + interval) : null)}
      >
        +
      </button>
    </div>
  );
}
