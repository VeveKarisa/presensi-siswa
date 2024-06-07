import { createBrowserRouter } from "react-router-dom"
import Layout from "./templates/Layout"
import Auth from "./pages/Auth"
import Register from "./pages/Register"
import Dashboard from "./admin/dashboard"
import Profile from "./admin/profile"
import Regis from "./admin/regis"
import Kelas from "./admin/kelas"
import DataGuru from "./admin/data_guru"
import DataSiswa from "./admin/data_siswa"

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
        path: '/admin/dashboard',
        element: <Dashboard />
      },
      {
        path: '/admin/edit_profile',
        element: <Profile />
      },
      {
        path: '/admin/registrasi_user',
        element: <Regis />
      },
      {
        path: '/admin/data_kelas',
        element: <Kelas />
      },
      {
        path: '/admin/data_guru',
        element: <DataGuru />
      },
      {
        path: '/admin/data_siswa',
        element: <DataSiswa />
      },
    ]
  },

])

export default App
