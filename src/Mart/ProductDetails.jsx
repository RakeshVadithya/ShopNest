import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Alerts } from "./Alerts";

import tableImage from "../Assets/table.jpg";

import { BigDiscount } from "./BigDiscount";
import { BestSales } from "./BestSales";
import { NewArrivals } from "./NewArrivals";
import { Watch } from "./Watch";

import { ADDCART } from "../redux/cartIcon";
import { ADDTOCART } from "../redux/cartSlice";
import { setProductDetails } from "../redux/productSlice";


export const ProductDetails = () => {

  const dispatch = useDispatch();

  const [alertMessage, setAlertMessage] = useState("");


  // Add product to cart
  const handleAddToCart = (product) => {

    // Add actual product to cart
    dispatch(
      ADDTOCART({
        ...product,
        quantity: 1,
      })
    );

    // Update cart icon/count
    dispatch(
      ADDCART({
        ...product,
        quantity: 1,
      })
    );

    // Show alert
    setAlertMessage("Product is added to the cart");

    // Remove alert after 3 seconds
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };


  // Get selected product from Redux
  const selectedProduct = useSelector(
    (state) => state.product.selectedProduct
  );


  // If product is not available
  if (!selectedProduct) {
    return (
      <div className="container mt-5">

        <Header />

        <p className="text-center">
          Loading product details...
        </p>

      </div>
    );
  }


  // Find related products
  const getRelatedProducts = (category) => {

    const relatedProducts = [

      ...BigDiscount.filter(
        (product) => product.category === category
      ),

      ...BestSales.filter(
        (product) => product.category === category
      ),

      ...NewArrivals.filter(
        (product) => product.category === category
      ),

      ...Watch.filter(
        (product) => product.category === category
      ),
    ];


    // Remove duplicate products
    const uniqueRelatedProducts = [
      ...new Map(
        relatedProducts.map((product) => [
          product.productName,
          product,
        ])
      ).values(),
    ];


    return uniqueRelatedProducts;
  };


  const relatedProducts = getRelatedProducts(
    selectedProduct.category
  );


  return (
    <div className="container mt-5">

      {/* Header */}
      <Header />


      {/* Alert */}
      <Alerts
        message={alertMessage}
        onClose={() => setAlertMessage("")}
      />


      {/* Banner */}
      <div className="position-relative">

        <img
          src={tableImage}
          alt="table"
          className="col-12"
        />


        {/* Dark Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            pointerEvents: "none",
          }}
        ></div>


        {/* Product Name */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textShadow:
              "2px 2px 4px rgba(222, 31, 31, 0.8)",
          }}
        >

          <h3>
            {selectedProduct.productName}
          </h3>

        </div>

      </div>


      {/* Product Details */}
      <div className="row">

        {/* Product Image */}
        <div className="col-md-6">

          <img
            src={selectedProduct.imgUrl}
            alt={selectedProduct.productName}
            className="img-fluid"
          />

        </div>


        {/* Product Information */}
        <div className="col-md-6">

          <h1 className="me-5 mt-2">
            {selectedProduct.productName}
          </h1>


          {/* Rating */}
          <h3>

            <span className="text-warning">
              {selectedProduct.avgRating}
            </span>

            <span className="text-warning">
              {selectedProduct.avgRating}
            </span>

            <span className="text-warning">
              {selectedProduct.avgRating}
            </span>

            <span className="text-warning">
              {selectedProduct.avgRating}
            </span>

            <span className="text-warning">
              {selectedProduct.avgRating}
            </span>


            <span className="ms-5">
              {selectedProduct.rating}
            </span>

          </h3>


          {/* Price + Category */}
          <h2>

            <span>
              ${selectedProduct.price}
            </span>

            <span className="fs-5 ms-5 me-5">
              Category: {selectedProduct.category}
            </span>

          </h2>


          {/* Short Description */}
          <p>
            {selectedProduct.shortDesc}
          </p>


          {/* Add To Cart */}
          <button
            className="btn btn-primary mt-2"
            onClick={() =>
              handleAddToCart(selectedProduct)
            }
          >
            Add to Cart
          </button>

        </div>


        {/* Description */}
        <div className="col-12 mt-3">

          <h5>
            <b>Description:</b>
          </h5>

          <p>
            {selectedProduct.description}
          </p>

        </div>

      </div>


      {/* Related Products */}
      <h3 className="mt-4">
        You might also like
      </h3>


      <div className="row">

        {relatedProducts.map((product) => (

          <div
            className="col-md-3"
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


              {/* Product Link */}
              <Link
                to={`/product/${product.id}`}
                style={{
                  textDecoration: "none",
                }}
                onClick={() =>
                  dispatch(
                    setProductDetails(product)
                  )
                }
              >


                {/* Product Image */}
                <img
                  src={product.imgUrl}
                  alt={product.productName}
                  className="card-img-top"
                />


                <div className="card-body">

                  {/* Product Name */}
                  <h5>
                    {product.productName}
                  </h5>


                  {/* Rating */}
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >

                    <span className="card-text text-warning">
                      {product.avgRating}
                    </span>

                    <span className="card-text text-warning">
                      {product.avgRating}
                    </span>

                    <span className="card-text text-warning">
                      {product.avgRating}
                    </span>

                    <span className="card-text text-warning">
                      {product.avgRating}
                    </span>

                    <span className="card-text text-warning">
                      {product.avgRating}
                    </span>

                  </div>


                  {/* Price */}
                  <div className="d-flex align-items-center justify-content-between">

                    <h3 className="card-text">
                      <b>
                        ${product.price}
                      </b>
                    </h3>

                  </div>

                </div>

              </Link>


              {/* Add Related Product To Cart */}
              <button
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
                  handleAddToCart(product)
                }
              >

                <span
                  style={{
                    fontSize: "40px",
                    marginBottom: "5px",
                  }}
                >
                  +
                </span>

              </button>

            </div>

          </div>

        ))}

      </div>


      {/* Footer */}
      <Footer />

    </div>
  );
};