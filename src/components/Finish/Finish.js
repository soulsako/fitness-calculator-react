import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { faFire, faDna } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './style';

const Finish  = ({
  modelCalculator,
  intActiveStep,
  handleReset
}) => {
  const classes = useStyles();
  const [bEmailChecked, setChecked] = useState(false);
  const [caloriesTarget, setCaloriesTarget] = useState(0);
  const [proteinTarget, setProtienTarget] = useState(0);

  useEffect(() => {
    // Calculate here...
  },[]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.card}>
      <Typography variant="h6" className={classes.instructions}>
        Your Protein & Calories
      </Typography>
      <div className={classes.card_container}>
        <div className={classes.card_container_left}>
          <div className={classes.icon_text}>
          <FontAwesomeIcon icon={faFire} className={classes.icons} />
            <div className={classes.card_text}>Calories Target</div>
          </div>
          <div className={classes.calories}>{caloriesTarget}</div>
        </div>
        <div className={classes.card_container_right}>
          <div className={classes.icon_text}>
          <FontAwesomeIcon icon={faDna} className={classes.icons} />
            <div className={classes.card_text}>Protein Target</div>
          </div>
          <div className={classes.calories}>174g</div>
        </div>
      </div>
      <p className={classes.email_text}>Enter your best email address below and we'll email you my explanation and keep you in the loop by subscribing you to our famous motivating email list.</p>
      <input className={classes.input} type="text" placeholder="Enter your email..."/>
      <div className={classes.checkbox_container}>
        <Checkbox checked={bEmailChecked} onChange={handleChange} />
        <p className={classes.terms}>Please tick the box to confirm that you would like to receive the macro break down email and subscribe to the email list.</p>
      </div>
      <Button onClick={() => {}} className={classes.button_right}>
        Send
      </Button>
      <Button onClick={handleReset} className={classes.button}>
        Reset
      </Button>
    </div>
  );
}

export default Finish;