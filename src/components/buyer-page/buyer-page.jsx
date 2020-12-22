import React, { Fragment } from "react";

export const BuyerPage = (props) => {
  const buyer = props.location.state;

  return (
    
      <div className="buyers-board">
        <table className="buyers-table table table-sm table-striped">
          <caption className="buyers--title caption">{buyer.name}</caption>

          <thead className="thead-dark">
            <tr>
              <th className="buyer--id-title">ID Покупателя</th>
              <th className="buyer--name-title">Имя покупателя</th>
              <th className="buyer--check-title">Средний чек</th>
              <th className="buyer--capacity-title">Количество покупок</th>
              <th className="buyer--total-title">Общая выручка</th>
            </tr>
            <tr className="buyer--row">
              <td className="buyer-item buyer--id">{buyer.id}</td>
              <td className="buyer-item buyer--name">{buyer.name}</td>
              <td className="buyer-item buyer--check">{buyer.check}</td>
              <td className="buyer-item buyer--capacity">{buyer.capacity}</td>
              <td className="buyer-item buyer--total">{buyer.total}</td>
            </tr>
          </thead>
        </table>
      </div>

  );
};
