import {useState} from "react";
import {
    Tabs,
    Tab,
    AppBar,
    Button,
    // Box,
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions, Box
} from "@material-ui/core";

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
    },
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
        <>
            <AppBar className={classes.header} position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Главная"/>
                    <Tab label="Задачи"/>
                    <Tab label="Статистика"/>
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
            <Dialog open={open} aria-labelledby="form-title">
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
        </>
    )
}

export default Header;