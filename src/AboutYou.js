import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  container_buttons: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  button: {
    border: '2px solid #ddd',
    display: 'flex',
    padding: '15px 20px',
    justifyContent: 'flex-start',
    borderRadius: '10px',
    width: 'calc(50% - 20px)',
    margin: '10px'
  },
  slider_container: {
    padding: '0 20px',
    marginBottom: '25px'
  },
  heading: {
    fontWeight: 'bold'
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
    textTransform: 'capitalize'
  },
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
  },
  age_first: {
    marginTop: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: 'auto',
  },
}));

const PrettoSlider = withStyles({
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

const Selectors = ({
  arrGlobalState,
  onChangeButton,
  modelButtons,
  onChangeSlider,
  activeStep,
}) => {
  const classes = useStyles();
 
  const onChangeHandler = (value, strId) => onChangeSlider(value, strId);

  return (
    <>
      <Typography className={classes.heading}>{
      activeStep === 0 ? "I would like to..." :
      activeStep === 2 ? "My activiy level is..." :
      ""}
      </Typography>
        <div className={classes.container_buttons}>
          {modelButtons.map((objGoal, index) => (
              <Button key={objGoal.id}
                className={classes.button}
                variant="contained"
                onClick={() => onChangeButton(objGoal.id)}
                style={{
                  backgroundColor: objGoal.bIsSelected ? '#1badb0' : '#fff',
                  color: objGoal.bIsSelected ? '#ffffff' : '#000000',
                }}
              >
                {index === 0 && (
                <FontAwesomeIcon icon={faMale} className={classnames({
                    [classes.icon]: true,
                    [classes.icon_selected]: objGoal.bIsSelected,
                  })}
                />)}
                {index === 1 && (
                <FontAwesomeIcon icon={faFemale} className={classnames({
                    [classes.icon]: true,
                    [classes.icon_selected]: objGoal.bIsSelected,
                  })}
                />)}
                <div className={classes.text_container}>
                  <p className={classes.title}>{objGoal.strTitle}</p>
                </div>
              </Button>
          ))},
        </div>
        <div className={classes.slider_container}>
            {[...arrGlobalState.filter((curr, index) => {
                return (
                  curr.id === 'age' ||
                  curr.id === 'height' ||
                  curr.id === 'weight'
                )
              })].map((slider => (
              <>
                <div className={classes.slider_text}>
                <Typography gutterBottom className={classes.age_first}>{slider.strLabel}</Typography>
                  <Typography gutterBottom className={classes.age}>
                    {slider.intValue} {slider.id === 'height' ? 'cm' : slider.id === 'weight' ? 'kg' : ''}
                  </Typography>
                </div>
                  <PrettoSlider
                    min={slider.min}
                    max={slider.max}
                    aria-label="pretto slider"
                    defaultValue={0}
                    onChange={(event, value) => onChangeHandler(value, slider.id)}
                    value={slider.intValue}
                  />
              </>
            )))}
        </div>
    </>
  );
}

export default Selectors;