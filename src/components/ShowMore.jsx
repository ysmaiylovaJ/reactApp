import React, { useState } from "react";


const ShowMore = () => {
  const [cards, setCards] = useState([1, 2]);

  const loadMoreCards = () => {
    if (cards.length >= 8) {
      return;
    }
    // Добавляем еще 2 карточки в массив cards
    setCards((prevCards) => prevCards.concat([1, 2]));
  };
  return (
    <div>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            border: "3px solid red",
            margin: "10px",
            padding: "10px",
            width: "10%",
            background: "pink",
          }}
        >
          Card {card}
        </div>
      ))}

      {cards.length < 8 && <button onClick={loadMoreCards}>Show more</button>}
    </div>
  );
};

export default ShowMore;
