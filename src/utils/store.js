import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunk from "redux-thunk";
import { userSigninReducer } from '../reducers/userReducer.js';
import { adminSigninReducer, coverListReducer, createStoreCoverReducer, createStoreReducer, deleteStoreCoverReducer, storeListReducer, storeSigninReducer, updateStoreCoverReducer, updateStoreReducer } from '../reducers/adminReducer.js';
import { bookingCreateReducer, bookingDeleteReducer, bookingListReducer, bookingUpdateReducer } from "../reducers/bookingReducer.js";
import menuReducer from "../reducers/menuReducer.js";
import chairReducer from "../reducers/chairReducer.js";
import itemsReducer from "../reducers/itemsReducer.js";
import { generalReducer } from "../reducers/globalReducer.js";
import buyReducer from "../reducers/buyReducers.js";
const initialState = {
    adminSignin: {
        adminInfo: localStorage.getItem('adminInfo')
          ? JSON.parse(localStorage.getItem('adminInfo'))
          : null,
      },

      storeSignin: {
        storeInfo: localStorage.getItem('storeInfo')
          ? JSON.parse(localStorage.getItem('storeInfo'))
          : null,
      },
}

const reducer = combineReducers({
    userSignin: userSigninReducer,
    adminSignin: adminSigninReducer,
    storeCreate: createStoreReducer,
    storeUpdate: updateStoreReducer,
    storeList: storeListReducer,
    storeSignin: storeSigninReducer,
    createCover: createStoreCoverReducer,
    coversList: coverListReducer,
    deleteCover: deleteStoreCoverReducer,
    updateCover: updateStoreCoverReducer,
    bookingUpdate: bookingUpdateReducer,
    bookingCreate: bookingCreateReducer,
    bookingDelete: bookingDeleteReducer,
    bookingList: bookingListReducer,

    //<------- MENU ----------> 
    menuList: menuReducer.listReducer,
    menuCreate: menuReducer.createReducer,
    menuUpdate: menuReducer.updateReducer,
    menuDelete: menuReducer.deleteReducer, 

        //<------- BUY ----------> 
        buyList: buyReducer.listReducer,

    //<------- ITEM ---------->
    itemList: itemsReducer.listReducer,
    itemCreate: itemsReducer.createReducer,
    itemUpdate: itemsReducer.updateReducer,
    itemDelete: itemsReducer.deleteReducer,

        //<------- CHAIRS ---------->
        chairList: chairReducer.listReducer,
        chairCreate: chairReducer.createReducer,
        chairUpdate: chairReducer.updateReducer,
        chairDelete: chairReducer.deleteReducer,

    uploadImage: generalReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;
