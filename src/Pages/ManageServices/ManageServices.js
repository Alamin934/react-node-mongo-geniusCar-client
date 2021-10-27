import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://protected-springs-37614.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDeleteService = id => {
        const proceed = window.confirm('Are you sure, You want to delete this Service');
        if (proceed) {
            fetch(`https://protected-springs-37614.herokuapp.com/services/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices);
                    }
                })
        }
    }
    return (
        <div className="mt-5 pt-5">
            <h2>This is Manage Services Page</h2>
            <div className="service-container pt-3">
                {
                    services.map(service =>
                        <div
                            key={service._id}
                            className="service">
                            <img src={service.img} alt="" />
                            <div className="p-3">
                                <h3>{service.name}</h3>
                                <h5>Price: {service.price}</h5>
                                <p className="px-3">{service.description}</p>
                                <button className="btn btn-danger"
                                    onClick={() => handleDeleteService(service._id)}
                                >Delete</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;