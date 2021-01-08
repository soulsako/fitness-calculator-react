import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { faWeight, faDumbbell, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import useStyles from './style';
import { arrPageOneItems } from '../../Data';

const Selectors = ({
  modelCalculator,
  onChange,
  intActiveStep,
  arrItems,
}) => {
  const classes = useStyles();
  const [objSelectedItems, setSelectedItems] = useState({ goal: 'lose_fat', level: 'sedentary' });

  const onChangeItemHandler = (strItemId) => {
    if (arrPageOneItems.map(objItem => objItem.id).includes(strItemId)) {
      setSelectedItems((prevState => ({ ...prevState, goal: strItemId})));
      modelCalculator.goal = strItemId;
    } else {
      setSelectedItems((prevState => ({ ...prevState, level: strItemId})));
      modelCalculator.level = strItemId;
    }
    onChange(modelCalculator);
  }

  return (
    <Grid item xs={12}>
      <Grid container>
      <Typography className={classes.heading}>{intActiveStep === 0 ? "I would like to..." : "My activiy level is..."}</Typography>
      <div className={classes.container}>
        {arrItems.map((objItem, index) => (
            <Button key={objItem.id}
              className={classes.button}
              variant="contained"
              onClick={() => onChangeItemHandler(objItem.id)}
              style={{
                backgroundColor: Object.values(objSelectedItems).includes(objItem.id) ? '#1badb0' : '#fff',
                color: Object.values(objSelectedItems).includes(objItem.id) ? '#ffffff' : '#000000',
              }}
            >
              {index === 0 && objItem.nodeIcon && (
              <FontAwesomeIcon icon={faWeight} className={classnames({
                  [classes.icon]: true,
                  [classes.icon_selected]: Object.values(objSelectedItems).includes(objItem.id),
                })}
              />)}
              {index === 1 && objItem.nodeIcon && (
              <FontAwesomeIcon icon={faDumbbell} className={classnames({
                  [classes.icon]: true,
                  [classes.icon_selected]: Object.values(objSelectedItems).includes(objItem.id),
                })}
              />)}
              {index === 2 && objItem.nodeIcon && (
              <FontAwesomeIcon icon={faUtensils} className={classnames({
                  [classes.icon]: true,
                  [classes.icon_selected]: Object.values(objSelectedItems).includes(objItem.id),
                })}
              />)}
              <div className={classes.text_container}>
                <p className={classes.title}>{objItem.strTitle}</p>
                <p className={classes.subTitle}>{objItem.strSubtitle}</p>
              </div>
            </Button>
        ))}
      </div>
      </Grid>
    </Grid>
  );
}

export default Selectors;