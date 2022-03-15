import React from 'react'
import CardBooking from '../components/CardBooking'
import data from '../utils/data'
import CardBookin from '../components/CardBookin'

export default function BookingScreen() {
    

    const setItem = (id) => {
        // data.bookings.filter((booking) => booking.id == id).map((booking) => {
        //     setName(booking.name)
        //     setNote(booking.note)
        //     setDate(booking.date)
        // })
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
                <div className="flex">
                <button className="btn-create"> CREAR RESERVA <i className='bx bxs-plus-square'></i></button>
                <div className="right-buttons">
                <button><i className='bx bx-calendar' ></i></button>
                </div>
                </div>
                <div className="flex wrap">
                    <CardBookin name="Owen Wilson" cupos="22" time="7:30pm" date="12/03/2021" state="Finalizada" />
                    <CardBookin name="Karla Ramirez" cupos="22" time="7:30pm" date="12/03/2021" state="Finalizada" />
                    <CardBookin name="Carlos Cuesta" cupos="22" time="7:30pm" date="12/03/2021" state="Activa" />
                    <CardBookin name="Falipe Giulliani" cupos="22" time="7:30pm" date="12/03/2021" state="Finalizada" />
                    <CardBookin name="Arturo Fernandez" cupos="22" time="7:30pm" date="12/03/2021" state="Activa" />
                    <CardBookin name="Nicolas Tovar" cupos="22" time="7:30pm" date="12/03/2021" state="Finalizada" />
                    <CardBookin name="Owen Wilson" cupos="22" time="7:30pm" date="12/03/2021" state="Finalizada" />
                    <CardBookin name="Karla Ramirez" cupos="22" time="7:30pm" date="12/03/2021" state="Finalizada" />
                    <CardBookin name="Carlos Cuesta" cupos="22" time="7:30pm" date="12/03/2021" state="Activa" />
                    <CardBookin name="Falipe Giulliani" cupos="22" time="7:30pm" date="12/03/2021" state="Finalizada" />
                    <CardBookin name="Arturo Fernandez" cupos="22" time="7:30pm" date="12/03/2021" state="Activa" />
                    <CardBookin name="Nicolas Tovar" cupos="22" time="7:30pm" date="12/03/2021" state="Finalizada" />
                </div>
                {/* <div className="state">
                    <div className="state__header">
                    <h2>Estado de reserva: Activa</h2>
                    <button><i className='bx bxs-pencil'></i> Editar</button>
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
                </div> */}
            </div>
            <div className="right__screen">
                {data.bookings.map((booking) => (
                    <button key={booking.id} className="button__none" onClick={() => setItem(booking.id)}>
                    <CardBooking key={booking.id} name={booking.name} number={booking.number}/>
                    </button>
                ))}
            </div>
        </div>
    )
}
