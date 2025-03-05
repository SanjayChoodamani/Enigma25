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
      path: '/',
      element: <Home/>
    },
    {
      path: '/events',
      element: <Events/>
    },
    {
      path: '/event/:category/:id',
      element: <EventDetail/>
    },
    {
      path: '/team',
      element: <Team/>
    },
    {
      path: '/workshop',
      element: <Workshop/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/terms',
      element: <TandC/>
    },
    {
      path: '/refund',
      element: <RefundPage/>
    }
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
