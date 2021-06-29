import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";


import Form from "../../components/Form";
import List from "../../components/List";
import Greeting from "../../components/Greeting";
import { TASK_STATUSES } from "../../const";

const useStyles = makeStyles({
  tasks: {
    display: "flex",
    "flex-direction": "column",
  },
});

const Main = ({ name, tasks, onSubmitTasks, completeTask, deleteTask }) => {
  const classes = useStyles();

  return (
    <Box className={classes.tasks}>
      <Form onSubmit={onSubmitTasks} />
      <Box>
        <Greeting name={name} />
      </Box>
      <List tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </Box>
  );
};

Main.propTypes = {
    name: PropTypes.string,
    tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.oneOf(TASK_STATUSES),
    })
    ),
    onSubmitTasks: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default Main;
