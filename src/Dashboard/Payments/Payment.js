import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { info } from 'daisyui/src/colors';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Lodding from '../../pages/Shared/Lodding';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51M6KI7Jb9nyriLWogAqiAzC5pxaHsA2MBPm7LU29gtqREjttHS4lDKgwuWPogAICZ4iksV8tbvF6RaZiGjMDGwrP00NisyJl3r');

const Payment = () => {

    const navigation = useNavigate()

    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;


    if (navigation.state === "loading") {
        return <Lodding></Lodding>
    }

    return (
        <div>
            <h3 className="text-3xl mb-5">Payment {treatment}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;