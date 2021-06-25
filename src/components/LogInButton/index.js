import {Button, makeStyles} from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
	button: {
		margin: "5px"
	}
});

const LogInButton = ({name, setOpen}) => {
	const classes = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	}

	return name ? <h3>{name}</h3> :
		<Button onClick={handleClickOpen} className={classes.button} variant="contained" color="secondary">
			Зарегистрироваться
		</Button>

}

LogInButton.propTypes = {
	name: PropTypes.string,
	setOpen: PropTypes.func.isRequired
}

export default LogInButton;
