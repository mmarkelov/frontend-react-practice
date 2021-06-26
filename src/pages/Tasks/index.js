import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

import TaskManager from "../../components/TaskManager";

const useStyles = makeStyles({
  tasks: {
    display: "flex",
  },
});

const Tasks = () => {
  const classes = useStyles();

  return (
    <Box className={classes.tasks}>
      <TaskManager />
    </Box>
  );
};

export default Tasks;
