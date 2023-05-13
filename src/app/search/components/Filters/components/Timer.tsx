"use client";

import { useState, useEffect } from "react";

function getSecondsRemainingInCurrentDay() {
  const currentTime: any = new Date();
  const endOfDay: any = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const secondsRemaining = Math.floor((endOfDay - currentTime) / 1000);
  return secondsRemaining;
}

export default function Timer() {
  const [countdown, setCountdown] = useState(getSecondsRemainingInCurrentDay());
  const secondsInADay = 60 * 60 * 24; // 86400 seconds in a day (24 hours)

  function getCountdownUnit(secs: number) {
    if (secs >= 3600) {
      return "horas";
    }
    if (secs >= 60) {
      return "minutos";
    }
    return "segundos";
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        }
        clearInterval(timer);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-2 w-full">
      <span className="text-gray-600 text-sm">Poucas unidades em estoque!</span>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 text-xs flex rounded bg-green-300 animate-pulse">
          <div
            style={{
              width: `${(countdown / secondsInADay) * 100}%`,
            }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
      </div>
      {countdown <= 0 ? (
        <span className="text-red-600 text-sm">Tempo Esgotado!</span>
      ) : (
        <span className="text-red-600 text-sm">
          Oportunidade termina em: {Math.floor(countdown / 3600)}:
          {String(Math.floor((countdown % 3600) / 60)).padStart(2, "0")}:
          {String(countdown % 60).padStart(2, "0")}{" "}
          {getCountdownUnit(countdown)}
        </span>
      )}
    </div>
  );
}
