import React, { useEffect, useState } from "react";

const menu = [
  {
    title: "Entradas",
    items: [
      {
        name: "Patacon",
        price: 12000,
      },
      {
        name: "Salchipapa",
        price: 18000,
      },
    ],
  },
  {
    title: "Bebidas",
    items: [
      {
        name: "Tamarindo",
        price: 5000,
      },
      {
        name: "Judo de Mango",
        price: 6000,
      },
    ],
  },
];

export default function MenuScreen() {
  const [title, setTitle] = useState("TITLE");
  const [titleTwo, setTitleTwo] = useState("Hola");


  const create = ({newTitle}) => {
      console.log("!!entro")
      menu.push(newTitle);
  }
  return (
    <div className="screen-two">
      <div className="center__screen">
        {menu.map((men, index) => (


        <div key={index} className="card-t">
          <h4>{men.title}</h4>
              
          <ul>
          {men.items.map((item, index) => (

            <li key={index} className="menu-item">
              <p>{index + 1}. {item.name} </p>
              <span className="price"> $ {item.price}</span>
              <div className="actions">
                <button className="image">
                  <i className="bx bxs-image"></i>
                </button>
                <button className="close">
                  <i className="bx bxs-x-circle"></i>
                </button>
              </div>
            </li>
          ))}

          </ul>

          <div className="footer-card-t">
            <button>
              <i className="bx bx-plus-medical"></i> Agregar Item
            </button>
            <button>Guardar</button>
          </div>
        </div>

))}


        <div className="center-extend">
          <button onClick={() => create("Ensaladas")}>Agregar Menu</button>
        </div>
      </div>
    </div>
  );
}
