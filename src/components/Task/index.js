import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { parse, format } from "date-fns";
import { ru } from "date-fns/locale";
import PropTypes from "prop-types";
import { TASK_STATUSES } from "../../const";

const useStyles = makeStyles( {
    card: {
        height: "200px",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        border: "5px solid #c2e59c",
        margin: "20px",
    },
    typography: {
        textAlign: "center"
    }
})

const Task = ({ title, description, date, status }) => {
  const classes = useStyles();
  const dateObj = parse(date, "yyyy-MM-dd", new Date());

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography
            className={classes.typography}
            gutterBottom
            component="h6"
          >
            {title}
          </Typography>
          <Typography className={classes.typography} gutterBottom component="p">
            {description}
          </Typography>
          <Typography className={classes.typography} gutterBottom component="p">
            {format(dateObj, "PP", { locale: ru })}
          </Typography>
          <Typography className={classes.typography} gutterBottom component="p">
            {status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          Выполнено
        </Button>
        <Button size="small" color="primary" variant="contained">
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.oneOf(TASK_STATUSES),
};

export default Task;
