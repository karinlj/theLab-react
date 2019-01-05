import React from "react";
import "./Games.scss";

const Hedgehogs = props => {
  const { hedgehogs, onHedgehogsClick } = props;
  //inputs: hedgehogs-array
  //output: onClick
  return (
    <div>
      {hedgehogs.map(hedgehog =>
        <span
          key={hedgehog.id}
          className="kitten"
          style={{ top: hedgehog.randHeight, left: hedgehog.randWidth }}
          onClick={() => onHedgehogsClick(hedgehog.id)}
        >
          {hedgehog.hedgehogIcon}
        </span>
      )}
    </div>
  );
};

export default Hedgehogs;
