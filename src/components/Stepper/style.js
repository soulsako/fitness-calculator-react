import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "600px",
    backgroundColor: "#111111",
    maxWidth: '100%',
    margin: '0 auto',
    marginTop: '45px',
    boxShadow: '1px 2px 10px rgba(27, 173, 176, .3)',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#000000',
      boxShadow: 'none'
    }
  },
  root_stepper: {
    backgroundColor: "#111111",
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#000000'
    }
  },
  button: {
    marginRight: "8px",
    color: '#ffffff'
  },
  instructions: {
    padding: "20px",
  },
  container: {
    backgroundColor: "#111111",
    width: "95%",
    margin: "0 auto",
    marginTop: "25px",
    borderRadius: "10px",
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#000000'
    }
  },
  card: {
    padding: "0px 40px 60px 40px",
    backgroundColor: "#111111",
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#000000',
      padding: "0px 20px 30px 20px",
    },
  },
  bottom_buttons: {
    display: "flex",
    flexDirection: "column",
    marginTop: "45px",
  },
  step_label: {
    color: "#ffffff",
    '&.MuiStepLabel-active': {
      color: '#ffffff'
    },
    '&.MuiStepLabel-completed': {
      color: '#ffffff',
    }
  },
}));

export default useStyles;
