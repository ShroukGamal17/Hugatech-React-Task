import React from "react";
import "./cards.css";
import { Card } from "react-bootstrap";
import {
  IoBodyOutline,
  IoCashOutline,
  IoReceiptOutline,
  IoAnalyticsOutline,
} from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";

const Cards = () => {
  return (
    <>
      <div className="Cards-Section">
        <div className="row container Cards">
          <div className="col-lg-8 d-flex justify-content-evenly align-items-center text-secondary row CardsSection">
            <div className="col-lg-4 FirstSubCol ">
              <Card className="card ">
                <Card.Body className="cardBody">
                  <h5 className="icons">
                    <IoBodyOutline />
                  </h5>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <b> Easy Access</b>
                  </Card.Text>
                  <Card.Text>
                    Now track all of your transaction easily.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="  card">
                <Card.Body className="cardBody">
                  <h5 className="icons">
                    <IoAnalyticsOutline />
                  </h5>
                  <Card.Text>
                    <b> Use You Connect</b>
                  </Card.Text>
                  <Card.Text>
                    Now track all of your transaction easily.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 SecondSubCol ">
              <Card className="card">
                <Card.Body className="cardBody">
                  <h5 className="icons">
                    <IoCashOutline />
                  </h5>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <b> Cashflow Visiblity</b>
                  </Card.Text>
                  <Card.Text>
                    Now track all of your transaction easily.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body className="cardBody">
                  <h5 className="icons">
                    <IoReceiptOutline />
                  </h5>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <b> Manage Invoicing</b>
                  </Card.Text>
                  <Card.Text>
                    Now track all of your transaction easily.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <h1 className="Share">
                Make & Share <span style={{ color: "#5C0E62" }}> Payments</span>{" "}
                With Community
              </h1>

              <p className="mini-paragraph">
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem adipiscing inw
              </p>
              <span className="LearnMore">
                Learn more <HiArrowNarrowRight className="arrow" />{" "}
              </span>
            </div>
          </div>
          
        </div>
        <div className="CardsCurve">
      <svg  viewBox="0 0 1440 320">
        <path
          fill="white"
          fill-opacity="1"
          d="M0,320L80,304C160,288,320,256,480,213.3C640,171,800,117,960,133.3C1120,149,1280,235,1360,277.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      </div>
      </div>
     
    </>
  );
};
export default Cards;
