import React from 'react';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import { useStyles } from './style';
import Button from '../Button';
import cloneDeep from 'lodash/cloneDeep';
import Slider from '../Slider';

const AboutYou = ({
  arrItemsOne,
  arrItemsTwo,
  intActiveStep,
  modelCalculator,
  onChange,
}) => {
  const classes = useStyles();

  const onChangeSliderHandler = (intValue, strSliderId) => {
    const cloneModelCalculator = cloneDeep(modelCalculator);
    cloneModelCalculator[strSliderId] = intValue;

    onChange(cloneModelCalculator);
  }

  const onChangeItemHandler = (strItemId) => {
    const cloneModelCalculator = cloneDeep(modelCalculator);
    if (arrItemsOne.map(objItem => objItem.id).includes(strItemId)) {
      cloneModelCalculator.gender = strItemId;
    } else {
      cloneModelCalculator.measure = strItemId;
    }
    onChange(cloneModelCalculator);
  }

  return (
    <>
      <div className={classes.container_buttons}>
        {arrItemsOne.map((objItem, index) => (
          <Button
            strId={objItem.id}
            onClick={onChangeItemHandler}
            bIsSelected={Object.values(modelCalculator).includes(objItem.id)}
            intIndex={index}
            nodeIconOne={faFemale}
            nodeIconTwo={faMale}
            strTitle={objItem.strTitle}
          />
        ))}
      </div>
      <div className={classes.container_buttons}>
        {arrItemsTwo.map((objItem, index) => (
          <Button
            strId={objItem.id}
            onClick={onChangeItemHandler}
            bIsSelected={Object.values(modelCalculator).includes(objItem.id)}
            intIndex={index}
            strTitle={objItem.strTitle}
          />
        ))}
      </div>
      <div className={classes.slider_container}>
          <Slider
            onChangeSliderHandler={onChangeSliderHandler}
            strLabel="Age"
            strId="age"
            intValue={Number(modelCalculator.age)}
            intMin={0}
            intMax={100}
          />
          <Slider
            onChangeSliderHandler={onChangeSliderHandler}
            strLabel="Height"
            strId="height"
            intValue={Number(modelCalculator.height)}
            intMin={0}
            intMax={320}
            strMeasurment="cm"
          />
          <Slider
            onChangeSliderHandler={onChangeSliderHandler}
            strLabel="Weight"
            strId="weight"
            intValue={Number(modelCalculator.weight)}
            intMin={0}
            intMax={250}
            strMeasurment="Kg"
          />
      </div>
    </>
  );
}

export default AboutYou;