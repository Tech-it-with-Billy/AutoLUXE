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

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/about', element: <About />},
  {path: '/vehicles', element: <VehiclesListing />},
  {path: '/contact', element: <Contact />},
  {path: '/login', element: <Login />},
  {path: '/signup', element: <SignUp />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
