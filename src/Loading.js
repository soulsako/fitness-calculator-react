import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    marginBottom: '10px'
  }
});

const Loading = ({
  children,
}) => {
const classes = useStyles();
const [bLoading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 1500);
}, []);

if (bLoading) {
  return (
    <Paper className={classes.container}>
      <div className={classes.icon_container}>
        <HourglassEmptyIcon className={classes.icon} />
        Please wait...
      </div>
    </Paper>
  );
}
  return (
  <>
    {children}
  </>
  );
}

export default Loading;