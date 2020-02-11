import React from "react";
import "./BookListItem.scss";

const BookListItem = ({ book,onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">{price}</div>
        <input
          type="button"
          className="btn btn-info"
          value="Add to cart"
          onClick={onAddedToCart}
        />
      </div>
    </div>
  );
};
export default BookListItem;

