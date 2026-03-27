export default function Entry() {
  return (
    <article className="main-container">
      <div className="image-container">
        <img
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="Mount Fuji"
        />
      </div>
      <div className="info-container">
        <img src="/src/images/marker.png" alt="location marker icon" />
        <span>japan</span>
        <a
          href="http://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
        <h2>Mount Fuji</h2>
        <p className="date-selector">12 Jan, 2026-24Jan, 2021</p>
        <p className="text-selector">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
