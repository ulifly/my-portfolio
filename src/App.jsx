import React from 'react'
import { Switch, Route } from 'wouter';

import Home from './pages/Home'
import NotFound from './pages/NotFound'

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App