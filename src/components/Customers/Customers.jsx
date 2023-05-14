import React,{ useEffect } from 'react';
import { Carousel } from 'bootstrap';
import "./customers.css";

const Customers = () => {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExampleAutoplaying');
    const carousel = new Carousel(carouselElement, {
      interval: 3000,
      pause: false
    });
    return () => {
      carousel.pause();
    };
  }, []);
  return (
    <>
      <div className="Customers-Section">
        <div className="triangel-svg">
          <svg viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,320L1440,0L1440,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="main ">
          <div className="left">
          <div className="Paragraaph" >
              <h2
                style={{ color: "#ffffff" }}
              >
                What Our  <span style={{ color: "#591567" }}>Customers</span> Are saying 
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
      <div className="responsive-slider">
      <div className="" >
              <h2
                style={{ color: "#ffffff" }}
              >
                What Our  <span style={{ color: "#591567" }}>Customers</span> Are saying 
              </h2>
            </div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/customer1.png" className="d-block w-30 rounded-circle mx-auto" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="assets/customer2.png" className="d-block w-30 rounded-circle mx-auto" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="assets/customer3.png" className="d-block w-30 rounded-circle mx-auto" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="assets/customer4.png" className="d-block w-30 rounded-circle mx-auto" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="assets/customer5.png" className="d-block w-30 rounded-circle mx-auto" alt="..."/>
          </div>
          
        </div>
        <div>
        <p className="text-light">
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem adipiscing inw
              </p>
      <div className="customer-title">
                  <h4>LEO MAYNUS</h4>
                  <h5>CEO at Softpanda</h5>
                </div>
                </div>
      </div>
   
    </div>
    </>
  );
};
export default Customers;
