import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import { useStyles, PrettoSlider } from './style';
import Button from '../Button';

const Selectors = ({
  arrItemsOne,
  arrItemsTwo,
  arrItemsThree,
  intActiveStep,
  modelCalculator,
  onChange,
}) => {
  const classes = useStyles();
  const [objSelectedItems, setSelectedItems] = useState({ gender:'female', measure: 'metric' });

  const onChangeSliderHandler = (intValue, slideId) => {
    modelCalculator[slideId] = intValue;
    onChange(modelCalculator);
  }

  const onChangeItemHandler = (strItemId) => {
    if (arrItemsOne.map(objItem => objItem.id).includes(strItemId)) {
      setSelectedItems(prevState => ({ ...prevState, gender: strItemId }));
      modelCalculator.gender = strItemId;
    } else {
      setSelectedItems(prevState => ({ ...prevState, measure: strItemId }));
      modelCalculator.measure = strItemId;
    }
    onChange(modelCalculator);
  }

  return (
    <>
      <div className={classes.container_buttons}>
        {arrItemsOne.map((objItem, index) => (
          <Button
            strId={objItem.id}
            onClick={onChangeItemHandler}
            bIsSelected={Object.values(objSelectedItems).includes(objItem.id)}
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
            bIsSelected={Object.values(objSelectedItems).includes(objItem.id)}
            intIndex={index}
            strTitle={objItem.strTitle}
          />
        ))}
      </div>
      <div className={classes.slider_container}>
          {arrItemsThree.map((slider => (
            <>
              <div className={classes.slider_text}>
              <Typography gutterBottom className={classes.age_first}>{slider.strLabel}</Typography>
                <Typography gutterBottom className={classes.age}>
                  {slider.id === 'height' ?
                    `${modelCalculator.getHeight()} cm` : slider.id === 'weight' ?
                    `${modelCalculator.getWeight()} kg` :
                    `${modelCalculator.getAge()}`
                  }
                </Typography>
              </div>
                <PrettoSlider
                  min={slider.min}
                  max={slider.max}
                  aria-label="pretto slider"
                  defaultValue={0}
                  onChange={(event, value) => onChangeSliderHandler(value, slider.id)}
                  value={
                    slider.id === 'age' ? modelCalculator.age :
                    slider.id === 'height' ? modelCalculator.height : modelCalculator.weight
                  }
                />
            </>
          )))}
      </div>
    </>
  );
}

export default Selectors;