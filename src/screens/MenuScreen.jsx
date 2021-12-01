import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { LOAD_MENUS } from '../graphql/Queries'

export default function MenuScreen() {

    const {loading, error, data}= useQuery(LOAD_MENUS)

    useEffect(() => {

    }, [data])

    
    if (error) return <p>Error :(</p>;
    return (
        <div className="screen-two">
                    {/* <h2>MENU</h2> */}

            {loading ? <div>Cargando...</div> : 
            <div className="center__screen">

                <div className="card-t">
                    <h4>ENTRADAS</h4>
                    <ul>
                        <li className="menu-item">
                            <p>1. Guacamole </p> 
                            <span> $80.000 </span> 
                                <div className="actions">
                                    <button className="image"><i class='bx bxs-image' ></i></button>
                                    <button className="close"><i class='bx bxs-x-circle' ></i></button>
                                </div>
                            </li>
                            <li className="menu-item">
                            <p>1. BRUSCHETTA TOMATO AND MOZZARELLA </p> 
                            <span> $124.000 </span> 
                                <div className="actions">
                                    <button className="image"><i class='bx bxs-image' ></i></button>
                                    <button className="close"><i class='bx bxs-x-circle' ></i></button>
                                </div>
                            </li>
                            <li className="menu-item">
                            <p>1. BRUSCHETTA TOMATO, GARLIC AND OLIVES </p> 
                            <span> $225.000 </span> 
                                <div className="actions">
                                    <button className="image"><i class='bx bxs-image' ></i></button>
                                    <button className="close"><i class='bx bxs-x-circle' ></i></button>
                                </div>
                            </li>
                    </ul>

                    <div className="footer-card-t">
                        <button><i class='bx bx-plus-medical' ></i> Agregar Item</button>
                        <button>Guardar</button>
                    </div>
                </div>
                <div className="card-t">
                    <h4>PLATOS FUERTES</h4>
                    <ul>
                        <li className="menu-item">
                            <p>1. Guacamole </p> 
                            <span> $80.000 </span> 
                                <div className="actions">
                                    <button className="image"><i class='bx bxs-image' ></i></button>
                                    <button className="close"><i class='bx bxs-x-circle' ></i></button>
                                </div>
                            </li>
                            <li className="menu-item">
                            <p>1. BRUSCHETTA TOMATO AND MOZZARELLA </p> 
                            <span> $124.000 </span> 
                                <div className="actions">
                                    <button className="image"><i class='bx bxs-image' ></i></button>
                                    <button className="close"><i class='bx bxs-x-circle' ></i></button>
                                </div>
                            </li>
                            <li className="menu-item">
                            <p>1. BRUSCHETTA TOMATO, GARLIC AND OLIVES </p> 
                            <span> $225.000 </span> 
                                <div className="actions">
                                    <button className="image"><i class='bx bxs-image' ></i></button>
                                    <button className="close"><i class='bx bxs-x-circle' ></i></button>
                                </div>
                            </li>
                    </ul>

                    <div className="footer-card-t">
                        <button><i class='bx bx-plus-medical' ></i> Agregar Item</button>
                        <button>Guardar</button>
                    </div>
                </div>
                <div className="card-t">
                    <h4>POSTRES</h4>
                    <ul>
                        <li className="menu-item">
                            <p>1. Guacamole </p> 
                            <span> $80.000 </span> 
                                <div className="actions">
                                    <button className="image"><i class='bx bxs-image' ></i></button>
                                    <button className="close"><i class='bx bxs-x-circle' ></i></button>
                                </div>
                            </li>
                            <li className="menu-item">
                            <p>1. BRUSCHETTA TOMATO AND MOZZARELLA </p> 
                            <span> $124.000 </span> 
                                <div className="actions">
                                    <button className="image"><i class='bx bxs-image' ></i></button>
                                    <button className="close"><i class='bx bxs-x-circle' ></i></button>
                                </div>
                            </li>
                            <li className="menu-item">
                            <p>1. BRUSCHETTA TOMATO, GARLIC AND OLIVES </p> 
                            <span> $225.000 </span> 
                                <div className="actions">
                                    <button className="image"><i class='bx bxs-image' ></i></button>
                                    <button className="close"><i class='bx bxs-x-circle' ></i></button>
                                </div>
                            </li>
                    </ul>

                    <div className="footer-card-t">
                        <button><i class='bx bx-plus-medical' ></i> Agregar Item</button>
                        <button>Guardar</button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
