import React, { useState } from "react";

const SkrollBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    let newValue = parseInt(e.target.value, 10);
    newValue = isNaN(newValue) ? 0 : Math.min(Math.max(newValue, 0), 100); // Убедитесь, что значение находится в диапазоне от 0 до 100
    setValue(newValue);
  };

  const incrementValue = () => {
    setValue((prevValue) => Math.min(prevValue + 10, 100));
  };

  const decrementValue = () => {
    setValue((prevValue) => Math.max(prevValue - 10, 0));
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <button onClick={incrementValue}>+10%</button>
      <button onClick={decrementValue}>-10%</button>
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#eee",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            backgroundColor: "#007BFF",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkrollBar;
