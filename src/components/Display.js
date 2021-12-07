import React, { useEffect, useState } from "react";
import { properties } from "./properties";
import { Link } from "react-router-dom";
import { BsCurrencyEuro } from "react-icons/bs";
const Display = ({ details }) => {
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {}, []);
  return (
    <>
      {/* <div>
        <select>
          <option>Apartment</option>
          <option></option>
        </select>
      </div> */}
      <div className="card">
        {properties && (
          <div className="card">
            {properties.map((detail) => (
              <Link to={`searchforapartments/${detail.id}`}>
                <div className="card_container">
                  <img src={detail?.Images[0]?.url} />
                  <h4>{detail.Title}</h4>
                  <div>
                    <h3 style={{ textAlign: "center" }}>
                      <BsCurrencyEuro />
                      {detail.Price} sqm
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Display;
