import React from "react";
import Popup from "./Popup";
import { useState, useEffect } from "react";

// const App = () =>
function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <main>
        <h1>Popup will appear in a sec....</h1>
      </main>

      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h2>Timed Triggered Popup</h2>
        <p> Designed for Augersoft</p>
      </Popup>
    </div>
  );
}

export default App;
