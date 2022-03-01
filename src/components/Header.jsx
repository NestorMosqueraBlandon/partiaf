import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom';
import { signout } from '../actions/adminActions';
import { useDispatch } from 'react-redux';

export default function Header() {

    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout());
      };

    return (
        <header>
            <nav>
                <div className="logo"><i className='bx bx-world'></i> PARTIAF</div>
                <div className="setting">
                    <Link to='/settings' className="color">
                    <i className='bx bxs-cog'></i> Configuracion
                </Link>
                <button className='ml-10' onClick={signoutHandler}>Salir</button>
                </div>

            </nav>
        </header>
    )
}
