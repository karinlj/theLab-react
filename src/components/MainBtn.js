import React from "react";

const MainBtn = props => {
  //console.log(props);

  //destructuring: store the props in a variable

  const { classProp, idProp, clickProp } = props;
  return (
    <button className={classProp} id={idProp} onClick={clickProp}>
      {props.children}
    </button>
  );
};

export default MainBtn;
