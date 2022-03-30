import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";

export default function HomeScreen() {
  const adminSignin = useSelector((state) => state.adminSignin);
  const { loading } = adminSignin;

  return (
    <div className="home">
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          <Link className="home__link" to="/login">
            Iniciar sesión
          </Link>
          <Link className="home__link" to="/register">
            Crear usuario
          </Link>
          <Link to="/">Has olvidado tu contraseña?</Link>
        </>
      )}
    </div>
  );
}
