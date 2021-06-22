import {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Box} from "@material-ui/core";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import List from "../../components/List";

const useStyles = makeStyles({
    tasks: {
        display: "flex"
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
          <Box className={classes.tasks}>
              <Form onSubmit={onSubmit}/>
              <List tasks={tasks}/>
          </Box>
        <Footer />
      </>
  );
}

export default ToDoList;
