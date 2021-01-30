import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';

const Heading = () => {

  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        className={classes.title_primary}
      >
        Calorie Calculator
      </Typography>
    </div>
  );
}

export default Heading;
