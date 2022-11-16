import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal';
import AppoinmentOption from './AppoinmentOption';
import { format } from 'date-fns'
import { useQuery } from '@tanstack/react-query';

const AvailableAppoinment = ({ selectedDate }) => {
    console.log(selectedDate)

    const [treatment, setTreatment] = useState(null);

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())
    })


    return (
        <div className='mt-24'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
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
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;