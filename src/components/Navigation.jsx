import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

export default function Navigation() {
    
    const [active, setActive] = useState("");


    return (
        <aside>
            <ul>
                <Link to="/" onClick={() => setActive('notifications')} className={active === "notifications"? "navigation__item active"
                  : 'navigation__item'}>

                      <div className="icon">
                        <img src="./img/warning.png" alt="" />
                      </div>
                      <div className="title">Notificaciones</div>
                </Link>
                <Link to="/" onClick={() => setActive('covers')} className={active === "covers"? "navigation__item active"
                  : 'navigation__item'}>

                      <div className="icon">
                      <img src="./img/cover.png" alt="" />
                      </div>
                      <div className="title">Covers</div>
                </Link>
                <Link to="/booking" onClick={() => setActive('booking')} className={active === "booking"? "navigation__item active"
                  : 'navigation__item'}>

                      <div className="icon">
                      <img src="./img/booking.png" alt="" />
                      </div>
                      <div className="title">Reservas</div>
                </Link>
                <Link to="/" onClick={() => setActive('buys')} className={active === "buys"? "navigation__item active"
                  : 'navigation__item'}>

                      <div className="icon">
                      <img src="./img/cash-on-delivery.png" alt="" />
                      </div>
                      <div className="title">Compras</div>
                </Link>
                <Link to="/" onClick={() => setActive('menu')} className={active === "menu"? "navigation__item active"
                  : 'navigation__item'}>

                      <div className="icon">
                      <img src="./img/menu.png" alt="" />
                      </div>
                      <div className="title">Modificar Menu</div>
                </Link>
                <Link to="/" onClick={() => setActive('staff')} className={active === "staff"? "navigation__item active"
                  : 'navigation__item'}>

                      <div className="icon">
                      <img src="./img/staff.png" alt="" />
                      </div>
                      <div className="title">Staff</div>
                </Link>
            </ul>
        </aside>
    )
}
