import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainMore from "./views/MainMore";
import Main from "./views/Main";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "more", element: <MainMore /> },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
