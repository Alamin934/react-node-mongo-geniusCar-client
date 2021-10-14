import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div className="mt-5 pt-5">
            <h2>Booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;