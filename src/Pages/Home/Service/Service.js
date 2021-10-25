import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="p-3">
                <h3>{name}</h3>
                <h5>Price: {price}</h5>
                <p className="px-3">{description}</p>
                <Link to={`/booking/${_id}`}>
                    <Button variant="warning">Book {name.toLowerCase()}</Button>
                </Link>
            </div>
        </div>
    );
};

export default Service;