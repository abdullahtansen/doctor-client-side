import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import ContactForm from './ContactForm/ContactForm';
import ContactUs from './ContactUs/ContactUs';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import Terms from './Terms/Terms';


const Home = () => {
    return (
        <div>
         <Header></Header>
         <Banner></Banner>
         <ContactUs></ContactUs>
          <Services></Services>
          <Terms></Terms>
          <AppointmentBanner></AppointmentBanner>
          <Reviews></Reviews>
          <ContactForm></ContactForm>
          <Footer></Footer>
        </div>
    );
};

export default Home;