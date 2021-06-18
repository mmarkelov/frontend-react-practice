import {useState} from "react";
import {Box, makeStyles} from "@material-ui/core";
import SignIn from "./pages/SingIn/signIn";
import ToDoList from "./pages/ToDoList";
import "./App.css";

const TODO = "TODO"
const SIGN_IN = "SIGN_IN"

const useStyles = makeStyles({
  root: {
    width: "70vw",
    margin: "auto"
  }
});

const App = () => {
  const classes = useStyles();
  const [activePanel, setActivePanel] = useState(TODO);

  const getContent = () => {
    switch (activePanel) {
      case TODO:
        return <ToDoList activePanelHandler={activePanelHandler} />;
      default:
      case SIGN_IN:
        return <SignIn activePanelHandler={activePanelHandler} />;
    }
  }

  const activePanelHandler = (nextPanel) => {
    setActivePanel(nextPanel);
  }

  return <Box className={classes.root}>{getContent()}</Box>
}

export default App;
