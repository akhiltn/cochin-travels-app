import { createHashRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
])