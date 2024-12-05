import React, { useState } from "react";
import "./BookDetail.scss";
import { MdStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

import LRImage7 from '../../assets/images/LRImage7.png';


const BookDetail = ({
  book = {
    bookImage: "default-image.jpg",
    bookName: "Default Book Name",
    author: "Default Author",
    description: "Default description for the book.",
    price: "11,000",
    discountPrice: "20000",
  },
}) => {
  const [isInBag, setIsInBag] = useState(false);
  const [quantityToBuy, setQuantityToBuy] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const addToBag = () => {
    setIsInBag(true);
  };

  const incrementQuantity = () => {
    setQuantityToBuy(quantityToBuy + 1);
  };

  const decrementQuantity = () => {
    if (quantityToBuy > 1) {
      setQuantityToBuy(quantityToBuy - 1);
    }
  };

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="view-book-container">
    <div className="sidebar-container">
      <div>

      </div>
      <div>
        
      </div>
    </div>
    <div> 
      <div className="book-image-container">
        <img src={LRImage7} alt={book.bookName} className="book-image" />

        
      </div>
      <div className="action-buttons">
          {!isInBag ? (
            <button className="btn-add-to-bag" onClick={addToBag}>
              Add to Bag
            </button>
          ) : (
            <div className="quantity-controls">
              <button onClick={decrementQuantity}>-</button>
              <span>{quantityToBuy}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
          )}
          <button className="btn-wishlist" onClick={toggleWishlist}>
            {isInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
          </button>
        </div>
</div>
      <div className="book-details">
        <div className="sub-container">
          <div className="book-detail-first-container" id="book-title-section">
            <h2 id="book-name">{book.bookName}</h2>
            <h4 id="book-author">by {book.author}</h4>
            <div className="book-rating-section" id="rating-container">
              <div className="rating-details" id="rating-value-container">
                <label className="rating-value" id="rating-value">
                  4.5
                </label>
                <span className="material-icons rating-icon" id="rating-icon">
                  <MdStar />
                </span>
              </div>
              <label className="rating-count" id="rating-count">
                (20)
              </label>
            </div>
            <div className="book-price-section" id="price-container">
              {book.discountPrice ? (
                <>
                  <p className="discounted-price" id="discounted-price">
                    Rs. {book.discountPrice}
                  </p>
                  <p className="original-price" id="original-price">
                    Rs. {book.price}
                  </p>
                </>
              ) : (
                <p className="discounted-price" id="single-price">
                  Rs. {book.price}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="sub-container">
          <div className="second-container">
            <h2 >Book Details</h2>
            <p id="detail-para">
              nknfcnsdcdbwn;bbkjbfsbs bb;fSWBFC BK;SBCBSDCSc bjhbv;g;gvscf mb
              j;v;sv;vscm b;v;cv;sdc j;viteLogov lhsv clsdvc ncs  nknfcnsdcdbwn;bbkjbfsbs bb;fSWBFC BK;SBCBSDCSc bjhbv;g;gvscf mb
              j;v;sv;vscm b;v;cv;sdc j;viteLogov lhsv clsdvc ncs
            </p>
          </div>
        </div>

        <div className="sub-container">
          <div className="third-container">
            <h2>Customer Reviews</h2>
            <div className="get-review-container">
            <p>Overall Rating</p>
            <div className="rating">
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />

            </div>
            <input type="text" id="input-box" placeholder="Write your review" />
            <button className="review-submit-btn">Submit</button>
            </div>
          </div>
        </div>

        <div className="sub-container">
          <div className="fourth-container">
            <h3>Reviews</h3>
            <div className="review-container">
              <div className="review-header">
                <img src="" alt="User Avatar" className="review-avatar" />
                <div className="reviewer-info">
                  <strong>Om Kakde</strong>
                  <div className="rating">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star_half</span>
                  </div>
                  <span>(4.5/5)</span>
                </div>
              </div>

              <div className="review-body">
                <p>
                  This book was an incredible read! The story was gripping and
                  the characters were well-developed. I couldn't put it down!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
