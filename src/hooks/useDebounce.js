import {useEffect} from "react";

/**
 * A hook that allows for debounce behavior. Will call a callback
 * function with the passed in value after a certain delay if the value hasn't changed.
 * @param {*} value - value to debounce, can be any type
 * @param {function} callback  - a function to call after value hasn't changed for the duration of the delay
 * @param {number} delay - delay in milliseconds to wait before calling the callback
 */
export const useDebounce = ({ value, delay, callback }) => {
  useEffect(() => {
    const timer = setTimeout(() => callback(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return value;
};