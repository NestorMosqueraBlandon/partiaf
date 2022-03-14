import { useMutation } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN_USER_MUTATION } from "../graphql/Mutation";
import { USER_SIGNIN_SUCCESS } from "../constants/userConstants";
import { AuthContext } from "../context/auth";
import swal from "sweetalert";
import { signin } from "../actions/adminActions";

export default function LoginScreen(props) {
  const adminSignin = useSelector((state) => state.adminSignin);
  const { loading, error, adminInfo } = adminSignin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

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
      dispatch(signin(email.toLowerCase(), password));
      props.history.push("/");
    }
  };

  return (
    <div className="home">
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <form onSubmit={submitHandler}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electronico"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <input type="submit" value="Ingresar" />
        </form>
      )}
      <Link to="/">Has olvidado tu contraseña?</Link>
    </div>
  );
}
