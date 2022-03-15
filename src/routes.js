import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import MorePage from "./pages/MorePage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "more", element: <MorePage /> },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
