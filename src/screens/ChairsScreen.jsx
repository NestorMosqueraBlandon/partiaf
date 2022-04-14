import React from "react";
import { DivisaFormater } from "../utils/DivisaFormater";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import chairActions from "../actions/chairActions";
import constantsTemplate from "../constants/constantsTemplate";
import LoadingBox from "../components/LoadingBox";
export default function ChairsScreen() {

  const chairList = useSelector((state) => state.chairList);
  const { loading, data: chairs } = chairList;

  const chairCreate = useSelector((state) => state.chairCreate);
  const { success: successCreate } = chairCreate;


  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminSignin;

  const storeSignin = useSelector((state) => state.storeSignin);
  const { storeInfo } = storeSignin;


  const [openModalItem, setOpenModalItem] = useState(false);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [limit, setLimit] = useState("");


  const dispatch = useDispatch();
  const submitCreateItemHandler = (e) => {
    e.preventDefault();
    dispatch(
      chairActions.create({
        email: adminInfo.email,
        storeId: storeInfo.store._id,
        type: type,
        limit: limit,
        price: price,
        amount: amount,
      })
    );
  };

  useEffect(() => {
    const menuConstants = new constantsTemplate("MENU");
    const itemsConstants = new constantsTemplate("ITEM");

    if (successCreate) {
      dispatch({ type: menuConstants.constants().CREATE_RESET });
      setOpenModalItem(false);
    }

    // if (successCreateItem) {
    //   dispatch({ type: itemsConstants.constants().CREATE_RESET });
    //   setOpenModalItem(false);
    // }

    if (storeInfo) {
      dispatch(chairActions.list(adminInfo.email, storeInfo.store._id));
    }

    // if (successDelete) {
    //   dispatch({ type: menuConstants.constants().DELETE_RESET });
    // }

    // if (succesDeleteItem) {
    //   dispatch({ type: itemsConstants.constants().DELETE_RESET });
    // }
  }, [
    dispatch,
    adminInfo,
    storeInfo,
    successCreate,
    // successDelete,
    // successCreateItem,
    // succesDeleteItem,
  ]);
  
  return (
    <>

{loading? <LoadingBox /> : (
  

    <div className="screen">
      <div className="center__screen">
        <div className="screen-header">
          <button onClick={() => setOpenModalItem(true)}>Crear Mesa</button>

          <span>
              Cantidad de Sillas Generales: {chairs.filter((chair) => chair.type == "General").reduce((p, c) => p + c.amount, 0)}
          </span>
          <span>
              Cantidad de Sillas Privadas: {chairs.filter((chair) => chair.type == "Privado").reduce((p, c) => p + c.amount, 0)}
          </span>
          <span>
              Cantidad de Sillas Especiales: {chairs.filter((chair) => chair.type == "Especial").reduce((p, c) => p + c.amount, 0)}
          </span>
          <span>
              Cantidad de Sillas Totales: {chairs.reduce((p, c) => p + c.amount, 0)}
          </span>
        </div>


        <div className="chair__container">
            {chairs.map((chair) => (

          <div className="card__chair">
            <div className="header_card">{chair.type.toUpperCase()}</div>
            <div>
              <ul>
                <li>
                  <span> Cupos</span>: {chair.limit}
                </li>
                <li>
                  <span> Precio</span>: {DivisaFormater(chair.price)}
                </li>
                <li>
                  <span> Cantidad</span>: {chair.amount}
                </li>
                <li>
                  <span> Reservados</span>: {chair.reserved}
                </li>
                <li>
                  <span> Libres</span>: {chair.amount - chair.reserved}
                </li>
              </ul>
            </div>
          </div>
            ))}

        </div>
      </div>
    </div>

)}
    
      {/*MODAL ITEM CREATE*/}
      <div className={openModalItem ? "openModal" : "closeModal"}>
        <div className="modal">
          <div className="modal-header">
            <h2>Crear</h2>
          </div>
          <form action="" className="form-items">
            <select name="" id="" 
            onChange={(e) => setType(e.target.value)}
            >
              <option value="">Tipo</option>
              <option value="PRIVADO">Privado</option>
              <option value="GENERAL">General</option>
              <option value="ESPECIAL">Especial</option>
            </select>
            <input
              type="number"
              placeholder="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
              <input
              type="number"
              placeholder="Cantidad"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
                 <input
              type="number"
              placeholder="Cupos"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
          </form>
          <div className="modal-footer">
            <button className="btn" onClick={submitCreateItemHandler}>
              Guardar
            </button>
            <button
              className="btn btn-none"
              onClick={() => setOpenModalItem(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
