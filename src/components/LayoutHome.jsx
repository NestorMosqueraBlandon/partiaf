import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

export default function LayoutHome({children}) {
    return (
        <div>
            <Header />
            {children}

            <Link to='/'> <button>CREAR NEGOCIO </button></Link>
        </div>
    )
}
