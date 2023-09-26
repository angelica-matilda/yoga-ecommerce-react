import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="flex">
        {/* column 1*/}
        <div className="col">
          <h4>YOGA WITH US</h4>
          <ul className="list-unstyled">
            <li>342-420-6969</li>
            <li>New York, USA</li>
            <li>123 Street South North</li>
          </ul>
        </div>
        {/* column 2*/}
        <div className="col">
          <h4>STUFF</h4>
          <ul className="list-unstyled">
            <li>First thing</li>
            <li>Second thing</li>
            <li>Third thing</li>
          </ul>
        </div>
        {/* column 3*/}
        <div className="col">
          <h4>YOGA</h4>
          <ul className="list-unstyled">
            <li>Yin</li>
            <li>Meditation</li>
            <li>Jungle Dance</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-small">
          &copy;{new Date().getFullYear()} EXHALE YOGA | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  );
}
