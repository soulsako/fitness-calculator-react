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
        Macro Calculator
      </Typography>
      <Typography variant="body2" align="center" className={classes.title}>
        Based on the Harris Benedict formula
      </Typography>
    </div>
  );
}

export default Heading;
