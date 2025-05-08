import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import Footer from './components/Footer';
import AllDoctors from './pages/Doctors';
import InteractionPage from './components/InteractionPage';
import AiAssistant from './pages/AiAssistant';
import AiHome from './pages/AiHome';
import Appointments from './pages/Appointments';

const App = () => {
  return (
    <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/doctors' element={<AllDoctors/>}/>
            <Route path='/doctors/:speciality' element={<AllDoctors/>}/>
            <Route path='/interactionpage' element={<InteractionPage/>}/>
            <Route path='/aiassistant' element={<AiAssistant/>}/>
            <Route path='/aihome' element={<AiHome/>}/>
            <Route path='/appointment/:docId' element={<Appointments/>}/>
          </Routes>
          <Footer/>
    </Router>
  );
};

export default App;
