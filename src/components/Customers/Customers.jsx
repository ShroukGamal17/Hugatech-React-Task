import React from "react";
import "./customers.css";

const Customers = () => {
  return (
    <>
      <div className="Customers-Section">
        <div className="triangel">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f7f3fa"
              fill-opacity="1"
              d="M0,320L1440,0L1440,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="main">
          <div className="left">
          <div className="Paragraaph" >
              <h2
               
                style={{ color: "#ffffff", marginTop: "200px" }}
              >
                What Our  <span style={{ color: "#591567" }}>Customer</span> Are saying 
              </h2>
              <p className="text-light">
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem adipiscing inw
              </p>
            </div>
          </div>

          <div className="customers">
            <div className="customer one">
              <img className="" src="assets/customer1.png" alt="" />
              <div className="customer-info">
                <p className="customer-description">
                  Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                  sem adipiscing inw
                </p>
                <div className="customer-title">
                  <h4>LEO MAYNUS</h4>
                  <h6>CEO at Softpanda</h6>
                </div>
              </div>
            </div>

            <div className="customer two">
              <img className="" src="assets/customer2.png" alt="" />
              <div className="customer-info">
                <p className="customer-description">
                  Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                  sem adipiscing inw
                </p>
                <div className="customer-title">
                  <h4>LEO MAYNUS</h4>
                  <h6>CEO at Softpanda</h6>
                </div>
              </div>
            </div>

            <div className="customer three">
              <img className="" src="assets/customer3.png" alt="" />
              <div className="customer-info">
                <p className="customer-description">
                  Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                  sem adipiscing inw
                </p>
                <div className="customer-title">
                  <h4>LEO MAYNUS</h4>
                  <h6>CEO at Softpanda</h6>
                </div>
              </div>
            </div>

            <div className="customer four">
              <img className="" src="assets/customer4.png" alt="" />
              <div className="customer-info">
                <p className="customer-description">
                  Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                  sem adipiscing inw
                </p>
                <div className="customer-title">
                  <h4>LEO MAYNUS</h4>
                  <h6>CEO at Softpanda</h6>
                </div>
              </div>
            </div>

            <div className="customer five">
              <img className="" src="assets/customer5.png" alt="" />
              <div className="customer-info">
                <p className="customer-description">
                  Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                  sem adipiscing inw
                </p>
                <div className="customer-title">
                  <h4>LEO MAYNUS</h4>
                  <h6>CEO at Softpanda</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Customers;
