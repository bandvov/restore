import React from "react";
import "./CartTable.scss";
import { connect } from "react-redux";
import {
  allBooksRemovedFromCart,
  bookAddedToCart,
  bookRemovedFromCart
} from "../../actions";

const CartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  console.log("carttable", items);

  return (
    <div className="cart-table">
      <h2>Your Order</h2>
      <table className="table" border="1px">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            const { id, idx, title, count, total } = item;
            return (
              <tr key={id}>
                <td>{idx}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td width="25%">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => onIncrease(id)}
                  >
                    <i className="fa fa-plus-circle"></i>
                  </button>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => onDecrease(id)}
                  >
                    <i className="fa fa-minus-circle"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(id)}
                  >
                    <i className="fa fa-trash-o"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="total">${total}</p>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    items: state.shoppingCart.cartItems,
    total: state.shoppingCart.orderTotal
  };
};
// if you send to connect simple object, connect will dispatch values itself

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
};
// or you may send a function

// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrease: id => {
//       dispatch(bookPlus(id));
//     },
//     onDecrease: () => {
//       console.log("decrease");
//     },
//     onDelete: id => {
//       dispatch(allBooksRemovedFromCart(id));
//     }
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
