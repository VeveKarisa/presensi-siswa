import { createBrowserRouter } from "react-router-dom"
import Layout from "./templates/Layout"
import Auth from "./pages/Auth"
import Register from "./pages/Register"
import Home from "./pages/Home"

const App = createBrowserRouter([
  {
    path: '/',
    element: <Auth />
  },
  {
    path: '/Register',
    element: <Register />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  },

])

export default App
