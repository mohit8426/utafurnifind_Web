import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './StartScreen'; // Adjust the path as necessary
import LoginScreen from './LoginScreen'; // Adjust the path as necessary
import AdminScreen from './AdminScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import Contact from './Contact';
import About from './About';
import SofaPage from './SofaPage';
import TablePage from './TablePage';
import ChairPage from './ChairPage';
import All from './All';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Login" element={<StartScreen />} />
        <Route path="/LoginScreen" element={<LoginScreen />} />
        <Route path="/AdminScreen" element={<AdminScreen />} />
        <Route path="/SignUpScreen" element={<SignUpScreen />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/SofaPage" element={<SofaPage />} />
        <Route path="/TablePage" element={<TablePage />} />
        <Route path="/ChairPage" element={<ChairPage />} />
        <Route path="/All" element={<All />} />


        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
