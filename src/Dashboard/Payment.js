import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const booking = useLoaderData()
    console.log(booking)

    return (
        <div>
            <h3 className="text-3xl mb-5">Payment {booking.treatment}</h3>
            <p className="text-xl">Please pay <strong>${booking.price}</strong> for your appointment on {booking.appointmentDate} at {booking.slot}</p>
        </div>
    );
};

export default Payment;