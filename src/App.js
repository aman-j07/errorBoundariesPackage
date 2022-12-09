import "./App.css";
import { ErrorFallback } from "./components/ErrorFallback";
import { useState } from "react";
import { ErrorBoundary} from "react-error-boundary";
import RandomNumberGenerator from "./components/RandomNumberGenerator";

function App() {
  const [random, setRandom] = useState(6);
  const [error, setError] = useState(false);

  const generate = () => {
    setRandom(Math.floor(Math.random() * 20));
  };
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[error]} onReset={() => {   setError(false); generate() }}>
        <RandomNumberGenerator random={random} generate={generate} setError={setError}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
