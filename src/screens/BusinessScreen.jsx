import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listStores, signinStore } from "../actions/adminActions";
import LoadingBox from "../components/LoadingBox";

export default function BusinessScreen(props) {
  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminSignin;

  const [openModal, setOpenModal] = useState(false);
  const [barSelected, setBarSelected] = useState([]);

  const storeList = useSelector((state) => state.storeList);
  const { loading, stores } = storeList;

  const storeSignin = useSelector((state) => state.storeSignin);
  const { storeInfo, error: errorSignin } = storeSignin;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listStores(adminInfo.email));
  }, [dispatch, adminInfo]);

  const selectBar = (store) => {
    setOpenModal(true);
    setBarSelected(store);
  };

  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("entro");
    dispatch(signinStore(adminInfo.email, barSelected._id, password));
    if (storeInfo) {
      props.history.push("/home");
    }
  };

  if (!loading) {
    console.log(stores);
  }
  return (
    <>
      <div className="bussines">
        <h2>Bienvenido!</h2>
        <picture>
          <img src="" alt="" />
        </picture>
        <h3>{adminInfo.name}</h3>
        <p>Por favor selecciona tu negocio</p>
        {loading ? (
          <LoadingBox />
        ) : (
          <>
          {stores? (


              <div className="stores-list">
              {stores.map((store) => (
                  <button
                  onClick={() => selectBar(store)}
                  key={store._id}
                  className="store-link"
                >
                  {store.name}
                </button>
              ))}
            </div>
              ): (<h3>No hay Negocios</h3>)}
          </>
        )}

        <Link to="/store">Añadir nuevo</Link>
      </div>

      <div className={openModal ? "modalStore active" : "modalStore"}>
        <div>
          {barSelected ? (
            <span>{errorSignin ? errorSignin : barSelected.name}</span>
          ) : (
            <h2>NO BAR</h2>
          )}

          {/* <form onSubmit={submitHandler} className="form-store"> */}

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese la contrasena del negocio"
          />
          <button onClick={submitHandler}>Continuar</button>
          {/* </form> */}
        </div>
      </div>
    </>
  );
}
