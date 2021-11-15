import React from "react";
import "./mycard.css";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const MyCard = ({ film: { id, titre, description, photo, rate } }) => {
  return (
    <div
      className="card"
      style={{ width: "300px", height: "400px", borderRadius: "5px" }}
    >
      <div className="image">
        <img src={photo} alt="img" />
      </div>
      <div className="details">
        <div className="center">
          <h1>{titre}</h1>
          <p>{description}</p>

          <Link to={`/descriptionmovie/${id}`}>
            <button className="go">Go To Description</button>
          </Link>

          <ReactStars className="stars"
            count={5}
            value={rate}
            edit={false}
            size={24}
            color2={"#ffd700"}
          />
        </div>
      </div>
    </div>
  );
};
export default MyCard;
