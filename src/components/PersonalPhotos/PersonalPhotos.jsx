import React from "react";
import "./personalPhotos.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const PersonalPhotos = () => {
  return (
    <>
      <div className="container row Personal-Sections ">
        <div className="col-lg-6 row personal-images ">
          <div className="col-lg-4 firstperson">
            <img src="assets/person1.png" alt="Image1" className="person1" />
          </div>
          <div className="col-lg-4 sub-col middle-photos">
            <img src="assets/person2.png" alt="Image2" className="person2" />
            <img src="assets/person3.png" alt="Image3" className="person3" />
          </div>
          <div className="col-lg-4 sub-col last-photos">
            <img src="assets/person4.png" alt="Image4" className="person4" />
            <img src="assets/person5.png" alt="Image5" className="person5" />
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-around align-items-center">
          <div className="Pragraph-Container">
            <small className="Paragrph-Title">MOBILE TRANSACTION</small>
            <h2 className="Paragraph-Head">
              Smart Mobile
              <span style={{ color: "#5C0E62" }}> Banking</span>{" "}
            </h2>
            <p className="Paragaph">
              Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
              adipiscing inw
            </p>
            <span className="LearnMore">
              Learn more <HiArrowNarrowRight className="arrow" />{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default PersonalPhotos;
