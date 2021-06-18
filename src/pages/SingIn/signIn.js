import React from "react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      login: "",
      name: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.signInHandler = this.signInHandler.bind(this);
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  signInHandler() {
    // авторизация
  }

  render() {
    return (
      <div className="contentColumn">
        <div className="formRow">
          <input
            className="textField"
            type="login"
            placeholder="Login"
            name="login"
            value={this.state.login}
            onChange={this.changeHandler}
          />
          <input
            className="textField"
            type="name"
            placeholder="Имя"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <button onClick={this.signInHandler} className="signInButton">
            Войти
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
