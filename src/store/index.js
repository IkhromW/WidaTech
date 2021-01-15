import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import eventsReducer from "./reducer/eventsReducer";

const reducer = combineReducers({
  events: eventsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
