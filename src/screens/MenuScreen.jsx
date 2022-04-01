import constantsTemplate from "../constants/constantsTemplate";
import { useEffect, useState } from "react";
import menuActions from "../actions/menuActions";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import "../styles/customStyles.css";
import swal from "sweetalert";
import itemsActions from "../actions/itemsActions";
import axios from "axios";

export default function MenuScreen() {
  const dispatch = useDispatch();
  const [menuId, setMenuId] = useState();

  const AddItem = async (id) => {
    console.log("ID", id);
    await setMenuId(id);
    await setOpenModalItem(true);
  };

  // < --------------------List Process  ------------------------->
  const menuList = useSelector((state) => state.menuList);
  const { loading, data: menu } = menuList;

  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminSignin;

  const storeSignin = useSelector((state) => state.storeSignin);
  const { storeInfo } = storeSignin;

  // < --------------------Create Process  ------------------------->
  const menuCreate = useSelector((state) => state.menuCreate);
  const { success: successCreate } = menuCreate;

  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");

  const submitCreateHandler = (e) => {
    e.preventDefault();
    dispatch(
      menuActions.create({
        title: title,
        email: adminInfo.email,
        storeId: storeInfo.store._id,
      })
    );
  };

    // UPLOAD IMAGE HANDLER
  const uploadHandler = async (e, imageFIeld = "image") => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      dispatch({ type: "UPLOAD_REQUEST" });
      const { data } = await axios.post(
        "https://rveapi.herokuapp.com/api/v1/users/upload",
        bodyFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({ type: "UPLOAD_SUCCESS" });
      setItemImage(data.secure_url);
    } catch (err) {
      console.log(err);
    }
  };


  // < --------------------Create Item Process  ------------------------->
  //enviar email - storeid, menuId, name, precio
  const itemCreate = useSelector((state) => state.itemCreate);
  const { success: successCreateItem } = itemCreate;

  const [openModalItem, setOpenModalItem] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [itemImage, setItemImage] = useState("");


  const submitCreateItemHandler = (e) => {
    e.preventDefault();
    dispatch(
      itemsActions.create({
        name: name,
        price: price,
        image: itemImage,
        amount: amount,
        email: adminInfo.email,
        storeId: storeInfo.store._id,
        menuId: menuId,
      })
    );
  };

  // < --------------------delete process  ------------------------->
  const menuDelete = useSelector((state) => state.menuDelete);
  const { success: successDelete } = menuDelete;

  const deleteHandler = (menu) => {
    swal("Seguro que quieres borrar " + menu.title + "?", {
      icon: "warning",
      buttons: ["Cancelar", "Si"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! " + menu.title + " borrado", {
          icon: "success",
        });
        dispatch(
          menuActions.delete(menu._id, adminInfo.email, storeInfo.store._id)
        );
      }
    });
  };

  // < --------------------delete item process  ------------------------->
  //   idItem, email, storeid, menuid
  const itemDelete = useSelector((state) => state.itemDelete);
  const { success: succesDeleteItem } = itemDelete;

  const deleteItemHandler = (item, menu) => {
    swal("Seguro que quieres borrar " + item.name + "?", {
      icon: "warning",
      buttons: ["Cancelar", "Si"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! " + item.name + " borrado", {
          icon: "success",
        });
        dispatch(
          itemsActions.delete(
            item._id,
            adminInfo.email,
            storeInfo.store._id,
            menu._id
          )
        );
      }
    });
  };


  useEffect(() => {
    const menuConstants = new constantsTemplate("MENU");
    const itemsConstants = new constantsTemplate("ITEM");

    if (successCreate) {
      dispatch({ type: menuConstants.constants().CREATE_RESET });
      setOpenModal(false);
    }

    if (successCreateItem) {
      dispatch({ type: itemsConstants.constants().CREATE_RESET });
      setOpenModalItem(false);
    }

    if (storeInfo) {
      dispatch(menuActions.list(adminInfo.email, storeInfo.store._id));
    }

    if (successDelete) {
      dispatch({ type: menuConstants.constants().DELETE_RESET });
    }

    if (succesDeleteItem) {
      dispatch({ type: itemsConstants.constants().DELETE_RESET });
    }
  }, [
    dispatch,
    adminInfo,
    storeInfo,
    successCreate,
    successDelete,
    successCreateItem,
    succesDeleteItem,
  ]);

  return (
    <>
      <div className="screen-two">
        {loading ? (
          <LoadingBox />
        ) : (
          <div className="center__screen">
            {menu.length === undefined ? (
              <h2>NO HAY MENUS, POR FAVOR AÑADE UNO </h2>
            ) : (
              <>
                {menu.map((men) => (
                  <div key={men._id} className="card-t">
                    <h4>{men.title}</h4>

                    <ul>
                      {men.items.map((item) => (
                        <li key={men._id} className="menu-item">
                          <img className="img-preview" src={item.image} alt="" />
                          <p>{item.name} </p>

                          <span className="price"> $ {item.price}</span>
                          <div className="actions">
                            <button className="image">
                              <i className="bx bxs-image"></i>
                            </button>
                            <button
                              className="close"
                              onClick={() => deleteItemHandler(item, men)}
                            >
                              <i className="bx bxs-x-circle"></i>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="footer-card-t">
                      <button onClick={() => AddItem(men._id)}>
                        <i className="bx bx-plus-medical"></i> Agregar Item
                      </button>
                      <button onClick={() => deleteHandler(men)}>
                        <i className="bx bxs-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}

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

      {/*MODAL ITEM CREATE*/}
      <div className={openModalItem ? "openModal" : "closeModal"}>
        <div className="modal">
          <div className="modal-header">
            <h2>Crear</h2>
          </div>
          <form action="" className="form-items">
            <input
              type="text"
              placeholder="Nombre Item"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <input type="file" name="file" id="file"  onChange={(e) => uploadHandler(e, "featuredImage")}  />
            <img alt="" className="img-preview" src={itemImage}  />
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
