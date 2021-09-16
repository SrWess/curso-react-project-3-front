import React from 'react';
import ReactDOM from 'react-dom';
import Home from './templates/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route to="*" component={Home} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
