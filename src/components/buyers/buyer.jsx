import React from "react";

const Buyer = (props) => {
  const { buyer} = props;

  return (
    <tr className="buyer--row">
      <td className="buyer-item buyer--id">
       {buyer.id}
      </td>
      <td className="buyer-item buyer--name">{buyer.name}</td>
      <td className="buyer-item buyer--check">{buyer.check}</td>
      <td className="buyer-item buyer--capacity">{buyer.capacity}</td>
      <td className="buyer-item buyer--total">{buyer.total}</td>
    </tr>
  );
};
export default Buyer;
