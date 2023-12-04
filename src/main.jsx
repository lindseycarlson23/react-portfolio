import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AboutMe from './pages/aboutme.jsx';
import Contact from './pages/Contact.jsx';
import ResumePdf from './components/ResumePdf.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   index: true,
      //   element: <Home />
      // }, 
      {
        index: true,
        path: '/',
        element: <AboutMe />
      }, 
      {
        path: '/contact',
        element: <Contact />
      }, 
      {
        path: '/projects',
        element: <Portfolio />
      },
      {
        path: '/resume',
        element: <ResumePdf />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


// what is react.strictmode?