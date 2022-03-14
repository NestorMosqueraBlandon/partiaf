import React, { useEffect } from "react";
import LoadingBox from "./LoadingBox";
import swal from 'sweetalert';
import { deleteStoreCover } from "../actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_COVER_RESET } from "../constants/adminConstants";

export default function CoverListScreen({ loading, covers }) {
    
    const adminSignin = useSelector((state) => state.adminSignin);
    const { adminInfo } = adminSignin;

    const storeSignin = useSelector((state) => state.storeSignin);
    const { storeInfo } = storeSignin;


  const deleteCover = useSelector((state) => state.deleteCover);
  const { success: successDelete } = deleteCover;

    const dispatch = useDispatch();

    const deleteHandler = (cover) => {
        swal('Seguro que quiere borrar ' + cover.name + '?', {
            icon: 'warning',
            buttons: ['No', 'Borrar!'],
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal('Poof! ' + cover.name + ' borrado', {
                icon: 'success',
              });
              dispatch(deleteStoreCover(adminInfo.email, storeInfo.store._id, cover._id));
            }
          });
    }

    useEffect(() => {
      if(successDelete) {
        dispatch({type: DELETE_COVER_RESET})
    }
    })
  return (
    <div className="cover__list">
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          {covers.map((cover) => (
            <div className="cover__card">
                <h4>Tipo: {cover.name}</h4>
                <p>{cover.type}</p>
                <p>Precio: {cover.price}</p>
                <p>Fecha: {cover.date}</p>
                <p>Cupos: {cover.totalLimit}</p>
                <p>Hora: {cover.hour}</p>
                <p>Descripcion: {cover.description}</p>
                <button onClick={() => deleteHandler(cover)}>Borrar <i class='bx bx-trash'></i></button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
