import { applyMiddleware, createStore as _createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

export default (initialState = {}) => {
  const createStore = applyMiddleware(thunk)(_createStore);
  const store = createStore(reducers, initialState);

  //onsole.log(store, initialState)

  module.hot &&
    module.hot.accept("../reducers", () => {
      store.replaceReducer(require("../reducers").default);
    });

  return store;
};
