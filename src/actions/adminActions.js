import Axios from "axios";

import {
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_SIGNIN_FAIL,
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNOUT,
  LIST_STORE_REQUEST,
  LIST_STORE_SUCCESS,
  LIST_STORE_FAIL,
  STORE_SIGNIN_REQUEST,
  STORE_SIGNIN_SUCCESS,
  STORE_SIGNIN_FAIL,
  STORE_COVER_REQUEST,
  STORE_COVER_SUCCESS,
  STORE_COVER_FAIL,
  LIST_COVER_REQUEST,
  LIST_COVER_SUCCESS,
  LIST_COVER_FAIL,
} from "../constants/adminConstants";

// const URL = "http://localhost:4200/api/v1";
// const URL = 'https://rveapiv2.herokuapp.com/api/v1'
const URL = 'https://partiaf-api.herokuapp.com/api/v1';

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: ADMIN_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post(`${URL}/admins/signin`, {
      email,
      password,
    });

    dispatch({ type: ADMIN_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signup = (name, lastname, identification, email, mobile, age, address, password) => async (dispatch) => {
  dispatch({ type: ADMIN_REGISTER_REQUEST, payload: { name, lastname, identification, email, mobile, age, address, password } });
  try {
    const { data } = await Axios.post(`${URL}/admins/signout`, {
      name, lastname, identification, email, mobile, age, address, password
    });

    dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });
    dispatch({ type: ADMIN_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('adminInfo');
  localStorage.removeItem('storeInfo');
  dispatch({ type: ADMIN_SIGNOUT });
  document.location.href = '/';
};


export const createStore = (store) => async (dispatch) => {
  dispatch({ type: ADMIN_SIGNIN_REQUEST, payload: store });
  try {
    const { data } = await Axios.post(`${URL}/stores/`, store);

    dispatch({ type: ADMIN_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const listStores = (email) => async (dispatch, getState) => {
  
  dispatch({ type: LIST_STORE_REQUEST });
  try {
    const { data } = await Axios.get(`${URL}/stores/list?email=${email}`);
    console.log(data.stores)
    dispatch({ type: LIST_STORE_SUCCESS, payload: data.stores });
  } catch (error) {
    dispatch({
      type: LIST_STORE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const listCovers = (email, storeId) => async (dispatch, getState) => {
  
  console.log(email, storeId)
  dispatch({ type: LIST_COVER_REQUEST});
  try {
    const { data } = await Axios.get(`${URL}/stores/covers?email=${email}&storeId=${storeId}`);
    console.log(data)
    dispatch({ type: LIST_COVER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LIST_COVER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signinStore = (email, storeId, password) => async (dispatch) => {
  dispatch({ type: STORE_SIGNIN_REQUEST, payload: {email, storeId, password } });
  try {
    const { data } = await Axios.post(`${URL}/stores/select`, {
      email,
      storeId,
      password,
    });

    dispatch({ type: STORE_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("storeInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: STORE_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createStoreCover = (email, storeId, type, date, hour, price, description, totalLimit, name) => async (dispatch) => {
  dispatch({ type: STORE_COVER_REQUEST, payload: {email, storeId, type, date, hour, price, description, totalLimit, name } });
  try {
    const { data } = await Axios.post(`${URL}/stores/createCover`, {
      email, storeId, type, date, hour, price, description,totalLimit, name
    });

    dispatch({ type: STORE_COVER_SUCCESS, payload: data });
    // localStorage.setItem("storeInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: STORE_COVER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};