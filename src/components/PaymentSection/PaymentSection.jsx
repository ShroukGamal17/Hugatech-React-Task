import React from "react";
import "./paymentsection.css";
import { HiArrowNarrowRight } from "react-icons/hi";
const PaymentSection = () => {
  return (
    <div className="bg-white">
      <div className="container-fluid row Payment-section">
        <div className="col-lg-6 ">
          <div className=" Pragraph-Container">
            <small className="Paragrph-Title">CREDIT CARD</small>
            <h2 className="Paragraph-Head">
              Payment{" "}
              <span style={{ color: "#5C0E62" }}>
                <br /> Gets Easier
              </span>{" "}
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

        <div className="col-lg-6 reArrange">
          <img src="assets/iPad.png" className="iPadImg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default PaymentSection;
