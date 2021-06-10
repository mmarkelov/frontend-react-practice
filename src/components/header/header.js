import React from "react";
import {
    Tabs,
    Tab,
    AppBar,
    Button,
    Box,
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions
} from "@material-ui/core";

const useStyles = makeStyles({
    header: {
        padding: "5px",
        background: "none",
        borderBottom: "1px solid white",
        boxShadow: "none"
    },
    boxHeader: {
        width: "70vw",
        margin: "auto"
    },
    button: {
        marginRight: "10px"
    },
    boxButtons: {
        padding: "5px",
        display: "flex",
        justify: "flex-end",
        alignContent: "center"
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
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
    }
    const classes = useStyles();
    return (
        <AppBar className={classes.header}>
            <Box className={classes.boxHeader} display="flex" justifyContent="space-between">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Главная"/>
                    <Tab label="Задачи"/>
                    <Tab label="Статистика"/>
                </Tabs>
                <Box className={classes.boxButtons}>
                    <Button className={classes.button} variant="contained" color="secondary">
                        Войти
                    </Button>
                    <Button onClick={handleClickOpen} variant="contained" color="secondary">
                        Зарегистрироваться
                    </Button>
                </Box>
            </Box>
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
        </AppBar>
    )
}

export default Header;