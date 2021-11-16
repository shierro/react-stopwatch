import { useState, useEffect } from 'react';
import './App.css';

const DEFAULT_TIME = 0;

function App() {
  const [seconds, setSeconds] = useState(DEFAULT_TIME);
  const [status, setStatus] = useState('INACTIVE');

  useEffect(() => {
    const interval = setInterval(() => {
      if (status === 'ACTIVE') {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="app flex-center">
      <div className="timer-container flex-center">
        <div className="time" data-testid="time">{seconds}</div>
        <div className="actions">
          {status === 'INACTIVE' && (
            <button 
              className="action-btn start-btn"
              onClick={() => setStatus('ACTIVE')}
            >
              START
            </button>
          )}
          {status === 'ACTIVE' && (
            <button 
              className="action-btn stop-btn"
              onClick={() => setStatus('INACTIVE')}
            >
              STOP
            </button>
          )}
          <button className="action-btn reset-btn">RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
