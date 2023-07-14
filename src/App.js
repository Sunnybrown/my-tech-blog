import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import PageRenderer from './page-render';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/:page" element={PageRenderer} />
          <Route path="/" render={() => <Navigate to="/home" />} />
          <Route element={() => 404} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
