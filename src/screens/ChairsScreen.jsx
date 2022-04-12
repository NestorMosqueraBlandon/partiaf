import React from "react";
import { DivisaFormater } from "../utils/DivisaFormater";

const chairs = [
    {
        type: "General",
        limit: 8,
        price: 50000,
        amount: 1,
        reserved: 0,
    },
    {
        type: "Privado",
        limit: 4,
        price: 350000,
        amount: 3,
        reserved: 1,
    },
    {
        type: "General",
        limit: 4,
        price: 50000,
        amount: 3,
        reserved: 1,
    },
    {
        type: "Especial",
        limit: 4,
        price: 100000,
        amount: 3,
        reserved: 1,
    },
    {
        type: "General",
        limit: 4,
        price: 50000,
        amount: 3,
        reserved: 1,
    },
    {
        type: "Privado",
        limit: 4,
        price: 250000,
        amount: 3,
        reserved: 1,
    },
    {
        type: "Privado",
        limit: 4,
        price: 250000,
        amount: 3,
        reserved: 1,
    },
    {
        type: "Privado",
        limit: 8,
        price: 750000,
        amount: 1,
        reserved: 0,
    }
];

export default function ChairsScreen() {
  return (
    <div className="screen">
      <div className="center__screen">
        <div className="screen-header">
          <button>Crear Mesa</button>

          <span>
              Cantidad de Sillas Generales: {chairs.filter((chair) => chair.type == "General").reduce((p, c) => p + c.amount, 0)}
          </span>
          <span>
              Cantidad de Sillas Privadas: {chairs.filter((chair) => chair.type == "Privado").reduce((p, c) => p + c.amount, 0)}
          </span>
          <span>
              Cantidad de Sillas Especiales: {chairs.filter((chair) => chair.type == "Especial").reduce((p, c) => p + c.amount, 0)}
          </span>
          <span>
              Cantidad de Sillas Totales: {chairs.reduce((p, c) => p + c.amount, 0)}
          </span>
        </div>

        <div className="chair__container">
            {chairs.map((chair) => (

          <div className="card__chair">
            <div className="header_card">{chair.type.toUpperCase()}</div>
            <div>
              <ul>
                <li>
                  <span> Cupos</span>: {chair.limit}
                </li>
                <li>
                  <span> Precio</span>: {DivisaFormater(chair.price)}
                </li>
                <li>
                  <span> Cantidad</span>: {chair.amount}
                </li>
                <li>
                  <span> Reservados</span>: {chair.reserved}
                </li>
                <li>
                  <span> Libres</span>: {chair.amount - chair.reserved}
                </li>
              </ul>
            </div>
          </div>
            ))}

        </div>
      </div>
    </div>
  );
}
