import React from 'react'
import { Link } from 'react-router-dom'

export default function BusinessScreen() {
    return (
        <div className="bussines">
            <h2>Bienvenido!</h2>
            <picture>
                <img src="" alt="" />
            </picture>
            <h3>Juan Carlos Prado</h3>
            <p>Por favor selecciona tu negocio</p>
            <Link to="/store">Añadir nuevo</Link>
        </div>
    )
}
