import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Buyer from "./buyer.jsx";
import { ActionCreator } from "../reducers/action-creator.js";
import { splitData } from "../utils/utils.js";
import { Switch, Route } from "react-router-dom";
import { BuyerPage } from "../buyer-page/buyer-page.jsx";

const Buyers = React.memo((props) => {
  const {
    buyers,
    onCheckClick,
    onCapacityClick,
    onTotalClick,
    onInputChange,
    searchData,
    match,
  } = props;

  const [check, setCheck] = useState(0);
  const [showing, setShowing] = useState(buyers.length);
  const [pageCount, setPageCount] = useState(0);
  const [inputFocus, setInputFocus] = useState(false);
  const [matchUrl, setMatchUrl] = useState(false);
  const typeOfData = () => {
    if (inputFocus === true) {
      return searchData;
    } else {
      return buyers;
    }
  };
  return matchUrl === false ? (
    <Fragment>
      <div className="buyers-board">
        <input
          type="text"
          onChange={(evt) => {
            evt.preventDefault();
            if (evt.target.value.length > 0) {
              setInputFocus(true);
            } else {
              setInputFocus(false);
            }
            const value = evt.target.value;
            onInputChange(value, buyers);
          }}
          className="search-by-name"
          placeholder="ПОИСК ПО ИМЕНИ"
        />
        <table className="buyers-table table table-sm table-striped">
          <caption className="buyers--title caption">Покупатели</caption>

          <thead className="thead-dark">
            <tr>
              <th className="buyer--id-title">ID Покупателя</th>
              <th className="buyer--name-title">Имя покупателя</th>
              <th
                className="buyer--check-title"
                onClick={() => {
                  setCheck(buyers[buyers.length - 1]);
                  onCheckClick(buyers);
                }}
              >
                Средний чек
              </th>
              <th
                className="buyer--capacity-title"
                onClick={() => {
                  setCheck(buyers[buyers.length - 1]);
                  onCapacityClick(buyers);
                }}
              >
                Количество покупок
              </th>
              <th
                className="buyer--total-title"
                onClick={() => {
                  setCheck(buyers[buyers.length - 1]);
                  onTotalClick(buyers);
                }}
              >
                Общая выручка
              </th>
            </tr>
          </thead>
          <tbody>
            {showing === 5
              ? splitData(typeOfData())[pageCount - 1].map((item) => {
                  return (
                    <Buyer
                      setMatchUrl={setMatchUrl}
                      match={match}
                      key={item.id}
                      buyer={item}
                      buyers={buyers}
                    />
                  );
                })
              : showing === 10
              ? typeOfData()
                  .slice(0, showing)
                  .map((item) => {
                    return (
                      <Buyer
                        setMatchUrl={setMatchUrl}
                        match={match}
                        key={item.id}
                        buyer={item}
                        buyers={buyers}
                      />
                    );
                  })
              : typeOfData().map((item) => {
                  return (
                    <Buyer
                      setMatchUrl={setMatchUrl}
                      match={match}
                      key={item.id}
                      buyer={item}
                      buyers={buyers}
                    />
                  );
                })}
          </tbody>
        </table>
        <div className="pagination--container">
          <nav className="pagination--section">
            {showing === 5 ? (
              <ul className="pagination--link-list pagination">
                <h3 className="pagination--title">Страница</h3>
                <li
                  className="pagination--link"
                  onClick={() => setPageCount(1)}
                >
                  1
                </li>
                <li
                  className="pagination--link"
                  onClick={() => setPageCount(2)}
                >
                  2
                </li>
                <li
                  className="pagination--link"
                  onClick={() => setPageCount(3)}
                >
                  3
                </li>
              </ul>
            ) : null}
          </nav>
          <div className="pagination-change--section">
            <p className="pagination--text">Показывать по</p>
            <ul className="pagination-change--list">
              <li
                className="pagination-change--item page-item"
                onClick={() => {
                  setPageCount(1);
                  setShowing(5);
                }}
              >
                5
              </li>
              <li
                className="pagination-change--item page-item"
                onClick={() => setShowing(10)}
              >
                10
              </li>
              <li
                className="pagination-change--item page-item"
                onClick={() => setShowing(15)}
              >
                15
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <Route
      path={`${match.url}/:id`}
      component={(props) => <BuyerPage {...props} />}
    />
  );
});

const mapStateToProps = (state) => {
  return {
    buyers: state.data,
    searchData: state.searchArr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCheckClick: (buyers) => {
      dispatch(ActionCreator.checkSort(buyers));
    },
    onCapacityClick: (buyers) => {
      dispatch(ActionCreator.capacitySort(buyers));
    },
    onTotalClick: (buyers) => {
      dispatch(ActionCreator.totalSort(buyers));
    },
    onInputChange: (inputValue, buyers) => {
      dispatch(ActionCreator.search(inputValue, buyers));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buyers);
