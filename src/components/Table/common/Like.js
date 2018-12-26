import React from "react";

// input: -is the movie liked or not? Property: liked: boolean (true/false)
//output: -what events will be raised in this comp? onClick.
//This comp will render an empty or full heart. Up to the consumer of this comp what kind of heart will be rendered

// props we want to use
const Like = props => {
  const { liked, onHandleLike } = props;
  // remember this code for dynamic classes!
  //liked is a boolean
  let classes = "fa fa-heart"; //sätter grundklassen
  if (!liked) classes += "-o"; //sätter klass beroende på villkor

  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={onHandleLike}
    />
  );
};

export default Like;
