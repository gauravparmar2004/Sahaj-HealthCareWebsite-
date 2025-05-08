import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import Footer from './components/Footer';
import AllDoctors from './pages/AllDoctors';
import InteractionPage from './components/InteractionPage';
import AiAssistant from './pages/AiAssistant';
import AiHome from './pages/AiHome';

const App = () => {
  return (
    <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/alldoctors' element={<AllDoctors/>}/>
            <Route path='/alldoctors/:speciality' element={<AllDoctors/>}/>
            <Route path='/interactionpage' element={<InteractionPage/>}/>
            <Route path='/aiassistant' element={<AiAssistant/>}/>
            <Route path='/aihome' element={<AiHome/>}/>
          </Routes>
          <Footer/>
    </Router>
  );
};

export default App;
