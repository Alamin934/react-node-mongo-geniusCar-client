import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="mt-5 pt-5">
            <h2>Please Add your service</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto ">
                    <input className="form-control form-control-lg mb-3" {...register("img")} placeholder="Image Url" />

                    <input className="form-control form-control-lg mb-3" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                    <input className="form-control form-control-lg mb-3" type="number" {...register("price")} placeholder="Price" />

                    <textarea rows="4" className="form-control form-control-lg mb-3" {...register("description")} placeholder="Description" />

                    <input className="btn btn-dark btn-lg w-100" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;