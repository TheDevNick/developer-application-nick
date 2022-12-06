import { useEffect, useState } from "react";

/**
 * A hook that allows for debounce behavior. Will take in a value and a delay
 * @param {*} value - value to debounce, can be any type
 * @param {number} delay - delay in milliseconds to wait before calling the callback
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
