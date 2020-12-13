import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { faWeight, faDumbbell, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
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
    textTransform: 'capitalize',
    fontWeight: 100,
  },
}));

const Selectors = ({
  strTitle,
  onChange,
  modelValues,
  activeStep,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container>
      <Typography className={classes.heading}>{activeStep === 0 ? "I would like to..." : "My activiy level is..."}</Typography>
      <div className={classes.container}>
        {modelValues.map((objGoal, index) => (
            <Button key={objGoal.id}
              className={classes.button}
              variant="contained"
              onClick={() => onChange(objGoal.id)}
              style={{
                backgroundColor: objGoal.bIsSelected ? '#1badb0' : '#fff',
                color: objGoal.bIsSelected ? '#ffffff' : '#000000'
              }}
            >
              {index === 0 && objGoal.nodeIcon && (
              <FontAwesomeIcon icon={faWeight} className={classnames({
                  [classes.icon]: true,
                  [classes.icon_selected]: objGoal.bIsSelected,
                })}
              />)}
              {index === 1 && objGoal.nodeIcon && (
              <FontAwesomeIcon icon={faDumbbell} className={classnames({
                  [classes.icon]: true,
                  [classes.icon_selected]: objGoal.bIsSelected,
                })}
                transform={{ rotate: 42 }}
              />)}
              {index === 2 && objGoal.nodeIcon && (
              <FontAwesomeIcon icon={faUtensils} className={classnames({
                  [classes.icon]: true,
                  [classes.icon_selected]: objGoal.bIsSelected,
                })}
              />)}
              <div className={classes.text_container}>
                <p className={classes.title}>{objGoal.strTitle}</p>
                <p className={classes.subTitle}>{objGoal.strSubtitle}</p>
              </div>
            </Button>
        ))},
      </div>
      </Grid>
    </Grid>
  );
}

export default Selectors;