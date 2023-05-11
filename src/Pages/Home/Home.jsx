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
     <div className="Cards-Component">

     <Cards/>
     </div>
 <div>
     <Icons/>
     </div>
     <PaymentSection/>
     <PersonalPhotos/>
<PhotoGallery/>
    
<Customers/>

<Footer/>
     </div>
     </>
  );
};
export default Home;
