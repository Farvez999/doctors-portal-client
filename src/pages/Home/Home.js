import React from 'react';
import AppoinmentHome from './AppoinmentHome';
import Banner from './Banner';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <AppoinmentHome></AppoinmentHome>
        </div>
    );
};

export default Home;