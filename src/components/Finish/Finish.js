import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { faFire, faDna } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './style';

 const objLevel = {
  sedentary: 1.2,
  lightly_active: 1.4,
  moderately_active: 1.6,
  very_active: 1.8,
 };

const Finish  = ({
  modelCalculator,
  handleReset
}) => {
  const classes = useStyles();
  const [bEmailChecked, setChecked] = useState(false);
  const [caloriesTarget, setCaloriesTarget] = useState(0);
  const [proteinTarget, setProtienTarget] = useState(0);
 
  useEffect(() => {
    const { age, gender, goal, height, measure, level, weight } = modelCalculator;

    let intCaloriesTarget = 0;
    const strMeasureWeight = measure === 'imperial' ? Math.round((Number(weight) / 2.20462)) : weight;
    const strMeasureHeight = measure === 'imperial' ? Math.round((Number(height) * 2.54)) : height;

    intCaloriesTarget = intCaloriesTarget + (Number(strMeasureWeight) * 10);
    intCaloriesTarget = intCaloriesTarget + (6.25 * Number(strMeasureHeight));
    intCaloriesTarget = intCaloriesTarget - (5 * Number(age));
    intCaloriesTarget = gender === 'male' ? (intCaloriesTarget + 5) : (intCaloriesTarget - 161);

    // Factor in physical activity
    const intLevelValue = objLevel[level];
    intCaloriesTarget = (Math.ceil(intCaloriesTarget) * intLevelValue);

    // Calculate percentage
    const intPercValue = (15 / 100) * intCaloriesTarget;
    // Factor in goal
    if (goal === 'lose_fat') {
      intCaloriesTarget = intCaloriesTarget - intPercValue;
    } else if (goal === 'get_muscle') {
      intCaloriesTarget = intCaloriesTarget + intPercValue;
    }
    setCaloriesTarget(Math.round(intCaloriesTarget));
    setProtienTarget(gender === 'male' ? Math.round(Number(strMeasureWeight) * 1.5) :  Math.round(Number(strMeasureWeight) * 1.2))
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
          <div className={classes.calories}>{proteinTarget}</div>
        </div>
      </div>
      <Button className={classes.detailed_results_button} variant="contained">
        Get Detailed results
      </Button>
      <Button onClick={handleReset} className={classes.button}>
        Reset
      </Button>
    </div>
  );
}

export default Finish;