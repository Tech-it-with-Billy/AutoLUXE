import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Checkout from './components/Checkout.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Listings from './components/AllListings.jsx'
import BookingSummary from './components/BookingSummary.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/about', element: <About />},
  {path: '/contact', element: <Contact />},
  {path: '/checkout', element: <Checkout />},
  {path: '/login', element: <Login />},
  {path: '/register', element: <Register />},
  {path: '/listings', element: <Listings />},
  {path: '/booking', element: <BookingSummary />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
