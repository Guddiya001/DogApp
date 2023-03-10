import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Cards = ({ name, reference_image_id }) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="col-xl-3 col-md-3 col-sm-12">
        <div className="product-card text-left">
          <img
            className="img-responsive"
            onClick={() => {
              navigate(`dog/${name}`);
            }}
            src={
              reference_image_id !== undefined
                ? `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`
                : "images/noImage.jpg"
            }
            alt={name}
            loading="lazy"
          />
          <div className="product-image-caption">
            <div className="product-image-txt">
              <h3>{name}</h3>
              <NavLink to={`dog/${name}`} className="btn btn-primary">
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
