import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  header: {
    width: "100%",
    margin: '55px 0 20px 0',
  },
  title_primary: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '45px'
    }
  },
}));

export default useStyles;