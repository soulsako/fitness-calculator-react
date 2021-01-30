import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    width: '100%',
    border: '2px solid #ddd',
    display: 'flex',
    padding: '15px 20px',
    justifyContent: 'flex-start',
    marginBottom: '15px',
    borderRadius: '10px',
  },
  heading: {
    padding: '20px 0 10px 0',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  icon: {
    fontSize: '35px',
    color: '#1badb0',
    marginRight: '25px',
  },
  icon_selected: {
    color: '#ffffff',
  },
  text_container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontsize: '10px',
    margin: 0,
    alignSelf: 'flex-start',
    textTransform: 'capitalize'
  },
  subTitle: {
    fontSize: '12px',
    margin: 0,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
    fontWeight: 100,
  },
});

export default useStyles;