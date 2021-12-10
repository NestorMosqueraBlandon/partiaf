import { Link } from 'react-router-dom';

export default function RegisterScreen() {
    return (
        <div className="register">
            <div className="register-title">
                PARTIAF
            </div>

            <form action="">
                <p>Datos de registro</p>

                <input type="text"  placeholder="Nombre"/>
                <input type="text" placeholder="Apellidos" />
                <input type="text" name="" id="" placeholder="CC" />
                <div>
                    <input type="text"placeholder="Email" />
                    <input type="text" name="" id="" placeholder="Movil" />
                </div>
                <div>
                    <input type="text"placeholder="Edad" />
                    <input type="text" name="" id="" placeholder="Direccion" />
                </div>

                <p>Ingrese contrseña y confirme</p>
                <div>
                    <input type="password" placeholder="Contraseña" />
                    <input type="password" placeholder="Confirmar contraseña" />
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
