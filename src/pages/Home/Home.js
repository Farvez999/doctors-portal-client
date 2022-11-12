import React from 'react';
import AppoinmentHome from './AppoinmentHome';
import Banner from './Banner';
import Contact from './Contact';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <AppoinmentHome></AppoinmentHome>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;