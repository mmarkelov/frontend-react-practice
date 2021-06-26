import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core";
import Tasks from "./pages/Tasks";
import Main from "./pages/Main";
import Statistics from "./pages/Statistics";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const useStyles = makeStyles({
  root: {
    width: "70vw",
    margin: "0 auto",
    flex: "1 0 auto",
  },
});

const App = () => {
  const classes = useStyles();
  const localStorageUser = localStorage.getItem("User");
  const [user, setUser] = useState(
    localStorageUser ? JSON.parse(localStorageUser) : {}
  );

  const onSubmitUser = (data) => {
    setUser(data);
  };

  return (
    <Router>
      <Box className={classes.root}>
        <Header onSubmitUser={onSubmitUser} name={user.name} />
        <Switch>
          <Route exact path="/">
            <Main name={user.name} />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
        </Switch>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
