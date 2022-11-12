import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal';
import AppoinmentOption from './AppoinmentOption';

const AvailableAppoinment = () => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div className='mt-24'>
            <p className='text-center text-primary font-bold'>Available Appointments on April 30, 2022</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(appointmentOption => <AppoinmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppoinmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;