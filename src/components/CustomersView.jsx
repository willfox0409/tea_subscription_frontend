import { useEffect, useState } from "react"
import "./CustomersView.css"

function CustomersView() {
  const [customers, setCustomers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/customers")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch customers")
        return res.json()
      })
      .then((data) => setCustomers(data.data))
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <p>{error}</p>
  if (!customers.length) return <p>Loading customers...</p>

  return (
    <section className="customers-view">
      <h2>Our Subscribers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.attributes.first_name} {customer.attributes.last_name} — {customer.attributes.email} - {customer.attributes.address}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CustomersView