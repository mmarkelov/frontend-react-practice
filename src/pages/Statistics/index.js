import {makeStyles} from "@material-ui/styles";
import PropTypes from "prop-types";
import {TASK_STATUSES} from "../../const";
import {Box} from "@material-ui/core";
import { useState } from "react";
import StatisticsManager from "../../components/StatisticsManager"

const useStyles = makeStyles({
  tasks: {
    display: "flex",
  },
});

const Statistics = () => {
  const classes = useStyles();

  var data = JSON.parse(localStorage.getItem('Tasks'));

  const [countActive, setCountActive] = useState(data.filter(value => value.status === TASK_STATUSES[0]).length);
  const [countDelay, setCountDelay] = useState(data.filter(value => value.status === TASK_STATUSES[1]).length);
  const [countCancel, setCountCancel] = useState(data.filter(value => value.status === TASK_STATUSES[2]).length);

  const newStatistics = () => {
        setCountActive(data.filter(value => value.status === TASK_STATUSES[0]).length);
        setCountDelay(data.filter(value => value.status === TASK_STATUSES[1]).length);
        setCountCancel(data.filter(value => value.status === TASK_STATUSES[2]).length);
  };

  const statusesData = [
      { name: TASK_STATUSES[0], value: countActive},
      { name: TASK_STATUSES[1], value: countDelay},
      { name: TASK_STATUSES[2], value: countCancel}
  ];

  return (
      <Box className={classes.tasks}>
          <StatisticsManager newStatistics={newStatistics} statusesData={statusesData} />
      </Box>
  );
};

Statistics.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.shape({
        status: PropTypes.oneOf(TASK_STATUSES),
      })
  )
};

export default Statistics;
