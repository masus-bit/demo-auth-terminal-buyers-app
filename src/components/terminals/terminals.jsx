import React, { Fragment, useState } from "react";
import { ActionCreator } from "../reducers/action-creator.js";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Terminal } from "./terminal.jsx";
const Terminals = React.memo((props) => {
  const { isAuth, terminals, onSaveClick, onDeleteClick } = props;
  const [terminalsCount, setTerminals] = useState(0);

  return isAuth === false ? (
    <Redirect to="/"></Redirect>
  ) : (
    <Fragment>
      <div className="terminals--board">
        <table className="terminals table table-sm table-striped">
          <caption className="terminals--title">Терминалы</caption>
          <thead className="thead-dark">
            <tr>
              <th>Название</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            {terminals.map((item) => {
              return (
                <Terminal
                  key={item.id}
                  terminal={item}
                  terminals={terminals}
                  onDeleteClick={onDeleteClick}
                />
              );
            })}
          </tbody>
        </table>
        <form
          className="add-terminal"
          onSubmit={(evt) => {
            evt.preventDefault();
            const name = evt.target.querySelector(`#input-name`).value;
            const description = evt.target.querySelector(`#input-description`)
              .value;
            onSaveClick(terminals.length + 1, name, description, terminals);
            setTerminals(terminals.length);
            evt.target.querySelector(`#input-name`).value = "";
            evt.target.querySelector(`#input-description`).value = "";
          }}
        >
          <div className="input__wrapper">
            <input
              className="input-name"
              id="input-name"
              type="text"
              placeholder="name"
            />
            <input
              className="input-description"
              id="input-description"
              type="text"
              placeholder="description"
            />
          </div>
          <button type="submit" className="save-btn">
            SAVE
          </button>
        </form>
      </div>
    </Fragment>
  );
});
const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
    terminals: state.terminals,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSaveClick: (id, name, description, terminals) => {
      dispatch(ActionCreator.saveTerminal(id, name, description, terminals));
    },
    onDeleteClick: (terminal, terminals) => {
      dispatch(ActionCreator.deleteTerminal(terminal, terminals));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Terminals);
