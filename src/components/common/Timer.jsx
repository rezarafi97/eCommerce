import { useEffect } from "react";
import { intervalToDuration } from "date-fns";
import PropTypes from "prop-types";

const Timer = ({ timer, setTimer, timerEnd }) => {
  const titleClass = "font-poppins text-[0.5rem] md:text-[0.6rem] lg:text-xs font-medium";
  const dotsClass = "text-red-500 text-lg md:text-xl lg:text-3xl font-black";
  const timerClass = "font-inter text-xl md:text-2xl lg:text-4xl font-bold tracking-widest";

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex gap-2 sm:gap-4">
      <div>
        <p className={titleClass}>Hours</p>
        <p className={timerClass}>
          {timer.hours < 10 ? "0" + timer.hours : timer.hours}
        </p>
      </div>
      <div className="flex items-center">
        <p className={dotsClass}>:</p>
      </div>
      <div>
        <p className={titleClass}>Minutes</p>
        <p className={timerClass}>
          {timer.minutes < 10 ? "0" + timer.minutes : timer.minutes}
        </p>
      </div>
      <div className="flex items-center">
        <p className={dotsClass}>:</p>
      </div>
      <div>
        <p className={titleClass}>Seconds</p>
        <p className={timerClass}>
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
