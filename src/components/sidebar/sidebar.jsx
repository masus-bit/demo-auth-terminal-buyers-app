import React from "react";

export const Sidebar = (props) => {
  const { userPhoto, setMode } = props;
  return (
    <aside className="sidebar">
      <img src={userPhoto} alt="" className="user-avatar" />
      <nav className="menu">
        <a className="terminals--link" onClick={()=>setMode("terminals")}>
          Терминалы <br />
        </a>
        <a className="buyers--link" onClick={()=>setMode("buyers")}>
          Покупатели
        </a>
      </nav>
      <footer className="copyright">Copyright © 2020</footer>
    </aside>
  );
};
