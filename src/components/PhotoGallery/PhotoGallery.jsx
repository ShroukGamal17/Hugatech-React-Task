import React from "react";
import "./photoGallery.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const PhotoGallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="gallery-left ">
          <small className="Secure">SECURE TRANSACTION</small>
          <h2 className="Savings">
            Safe Yours <span style={{ color: "#5C0E62" }}> Savings </span>{" "}
          </h2>
          <p className="paragraph">
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            adipiscing inw
          </p>
          <span className="LearnMore">
            Learn more <HiArrowNarrowRight className="arrow" />{" "}
          </span>
        </div>

        <div className="gallery-right">
          <div className="first-row">
            <img src="assets/img1.png" alt="" className="first" />
            <img src="assets/img2.png" alt="" className="second" />
            <img src="assets/img3.png" alt="" className="third" />
          </div>

          <div className="second-row">
            <img src="assets/img4.png" alt="" className="first" />
            <img src="assets/img5.png" alt="" className="second" />
            <img src="assets/img6.png" alt="" className="third" />
            <img src="assets/img7.png" alt="" className="fourth" />
          </div>

          <div className="third-row">
            <img src="assets/img8.png" alt="" className="first" />
            <img src="assets/img9.png" alt="" className="second" />
            <img src="assets/img10.png" alt="" className="third" />
          </div>
        </div>
      </div>
    </>
  );
};
export default PhotoGallery;
