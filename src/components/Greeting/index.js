import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles( {
	title: {
		color: "#FFFFFF"
	}
})

const Greeting = ({name}) => {
	const classes = useStyles();

	const greetingUser = <><h2 className={classes.title}>Привет, {name}</h2>
		<h3 className={classes.title}>Твои задачи на сегодня</h3></>
	const greetingNewUser = <h2 className={classes.title}>Зарегистрируйтесь, чтобы создавать новые задачи
		и отслеживать свои достижения</h2>

	return name ? greetingUser : greetingNewUser
}

export default Greeting;
