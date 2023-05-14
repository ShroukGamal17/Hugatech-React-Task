import React from "react";
import Header from "../../components/Header/Header";
import "./home.css";
import Cards from "../../components/Cards/Cards";
import Icons from "../../components/Icons/Icons";
import PaymentSection from "../../components/PaymentSection/PaymentSection";
import PersonalPhotos from "../../components/PersonalPhotos/PersonalPhotos";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import Customers from "../../components/Customers/Customers";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Header />
        <Cards />
        {/* <svg className="CardsCurve" width="1500" height="1982" viewBox="0 0 1500 1982" fill="none">
<path d="M833.175 12.5232C1259.08 -58.3726 1441.67 199.404 1500.5 337.153L1500.5 1703.6L-1.50037 1981.47L-1.49961 639.972L-1.50029 160.487C129 140.705 407.265 83.419 833.175 12.5232Z" fill="white"/>
</svg> */}
        <Icons />
        <PaymentSection />
        <PersonalPhotos />
        <PhotoGallery />
        <Customers />
        <Footer />
      </div>
    </>
  );
};
export default Home;
