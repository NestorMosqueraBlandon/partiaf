import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeScreen() {
    return (
        <div className="home">
            <Link className="home__link" to="/login">Iniciar sesión</Link>
            <Link className="home__link" to="/register">Crear usuario</Link>
            <Link to="/">Has olvidado tu contraseña?</Link>
        </div>
    )
}
