import React from 'react'
import "../../styles/landing/footer.css"

export default function FooterLanding() {
  return (
    <footer>
        <div className='footer__top'>

        <ul>
            <li>Productos</li>
            <li>Bares</li>
            <li>Conciertos</li>
            <li>MAterial POP</li>
            <li>Ayuda</li>
        </ul>
        <ul>
            <li>Servicios</li>
            <li>Compra INBAR</li>
            <li>Reservas</li>
            <li>Tickets</li>
            <li>Pagos</li>
        </ul>
        <ul>
            <li>Nosotros</li>
            <li>Mision</li>
            <li>Vision</li>
            <li>Proyectos</li>
            <li>Alianzas</li>
            <li>Certificados</li>
        </ul>
        <ul>
            <li>Contacto</li>
            <li>Bogota</li>
            <li>Barranquilla</li>
            <li>Santa Marta</li>
        </ul>
        </div>
        <div>
            <p>UNETE A LA FIESTA</p>
            <p>Copyright {new Date().getFullYear()} &copy; All rights Reserved</p>
        </div>
    </footer>
  )
}
