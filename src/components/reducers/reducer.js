import { initialState } from "./storage.js";
import { ActionCreator, actionType } from "./action-creator.js";

export const Operations = {
  login: (login) => (dispatch, _getState, api) => {
    api.get(`/${login}`).then((response) => {
      if (response.status === 200) {
        dispatch(ActionCreator.auth(true));
        dispatch(ActionCreator.login(response.data.avatar_url));
      } else {
        dispatch(ActionCreator.auth(false));
        alert(`Неверный логин или пароль. Пароль должен содержать хотябы одну заглавную латинскую букву, одну цифру и одну прописную латинскую букву`)
      }
    });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case actionType.AUTH:
      return Object.assign({}, state, {
        isAuth: action.payload,
      });
    case actionType.SAVE_TERMINAL:
      return Object.assign({}, state, {
        terminals: action.payload,
      });
    case actionType.DELETE_TERMINAL:
      return Object.assign({}, state, {
        terminals: action.payload,
      });
    case actionType.CHECK_SORT:
      return Object.assign({}, state, {
        data: action.payload,
      });
    case actionType.CAPACITY_SORT:
      return Object.assign({}, state, {
        data: action.payload,
      });
    case actionType.TOTAL_SORT:
      return Object.assign({}, state, {
        data: action.payload,
      });
    case actionType.SEARCH_BUYER:
      return Object.assign({}, state, {
        searchArr: action.payload,
      });
  }

  return state;
};
