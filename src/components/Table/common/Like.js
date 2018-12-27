import React from "react";
// input: -liked or not? Property: liked: boolean (true/false)
//output: -events raised in this comp? - onClick.
//This comp will render an empty or full heart.
//Up to the consumer of this comp what kind of heart will be rendered

const Like = props => {
  const { liked, onLikeToggle } = props;

  //liked is a boolean
  let classes = "fa fa-heart"; //sätter grundklassen
  if (!liked) classes += "-o"; //sätter klass beroende på villkor
  /* 
  let classes;
  liked ? (classes = "fa fa-heart") : (classes = "fa fa-heart-o"); */

  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={onLikeToggle}
    />
  );
};

export default Like;
