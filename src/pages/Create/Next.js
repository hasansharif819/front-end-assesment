import React, { useEffect, useState } from 'react';
import Event from './Event'

const Next = () => {
    const [events, setEvents] = useState([]);
    useEffect( () => {
        fetch('event.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    return (
        <div>
            {
                events.map(event => <Event 
                    key={event._id}
                    event={event}
                ></Event>)
            }
        </div>
    );
};

export default Next;