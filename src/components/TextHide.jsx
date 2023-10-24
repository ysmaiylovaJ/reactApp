import React, { useState } from "react";

const TextHide = () => {
  const [showText, setShowText] = useState(true);

  const hideText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      {showText ? (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum amet
            veniam dolores saepe minima rem expedita ipsam quo voluptates
            quibusdam.
          </p>
          <button onClick={hideText}>Скрыть текст</button>
        </div>
      ) : (
        <button onClick={hideText}>Показать текст</button>
      )}
    </div>
  );
};

export default TextHide;
