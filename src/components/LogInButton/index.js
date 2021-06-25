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

    const title = <h3>{props.name}</h3>
    const button = <Button onClick={handleClickOpen} className={classes.button} variant="contained" color="secondary">
        Зарегистрироваться
        </Button>

    return props.name ? title : button;
}

export default LogInButton;