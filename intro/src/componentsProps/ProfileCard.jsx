import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const ProfileCard = (props) => {
  return (
    <>
      <div className="d-flex gap-3">
        <div className="card text-center" style={{ width: "250px" }}>
          <img className="card-img-top" src={props.image} alt="" />
          <div className="card-body">
            <h1 className="card-title">{props.name}</h1>
            <p className="card-subtitle mb-2 text-muted">{props.roll}</p>
            <p className="card-text">{props.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
