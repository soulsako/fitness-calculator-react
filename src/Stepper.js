import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Selectors from "./Selectors";
import AboutYou from "./AboutYou";
import { arrInitialData } from "./Data";
import get from "lodash/get";
import Finish from './Finish'

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  button: {
    marginRight: "8px",
  },
  button_right: {
    backgroundColor: "#1badb0",
    marginBottom: "10px",
    color: "#fff",
    fontWeight: "bold",
  },
  instructions: {
    padding: '20px'
  },
  container: {
    backgroundColor: "#fff",
    width: "95%",
    margin: "0 auto",
    marginTop: "25px",
    borderRadius: "10px",
  },
  stepper: {
    backgroudColor: "#1badb0",
  },
  card: {
    padding: "15px 30px",
  },
  header: {
    padding: "25px 0 25px 0",
    width: "100%",
    backgroundColor: "#000000",
  },
  title: {
    color: "#ffffff",
  },
  title_primary: {
    color: "#1badb0",
  },
  bottom_buttons: {
    display: "flex",
    flexDirection: 'column',
  },
  completed: {
    backgroundColor: "#1badb0",
  },
  active: {
    backgroundColor: "#1badb0",
  },
});

function getSteps() {
  return ["Goal", "About you", "Activity Level"];
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [arrGlobalState, setGlobalState] = React.useState(() => [
    ...arrInitialData,
  ]);

  const onHandleItemSelect = (strId) => {
    const cloneState = [...arrGlobalState];
    const findSelectedObj = cloneState.find((curr) => curr.id === strId);

    const getOpponents = get(findSelectedObj, "arrOpponents", []);
    const index = cloneState.findIndex((currObj) => currObj.id === strId);

    const finalGlobalState = cloneState.map((curr) => {
      if (getOpponents.includes(curr.id)) {
        return {
          ...curr,
          bIsSelected: false,
        };
      }

      return curr;
    });

    findSelectedObj.bIsSelected = !findSelectedObj.bIsSelected;

    finalGlobalState[index] = findSelectedObj;

    setGlobalState(finalGlobalState);
  };

  const onSliderHandler = (value, strId) => {
    const cloneState = [...arrGlobalState];
    const findSelectedObj = cloneState.find((curr) => curr.id === strId);
    const index = cloneState.findIndex((currObj) => currObj.id === strId);

    findSelectedObj.intValue = +value;
    cloneState[index] = findSelectedObj;
    setGlobalState(cloneState);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Selectors
            activeStep={step}
            modelValues={[
              ...arrGlobalState.filter((curr, index) => {
                return (
                  curr.id === "lose_fat" ||
                  curr.id === "get_muscle" ||
                  curr.id === "maintain_weight"
                );
              }),
            ]}
            onChange={(strId) => onHandleItemSelect(strId)}
          />
        );
      case 1:
        return (
          <AboutYou
            activeStep={step}
            modelButtons={[
              ...arrGlobalState.filter((curr, index) => {
                return (
                  curr.id === "male" ||
                  curr.id === "female" ||
                  curr.id === "metric" ||
                  curr.id === "imperial"
                );
              }),
            ]}
            onChangeSlider={(event, strId) => onSliderHandler(event, strId)}
            onChangeButton={(strId) => onHandleItemSelect(strId)}
            arrGlobalState={arrGlobalState}
          />
        );
      case 2:
        return (
          <Selectors
          activeStep={step}
          modelValues={[
            ...arrGlobalState.filter((curr, index) => {
              return (
                curr.id === "sedentary" ||
                curr.id === "lightly_active" ||
                curr.id === "moderately_active" ||
                curr.id === "very_active"
              );
            }),
          ]}
          onChange={(strId) => onHandleItemSelect(strId)}
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
  };

  return (
    <Grid className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            className={classes.title_primary}
          >
            Macro Calculator
          </Typography>
          <Typography variant="body2" align="center" className={classes.title}>
            Based on the Harris Benedict formula
          </Typography>
        </div>
        <Stepper
          activeStep={activeStep}
          classes={{ root: { backgroundColor: "red" } }}
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
          <Finish globalState={arrGlobalState} activeStep={activeStep} handleReset={handleReset} />
        ) : (
          <div className={classes.card}>
            {getStepContent(activeStep)}
            <div className={classes.bottom_buttons}>
              <Button
                variant="contained"
                onClick={handleNext}
                className={classes.button_right}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </Grid>
  );
}
