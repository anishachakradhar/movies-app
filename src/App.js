import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeContainer from './components/HomeContainer';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeContainer />
      </Router>
    </div>
  );
}

export default App;
