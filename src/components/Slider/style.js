import Slider from '@material-ui/core/Slider';
import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  age: {
    marginTop: '20px',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  slider_text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    color: '#ffffff'
  },
  age_first: {
    marginTop: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: 'auto',
  },
}));

export const PrettoSlider = withStyles({
  root: {
    color: '#1badb0',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  }
})(Slider);