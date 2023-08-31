/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
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
]);
