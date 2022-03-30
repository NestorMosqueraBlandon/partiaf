import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStore } from '../actions/adminActions';

export default function StoreScreen(props) {
    
    const adminSignin = useSelector((state) => state.adminSignin);
    const { adminInfo } = adminSignin;

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [nit, setNit] = useState("");
    const [mobile, setMobile] = useState("");
    const [employes, setEmployes] = useState("");
    const [address, setAddress] = useState("");
    const [emailStore, setEmailStore] = useState("");
    const [password, setPassword] = useState("");
    const [email] = useState(adminInfo.email);
    const [totalLimit, setTotalLimit] = useState("");


    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createStore({name, type, nit, mobile, employes, address, emailStore, password, email, totalLimit}))
        props.history.push('/home')
    } 


    return (
        <div className="register center">
            <h2 className="register-title new-title">Bienvenido!</h2>
            <form onSubmit={submitHandler}>
                <p>Datos del establecimeinto</p>

                <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre"/>
                <label htmlFor="" className='form-label'>Tipo de Establecimeinto</label>
                <select name="" id="" value={type} onChange={(e) => setType(e.target.value)} >
                    <option value="Discoteca">Discoteca</option>
                    <option value="Bar">Bar</option>
                    <option value="Gastrobar">Gastrobar</option>

                </select>
                <input type="text" value={nit} onChange={(e) => setNit(e.target.value)} name="" id="" placeholder="NIT" />
                <input type="text" value={totalLimit} onChange={(e) => setTotalLimit(e.target.value)} name="" id="" placeholder="Cupo total" />
                <div>
                    <input type="text" value={emailStore} onChange={(e) => setEmailStore(e.target.value)} placeholder="Email" />
                    <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} name="" id="" placeholder="Movil" />
                </div>
                <div>
                    <input type="text" value={employes} onChange={(e) => setEmployes(e.target.value)} placeholder="N° de empleados" />
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="" id="" placeholder="Direccion" />
                </div>

                <p>Ingrese contrseña y confirme</p>
                <div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                    <input type="password" placeholder="Confirmar contraseña" />
                </div>
                <span className="term">Al registrase usted acepta los terminos y condiciones del servicio de PARTIAF</span>
                <a href="/" className="register-link">¿Ya tiene una cuenta, desea iniciar sesión?</a>

                <div className="footer">
                    <Link to="/"><button className="btn-normal">Atras</button></Link>
                    <button >Siguiente</button>
                </div>
            </form>
            
        </div>
    )
}
