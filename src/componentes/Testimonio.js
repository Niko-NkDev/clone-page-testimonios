import React from "react"; // me permite usar todo el poder de ract en mi componente.
import "../style-sheet/Testimonio.css";

function Testimonio(props) {
  // componente funcional
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)} //plantillas literales -- comillas invertidas con alt+96
        alt="Foto de perfil"
        height={"200px"}
        width={"200px"}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio-pais">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
