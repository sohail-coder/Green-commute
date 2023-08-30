import React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from 'theme/index';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AllJobsPage from './pages/AllJobsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/find-jobs" element={<AllJobsPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
export default App;
