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

/*  const findTask = (k) => {
    let myArray = localStorage.getItem("Tasks");
    myArray.find(x => x.id === k);

  }*/

const Task = ({ title, description, date, status }) => {
  const classes = useStyles();
  const dateObj = parse(date, "yyyy-MM-dd", new Date());

    const deleteTask = (id) => {
        let allTasks = JSON.parse(localStorage["Tasks"])
        const updatedTasks = allTasks.filter((task) => task.id !== id)
        localStorage.setItem("Tasks", updatedTasks)
    }
    let completed = []
    const completeTask = (id) => {
        let allTasks = JSON.parse(localStorage["Tasks"])
        const updatedTask = allTasks.filter((task) => task.id === id)
        updatedTask.status = TASK_STATUSES[1]
        completed.push(updatedTask)
        localStorage.setItem("CompletedTasks", JSON.stringify(completed))
    }

    /*const onSubmit = (data) => {

        props.onSubmit(data);
        reset({
            title: "",
            description: "",
            date: format(new Date(), 'yyyy-MM-dd'),
            status: TASK_STATUSES[0]
        })
    }*/

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
        <Button
            size="small"
            color="primary"
            variant="contained"
            onSubmit={deleteTask(2)}
        >
          Выполнено
        </Button>
        <Button
            size="small"
            color="primary"
            variant="contained"
            onSubmit={completeTask(3)}
        >
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
