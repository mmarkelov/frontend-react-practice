import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

import TaskManager from "../../components/TaskManager";
import List from "../../components/List";
import { TASK_STATUSES, TIME_FILTERS } from "../../const";
import { parse, isPast, isToday, isFuture } from "date-fns";

const useStyles = makeStyles({
  tasks: {
    display: "flex",
      "flex-direction": "column",
  },
});

const TASKS = "Tasks";

const Tasks = () => {
    const classes = useStyles();
    const localStorageTasks = localStorage.getItem(TASKS);
    const [tasks, setTasks] = useState(

        localStorageTasks ? JSON.parse(localStorageTasks) : []
    );
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [returnedTasks, setReturnedTasks] = useState(tasks);
    const allTasks = tasks;

    const completeTask = (id) => {
        const taskIndex = tasks.findIndex((task) => task.id === id);
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            status: TASK_STATUSES[1],
        };
        setTasks(updatedTasks);
        localStorage.setItem(TASKS, JSON.stringify(updatedTasks));
        setReturnedTasks(updatedTasks);
    }

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem(TASKS, JSON.stringify(updatedTasks));
        setReturnedTasks(updatedTasks);
    };

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


    Array.prototype.unique = function() {
        let a = this.concat();
        for(let i = 0; i < a.length; ++i) {
            for(let j = i+1; j < a.length; ++j) {
                if(a[i].id === a[j].id)
                    a.splice(j--, 1);
            }
        }
        return a;
    };

    const arr = [...returnedTasks, ...filteredTasks].unique();
    return (
    <Box className={classes.tasks}>
        <TaskManager filterTask={filterTask} />
        <List tasks={arr} completeTask={completeTask} deleteTask={deleteTask}/>
    </Box>
    );
};

export default Tasks;
