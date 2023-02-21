import React, { useState } from "react";
import ReactDOM from "react-dom";
import Name from "./NameComponent";
import Location from "./LocationComponent";
import UserForm from "./UserForm";
import "./styles.css";
import { AiOutlineArrowDown } from "react-icons/ai";

function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <div className="column card leftCard">
        <h1 style={{ textAlign: "center" }}>Ejercicio Práctico</h1>
        <p>
          En una aplicación de React es muy común pasar datos de arriba a abajo
          (del padre al hijo), pero esto puede ser complicado si es necesario
          pasar información del padre a componentes muy anidados o niveles muy
          inferiores.
        </p>
        <p>
          Implemente una solución para que los valores de <b>Nombre</b> y{" "}
          <b>Ubicación</b> estén accesibles en sus respectivos componentes sin
          tener que pasarles parámetros de manera explícita.
        </p>
      </div>
      <div className="column">
        <UserForm setName={setName} setLocation={setLocation} />

        <div className="card rightCard">
          {/*eslint-disable-next-line*/}
          {name !== "" ? (
            <>
              <p
                className="is-size-4"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Información del Usuario: {" "}
              </p>
              <Name name={name} />
              <Location location={location} />
              {name !== "" && (
                <center>
                  <input
                    type="submit"
                    value="Reiniciar"
                    onClick={() => {
                      setName("");
                      setLocation("");
                    }}
                  />
                </center>
              )}
            </>
          ) : (
            <div style={{marginTop: '90px'}}>
              <p
                className="is-size-4"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                <AiOutlineArrowDown /> Ingresa información para mostrarla aqui{" "}
                <AiOutlineArrowDown />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
