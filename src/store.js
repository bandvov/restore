import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const stringMiddleWare = () => next => action => {
  if (typeof action === "string") {
    action = { type: action };
  } else {
    return next(action);
  }
};
const logMiddleware = store => next => action => {
  console.log(store.getState());

  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, logMiddleware, stringMiddleWare)
);
const delayedActionCreator = timeout => dispatch => {
  setTimeout(
    () =>
      dispatch({
        type: "DELAYED_ACTION"
      }),
    timeout
  );
};
console.log(store);

store.dispatch("hello");
store.dispatch(delayedActionCreator(4000));

export default store;
