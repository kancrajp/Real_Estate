import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Have Questions ?</h1>
              <p>We'll help you to get properties</p>
            </div>
            .<button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img className="footer-img" src="../images/logo.jpg" alt="" />
              <h2>Need Help With Anything?</h2>
              <p>Get updates, hot deals & discounts every month</p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2022 Real Estate, Designd By Kashish Rajput</span>
      </div>
    </>
  );
};

export default Footer;
