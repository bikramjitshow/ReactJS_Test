import { Link } from "react-router-dom";

function Card({cdata}) {
  return (
    <div className="card">
      <h1>{cdata.title}</h1>
      <p>{cdata.desc}</p>
      <Link to="#" class="btn btn-primary stretched-link">View More</Link>
    </div>

  );
}

export default Card;