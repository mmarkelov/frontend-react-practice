import { useState } from "react";
import { format } from "date-fns";
import {
  Button,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Dialog,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { TASK_STATUSES } from "../../const";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "510px",
    background: "white",
    padding: "15px",
    borderRadius: "5px",
    marginRight: "20px",
  },
  item: {
    margin: "0 0 30px 0",
  },
  section: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Form = (props) => {
  const classes = useStyles();
  const { control, reset, handleSubmit } = useForm();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    props.onSubmit(data);
    reset({
      title: "",
      description: "",
      date: format(new Date(), "yyyy-MM-dd"),
      status: TASK_STATUSES[0],
    });
  };

  return (
    <div>
      <div className={classes.section}>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Добавить задачу
        </Button>
      </div>
      <Dialog open={open}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            render={({ field }) => (
              <TextField
                {...field}
                label="Название задачи"
                variant="outlined"
                className={classes.item}
              />
            )}
            rules={{
              required: true,
            }}
            control={control}
            defaultValue=""
          />
          <Controller
            name="description"
            render={({ field }) => (
              <TextField
                {...field}
                multiline
                rows={5}
                label="Описание задачи"
                variant="outlined"
                className={classes.item}
              />
            )}
            control={control}
            defaultValue=""
          />
          <Controller
            name="date"
            render={({ field }) => (
              <TextField
                type="date"
                {...field}
                label="Дата выполнения"
                variant="outlined"
                className={classes.item}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
            rules={{
              required: true,
            }}
            control={control}
            defaultValue={format(new Date(), "yyyy-MM-dd")}
          />
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <RadioGroup
                aria-label="Статус задачи"
                className={classes.item}
                {...field}
              >
                {TASK_STATUSES.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            )}
            defaultValue={TASK_STATUSES[0]}
          />
          <Button type="submit" onClick={handleClose}>
            Добавить задачу
          </Button>
        </form>
      </Dialog>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
