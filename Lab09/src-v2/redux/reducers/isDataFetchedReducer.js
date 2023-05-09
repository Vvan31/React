import { createAction, createReducer} from '@reduxjs/toolkit'
import { SET_DATA_FETCHED } from '../constants/actionTypes';

const initialState = false;

const setDataFetched = createAction(SET_DATA_FETCHED);

const isDataFetchedReducer = createReducer(initialState, {
  [setDataFetched]: () => true
})

export {
  setDataFetched,
  isDataFetchedReducer
}