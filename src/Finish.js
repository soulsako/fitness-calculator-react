import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from "@material-ui/core/styles";
import { faFire, faDna } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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


const Finish  = ({
  globalState,
  activeStep,
  handleReset
}) => {

  const classes = useStyles();
  const [bEmailChecked, setChecked] = useState(false);
  const [caloriesTarget, setCaloriesTarget] = useState(null);
  const [proteinTarget, setProtienTarget] = useState(null);

  useEffect(() => {

    let finalCaloriesGoal = 0;

    const getGenderValue = globalState.filter(curr => {
      return (
        (curr.id === 'female' && curr.bIsSelected === true) ||
        (curr.id === 'male' && curr.bIsSelected === true)
      )
    });
    // console.log("genderValue", getGenderValue);
    const arrMetricIds = ['height', 'weight', 'age'];
    const getmetrics = globalState.filter(curr => arrMetricIds.includes(curr.id));
  
    const reduceToObject = getmetrics.reduce((accum, curr) => {
      return {
        ...accum,
        [curr.id]: {
          ...curr
        }
      }
    }, {});

   console.log("reduceToObject", reduceToObject);
    if (getGenderValue[0].id === 'male') {
      finalCaloriesGoal = (reduceToObject['weight'].intValue * 10) + (reduceToObject['height'].intValue * 6.25) - (reduceToObject['age'].intValue * 5) + 5;
    } else if (getGenderValue[0].id === 'female') {
      finalCaloriesGoal = (reduceToObject['weight'].intValue * 10) + (reduceToObject['height'].intValue * 6.25) - (reduceToObject['age'].intValue * 5) - 161;
    }

    // console.log("finalCaloriesGoal", finalCaloriesGoal);

    const arrAcitivityLevels = ['sedentary', 'lightly_active', 'moderatly_active', 'very_active'];

    const getActivityLevel = globalState.filter(curr => arrAcitivityLevels.includes(curr.id) && curr.bIsSelected === true);

    getActivityLevel.forEach(({ id }) => {
      switch (id) {
        case 'sedentary':
          finalCaloriesGoal = finalCaloriesGoal * 1.2;
        break;
          case 'lightly_active':
          finalCaloriesGoal = finalCaloriesGoal * 1.4;
        break;
          case 'moderatly_active':
          finalCaloriesGoal = finalCaloriesGoal * 1.6;
        break;
          case 'very_active':
          finalCaloriesGoal = finalCaloriesGoal * 1.8;
        break;
          default:
            return finalCaloriesGoal;
      }
    });


    const arrGoals = ['lose_fat', 'get_muscle', 'maintain_weight'];

    const getGoals =  globalState.filter(curr => arrGoals.includes(curr.id) && curr.bIsSelected === true);

    getGoals.forEach(({ id }) => {
      switch (id) {
        case 'lose_fat':
          finalCaloriesGoal = finalCaloriesGoal - ((15 /100) * finalCaloriesGoal);
        break;
          case 'get_muscle':
            finalCaloriesGoal = finalCaloriesGoal + ((15 /100) * finalCaloriesGoal);
        break;
          default:
            return finalCaloriesGoal;
      }
    });

    setCaloriesTarget(Number(Math.floor(Math.round(finalCaloriesGoal))));
    
  },[globalState]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.card}>
      <Typography variant="h6" className={classes.instructions}>
        Your Protiein & Calories
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
      <p className={classes.email_text}>Enter your best email address below and we'll email you my explanation and keep you in the loop by subscribing you to my famous motivating email list.</p>
      <input className={classes.input} type="text" placeholder="Enter yout email..."/>
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