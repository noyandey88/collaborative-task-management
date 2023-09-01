/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../layouts/Dashboard';
import Main from '../../layouts/Main';
import MyTasks from '../../pages/daashboard/myTasks/MyTasks';
import Projects from '../../pages/daashboard/projects/Projects';
import Summary from '../../pages/daashboard/summary/Summary';
import Teams from '../../pages/daashboard/teams/Teams';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import NotFound from '../../pages/notFound/NotFound';
import Register from '../../pages/register/Register';
import PrivateRoute from '../privateRoute/PrivateRoute';

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
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
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
        element: (
          <PrivateRoute>
            <Summary />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/my-tasks',
        element: (
          <PrivateRoute>
            <MyTasks />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/projects',
        element: (
          <PrivateRoute>
            <Projects />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/teams',
        element: (
          <PrivateRoute>
            <Teams />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
