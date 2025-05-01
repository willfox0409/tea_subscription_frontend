import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import teaImages from "../assets/teaImages"
import fallbackImage from "../assets/fallback.jpg"
import "./SubscriptionDetails.css"

function SubscriptionDetails() {
  const { id } = useParams()
  const [subscription, setSubscription] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/subscriptions/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch subscription")
        return res.json()
      })
      .then((data) => setSubscription(data.data))
      .catch((err) => setError(err.message))
  }, [id])

  function handleStatusToggle() {
    const newStatus = subscription.attributes.status === "active" ? "cancelled" : "active"
  
    fetch(`http://localhost:3000/api/v1/subscriptions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscription: { status: newStatus } })
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update subscription status")
        return res.json()
      })
      .then((data) => setSubscription(data.data))
      .catch((err) => setError(err.message))
  }

  if (error) return <p>{error}</p>
  if (!subscription) return <p>Loading...</p>

  const { title, price, frequency, status, tea, customer } = subscription.attributes

  const teaTitle = tea.attributes.title
  const image = teaImages[teaTitle] || fallbackImage

  return (
    <section className="subscription-details">
      <h2>{title}</h2>
      <img src={image} alt={teaTitle} className="tea-image" />
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Frequency:</strong> {frequency}</p>
      <p><strong>Price:</strong> ${price}</p>

      <h3>Tea Info</h3>
      <p><strong>Title:</strong> {teaTitle}</p>
      <p><strong>Description:</strong> {tea.attributes.description}</p>
      <p><strong>Brew Temp:</strong> {tea.attributes.temperature}</p>
      <p><strong>Brew Time:</strong> {tea.attributes.brew_time}</p>

      <h3>Customer Info</h3>
      <p><strong>Name:</strong> {customer.attributes.first_name} {customer.attributes.last_name}</p>
      <p><strong>Email:</strong> {customer.attributes.email}</p>
      <p><strong>Address:</strong> {customer.attributes.address}</p>

      <button className="status-toggle-btn" onClick={handleStatusToggle}>
        {subscription.attributes.status === "active" ? "Cancel Subscription" : "Reactivate Subscription"}
      </button>
    </section>
  )
}

export default SubscriptionDetails