import carousel2 from "../Assets/carousel2.jpg";
import watch3 from "../Assets/watch3.jpg";
import watch4 from "../Assets/watch4.jpg";
import watch5 from "../Assets/watch5.jpg";
import watch6 from "../Assets/watch6.jpg";
import watch7 from "../Assets/watch7.jpg";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { setProductDetails } from "../redux/productSlice";
import { ADDCART } from "../redux/cartIcon";
import { ADDTOCART } from "../redux/cartSlice";
import { Alerts } from "./Alerts";


// =========================
// WATCH PRODUCTS
// =========================

export const Watch = [
  {
    id: "02",
    productName: "Aviator Watch",
    imgUrl: carousel2,
    category: "watch",
    price: "253",
    discount: 20,

    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    reviews: [
      {
        rating: 4.8,
        text: "Good product",
      },
    ],

    rating: 4.8,

    avgRating: (
      <i className="bi bi-star-fill text-warning"></i>
    ),
  },

  {
    id: "08",
    productName: "Fitness Watch",
    imgUrl: watch3,
    category: "watch",
    price: "89",
    discount: 35,

    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    reviews: [
      {
        rating: 4.6,
        text: "Good product",
      },
    ],

    rating: 4.6,

    avgRating: (
      <i className="bi bi-star-fill text-warning"></i>
    ),
  },

  {
    id: "09",
    productName: "Military Watch",
    imgUrl: watch4,
    category: "watch",
    price: "299",
    discount: 35,

    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    reviews: [
      {
        rating: 4.6,
        text: "Good product",
      },
    ],

    rating: 4.6,

    avgRating: (
      <i className="bi bi-star-fill text-warning"></i>
    ),
  },

  {
    id: "12",
    productName: "Diving Watch",
    imgUrl: watch5,
    category: "watch",
    price: "599",
    discount: 10,

    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    reviews: [
      {
        rating: 4.8,
        text: "Good product",
      },
    ],

    rating: 4.8,

    avgRating: (
      <i className="bi bi-star-fill text-warning"></i>
    ),
  },

  {
    id: "13",
    productName: "Smart Watch",
    imgUrl: watch6,
    category: "watch",
    price: "799",
    discount: 5,

    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    reviews: [
      {
        rating: 4.8,
        text: "Good product",
      },
    ],

    rating: 4.8,

    avgRating: (
      <i className="bi bi-star-fill text-warning"></i>
    ),
  },

  {
    id: "14",
    productName: "Sports Watch",
    imgUrl: watch7,
    category: "watch",
    price: "799",
    discount: 5,

    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    reviews: [
      {
        rating: 4.8,
        text: "Good product",
      },
    ],

    rating: 4.8,

    avgRating: (
      <i className="bi bi-star-fill text-warning"></i>
    ),
  },
];


// =========================
// WATCH PAGE
// =========================

const WatchPage = () => {
  const dispatch = useDispatch();

  const [alertMessage, setAlertMessage] = useState("");


  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = (product) => {
    // Add product
    dispatch(
      ADDTOCART({
        ...product,
        quantity: 1,
      })
    );

    // Update cart icon
    dispatch(
      ADDCART({
        ...product,
        quantity: 1,
      })
    );

    // Show alert
    setAlertMessage(
      "Product is added to the cart"
    );

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };


  return (
    <div
      className="Container"
      style={{
        backgroundColor: "lightcyan",
        minHeight: "1180px",
      }}
    >

      {/* =====================
          ALERT
      ====================== */}

      <Alerts
        message={alertMessage}
        onClose={() =>
          setAlertMessage("")
        }
      />


      <div className="container mt-5">

        <div className="text-center">
          <h1>Big Discount</h1>
        </div>


        {/* =====================
            PRODUCT ROW
        ====================== */}

        <div className="row g-4 mt-2">

          {Watch.map((product) => (

            <div
              className="col-md-4"
              key={product.id}
            >

              <div
                className="card h-100 position-relative"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >

                {/* =====================
                    PRODUCT LINK
                ====================== */}

                <Link
                  to={`/product/${product.id}`}
                  style={{
                    textDecoration: "none",
                  }}
                  onClick={() =>
                    dispatch(
                      setProductDetails(
                        product
                      )
                    )
                  }
                >

                  {/* Discount */}

                  <p className="position-absolute top-0 start-0 bg-primary text-white fw-bold px-2 py-1 rounded-pill mt-2 ms-1">

                    {product.discount}% OFF

                  </p>


                  {/* Product Image */}

                  <img
                    src={product.imgUrl}
                    className="card-img-top mt-5"
                    alt={product.productName}
                    style={{
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />


                  {/* Product Body */}

                  <div className="card-body">

                    <h2 className="card-title text-dark">

                      {product.productName}

                    </h2>


                    {/* Rating */}

                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >

                      <span className="text-warning">
                        {product.avgRating}
                      </span>

                      <span className="text-warning">
                        {product.avgRating}
                      </span>

                      <span className="text-warning">
                        {product.avgRating}
                      </span>

                      <span className="text-warning">
                        {product.avgRating}
                      </span>

                      <span className="text-warning">
                        {product.avgRating}
                      </span>

                    </div>


                    {/* Price */}

                    <div className="d-flex align-items-center justify-content-between">

                      <h3 className="card-text text-dark mt-3">

                        <b>
                          ${product.price}
                        </b>

                      </h3>

                    </div>

                  </div>

                </Link>


                {/* =====================
                    ADD TO CART BUTTON
                ====================== */}

                <button
                  type="button"
                  className="btn btn-light btn-outline-primary d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    width: "50px",
                    height: "50px",
                    zIndex: 1,
                  }}
                  onClick={() =>
                    handleAddToCart(
                      product
                    )
                  }
                >

                  <span
                    style={{
                      fontSize: "40px",
                      lineHeight: "30px",
                    }}
                  >
                    +
                  </span>

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};


export default WatchPage;