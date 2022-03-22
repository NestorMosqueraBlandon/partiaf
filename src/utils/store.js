import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunk from "redux-thunk";
import { userSigninReducer } from '../reducers/userReducer.js';
import { adminSigninReducer, coverListReducer, createStoreCoverReducer, createStoreReducer, deleteStoreCoverReducer, storeListReducer, storeSigninReducer, updateStoreCoverReducer } from '../reducers/adminReducer.js';
import { bookingCreateReducer, bookingDeleteReducer, bookingListReducer, bookingUpdateReducer } from "../reducers/bookingReducer.js";
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
    bookingList: bookingListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;
