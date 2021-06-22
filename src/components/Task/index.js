import {Button, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles( {
    card: {
        height: "200px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        border: "5px solid #c2e59c",
        marginBottom: "10px"
    },
    typography: {
        textAlign: "center"
    }
})
// eslint-disable-next-line react/prop-types
const Task = ({title, description, date, status}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography className={classes.typography} gutterBottom component="h6">
                        {title}
                    </Typography>
                    <Typography className={classes.typography} gutterBottom component="p">
                        {description}
                    </Typography>
                    <Typography className={classes.typography} gutterBottom component="p">
                        {date}
                    </Typography>
                    <Typography className={classes.typography} gutterBottom component="p">
                        {status}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant="contained">
                    Выполнено
                </Button>
                <Button size="small" color="primary" variant="contained">
                    Удалить
                </Button>
            </CardActions>
        </Card>
    )
}

export default Task;