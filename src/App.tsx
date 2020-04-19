import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Stats from './components/stats';
import Map from './components/Map'
import GlobalStateProvider from './store/GlobalStateProvider';

export default function App() {
  return (
    <GlobalStateProvider>
      <Map/>
    </GlobalStateProvider>
  );
}

