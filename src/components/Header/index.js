import {useState} from "react";
import {BrowserRouter, NavLink} from 'react-router-dom';
import {
  Tabs,
  Tab,
  AppBar,
  Box,
  Button,
  makeStyles
} from "@material-ui/core";
import SignInForm from '../SignInForm';

const useStyles = makeStyles({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 10px 0 10px",
    background: "none",
    boxShadow: "none",
    marginBottom: "30px"
  },
  button: {
    margin: "5px"
  }
});

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClickClose = () => {
    setOpen(false);
  }

  const classes = useStyles();

  return (
      <BrowserRouter>
        <AppBar className={classes.header} position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab component={NavLink} label="Главная" to="/"/>
            <Tab component={NavLink} label="Задачи" to="/tasks"/>
            <Tab component={NavLink} label="Статистика" to="/statistics" />
          </Tabs>
          <Box>
            <Button className={classes.button} variant="contained" color="secondary">
              Войти
            </Button>
            <Button className={classes.button} onClick={handleClickOpen} variant="contained" color="secondary">
              Зарегистрироваться
            </Button>
          </Box>
        </AppBar>
        <SignInForm open={open} handleClickClose={handleClickClose}/>
      </BrowserRouter>
  )
}

export default Header;
