import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";

export default function HomeScreen() {
  const adminSignin = useSelector((state) => state.adminSignin);
  const { loading, error, adminInfo } = adminSignin;

  return (
    <div className="home">
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          <img className="img_home" src="/img/logo_junto.svg" alt="" />
          <Link className="home__link__btn" to="/login">
            Iniciar sesión
          </Link>
          <Link className="home__link" to="/register">
            Crear usuario
          </Link>
        </>
      )}
    </div>
  );
}
