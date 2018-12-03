import Login from "./Login";
import AccountData from "../../data/accounts.json";
import LoginOptions from "./LoginOptions";

class RandomLogin extends Login {
  randomLogin = e => {
    e.preventDefault();
    const lion = AccountData["lion@thelab.com"].role;
    const zebra = AccountData["zebra@thelab.com"].role;
    const lemur = AccountData["lemur@thelab.com"].role;
    const nobody = "ingen";

    //this.state.role === "lion"

    const loginOptions = [lion, zebra, lemur, nobody];

    let randOption = loginOptions[Math.floor(Math.random() * loginOptions.length)];

    console.log(randOption);

    //console.log(lion, zebra, lemur, nobody, randomNr);

    this.setState({
      formClass: "form",
      loggedinClass: "loggedin show"
    });
  };
}

export default RandomLogin;
