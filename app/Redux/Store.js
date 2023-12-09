import { Provider } from 'react-redux';
const { legacy_createStore } = require("redux");
const { rootReducer } = require("./Reducer");

export const store = legacy_createStore(rootReducer)