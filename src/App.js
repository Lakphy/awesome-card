import "./App.scss";
import { useEffect, useRef, useState } from "react";

function App() {
  const [clientPos, setClientPos] = useState([0, 0]);
  const [showText, setShowText] = useState(true);
  const timeRef = useRef(null);
  const clearMove = () => {
    setClientPos([0, 0]);
  };
  const movefn = (e) => {
    if (timeRef.current !== null) clearTimeout(timeRef.current);
    timeRef.current = setTimeout(clearMove, 3000);
    setClientPos([
      (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
      (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2),
    ]);
  };
  useEffect(() => {}, []);
  return (
    <div className="App" onMouseMove={movefn} onMouseLeave={clearMove}>
      <div
        className="a4"
        style={{
          transform: `perspective(800px) rotateY(${
            clientPos[0] * 30
          }deg) rotateX(${-clientPos[1] * 30}deg)`,
        }}
      >
        <img
          alt=""
          src="./point.png"
          style={{ transform: "translateX(-48px)" }}
        />
        <p
          className="kfc"
          onClick={() => {
            setShowText((prev) => !prev);
          }}
          style={{ opacity: showText ? "1" : "0" }}
        >
          KFC CRAZY THURSDAY V ME 50
        </p>
        <img
          alt=""
          src="./point.png"
          style={{ transform: "translateX(48px) rotateY(180deg)" }}
        />
      </div>
    </div>
  );
}

export default App;
