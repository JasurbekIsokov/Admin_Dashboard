import React from "react";

const Transactions = () => {
  return (
    <section className="transaction">
      <p className="transaction__title">Transactions</p>
      <p className="transaction__description">
        This is a list of latest transactions .
      </p>
      <div className="table">
        <div className="table__head">
          <p className="transaction__table">TRANSACTIONS</p>
          <p className="time">DATE & TIME</p>
          <p className="amount">AMOUNT</p>
          <p className="status">STATUS</p>
        </div>

        <div className="table__row1 table__row">
          <p>
            Payment from <span>Bonnie Green</span>
          </p>
          <p>Apr 23,2021</p>
          <p>
            <span>$2300</span>
          </p>
          <p className="completed">Completed</p>
        </div>

        <div className="table__row2 table__row">
          <p>
            Payment refund to <span>#00910</span>
          </p>
          <p>Apr 23,2021</p>
          <p>
            <span>-$670</span>
          </p>
          <p className="completed">Completed</p>
        </div>

        <div className="table__row3 table__row">
          <p>
            Payment failed from <span>#087651</span>
          </p>
          <p>Apr 18,2021</p>
          <p>
            <span>$234</span>
          </p>
          <p className="cancelled">Cancelled</p>
        </div>

        <div className="table__row4 table__row">
          <p>
            Payment from <span>Bonnie Green</span>
          </p>
          <p>Apr 15,2021</p>
          <p>
            <span>$5000</span>
          </p>
          <p className="progress">In progress</p>
        </div>

        <div className="table__row5 table__row">
          <p>
            Payment from <span>Jese Leos</span>
          </p>
          <p>Apr 15,2021</p>
          <p>
            <span>$2300</span>
          </p>
          <p className="progress">In progress</p>
        </div>

        <div className="table__row6 table__row">
          <p>
            Payment from <span>THEMSBERG LLC</span>
          </p>
          <p>Apr 11,2021</p>
          <p>
            <span>$280</span>
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
