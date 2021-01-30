import React from 'react';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import { useStyles } from './style';
import Button from '../Button';
import cloneDeep from 'lodash/cloneDeep';
import Slider from '../Slider';

const AboutYou = ({
  arrItemsOne,
  arrItemsTwo,
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
      if (strItemId === 'imperial') {
        cloneModelCalculator.height = Math.round((cloneModelCalculator.height / 2.54));
        cloneModelCalculator.weight = Math.round((cloneModelCalculator.weight * 2.20462));
      } else {
        if (cloneModelCalculator.measure === 'imperial') {
          cloneModelCalculator.height = Math.round((cloneModelCalculator.height * 2.54));
          cloneModelCalculator.weight = Math.round((cloneModelCalculator.weight / 2.20462));
        }
      }
      cloneModelCalculator.measure = strItemId;
    }
    onChange(cloneModelCalculator);
  }

  const bIsImperial = Object.values(modelCalculator).includes('imperial');
  const { height, weight, age } = modelCalculator;

  return (
    <>
      <div className={classes.container_buttons}>
        {arrItemsOne.map((objItem, index) => (
          <Button
            strId={objItem.id}
            onClick={onChangeItemHandler}
            bIsSelected={Object.values(modelCalculator).includes(objItem.id)}
            intIndex={index}
            nodeIconOne={faMale}
            nodeIconTwo={faFemale}
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
            intValue={Number(age)}
            intMin={0}
            intMax={100}
          />
          <Slider
            onChangeSliderHandler={onChangeSliderHandler}
            strLabel="Height"
            strId="height"
            intValue={height}
            intMin={0}
            intMax={bIsImperial ? Math.round((320 / 2.54)) : 320}
            strMeasurment={bIsImperial ? 'inches' : 'cm'}
          />
          <Slider
            onChangeSliderHandler={onChangeSliderHandler}
            strLabel="Weight"
            strId="weight"
            intValue={weight}
            intMin={0}
            intMax={bIsImperial ? Math.round((250 * 2.20462)) : 250}
            strMeasurment={bIsImperial ? 'lbs' : 'Kg'}
          />
      </div>
    </>
  );
}

export default AboutYou;