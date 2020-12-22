import React, { Fragment } from "react";
import { Operations } from "../reducers/reducer.js";
import { connect } from "react-redux";
import Main from '../main/main.jsx'
const AuthForm = (props) => {
  const { isAuth, userPhoto, submitHandler } = props;

  return isAuth === true ? (
    <Main />
  ) : (
 
      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            const login = evt.target.querySelector(`#login`).value;
            submitHandler(login);
          }}
        >
          <h1 className="sign-in__title">MEMBER LOGIN</h1>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <label className="sign-in__label " htmlFor="user-email"></label>
              <input
                className="sign-in__input"
                type="text"
                placeholder="Login"
                name="login"
                id="login"
              />
            </div>
            <div className="sign-in__field">
              <label
                className="sign-in__label "
                htmlFor="user-password"
              ></label>
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
              />
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

  );
};
const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    isAuth: state.isAuth,
  });
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitHandler: (login) => {
      dispatch(Operations.login(login));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
