import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    border: '2px solid #ddd',
    display: 'flex',
    padding: '15px 20px',
    justifyContent: 'flex-start',
    borderRadius: '10px',
    width: 'calc(50% - 20px)',
    margin: '10px'
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
});

export default useStyles;