import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./components/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VehiclesListing from "./components/VehiclesListing.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import BookingForm from "./components/BookingForm.jsx";
import BookingSummary from "./components/BookingSummary.jsx";
import FleetLogin from "./components/Fleet/FleetLogin.jsx";
import FleetNavBar from "./components/Fleet/FleetNavBar.jsx";
import FleetDashBoard from "./components/Fleet/FleetDashBoard.jsx";
import FleetManager from "./components/Fleet/FleetManager.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/vehicles", element: <VehiclesListing /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/booking-form", element: <BookingForm /> },
  { path: "/booking-summary", element: <BookingSummary /> },
  { path: "/fleet-owner", element: <FleetLogin /> },
  { path: "/fleet-navbar", element: <FleetNavBar /> },
  { path: "/fleet-dashboard", element: <FleetDashBoard /> },
  { path: "/fleet-manager", element: <FleetManager /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
