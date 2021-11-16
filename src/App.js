import { useState } from 'react';
import './App.css';

const DEFAULT_TIME = 0;

function App() {
  const [time] = useState(DEFAULT_TIME);
  return (
    <div className="app flex-center">
      <div className="timer-container flex-center">
        <div className="time">{time}</div>
        <div className="actions">
          <button className="action-btn start-btn">START</button>
          <button className="action-btn reset-btn">RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
