import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/MainPage";
import FreeForAllFormPage from "./pages/FreeForAllFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/free-for-all-form", element: <FreeForAllFormPage /> },
]);

export default function App(): React.ReactNode {
  return <RouterProvider router={router} />;
}
