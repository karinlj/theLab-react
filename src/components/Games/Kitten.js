import React from "react";
import "./Games.scss";

const Kitten = props => {
  const { kittens, onKittenClick } = props;
  //inputs: kitten-array
  //output: onClick
  return (
    <div>
      {kittens.map(kitten =>
        <span
          key={kitten.id}
          className="kitten"
          style={{ top: kitten.randHeight, left: kitten.randWidth }}
          onClick={() => onKittenClick(kitten.id)}
        >
          {kitten.catIcon}
        </span>
      )}
    </div>
  );
};

export default Kitten;
