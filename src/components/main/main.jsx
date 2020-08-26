import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Switch, Route } from "react-router-dom";
import Terminals from "../terminals/terminals.jsx";
import Buyers from "../buyers/buyers.jsx";
import { Sidebar } from "../sidebar/sidebar.jsx";

const Main = React.memo((props) => {
  const { isAuth, userPhoto } = props;

  return isAuth === false ? (
    <Redirect to="/login"></Redirect>
  ) : (
    <Fragment>
      <div className="main">
        <Sidebar userPhoto={userPhoto} />
        <div className="content">
          <Switch>
            <Route path="/terminals" component={Terminals} />
            <Route path="/buyers" component={Buyers} />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
});
const mapStateToProps = (state) => {
  return { userPhoto: state.user, isAuth: state.isAuth };
};

export default connect(mapStateToProps)(Main);
