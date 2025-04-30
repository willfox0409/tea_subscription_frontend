import { Routes, Route, NavLink } from 'react-router-dom'
import SubscriptionList from './SubscriptionList'
import SubscriptionCard from './SubscriptionCard'
import SubscriptionDetails from './SubscriptionDetails'
import TeasView from './TeasView'
import CustomersView from './CustomersView'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Subscription List</NavLink>
        <NavLink to="/teas">Tea List</NavLink>
        <NavLink to="/customers">Customer List</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<SubscriptionList />} />
        <Route path="/subscriptions/:id" element={<SubscriptionDetails />} />
        <Route path="/teas" element={<TeasView />} />
        <Route path="/customers" element={<CustomersView />} />
      </Routes>
    </>
  )
}

export default App
