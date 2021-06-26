import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";

const useStyles = makeStyles({
  diagramTextField: {
    width: "400px",
  },
  diagramContentText: {
    marginTop: "20px",
  },
  diagramActions: {
    marginTop: "20px",
    padding: "20px",
  },
});

const SignInForm = (props) => {
  const classes = useStyles();
  const { control, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    props.onSubmitUser(data);
    localStorage.setItem("User", JSON.stringify(data));
    reset({
      login: "",
      name: "",
    });
  };

  return (
    <Dialog open={props.open} aria-labelledby="form-title">
      <DialogTitle id="form-title">Регистрация</DialogTitle>
      <DialogContent>
        <DialogContentText>Введите логин</DialogContentText>
        <Controller
          name="login"
          render={({ field }) => (
            <TextField
              {...field}
              className={classes.diagramTextField}
              label="Ваш логин..."
              variant="outlined"
            />
          )}
          rules={{
            required: true,
          }}
          control={control}
          defaultValue=""
        />
        <DialogContentText className={classes.diagramContentText}>
          Введите имя
        </DialogContentText>
        <Controller
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              className={classes.diagramTextField}
              label="Ваше имя..."
              variant="outlined"
            />
          )}
          control={control}
          defaultValue=""
        />
      </DialogContent>
      <DialogActions className={classes.diagramActions}>
        <Button
          onClick={props.handleClickClose}
          variant="contained"
          color="secondary"
        >
          Закрыть
        </Button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Button
            type="submit"
            onClick={props.handleClickClose}
            variant="contained"
            color="secondary"
          >
            Зарегистрироваться
          </Button>
        </form>
      </DialogActions>
    </Dialog>
  );
};

SignInForm.propTypes = {
  handleClickClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  onSubmitUser: PropTypes.func.isRequired,
};

export default SignInForm;
