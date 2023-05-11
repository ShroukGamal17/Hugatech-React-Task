import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import "./header.css";
import {
  SiLandrover,
  SiTiktok,
  SiMyanimelist,
  SiTrustedshops,
} from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
const Header = () => {
  return (
    <>
      <div style={{ height: "510px" }}>
        <div className="WaveBanner">
          <div className="container">
            <Navbar />

            <div className="row container">
              <div className="col-lg-4 p-5 text-light header-text">
                <h1>Get Your Payment Faster</h1>
                <p>
                  Blinqpay helps businesses in Africa get paid by anyone,
                  anywhere in the world
                </p>
                <button className="StartButton">Start Now</button>
              </div>
              <div className="text-light justify-content-around headericon">
      <h2>
        <SiLandrover />
      </h2>
      <h2>
        <SiMyanimelist />
      </h2>
      <h2>
        <SiTrustedshops />
      </h2>
      <h2>
        <RiLinkedinFill />
      </h2>
      <h2>
        <SiTiktok />
      </h2>
    </div>
              <div className="col-lg-8 col-sm-12 col-md-12 headerimagecontainer">
                <img className="headerimg" src="assets/screen.png" alt="" />
                <img className="headerimg" src="assets/Laptop.png" alt="" />
              </div>
            </div>
            <svg
              className="headersvg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#F7F3FA"
                fill-opacity="1"
                d="M0,192L80,213.3C160,235,320,277,480,272C640,267,800,213,960,170.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
