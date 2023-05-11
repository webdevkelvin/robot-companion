/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import Card from "../card/Card";

import "./CardList.css";

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
