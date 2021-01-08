import React from 'react';
import { useStyles, PrettoSlider } from './style';
import Typography from '@material-ui/core/Typography';

const Slider = ({
  onChangeSliderHandler,
  strLabel,
  strId,
  intValue,
  intMin,
  intMax,
  strMeasurment,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.slider_text}>
      <Typography gutterBottom className={classes.age_first}>{strLabel}</Typography>
        <Typography gutterBottom className={classes.age}>
          {intValue} {strMeasurment || ''}
        </Typography>
      </div>
        <PrettoSlider
          min={intMin}
          max={intMax}
          aria-label="pretto slider"
          onChange={(event, value) => onChangeSliderHandler(value, strId)}
          value={intValue}
        />
    </>
  );
};

export default Slider;