
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
  instructions: {
    paddingBottom: '15px',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '15px'
  },
  card: {
    padding: '0px 15px'
  },
  checkbox_container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px'
  },
  terms: {
    fontSize: '10px'
  },
  input: {
    width: '100%',
    height: '30px',
    paddingLeft: '10px'
  },
  button: {
    marginRight: "8px",
    display: 'block',
    width: '100%',
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
  email_text: {
    fontSize: '14px',
    marginBottom: '30px'
  }
});

export default useStyles;