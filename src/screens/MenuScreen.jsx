import constantsTemplate from "../constants/constantsTemplate";
import { useEffect, useState } from "react";
import menuActions from "../actions/menuActions";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import '../styles/customStyles.css';

export default function MenuScreen() {
  const dispatch = useDispatch();

  // < --------------------list process  ------------------------->
  const menuList = useSelector((state) => state.menuList);
  const { loading, error, data: menu } = menuList;

  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminSignin;

  const storeSignin = useSelector((state) => state.storeSignin);
  const { storeInfo } = storeSignin;

  // < --------------------create process  ------------------------->
  const menuCreate = useSelector((state) => state.menuCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = menuCreate;

  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");

  const submitCreateHandler = (e) => {
    e.preventDefault();
    dispatch(menuActions.create({  title: title, email:adminInfo.email, storeId:storeInfo.store._id}));
  };


  useEffect(() => {
    const menuConstants = new constantsTemplate("MENU");

    if (successCreate) {
      dispatch({ type: menuConstants.constants().CREATE_RESET });
      setOpenModal(false);
    }

    if (storeInfo) {
      dispatch(menuActions.list(adminInfo.email, storeInfo.store._id));
    }
  }, [dispatch, adminInfo, storeInfo, successCreate]);

  return (
    <>
      <div className="screen-two">
        {loading ? (
          <LoadingBox />
        ) : (
          <div className="center__screen">
            {menu.map((men) => (
              <div key={men._id} className="card-t">
                <h4>{men.title}</h4>

                <ul>
                  {men.items.map((item) => (
                    <li key={men._id} className="menu-item">
                      <p>{item.name} </p>

                      <span className="price"> $ {item.price}</span>
                      <div className="actions">
                        <button className="image">
                          <i className="bx bxs-image"></i>
                        </button>
                        <button className="close">
                          <i className="bx bxs-x-circle"></i>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="footer-card-t">
                  <button>
                    <i className="bx bx-plus-medical"></i> Agregar Item
                  </button>
                  <button>Guardar</button>
                </div>
              </div>
            ))}
            <div className="center-extend">
              <button onClick={() => setOpenModal(!openModal)}>
                Agregar Menu
              </button>
            </div>
          </div>
        )}
      </div>

      {/*MODAL CREATE*/}
      <div className={openModal ? "openModal" : "closeModal"}>
        <div className="modal">
          <div className="modal-header">
            <h2>Crear</h2>
          </div>
          <form action="" className="form-items">
            <input
              type="text"
              placeholder="Titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
          <div className="modal-footer">
            <button className="btn" onClick={submitCreateHandler}>
              Guardar
            </button>
            <button
              className="btn btn-none"
              onClick={() => setOpenModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
