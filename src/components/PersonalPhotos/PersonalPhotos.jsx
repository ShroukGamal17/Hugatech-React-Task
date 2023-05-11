import React from "react";
import "./personalPhotos.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const PersonalPhotos = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6">
            <div className="PersonalPhotos">
              <img src="assets/person1.png" alt="Image1" className="person1" />
              <img src="assets/person2.png" alt="Image2" className="person2" />
              <img src="assets/person3.png" alt="Image3" className="person3" />
              <img src="assets/person4.png" alt="Image4" className="person4" />
              <img src="assets/person5.png" alt="Image5" className="person5" />
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-around align-items-center">
            <div className="Parag2">
              <small className="Transaction">MOBILE TRANSACTION</small>
              <h2 className="Smart">
                Smart Mobile
                <span style={{ color: "#5C0E62" }}> Banking</span>{" "}
              </h2>
              <p className="paragraph2">
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem adipiscing inw
              </p>
              <span className="LearnMore">
                Learn more <HiArrowNarrowRight className="arrow" />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PersonalPhotos;
