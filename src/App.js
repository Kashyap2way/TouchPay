// src/App.js
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const lightTheme = {
  body: '#FFF',
  text: '#000',
  toggleBorder: '#FFF',
  background: '#363537',
};

const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
};

const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Login toggleTheme={toggleTheme} />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
