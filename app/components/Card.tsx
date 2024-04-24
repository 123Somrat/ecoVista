

export default function Card({children}) {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
    <div className="card">
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <img
          className="max-w-20"
          src="./assets/icons/icon_rain.png"
          alt="rain icon"
        />
        <h3 className="feature-title">Rain</h3>
        <span className="feature-name">Moderate Rain</span>
      </div>
    </div>
  </div>
  )
}
