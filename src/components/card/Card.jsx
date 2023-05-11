/* eslint-disable react/prop-types */

import "./Card.css";

function Card({ monster }) {
  const { id, name, email } = monster;

  return (
    <article className="card">
      <div className="card__img-box">
        <img
          className="card__img"
          src={`https://robohash.org/${id}?set=set3&size=78x78`}
          alt={`monster ${name}`}
        />
      </div>

      <div className="card__content">
        <h3 className="card__name">{name}</h3>
        <p className="card__email">{email}</p>
      </div>
    </article>
  );
}

export default Card;
