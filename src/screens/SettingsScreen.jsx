import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStore } from "../actions/adminActions";

export default function SettingsScreen(props) {

    const [password, setPassword] = useState('');
    const [openModal, setOpenModal] = useState(false);


    const adminSignin = useSelector((state) => state.adminSignin);
    const { adminInfo } = adminSignin;
    
    const storeSignin = useSelector((state) => state.storeSignin);
    const { storeInfo, error: errorSignin } = storeSignin;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(deleteStore(adminInfo.email, storeInfo.store._id, password));
    }

    return (
        <>
        <div className="settings">
            <button onClick={() => setOpenModal(true)}>Eliminar Negocio</button>
        </div>
         <div className={openModal ? "modalStore active" : "modalStore"}>
         <div>
           <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="Ingrese la contrasena del negocio"
           />
           <button onClick={submitHandler}>Continuar</button>
           <button className="btn-none" onClick={() => setOpenModal(false)} >Atras</button>
           {/* </form> */}
         </div>
       </div>
       </>

    )
}
