import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna
            vel ante suscipit faucibus. Donec ultricies, ipsum vel accumsan
            ultricies, velit libero consectetur sapien, ac posuere nisl libero
            eget dolor. Suspendisse varius lectus id enim congue dapibus. Proin
            auctor laoreet arcu, eget blandit velit auctor sit amet. Nullam
            mattis, magna in efficitur vehicula, tortor dolor venenatis nibh, id
            vulputate risus ex a arcu.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna
            vel ante suscipit faucibus. Donec ultricies, ipsum vel accumsan
            ultricies, velit libero consectetur sapien, ac posuere nisl libero
            eget dolor. Suspendisse varius lectus id enim congue dapibus. Proin
            auctor laoreet arcu, eget blandit velit auctor sit amet. Nullam
            mattis, magna in efficitur vehicula, tortor dolor venenatis nibh, id
            vulputate risus ex a arcu.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">Wenz Store</div>
          <span className="copyright">© 2023 | All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/images/1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
