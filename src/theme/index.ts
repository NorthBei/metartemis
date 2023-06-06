import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Ubuntu',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#7e2b89',
    },
    secondary: {
      main: '#df740c',
    },
    info: {
      main: '#ffffff',
    },
  },
});

export default theme;
