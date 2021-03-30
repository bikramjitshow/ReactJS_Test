function Card({cdata}) {
  return (
    <div className="card">
      <h1>{cdata.title}</h1>
      <p>{cdata.desc}</p>
    </div>

  );
}

export default Card;