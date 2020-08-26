import ReactDOM from "react-dom";
import React from "react";
import { App } from "./components/app/app.jsx";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createApi } from "./api.js";
import { reducer } from "./components/reducers/reducer.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { compose } from "recompose";

const api = createApi((...args) => store.dispatch(...args));
export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

const init = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
