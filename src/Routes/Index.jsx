import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Views/Home";
import Detail from "../Views/Detail";
import Error404 from "../Views/Error404";
import Profile from "../Views/Profile";
import LikedEvents from "../Views/Profile/components/LikedEvents";
import MyInfo from "../Views/Profile/components/MyInfo";

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
        element: <MyInfo />,
      },
      {
        path: "liked-events",
        element: <LikedEvents />,
      },
    ],
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
