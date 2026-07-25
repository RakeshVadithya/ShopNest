const WatchPage = () => {
  const dispatch = useDispatch();

  const [alertMessage, setAlertMessage] = useState("");

  const handleAddToCart = (product) => {
    // Add product to cart
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
    setAlertMessage("Product is added to the cart");

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
      {/* Alert */}
      <Alerts
        message={alertMessage}
        onClose={() => setAlertMessage("")}
      />

      <div className="container mt-5">
        <center>
          <h1>Big Discount</h1>
        </center>

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
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    textDecoration: "none",
                  }}
                  onClick={() =>
                    dispatch(setProductDetails(product))
                  }
                >
                  {/* Discount */}
                  <p className="position-absolute top-0 start-0 bg-primary text-white fw-bold px-2 py-1 rounded-pill mt-2 ms-1">
                    {product.discount}% OFF
                  </p>

                  {/* Image */}
                  <img
                    src={product.imgUrl}
                    className="card mt-5"
                    alt={product.productName}
                    style={{
                      height: "100px",
                      marginTop: "100px",
                    }}
                  />

                  <div className="card-body">
                    {/* Product Name */}
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
                      <h3 className="card-text text-dark mt-3">
                        <b>${product.price}</b>
                      </h3>
                    </div>
                  </div>
                </Link>

                {/* Add To Cart */}
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
                  onClick={() => handleAddToCart(product)}
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
      </div>
    </div>
  );
};

export default WatchPage;