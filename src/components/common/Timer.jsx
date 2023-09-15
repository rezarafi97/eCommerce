import { useEffect } from "react";
import { intervalToDuration } from "date-fns";
import PropTypes from "prop-types";

const Timer = ({ timer, setTimer, timerEnd }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(
        intervalToDuration({
          start: new Date(),
          end: timerEnd,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 sm:gap-4">
      <div>
        <p className="font-poppins text-[0.5rem] md:text-xs font-medium">
          Hours
        </p>
        <p className="font-inter text-xl md:text-4xl font-bold tracking-widest">
          {timer.hours < 10 ? "0" + timer.hours : timer.hours}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-red-500 text-lg md:text-3xl font-black">:</p>
      </div>
      <div>
        <p className="font-poppins text-[0.5rem] md:text-xs font-medium">
          Minutes
        </p>
        <p className="font-inter text-xl md:text-4xl font-bold tracking-widest">
          {timer.minutes < 10 ? "0" + timer.minutes : timer.minutes}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-red-500 text-lg md:text-3xl font-black">:</p>
      </div>
      <div>
        <p className="font-poppins text-[0.5rem] md:text-xs font-medium">
          Seconds
        </p>
        <p className="font-inter text-xl md:text-4xl font-bold tracking-widest">
          {timer.seconds < 10 ? "0" + timer.seconds : timer.seconds}
        </p>
      </div>
    </div>
  );
};

Timer.propTypes = {
  timer: PropTypes.object,
  setTimer: PropTypes.func,
  timerEnd: PropTypes.object,
};

export default Timer;
