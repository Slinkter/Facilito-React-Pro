import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Views/Home/Index";
import Detail from "../Views/Detail/Index";
import Error404 from "../Views/Error404";
import Profile from "../Views/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:eventId",
    element: <Detail />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <div> My Info - Profile</div>,
      },
      {
        path: "my-info",
        element: <div> My Info - Profile</div>,
      },
    ],
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
