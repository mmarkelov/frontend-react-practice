import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Task from "../../components/Task";

import { TASK_STATUSES } from "../../const";

const useStyles = makeStyles({
  section: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
});

const List = ({ tasks }) => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.oneOf(TASK_STATUSES),
    })
  ),
};

export default List;
