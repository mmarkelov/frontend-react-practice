import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        margin: "5px"
    }
});

const LogInButton = (props) => {
    const classes = useStyles();

    const handleClickOpen = () => {
        props.setOpen(true);
    }

    if (props.name) {
        return (
            <Button className={classes.button} variant="contained" color="secondary">
                {props.name}
            </Button>
        )
    } else {
        return (
            <Button onClick={handleClickOpen} className={classes.button} variant="contained" color="secondary">
                Зарегистрироваться
            </Button>
        )
    }
}

export default LogInButton;