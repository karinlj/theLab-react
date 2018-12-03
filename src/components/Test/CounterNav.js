import React from "react";
import "./Test.scss";

const CounterNav = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
    </nav>
  );
};
export default CounterNav;
