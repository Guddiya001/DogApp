import * as types from "./actionsType";
import axios from "axios";
const fetchDogsStart = () => {
  return {
    type: types.FETCH_DOGS_START,
  };
};

const fetchDogsSuccess = (dogs) => {
  return {
    type: types.FETCH_DOGS_SUCCESS,
    payload: dogs,
  };
};

const fetchDogsFail = (error) => {
  return {
    type: types.FETCH_DOGS_FAIL,
    payload: error,
  };
};

const singleFetchDogsStart = () => {
    return {
      type: types.SINGLE_FETCH_DOGS_START,
    };
  };
  
  const singleFetchDogsSuccess = (dogs) => {
    return {
      type: types.SINGLE_FETCH_DOGS_SUCCESS,
      payload: dogs,
    };
  };
  
  const singleFetchDogsFail = (error) => {
    return {
      type: types.SINGLE_FETCH_DOGS_FAIL,
      payload: error,
    };
  };
const searchFetchDogsStart = () => {
    return {
      type: types.SEARCH_FETCH_DOGS_START,
    };
  };
  
  const searchFetchDogsSuccess = (search) => {
    return {
      type: types.SEARCH_FETCH_DOGS_SUCCESS,
      payload: search,
    };
  };
  
  const searchFetchDogsFail = (error) => {
    return {
      type: types.SEARCH_FETCH_DOGS_FAIL,
      payload: error,
    };
  };
export const fetchDogs = () => {
  return async function (dispatch) {
    dispatch(fetchDogsStart());
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds?limit=16&page=2`);
      dispatch(fetchDogsSuccess(response.data));
    } catch (error) {
      dispatch(fetchDogsFail(error));
    }
  };
};
export const singleFetchDogs = (dogName) => {
  return async function (dispatch) {
    dispatch(singleFetchDogsStart());
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dogName}`);
      dispatch(singleFetchDogsSuccess(response.data));
    } catch (error) {
      dispatch(singleFetchDogsFail(error));
    }
  };
};
export const searchFetchDogs = (search) => {
  return async function (dispatch) {
    dispatch(searchFetchDogsStart());
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${search}`);
      dispatch(searchFetchDogsSuccess(response.data));
    } catch (error) {
      dispatch(searchFetchDogsFail(error));
    }
  };
};
