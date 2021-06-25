import {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Box} from "@material-ui/core";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import List from "../../components/List";
import Greeting from "../../components/Greeting";

const useStyles = makeStyles({
    tasks: {
        display: "flex"
    }
});

const ToDoList = () => {
    const classes = useStyles();
    const [tasks, setTasks] = useState([]);


    const [user, setUser] = useState(() => {
        if (localStorage.getItem("User") === null) {
            return {};
        } else {
            return JSON.parse(localStorage.getItem("User"));
        }
    });

    const onSubmitUser = (data) => {
        setUser(data);
    }

    const onSubmit = data => {
        const newData = {...data, id: tasks.length + 1} ;
        setTasks([...tasks, newData]);
    }

    return (
      <>
        <Header onSubmitUser={onSubmitUser} name={user.name}/>
          <Box className={classes.tasks}>
              <Form onSubmit={onSubmit}/>
              <Box>
                  <Greeting name={user.name}/>
              </Box>
              <List tasks={tasks}/>
          </Box>
        <Footer />
      </>
  );
}

export default ToDoList;
