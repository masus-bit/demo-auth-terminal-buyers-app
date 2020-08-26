import {
  addTerminal,
  deleteTerminal,
  checkSort,
  capacitySort,
  totalSort,
  searchBuyer,
} from "../utils/utils";

export const actionType = {
  LOGIN: "LOGIN",
  AUTH: "AUTH",
  SAVE_TERMINAL: "SAVE_TERMINAL",
  DELETE_TERMINAL: "DELETE_TERMINAL",
  CHECK_SORT: "CHECK_SORT",
  CAPACITY_SORT: "CAPACITY_SORT",
  TOTAL_SORT: "TOTAL_SORT",
  SEARCH_BUYER: "SEARCH_BUYER",
};
export const ActionCreator = {
  login: (login) => {
    return {
      type: actionType.LOGIN,
      payload: login,
    };
  },
  auth: (boolean) => {
    return {
      type: actionType.AUTH,
      payload: boolean,
    };
  },
  saveTerminal: (id, name, description, terminals) => {
    return {
      type: actionType.SAVE_TERMINAL,
      payload: addTerminal(id, name, description, terminals),
    };
  },
  deleteTerminal: (terminal, terminals) => {
    return {
      type: actionType.DELETE_TERMINAL,
      payload: deleteTerminal(terminal, terminals),
    };
  },
  checkSort: (buyers) => {
    return {
      type: actionType.CHECK_SORT,
      payload: checkSort(buyers),
    };
  },
  capacitySort: (buyers) => {
    return {
      type: actionType.CAPACITY_SORT,
      payload: capacitySort(buyers),
    };
  },
  totalSort: (buyers) => {
    return {
      type: actionType.TOTAL_SORT,
      payload: totalSort(buyers),
    };
  },
  search: (inputValue, buyers) => {
    return {
      type: actionType.SEARCH_BUYER,
      payload: searchBuyer(inputValue, buyers),
    };
  },
};
