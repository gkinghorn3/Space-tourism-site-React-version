import { useState, Fragment } from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.component';

function App() {
  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation/>} />
      </Routes>
    </Router>
  )
}

export default App
