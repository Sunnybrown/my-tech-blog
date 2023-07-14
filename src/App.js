import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import PageRenderer from './page-render';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/:page" element={PageRenderer} />
          <Route path="/" render={() => <Navigate to="/home" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
