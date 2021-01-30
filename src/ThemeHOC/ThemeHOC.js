import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
   MuiStepIcon: {
    root: {
      '&$completed': {
        color: '#1badb0',
      },
      '&$active': {
        color: '#1badb0',
      },
    },
    active: {},
    completed: {},
    },

  },
});

const ThemeHOC = ({
  children
}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default ThemeHOC;