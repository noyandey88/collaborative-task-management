/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../layouts/Dashboard';
import Main from '../../layouts/Main';
import DashboardHome from '../../pages/daashboard/dashbaordHome/DashboardHome';
import MyTasks from '../../pages/daashboard/myTasks/MyTasks';
import Projects from '../../pages/daashboard/projects/Projects';
import TeamData from '../../pages/daashboard/teams/TeamData';
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
            <DashboardHome />
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
        path: '/dashboard/teams/:id',
        element: (
          <PrivateRoute>
            <TeamData />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
