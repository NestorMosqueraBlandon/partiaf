import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { signin } from "../actions/adminActions";
import LoadingBox from "../components/LoadingBox";

export default function LoginScreen(props) {
  const adminSignin = useSelector((state) => state.adminSignin);
  const { loading } = adminSignin;

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
      dispatch(signin(email.toLowerCase(), password));
      props.history.push("/");
    }
  };

  return (
    <div className="home">
      {loading ? (
        <LoadingBox />
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
