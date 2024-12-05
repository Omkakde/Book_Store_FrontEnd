import React from "react";
import "./BooksCard.scss";
import { MdStar } from "react-icons/md";
const BooksCard = ({ book, image }) => {
  return (
    <div className="book-card">
      <div className="top-container">
        <div className="book-img">
          <img
            src={image || book.image} 
            alt={book.title || "Book Cover"}
            className="book-image"
          />
        </div>
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.bookName || "Untitled Book"}</h3>
        <p className="book-author">{book.author || "Unknown Author"}</p>
        <div className="book-rating">
         {`4.5`}<MdStar />
        </div>
        <div className="book-price-container">
          <p className="discounted-price">
            {`Rs.${book.discountPrice}`}
          </p>
          {book.price && (
            <p className="original-price">{`Rs.${book.price}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
