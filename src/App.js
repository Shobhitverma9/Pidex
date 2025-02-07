
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TACs from './Static/TACs';
import Privacy from './Static/Privacy';
import AML from './Static/AML';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Terms-and-Conditions" element={<TACs />} />
          <Route path="/Privacy-Policy" element={<Privacy />} />
          <Route path="/Anti-Money-Laundering-Policy" element={<AML />} />
          {/* Placeholder route for the Admin page */}
          <Route path="/admin" element={<div>Admin Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
