import React from "react";

export default function CoverListScreen({ loading, covers }) {
    
  return (
    <div className="cover__list">
      {loading ? (
        <h4>Cargando...</h4>
      ) : (
        <>
          {covers.map((cover) => (
            <div className="cover__card">
                <h4>Tipo: {cover.name}</h4>
                <p>{cover.type}</p>
                <p>Precio: {cover.price}</p>
                <p>Fecha: {cover.date}</p>
                <p>Cupos: {cover.totalLimit}</p>
                <p>Hora: {cover.hour}</p>
                <p>Descripcion: {cover.description}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
