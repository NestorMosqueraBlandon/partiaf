import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/landing/header.css"

export default function HeaderLanding() {
  return (
    <header>
        <div className='landing__logo'>
            <img src="/img/partiaf_logo_standar.svg" alt="" />
        </div>
        <nav>
            <Link to="/home">INICIO</Link>
            <Link to="/home">NOSOTROS</Link>
            <Link to="/home">CONTACTO</Link>
        </nav>
    </header>
  )
}
