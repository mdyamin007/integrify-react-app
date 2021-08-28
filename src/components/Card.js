import React from "react";
import "../styles/Card.css";
import userImage from "../images/user.png";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="card p-3 card-user d-flex justify-content-center align-items-center flex-column">
      <img src={userImage} className="card-img-top card-image" alt="User" />
      <div className="card-body d-flex justify-content-center align-items-center flex-column">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text text-muted">@{user.username}</p>
        <a href={`//${user.website}`} rel="noopener noreferrer" target="_blank">
          {user.website}
        </a>{" "}
        <br />
        <Link to={`/user/${user.id}`} className="btn btn-primary my-2">
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
