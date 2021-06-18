import {useState} from "react";
import "./App.css";
import SignIn from "./pages/SingIn/signIn";
import ToDoList from "./pages/ToDoList";

const TODO = "TODO"
const SIGN_IN = "SIGN_IN"

const App = () => {
  const [activePanel, setActivePanel] = useState(TODO);

  const activePanelHandler = (nextPanel) => {
    setActivePanel(nextPanel);
  }

  switch (activePanel) {
    case TODO:
      return <ToDoList activePanelHandler={activePanelHandler} />;
    default:
    case SIGN_IN:
      return <SignIn activePanelHandler={activePanelHandler} />;
  }
}

export default App;
