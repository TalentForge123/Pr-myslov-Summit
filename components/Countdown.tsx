// app/components/Countdown.tsx
"use client"; // Důležité pro klientskou interaktivitu v Next.js App Routeru

import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function getTimeLeft(target: Date) {
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
    return <div className="text-3xl font-bold text-green-400">Summit probíhá/proběhl!</div>;
  }

  return (
    <div className="flex justify-center space-x-4 md:space-x-6 text-center text-4xl md:text-5xl font-extrabold">
      <div className="p-3 bg-white bg-opacity-20 rounded-lg">
        <span className="block">{timeLeft.days}</span>
        <span className="text-sm md:text-base font-normal text-gray-300">dní</span>
      </div>
      <div className="p-3 bg-white bg-opacity-20 rounded-lg">
        <span className="block">{timeLeft.hours}</span>
        <span className="text-sm md:text-base font-normal text-gray-300">hodin</span>
      </div>
      <div className="p-3 bg-white bg-opacity-20 rounded-lg">
        <span className="block">{timeLeft.minutes}</span>
        <span className="text-sm md:text-base font-normal text-gray-300">minut</span>
      </div>
      <div className="p-3 bg-white bg-opacity-20 rounded-lg">
        <span className="block">{timeLeft.seconds}</span>
        <span className="text-sm md:text-base font-normal text-gray-300">sekund</span>
      </div>
    </div>
  );
}
