import React, { useEffect, useState } from "react";
import LoadingBox from "./LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_COVER_RESET,
  UPDATE_COVER_RESET,
} from "../constants/adminConstants";
import CoverUpdateScreen from "./CoverUpdateScreen";
import CardBookin from "./CardBookin";

export default function BookingListScreen({ loading, bookings }) {
  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminSignin;

  const storeSignin = useSelector((state) => state.storeSignin);
  const { storeInfo } = storeSignin;

  const [update, setUpdate] = useState(false);
  const [coverSelect, setCoverSelect] = useState({});

  const deleteCover = useSelector((state) => state.deleteCover);
  const { success: successDelete } = deleteCover;

  const updateCover = useSelector((state) => state.updateCover);
  const { success: successUpdate } = updateCover;

  const dispatch = useDispatch();

  /*
  const deleteHandler = (cover) => {
    swal("Seguro que quiere borrar " + cover.name + "?", {
      icon: "warning",
      buttons: ["No", "Borrar!"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! " + cover.name + " borrado", {
          icon: "success",
        });
        dispatch(
          deleteStoreCover(adminInfo.email, storeInfo.store._id, cover._id)
        );
      }
    });
  };
 

  const updateHandler = async (cover) => {
    console.log(cover);
    await setCoverSelect(cover);
    await setUpdate(true);
    console.log(coverSelect);
  };

   */
  useEffect(() => {
    if (successDelete) {
      dispatch({ type: DELETE_COVER_RESET });
    }

    if (successUpdate) {
      dispatch({ type: UPDATE_COVER_RESET });
      setUpdate(false);
    }
  }, [dispatch, successUpdate, successDelete]);
  return (
    <>
      {update ? (
        <CoverUpdateScreen cover={coverSelect} />
      ) : (
        <div className="cover__list">
          {loading ? (
            <LoadingBox />
          ) : (
            <>
              {bookings == undefined ? (
                <h2>NO HAY RESERVAS</h2>
              ) : (
                <>
                  {bookings.map((booking) => (
                    <CardBookin
                      name={booking.info}
                      cupos={booking.cupo}
                      time={booking.hour}
                      date={booking.date}
                      state={booking.state}
                    />
                  ))}
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
