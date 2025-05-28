"use client";

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function getTimeLeft(target: Date): TimeLeft {
    const total = target.getTime() - new Date().getTime();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      total,
    };
  }

  if (timeLeft.total <= 0) {
    return <div className="text-3xl font-bold text-green-400">Summit probíhá!</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6 text-center">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4">
        <span className="block text-3xl md:text-5xl font-bold">{timeLeft.days}</span>
        <span className="text-sm md:text-base font-medium text-gray-300">dní</span>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4">
        <span className="block text-3xl md:text-5xl font-bold">{timeLeft.hours}</span>
        <span className="text-sm md:text-base font-medium text-gray-300">hodin</span>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4">
        <span className="block text-3xl md:text-5xl font-bold">{timeLeft.minutes}</span>
        <span className="text-sm md:text-base font-medium text-gray-300">minut</span>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4">
        <span className="block text-3xl md:text-5xl font-bold">{timeLeft.seconds}</span>
        <span className="text-sm md:text-base font-medium text-gray-300">sekund</span>
      </div>
    </div>
  );
}
