import React from "react";

export const Terminal = (props) => {
  const { terminal, terminals, onDeleteClick } = props;
  return (
    <tr>
      <td>{terminal.name}</td>
      <td>{terminal.description}</td>{" "}
      <td>
        {" "}
        <button
          onClick={() => onDeleteClick(terminal, terminals)}
          className="delete-btn"
        >
          Удалить
        </button>{" "}
      </td>{" "}
    </tr>
  );
};
