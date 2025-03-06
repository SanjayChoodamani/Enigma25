import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import all pages
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Workshop from './pages/Workshop';
import Contact from './pages/Contact';
import TandC from './pages/TandC';
import RefundPage from './pages/RefundPage';
import EventDetail from './pages/EventDetail'; 

const router = createBrowserRouter([
    {
      path: '/Enigma25/',
      element: <Home/>
    },
    {
      path: '/Enigma25/events',
      element: <Events/>
    },
    {
      path: '/Enigma25/event/:category/:id',
      element: <EventDetail/>
    },
    {
      path: '/Enigma25/team',
      element: <Team/>
    },
    {
      path: '/Enigma25/workshop',
      element: <Workshop/>
    },
    {
      path: '/Enigma25/contact',
      element: <Contact/>
    },
    {
      path: '/Enigma25/terms',
      element: <TandC/>
    },
    {
      path: '/Enigma25/refund',
      element: <RefundPage/>
    }
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
