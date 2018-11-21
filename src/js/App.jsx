import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from 'Views/Search';

const App = () => (
  <Router>
    <main className="main">
      <Route path="/" exact component={Search} />
    </main>
  </Router>
);

export default App;
