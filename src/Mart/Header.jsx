import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartIcon = useSelector((state) => state.cartIcon);

  return (
    <div className="Container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-light">
        <h2>
          <i className="bi bi-bag-fill ms-5"></i>
        </h2>

        <div className="container-fluid text-dark">
          <Link className="navbar-brand text-dark" to="/">
            <h2>Mart</h2>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="me-5">
            <div
              className="collapse navbar-collapse"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/"
                  >
                    <h5>Home</h5>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/Shop"
                  >
                    <h5>Shop</h5>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/Cart"
                  >
                    <h5>Cart</h5>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/SignUp"
                  >
                    <h5>
                      <i className="bi bi-person-fill"></i>
                    </h5>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active text-dark font"
                    aria-current="page"
                    to="/CartIcon"
                  >
                    <h5>
                      <i className="bi bi-cart-fill"></i>{" "}
                      <sup className="bg-danger p-1 rounded-circle">
                        {cartIcon.length}
                      </sup>
                    </h5>
                  </Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};