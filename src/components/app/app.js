import Header from "../header";
import Form from "../form";
import "./app.css";
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "70vw",
        margin: "auto"
    }
});

const App = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Header/>
            <Form/>
        </Box>
    )
}

export default App;