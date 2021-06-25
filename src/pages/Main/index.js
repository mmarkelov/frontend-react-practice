import {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Box} from "@material-ui/core";
import PropTypes from 'prop-types'

import Form from "../../components/Form";
import List from "../../components/List";
import Greeting from "../../components/Greeting";

const useStyles = makeStyles({
    tasks: {
        display: "flex"
    }

});

const Main = ({name}) => {
    const classes = useStyles();
    const [tasks, setTasks] = useState([]);

    const onSubmit = data => {
        const newData = {...data, id: tasks.length + 1} ;
        setTasks([...tasks, newData]);
    }

    return (
        <>
            <Box className={classes.tasks}>
                <Form onSubmit={onSubmit}/>
                <Box>
                    <Greeting name={name}/>
                </Box>
                <List tasks={tasks}/>
            </Box>
        </>
    );
}

Main.propTypes = {
    name: PropTypes.string
}

export default Main;
