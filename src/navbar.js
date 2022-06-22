import React from "react";
import "../src/App.css";

function navbar() {
    return(
    <div>
        <nav className = "navbar fixed-top ">
     <div className = "container-fluid">
       <button className = "navbar-toggler ms-2 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
         <span className = "navbar-toggler-icon"></span>
       </button> 
       <a className = "navbar-brand me-auto headline" href="#">AdDraw</a>
       <div className = "offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
         <div className = "offcanvas-header">
           <h5 className = "offcanvas-title headline" id="offcanvasNavbarLabel">AdDraw</h5>
           <button type="button" className = "btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div className = "offcanvas-body">
           <ul className = "navbar-nav justify-content-end flex-grow-1 pe-3">
             <li className = "nav-item ">
               <a className = "nav-link active home" aria-current="page" href="#"> <i className = "fas fa-home"></i>Home</a>
             </li>
             <li className = "nav-item">
                <a className = "nav-link active"><i className = "fas fa-user"> </i>Profile</a>
             </li>
             <li className = "nav-item">
                <a className = "nav-link active"><i className = "fas fa-address-card"> </i>About</a>
             </li>
             <li className = "nav-item">
                <a className = "nav-link active"><i className = "fas fa-address-book"> </i>Contact</a>
             </li>
           </ul>
           <div className = "social_media">
              <a href="#"><i className = "fab fa-facebook-f"></i></a>
              <a href="#"><i className = "fab fa-twitter"></i></a>
              <a href="#"><i className = "fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
       </div>
      </nav>
    </div>
    );
}

export default navbar;