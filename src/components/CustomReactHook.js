import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const CustomReactHook = () => {
  const [currentValue, setCurrentValue] = useState("");
  const delay = 400;
  const debouncedVal = useDebounce(currentValue, delay);

  const handleChange = (e) => {
    const newValue = e?.target?.value;
    setCurrentValue(newValue);
  };

  return (
    <div>
      Search: <input type="text" onChange={handleChange} />
      <br />
      <br />
      <div>
        <b>Current value:</b>
        <p>{`${currentValue ? currentValue : "No value"}`}</p>
      </div>
      <br />
      <div>
        <b>Debounced value:</b>
        <p>{`${debouncedVal ? debouncedVal : "No value"}`}</p>
      </div>
      <br />
    </div>
  );
};
