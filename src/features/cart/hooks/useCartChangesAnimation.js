import { useEffect, useState } from "react";

export const useCartChangesAnimation = (value) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);

    const id = requestAnimationFrame(() => {
      setAnimate(true);
    });

    return () => cancelAnimationFrame(id);
  }, [value]);

  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  return { animate, handleAnimationEnd };
};
