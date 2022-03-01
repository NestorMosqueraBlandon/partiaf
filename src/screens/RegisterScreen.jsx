import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout, signup } from '../actions/adminActions';

export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [identification, setIdentification] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true)

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    const adminSignin = useSelector((state) => state.adminSignin);
    const {adminInfo} = adminSignin;

    const storeSignin = useSelector((state) => state.storeSignin);
    const {storeInfo} = storeSignin;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signup(name, lastname, identification, email, mobile, age, address, password));
        if(adminInfo){
            props.history.push("/")
        }
        if(adminInfo && !storeInfo){
            props.history.push("/")
        }
    }

    useEffect(() => {
        if(adminInfo){
            props.replace.push("/")
        }
        if(adminInfo && !storeInfo){
            props.history.push("/")
        }
    }, [props.history, adminInfo])

  
    return (
        <div className="register">
            <div className="register-title">
                PARTIAF
            </div>

            <form onSubmit={submitHandler}>
                <p>Datos de registro</p>

                <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Apellidos" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                <input type="text" name="" id="" placeholder="CC" value={identification} onChange={(e) => setIdentification(e.target.value)} />
                <div>
                    <input type="text"placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" name="" id="" placeholder="Movil"  value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div>
                    <input type="text"placeholder="Edad" value={age} onChange={(e) => setAge(e.target.value)} />
                    <input type="text" name="" id="" placeholder="Direccion" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <p>Ingrese contrseña y confirme</p>
                <div>
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirmar contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <span className="term">Al registrase usted acepta los terminos y condiciones del servicio de PARTIAF</span>
                <a href="" className="register-link">¿Ya tiene una cuenta, desea iniciar sesión?</a>

                <div className="footer">
                    <Link to="/"><button className="btn-normal">Atras</button></Link>
                    <button >Siguiente</button>
                </div>
            </form>
            
        </div>
    )
}
