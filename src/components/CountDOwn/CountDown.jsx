import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const CountDown = ({ deliveryTime }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    // console.log("Текущее время:", now.toLocaleTimeString());

    if (!deliveryTime) {
      // console.error("deliveryTime не задан");
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const [hours, minutes] = deliveryTime.split(":").map(Number);
    
    if (isNaN(hours) || isNaN(minutes)) {
      // console.error("Некорректный формат deliveryTime:", deliveryTime);
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const deliveryDate = new Date();
    deliveryDate.setHours(hours, minutes, 0, 0);

    if (deliveryDate < now) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
    }

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

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <Box>
      {timeLeft.hours.toString().padStart(2, '0')}:
      {timeLeft.minutes.toString().padStart(2, '0')}:
      {timeLeft.seconds.toString().padStart(2, '0')}
    </Box>
  );
};

export default CountDown;
