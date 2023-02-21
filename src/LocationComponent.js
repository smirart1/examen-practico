import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const LocationComponent = ({ location }) => {
  return (
    <div>
      <h4>
        <strong>
          {" "}
          <FaLocationArrow /> Ubicación
        </strong>
        : <span style={{color: '#7c7c7c', fontWeight: 'bold', marginLeft:'10px'}}>{location} </span> 
      </h4>
    </div>
  );
};

export default LocationComponent;
