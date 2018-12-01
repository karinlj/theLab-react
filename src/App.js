import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import TodoList from "./components/Lists/TodoList";
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
import ChangingControls from "./components/Scramble/ChangingControls";
import Login from "./components/Form/Login";

import Timer from "./components/Timing/Timer";
import Blog from "./components/Blog/Blog";
import Test from "./components/Test/Test";

class App extends Component {
  state = {
    //SideDrawer closed = default
    sideDrawerOpen: false
  };

  handleToggle = () => {
    //passing func to setState and recieve prevstate as argument
    this.setState(prevState => {
      //if close it will open and viceversa
      return { sideDrawerOpen: !prevState.sideDrawerOpen }; //set the opposite
    });
  };

  /*   handleBackdropClick = () => {
    // closing sidedrawer
    this.setState({ sideDrawerOpen: false });
  }; */

  handleLinkClick = () => {
    // closing sidedrawer
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    //if SideDrawer open=true
    if (this.state.sideDrawerOpen) {
      // closing sidedrawer
      backdrop = <Backdrop />;
    }
    return (
      <BrowserRouter>
        {/* inline style here */}
        <div className="App" style={{ height: "100%" }}>
          {/* forward the prop (=ADRESS to method) to Navbar and from there to ToggleBtn  */}
          <Navbar handleDrawerClick={this.handleToggle} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            clickLink={this.handleLinkClick}
          />
          {backdrop} {/* conditionally rendered */}
          <Header className="header" />
          <div className="content-section">
            <div className="container">
              <Switch>
                {" "}
                {/* only want to match one at a time */}
                <Route exact path="/" component={Home} />
                <Route path="/TodoList" component={TodoList} />
                <Route path="/Form" component={Form} />
                <Route path="/Login" component={Login} />
                <Route path="/YellowOrRed" component={YellowOrRed} />
                <Route path="/CatOrDog" component={CatOrDog} />
                <Route path="/ConcatStrings" component={ConcatStrings} />
                <Route path="/Speed" component={Speed} />
                <Route path="/Wait" component={Wait} />
                <Route path="/about" component={About} />
                <Route path="/Scramble" component={Scramble} />
                <Route path="/ChangingControls" component={ChangingControls} />
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
