import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const CountDown = ({ deliveryTime }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    // console.log(now.toLocaleTimeString());
    const deliveryDate = new Date(deliveryTime);
    const difference = deliveryDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // console.log(timeLeft);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <Box>
      {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </Box>
  );
};

export default CountDown;
