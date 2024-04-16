import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Root from '../root/Root';
import Contact from '../pages/Contact/Contact';
import Profile from '../pages/Profile/Profile';
import PropertiDetails from '../pages/PropertiDetails/PropertiDetails';
import PriveteRoute from '../pages/PrivetRoute/PriveteRoute';
import Error from '../pages/ErrorPage/Error';
import Blog from '../pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/properti.json'),
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: (
          <PriveteRoute>
            <Blog />
          </PriveteRoute>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/properti_details/:viewId',
        element: (
          <PriveteRoute>
            <PropertiDetails />
          </PriveteRoute>
        ),
        loader: () => fetch('/properti.json'),
      },
    ],
  },
]);
export default router;
