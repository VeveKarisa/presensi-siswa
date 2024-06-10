import { createBrowserRouter } from "react-router-dom"
// ini bagian tambah layout
import Layout from "./templates/Layout"
import LayoutGuru from "./templates/LayoutGuru"
import LayoutWali from "./templates/LayoutWali"

import Auth from "./pages/Auth"
import Register from "./pages/Register"

// ini bagian admin
import Dashboard from "./admin/dashboard"
import Profile from "./admin/profile"
import Regis from "./admin/regis"
import Kelas from "./admin/kelas"
import DataGuru from "./admin/data_guru"
import DataSiswa from "./admin/data_siswa"

// ini bagian guru
import DashboardGuru from "./guru/dashboard"
import ProfileGuru from "./guru/profile"
import DataSiswaGuru from "./guru/data_siswa"
import Absensi from "./guru/absensi"

// bagian wali
import DashboardWali from "./wali/dashboard"
import ProfileWali from "./wali/profile"
import RekapAbsensi from "./wali/rekap_absensi"


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

  // bagian guru
  {
    element: <LayoutGuru />,
    children: [
      {
        path: '/guru/dashboard',
        element: <DashboardGuru />
      },
      {
        path: '/guru/edit_profile',
        element: <ProfileGuru />
      },
      {
        path: '/guru/data_siswa',
        element: <DataSiswaGuru />
      },
      {
        path: '/guru/absensi',
        element: <Absensi />
      },
    ]
  },

   // bagian wali
   {
    element: <LayoutWali />,
    children: [
      {
        path: '/wali/dashboard',
        element: <DashboardWali />
      },
      {
        path: '/wali/edit_profile',
        element: <ProfileWali />
      },
      {
        path: '/wali/rekap_absensi',
        element: <RekapAbsensi />
      },
    ]
  }
])

export default App
