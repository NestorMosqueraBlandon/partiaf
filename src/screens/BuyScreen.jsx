import React, { useState } from 'react'
import CardBooking from '../components/CardBooking'
import data from '../utils/data'
import * as timeago from "timeago.js"

export default function BuyScreen() {
    
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
            <div className="center__screen state-scroll">
                <input type="text" className="search m-b" placeholder="Buscar:" />
                <div className="state-card">
                    <div className="state__header">
                    <h3>OWEN WILSON / MESA 4 / M. FELIPE GRANADOS</h3>
                    <span className="corner"><i className='bx bxs-star' ></i></span>
                    </div>
                    <div className="buy_item-list">
                        <div className="buy_item">
                            <p>10 Covers</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>2 Bot. Buchannans</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>8 Mojitos</p>
                            <span>$ 48.000</span>
                        </div>
                        <div className="buy_item">
                            <p>4 SnackPack</p>
                            <span>$ 120.000</span>
                        </div>
                    </div>
                </div>
                <div className="state-card">
                    <div className="state__header">
                    <h3>OWEN WILSON / MESA 4 / M. FELIPE GRANADOS</h3>
                    <span className="corner"><i className='bx bxs-star' ></i></span>
                    </div>
                    <div className="buy_item-list">
                        <div className="buy_item">
                            <p>10 Covers</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>2 Bot. Buchannans</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>8 Mojitos</p>
                            <span>48.000</span>
                        </div>
                        <div className="buy_item">
                            <p>4 SnackPack</p>
                            <span>$ 120.000</span>
                        </div>
                    </div>
                </div>
                <div className="state-card">
                    <div className="state__header">
                    <h3>OWEN WILSON / MESA 4 / M. FELIPE GRANADOS</h3>
                    <span className="corner"><i className='bx bxs-star' ></i></span>
                    </div>
                    <div className="buy_item-list">
                        <div className="buy_item">
                            <p>10 Covers</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>2 Bot. Buchannans</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>8 Mojitos</p>
                            <span>$ 48.000</span>
                        </div>
                        <div className="buy_item">
                            <p>4 SnackPack</p>
                            <span>$ 120.000</span>
                        </div>
                    </div>
                </div>
                <div className="state-card">
                    <div className="state__header">
                    <h3>OWEN WILSON / MESA 4 / M. FELIPE GRANADOS</h3>
                    <span className="corner"><i className='bx bxs-star' ></i></span>
                    </div>
                    <div className="buy_item-list">
                        <div className="buy_item">
                            <p>10 Covers</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>2 Bot. Buchannans</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>8 Mojitos</p>
                            <span>48.000</span>
                        </div>
                        <div className="buy_item">
                            <p>4 SnackPack</p>
                            <span>$ 120.000</span>
                        </div>
                    </div>
                </div>
                <div className="state-card">
                    <div className="state__header">
                    <h3>OWEN WILSON / MESA 4 / M. FELIPE GRANADOS</h3>
                    <span className="corner"><i className='bx bxs-star' ></i></span>
                    </div>
                    <div className="buy_item-list">
                        <div className="buy_item">
                            <p>10 Covers</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>2 Bot. Buchannans</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>8 Mojitos</p>
                            <span>48.000</span>
                        </div>
                        <div className="buy_item">
                            <p>4 SnackPack</p>
                            <span>$ 120.000</span>
                        </div>
                    </div>
                </div>
                <div className="state-card">
                    <div className="state__header">
                    <h3>OWEN WILSON / MESA 4 / M. FELIPE GRANADOS</h3>
                    <span className="corner"><i className='bx bxs-star' ></i></span>
                    </div>
                    <div className="buy_item-list">
                        <div className="buy_item">
                            <p>10 Covers</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>2 Bot. Buchannans</p>
                            <span>$ 200.000</span>
                        </div>
                        <div className="buy_item">
                            <p>8 Mojitos</p>
                            <span>48.000</span>
                        </div>
                        <div className="buy_item">
                            <p>4 SnackPack</p>
                            <span>$ 120.000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right__screen">
            <div className="card__title">
                    <h4>Compras Stream</h4>
                </div>
                {data.bookings.map((booking) => (
                    <button className="button__none" onClick={() => setItem(booking.id)}>
                    <CardBooking key={booking.id} name={booking.name} number={booking.number}/>
                    </button>
                ))}
            </div>
        </div>
    )
}
