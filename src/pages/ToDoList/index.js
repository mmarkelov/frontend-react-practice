import {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Box} from "@material-ui/core";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import List from "../../components/List";

const useStyles = makeStyles({
    taskForm: {
        marginBottom: "15px"
    },
    tasks: {
        display: "grid",
        // gridTemplateColumns: "repeat(3, 1fr)",
        // gridTemplateRows: "repeat(3, 100px)"
    }

});

const ToDoList = () => {
    const classes = useStyles();
    const [tasks, setTasks] = useState([]);

    const onSubmit = data => {
        const newData = {...data, id: tasks.length + 1} ;
        setTasks([...tasks, newData]);
    }

    return (
      <>
        <Header />
          <Form className={classes.taskForm} onSubmit={onSubmit}/>
          <Box className={classes.tasks}>
              <List tasks={tasks}/>
          </Box>
        <Footer />
      </>
  );
}

export default ToDoList;
