export default function Entry(props) {
  console.log(props);
  return (
    <article className="main-container">
      <div className="image-container">
        <img {...props.img} />
      </div>
      <div className="info-container">
        <img src="/src/images/marker.png" alt="location marker icon" />
        <span>{props.country}</span>
        <a
          href="http://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
        <h2>{props.title}</h2>
        <p className="date-selector">{props.data}</p>
        <p className="text-selector">{props.text}</p>
      </div>
    </article>
  );
}
