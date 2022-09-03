import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import rootReducer from './reducers/index'
const initialState = {};
const middleware = [thunk];
const store = configureStore({
    initialState,
    reducer: rootReducer,
    middleware: middleware
})
export default store;