import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { TASK_STATUSES } from "../../const";
import StatisticsManager from "../../components/StatisticsManager";

const useStyles = makeStyles({
  tasks: {
    display: "flex",
  },
});

const Statistics = ({ tasks }) => {
  const classes = useStyles();

  const statusesData = TASK_STATUSES.map((item) => ({
    name: item,
    value: tasks.filter(({ status }) => status === item).length,
  }));

  return (
    <Box className={classes.tasks}>
      <StatisticsManager statusesData={statusesData} />
    </Box>
  );
};

Statistics.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.oneOf(TASK_STATUSES),
    })
  ),
};

export default Statistics;
