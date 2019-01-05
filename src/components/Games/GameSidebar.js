import React from "react";
import "./Games.scss";
import MainBtn from "../MainBtn";

const GameSidebar = props => {
  const { time, points, onBtnClick } = props;

  //inputs: time, points
  //output: onClick
  return (
    <div className="game-sidebar">
      <div className="counter">
        <h3>
          Time:
          <span>{Math.floor(time / 10)}</span>
        </h3>
      </div>

      <MainBtn classProp="button start-btn" clickProp={onBtnClick}>
        Start game
      </MainBtn>

      <div className="points">
        <h3>
          Points:
          <span>{points}</span>
        </h3>
      </div>
    </div>
  );
};

export default GameSidebar;
