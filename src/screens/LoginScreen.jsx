import { useMutation } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGIN_USER_MUTATION } from '../graphql/Mutation';
import { useDispatch } from 'react-redux';
import { USER_SIGNIN_SUCCESS } from '../constants/userConstants';
import { AuthContext } from '../context/auth';

export default function LoginScreen(props) {
    const context = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginUser, { loading }] = useMutation(LOGIN_USER_MUTATION, {
        update(
            _,
            {
                data: {login: userData}
            }
        ){
            context.login(userData)
            console.log(userData)
            props.history.push("/")
        },
        variables: {
            email,
            password
        }
    })


    const login = (e) => {
        e.preventDefault();
        loginUser()        
    }

    return (
        <div className="home">
            <form onSubmit={login}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electronico" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                <input type="submit" value="Ingresar" />
            </form>
            <Link to="/">Has olvidado tu contraseña?</Link>
        </div>
    )
}
