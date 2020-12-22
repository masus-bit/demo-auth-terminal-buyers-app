import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Terminals from "../terminals/terminals.jsx";
import Buyers from "../buyers/buyers.jsx";
import { Sidebar } from "../sidebar/sidebar.jsx";
import AuthForm from "../auth-window/auth-window.jsx";
const Main = React.memo((props) => {
  const { isAuth, userPhoto } = props;
  const [mode, setMode] = useState("empty");
  return isAuth === false ? (
    <AuthForm />
  ) : (
    <div className="main">
      <Sidebar userPhoto={userPhoto} setMode={setMode} />
      <div className="content">
        {mode === "empty" ? null : mode === "terminals" ? (
          <Terminals />
        ) : (
          <Buyers />
        )}
      </div>
    </div>
  );
});
const mapStateToProps = (state) => {
  return { userPhoto: state.user, isAuth: state.isAuth };
};

export default connect(mapStateToProps)(Main);
