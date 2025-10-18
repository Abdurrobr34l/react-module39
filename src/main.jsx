import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Root from "./Layout/Root.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Contexts/AuthContext/AuthProvider.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import Settings from "./Settings/Settings.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/profile",
        element: <PrivateRoutes>{<Profile/>}</PrivateRoutes>
      },
      {
        path: "/settings",
        element: <PrivateRoutes>{<Settings/>}</PrivateRoutes>
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes>{<Dashboard/>}</PrivateRoutes>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  // </BrowserRouter>,
);
