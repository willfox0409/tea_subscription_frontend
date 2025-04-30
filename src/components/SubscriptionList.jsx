import { useState, useEffect } from "react"
import SubscriptionCard from "./SubscriptionCard";
import "./SubscriptionList.css"
import "./SubscriptionCard.css"
import teaImages from "../assets/teaImages"
import subscriptionImages from "../assets/subscriptionImages"
import fallbackImage from "../assets/fallback.jpg" 

function SubscriptionList() {
    const [subscriptions, setSubscriptions] = useState([])
    const [filterStatus, setFilterStatus] = useState("all")

    const filteredSubscriptions = subscriptions.filter((sub) => {
      if (filterStatus === "all") return true
      return sub.attributes.status === filterStatus
    })

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/subscriptions")
        .then((response) => response.json())
        .then((data) => setSubscriptions(data.data))
        .catch((err) => console.error("Failed to fetch subscriptions:", err))
    }, [])

    return (
        <main className="subscriptions-list">
            <header>
              <h1>Rock & Brew: Legendary Tea Subscriptions</h1>
              <p className="mission">
                <em>
                  Donovan once told me John Lennon had 10 cups of tea the night he wrote 'Come Together'.
                  Rumor has it, the Abbey Road Break Room is still hiding his secret stash of bags... we miss you John!
                </em>
              </p>
              <h1> Subscriptions List </h1>
            </header>
            <select onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <section>
              {filteredSubscriptions.map((sub) => {
                const title = sub.attributes.title
                const image = subscriptionImages[title] || fallbackImage

                return (
                  <SubscriptionCard
                    key={sub.id}
                    id={sub.id}
                    title={title}
                    frequency={sub.attributes.frequency}
                    status={sub.attributes.status}
                    price={sub.attributes.price}
                    imgSrc={image} 
                  />
                )
              })}
            </section>
        </main>
    )
}

export default SubscriptionList