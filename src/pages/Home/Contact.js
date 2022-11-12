import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div className="hero mt-12" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <p className='text-primary'>Contact Us</p>
                    <h1 className="text-3xl text-white">Stay connected with us</h1>
                    <input type="text" placeholder="Email Address" className="mt-4 input input-bordered input-md w-full max-w-xs" />
                    <input type="text" placeholder="Subject" className="mt-4 input input-bordered input-md w-full max-w-xs" />
                    <textarea className="mt-4 textarea h-24 w-80" placeholder="Your message"></textarea>
                </div>
            </div>
        </div>
    );
};

export default Contact;