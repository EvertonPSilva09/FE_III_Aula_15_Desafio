import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import "./routes.css";
import FormPage from "./pages/forms";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/forms",
    element: <FormPage />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
