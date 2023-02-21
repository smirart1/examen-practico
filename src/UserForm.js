import React, { useState } from "react";

const Form = ({ setName, setLocation }) => {
  const [tempName, setTempName] = useState("");
  const [tempLocation, setTempLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tempName.length <= 0 || tempLocation.length <= 0) {
      alert("Ingresa los datos correctamente");
      return;
    }
    setName(tempName);
    setLocation(tempLocation);
    setTempLocation("");
    setTempName("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="card rightCard">
        <div className="input-item">
          <label className="label">Nombre:</label>
          <input
            type="text"
            className="input"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
        </div>

        <div className="input-item">
          <label className="label">Ubicación:</label>
          <input
            type="text"
            className="input"
            value={tempLocation}
            onChange={(e) => setTempLocation(e.target.value)}
          />
        </div>
        <center>
          <input type="submit" value="Mostrar" />
        </center>
      </div>
    </form>
  );
};

export default Form;
