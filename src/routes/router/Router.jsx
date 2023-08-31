/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../layouts/Dashboard';
import Main from '../../layouts/Main';
import Summary from '../../pages/daashboard/summary/Summary';
import Home from '../../pages/home/Home';
import NotFound from '../../pages/notFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/dashboard',
        element: <Summary />,
      },
    ],
  },
]);
