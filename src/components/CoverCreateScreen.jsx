import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as timeago from "timeago.js";
import { createStoreCover } from "../actions/adminActions";
import { STORE_COVER_RESET } from "../constants/adminConstants";

export default function CoverCreateScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("General");
  const [totalLimit, setTotalLimit] = useState("");


  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminSignin;

  const storeSignin = useSelector((state) => state.storeSignin);
  const { storeInfo } = storeSignin;

  const createCover = useSelector((state) => state.createCover);
  const { loading, error, success: successCreate } = createCover;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(hour)
    console.log(type)
    dispatch(
      createStoreCover(
        adminInfo.email,
        storeInfo.store._id,
        type,
        date,
        hour,
        price,
        description,
        totalLimit,
        name,
      )
    );
  };

  console.log("SUCCESS", successCreate)
  console.log("LOADING", loading)

  useEffect(() => {
    if(successCreate) {
        console.log("ENTROOO")
        dispatch({type: STORE_COVER_RESET})
        setName("");
        setDescription("");
        setDate("");
        setHour("");
        setPrice("");
        setType("");
        setTotalLimit("");
    }
  }, [dispatch, successCreate])

  return (
    <div className="state">
      <div className="state__header">
        <h2>Entrada o Cover</h2>
        <button onClick={submitHandler}>
          <i className="bx bxs-pencil"></i> Guardar
        </button>
      </div>
      <div>
        <div className="item item-flex w-100 up">
          <h3>TIPO DE EVENTO</h3>
          <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="event-fields">
          <div className="left"></div>
          <div className="w-70">
            <div className="w-50">
              <div className="item item-flex w-100">
                <h3>Precio</h3>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
              </div>
              <div className="item item-flex w-100">
                <h3>Cupo total</h3>
                <input type="number" value={totalLimit} onChange={(e) => setTotalLimit(e.target.value)} required />
              </div>
            </div>
            <div className="w-50">
              <div className="item item-flex w-100">
                <h3>Fecha</h3>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
              </div>
              <div className="item item-flex w-100">
                <h3>Hora</h3>
                <input type="text" value={hour} onChange={(e) => setHour(e.target.value)} required />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="screfooter">
        <div className="option">
          <div className="form-group">
            <input type="radio" name="type" id="general" value="General" onChange={(e) => setType(e.target.value)} required checked />
            <label htmlFor="general" >General</label>
          </div>
          <div className="form-group">
            <input type="radio" name="type" id="especial" value="Especial" onChange={(e) => setType(e.target.value)} required />
            <label htmlFor="especial" >Especial</label>
          </div>
        </div>
        <h4>Descripcion de reserva:</h4>
        <textarea name="" id="" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
    </div>
  );
}
