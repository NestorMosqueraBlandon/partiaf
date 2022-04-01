import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunk from "redux-thunk";
import { userSigninReducer } from '../reducers/userReducer.js';
import { adminSigninReducer, coverListReducer, createStoreCoverReducer, createStoreReducer, deleteStoreCoverReducer, storeListReducer, storeSigninReducer, updateStoreCoverReducer } from '../reducers/adminReducer.js';
import { bookingCreateReducer, bookingDeleteReducer, bookingListReducer, bookingUpdateReducer } from "../reducers/bookingReducer.js";
import menuReducer from "../reducers/menuReducer.js";
import itemsReducer from "../reducers/itemsReducer.js";
import { generalReducer } from "../reducers/globalReducer.js";
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

    //<------- ITEM ---------->
    itemList: itemsReducer.listReducer,
    itemCreate: itemsReducer.createReducer,
    itemUpdate: itemsReducer.updateReducer,
    itemDelete: itemsReducer.deleteReducer,

    uploadImage: generalReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;
