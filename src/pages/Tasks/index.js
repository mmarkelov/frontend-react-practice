import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

import TaskManager from "../../components/TaskManager";
import List from "../../components/List";
import PropTypes from "prop-types";
import { TASK_STATUSES, TIME_FILTERS } from "../../const";
import { parse, isPast } from "date-fns";

const useStyles = makeStyles({
  tasks: {
    display: "flex",
  },
});

const Tasks = ({ tasks }) => {
  const classes = useStyles();
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const filterTask = (time) => {
    if (time === TIME_FILTERS[0]) {
      const updatedTasks = filteredTasks.filter(({ date }) =>
        isPast(parse(date, "yyyy-MM-dd", new Date()))
      );
      setFilteredTasks(updatedTasks);
    }
  };

  return (
    <Box className={classes.tasks}>
      <TaskManager filterTask={filterTask} />
      <List tasks={filteredTasks} />
    </Box>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.oneOf(TASK_STATUSES),
    })
  ),
};

export default Tasks;
