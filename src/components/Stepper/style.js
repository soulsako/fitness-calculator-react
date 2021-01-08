import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  button: {
    marginRight: "8px",
  },
  button_right: {
    backgroundColor: "#1badb0",
    marginBottom: "10px",
    color: "#fff",
    fontWeight: "bold",
  },
  instructions: {
    padding: '20px'
  },
  container: {
    backgroundColor: "#fff",
    width: "95%",
    margin: "0 auto",
    marginTop: "25px",
    borderRadius: "10px",
  },
  card: {
    padding: '0px 20px 30px 20px'
  },
  bottom_buttons: {
    display: "flex",
    flexDirection: 'column',
  },
});

export default useStyles;