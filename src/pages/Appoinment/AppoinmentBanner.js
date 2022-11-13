import React from 'react';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns'

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <header>
            <div>
                <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                        <div>
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                            <p>You have selected date: {format(selectedDate, 'PP')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;