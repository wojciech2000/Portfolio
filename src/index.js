import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styled-components/global-style'
import theme from './styled-components/theme'
import { DataProvider } from './components/DataContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DataProvider>
        <GlobalStyle />
        <App />
      </DataProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
