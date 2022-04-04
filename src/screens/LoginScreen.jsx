import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { signin } from "../actions/adminActions";
import ErrorBox from "../components/ErrorBox";
import LoadingBox from "../components/LoadingBox";

export default function LoginScreen(props) {
  const adminSignin = useSelector((state) => state.adminSignin);
  const { loading, error } = adminSignin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.length === 0 && password.length === 0) {
      swal("The fields cannot be empty", {
        icon: "error",
        dangerMode: true,
      });
    } else if (email.length === 0) {
      swal("The username cannot be empty", {
        icon: "error",
        dangerMode: true,
      });
    } else if (password.length === 0) {
      swal("The password cannot be empty", {
        icon: "error",
        dangerMode: true,
      });
    } else {
      if (error) {
        console.log(error);
      } else {
        props.history.push("/");
        dispatch(signin(email.toLowerCase(), password));
      }
    }
  };

  return (
    <div className="home">
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          <img
            className="back-logo"
            src="./img/background_wallpaper.svg"
            alt=""
          />

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
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electronico"
            />
            {error == "User dont exits" && <ErrorBox error={error} />}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
            {error == "Password incorrect" && <ErrorBox error={error} />}

            <input className="home__link" type="submit" value="ENTRAR" />
          </form>
        </>
      )}
      <Link className="password-forget" to="/">
        Has olvidado tu contraseña?
      </Link>
    </div>
  );
}
