import { useEffect, useState } from "react";

const Countdown = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endTime) - new Date();
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num) => String(num).padStart(2, "0");

  return (
    <div className="flex items-center gap-2 text-white bg-[#F02640] px-4 py-2 rounded-md text-sm font-semibold">
      <span>{format(timeLeft.hours)}</span>:
      <span>{format(timeLeft.minutes)}</span>:
      <span>{format(timeLeft.seconds)}</span>
    </div>
  );
};

export default Countdown;
