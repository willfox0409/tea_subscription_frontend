import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SubscriptionList from './components/SubscriptionList'
import SubscriptionDetails from './components/SubscriptionDetails'
import TeasView from './components/TeasView'
import CustomersView from './components/CustomersView'
import './App.css'

function App() {
  
  return (
      <Router>
        <nav>
          <NavLink to="/">Subscriptions</NavLink>
          <NavLink to="/teas">Teas</NavLink>
          <NavLink to="/customers">Customers</NavLink>
        </nav>
          <Routes>
              <Route path="/" element={<SubscriptionList />} /> 
              <Route path="/subscriptions/:id" element={<SubscriptionDetails />} /> 
              <Route path="/teas" element={<TeasView/>} />
              <Route path="/customers" element={<CustomersView />} />
          </Routes>
      </Router>
  )
}

export default App;
