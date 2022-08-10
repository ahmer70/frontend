

import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Auth = lazy(() => import('./components/Auth'))
const Apply = lazy(() => import('./components/Apply'))
const AdminPanel = lazy(() => import('./components/admin/index'))
const UserList = lazy(() => import('./components/admin/UserList'))
const ResponseList = lazy(() => import('./components/admin/ResponseList'))

function App() {

  return (
    <Suspense fallback={<div>loadings...</div>}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/apply" element={<Apply />} />
          <Route exact path="/admin_panel" element={<AdminPanel />} />
          <Route exact path="/users_list" element={<UserList />} />
          <Route exact path="/response_list" element={<ResponseList />} />

        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
