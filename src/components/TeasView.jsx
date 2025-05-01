import { useEffect, useState } from "react"
import teaImages from "../assets/teaImages"
import fallbackImage from "../assets/fallback.jpg"
import "./TeasView.css"

function TeasView() {
  const [teas, setTeas] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/teas")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch teas")
        return res.json()
      })
      .then((data) => setTeas(data.data))
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <p>{error}</p>
  if (!teas.length) return <p>Loading teas...</p>

  return (
    <section className="teas-view">
      <h2>All Teas</h2>
      <ul>
      {teas.map((tea) => {
        const title = tea.attributes.title
        const image = teaImages[title] || fallbackImage

        return (
          <li key={tea.id} className="tea-list-item">
            <img src={image} alt={title} className="tea-thumb" />
            <div className="tea-info">
              <strong>{title}</strong> — {tea.attributes.description}
              <br />
              <em>Temp:</em> {tea.attributes.temperature} | <em>Brew Time:</em> {tea.attributes.brew_time}
            </div>
          </li>
        )
      })}
      </ul>
    </section>
  )
}

export default TeasView