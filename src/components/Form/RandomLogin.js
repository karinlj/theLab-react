import RoleBasedLogin from "./RoleBasedLogin";

//extends Login Component and inherits everything
class RandomLogin extends RoleBasedLogin {
  randomLogin = e => {
    e.preventDefault();

    const loginRoles = ["lion", "zebra", "lemur", "passwordFailed"];
    let randRole = loginRoles[Math.floor(Math.random() * loginRoles.length)];

    if (randRole === "passwordFailed") {
      this.setState({
        formClass: "form show",
        loggedinClass: "loggedin",
        errorText: "Username or Password is incorrect"
      });
    } else {
      this.setState({
        role: randRole,
        formClass: "form",
        loggedinClass: "loggedin show",
        roleText: randRole
      });
    }
  };
}

export default RandomLogin;
