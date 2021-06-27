import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

import TaskManager from "../../components/TaskManager";
import List from "../../components/List";
import PropTypes from "prop-types";
import { TASK_STATUSES, TIME_FILTERS } from "../../const";
import { parse, isPast, isToday, isFuture } from "date-fns";

const useStyles = makeStyles({
  tasks: {
    display: "flex",
      "flex-direction": "column",
  },
});

const Tasks = ({ tasks, completeTask, deleteTask }) => {
    const classes = useStyles();
    const allTasks = tasks;
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    const filterTask = (time) => {
        if (time === TIME_FILTERS[0]) {
            const updatedTasks = allTasks.filter(({ date }) =>
                isPast(parse(date, "yyyy-MM-dd", new Date()))
            );
            setFilteredTasks(updatedTasks);
        }
        if (time === TIME_FILTERS[1]) {
            const updatedTasks = allTasks.filter(({ date }) =>
                isToday(parse(date, "yyyy-MM-dd", new Date()))
            );
            setFilteredTasks(updatedTasks);
        }
        if (time === TIME_FILTERS[2]) {
            const updatedTasks = allTasks.filter(({ date }) =>
                isFuture(parse(date, "yyyy-MM-dd", new Date()))
            );
            setFilteredTasks(updatedTasks);
        }
    };

    return (
    <Box className={classes.tasks}>
        <TaskManager filterTask={filterTask} />
        <List tasks={filteredTasks} completeTask={completeTask} deleteTask={deleteTask}/>
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
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default Tasks;
