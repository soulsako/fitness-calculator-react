import React, { useState, useRef, useLayoutEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Selectors from "../Selectors";
import AboutYou from "../AboutYou";
import Finish from '../Finish'
import useStyles from './style';
import getSteps from '../../Constants';
import ModelCalculator from '../../Models/ModelCalculator';
import Heading from '../Heading';
import {
  arrPageOneItems,
  arrPageTwoItemsGender,
  arrPageTwoItemsMeasure,
  arrPageThreeItems
} from '../../Data';

const StepperComponent = () => {
  const fieldRef = useRef(null);
  const classes = useStyles();
  const steps = getSteps();

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [modelCalculator, setCalculator] = useState(ModelCalculator.getInstance());

  useLayoutEffect(() => {
    if (fieldRef.current) {
      fieldRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  });

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Selectors
            intActiveStep={step}
            modelCalculator={modelCalculator}
            onChange={(modelCalculator) => setCalculator(modelCalculator)}
            arrItems={arrPageOneItems}
          />
        );
      case 1:
        return (
          <AboutYou
            intActiveStep={step}
            modelCalculator={modelCalculator}
            onChange={(modelCalculator) => setCalculator(modelCalculator)}
            arrItemsOne={arrPageTwoItemsGender}
            arrItemsTwo={arrPageTwoItemsMeasure}
          />
        );
      case 2:
        return (
          <Selectors
            activeStep={step}
            modelCalculator={modelCalculator}
            onChange={(modelCalculator) => setCalculator(modelCalculator)}
            arrItems={arrPageThreeItems}
          />
      ); 
      default:
        return "Unknown step";
    }
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCalculator(ModelCalculator.getInstance());
  };

  return (
    <Grid className={classes.root}>
      <div className={classes.container}>
        <Heading />
        <Stepper
          activeStep={activeStep}
          alternativeLabel={true}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <Finish
            modelCalculator={modelCalculator}
            intActiveStep={activeStep}
            handleReset={handleReset}
          />
        ) : (
          <div className={classes.card} ref={fieldRef}>
            {getStepContent(activeStep)}
            <div className={classes.bottom_buttons}>
              <Button
                variant="contained"
                onClick={handleNext}
                className={classes.button_right}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
              {activeStep > 0 && <Button
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>}
            </div>
          </div>
        )}
      </div>
    </Grid>
  );
}

export default StepperComponent;
