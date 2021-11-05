import React, { useEffect } from "react";
import Calculator from "./Calculator";
import './App.css';

function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
