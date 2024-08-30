import { useState, useEffect } from "react";

const useCountdownTimer = (initialTime) => {
  const [countdown, setCountdown] = useState(initialTime);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const resetCountdown = () => {
    setCountdown(initialTime);
    setCanResend(false);
  };

  return { countdown, canResend, resetCountdown };
};

export default useCountdownTimer;
