import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2">
      {"blabla © blablabla "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    color: "white"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <footer>
        <Container maxWidth="sm">
          <Typography variant="body1">ToDoList</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer
