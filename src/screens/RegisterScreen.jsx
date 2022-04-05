import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../actions/adminActions";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [identification, setIdentification] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [password, setPassword] = useState("");

    // UPLOAD IMAGE HANDLER
    const uploadHandler = async (e, imageFIeld = "image") => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append("file", file);
        try {
          dispatch({ type: "UPLOAD_REQUEST" });
          const { data } = await axios.post(
            "https://rveapi.herokuapp.com/api/v1/users/upload",
            bodyFormData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          dispatch({ type: "UPLOAD_SUCCESS" });
          setImage(data.secure_url);
        } catch (err) {
          console.log(err);
        }
      };
    
      
  //const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminSignin;

  const storeSignin = useSelector((state) => state.storeSignin);
  const { storeInfo } = storeSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if(password.length > 8){
    dispatch(
      signup(
        name,
        lastname,
        identification,
        email,
        mobile,
        age,
        address,
        password,
        image
      )
    );
  }

    // if (adminInfo) {
    //   props.history.push("/");
    // }
    // if (adminInfo && !storeInfo) {
    //   props.history.push("/");
    // }
  };

  useEffect(() => {
    if (adminInfo) {
      props.replace.push("/");
    }
    if (adminInfo && !storeInfo) {
      props.history.push("/");
    }
  }, [props.history, adminInfo, storeInfo, props]);

  return (
    <div className="register">
      <span className="front-container-logo">
        <img
          className="front-logo"
          src="./img/resources/logo-header.svg"
          alt=""
        />
        <img
          className="front-logo-word"
          src="./img/resources/partiaf-icon.svg"
          alt=""
        />
      </span>

      <form onSubmit={submitHandler}>
        <div className="register-header">
          <p>Datos de registro</p>
          <Link to="/">
            <button className="btn-normal">Atras</button>
          </Link>
        </div>
        <div className="register-content">


        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellidos"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="CC"
            value={identification}
            onChange={(e) => setIdentification(e.target.value)}
          />
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              name=""
              id=""
              placeholder="Movil"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Edad"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Direccion"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <p>Ingrese contrseña y confirme</p>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
            className={password == confirmPassword? "" : "warning"}
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
        <input type="file" name="file" id="file"  onChange={(e) => uploadHandler(e, "featuredImage")}  />
        <img alt="" className="img-preview" src={image}  />
        </div>
        </div>


        <span className="term">
          Al registrase usted acepta los terminos y condiciones del servicio de
          PARTIAF
        </span>
        <a href="/" className="register-link">
          ¿Ya tiene una cuenta, desea iniciar sesión?
        </a>

        <div className="footer"></div>
        <button className="register-btn">Siguiente</button>
      </form>
    </div>
  );
}
