import React from 'react'
import '../styles/header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <div className="logo"><i className='bx bx-world'></i> PARTIAF</div>
                <div className="setting">
                <i className='bx bxs-cog'></i> Configuracion
                </div>
            </nav>
        </header>
    )
}
