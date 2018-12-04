import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/textComponents/Home";
import Introduction from "./components/textComponents/Introduction";
import Overview from "./components/textComponents/Overview";
import RunningCli from "./components/textComponents/RunningCli";
import CiIntegration from "./components/textComponents/CiIntegration";
import TodoList from "./components/Lists/TodoList";
import RandomTodoList from "./components/Lists/RandomTodoList";
import Post from "./components/Blog/Post";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Form from "./components/Form/Form";
import YellowOrRed from "./components/Conditional/YellowOrRed";
import CatOrDog from "./components/Conditional/CatOrDog";
import ConcatStrings from "./components/Strings/ConcatStrings";
import Speed from "./components/Timing/Speed";
import Wait from "./components/Timing/Wait";
import Scramble from "./components/Scramble/Scramble";
import ScrambleMulti from "./components/Scramble/ScrambleMulti";
import Login from "./components/Form/Login";
import RandomLogin from "./components/Form/RandomLogin";

import Timer from "./components/Timing/Timer";
import Blog from "./components/Blog/Blog";
import Test from "./components/Test/Test";

class App extends Component {
  state = {
    //SideDrawer closed
    sideDrawerOpen: false
  };

  handleToggle = () => {
    this.setState(prevState => {
      //passing func to setState
      //if close it will open and viceversa
      return { sideDrawerOpen: !prevState.sideDrawerOpen }; //set the opposite
    });
  };

  handleBackdropAndLinkClick = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    //if SideDrawer open=true
    if (this.state.sideDrawerOpen) {
      // passing method as prop
      backdrop = <Backdrop clickBackdrop={this.handleBackdropAndLinkClick} />;
    }
    return (
      <BrowserRouter>
        <div className="App" style={{ height: "100%" }}>
          {/* passing method as props to Navbar */}
          {/* (no parenthesis to not excecute at once) */}
          {/* forward the prop to Navbar and from there to ToggleBtn  */}
          <Navbar handleDrawerClick={this.handleToggle} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            clickLink={this.handleBackdropAndLinkClick}
          />

          {backdrop}
          <Header className="header" />

          <div className="content-section">
            <div className="container">
              <Switch>
                {" "}{/* only want to match one at a time */}
                <Route exact path="/" component={Home} />
                <Route path="/introduction" component={Introduction} />
                <Route path="/overview" component={Overview} />
                <Route path="/runningCli" component={RunningCli} />
                <Route path="/ciIntegration" component={CiIntegration} />
                <Route path="/TodoList" component={TodoList} />
                <Route path="/RandomTodoList" component={RandomTodoList} />
                <Route path="/Form" component={Form} />
                <Route path="/Login" component={Login} />
                <Route path="/randomLogin" component={RandomLogin} />
                <Route path="/YellowOrRed" component={YellowOrRed} />
                <Route path="/CatOrDog" component={CatOrDog} />
                <Route path="/ConcatStrings" component={ConcatStrings} />
                <Route path="/Speed" component={Speed} />
                <Route path="/Wait" component={Wait} />
                <Route path="/Scramble" component={Scramble} />
                <Route path="/scrambleMulti" component={ScrambleMulti} />
                <Route path="/Blog" component={Blog} />
                <Route path="/timer" component={Timer} />
                <Route path="/Test" component={Test} />
                <Route path="/:post_id" component={Post} />
              </Switch>
            </div>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
