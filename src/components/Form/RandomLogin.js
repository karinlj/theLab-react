import Login from "./Login";
import React, { Component } from "react";
import "./Form.scss";
import Sidebar from "../Sidebar";
import SubmitBtn from "../SubmitBtn";
import MainBtn from "../MainBtn";
import HeaderText from "../HeaderText";
import Lion from "../../img/lion.jpeg";
import Zebra from "../../img/zebra.jpeg";
import Lemur from "../../img/lemur.jpg";
import AccountData from "../../data/accounts.json";
import LoginOptions from "./LoginOptions";

class RandomLogin extends Login {
  randomLogin = () => {
    alert("random");
  };
}

export default RandomLogin;
