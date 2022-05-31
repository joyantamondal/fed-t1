import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      {/* <a class="navbar-brand" href="#">Logo</a> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ADVERTISERS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PUBLISHERS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">INFLUENCERS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">AD FORMATS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BLOG</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACT US</a>
          </li>
        </ul>
        <span class="navbar-text">
        <div class="btn-group LoginSignup shadow" role="group" aria-label="Basic example">
  <button type="button" class="btn light btn-rounded login" href="#">LOGIN</button>
  <button type="button" class="btn light btn-rounded signup" href="#">SIGN UP</button>
</div>
        </span>
      </div>
    </div>
  </nav>
    );
};

export default NavBar;












