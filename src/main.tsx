import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './routes/homepage'
import './index.css'
import Root from './routes/root';
import Project from './routes/project';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      path: "/",
      element: <HomePage />,
    }
    ],
  },
  {
    path: '/project',
    element: <Project />
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
