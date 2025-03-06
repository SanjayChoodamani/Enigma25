import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

//import all pages
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Workshop from './pages/Workshop';
import Contact from './pages/Contact';
import TandC from './pages/TandC';
import RefundPage from './pages/RefundPage';
import EventDetail from './pages/EventDetail'; 

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route excat path="/" element={<Home/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/event/:category/:id" element={<EventDetail/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/workshop" element={<Workshop/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/terms" element={<TandC/>} />
        <Route path="/refund" element={<RefundPage/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
