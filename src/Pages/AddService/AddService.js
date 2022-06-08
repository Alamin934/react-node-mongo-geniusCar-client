import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service Added Successfully');
                }
            })
        reset();
    };

    return (
        <div className="mt-5 pt-5">
            <h2>Please Add your service</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto ">
                    <input className="form-control form-control-lg mb-3" {...register("img", { required: true })} placeholder="Image Url" />

                    <input className="form-control form-control-lg mb-3" {...register("name", { required: true })} placeholder="Name" />

                    <input className="form-control form-control-lg mb-3" type="number" {...register("price", { required: true })} placeholder="Price" />

                    <textarea rows="4" className="form-control form-control-lg mb-3" {...register("description", { required: true })} placeholder="Description" />

                    <input className="btn btn-dark btn-lg w-100" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;