import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Pavel() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Hello from component</p>
      <p>Hello from component</p>
    </div>
  );
}

export default Pavel;
