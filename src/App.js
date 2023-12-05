// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
