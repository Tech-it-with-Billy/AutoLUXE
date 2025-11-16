# AutoLuxe --- Premium Car Rental Platform

A modern, scalable, and responsive car rental platform built with
**React**, **Tailwind CSS**, and **React Router DOM**, designed to offer
users a smooth experience for browsing cars, viewing details, and
placing bookings --- with or without creating an account.

AutoLuxe is currently in active development and will evolve into a
full-scale production system featuring backend APIs, user
authentication, payment integration, and an admin dashboard.

## 🚀 Project Overview

AutoLuxe is a **car rental web application** that allows users to: -
Browse an extensive list of available vehicles - View detailed
information for each car - Book rides seamlessly (even without
registration) - Create user accounts for a personalized experience -
Access clean, modern, mobile-friendly interfaces - Enjoy fast navigation
powered by React Router

## 🛠 Tech Stack

### Frontend

-   React
-   React Router DOM
-   Tailwind CSS
-   fetch API
-   Vercel

### Planned Backend

-   REST API for vehicles, bookings, users, admin, filtering
-   Mobile payment API integration

## ⭐ Key Features

### Current Features

-   Responsive UI
-   Listings and vehicle cards
-   Booking flow with form
-   Login & registration
-   Navigation with Hamburger Menu
-   Reusable components
-   Vercel deployment

### Planned Features

-   Full backend
-   Payments
-   Admin panel
-   Authentication
-   Advanced filtering

## 📁 Folder Structure

    src/
     ├─ components/
     │   ├─ About.jsx
     │   ├─ AllListings.jsx
     │   ├─ Banner.jsx
     │   ├─ BookingSummary.jsx
     │   ├─ Checkout.jsx
     │   ├─ Contact.jsx
     │   ├─ FilterBar.jsx
     │   ├─ Footer.jsx
     │   ├─ HamburgerMenu.jsx
     │   ├─ Home.jsx
     │   ├─ Login.jsx
     │   ├─ NavBar.jsx
     │   ├─ Procedure.jsx
     │   ├─ products.js
     │   ├─ Register.jsx
     │   ├─ Reviews.jsx
     │   ├─ Services.jsx
     │   ├─ Type.jsx
     │   ├─ VehicleBodyType.jsx
     │   ├─ VehicleBrands.jsx
     │   ├─ VehicleCard.jsx
     │   └─ VehicleListings.jsx

## 🌐 Live Demo

(Add your Vercel link here)

## 📦 Installation

    git clone <repo>
    cd AutoLuxe
    npm install
    npm run dev

## 📡 Planned API Endpoints

### Vehicles

    GET /api/vehicles
    GET /api/vehicles/:id
    POST /api/vehicles
    PATCH /api/vehicles/:id
    DELETE /api/vehicles/:id

### Bookings

    POST /api/bookings
    GET /api/bookings/:userId

### Auth

    POST /api/auth/register
    POST /api/auth/login

## 📌 Roadmap

-   Frontend UI (current)
-   Backend development
-   Payment integration
-   Deployment pipeline
