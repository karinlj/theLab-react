import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/textComponents/Home';
import Introduction from './components/textComponents/Introduction';
import Overview from './components/textComponents/Overview';
import RunningCli from './components/textComponents/RunningCli';
import CiIntegration from './components/textComponents/CiIntegration';
import SortedList from './components/Lists/SortedList';
import UnsortedList from './components/Lists/UnsortedList';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import FormValidation from './components/Form/FormValidation';
import YellowOrRed from './components/Conditional/YellowOrRed';
import CatOrDog from './components/Conditional/CatOrDog';
import ConcatStrings from './components/Strings/ConcatStrings';
import Speed from './components/Timing/Speed';
import Wait from './components/Timing/Wait';
import Scramble from './components/Scramble/Scramble';
import MultiScramble from './components/Scramble/MultiScramble';
import RoleBasedLogin from './components/Form/RoleBasedLogin';
import RandomLogin from './components/Form/RandomLogin';
import VisualBugs from './components/VisualBugs/VisualBugs';
import Tables from './components/Table/Tables';
import Animal from './components/Table/Animal';
import KittenCollect from './components/Games/KittenCollect';

class App extends Component {
	state = {
		//SideDrawer closed
		sideDrawerOpen: false
	};

	handleToggle = () => {
		this.setState((prevState) => {
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
				<div className="App" style={{ height: '100%' }}>
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
								{' '}
								{/* only want to match one at a time */}
								<Route exact path="/" component={Home} />
								<Route path="/introduction" component={Introduction} />
								<Route path="/overview" component={Overview} />
								<Route path="/runningCli" component={RunningCli} />
								<Route path="/ciIntegration" component={CiIntegration} />
								<Route path="/sortedList" component={SortedList} />
								<Route path="/unsortedList" component={UnsortedList} />
								<Route
									path="/FormValidation"
									component={FormValidation}
								/>
								<Route
									path="/roleBasedLogin"
									component={RoleBasedLogin}
								/>
								<Route path="/randomLogin" component={RandomLogin} />
								<Route path="/YellowOrRed" component={YellowOrRed} />
								<Route path="/CatOrDog" component={CatOrDog} />
								<Route path="/ConcatStrings" component={ConcatStrings} />
								<Route path="/Speed" component={Speed} />
								<Route path="/Wait" component={Wait} />
								<Route path="/Scramble" component={Scramble} />
								<Route path="/multiScramble" component={MultiScramble} />
								<Route path="/visualBugs" component={VisualBugs} />
								<Route path="/tables" component={Tables} />
								{/* <Route path="/singleAnimal" component={SingleAnimal} /> */}
								<Route path="/animal/:id" component={Animal} />
								<Route path="/kittenCollect" component={KittenCollect} />
								{/*   <Route path="/:post_id" component={Post} /> */}
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
