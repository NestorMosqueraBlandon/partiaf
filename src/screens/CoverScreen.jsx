import React, { useEffect, useState } from "react";
import CardBooking from "../components/CardBooking";
import data from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import CoverCreateScreen from "../components/CoverCreateScreen";
import { listCovers } from "../actions/adminActions";
import CoverListScreen from "../components/CoverListScreen";
import { STORE_COVER_RESET } from "../constants/adminConstants";

export default function CoverScreen(props) {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  const [thatScreen, setThatScreen] = useState('Create');

  const setItem = (id) => {
    data.bookings
      .filter((booking) => booking.id == id)
      .map((booking) => {
        setName(booking.name);
        setNote(booking.note);
        setDate(booking.date);
      });
  };

  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminSignin;

  const storeSignin = useSelector((state) => state.storeSignin);
  const { storeInfo } = storeSignin;

  const coversList = useSelector((state) => state.coversList);
  const { loading: loadingList, error: errorList, covers } = coversList;

  const createCover = useSelector((state) => state.createCover);
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = createCover;

  const dispatch = useDispatch();


  useEffect(() => {
    if(successCreate) {
      

      dispatch({type: STORE_COVER_RESET})
      setThatScreen("List")
  }
    dispatch(listCovers(adminInfo.email, storeInfo.store._id))

  }, [dispatch, adminInfo, storeInfo, successCreate])

  

  return (
    <div className="screen">
      <div className="center__screen">
        <div className="flex flexm">
          <div className="box">
            <h3>Total Entradas</h3>
            {loadingList? <h6>Cargando...</h6> : (
              <p>{covers.length}</p>
            )}
          </div>
          <div className="box">
            <h3>Entradas Efectivas</h3>
            <p>0</p>
          </div>
          <div className="box">
            <h3>Entradas no Efectivas </h3>
            <p>0</p>
          </div>
        </div>
        {thatScreen == "List" ? (
          <button className="btn-create" onClick={() => setThatScreen('Create')}>
          {" "}
          CREAR ENTRADA <i className="bx bxs-plus-square"></i>
        </button>
        ): 
        (
          <button className="btn-create" onClick={() => setThatScreen('List')}>
          {" "}
          LISTA DE ENTRADAS <i className="bx bxs-plus-square"></i>
        </button>
        )}

        {thatScreen == "List"? (
          <CoverListScreen loading={loadingList} covers={covers} />
        ): (
          <CoverCreateScreen />

        )}
      </div>
      <div className="right__screen">
        <div className="card__title">
          <h4>Covers Stream</h4>
        </div>
        {/* {data.bookings.map((booking) => (
          <button className="button__none" onClick={() => setItem(booking.id)}>
            <CardBooking
              key={booking.id}
              name={booking.name}
              number={booking.number}
            />
          </button>
        ))} */}
      </div>
    </div>
  );
}
