import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle, makeStyles,
	TextField
} from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
	diagramTextField: {
		width: "400px",
	},
	diagramContentText: {
		marginTop: "20px"
	},
	diagramActions: {
		marginTop: "20px",
		padding: "20px"
	}
});

const SignInForm = ({handleClickClose, open}) => {
	const classes = useStyles();

	return <Dialog open={open} aria-labelledby="form-title">
		<DialogTitle id="form-title">Регистрация</DialogTitle>
		<DialogContent>
			<DialogContentText>Введите логин</DialogContentText>
			<TextField className={classes.diagramTextField} label="Ваш логин..." variant="outlined" />
			<DialogContentText className={classes.diagramContentText}>Введите имя</DialogContentText>
			<TextField className={classes.diagramTextField} label="Ваше имя..." variant="outlined" />
		</DialogContent>
		<DialogActions className={classes.diagramActions}>
			<Button onClick={handleClickClose} variant="contained" color="secondary">Зарегистрироваться</Button>
			<Button onClick={handleClickClose} variant="contained" color="secondary">Закрыть</Button>
		</DialogActions>
	</Dialog>
}

SignInForm.propTypes = {
	handleClickClose: PropTypes.func.isRequired,
	open: PropTypes.bool
}

export default SignInForm
