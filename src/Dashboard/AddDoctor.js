import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleAddDoctor = data => {
        console.log(data)
    }


    return (
        <div className='w-96 p-7'>
            <h3 className="text-3xl mb-5">Add Doctor</h3>

            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", { required: "Name Address is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: "Email Address is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick a Specialty</option>
                        <option>Svelte</option>
                        <option>Vue</option>
                        <option>React</option>
                    </select>
                </div>


                <input className='btn btn-accent w-full text-white mt-5' value="Add Doctor" type="submit" />
                {/* {
                        signUpError && <p className='text-red-500'>{signUpError}</p>
                    } */}

            </form>
        </div>
    );
};

export default AddDoctor;