import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Global from './Global';
import { ThemeProvider } from 'emotion-theming';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import history from './history';
import Pages from "./pages";
import logo from './logo.PNG';

// THEME
const theme = {
  colors: {
    white: '#FFFFFF',
    green: '#086F3C',
    brown: '#C9B6A2',
    lightBrown: '#EDE7E0',
    darkBrown: '#6F3C08',
    maroon: '#6F0808',
  },
}

const AppContainer = styled.div(({ theme: { colors } }) => ({
  alignItems: 'center',
  background: colors.lightBrown,
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  marginTop: 100,
  padding: 32,
  width: 400,
}));

const Header = styled.h1(({ theme: { colors } }) => ({
  color: colors.maroon,
  fontFamily: 'sans-serif',
  marginBottom: 32,
}));

const Logo = styled.img({
  width: 400,
  marginTop: -32,
  marginBottom: 32,
})

function App({ store }) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        <Router history={history}>
          <AppContainer>
            <Logo src={logo} alt="Logo" width="400" />
            <Switch>
              <Route exact path="/" component={Pages.Login} />
              <Route exact path="/start" component={Pages.RouteInput} />
              <Route exact path="/results" component={Pages.Results} />
            </Switch>
          </AppContainer>
        </Router>
      </ThemeProvider>
    </ReduxProvider>    
  );
}

export default App;
