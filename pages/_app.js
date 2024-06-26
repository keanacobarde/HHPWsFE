/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { AuthProvider } from '../utils/context/authContext';
import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector';

const theme = createTheme({
  palette: {
    primary: {
      main: '#374151',
    },
  },
  background: {
    paper: '#CBD5E1',
    default: 'white',
  },
  typography: {
    fontFamily: 'system-ui',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {' '}
        {/* gives children components access to user and auth methods */}
        <ViewDirectorBasedOnUserAuthStatus
        // if status is pending === loading
        // if status is logged in === view app
        // if status is logged out === sign in page
          component={Component}
          pageProps={pageProps}
        />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
