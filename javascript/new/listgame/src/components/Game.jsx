import React from "react";

function Game(props) {
  const { game } = props;

  return (
    <div className="game">
      <h2>{game.name}</h2>
      <p>Rating: {game.rating.toFixed(2)}</p>
      <p>{game.summary}</p>
      <p>Total Rating Count: {game.total_rating_count}</p>
    </div>
  );
}

export default Game;
