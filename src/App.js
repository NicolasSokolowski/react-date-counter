import { useState } from "react";


function App() {
  return (
    <div className="counter">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date().toDateString();

  function handlePreviousStep() {
    setStep((s) => s - 1);
  }

  function handleNextStep() {
    setStep((s) => s + 1);
  }

  function handleCountLess() {
    setCount((c) => c - step)
  }

  function handleCountMore() {
    setCount((c) => c + step)
  }

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function withdrawDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      {/*       <div>
        <button onClick={handlePreviousStep}>-</button>
        <span className="text">Step: {step}</span>
        <button onClick={handleNextStep}>+</button>
      </div> */}
      <div>
        <input type="range" min="1" max="10" value={step} onChange={(e) => setStep(+e.target.value)} />
        <span>{step}</span>
      </div>
      <div className="counter">
        <button onClick={handleCountLess}>-</button>
        {/* <span className="text">Count: {count}</span> */}
        <input type="text" value={count} onChange={(e) => setCount(+e.target.value)} />
        <button onClick={handleCountMore}>+</button>
      </div>
      <div>
        {count === 0 ? `Today is ${date}` :
          count === 1 ? `${count} day from now is ${addDays(date, count).toDateString()}` :
            count > 1 ? `${count} days from now is ${addDays(date, count).toDateString()}` :
              count === -1 ? `${Math.abs(count)} day ago was ${withdrawDays(date, Math.abs(count)).toDateString()}` :
                count < -1 ? `${Math.abs(count)} days ago was ${withdrawDays(date, Math.abs(count)).toDateString()}` : ""}
      </div>
      {(count !== 0 || step !== 1) && (
        <div className="reset">
          <button onClick={handleReset}>RESET</button>
        </div>)}
    </>
  )
}

export default App;
