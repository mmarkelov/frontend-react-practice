import React from "react";
import "./App.css";
import SignIn from "./singIn/signIn";
import ToDoList from "./toDoList/todolist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePanel: "ToDoList" };
    // если уже заходил, то this.setState({ activePanel: "ToDoList" });
    this.activePanelHandler = this.activePanelHandler.bind(this);
  }

  activePanelHandler(nextPanel) {
    this.setState({ activePanel: nextPanel });
  }

  render() {
    switch (this.state.activePanel) {
      case "SignIn":
        return <SignIn activePanelHandler={this.activePanelHandler} />;
      case "ToDoList":
        return <ToDoList activePanelHandler={this.activePanelHandler} />;
      default:
    }
  }
}

export default App;
