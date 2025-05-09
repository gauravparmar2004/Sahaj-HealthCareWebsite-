import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AllDoctors from './pages/Doctors';
import InteractionPage from './components/InteractionPage';
import AiAssistant from './pages/AiAssistant';
import AiHome from './pages/AiHome';
import Appointments from './pages/Appointments';
import IoT from './pages/IoT';
import Login from './components/Login';
import Signup from './components/Signup';

const AppWrapper = () => {
  const location = useLocation();

  // Add routes where you want to hide the Navbar
  const hideNavbarOn = ['/interactionpage'];

  return (
    <>
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctors" element={<AllDoctors />} />
        <Route path="/doctors/:speciality" element={<AllDoctors />} />
        <Route path="/interactionpage" element={<InteractionPage />} />
        <Route path="/aiassistant" element={<AiAssistant />} />
        <Route path="/aihome" element={<AiHome />} />
        <Route path="/appointment/:docId" element={<Appointments />} />
        <Route path="/iot" element={<IoT />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
