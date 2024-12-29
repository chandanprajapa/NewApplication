import React from "react";
 
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-brand" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit' }}>
            Navbar
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link active" aria-current="page" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit' }}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit' }}>
                  Link
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit' }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit' }}>
                      Action
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit' }}>
                      Another action
                    </button>
                  </li>
                  <li></li>
                  <li>
                    <button className="dropdown-item" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit' }}>
                      Something else here
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link disabled" aria-disabled="true" style={{ background: 'none', border: 'none', padding: 0, cursor: 'not-allowed', color: 'inherit' }}>
                  Disabled
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
 
