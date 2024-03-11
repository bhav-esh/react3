import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect } from 'react';
import Business from './Components/Business';
import API from './APIs/getBusinessNews';
function App() {
  return (
    <>
      <Business/>
    </>
  );
}

export default App;

