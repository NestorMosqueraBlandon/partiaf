import React from 'react'
import "../../styles/landing/footer.css"

export default function FooterLanding() {
  return (
    <footer>
        <div className='footer__top'>

        <ul>
            <li className='title__list'>Productos</li>
            <li>Bares</li>
            <li>Conciertos</li>
            <li>MAterial POP</li>
            <li>Ayuda</li>
        </ul>
        <ul>
            <li className='title__list'>Servicios</li>
            <li>Compra INBAR</li>
            <li>Reservas</li>
            <li>Tickets</li>
            <li>Pagos</li>
        </ul>
        <ul>
            <li className='title__list'>Nosotros</li>
            <li>Mision</li>
            <li>Vision</li>
            <li>Proyectos</li>
            <li>Alianzas</li>
            <li>Certificados</li>
        </ul>
        <ul>
            <li className='title__list'>Contacto</li>
            <li>Bogota</li>
            <li>Barranquilla</li>
            <li>Santa Marta</li>
        </ul>
        </div>
        <div className='slogan__footer'>
            <p className='slogan'>UNETE A LA FIESTA!</p>
            <div className='linea'></div>
            <div className="icons">
            <img src="/img/landing/facebook_dark.svg" alt="" />
            <img src="/img/landing/twitter_dark.svg" alt="" />
            <img src="/img/landing/instagram_dark.svg" alt="" />
            <img src="/img/landing/youtube_dark.svg" alt="" />
            </div>
            <p>Copyright {new Date().getFullYear()} &copy; All rights Reserved</p>
        </div>
    </footer>
  )
}
