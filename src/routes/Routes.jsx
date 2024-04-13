import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import { getAllRooms } from '../api/rooms'
import Dashboard from '../layouts/DashboardLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListing from '../pages/Dashboard/Host/MyListing'
import HostRoute from './HostRoute'
import AdminRoute from './AdminRoute'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
import MyBooking from '../pages/Dashboard/Guest/MyBooking'
import ManageBookings from '../pages/Dashboard/Host/ManageBookings'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
      },
    ],
  },
  // Login
  { path: '/login', element: <Login /> },
  // Signup
  { path: '/signup', element: <SignUp /> },
  // Dashboard
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      // Host
      { path: 'add-room', element: <HostRoute><AddRoom></AddRoom></HostRoute> },
      { path: 'my-listings', element: <HostRoute><MyListing></MyListing></HostRoute> },
      { path: 'manage-bookings', element: <HostRoute><ManageBookings></ManageBookings></HostRoute> },
      // Admin
      { path: 'manage-users', element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute> },
      { path: 'profile', element: <Profile></Profile> },
      // Guest
      { path: 'my-booking', element: <MyBooking></MyBooking> },

    ]
  }
])
