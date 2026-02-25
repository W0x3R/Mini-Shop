import { useEffect, useState } from "react";

export const useCartChangesAnimation = (value) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setAnimate(true);
    });

    return () => {
      setAnimate(false);
      cancelAnimationFrame(id);
    };
  }, [value]);

  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  return { animate, handleAnimationEnd };
};
