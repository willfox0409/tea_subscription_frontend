import React from "react" 
import "./SubscriptionCard.css"
import { Link } from "react-router-dom"

function SubscriptionCard({ id, title, frequency, status, price, imgSrc }) {
  return (
    <article className="subscription-card">
      <img src={imgSrc} alt={title} className="tea-image" />
      <h2>{title}</h2>
      <p>Status: {status}</p>
      <p>Frequency: {frequency}</p>
      <p>Price: ${price}</p>
      <Link to={`/subscriptions/${id}`}>
        <button className="details-btn">View Details</button>
      </Link>
    </article>
  )
}

export default SubscriptionCard