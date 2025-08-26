import { useState, useEffect, useRef } from "react";
import "./Demo.css";

export default function Demo() {
  const firstRender = useRef<string>(new Date().toLocaleTimeString());

  const [now, setNow] = useState<string>(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId =setInterval(() => {
      setNow(new Date().toLocaleTimeString());
    }, 1 * 1000)
    return ()=>{
      clearInterval(intervalId)
    }
  }, []);

  return (
    <div className="Demo">
      <p>firstRender at: {firstRender.current}</p>
      <p>time now: {now}</p>
    </div>
  );
}
