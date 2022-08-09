

import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Auth = lazy(() => import('./components/Auth'))
const Apply = lazy(() => import('./components/Apply'))
const Admin = lazy(() => import('./components/Admin'))

function App() {

  return (
    <Suspense fallback={<div>loadings...</div>}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/apply" element={<Apply />} />
          <Route exact path="/admin_panel" element={<Admin />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
