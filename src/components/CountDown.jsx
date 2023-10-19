import React, { useState, useEffect } from 'react';
import '../styles/Countdown.css'

const CountdownTimer = () => {
  
  // Define the targetDate in the state
  const [targetDate, setTargetDate] = useState(new Date(new Date().getTime() + 210 * 24 * 60 * 60 * 1000));

  // Define the countdown in the state
  const [countdown, setCountdown] = useState(0);

  // Calculate the time remaining
  const getTimeRemaining = () => {
    const now = new Date();
    const timeRemaining = targetDate - now;
    return timeRemaining;
  };

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Convert the countdown to days, hours, minutes, and seconds
  const formatCountdown = (countdown) => {
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);


    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  // Render the countdown timer
  return (
    <div className='countDown-div'>
      <h1>Countdown Timer to the Next Event</h1>
      <div className="countdown">
        <div className="day count">
          <span>{formatCountdown(countdown).days}</span>
          <p>Days</p>
        </div>
        <div className="hour count">
          <span>{formatCountdown(countdown).hours}</span>
          <p>Hours</p>
        </div>
        <div className="minute count">
          <span>{formatCountdown(countdown).minutes}</span>
          <p>Minutes</p>
        </div>
        <div className="second count">
          <span>{formatCountdown(countdown).seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
