import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

export default function App(): React.ReactNode {
  return <RouterProvider router={router} />;
}
