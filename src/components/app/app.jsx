import React from "react";
import AuthForm from "../auth-window/auth-window.jsx";
import { Switch, Route } from "react-router-dom";
import Main from "../main/main.jsx";

export const App = () => {
  return (
    <Switch>
      <Route path="/login" exact component={() => <AuthForm />} />
      <Route path="/" component={() => <Main />} />
    </Switch>
  );
};
