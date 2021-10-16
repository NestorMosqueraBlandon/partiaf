import React, { useState } from 'react'
import CardBooking from '../components/CardBooking'
import data from '../utils/data'
import * as timeago from "timeago.js"

export default function BookingScreen() {
    
    const [name, setName] = useState("")
    const [note, setNote] = useState("")
    const [date, setDate] = useState("")

    const setItem = (id) => {
        data.bookings.filter((booking) => booking.id == id).map((booking) => {
            setName(booking.name)
            setNote(booking.note)
            setDate(booking.date)
        })
    }

    return (
        <div className='screen'>
            <div className="center__screen">
                <input type="text" className="search" placeholder="Buscar:" />
                <div className="flex">
                    <div className="box">
                        <h3>Total Reservas</h3>
                        <p>1254</p>
                    </div>
                    <div className="box">
                        <h3>Reservas Efectivas</h3>
                        <p>1254</p>
                    </div>
                    <div className="box">
                        <h3>Historial de Reservas </h3>
                        <p>1254</p>
                    </div>
                </div>
                <div className="state">
                    <div className="state__header">
                    <h2>Estado de reserva: Activa</h2>
                    <button><i class='bx bxs-pencil'></i> Editar</button>
                    </div>
                    <div>
                        <div className="item up">
                            <h3>INFO</h3>
                            <input type="text" name="" id="" value={name} readOnly />
                        </div>
                        <div className="item">
                            <h3>Fecha</h3>
                            <input type="text" value={timeago.format(date)} readOnly />
                        </div>
                    </div>
                    <div className="screfooter">
                        <h4>Descripcion de reserva:</h4>
                        <textarea name="" id="" cols="30" rows="10" value={note} ></textarea>
                    </div>
                </div>
            </div>
            <div className="right__screen">
                {data.bookings.map((booking) => (
                    <button className="button__none" onClick={() => setItem(booking.id)}>
                    <CardBooking key={booking.id} name={booking.name} number={booking.number}/>
                    </button>
                ))}
            </div>
        </div>
    )
}
