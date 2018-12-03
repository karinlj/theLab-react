import Login from "./Login";

class RandomLogin extends Login {
  randomLogin = e => {
    e.preventDefault();

    const loginRoles = ["lion", "zebra", "lemur", "passwordFailed"];

    let randRole = loginRoles[Math.floor(Math.random() * loginRoles.length)];

    console.log(loginRoles);

    this.setState({
      role: randRole,
      formClass: "form",
      loggedinClass: "loggedin show",
      loggedInText: this.state.email
    });
  };
}

export default RandomLogin;
