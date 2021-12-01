import React from 'react'

export default function CardBookin({name, state, cupos, time, date}) {
    return (
        <div className="card card-new">
            <div className="card-header"><p> Estado de reserva: {state} </p></div>
            <div>
            INFO
            <h2>{name}</h2>
            </div>
            <ul>
                <li>Cupos: {cupos}</li>
                <li>Hora: {time}</li>
                <li>Fecha: {date}</li>
            </ul>
        </div>
    )
}
