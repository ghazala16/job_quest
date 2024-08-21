import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;