import React, { useState } from "react";

const useClientsProps = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  return {
    currentTime,
    setCurrentTime,
    currentDate,
    setCurrentDate,
  };
};

export default useClientsProps;
