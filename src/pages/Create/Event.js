import React from 'react';
import birthday from '../../Assets/Birthday cake.png';
import './Event.css';
import {Link} from 'react-router-dom';

const Event = () => {
    return (
        <div className='BirthDayEvent'>
            <div>
                <img src={birthday} alt="" height={500} width={500}/>
            </div>
            <div>
                <p id='birthday'>Birthday Bash</p>
                <p id='hosted'>Hosted by Elysia</p>
                <span>
                <p className='event'><strong>18 August 6:00PM</strong></p> 
                <p className='eventTo'>to <strong>19 August 1:00PM</strong> UTC +10</p>
                </span>
                <p className='event'>Street name</p>
                <p className='eventTo'>Suburb, State, Postcode</p>
                <Link to='/'><button>Home</button></Link>
            </div>
        </div>
    );
};

export default Event;