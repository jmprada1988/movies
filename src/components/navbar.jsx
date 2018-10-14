import React from "react";
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              App <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Movies
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Customer
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Rentals
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
