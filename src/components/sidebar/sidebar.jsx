import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = (props) => {
  const { userPhoto } = props;
  return (
    <aside className="sidebar">
      <img src={userPhoto} alt="" className="user-avatar" />
      <nav className="menu">
        <Link to="/terminals" className="terminals--link">
          Терминалы <br />
        </Link>
        <Link to="/buyers" className="buyers--link">
          Покупатели
        </Link>
      </nav>
      <footer className="copyright">Copyright © 2020</footer>
    </aside>
  );
};
