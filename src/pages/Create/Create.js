import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';

const Create = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmit = async data => {
        const item = {
            name: data.name,
            contact: data.contact,
            message: data.message,
        }
        fetch('https://serene-sea-89981.herokuapp.com/message', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    reset();
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-300" id='backgroundImage'>
            <div className="hero-content flex-col lg:flex-row" id='imageID'>
                <img src="https://i.ibb.co/N2Rpy4K/rquery2.webp" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                <h2 className='text-center text-5xl font-bold text-orange-400'>Get In Touch With Us</h2>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className='grid grid-cols-1 justify-items-center py-5'>

                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="name"
                                placeholder='Event Name'
                                {...register('eventName', {
                                    required: {
                                        value: true,
                                        message: 'Event name is Required'
                                    }
                                }
                                )}
                                className='input input-bordered w-full max-w-xs'
                            />
                            <label className='label'>
                                {errors.eventName?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.eventName.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="name"
                                placeholder='Name'
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Event name is Required'
                                    }
                                }
                                )}
                                className='input input-bordered w-full max-w-xs'
                            />
                            <label className='label'>
                                {errors.name?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="date"
                                placeholder='Starting Date'
                                className='input input-bordered w-full max-w-xs'
                                {...register('sDate', {
                                    required: {
                                        value: true,
                                        message: 'Starting Date is required'
                                    }
                                })}
                            />
                            <input
                                type="time"
                                placeholder='Time'
                                className='input input-bordered w-full max-w-xs'
                                {...register('time', {
                                    required: {
                                        value: true,
                                        message: 'Starting Date is required'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.sDate?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.sDate.message}</span>}
                                {errors.time?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.time.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="date"
                                placeholder='Ending Date'
                                className='input input-bordered w-full max-w-xs'
                                {...register('eDate', {
                                    required: {
                                        value: true,
                                        message: 'Ending Date is required'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.eDate?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.eDate.message}</span>}
                            </label>
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="text"
                                placeholder='Location'
                                className='input input-bordered w-full max-w-xs h-28'
                                {...register('location', {
                                    required: {
                                        value: true,
                                        message: 'Location is required'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.location?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.location.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                    <input 
                    type="file" 
                    placeholder='Image of Product'
                    className='input input-bordered w-full max-w-xs'
                    {...register('image', {
                        required: {
                            value: true,
                            message: 'Image is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.image?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.image.message}</span>}
                    </label>
                </div>
                        <input type="submit" value="SUBMIT" className='btn bg-red-800 w-full max-w-xs' />
                    </form>
                </div>
                <Link to='/event'><button>Next</button></Link>
                <Link to='/'><button>Home</button></Link>
            </div>
        </div>
    );
};

export default Create;