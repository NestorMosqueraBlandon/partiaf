import React from "react";
import "../../styles/landing/contents.css";

export default function Contents() {
  return (
    <div className="container__sections">
      <section>
        <div className="container__contents">
          <div className="blank_space">
            <span>PARTIAF</span>
          </div>
          <div className="text_of_contents">
            <p className="text_left">
              Encontramos y dirigimos el publico objetivo directo a tu negocio o
              establecimiento
            </p>

            <p className="text_right">
              buscamos innovar la forma de vivir la fiesta llevando al siguiente
              nivel y amplificado aquellos puntos de contacto principales entre
              empresas y usuarios, brindando una herramienta que los enseñe a
              conocer nejor a su cliente y asi garantizar una experiencia optima
              de principio a fin de quienes hacen parte de nuestra comunidad{" "}
            </p>
          </div>
          <div className="blank_space">
            <h2>¿QUE, CUANDO Y COMO?</h2>
          </div>

          <div className="image">
            <img src="/img/landing/mobile_mockup.svg" />
          </div>
        </div>
      </section>

      <section className="section_two">
        <div className="grid_one">
          <div className="dates_imagen">
            <img src="/img/landing/dates_imagen.png" />
          </div>
          <div className="container__contents">
            <h2>
              Organizamos los datos relevantes para tu empresa, obteniendo
              informacion detallada acerca del comportamiento de tu cliente
              ideal.
            </h2>
            <p>
              Reinventar la forma en que las empresas manejan los principales
              puntos de contacto con el cliente, maximizando la experiencia del
              usuario de manera optima en cada uno de los eventos, al enfocarnos
              en las necesidades puntuales del consumidor, llevando a las
              empresas a optimizar recursos y esfuerzos.
            </p>
          </div>
        </div>

        <div className="grid_two">
          <div className="text_2">
            <p>PAGA COVER!</p>
            <div className="container__span">
              <div className="group_span">
                <span>S</span>
                <span>I</span>
                <span>N</span>
              </div>
              <div className="group_span2">
                <span className="textMe">CAJEROS</span>
                <span>FILAS</span>
                <span className="textMe">O EFECTIVO</span>
              </div>
            </div>
          </div>
          <div className="imagen_disco">
            <img src="/img/landing/imagen_disco.png" />
          </div>
        </div>
      </section>
    </div>
  );
}
