import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Box, makeStyles} from "@material-ui/core";
import Tasks from "./pages/Tasks";
import Main from "./pages/Main";
import Statistics from "./pages/Statistics";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const useStyles = makeStyles({
  root: {
    width: "70vw",
    margin: "auto"
  }
});

const App = () => {
  const classes = useStyles();

  return <Router>
    <Box className={classes.root}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
      </Switch>
      <Footer/>
    </Box>
    </Router>
}

export default App;
