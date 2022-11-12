import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {


    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]


    return (
        <div className='mt-24'>
            <div>
                <h4 className='text-center text-base text-primary'>OUR SERVICES</h4>
                <h4 className='text-3xl text-center text-base text-black'>Services We Provide</h4>
            </div>
            <div className='grid mt-4 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;