import React from "react";
import "../styles/home.css"; // applied to both the shop and product page

export default function Home() {
  return (
    <div>
      <div className="homeStartPicture">
        <img className="firstPicture" alt="" src="./images/first.jpg" />
        <div className="buttonContainer">
          <button className="btnOne">Online Courses</button>
          <button className="btnTwo">Destination Courses</button>
          <button className="btnThree">Meditation</button>
        </div>
        <div className="arrow">
          <span></span>
        </div>
      </div>
      <div className="homeSecondPicture">
        <div className="textAndPictureContainer">
          <img className="secondPicture" alt="" src="./images/second.jpg" />
          <div className="textContainer">
            <p>Let the sand touch you and the sun kiss you.</p>
            <p>Allow yoga to open you and people inspire you.</p>
            <p>Let the jungle heal you and the ocean cure you.</p>
          </div>
        </div>
      </div>
      <div className="subscribeSection">
        <h3 className="subscribeTitle">
          SUBSCRIBE TO OUR GOOD VIBES NEWSLETTER
        </h3>
        <p className="subscribep">
          Sign up with your email address ro recieve news and updates.
        </p>
        <form action="/action_page.php">
          <fieldset>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
            />
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <input className="submitButton" type="submit" value="Sign Up" />
          </fieldset>
        </form>
        <p className="subscribep">
          We respect your privacy and will only use your email to send you
          newsletters and updates about upcoming offerings.
        </p>
      </div>
    </div>
  );
}
