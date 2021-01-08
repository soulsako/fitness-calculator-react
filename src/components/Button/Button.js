import React from 'react';
import useStyles from './style';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';

const ButtonComponent = ({
  strId,
  onClick,
  bIsSelected,
  intIndex,
  nodeIconOne,
  nodeIconTwo,
  strTitle
}) => {
  const classes = useStyles();
  return (
    <Button
      key={strId}
      className={classes.button}
      variant="contained"
      onClick={() => onClick(strId)}
      style={{
        backgroundColor: bIsSelected ? '#1badb0' : '#fff',
        color: bIsSelected ? '#ffffff' : '#000000',
      }}
    >
    {intIndex === 0 && (
    <FontAwesomeIcon icon={nodeIconOne} className={classnames({
        [classes.icon]: true,
        [classes.icon_selected]: bIsSelected,
      })}
    />)}
    {intIndex === 1 && (
    <FontAwesomeIcon icon={nodeIconTwo} className={classnames({
        [classes.icon]: true,
        [classes.icon_selected]: bIsSelected,
      })}
    />)}
    <div className={classes.text_container}>
      <p className={classes.title}>{strTitle}</p>
    </div>
    </Button>
  );
}

export default ButtonComponent;