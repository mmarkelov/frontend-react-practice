import {useState} from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {Tabs, Tab, AppBar, makeStyles} from "@material-ui/core";
import SignInForm from '../SignInForm';
import LogInButton from '../LogInButton';

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

const Header = ({onSubmitUser, name}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const [open, setOpen] = useState(false);

  const handleClickClose = () => {
    setOpen(false);
  }

  const classes = useStyles();

  return (
      <>
        <AppBar className={classes.header} position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab component={Link} label="Главная" to="/"/>
            <Tab component={Link} label="Задачи" to="/tasks"/>
            <Tab component={Link} label="Статистика" to="/statistics" />
          </Tabs>
          <LogInButton setOpen={setOpen} name={name}/>
        </AppBar>
        <SignInForm open={open} handleClickClose={handleClickClose} onSubmitUser={onSubmitUser}/>
      </>
  )
}

Header.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  name: PropTypes.string,
}

export default Header;
