import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import List from "../../components/List";

import {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    tasks: {
        display: "flex"
    }

});

const ToDoList = () => {
    const classes = useStyles();
    const [tasks, setTasks] = useState([]);

    return (
      <>
        <Header />
          <Box className={classes.tasks}>
              <Form tasks={tasks} setTasks={setTasks}/>
              <List tasks={tasks}/>
          </Box>
        <Footer />
      </>
  );
}

export default ToDoList;
