# 🚘 AutoLuxe

Modern React and Django Car Rental Platform.

AutoLuxe is a production-oriented vehicle rental system designed to
simulate a real-world SaaS application.\
The frontend delivers a clean, responsive user experience integrated
with a Django REST API backend.

------------------------------------------------------------------------

## 🌐 Live Architecture Overview

Frontend (React + Vite)\
⬇\
REST API (Django + DRF)\
⬇\
PostgreSQL Database

The frontend consumes secure JWT-protected endpoints and renders
role-based interfaces for customers, venders and administrators.

------------------------------------------------------------------------

## ✨ Key Highlights

• Production-style folder structure\
• JWT authentication with protected routes\
• Role-based UI rendering (User / Admin)\
• Modular reusable component architecture\
• API abstraction layer using Axios\
• Clean, responsive design (mobile-first)\
• Scalable state management with Context API

------------------------------------------------------------------------

## 🚀 Features

### 👤 Customer Experience

-   Account registration & login
-   Browse available vehicles
-   View vehicle details
-   Create bookings
-   View and manage booking history

### 🛠 Admin Dashboard

-   Add, update, delete vehicles
-   Monitor booking activity
-   Manage fleet availability

------------------------------------------------------------------------

## 🧱 Tech Stack

-   React (Hooks + Functional Components)
-   Vite
-   React Router
-   Axios
-   Context API
-   JWT Authentication
-   Tailwind CSS

------------------------------------------------------------------------

## 📂 Project Structure

src/ ├── api/ \# Centralized API configuration ├── components/ \#
Reusable UI components ├── pages/ \# Route-level screens ├── context/ \#
Global state management ├── routes/ \# Protected route logic ├── hooks/
\# Custom hooks └── utils/ \# Helper functions

------------------------------------------------------------------------

## 🔐 Authentication Flow

1.  User logs in via backend endpoint\
2.  Access + refresh tokens are returned\
3.  Access token attached to API requests\
4.  Protected routes validate authentication state\
5.  Admin routes restricted via role checks

------------------------------------------------------------------------

## ⚙️ Local Setup

1.  Install dependencies\
    npm install

2.  Configure environment variables (.env)\
    VITE_API_BASE_URL=http://localhost:8000/api

3.  Run development server\
    npm run dev

App runs at:\
http://localhost:5173

------------------------------------------------------------------------

## 📈 Engineering Focus

This project emphasizes:

-   Clean component abstraction\
-   API-driven architecture\
-   Secure authentication flow\
-   Real-world booking lifecycle logic\
-   Scalable folder organization

AutoLuxe is actively being developed with additional features such as
payments, advanced filtering, and analytics dashboards planned.

------------------------------------------------------------------------

## 👨‍💻 Author

Billy Ochieng\
Full-Stack Developer\
Building scalable, production-ready web applications.
