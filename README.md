# README

> 🎨 This is the **frontend** repo for the Rock & Brew: Legendary Tea Subscriptions project. project.  
It includes the React admin interface that consumes the Rails API.  
The full project (including backend documentation and database schema) is documented below.

# 🍵 Rock & Brew: Legendary Tea Subscriptions

A full-stack admin portal for managing tea subscriptions, built with a Rails API backend and a React frontend. This project was completed as a solo assessment over 3 days, following MVP principles and RESTful best practices.

---

## 📁 Project Structure

**Backend**: Ruby on Rails API  
**Frontend**: React (Vite + React Router DOM)  
**Testing**: RSpec (BE), Cypress (FE)  
**Database**: PostgreSQL  
**Documentation**: JSON:API-style contracts, Postman collection

---

## 📌 MVP Features

### Backend API

- Full CRUD functionality for subscriptions (GET, PATCH)
- Nested data relationships between Subscriptions, Customers, and Teas
- Filter endpoint for `/subscriptions?status=`
- JSON:API-compliant serialization
- Custom error handling via `rescue_from`
- Model-level scope: `Subscription.with_status(status)`
- Postman collection built to test and validate endpoints

📸 _Insert screenshot of dbdiagram_  
📸 _Insert screenshot of Postico joins table_

### Frontend

- Home page shows all Subscriptions with name, status, frequency, and mapped image
- Subscriptions are filterable by `active`, `cancelled`, or `all`
- Clicking “View Details” shows full tea & customer data
- `Teas` and `Customers` pages display lists (with images for teas)
- Local image mapping for both Subscriptions and Teas
- Fully responsive layout, tested across screen sizes

📸 _Insert screenshots of SubscriptionList, SubscriptionDetails, CustomersView, and TeasView_

---

## 🧠 Planning & Architecture

### Component Tree

- `App` (Router & Nav)
  - `SubscriptionList`
    - `SubscriptionCard`
  - `SubscriptionDetails`
  - `CustomersView`
  - `TeasView`

📸 _Insert screenshot of Excalidraw component architecture_

### Design Decisions

- **Asset Mapping**: Tea and Subscription images are stored locally and mapped using JS objects based on title strings.
- **No Auth**: Since this is an internal admin tool, authentication was not included.
- **Responsiveness**: Simple flex/grid layout supports clean display across screen sizes.
- **Error Handling**: Custom 404, 400, and 422 JSON responses from Rails.

📸 _Insert screenshot of MVP planning template_ (if you have one)

---

## 🧪 Testing

### Backend

- 100% SimpleCov line coverage
- RSpec request and model specs:
  - Happy paths
  - Sad paths (invalid params, not found, invalid status)
- Postman collection for manual endpoint validation

### Frontend

- Cypress e2e tests for:
  - Home page rendering
  - Navigation to details page
  - Customers and Teas view rendering
- Tests are basic, and do not currently include sad path or network error simulation

---

## 🧭 Routes Overview

### Backend Routes

GET    /api/v1/subscriptions
GET    /api/v1/subscriptions/:id
PATCH  /api/v1/subscriptions/:id
GET    /api/v1/teas
GET    /api/v1/customers

### Frontend Routes

/                     → SubscriptionList
/subscriptions/:id    → SubscriptionDetails
/teas                 → TeasView
/customers            → CustomersView

## 🗂 Tools Used

- Rails 7
- React
- Vite
- PostgreSQL
- Cypress
- RSpec
- Excalidraw
- Postico

## ✅ Setup & Testing

### Backend (Rails API)

To set up and run the backend:

```bash
bundle install
rails db:{drop,create,migrate,seed}
rails s

To run the test suite and check code coverage:

bundle exec rspec
open coverage/index.html  

### Frontend (React)

To set up and run the frontend:

npm install
npm run dev

To run Cypress end-to-end tests:

npx cypress open


