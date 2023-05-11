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
      <div className="container">
        <div className="row Cards">
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
              <span style={{ color: "#5C0E62" }}>
                Learn more <HiArrowNarrowRight className="arrow" />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
