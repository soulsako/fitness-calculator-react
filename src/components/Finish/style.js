
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card_container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px'
  },
  card_container_left: {
    backgroundColor: '#D1EEEF',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 40px',
    marginRight: '15px',
    alignItems: 'center'
  },
  card_container_right: {
    backgroundColor: '#D1EEEF',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 40px',
    alignItems: 'center'
  },
  icon_text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5px'
  },
  icons: {
    fontSize: '14px',
    color: 'red',
    marginRight: '8px'
  },
  card_text: {
    fontSize: '10px',
  },
  calories: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1badb0'
  },
  explanation: {
    color: '#ffffff',
    marginTop: '45px'
  },
  instructions: {
    paddingBottom: '15px',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '15px',
    color: '#ffffff'
  },
  card: {
    padding: '0px 15px',
    textAlign: 'center',
  },
  button: {
    marginRight: "8px",
    display: 'block',
    width: '100%',
    color: '#ffffff',
    marginBottom: '25px',
  },
  button_right: {
    backgroundColor: "#1badb0",
    marginBottom: "10px",
    color: "#fff",
    fontWeight: "bold",
    width: '100%',
    display: 'block',
    marginTop: '25px'
  },
  detailed_results_button: {
    fontSize: '14px',
    marginBottom: '30px',
    color: '#ffffff',
    backgroundColor: '#1badb0',
    padding: '15px 25px',
    borderRadius: '5px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '40px'
  },
}));

export default useStyles;