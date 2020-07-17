import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <p>Hello</p>
    </Router>
  );
}

export default App;
