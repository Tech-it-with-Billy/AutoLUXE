import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VehiclesListing from './components/VehiclesListing.jsx'
import Contact from './components/Contact.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import BookingForm from './components/BookingForm.jsx'
import BookingSummary from './components/BookingSummary.jsx'
import AdminLogin from './components/Admin/AdminLogin.jsx'
import NavBar from './components/Admin/AdminNavBar.jsx'
import DashBoard from './components/Admin/DashBoard.jsx'
import FleetManager from './components/Admin/FleetManager.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/about', element: <About />},
  {path: '/vehicles', element: <VehiclesListing />},
  {path: '/contact', element: <Contact />},
  {path: '/login', element: <Login />},
  {path: '/signup', element: <SignUp />},
  {path: '/booking-form', element: <BookingForm />},
  {path: '/booking-summary', element: <BookingSummary />},
  {path: '/admin-login', element: <AdminLogin />},
  {path: '/admin-navbar', element: <NavBar />},
  {path: '/admin-dashboard', element: <DashBoard />},
  {path: '/admin-fleet-manager', element: <FleetManager />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
