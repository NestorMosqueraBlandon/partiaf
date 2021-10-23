import React, { useState } from 'react'
import CardBooking from '../components/CardBooking'
import data from '../utils/data'
import * as timeago from "timeago.js"

export default function CoverScreen() {

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
        <div className="screen">
            <div className="center__screen">
                <div className="flex flexm">
                    <div className="box">
                        <h3>Total Entradas</h3>
                        <p>0</p>
                    </div>
                    <div className="box">
                        <h3>Entradas Efectivas</h3>
                        <p>0</p>
                    </div>
                    <div className="box">
                        <h3>Entradas no Efectivas </h3>
                        <p>0</p>
                    </div>
                </div>
                <button className="btn-create"> CREAR ENTRADA <i class='bx bxs-plus-square'></i></button>
                <div className="state">
                    <div className="state__header">
                        <h2>Entrada o Cover</h2>
                        <button><i class='bx bxs-pencil'></i> Editar</button>
                    </div>
                    <div>
                        <div className="item item-flex w-100 up">
                            <h3>TIPO DE EVENTO</h3>
                            <input type="text" name="" id=""  />
                        </div>
                        <div className="event-fields">
                            <div className="left"></div>
                            <div className="w-70">
                                <div className="w-50">

                                    <div className="item item-flex w-100">
                                        <h3>Precio</h3>
                                        <input type="number" />
                                    </div>
                                    <div className="item item-flex w-100">
                                        <h3>Cupo total</h3>
                                        <input type="number" />
                                    </div>
                                </div>
                                <div className="w-50">

                                    <div className="item item-flex w-100">
                                        <h3>Fecha</h3>
                                        <input type="date" value={timeago.format(date)} readOnly />
                                    </div>
                                    <div className="item item-flex w-100">
                                        <h3>Hora</h3>
                                        <input type="time" />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="screfooter">
                        <div className="option">
                            <div className="form-group">
                                <input type="radio" name="event-type" id="general" />
                                <label htmlFor="general">General</label>
                            </div>
                            <div className="form-group">

                                <input type="radio" name="event-type" id="especial" />
                                <label htmlFor="especial">Especial</label>
                            </div>

                        </div>
                        <h4>Descripcion de reserva:</h4>
                        <textarea name="" id="" cols="30" rows="10" value={note} ></textarea>
                    </div>
                </div>
            </div>
            <div className="right__screen">
                <div className="card__title">
                    <h4>Covers Stream</h4>
                </div>
                {data.bookings.map((booking) => (
                    <button className="button__none" onClick={() => setItem(booking.id)}>
                        <CardBooking key={booking.id} name={booking.name} number={booking.number} />
                    </button>
                ))}
            </div>
        </div>
    )
}
