import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import "./routes.css";
import StudentPage from "./pages/student";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: `/student/`,
    element: <StudentPage />,
  },
  {
    path: `/student/:id`,
    element: <StudentPage />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
