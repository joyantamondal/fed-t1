import React from 'react';
import './TopNav.css';


const TopNav= () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
    <div class="navbar-top container ">
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <a class="navbar-brand" href="#">LOGO</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
        </ul>
        <span class="navbar-text">
        <span>Bn </span> /
        <span> En </span>
        </span>
      </div>
    </div>
  </nav>
    );
};

export default TopNav;












