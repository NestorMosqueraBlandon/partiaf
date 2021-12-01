import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CREATE_USER_MUTATION } from '../graphql/Mutation'


export default function StoreScreen() {
    
    const [createUser, {error}] = useMutation(CREATE_USER_MUTATION)

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [nit, setNit] = useState("");
    const [mobile, setMobile] = useState("");
    const [employes, setEmployes] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addUser = () => {
        createUser({
            variables: {
                name,
                type,
                nit,
                mobile,
                employes,
                address,
                email,
                password
            }
        })
    }

    if(error){
        console.log(error)
    }

    return (
        <div className="register center">
            <h2 className="register-title">Bienvenido!</h2>
            <form action="">
                <p>Datos del establecimeinto</p>

                <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre"/>
                <input type="text" value={type}  onChange={(e) => setType(e.target.value)} placeholder="Tipo de establecimiento" />
                <input type="text" value={nit} onChange={(e) => setNit(e.target.value)} name="" id="" placeholder="NIT" />
                <div>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
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
                <a href="" className="register-link">¿Ya tiene una cuenta, desea iniciar sesión?</a>

                <div className="footer">
                    <button className="btn-normal">Atras</button>
                    <button onClick={addUser} >Siguiente</button>
                </div>
            </form>
            
        </div>
    )
}
