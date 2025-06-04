import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(10); // Set countdown start time in seconds
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setEnded(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-container">
      {!ended ? (
        <h1 className="timer">{timeLeft}s</h1>
      ) : (
        <h1 className="end-message">Thank You</h1>
      )}
    </div>
  );
}

export default CountdownTimer;