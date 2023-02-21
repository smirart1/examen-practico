import React from "react";
import { FaUser } from "react-icons/fa";

const NameComponent = ({ name }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h4>
        <FaUser style={{ marginRight: "8px" }} />
        <strong>Nombre</strong>:
        <span style={{ color: "#7c7c7c", fontWeight: 'bold', marginLeft:'10px' }}>{name} </span>
      </h4>
    </div>
  );
};

export default NameComponent;
