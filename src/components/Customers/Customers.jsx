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
        <div className='LeftSide'>
        <svg width="120" height="650" viewBox="0 0 161 965" fill="none">
<path opacity="0.3" d="M138.022 774.184C101.436 866.107 -4.56597 940.788 -59 964.47V0.470459C37.3391 289.344 226.568 551.716 138.022 774.184Z" fill="#E4D6EE"/>
</svg>
        </div>
          <div className="left">
            
          <div className="Paragraaph" >
          <svg className="ParagraphSvg" width="80" height="81" viewBox="0 0 80 81" fill="none">
<path d="M76.657 65.102C82.5581 37.2638 77.7539 18.9029 74.6812 13.2739L74.6699 13.2534L74.6609 13.2318C73.4091 10.2478 70.5245 6.1211 65.9615 3.48799C61.6727 1.01312 55.8708 -0.160957 48.4743 2.22063L48.4788 2.2339C21.519 11.3419 8.1688 24.8319 4.89128 30.344L4.87932 30.3642L4.86535 30.383C2.93572 32.9806 0.854889 37.5654 0.914456 42.8333C0.970545 47.7937 2.92388 53.3956 8.767 58.554L8.76956 58.5509C30.3376 76.6303 48.7051 80.9383 55.0985 80.8577L55.1218 80.8574L55.145 80.8595C58.3545 81.1471 63.3436 80.5346 67.8245 77.7583C71.6319 75.3992 75.0958 71.4643 76.7877 65.1297L76.657 65.102Z" fill="#F7F3FA"/>
</svg>
              <h2 className='ParagraphHeader'
                style={{color: "#ffffff" }} >
                What Our  <span style={{ color: "#591567" }}>Customers</span> Are saying 
              </h2>
              <p className="text-light customers-Paragraph">
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem adipiscing inw
              </p>
            </div>
          </div>

          <div className="customers">
          <div className='RightSideDecoration'>
            <svg width="180" height="750" viewBox="0 0 161 965" fill="none">
<path opacity="0.3" d="M138.022 774.184C101.436 866.107 -4.56597 940.788 -59 964.47V0.470459C37.3391 289.344 226.568 551.716 138.022 774.184Z" fill="#E4D6EE"/>
</svg>
</div>
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
