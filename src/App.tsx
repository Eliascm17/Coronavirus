import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Stats from './components/stats';
import Map from './components/Map'
import GlobalStateProvider from './store/GlobalStateProvider';
import { ThemeProvider } from 'emotion-theming'
import { theme } from './theme/theme';

export default function App() {

  return (
    <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <Map/>
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

