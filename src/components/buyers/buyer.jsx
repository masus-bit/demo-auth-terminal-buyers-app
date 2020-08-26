import React from "react";
import { Link, Route } from "react-router-dom";
import { BuyerPage } from "../buyer-page/buyer-page.jsx";

const Buyer = (props) => {
  const { buyer, match, setMatchUrl } = props;

  return (
    <tr className="buyer--row">
      <td className="buyer-item buyer--id">
        <Link
          onClick={() => setMatchUrl(true)}
          to={{ pathname: `${match.url}/${buyer.id}`, state: buyer }}
        >
          {buyer.id}
        </Link>
      </td>
      <td className="buyer-item buyer--name">{buyer.name}</td>
      <td className="buyer-item buyer--check">{buyer.check}</td>
      <td className="buyer-item buyer--capacity">{buyer.capacity}</td>
      <td className="buyer-item buyer--total">{buyer.total}</td>
    </tr>
  );
};
export default Buyer;
