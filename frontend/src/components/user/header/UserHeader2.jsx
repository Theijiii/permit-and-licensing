import { useState, useEffect } from "react";

export default function UserHeader2() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  return (
    <header className="bg-gradient-to-b from-orange-500 to-orange-400">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 sm:gap-0">
        {/* Location */}
        <div className="text-base sm:text-xl font-bold">
          Caloocan City, Philippines
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <h3>{time.toLocaleTimeString()}</h3>
          <p className="hidden sm:block">|</p>
          <h3>{time.toLocaleDateString()}</h3>
        </div>
      </div>
    </header>
  );
}