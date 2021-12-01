import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="logo"><i className='bx bx-world'></i> PARTIAF</div>
                <div className="setting">
                    <Link to='/settings' className="color">
                    <i className='bx bxs-cog'></i> Configuracion
                </Link>

                </div>
            </nav>
        </header>
    )
}
